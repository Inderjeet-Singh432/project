import React, { useState } from 'react';
import Calendar from 'react-calendar';


export default function HotelBody(){
    const [value, onChange] = useState(new Date());

    return(
        <>

<section id="about" className="about section">
  
{/* booking option start */}
         <div className="row gy-4 booknav1"> 
              <div className='row booknav2' >

                  <div className="col-3 booknavitem2"  >
                        <div className="btn-group" style={{width:"100%"}}>
                        <button
                            className="btn btn-lg dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Select Location
                        </button>
                        <ul className="dropdown-menu" style={{width:"100%"}}>
                            <li>
                            <a className="dropdown-item" href="#">
                                Action
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                Another action
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                Something else here
                            </a>
                            </li>
                        </ul>
                        </div>

                </div>
                {/* calender start */}
                <div className="col-3 booknavitem2" >
                    <div className="btn-group" style={{width:"100%"}}>
                            <button
                            className="btn btn-lg dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                select date
                            </button>

                            <ul className="dropdown-menu">
                                <li>
                                    <div>
                                    <Calendar onChange={onChange} value={value} />
                                    </div>
                                </li>
                        </ul>
                    </div>
                </div>
                {/* calender end */}

                <div className="col-3 booknavitem2"  >
                    <div>
                            <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{width:"100%", height:"100%"}}>
                               adults, childrens
                            </button>
                        <ul className="dropdown-menu" >
                            <li>
                            <a className="dropdown-item" href="#">
                                Action
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                Another action
                            </a>
                            </li>
                            <li>
                           
    

                            </li>
                        </ul>
                    </div>
                </div>
   
                 <div className="col btn btn-primary" style={{height:"100%",marginLeft:"2%", marginRight:"2%"}}>
                    Search
                </div>
              </div>
        </div>
{/* booking option ended */}

  {/* slider start */}
      <div className='container'>

        <div className='row'>

            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={0}
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={1}
                  aria-label="Slide 2"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={2}
                  aria-label="Slide 3"
                />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="public\Assets\assets\image\h1.jpg" className="d-block w-100" style={{height:"450px", backgroundColor:"blue", marginTop:"10px", marginBottom:"20px"}} />
                </div>
                <div className="carousel-item active">
                  <img src="public\Assets\assets\image\h7.jpeg" className="d-block w-100" style={{height:"450px", backgroundColor:"blue", marginTop:"10px", marginBottom:"20px"}} />
                </div>
                <div className="carousel-item active">
                  <img src="public\Assets\assets\image\h2.webp" className="d-block w-100" style={{height:"450px", backgroundColor:"blue", marginTop:"10px", marginBottom:"20px"}} />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>

        </div>

      </div>
  {/* slider end */}

{/* body start */}
  <div className="container body">

        <div className="card mb-3" style={{width: "540px"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>

    </div>
{/* body end */}

</section>


  <footer id="footer" className="footer dark-background">
    <div className="container footer-top">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6 footer-about">
          <a href="index.html" className="logo d-flex align-items-center">
            <span className="sitename">Dewi</span>
          </a>
          <div className="footer-contact pt-3">
            <p>A108 Adam Street</p>
            <p>New York, NY 535022</p>
            <p className="mt-3">
              <strong>Phone:</strong> <span>+1 5589 55488 55</span>
            </p>
            <p>
              <strong>Email:</strong> <span>info@example.com</span>
            </p>
          </div>
          <div className="social-links d-flex mt-4">
            <a href="">
              <i className="bi bi-twitter-x" />
            </a>
            <a href="">
              <i className="bi bi-facebook" />
            </a>
            <a href="">
              <i className="bi bi-instagram" />
            </a>
            <a href="">
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <i className="bi bi-chevron-right" /> <a href="#">Home</a>
            </li>
            <li>
              <i className="bi bi-chevron-right" /> <a href="#">About us</a>
            </li>
            <li>
              <i className="bi bi-chevron-right" /> <a href="#">Services</a>
            </li>
            <li>
              <i className="bi bi-chevron-right" />{" "}
              <a href="#">Terms of service</a>
            </li>
            <li>
              <i className="bi bi-chevron-right" />{" "}
              <a href="#">Privacy policy</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-3 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li>
              <i className="bi bi-chevron-right" /> <a href="#">Web Design</a>
            </li>
            <li>
              <i className="bi bi-chevron-right" />{" "}
              <a href="#">Web Development</a>
            </li>
            <li>
              <i className="bi bi-chevron-right" />{" "}
              <a href="#">Product Management</a>
            </li>
            <li>
              <i className="bi bi-chevron-right" /> <a href="#">Marketing</a>
            </li>
            <li>
              <i className="bi bi-chevron-right" />{" "}
              <a href="#">Graphic Design</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-12 footer-newsletter">
          <h4>Our Newsletter</h4>
          <p>
            Subscribe to our newsletter and receive the latest news about our
            products and services!
          </p>
          <form
            action="forms/newsletter.php"
            method="post"
            className="php-email-form"
          >
            <div className="newsletter-form">
              <input type="email" name="email" />
              <input type="submit" defaultValue="Subscribe" />
            </div>
            <div className="loading">Loading</div>
            <div className="error-message" />
            <div className="sent-message">
              Your subscription request has been sent. Thank you!
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="container copyright text-center mt-4">
      <p>
        © <span>Copyright</span> <strong className="px-1 sitename">Dewi</strong>{" "}
        <span>All Rights Reserved</span>
      </p>
      <div className="credits">
        {/* All the links in the footer should remain intact. */}
        {/* You can delete the links only if you've purchased the pro version. */}
        {/* Licensing information: https://bootstrapmade.com/license/ */}
        {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>{" "}
        Distributed by <a href="“https://themewagon.com">ThemeWagon</a>
      </div>
      <a href="“https://themewagon.com"></a>
    </div>
    <a href="“https://themewagon.com"></a>
  </footer>
        </>
    )
}