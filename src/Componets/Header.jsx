import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <>
        <header id="header" className="header d-flex align-items-center fixed-top">
  <div className="container-fluid container-xl position-relative d-flex align-items-center">
    <a href="index.html" className="logo d-flex align-items-center me-auto">
      {/* Uncomment the line below if you also wish to use an image logo */}
      {/* <img src="assets/img/logo.png" alt=""> */}
      <h1 className="sitename">Dewi</h1>
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
                <i className="bi bi-chevron-down toggle-dropdown" />
              </Link>
              <ul>
                <li>
                  <a href="#">Deep Dropdown 1</a>
                </li>
                <li>
                  <a href="#">Deep Dropdown 2</a>
                </li>
                <li>
                  <a href="#">Deep Dropdown 3</a>
                </li>
              </ul>
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
     <Link className="cta-btn" to="/login">Login</Link>
       
    </div>
  </div>
      
    
          
</header>
        </>
    )
}