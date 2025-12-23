import pic1 from "../assets/pic1.jpeg";
const AboutUs = () => {
  return (
    <>
      <section className="" id="about" style={{ paddingTop: "100px" }}>
        <div className="container">
          <div>
            <h1 className="text-center mb-2">
              About <span style={{ color: "purple" }}>Us</span>
            </h1>
            <hr className="w-25 m-auto"></hr>
          </div>
          <div className="row mt-5">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
              <h3 style={{ color: "purple" }}>
                Welcome to EduVista – Your Gateway to Lifelong Learning!
              </h3>
              <p className="fs-6">
                At EduVista, we believe that education is the foundation for a
                brighter future. Our mission is simple: to make high-quality,
                accessible learning resources available to learners of all ages,
                backgrounds, and aspirations. Whether you are a student seeking
                to expand your knowledge, a professional looking to upskill, or
                a lifelong learner driven by curiosity, EduVista is here to
                guide you every step of the way.
              </p>
              <p className="fs-6">
                <h4 style={{ color: "purple" }}>Our Vision</h4>
                To revolutionize education by providing innovative, flexible,
                and engaging learning experiences that empower individuals to
                reach their full potential.
              </p>
              <p className="fs-6">
                <h4 style={{ color: "purple" }}>Our Mission</h4>
                We are committed to offering an extensive range of courses,
                tutorials, and interactive resources across various subjects –
                from academic disciplines to personal development, career
                growth, and beyond. EduVista is designed to make learning more
                personalized, accessible, and enjoyable, allowing users to learn
                at their own pace and on their own terms.
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 m-auto text-end">
              <img
                src={pic1}
                className="aboutimg img-fluid img-thumbnail"
                alt=""
                style={{ height: "480px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
