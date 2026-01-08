import { GoCheck } from "react-icons/go";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { FaDotCircle } from "react-icons/fa";

const Javalanguage = () => {
  return (
    <>
      <div
        className="d-block w-100 h-50"
        style={{
          backgroundColor: "lightgreen",
          marginTop: "10px",
          textAlign: "center",
          color: "black",
          padding: "100px",
        }}
      >
        <h1>Java Programming for Beginners - Learn Java</h1>
        <h5>
          Learn Java programming from scratch. Understand the fundamentals and become a pro.
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
              Understand Java syntax and programming concepts
            </p>
            <p>
              <GoCheck style={{ marginRight: "20px" }} />
              Learn object-oriented programming with Java
            </p>
            <p>
              <GoCheck style={{ marginRight: "20px" }} />
              Master data structures and algorithms in Java
            </p>
            <p>
              <GoCheck style={{ marginRight: "20px" }} />
              Work with Java frameworks like Spring
            </p>
          </div>
          <div className="col">
            <p>
              <GoCheck style={{ marginRight: "20px" }} />
              Build practical Java applications
            </p>
            <p>
              <GoCheck style={{ marginRight: "20px" }} />
              Develop problem-solving skills in Java
            </p>
            <p>
              <GoCheck style={{ marginRight: "20px" }} />
              Prepare for Java coding interviews
            </p>
            <p>
              <GoCheck style={{ marginRight: "20px" }} />
              Explore advanced Java topics like multithreading
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
                style={{ backgroundColor: "lightgreen" }}
              >
                <b>Introduction</b>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className="row">
                  <div className="col">
                    <p>
                      <a href="https://youtu.be/wn49bJOYAZM?feature=shared" target="_blank">
                        <MdOutlineOndemandVideo style={{ marginRight: "20px" }} /> Introduction to Java Programming
                      </a>
                    </p>
                    <p>
                      <a href="https://youtu.be/ntLJmHOJ0ME?feature=shared" target="_blank">
                        <MdOutlineOndemandVideo style={{ marginRight: "20px" }} /> Getting Started with Java
                      </a>
                    </p>
                    <p>
                      <a href="https://youtu.be/X0zdAG7gfgs?feature=shared" target="_blank">
                        <MdOutlineOndemandVideo style={{ marginRight: "20px" }} /> Java Variables and Data Types
                      </a>
                    </p>
                  </div>
                  <div className="col" style={{ textAlign: "right" }}>
                    <p>20:15</p>
                    <p>35:00</p>
                    <p>45:20</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "80px" }}>
        <h2 style={{ backgroundColor: "lightgreen", padding: "3px", borderRadius: "10px" }}>Requirements</h2>
        <p style={{ marginTop: "20px" }}>
          <FaDotCircle style={{ marginRight: "20px", color: "lightgreen" }} /> A computer running Windows, Linux, or Mac OS
        </p>
        <p>
          <FaDotCircle style={{ marginRight: "20px", color: "lightgreen" }} /> At least 4GB RAM (Recommended)
        </p>
        <p>
          <FaDotCircle style={{ marginRight: "20px", color: "lightgreen" }} /> Basic programming knowledge
        </p>
      </div>

      <div className="container" style={{ marginTop: "80px" }}>
        <h2 style={{ backgroundColor: "lightgreen", padding: "3px", borderRadius: "10px" }}>Description</h2>
        <p>Java is one of the most popular programming languages. It's widely used in web development, mobile applications, and enterprise solutions.</p>
        <p>This course covers everything from basic Java syntax to advanced topics. You'll also develop real-world projects and work on solving coding challenges.</p>
      </div>

      <div className="container" style={{ marginTop: "80px" }}>
        <h2 style={{ backgroundColor: "lightgreen", padding: "3px", borderRadius: "10px" }}>Previous Year Question Papers</h2>
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col">
            <p>2023 Question Paper</p>
            <p>2022 Question Paper</p>
            <p>2021 Question Paper</p>
          </div>
          <div className="col" style={{ textAlign: "right" }}>
            <p><a href="https://aktuonline.com/papers/mca-2-sem-object-oriented-programming-kca202-2023.html" target="_blank">Click Here</a></p>
            <p><a href="https://aktuonline.com/papers/mca-2-sem-object-oriented-programming-kca202-2022.html" target="_blank">Click Here</a></p>
            <p><a href="https://www.aktuonline.com/papers/java-1-sem-2022.html" target="_blank">Click Here</a></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Javalanguage;
