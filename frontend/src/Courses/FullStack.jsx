import { GoCheck } from "react-icons/go";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { FaDotCircle } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";


const FullStack = () => {
  return (
    <>
      <div
        className="  d-block w-100 h-50 "
        style={{
          backgroundColor: "pink",
          marginTop: "10px",
          textAlign: "center",
          color: "black",
          padding:"100px"
        }}
      >
        <h1>The Complete 2024 Web Development Bootcamp</h1>
        <h5>
        Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps
        </h5>
        <p>Last updated 9/2024EnglishEnglish, Arabic [Auto]</p>
      </div>

      <div
        className="container  p-4"
        style={{ border: "1px solid grey", marginTop: "80px" }}
      >
        <h4 style={{ marginLeft: "50px" }}>
          <b>What you'll learn</b>
        </h4>
        <div className="row" style={{ marginLeft: "40px", marginTop: "20px" }}>
          <div className="col">
            <p>
              <GoCheck style={{ marginRight: "20px" }} />
              Build 16 web development projects for your portfolio.
            </p>
            <p>
              <GoCheck style={{ marginRight: "20px" }} />
              After the course you will be able to build ANY website you want.
            </p>
            <p>
              <GoCheck style={{ marginRight: "20px" }} />
              Work as a freelance web developer.
            </p>
            <p>
              <GoCheck style={{ marginRight: "20px" }} />
              Master backend development with Node
            </p>
          </div>
          <div className="col">
            <p>
              <GoCheck style={{ marginRight: "20px" }} />
              Learn the latest technologies, including Javascript, React,and Node.
            </p>
            <p>
              <GoCheck style={{ marginRight: "20px" }} />
              Build fully-fledged websites and web apps for your startup or business.
            </p>
            <p>
              <GoCheck style={{ marginRight: "20px" }} />
              Master frontend development with React
            </p>
            <p>
              <GoCheck style={{ marginRight: "20px" }} />
              Learn professional developer best practices.
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{marginTop:"80px"}}>
        <h2 >Course Content</h2>
      <div className="accordion" id="accordionExample"style={{marginTop:"20px"}}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor:"pink"}}>
        <b>Introduction</b>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">

<div className="row">
    <div className="col">
        <p><a href="https://youtu.be/HcOc7P5BMi4?si=btvE1NmamJUGiD3l" target="_blank"><MdOutlineOndemandVideo style={{marginRight:"20px"}}/> Welcome to HTML!</a></p>
        <p><a href="https://youtu.be/eILUmCJhl64?si=J9k-Piy6wzVFcuQT" target="_blank"><MdOutlineOndemandVideo style={{marginRight:"20px"}}/>Welcome to React</a></p>
        <p><a href="https://youtu.be/BLl32FvcdVM?si=6hcnoSvI-_f9w7Ar" target="_blank"><MdOutlineOndemandVideo style={{marginRight:"20px"}}/>Welcome to Node JS</a></p>
        <p><a href="https://youtu.be/7H_QH9nipNs?si=NRPsNXnLXrQQcxvA" target="_blank"><MdOutlineOndemandVideo style={{marginRight:"20px"}}/>Welcome to Express JS</a></p>
        <p><a href="https://youtu.be/J6mDkcqU_ZE?si=ysOhIUEl1b0EA9XN" target="_blank"><MdOutlineOndemandVideo style={{marginRight:"20px"}}/>Welcome to MongoDB</a></p>
    </div>
    <div className="col" style={{textAlign:"right"}}>
        <p>12:12</p>
        <p>05.52</p>
        <p>17.45</p>
        <p>21.22</p>
        <p>23.18</p>
    </div>
   
</div>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <b>Installing Requried  Software</b>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <a href="https://youtu.be/0yn7irrHzM8?si=49sE4RSoi2ndZ5vz" target="_blank"><MdOutlineOndemandVideo style={{marginRight:"20px"}}/>How to install the software</a>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <b>Web Development</b>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p><a href="https://youtu.be/tVzUXW6siu0?si=i0LK1yGISuLBL5OB" target="_blank"><MdOutlineOndemandVideo style={{marginRight:"20px"}}/>Full Course</a></p>
      </div>
    </div>
  </div>
</div>
      </div>

      <div className="container" style={{marginTop:"80px"}}>
        <h2 style={{backgroundColor:"pink",padding:"3px",borderRadius:"10px"}}>Requirments</h2>
        <p style={{marginTop:"20px"}}><FaDotCircle style={{marginRight:"20px",color:"lightpink"}} />No programming experience needed - I'll teach you everything you need to know</p>
        <p><FaDotCircle style={{marginRight:"20px",color:"lightpink"}} />A computer with access to the internet</p>
        <p><FaDotCircle style={{marginRight:"20px",color:"lightpink"}} />No paid software required</p>
        <p><FaDotCircle style={{marginRight:"20px",color:"lightpink"}} />I'll walk you through, step-by-step how to get all the software installed and set up</p>

      </div>

      <div className="container" style={{marginTop:"80px"}}>
        <h2 style={{backgroundColor:"pink",padding:"3px",borderRadius:"10px"}}>Description</h2>
        <p style={{marginTop:"20px"}}>Welcome to the Complete Web Development Bootcamp, the only course you need to learn to code and become a full-stack web developer. With 150,000+ ratings and a 4.8 average, my Web Development course is one of the HIGHEST RATED courses in the history of EduVista! </p>

        <p>At 62+ hours, this Web Development course is without a doubt the most comprehensive web development course available online. Even if you have zero programming experience, this course will take you from beginner to mastery. Here's why:</p>
        <p><RxDotFilled style={{marginRight:"10px",color:"pink"}}/>The course is taught by the lead instructor at the App Brewery, London's leading in-person programming bootcamp.</p>
        <p><RxDotFilled style={{marginRight:"10px",color:"pink"}}/>The course has been updated to be 2024 ready and you'll be learning the latest tools and technologies used at large companies such as Apple, Google and </p>
        <p><RxDotFilled style={{marginRight:"10px",color:"pink"}}/>This course doesn't cut any corners, there are beautiful animated explanation videos and tens of real-world projects which you will get to build.</p>

        <p><RxDotFilled style={{marginRight:"10px",color:"pink"}}/>The curriculum was developed over a period of four years, with comprehensive student testing and feedback.</p>
        <p><RxDotFilled style={{marginRight:"10px",color:"pink"}}/>We've taught over a million students how to code and many have gone on to change their lives by becoming professional developers or starting their own tech startup.</p>
        <p><RxDotFilled style={{marginRight:"10px",color:"pink"}}/>You'll save yourself over 12,000 USD by enrolling, but still get access to the same teaching materials and learn from the same instructor.</p>
        <p><RxDotFilled style={{marginRight:"10px",color:"pink"}}/>The course is constantly updated with new content, with new projects and modules determined by students - that's you!</p>
      

        </div>

        <div className="container"style={{marginTop:"80px"}}>
          <h2 style={{backgroundColor:"pink",padding:"3px",borderRadius:"10px"}}>Practice Question</h2>
          <div className="row" style={{marginTop:"20px"}}>
            <div className="col">
              <p>Practice Questions for HTML</p>
              <p>Practice Questions for React</p>
              <p>Practice Questions for Node JS</p>
              <p>Practice Questions for Express JS</p>
              <p>Practice Questions for MongoDB</p>
            </div>
            <div className="col" style={{textAlign:"right"}}>
              <p><a href="https://youtu.be/hddqkYK5eMQ?si=GHCXbfXrtpamkxTv" target="_blank">Click Here </a></p>
              <p><a href="https://youtu.be/uE925hp9KDk?si=do7AJpymAkxgpbIW" target="_blank">Click Here </a></p>
              <p><a href="https://youtu.be/6WYEmUVhiwQ?si=1-JIoBiBQIS00ibH" target="_blank">Click Here </a></p>
              <p><a href="https://youtu.be/JcbKpugOLtY?si=-W4N5Bdycf9Q2y7T" target="_blank">Click Here </a></p>
              <p><a href="https://youtu.be/EKEpVhi-29Q?si=HUBh2YpJT2GdPBOS" target="_blank">Click Here </a></p>



            </div>
          </div>
        </div>
    </>
  );
};

export default FullStack;
