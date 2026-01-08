import React from 'react'
import img from '../assets/learn.png';
import dsa from '../assets/DSA.webp';
import java from '../assets/java.webp';
import c from '../assets/c.webp';
import full from '../assets/full.webp';
import './Course.css';
import Layout from '../components/Layout';
import Hero from './Hero';
import { useNavigate } from 'react-router-dom';
export default function Course() {
    const navigate = useNavigate();

    const handlefull = () => {
        navigate('/fullstack'); 
    };
    const handlec = () => {
        navigate('/c'); 
    };
    const handlejava = () => {
        navigate('/java'); 
    };
    const handledsa = () => {
        navigate('/dsa'); 
    };
  return (
    <Layout>
    <Hero/>
    <div id="courses" style={{paddingTop:"100px"}}>
         <h1>Courses</h1>
         

<div class="row container mt-5">

<div class="col-md-3 mb-4">
    <div class="card h-100 shadow course-card">
        <img class="card-img-top" src={dsa}
            alt="HTML CSS Course"/>
        <div class="card-body">
            <h5 class="card-title"><strong> DSA to Development
            A Complete Guide using C++ Programming language</strong></h5>
            <p class="card-text">Krishna Bihari Dubey Sir</p>
            <button className='btn btn-secondary' onClick={handledsa}>Explore</button>
        </div>
        <div class="course-popup">
            <h6 class="font-weight-bold">DSA to Development</h6>
            <p><strong>Instructor:</strong> Krishna Bihari Dubey Sir</p>
            <p><strong>Description:</strong> A complete guide to Data Structures and Algorithms (DSA) for development involves understanding fundamental concepts and how they apply to solving problems effectively.</p>
            <button class="btn btn-primary btn-sm" onClick={handledsa}>Explore</button>
        </div>
    </div>
</div>
<div class="col-md-3 mb-4">
    <div class="card h-100 shadow course-card">
        <img class="card-img-top" src={java}
            alt="CSS Box Model Course"/>
        <div class="card-body">
            <h5 class="card-title">Java Programming Online Course [Complete Beginner to Advanced]</h5>
            <p class="card-text">Ramjee Sir</p>
            <button className='btn btn-secondary' onClick={handlejava}>Explore</button>
        </div>
        <div class="course-popup">
            <h6 class="font-weight-bold">Java Programming Online Course [Complete Beginner to Advanced]
            </h6>
            <p><strong>Instructor:</strong> Ramjee Sir</p>
            <p><strong>Description:</strong> Unlock the power of Java, one of the world's most popular and versatile programming languages, with this comprehensive online course. </p>
            <button class="btn btn-primary btn-sm" onClick={handlejava}>Explore</button>
        </div>
    </div>
</div>
<div class="col-md-3 mb-4">
    <div class="card h-100 shadow course-card">
        <img class="card-img-top" src={c}
            alt="Profile Card Course"/>
        <div class="card-body">
            <h5 class="card-title">C Programming Course Online - Learn C with Data Structures</h5>
            <p class="card-text">Dr. Sheelesh kumar sharma Sir</p>
            <button className='btn btn-secondary' onClick={handlec}>Explore</button>
        </div>
        <div class="course-popup">
            <h6 class="font-weight-bold">C Programming Course Online - Learn C with Data Structures</h6>
            <p><strong>Instructor:</strong>Dr. Sheelesh kumar sharma Sir</p>
            <p><strong>Description:</strong> Dive into the world of programming with this comprehensive C Programming course, designed to take you from beginner to advanced levels.</p>
            <button class="btn btn-primary btn-sm" onClick={handlec}>Explore</button>
        </div>
    </div>
</div>
<div class="col-md-3 mb-4">
    <div class="card h-100 shadow course-card">
        <img class="card-img-top" src={full} alt="CSS Units Course"/>
        <div class="card-body">
            <h5 class="card-title">Full Stack Developer Bootcamp - Master Frontend to Backend</h5>
            <p class="card-text">Vijay Sir</p>
            <button className='btn btn-secondary' onClick={handlefull}>Explore</button>
        </div>
        <div class="course-popup">
            <h6 class="font-weight-bold">Full Stack Developer Bootcamp - Master Frontend to Backend
            </h6>
            <p><strong>Instructor:</strong> Vijay Sir</p>
            <p><strong>Description:</strong> Transform your career with this all-in-one Full Stack Developer Bootcamp, designed to make you proficient in both frontend and backend development.</p>
            <button class="btn btn-primary btn-sm" onClick={handlefull}>Explore</button>
        </div>
    </div>
</div>
</div>
 
 
 
 
 
 
 <img src={img} style={{height:"800px", width:"100%",paddingTop:"100px"}}></img>
    </div>
    </Layout>
  )
}
