import { useEffect, useState } from "react"
import {  useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import ApiServices from "../../ApiServices"
import { BarLoader } from "react-spinners"
import Swal from "sweetalert2"


export default function AddProperty() {
  var [siteName, setSiteName] = useState("")
  var [siteType, setSiteType] = useState("")
  var [address, setAddress] = useState("")
  var [description, setDescription] = useState("")
  var [state, setState] = useState("")
  var [city, setCity] = useState("")
  var [pincode, setPincode] = useState("")
  var [licence, setLicence] = useState("")
  var [image, setImage] = useState(null)
  var [load, setLoad] = useState(false)

    var nav = useNavigate()  

      const cancel = (() => {
        Swal.fire({
          title: "Are you sure to logout?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes!!"
        })
    
          .then((result) => {
            if (result.isConfirmed) {
              // sessionStorage.clear()
              //  setTimeout(() => {
              nav("/")
              //  }, 4000);
              Swal.fire({
                title: "Logout!",
                text: "Logout successfully!!!.",
                icon: "success"
              });
    
            }
          })
      })

  const handewlform = (e) => {
    e.preventDefault()
    setLoad(true)
    //------------------------------------  below data pass with form data
    let data = new FormData()

    data.append("siteName", siteName)
    data.append("siteType", siteType)
    data.append("address", address)
    data.append("description", description)
    data.append("email", sessionStorage.getItem("email"))
    data.append("state", state)
    data.append("city", city)
    data.append("userId", sessionStorage.getItem("userid"))
    data.append("pincode", pincode)
    data.append("licence", licence)
    data.append("image", image)

    ApiServices.propertyAdd(data)
      .then((res) => {
        console.log("res is", res);
        if (res?.data?.success == false) {

          if (res?.data?.message?.length == null) {
            toast.error(res?.data?.message)
          }
          else {
            for (let index = 0; index < res?.data?.message?.length; index++) {
              toast.error(res?.data?.message[index]);
              setLoad(false)
            }
            toast.error(res?.data?.message)           
          } 
        }
        else{
          toast.success(res?.data?.message)
            setTimeout(() => {
              setLoad(false)
              nav("/Owner")
            }, 4000)
          }        
      })

      .catch((err) => {
        setLoad(false)
        console.log(err);
      })
  }
  
    const handleImageChange = (e) => {
    setImage(e.target.files[0]); // store image file
  };
  return (
    <>
      <section className="featured-courses horizontal-column courses-wrap">
        <div className="container">
          <ToastContainer />
          <BarLoader cssOverride={{ marginLeft: "45%" }} loading={load} />
          <div className="row">
            <h1>add new property</h1>
            {!load ?
              <div className="col-12" style={{ border: "1.2px solid", paddingTop: "30px", paddingLeft: "10%", paddingRight: "10%", paddingBottom: "30px" }}>
                <h4 style={{ marginBottom: "30px" }}>Add Your Prpperty</h4>
                <form className=""
                  onSubmit={handewlform}
                >
                  {/* property name */}
                  <div className="container-fluid">
                    <label className="form-label">Property Name</label>
                    <input type="text" className="form-control" placeholder="enter property name(hotel , pg , dormitory)"
                      value={siteName}
                      onChange={(e) => (setSiteName(e.target.value))}
                    />
                  </div>
                  {/*/property type */}
                  <div className="container-fluid">
                    <label className="form-label">Property Type</label>
                    <input type="text" className="form-control" placeholder="enter your hotel pg  dormitory"
                      value={siteType}
                      onChange={(e) => (setSiteType(e.target.value))}
                    />
                  </div>
                  {/* state */}
                  <div className="container-fluid">
                    <label className="form-label">State</label>
                    <input type="text" className="form-control" placeholder="enter your state"
                      value={state}
                      onChange={(e) => (setState(e.target.value))}
                    />
                  </div>
                  {/* city  */}
                  <div className="container-fluid">
                    <label className="form-label">City</label>
                    <input type="text" className="form-control" placeholder="enter your city"
                      value={city}
                      onChange={(e) => (setCity(e.target.value))}
                    />
                  </div>
                  {/* pincode  */}
                  <div className="container-fluid">
                    <label className="form-label">Pincode</label>
                    <input type="text" className="form-control" placeholder="enter your pincode"
                      value={pincode}
                      onChange={(e) => (setPincode(e.target.value))}
                    />
                  </div>
                  {/* address  */}
                  <div className="container-fluid">
                    <label className="form-label">address</label>
                    <textarea name="" id="" rows={5} cols={50} placeholder="enter your full address"
                      value={address}
                      onChange={(e) => (setAddress(e.target.value))}
                    >
                    </textarea>
                  </div>
                  {/* description  */}
                  <div className="container-fluid">
                    <label className="form-label">Description</label>
                    <input type="text" className="form-control" placeholder="enter your Description"
                      value={description}
                      onChange={(e) => (setDescription(e.target.value))}
                    />
                  </div>
                  {/* image  */}
                  <div className="container-fluid">
                    <label className="form-label">Upload Image</label>
                    <input type="file" className="form-control" placeholder="uplode images of your property"
                      // value={image}
                      // onChange={(e) => (setImage(e.target.value))}
                          accept="image/*"
                    onChange={handleImageChange}
                    required
                    />
                  </div>
                  {/* licence  */}
                  <div className="container-fluid">
                    <label className="form-label">Licence</label>
                    <input type="text" className="form-control" placeholder="uplode images of your property"
                      value={licence}
                      onChange={(e) => (setLicence(e.target.value))}
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
        </div>
      </section>
    </>
  )
}