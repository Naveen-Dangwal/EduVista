import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.png'
import './Services.css'
const Services = () => {
  return (
    <section className="" id="services" style={{padding:"100px"}}>
      <div className="container">
        <div>
          <h1 className="text-center mb-2">
            Our <span style={{color:"purple"}}>Services</span>
          </h1>
          <hr className="w-25 m-auto "></hr>
        </div>

        <div className="row mt-5">

          < div className="col-12 col-sm-12 col-md-6 col-lg-6 m-auto ">
          <div className="card">
          <div className="card-body">
                <h3 className="card-title text-center" style={{color:"purple"}}>
                  Courses
                </h3>
                <img
                  src={pic3}
                  className="pic3 img-fluid img-thumbnail"
                  alt=""
                />
               
                <p className="card-text ">
                Unlock the power of learning with our beginner-friendly course. Whether you are student to programming or looking to expand your skill set, this course will provide you with a solid foundation , setting you up for learning and more.This course is ideal for beginners with no prior coding experience. If you are interested in learning this course will give you the foundational knowledge you need to get started.
                </p>
                <a href="#" className="btn btn-primary">
                  Click Here
                </a>
                </div>
                </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6 m-auto">
            <div className="card">
              <div className="card-body">
              <h3 className="card-title text-center" style={{color:"purple"}}>
                  Resume Builder
                </h3>
                <img
                  src={pic4}
                  className="pic4 img-fluid img-thumbnail"
                  alt=""
                />
                <p className="card-text">
                Our intuitive, user-friendly Resume Builder is designed to help you create a polished, job-winning resume in just a few simple steps. Whether you are entering the job market for the first time, switching careers, or looking to update your current resume, our tool will guide you through the entire process—no design skills or professional writing experience required!


                </p>
                <a href="#" className="btn btn-primary">
                  Click Here
                </a>
              </div>
            </div>
          </div>


          

        </div>
      </div>
    </section>
  )
}

export default Services
