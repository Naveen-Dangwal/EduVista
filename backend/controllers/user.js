const { User } =require( "../models/user.js");
const bcrypt =require ("bcrypt");
const jwt =require ("jsonwebtoken");
const sendMail =require ("../middlewares/sendMail.js");
const Trycatch =require ("../middlewares/Trycatch.js");

const register = Trycatch(async (req, res) => {
  const { email, name, password } = req.body;
  console.log({ email, name, password })

  let user = await User.findOne({ email });

  console.log(user)

  if (user)
    return res.status(400).json({
      message: "user already exists",
    });

  const hashpassword = await bcrypt.hash(password, 10);

  user = {
    name,
    email,
    password: hashpassword,
  };

  const otp = Math.floor(Math.random() * 1000000);
  const activationToken = jwt.sign(
    {
      user,
      otp,
    },
    process.env.Activation_Secret,
    {
      expiresIn: "5m",
    }
  );
  const data = {
    name,
    otp,
  };
  await sendMail(email, "EduVista", data);
  res.status(200).json({
    meassage: "otp has sent to your mail",
    activationToken,
  });
});


const verifyuser = Trycatch(async (req, res) => {
  const { otp, activationToken } = req.body;
  const verify = jwt.verify(activationToken, process.env.Activation_Secret);
  if (!verify)
    return res.status(400).json({
      message: "otp expired",
    });
  if (verify.otp !== otp)
    return res.status(400).json({
      message: "wrong otp",
    });
  await User.create({
    name: verify.user.name,
    email: verify.user.email,
    password: verify.user.password,
  });
  res.json({
    message: "User Registered",
  });
});

module.exports={register,verifyuser};