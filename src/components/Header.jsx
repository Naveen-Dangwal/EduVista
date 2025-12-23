const Header = () => {
  return (
    <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary px-4 border-bottom fixed-top " >
  <div className="container-fluid " style={{backgroundColor:""}}>
    <a className="navbar-brand fs-2">Edu<span style={{color:"purple"}}>Vista</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 text-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#home">Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#about">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#contact">Courses</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#contact">Resume Builder</a>
        </li>
        <button type="button" className="btn btn-warning" style={{border:"2px solid purple",marginLeft:"4px",}}>Log In</button>
        <button type="button" className="btn btn-warning" style={{border:"2px solid purple",marginLeft:"4px"}}>Sign Up</button>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header
