import { Link } from "react-router-dom";

export default function Header(){
    return(
        <>
  <div className="hero-content">
    <header className="site-header">

      {/* .top-header-bar */}
      <div className="nav-bar">
        <div className="container">
          <div className="row">
            <div className="col-9 col-lg-3">
              <div className="site-branding">
                <h1 className="site-title">
                  <a href="index.html" rel="home">
                    M<span>SB</span>
                  </a>
                </h1>
              </div>
              {/* .site-branding */}
            </div>
            {/* .col */}
            <div className="col-3 col-lg-9 flex justify-content-end align-content-center">
              <nav className="site-navigation flex justify-content-end align-items-center">
                <ul className="flex flex-column flex-lg-row justify-content-lg-end align-content-center">
                  <li className="current-menu-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Courses</a>
                  </li>
                  <li>
                    <a href="#">blog</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                     <li>
                            <a href="#">Register</a>
                          </li>
                          <li>
                            <Link to ="/login">Login</Link>
                          </li>
                </ul>
                <div className="hamburger-menu d-lg-none">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                {/* .hamburger-menu */}
                <div className="header-bar-cart">
                  <a
                    href="#"
                    className="flex "
                  >
                  </a>
                </div>
                {/* .header-bar-search */}
              </nav>
              {/* .site-navigation */}
            </div>
            {/* .col */}
          </div>
          {/* .row */}
        </div>
        {/* .container */}
      </div>
      {/* .nav-bar */}
    </header>

    
    {/* .site-header */}
    <div className="hero-content-overlay">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="hero-content-wrap flex flex-column justify-content-center align-items-start">
              <header className="entry-header">
                <h4>Get started with online courses</h4>
                <h1>
                  best online
                  <br />
                  Learning system
                </h1>
              </header>
              {/* .entry-header */}
              <div className="entry-content">
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium
                </p>
              </div>
              {/* .entry-content */}
              <footer className="entry-footer read-more">
                <a href="#">read more</a>
              </footer>
              {/* .entry-footer */}
            </div>
            {/* .hero-content-wrap */}
          </div>
          {/* .col */}
        </div>
        {/* .row */}
      </div>
      {/* .container */}
    </div>
    {/* .hero-content-hero-content-overlay */}
  </div>
      </>
    )
}