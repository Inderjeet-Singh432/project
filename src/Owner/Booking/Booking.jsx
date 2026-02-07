import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import ApiServices from "../../ApiServices"
import ReactModal from "react-modal"


import React from "react";
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
                // console.log("response is ", res?.data?.data);
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
                // console.log("error is", err);
            })
    }, [])


      const buy = async (amt2) => {
        //   <script src="https://checkout.razorpay.com/v1/checkout.js"></script>  CND LINK
        const options = {
            key: "rzp_test_Q8bKRaQdmgftXW", // Replace with your Razorpay key
            amount: amt2 * 100, // Amount in paise (₹500 = 50000)
            currency: "INR",            
            name: "ABC",
            description: "Test Transaction",
            handler:async function (response) {
                // success
                console.log(response);
            },
            prefill: {
                name: "Arshpreet Singh",
                email: "arsh@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Test Address",
            },
            theme: {
                color: "#33cca3ff",
            },
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
        return options
    };

    // const [modalIsOpen, setIsOpen] = useState(false);
    // function openModal() {
    //     setIsOpen(true);
    // }
    // function closeModal() {
    //     setIsOpen(false);
    // }
    // function buy(){
    //     console.log("abcdefjsndvjksdnfjn");
        
    // }
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
                                                        onClick={buy}
                                                    >Book now</Link>
                                                    <Link className="btn btn-outline-primary d-flex justify-content-center"
                                                        style={{ border: "1px solid black", height: "40px", width: "150px", marginTop: "40px" }}
                                                        to={"/allproperty"}
                                                    >Back</Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <ReactModal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >

                            <div>this is a modal</div>
                            <button className="btn btn-outline-primary" onClick={closeModal}>close</button>

                        </ReactModal> */}
                    </div>
                </div>
            </section>
        </>
    )
}