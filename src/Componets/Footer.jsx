export default function Footer(){
    return(
        <>
         <footer className="site-footer"style={{backgroundColor:"#dbedf3"}} >
    <div className="footer-widgets">
      <div className="container-fluid">
        <div className="row " style={{paddingLeft:"4%", paddingRight:"4%", height:"100px",position:"relative"}}>
          <div className="col-6">
            <div className="foot-contact">
              <h2>Contact Us</h2>
              <ul style={{color:"gray", marginTop:"-5%"}}>
                <li>Email: msbinfo@gmail.com</li>
                <li>Phone: (+88) 111 555 666</li>
                <li>Address: Jalandhar, Near Bus Stand</li>
              </ul>
            </div>
            {/* .foot-contact */}
          </div>
          {/* .col */}
          <div className="col-6">
            <div className="quick-links flex flex-wrap">
              <h2 className="w-100">Quick Links</h2>
              <ul className="w-50" style={{marginTop:"-5%"}}>
                <li>
                  <a href="#">About </a>
                </li>
                <li>
                  <a href="#">Privacy Policy </a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            {/* .quick-links */}
          </div>
        </div>
      </div>
    </div>
  </footer>
        </>
    )
}