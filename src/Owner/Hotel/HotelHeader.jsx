import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function HotelHeader(){

     var nav= useNavigate()
     
      useEffect(()=>{
        let isLogin = sessionStorage.getItem('isLogin');
        if(!isLogin){
          nav("/hotel")
        }
      },[])

function logoutfun(){
    Swal.fire({
  title: "Are you sure to logout?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes!!"
}).then((result) => {
  if (result.isConfirmed) {
    sessionStorage.clear()
    // navigate to home page after logout
    nav("/")
    Swal.fire({
      title: "Logout!",
      text: "Logout successfully!!!.",
      icon: "success"
    });

  }
});

  }
    return(
        <>
    <header id="header" className="header d-flex align-items-center fixed-top">
  <div className="container-fluid container-xl position-relative d-flex align-items-center">
    <a href="index.html" className="logo d-flex align-items-center me-auto">
      {/* Uncomment the line below if you also wish to use an image logo */}
      {/* <img src="assets/img/logo.png" alt=""> */}
      <h1 className="sitename">HotelHeader</h1>
    </a>
    <nav id="navmenu" className="navmenu">
      <ul>
        <li>
          <Link to="/" className="active">
            Home
          </Link>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li className="dropdown">
          <a href="#">
            <span>Book Now</span>
            <i className="bi bi-chevron-down toggle-dropdown" />
          </a>
          <ul>
            <li>
              <Link to="/hotel">Hotel</Link>
            </li>
            <li className="dropdown">
              <Link to="/domitory">
                <span>Domitory</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/pg">Pg</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
      <i className="mobile-nav-toggle d-xl-none bi bi-list" />
    </nav>
    <div>
      {/* <a  onClick={openModal}  className="cta-btn" href="index.html#about">
     Login
    </a> */}
        <button className="btn btn-outline-danger" onClick={logoutfun}>Logout</button>
        
    </div>
  </div>    
</header>
        </>
    )
}