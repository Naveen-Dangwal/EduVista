import React from 'react'
import logo from "../assets/logo.png";
import { NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-4 border-bottom fixed-top " >
  <div className="container-fluid ">
  <a className="navbar-brand fs-2 py-0 px-0">
  <img src={logo} style={{height:"70px", width:"90px" , marginRight:"20px"}}></img>
  Edu<span style={{color:"purple"}}>Vista</span></a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 text-center">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#home">Home</a> */}
          <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#about">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#services">Services</a>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="/courses">Courses</a> */}
          <NavLink to='/courses' className="nav-link active" aria-current="page">Courses</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to='/resume' className="nav-link active" aria-current="page">Build Resume</NavLink>
        </li>
        <NavLink to='/login'><button type="button" className="btn btn-warning" style={{border:"2px solid purple",marginLeft:"4px",}}>Login In</button></NavLink>
        <NavLink to='/signup'><button type="button" className="btn btn-warning" style={{border:"2px solid purple",marginLeft:"4px"}}>Sign Up</button></NavLink>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
