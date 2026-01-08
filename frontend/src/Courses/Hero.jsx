import React from 'react'
import img1 from '../assets/img.png';
import "./Hero.css";
export default function Hero() {
  return (
    <div style={{marginTop:"70px"}}>
    <div className='container'>
   
    <div class="hero">
      <img src={img1} class="d-block w-100" style={{height:"560px"}} />
      <button className='hero-quote'><a href='#courses' style={{textDecoration: "none",color: "white",
    fontWeight: "600"}}>Explore Courses</a></button>
    </div>
    <marquee>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolor nostrum cumque aliquid omnis ipsum expedita praesentium quam modi quaerat doloribus sit, sunt vitae? Sit fugit ducimus nostrum ut officia.</marquee>

    </div>

</div>
  )
}
