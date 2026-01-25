import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiServices from "../../ApiServices";

export default function ManageProperty() {
    var [siteName, setSiteName] = useState("")
  var [siteType, setSiteType] = useState("")
  var [address, setAddress] = useState("")
  var [description, setDescription] = useState("")
  var [state, setState] = useState("")
  var [city, setCity] = useState("")
  var [pincode, setPincode] = useState("")
  var [licence, setLicence] = useState("")
  var [createdAt, setCreatedAt] = useState("")
  var [preImage, setPreImage] = useState()
  var [image, setImage] = useState()
//   var [load, setLoad] = useState(false)
    let { id } = useParams()
    const abParam = useParams()
    // console.log(abParam.id);

    const Data = {
        _id: id
    }
    //property get single api
useEffect((e) => {
        ApiServices.getSingle(Data)
            .then((res) => {
                console.log("response is ", res?.data?.data);

                // setPreImage(res?.data?.data?.image)
                setSiteName(res?.data?.data?.siteName)
                setSiteType(res?.data?.data?.siteType)
                setAddress(res?.data?.data?.address)
                setDescription(res?.data?.data?.description)
                setState(res?.data?.data?.state)
                setCity(res?.data?.data?.city)
                setPincode(res?.data?.data?.pincode)
                setLicence(res?.data?.data?.licence)
                setCreatedAt(res?.data?.data?.createdAt)
                setImage(res?.data?.data?.image)                
            })
            .catch((err) => {
                console.log("error is", err);
            })
    },[])

    return (
        <>
            <section className="latest-news-events">
                <div className="container">
                    <div className="row" style={{ backgroundColor: "#f5f7f6" }}>
                        <h1>manage property page / get single property</h1>
                        <div className="row" style={{ width:"100%"}}>
                                  <div className="col-12">
                                      <div className="card"  >
                                        <div className="row">
                                            <div className="col-4" >
                                                <img src={image} alt="image" className="img-fluid"  style={{width:"100%",height:"auto"}} />
                                            </div>

                                            <div className="col-8" >
                                                <div className="card-body">
                                                    <h5 className="card-title">property name :  {siteName} </h5>
                                                    <p className="card-text">property type : {siteType} </p>
                                                    <p className="card-text">address :{address}</p>
                                                    <p className="card-text">description : {description}</p>
                                                    <p className="card-text">state :{state}</p>
                                                    <p className="card-text">city :{city}</p>
                                                    <p className="card-text">pincode :{pincode}</p>
                                                    <p className="card-text">licence :{licence}</p>
                                                    <p className="card-text">createdAt :{createdAt}</p>
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