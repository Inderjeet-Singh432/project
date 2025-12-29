import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import ApiServices from "../../ApiServices"
import { BarLoader } from "react-spinners"

export default function AddProperty() {
      var [data, setData] = useState("")
      var [siteName, setSiteName] = useState("")
      var [siteType, setSiteType] = useState("")
      var [address, setAddress] = useState("")
      var [description, setDescription] = useState("")
      var [state, setState] = useState("")
      var [city, setCity] = useState("")
      var [pincode, setPincode] = useState("")
      var [email, setEmail] = useState("")
      var [image, setImage] = useState("")
      var [password, setPassword] = useState("")
      var [load, setLoad] = useState(false)
    
      var nav = useNavigate()
    
      sessionStorage.clear()
    
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
                        <h1>add property</h1>
                           {!load ?
                                      <div className="col-12" style={{ border: "1.2px solid", paddingTop: "30px", paddingLeft: "10%", paddingRight: "10%", paddingBottom: "30px" }}>
                                        <h4 style={{ marginBottom: "30px" }}>Add Your Prpperty</h4>
                                        <form className="" onSubmit={handewlform} >

                                          <div className="container-fluid">
                                            <label className="form-label">Property Name</label>
                                            <input type="text" className="form-control" placeholder="enter property name(hotel , pg , dormitory)"
                                              value={siteName}
                                              onChange={(e) => (setSiteName(e.target.value))}
                                            />
                                          </div>

                                           <div className="container-fluid">
                                            <label className="form-label">Property Type</label>
                                            <input type="text" className="form-control" placeholder="enter your name"
                                              value={siteType}
                                              onChange={(e) => (setSiteType(e.target.value))}
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

                                           <div className="container-fluid">
                                            <label className="form-label">State</label>
                                            <input type="text" className="form-control" placeholder="enter your name"
                                              value={state}
                                              onChange={(e) => (setState(e.target.value))}
                                            />
                                          </div>

                                           <div className="container-fluid">
                                            <label className="form-label">City</label>
                                            <input type="text" className="form-control" placeholder="enter your name"
                                              value={city}
                                              onChange={(e) => (setCity(e.target.value))}
                                            />
                                          </div>

                                           <div className="container-fluid">
                                            <label className="form-label">Pincode</label>
                                            <input type="text" className="form-control" placeholder="enter your name"
                                              value={pincode}
                                              onChange={(e) => (setPincode(e.target.value))}
                                            />
                                          </div>

                                           <div className="container-fluid">
                                            <label className="form-label">address</label>
                                            <input type="text" className="form-control" placeholder="enter your name"
                                              value={address}
                                              onChange={(e) => (setAddress(e.target.value))}
                                            />
                                          </div>

                                          <div className="container-fluid">
                                            <label className="form-label">Description</label>
                                            <input type="text" className="form-control" placeholder="enter your name"
                                              value={description}
                                              onChange={(e) => (setDescription(e.target.value))}
                                            />
                                          </div>

                                           <div className="container-fluid">
                                            <label className="form-label">Upload Image</label>
                                            <input type="text" className="form-control" placeholder="enter your name"
                                              value={image}
                                              onChange={(e) => (setImage(e.target.value))}
                                            />
                                          </div>
                        
                                          <div className="d-flex justify-content-between">
                                            <button className="btn btn-primary" type='submit' style={{ height: "40px", width: "100px", marginTop: "40px" }} >Submit</button>
                                            <Link to={"/owner"} className="btn btn-outline-primary d-flex justify-content-center" style={{ height: "40px", width: "100px", marginTop: "40px" }} >cancel</Link>
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