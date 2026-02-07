import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { color } from "framer-motion";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    sessionStorage.clear()
  }, [])

  const boxStyle = {
    cursor: 'pointer',
    transition: '0.3s all ease',
    backgroundColor: isActive ? "#f5f7f6" : "#ffffff",
    color: isActive ? 'black' : 'black',
    height: "100%"
  };

  return (
    <>
      <div className="hero-content">
        <header className="site-header">

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
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/">About</Link>
                      </li>
                      <li>
                        <Link to={"/allproperty"}>booking</Link>
                      </li>
                      <li>
                        <Link to="/">Contact</Link>
                      </li>
                      <li>
                        <Link to="/register">Register</Link>
                      </li>
                      <li>
                        <Link to="/login">Login</Link>
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
        </header>

        {/* .site-header */}
        <div className="hero-content-overlay">
          <div className="container-fluid">
            <div className="row">
              <div className="col-4" >
                <div className="hero-content-wrap flex flex-column justify-content-center align-items-start" style={{ height: "500px" }}>
                  <header className="entry-header" >
                    {/* <h4>Get started with online courses</h4> */}
                    <h1>
                      multiple stay
                      <br />
                      booking site
                    </h1>
                  </header>
                  {/* .entry-header */}
                  <div className="entry-content">
                    <p>
                      you can book multiple type of sites for stay like/; hotel , PG (paying guest) , Dormitory
                    </p>
                  </div>
                </div>
                {/* .hero-content-wrap */}
              </div>
              <div className="col" style={{ backgroundColor: "white", marginTop: "19%", marginBottom: "10%", marginRight: "10%", marginLeft: "1%", borderRadius: "20px" }}>
                <div className="row">
                  <div className="col-4">
                    <div className="row"
                      style={boxStyle}
                      onClick={() => setIsActive(!isActive)}
                    >
                      <div className="col-1">
                        <i className="bi-search"></i>
                      </div>
                      <div className="col">
                        <p>where to?</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="row"
                      style={boxStyle}
                      onClick={() => setIsActive(!isActive)}
                    >
                      <div className="col-1">
                        <i class="bi bi-calendar4-event"></i>
                      </div>
                      <div className="col">
                        <p>select date</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="row"
                      style={boxStyle}
                      onClick={() => setIsActive(!isActive)}
                    >
                      <div className="col-1">
                        <i class="bi bi-person-plus"></i>
                      </div>
                      <div className="col">
                        <p>guests and room</p>
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-primary" style={{ margin: ".2%", borderRadius: "10px" }}>book</button>
                </div>
              </div>
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