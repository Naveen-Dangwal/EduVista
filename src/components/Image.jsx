import pic2 from '../assets/pic2.jpg';
const Image = () => {
  return (
      <>
      <div id="home" className="carousel slide" data-bs-ride="carousel" style={{paddingTop:"70px"}}>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={pic2} style={{height:"655px"}} className="d-block w-100" alt="..."/ >
    </div>
    <div className="carousel-item">
      <img src="..." style={{height:"655px"}}className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." style={{height:"655px"}}className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </>
  
  )
}

export default Image
