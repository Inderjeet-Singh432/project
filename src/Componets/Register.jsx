import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import ApiServices from "../ApiServices"
import { BarLoader } from "react-spinners"

export default function Register() {
  var [name, setName] = useState("")
  var [email, setEmail] = useState("")
  var [password, setPassword] = useState("")
  var [load, setLoad] = useState(false)

  var nav = useNavigate()

  const handewlform = (e) => {
    e.preventDefault()
    setLoad(true)

    let data = {
      name: name,
      email: email,
      password: password
    }
    ApiServices.register(data)
      .then((res) => {
        // console.log("res is", res);
        if (res?.data?.success) {
          toast.success(res?.data?.message)
          sessionStorage.setItem("_id", res?.data?.data?._id)
          sessionStorage.setItem("name", res?.data?.data?.name)
          sessionStorage.setItem("email", res?.data?.data?.email)
          sessionStorage.setItem("userType", res?.data?.data?.userType)
          setEmail("")
          setPassword("")
          if (res.data.data.userType == "2") {
            // console.log("owner login!!");
            setTimeout(() => {
              setLoad(false)
              nav("/Owner")
            }, 4000)
          }
        }
        else {
          setLoad(false)
          toast.error(res.data.message)
          // console.log("error aya hai");
        }


      })
      .catch((err) => {
        setLoad(false)
        // console.log("error is", err);
        toast.error("Something went wrong!!")
      })

  }
  return (
    <>
      <section className="featured-courses horizontal-column courses-wrap">
        <div className="container">
          <ToastContainer />
          <BarLoader cssOverride={{ marginLeft: "45%" }} loading={load} />
          <div className="row">
            {!load ?
              <div className="col-12" style={{ border: "1.2px solid", paddingTop: "30px", paddingLeft: "10%", paddingRight: "10%", paddingBottom: "30px" }}>


                <h4 style={{ marginBottom: "30px" }}>Register</h4>
                <form className="" onSubmit={handewlform} >
                  <div className="container-fluid">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="enter your name"
                      value={name}
                      onChange={(e) => (setName(e.target.value))}
                    />
                  </div>
                  <div className="container-fluid">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" placeholder="enter your email"
                      value={email}
                      onChange={(e) => (setEmail(e.target.value))}
                    />
                  </div>
                  <div className="container-fluid">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder="enter password"
                      value={password}
                      onChange={(e) => { setPassword(e.target.value) }}
                    />
                  </div>

                  <div className="d-flex justify-content-between">
                    <button className="btn btn-primary" type='submit' style={{ height: "40px", width: "100px", marginTop: "40px" }} >Submit</button>
                    <Link to={"/"} className="btn btn-outline-primary d-flex justify-content-center" style={{ height: "40px", width: "100px", marginTop: "40px" }} >cancel</Link>
                  </div>

                </form>

              </div>
              : ""}
          </div>
        </div>
      </section>
    </>
  )
}