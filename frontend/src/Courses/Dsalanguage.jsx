import { GoCheck } from "react-icons/go";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { FaDotCircle } from "react-icons/fa";

const DSAlanguage = () => {
  return (
    <>
      <div
        className="d-block w-100 h-50"
        style={{
          backgroundColor: "lightblue",
          marginTop: "10px",
          textAlign: "center",
          color: "black",
          padding: "100px",
        }}
      >
        <h1>Data Structures and Algorithms - Master DS & Algorithm</h1>
        <h5>
          Master the fundamental concepts of Data Structures & Algorithms and
          enhance your problem-solving skills.
        </h5>
        <p>Last updated 9/2024 English, Arabic [Auto]</p>
      </div>

      <div className="container p-4" style={{ marginTop: "80px", border: "1px solid grey" }}>
        <h4 style={{ marginLeft: "50px" }}>
          <b>What you'll learn</b>
        </h4>
        <div className="row" style={{ marginLeft: "40px", marginTop: "20px" }}>
          <div className="col">
            <p>
              <GoCheck style={{ marginRight: "20px" }} />
              Understand the fundamentals of Data Structures
            </p>
            <p>
              <GoCheck style={{ marginRight: "20px" }} />
              Learn to solve complex problems using algorithms
            </p>
            <p>
              <GoCheck style={{ marginRight: "20px" }} />
              Master Searching and Sorting algorithms
            </p>
            <p>
              <GoCheck style={{ marginRight: "20px" }} />
              Implement stacks, queues, linked lists, and trees
            </p>
          </div>
          <div className="col">
            <p>
              <GoCheck style={{ marginRight: "20px" }} />
              Improve your interview and coding skills
            </p>
            <p>
              <GoCheck style={{ marginRight: "20px" }} />
              Optimize time complexity and space complexity
            </p>
            <p>
              <GoCheck style={{ marginRight: "20px" }} />
              Solve problems in competitive programming
            </p>
            <p>
              <GoCheck style={{ marginRight: "20px" }} />
              Understand the complexities of algorithms
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "80px" }}>
        <h2>Course Content</h2>
        <div className="accordion" id="accordionExample" style={{ marginTop: "20px" }}>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{ backgroundColor: "lightblue" }}
              >
                <b>Introduction</b>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className="row">
                  <div className="col">
                    <p>
                      <a href="https://youtu.be/5_5oE5lgrhw?feature=shared" target="_blank">
                        <MdOutlineOndemandVideo style={{ marginRight: "20px" }} /> Introduction to Data Structures
                      </a>
                    </p>
                    <p>
                      <a href="https://youtu.be/cuhLSGGV-1k?feature=shared" target="_blank">
                        <MdOutlineOndemandVideo style={{ marginRight: "20px" }} /> What are Algorithms?
                      </a>
                    </p>
                    <p>
                      <a href="https://youtu.be/5T0SiJocPCI?feature=shared" target="_blank">
                        <MdOutlineOndemandVideo style={{ marginRight: "20px" }} /> Time Complexity Basics
                      </a>
                    </p>
                  </div>
                  <div className="col" style={{ textAlign: "right" }}>
                    <p>10:10</p>
                    <p>15:45</p>
                    <p>18:30</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <b>Basic Data Structures</b>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <a href="https://youtu.be/NTHVTY6w2Co?feature=shared" target="_blank">
                  <MdOutlineOndemandVideo style={{ marginRight: "20px" }} /> Introduction to Arrays
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "80px" }}>
        <h2 style={{ backgroundColor: "lightblue", padding: "3px", borderRadius: "10px" }}>Requirements</h2>
        <p style={{ marginTop: "20px" }}>
          <FaDotCircle style={{ marginRight: "20px", color: "lightblue" }} /> A computer running Microsoft Windows, Linux, or Mac OS
        </p>
        <p>
          <FaDotCircle style={{ marginRight: "20px", color: "lightblue" }} /> At least 4GB of RAM is recommended
        </p>
        <p>
          <FaDotCircle style={{ marginRight: "20px", color: "lightblue" }} /> Basic understanding of programming concepts
        </p>
      </div>

      <div className="container" style={{ marginTop: "80px" }}>
        <h2 style={{ backgroundColor: "lightblue", padding: "3px", borderRadius: "10px" }}>Description</h2>
        <p>Data Structures & Algorithms are at the heart of computer science and programming. Mastering these concepts can elevate your problem-solving and programming skills.</p>

        <p>By the end of this course, you will be able to understand the key concepts of data structures, learn to implement algorithms, and solve real-world problems efficiently.</p>
        <b>Why Learn Data Structures & Algorithms?</b><br />
        <span>
          Mastering data structures and algorithms will help you with problem-solving, preparing for coding interviews, and building optimized solutions in your career as a software developer.
        </span>
      </div>

      <div className="container" style={{ marginTop: "80px" }}>
        <h2 style={{ backgroundColor: "lightblue", padding: "3px", borderRadius: "10px" }}>Previous Year Question Papers</h2>
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col">
            <p>2023 Question Paper</p>
            <p>2022 Question Paper</p>
            <p>2021 Question Paper</p>
          </div>
          <div className="col" style={{ textAlign: "right" }}>
            <p><a href="https://aktuonline.com/papers/mca-2-sem-data-structures-analysis-of-algorithms-kca205-2023.html" target="_blank">Click Here</a></p>
            <p><a href="https://aktuonline.com/papers/mca-2-sem-data-structures-rca202-2019.html" target="_blank">Click Here</a></p>
            <p><a href="https://aktuonline.com/papers/mca-2-sem-data-structure-using-c-nmca213-2018.html" target="_blank">Click Here</a></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DSAlanguage;
