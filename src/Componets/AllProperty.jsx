import { useEffect, useState } from "react"
import ApiServices from "../ApiServices"
import { Link, useNavigate } from "react-router-dom"
import ResponsivePagination from 'react-responsive-pagination';

export default function AllProperty() {
    var [data, setData] = useState()
    let [totalpages, settotalpages] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 10

    var nav = useNavigate()

    useEffect(() => {
        ApiServices.propertyGetall()
            .then((res) => {
                console.log(res);
                if (res?.data?.success) {
                    setData(res?.data?.data)
                    settotalpages(Math.ceil(res?.data?.data?.length / limit))

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
                        <h1>all property / booking</h1>
                        <div className="row" >
                            {
                                data?.slice((currentPage - 1) * limit, ((currentPage - 1) * limit) + limit).map((el, i) => (
                                    <div key={i} className="col-12" >
                                        <div className="card " >

                                            <div className="row">
                                                <div className="col-4">
                                                    <img src={el?.image[0]} className="card-img-top" alt="image" />
                                                </div>

                                                <div className="col">
                                                    <div className="card-body">
                                                        <h5 className="card-title">property name : {el?.siteName}</h5>
                                                        <p className="card-text">property type : {el?.siteType}</p>
                                                        <p className="card-text">description : {el?.description}description</p>
                                                        <p className="card-text">createdAt : {el?.createdAt}</p>
                                                        <p className="card-text">address : {el?.address}</p>

                                                        <div className="row">
                                                            <div className="col">
                                                                <Link className="btn btn-outline-primary d-flex justify-content-center" to={"/booking/" + el?._id}
                                                                    style={{ border: "1px solid black", height: "40px", width: "150px", marginTop: "40px" }}
                                                                >View</Link>
                                                            </div>
                                                            <div className="col">
                                                                <Link className="btn btn-outline-primary d-flex justify-content-center" to={"/booking/" + el?._id}
                                                                    style={{ border: "1px solid black", height: "40px", width: "150px", marginTop: "40px" }}
                                                                >Book Now</Link>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" style={{ backgroundColor: "#f5f7f6" }}
                            colSpan={5}
                        >
                            <ResponsivePagination
                                current={currentPage}
                                total={totalpages}
                                onPageChange={setCurrentPage}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}