import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"

export default function Login(){
    var [email,setemail]=useState("")
    var [password,setpassword]=useState("")
    var  nav= useNavigate()

    sessionStorage.clear()

  const  handewlform=(e)=>{
     e.preventDefault()

        if(email == "admin@gmail.com" && password=="123"){
            toast.success("Admin login successfully!!")
                // store data
                sessionStorage.setItem("email","admin@gmail.com")
                sessionStorage.setItem("name","admin")
                sessionStorage.setItem("isLogin",true)
              
                setTimeout(()=>{
                    nav("/admin")
                },4000)
        } else if(email == "owner@gmail.com" && password=="123"){
            toast.success("Owner login successfully!!")
                // store data
                sessionStorage.setItem("email","owner@gmail.com")
                sessionStorage.setItem("name","admin")
                sessionStorage.setItem("isLogin",true)
              
                setTimeout(()=>{
                    nav("/owner")
                },4000)
        }
            else{
                 toast.error("error")
                
        } 
  }
    return(
        <>
        {/* header start */}
         <div className="hero-content">
    <header className="site-header">
      <div className="top-header-bar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-6 d-none d-md-flex flex-wrap justify-content-center justify-content-lg-start mb-3 mb-lg-0">
              <div className="header-bar-email d-flex align-items-center">
                <i className="fa fa-envelope" />
                <a href="#">tuanna.design@gmail.com</a>
              </div>
              {/* .header-bar-email */}
              <div className="header-bar-text lg-flex align-items-center">
                <p>
                  <i className="fa fa-phone" />
                  001-1234-88888{" "}
                </p>
              </div>
              {/* .header-bar-text */}
            </div>
            {/* .col */}
            <div className="col-12 col-lg-6 d-flex flex-wrap justify-content-center justify-content-lg-end align-items-center">
              <div className="header-bar-search">
                <form className="flex align-items-stretch">
                  <input
                    type="search"
                    placeholder="What would you like to learn?"
                  />
                  <button
                    type="submit"
                    value=""
                    className="flex justify-content-center align-items-center"
                  >
                    <i className="fa fa-search" />
                  </button>
                </form>
              </div>
              {/* .header-bar-search */}
              <div className="header-bar-menu">
                <ul className="flex justify-content-center align-items-center py-2 pt-md-0">
                  <li>
                    <a href="#">Register</a>
                  </li>
                  <li>
                    <a href="#">Login</a>
                  </li>
                </ul>
              </div>
              {/* .header-bar-menu */}
            </div>
            {/* .col */}
          </div>
          {/* .row */}
        </div>
        {/* .container-fluid */}
      </div>

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
                    className="flex justify-content-center align-items-center"
                  >
                    <span aria-hidden="true" className="icon_bag_alt" />
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
        {/* header end */}
        {/* login form start */}
          <ToastContainer/>
       <div className="container">
      <div className="row">
        <div className="col-12">
                 <div className="col-4"></div>

            <div className="col" style={{paddingTop:"30px", paddingBottom:"70px"}}>
                <h4>Login</h4>
                <form  style={{width:"400px"}} onSubmit={handewlform} >
                    <div className="mb-3">
                        <label  className="form-label">Email address</label>
                        <input type="email" className="form-control"
                        value={email}
                        onChange={(e)=>(setemail(e.target.value))}
                        />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Password</label>
                        <input type="password" className="form-control"
                        value={password}
                        onChange={(e)=>{setpassword(e.target.value)}}
                        />
                    </div>
                    <button className="btn btn-primary" type='submit'>Submit</button>
                </form>
            </div>

            <div className="col-4"></div>
        </div>
        </div>
        </div>
      {/* login form end */}
      {/* footer start */}
          <footer className="site-footer">
    <div className="footer-widgets">
      <div className="container">
        <div className="row">
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
        {/* .row */}
      </div>
      {/* .container */}
    </div>
    {/* .footer-widgets */}
    <div className="footer-bar">
      <div className="container">
        <div className="row flex-wrap justify-content-center justify-content-lg-between align-items-center">
          <div className="col-12 col-lg-6">
            <div className="download-apps flex flex-wrap justify-content-center justify-content-lg-start align-items-center">
              <a href="#">
                <img src="/Assets2/images/app-store.png" alt="" />
              </a>
              <a href="#">
                <img src="/Assets2/images/play-store.png" alt="" />
              </a>
            </div>
            {/* .download-apps */}
          </div>
          <div className="col-12 col-lg-6 mt-4 mt-lg-0">
            <div className="footer-bar-nav">
              <ul className="flex flex-wrap justify-content-center justify-content-lg-end align-items-center">
                <li>
                  <a href="#">DPA</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            {/* .footer-bar-nav */}
          </div>
          {/* .col-12 */}
        </div>
        {/* .row */}
      </div>
      {/* .container */}
    </div>
    {/* .footer-bar */}
  </footer>
      {/* footer end */}
        </>
    )
}