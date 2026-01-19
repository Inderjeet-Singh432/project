import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiServices from "../../ApiServices";

export default function ManageProperty() {
    let { id } = useParams()
    const abParam = useParams()
    console.log(abParam.id);

    const Data = {
        _id: id
    }

useEffect((e) => {
        //property get single api
        ApiServices.getSingle(Data)
            .then((res) => {
                console.log("response is ", res?.data?.data);
                
            })
            .catch((err) => {
                console.log("error is", err);
            })
    })

    return (
        <>
            <section className="latest-news-events">
                <div className="container">
                    <div className="row" style={{ backgroundColor: "#f5f7f6" }}>
                        <h1>manage property page</h1>
                        <div className="row" style={{ width:"100%"}}>
                                  <div className="col-12">
                                      <div className="card"  >
                                        <div className="row">
                                            <div className="col-4" >
                                                <img src="" alt="image" className="card-img-top" />
                                            </div>

                                            <div className="col-8" >
                                                <div className="card-body">
                                                    <h5 className="card-title">property name </h5>
                                                    <p className="card-text">property type</p>
                                                    <p className="card-text">descriptiondescription</p>
                                                    <p className="card-text">createdAt</p>
                                                    <p className="card-text">address</p>

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