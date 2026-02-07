export default function Footer(){
    return(
        <>
         <footer className="site-footer"style={{backgroundColor:"#f7f7f7"}} >
    <div className="footer-widgets">
      <div className="container">
        <div className="row " style={{backgroundColor:"#dbedf3",padding:"30px",color:"#e2f0f5", borderRadius: "100px"}}>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="foot-about">
              <a className="foot-logo" href="#">
                <img src="/Assets2/images/foot-logo.png" alt="" />
              </a>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia dese mollit anim id est laborum.{" "}
              </p>
              <p className="footer-copyright">
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved | This template is made with{" "}
                <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </p>
            </div>
            {/* .foot-about */}
          </div>
          {/* .col */}
          <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
            <div className="foot-contact">
              <h2>Contact Us</h2>
              <ul>
                <li>Email: info.deertcreative@gmail.com</li>
                <li>Phone: (+88) 111 555 666</li>
                <li>Address: 40 Baria Sreet 133/2 NewYork City, US</li>
              </ul>
            </div>
            {/* .foot-contact */}
          </div>
          {/* .col */}
          <div className="col-12 col-md-6 col-lg-3 mt-5 mt-lg-0">
            <div className="quick-links flex flex-wrap">
              <h2 className="w-100">Quick Links</h2>
              <ul className="w-50">
                <li>
                  <a href="#">About </a>
                </li>
                <li>
                  <a href="#">Terms of Use </a>
                </li>
                <li>
                  <a href="#">Privacy Policy </a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
              <ul className="w-50">
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">Forums</a>
                </li>
                <li>
                  <a href="#">Language Packs</a>
                </li>
                <li>
                  <a href="#">Release Status</a>
                </li>
              </ul>
            </div>
            {/* .quick-links */}
          </div>
          {/* .col */}
          <div className="col-12 col-md-6 col-lg-3 mt-5 mt-lg-0">
            <div className="follow-us">
              <h2>Follow Us</h2>
              <ul className="follow-us flex flex-wrap align-items-center">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
              </ul>
            </div>
            {/* .quick-links */}
          </div>
          {/* .col */}
        </div>
      </div>
    </div>
  </footer>
        </>
    )
}