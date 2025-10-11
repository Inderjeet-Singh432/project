import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Link, useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { toast, ToastContainer } from 'react-toastify';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',

  },
};
// Modal.setAppElement('#yourAppElement');

export default function Header(){
    var [email,setemail]=useState("")
    var [password,setpassword]=useState("")
    var  nav= useNavigate()


  const [modalIsOpen, setIsOpen] =useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const  handewlform=(e)=>{
     e.preventDefault()
     console.log("hitme")

        if(email == "admin@gmail.com" && password=="123"){
            toast.success("Admin login successfully!!")
                console.log("form is submitted!!");
                // store data
                sessionStorage.setItem("email","admin@gmail.com")
                sessionStorage.setItem("name","admin")
                sessionStorage.setItem("isLogin",true)
              
                setTimeout(()=>{
                    nav("/admin")
                },4000)
        }
        else if(email =="hotel@gmail.com" && password=="123"){
            toast.success("hotel login successfully!!")

            sessionStorage.setItem("email","hotel@gmail.com")
            sessionStorage.setItem("name","hotel owner")
            sessionStorage.setItem("isLogin",true)

            setTimeout(()=>{
                    nav("/hotel")
                },4000)
        }
        else if(email =="pg@gmail.com" && password=="123"){
            toast.success("pg login successfully!!")

            sessionStorage.setItem("email","pg@gmail.com")
            sessionStorage.setItem("name","PG owner")
            sessionStorage.setItem("isLogin",true)

            setTimeout(()=>{
                    nav("/pg")
                },4000)
        }
        else if(email =="domitory@gmail.com" && password=="123"){
            toast.success("domitory login successfully!!")

            sessionStorage.setItem("email","domitory@gmail.com")
            sessionStorage.setItem("name","domitory owner")
            sessionStorage.setItem("isLogin",true)

            setTimeout(()=>{
                    nav("/domitory")
                },4000)
        }
            else{
                console.log("form is not submitted!!");
        toast.error("error")
                
        } 
  }
    return(
        <>
        <header id="header" className="header d-flex align-items-center fixed-top">
          <ToastContainer/>
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
     <Link onClick={openModal}  className="cta-btn" to="">Login</Link>
       
    </div>
  </div>
      
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"    >
           
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
        <button onClick={closeModal} type="button" className="btn btn-outline-primary">Close</button>
    </form>
  </Modal>
          
</header>
        </>
    )
}