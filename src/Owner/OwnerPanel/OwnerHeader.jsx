import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function OwnerHeader(){
   var  nav= useNavigate()

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
      nav("/")
    }
    return(
        <>
         <header id="header" className="header d-flex align-items-center fixed-top">
          <div className="container-fluid container-xl position-relative d-flex align-items-center">
            <a href="index.html" className="logo d-flex align-items-center me-auto">
              {/* Uncomment the line below if you also wish to use an image logo */}
              {/* <img src="assets/img/logo.png" alt=""> */}
              <h1 className="sitename">Owner</h1>
            </a>
            <nav id="navmenu" className="navmenu">
              <ul>
                <li>
                  <Link to="/" className="active">
                    Home
                  </Link>
                </li>
             
                <li className="dropdown">
                    <a href="#">
                    <span>HOTEL</span>
                    <i className="bi bi-chevron-down toggle-dropdown" />
                    </a>
                    <ul>
                    <li>
                        <Link to="/hotel">ADD</Link>
                    </li>
                    <li>
                        <Link to="/pg">MANAGE</Link>
                    </li>
                    </ul>
                </li> 
                <li className="dropdown">
                    <a href="#">
                    <span>PG</span>
                    <i className="bi bi-chevron-down toggle-dropdown" />
                    </a>
                    <ul>
                    <li>
                        <Link to="/hotel">ADD</Link>
                    </li>
                    <li>
                        <Link to="/pg">MANAGE</Link>
                    </li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a href="#">
                    <span>DOMITORY</span>   
                    <i className="bi bi-chevron-down toggle-dropdown" />
                    </a>
                    <ul>
                    <li>
                        <Link to="/hotel">ADD</Link>
                    </li>
                    <li>
                        <Link to="/pg">MANAGE</Link>
                    </li>
                    </ul>
                </li>
           
              </ul>
              <i className="mobile-nav-toggle d-xl-none bi bi-list" />
            </nav>
            <div>
            <Link className="btn btn-outline-light" onClick={logoutfun} >Log out</Link>
            </div>
          </div>    
        </header>

        </>
    )
}