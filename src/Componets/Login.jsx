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
                 toast.error("something went wrong")
                
        } 
  }
    return(
        <>
        <section className="latest-news-events">
    <div className="container">
      <div className="row">
        <div className="col-12"style={{paddingTop:"30px", paddingBottom:"70px",paddingLeft:"20%",paddingRight:"30%"}}>
             <ToastContainer/>
           
                 <h4>Login</h4>
                <form className="" onSubmit={handewlform} >
                    <div className="container-fluid">
                        <label  className="form-label">Email address</label>
                        <input type="email" className="form-control" placeholder="enter your email"
                        value={email}
                        onChange={(e)=>(setemail(e.target.value))}
                        />
                    </div>
                     <div className="container-fluid">
                        <label  className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="enter password"
                        value={password}
                         onChange={(e)=>{setpassword(e.target.value)}}
                        />
                    </div>
                    <button className="btn btn-primary" type='submit' style={{marginTop:"40px"}}>Submit</button>
                </form>

        </div>
        </div>
        </div>
</section> 
      </>
    )
}