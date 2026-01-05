import { useEffect, useState } from "react"
import ApiServices from "../ApiServices"

export default function AllProperty() {
    var [data, setData] = useState()
    useEffect(() => {
        ApiServices.propertyGetall()
            .then((res) => {
                console.log(res);
                if (res?.data?.success) {
                    setData(res?.data?.data)
                }

            })
            .catch((err) => {
                console.log(err);

            })
    }, [])
    return (
        <>
            <section className="featured-courses horizontal-column courses-wrap">
                <div className="container">
                    <div className="row" >
                        <h1>all_property</h1>
                        <div className="row" >
                            {
                                data?.map((el, i) => (
                                    <div key={i} style={{ margin: "10px" }}>
                                        <div className="card-group">
                                            <div className="card">
                                                <img src="public\Assets\images\3.jpg" className="card-img-top " style={{ height: "auto", widows: "auto" }} alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">property name {el?.siteName}</h5>
                                                    <p className="card-text">property type{el?.siteType}</p>
                                                    <p className="card-text">description{el?.description}description</p>
                                                    <p className="card-text">createdAt{el?.createdAt}</p>
                                                    <p className="card-text">address{el?.address}</p>
                                                </div>
                                                <div className="card-footer">
                                                    <small className="text-body-secondary">Last updated 3 mins ago</small>
                                                    <button className="btn btn-primary">
                                                        edit
                                                    </button>
                                                    <button className="btn btn-danger" style={{ marginLeft: "10px" }}>
                                                        delete
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}