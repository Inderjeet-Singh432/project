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
                                    <div className="col-4"  key={i} style={{marginTop:"10px" ,marginBottom:"10px"}}>
                                        <div className="card-group">
                                            <div className="card">
                                                {/* <img src="public\Assets\images\3.jpg" className="card-img-top " style={{ height: "auto", widows: "auto" }} alt="..." /> */}
                                                    <img src={el?.image[0]} className="card-img-top" alt="image" />
                                                
                                                <div className="card-body">
                                                    <h5 className="card-title">{el?.siteName}</h5>
                                                    <p className="card-text">{el?.siteType}</p>
                                                    <p className="card-text">{el?.description}</p>
                                                    <p className="card-text">{el?.createdAt}</p>
                                                    <p className="card-text">{el?.address}</p>
                                                </div>
                                                <div className="card-footer">
                                                    <button className="btn btn-primary">
                                                        view
                                                    </button>
                                                    <button className="btn btn-primary" style={{ marginLeft: "10px" }}>
                                                        Book now
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