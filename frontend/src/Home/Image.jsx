import img1 from '../assets/853c5a49-9b77-4eb8-a6b8-cf289d00a8d0.png';
import img2 from '../assets/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg';
import img3 from '../assets/10ca89f6-811b-400e-983b-32c5cd76725a.jpg';
import './Image.css';
const Image = () => {
  return (
      <>
      <div className="container">
    <section id="heroCarousel" className="carousel slide" data-bs-ride="carousel" >
        <div className="carousel-inner">
            <div className="carousel-item active hero1" >
                <img src={img2} className="d-block w-100" alt="Hero Image 1" />
            <div className="hero-quote1 w-50">
                <h1>
                    Explore for a bright future</h1>
                <p className="p-font text-black">Courses designed to help you reach your goals.
                </p>
            </div>
        </div>
            <div className="carousel-item hero1">
                    <img src={img3} className="d-block w-100" alt="Hero Image 1"/>
                <div className="hero-quote1">
                    <h1>
                        Learning that gets you.</h1>
                    <p className="p-font text-black">Skills for your present (and your future). Get started with us.
                    </p>
                </div>
            </div>
            <div className="carousel-item hero1">
                    <img src={img1} className="d-block w-100" alt="Hero Image 2"/>
                <div className="hero-quote1">
                    <h1>Skills that drive you forward</h1>
                    <p className="p-font text-black">Technology and the world of work change fast — with us, you’re faster. Get the skills to achieve goals and stay competitive.</p>
                </div>
            </div>
        </div>
        <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
        </a>
        <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">

        </a>
        
    </section>
</div>
      </>
  
  )
}

export default Image
