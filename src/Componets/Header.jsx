import React from 'react';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

export default function Header() {
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    sessionStorage.clear()
  }, [])

  const handleSearch = () => {
    sessionStorage.setItem("loaction",location)
    sessionStorage.setItem("checkInDate",checkInDate)
    sessionStorage.setItem("checkOutDate",checkOutDate)
    sessionStorage.setItem("adults",adults)
    sessionStorage.setItem("children",children)
    sessionStorage.setItem("rooms",rooms)

    setLocation("")
    setCheckInDate("")
    setCheckOutDate("")
    setAdults("")
    setChildren("")
    setRooms("")
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
            <div className="row-md">

              <div className="col-4" >
                <div className="hero-content-wrap flex flex-column justify-content-center align-items-start" style={{ height: "500px" }}>
                  <header className="entry-header" >
                    <h1>
                      multiple stay
                      <br />
                      booking site
                    </h1>
                  </header>
                  <div className="entry-content">
                    <p>
                      you can book multiple type of sites for stay like/; hotel , PG (paying guest) , Dormitory
                    </p>
                  </div>
                </div>
                {/* .hero-content-wrap */}
              </div>

              <div className='col-12' style={{ paddingLeft: "45%", marginTop: "-20%", paddingBottom: "20px" }}>

                <div className="card" style={{ borderRadius: "20px", width: "100%", padding: "30px", marginBottom: "40px", marginRight: "" }}>
                  <div>
                    <div className="row">

                      <div className="col-12">
                        <div className="row"
                          style={{ height: "50px", marginBottom: "15px" }}>
                          <div className="col-1">
                            <i className="bi-search" style={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)" }}></i>
                          </div>
                          <div className="col">
                            <input
                              type="text"
                              id="location"
                              style={{ height: "100%", width: "100%", border: "solid", borderRadius: "20px" }}
                              placeholder="Enter city, hotel, or destination"
                              value={location}
                              onChange={(e) => setLocation(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="row"
                          style={{ height: "50px", marginBottom: "2px" }}>
                          <div className="col-1">
                            <i className="bi bi-calendar4-event" style={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)" }}></i>
                          </div>
                          <div className="col">
                            <div className="row form-group dates">
                              <div className="col date-picker">
                                <DatePicker
                                  style={{ height: "100%", width: "100%", border: "solid" }}
                                  selected={checkInDate}
                                  onChange={(date) => setCheckInDate(date)}
                                  dateFormat="MMM dd, yyyy"
                                  placeholderText="Select check-in date"
                                  minDate={new Date()}
                                />
                              </div>
                              <div className="col date-picker">
                                <DatePicker
                                  style={{ height: "100%", width: "100%", border: "solid" }}
                                  selected={checkOutDate}
                                  onChange={(date) => setCheckOutDate(date)}
                                  dateFormat="MMM dd, yyyy"
                                  placeholderText="Select check-out date"
                                  minDate={checkInDate || new Date()}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="row"
                          style={{ height: "50px", marginBottom: "10px" }}>
                          <div className="col-1">
                            <i className="bi bi-person-plus" style={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)" }} ></i>
                          </div>
                          <div className="col">
                            <div calassName="container">
                              <input
                                className="input-group-text"
                                data-bs-toggle="collapse"
                                href="#multiCollapseExample1"
                                role="button"
                                aria-expanded="false"
                                aria-controls="multiCollapseExample1"
                                onClick={() => setIsVisible(!isVisible)}
                                placeholder='1 Travller'
                                style={{ height: "50px", width: "100%", border: "solid", borderRadius: "20px" }}

                              />
                              <div className={`overlay ${isVisible ? 'visible' : ''}`}>
                                <p>This div overlaps others when toggled!</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Link className="col btn btn-primary" style={{ height: "100%", borderRadius: "20px", marginTop: "15px" }}
                        onClick={handleSearch} disabled={!location || !checkInDate || !checkOutDate}
                        to={"/viewproperty"}
                        >
                        Search
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}