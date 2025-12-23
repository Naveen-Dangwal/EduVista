import './Footer.css'

const Footer = () => {
  return (
    <>
   <footer className="footer" style={{width:"100%"}}>
                    <div>
                        <div className="row mx-5">
                            <div className="col-lg-8 col-md-10 text-left">
                                <p className="top-companies">
                                    Top companies choose <a href="#" className="eduvista-link">EduVista Business</a> to build
                                    in-demand
                                    career skills.
                                </p>
                            </div>
                            <div className="col-lg-4 col-md-2 text-right">
                                
                            </div>
                        </div>
                        <hr className="footer-divider"/>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 text-left">
                                <ul className="footer-links">
                                    <li><a href="#">EduVista Business</a></li>
                                    <li><a href="#">Teach on EduVista</a></li>
                                    <li><a href="#">Get the app</a></li>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Contact us</a></li>
                                </ul>
                                <h1 className="udemy-logo mx-5">EduVista</h1>
                            </div>
                            <div className="col-lg-3 col-md-6 text-left">
                                <ul className="footer-links">
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Help and Support</a></li>
                                    <li><a href="#">Affiliate</a></li>
                                    <li><a href="#">Investors</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 text-left">
                                <ul className="footer-links">
                                    <li><a href="#">Terms</a></li>
                                    <li><a href="#">Privacy policy</a></li>
                                    <li><a href="#">Cookie settings</a></li>
                                    <li><a href="#">Sitemap</a></li>
                                    <li><a href="#">Accessibility statement</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 text-left ">
                                <a href="#" className="language-button">English</a>
                                <p>&copy; 2024 Your Company, Inc.</p>
                            </div>
                        </div>
                    </div>
                </footer>
                </>
  )
}

export default Footer
