import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function AdminHeader(){

     var nav= useNavigate()
     
      useEffect(()=>{
        let isLogin = sessionStorage.getItem('isLogin');
        if(!isLogin){
          nav("/")
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
        <h1>AdminHeader</h1>
        <button className="btn btn-outline-danger" onClick={logoutfun}>Logout</button>
        </>
    )
}