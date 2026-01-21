import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import ApiServices from "../../ApiServices"

export default function Booking() {
    var [siteName, setSiteName] = useState("")
    var [siteType, setSiteType] = useState("")
    var [address, setAddress] = useState("")
    var [description, setDescription] = useState("")
    var [state, setState] = useState("")
    var [city, setCity] = useState("")
    var [pincode, setPincode] = useState("")
    var [licence, setLicence] = useState("")
    var [preImage, setPreImage] = useState()
    var [image, setImage] = useState()

    let { id } = useParams()
    const abParam = useParams()
    // console.log(abParam.id);
    const Data = {
        _id: id
    }

    useEffect((e) => {
        //property get single api
        ApiServices.getSingle(Data)
            .then((res) => {
                console.log("response is ", res?.data?.data);
                setSiteName(res?.data?.data?.siteName)
                setSiteType(res?.data?.data?.siteType)
                setAddress(res?.data?.data?.address)
                setDescription(res?.data?.data?.description)
                setState(res?.data?.data?.state)
                setCity(res?.data?.data?.city)
                setPincode(res?.data?.data?.pincode)
                setLicence(res?.data?.data?.licence)
                setImage(res?.data?.data?.image)
            })
            .catch((err) => {
                console.log("error is", err);
            })
    }, [])

    return (
        <>
            <section className="featured-courses horizontal-column courses-wrap">
                <div className="container">
                    <div className="row" style={{ backgroundColor: "#f5f7f6" }}>
                        <h1>booking page</h1>
                        <div className="row" style={{ width: "100%" }}>
                            <div className="col-12">
                                <div className="card"  >
                                    <div className="row">
                                        <div className="col-4" >
                                            <img src={image} alt="image" className="img-fluid" style={{ width: "100%", height: "auto" }} />
                                        </div>

                                        <div className="col-8" >
                                            <div className="row">
                                                <div className="col-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title">property name :  {siteName} </h5>
                                                        <p className="card-text">property type : {siteType} </p>
                                                        <p className="card-text">description : {description}</p>
                                                        <p className="card-text">licence :{licence}</p>
                                                        <textarea value={address + " " + state + " " + city + " " + pincode}></textarea>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <Link className="btn btn-outline-primary d-flex justify-content-center"
                                                    style={{ border: "1px solid black", height: "40px", width: "150px", marginTop: "40px" }}
                                                  
                                                    >Book now</Link>
                                                     <Link className="btn btn-outline-primary d-flex justify-content-center"
                                                    style={{ border: "1px solid black", height: "40px", width: "150px", marginTop: "40px" }}
                                                    to={"/"}
                                                    >Back</Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}