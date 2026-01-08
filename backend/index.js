const express =require ('express');
const dotenv =require ('dotenv');
const { connectdb } =require ('./Database/db.js');

dotenv.config();

const app=express();

app.use(express.json());
const port=process.env.port ||4000;

const  userroutes =require ('./routes/user.js');

app.use('/api/user',userroutes);


app.listen(port,()=>{
    console.log(`server is running at ${port}`);
    connectdb();
})