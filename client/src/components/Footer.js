import React from 'react'
// import "../Footer.css"


function Footer() {
    return (
        <footer className="site-footer">
         <div className="container">
          <div className="row">
           <div className="col-sm-12 col-md-6">
         <h6>Bon Appétit</h6>
         <p className="text-justify">Id cursus metus aliquam eleifend mi in nulla posuere. Lorem faucibus vitae aliquet</p>
           </div>
           <div className="col-xs-6 col-md-3">
           <h6>About Us</h6>
           <ul className="footer-links">
              <li><a href="http://sample.org/about">About Bon Appetite</a></li>
              <li><a href="http://sample.org/partnerships/">Partnerships</a></li>
              <li><a href="http://sample.org/customer/">Customer</a></li>
              <li><a href="http://sample.org//privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://sample.org/Terms of service">Terms of service</a></li>
            </ul>

           </div>
           <div className="col-xs-6 col-md-3">
           <h6>Services</h6>
            <ul className="footer-links">
              <li><a href="http://sample.org/Menu/">Menu</a></li>
              <li><a href="http://sample.org/Recipe/">Recipe</a></li>
              <li><a href="http://sample.org/Delivery/">Delivery</a></li>
              <li><a href="http://sample.org/Reseller/">Reseller</a></li>
              <li><a href="http://sample.org/sitemap/">Course</a></li>
            </ul>
          </div>
         </div>
         </div>

         <div className="col-md-4 col-sm-6 col-xs-12">
          <h6>Contact Us</h6>
            <ul className="social-icons">
              <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
              <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a className="instagram" href="#"><i className="fa fa-instagram"></i></a></li>
              <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>

            </ul>
            <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
            Copyright &copy; 2022 ©bonappétit.com 
            All right reserved.
            <a href="#">Bon Appetite</a>.
            </p>

         </div>

          </div>

        </footer>
    )
}

export default Footer
