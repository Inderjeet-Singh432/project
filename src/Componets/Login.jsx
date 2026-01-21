import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import ApiServices from "../ApiServices"
import { BarLoader } from "react-spinners"

export default function Login() {
  var [email, setEmail] = useState("")
  var [password, setPassword] = useState("")
  var [load, setLoad] = useState(false)

  var nav = useNavigate()

  const cancel = (() => {
    setLoad(true)
    setTimeout(() => {
      sessionStorage.clear()
      nav("/")
    }, 1000)
  })


  const handewlform = (e) => {

    e.preventDefault()
    setLoad(true)

    let data = {
      email: email,
      password: password
    }
    ApiServices.Login(data)
      .then((res) => {
        if (res?.data?.success) {
          alert(res?.data?.message)
          sessionStorage.setItem("userid", res?.data?.data?.userid)
          sessionStorage.setItem("email", res?.data?.data?.userEmail)
          sessionStorage.setItem("token", res?.data?.token)
          sessionStorage.setItem("userType", res?.data?.data?.userType)

          setEmail("")
          setPassword("")
          if (res.data.data.userType == "1") {
            setTimeout(() => {
              nav("/admin")
            }, 1000)
          }
          if (res.data.data.userType == "2") {
            setTimeout(() => {
              setLoad(false)
              nav("/owner")
            }, 4000)
          }
        }

        else {
          setLoad(false)
          toast.error(res.data.message)
        }
      })

      .catch((err) => {
        setLoad(false)
        console.log("database is not conected", err);
        toast.error("Something went wrong!!")
      })
  }

  return (
    <>
      <section className="featured-courses horizontal-column courses-wrap">
        <div className="container-fluid">
          <ToastContainer />

          <div className="row">
            <div className="col-5"></div>

            <div className="col blur-overlay" style={{ marginTop: "-400px", border: "1.2px solid", paddingTop: "30px", paddingLeft: "5%", paddingRight: "5%", paddingBottom: "30px" }}>
              <BarLoader cssOverride={{ marginTop:"25%" , marginLeft:"40%"}} loading={load} />
              {!load ?
                <div>
                  <h4 style={{ marginBottom: "30px", color: "white" }}>Login</h4>
                  <form className="" onSubmit={handewlform}  >
                    <div className="container-fluid">
                      <label className="form-label" style={{ color: "white" }}>Email address</label>
                      <input type="email" className="form-control" placeholder="enter your email"
                        value={email}
                        onChange={(e) => (setEmail(e.target.value))}
                        required
                      />
                    </div>
                    <div className="container-fluid">
                      <label className="form-label" style={{ color: "white" }}>Password</label>
                      <input type="password" className="form-control" placeholder="enter password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        required
                        />
                    </div>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-primary" type='submit' style={{ height: "40px", width: "100px", marginTop: "40px" }} >Submit</button>
                      <button onClick={cancel} className="btn btn-outline-primary d-flex justify-content-center" style={{ height: "40px", width: "100px", marginTop: "40px" }} >cancel</button>
                    </div>

                  </form>
                </div>
                : ""}
            </div>

            <div className="col-1"></div>
          </div>
        </div>
      </section>
    </>
  )
}