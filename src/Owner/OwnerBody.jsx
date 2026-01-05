import ApiServices from "../ApiServices"
import { useEffect, useState } from "react";

export default function OwnerBody() {
    var [data, setData] = useState([])

    useEffect(() => {
        ApiServices.propertyGetall({ email: sessionStorage.getItem("email") })
            .then((res) => {
                if (res?.data?.success) {
                    setData(res?.data?.data)
                    console.log(res?.data?.data);
                }
                else {
                    console.log("then block called but got error");
                }
            })
            .catch((err) => {
                console.log("error is", err);
            })
    }, [])

    return (
        <>
            <section className="latest-news-events">
                <div className="container">
                    <div className="row">

                        <h1>your property`s</h1>
                            <div className="row" >
                                          {
                                    data?.map((el, i) => (
                                    <div key={i} className="col-4">
                                              <div className="card " style={{ width: "18rem" }}>
                                                    <img src={el?.image} className="card-img-top" alt="image" />
                                                    <div className="card-body">
                                                        <h5 className="card-title">property name {el?.siteName}</h5>
                                                        <p className="card-text">property type{el?.siteType}</p>
                                                        <p className="card-text">description{el?.description}description</p>
                                                        <p className="card-text">createdAt{el?.createdAt}</p>
                                                        <p className="card-text">address{el?.address}</p>
                                                        <button className="btn btn-primary">
                                                          edit
                                                        </button>
                                                         <button className="btn btn-danger d-flex justify-content-center">
                                                          delete
                                                        </button>
                                                    </div>
                                                </div>
                                    </div>
                                              
                                    ))
                                }
                               
                            </div>
                              
                         

                    </div>
                </div>
            </section >
        </>
    )
}
