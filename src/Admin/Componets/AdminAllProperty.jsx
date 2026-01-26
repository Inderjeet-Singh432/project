import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ResponsivePagination from 'react-responsive-pagination';
import AdminApiServices from "../../AdminApiServices";
import Switch from "react-switch";

export default function AdminAllProperty(){
        var [data, setData] = useState([])
        let [totalpages, settotalpages] = useState([])
        const [currentPage, setCurrentPage] = useState(1);
        const limit = 15
    
        var nav = useNavigate()
    
        useEffect(() => {
            AdminApiServices.propertyGetall()
                .then((res) => {
                    if (res?.data?.success) {
                        setData(res?.data?.data)
                        // console.log(res?.data?.data);
                        settotalpages(Math.ceil(res?.data?.data?.length / limit))
                    }
                    else {
                        // console.log("then block called but got error");
                    }
                })
                .catch((err) => {
                    // console.log("error is", err);
                })
        }, [])

       const ChangeStatus = (id, status) => {
            // console.log(id);
            let formdata = new FormData()
            formdata.append("_id", id)
            formdata.append("status", !status)
            // ApiServices.changeStatus({ _id: id, status: !status })
            // .then((res) => {
            //     console.log("abc",res);
            //     })
            //     .catch((err)=>{
            //         console.log(err);
            //     })
            ApiServices.changeStatus(formdata)
                .then((res) => {
                    console.log("abcdefgh", res);
                    fatch()
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    return(
        <>
              <section className="latest-news-events">
                <div className="container">
                                        
                       <div className="row" style={{ backgroundColor: "#f5f7f6" }} >
                        <h1>Property</h1>
                        <table className="" style={{ border: "solid 3px", width: "100%", margin: "2%" }}>
                            <thead><tr>
                                <th>Sr no.</th>
                                <th>Property Name.</th>
                                <th>Property Type.</th>
                                <th>address</th>
                                <th>Created At</th>
                                <th>Created by</th>
                                <th>status.</th>
                                <th>Delete User</th>
                            </tr></thead>
                            <tbody>
                                {
                                    data?.slice((currentPage - 1) * limit, ((currentPage - 1) * limit) + limit).map((el, i) => (
                                        <tr key={i} style={{ border: "solid 3px" }} >
                                            <td>{((currentPage - 1) * limit) + i + 1}</td>
                                            <td>{el?.siteName}</td>
                                            <td>{el?.siteType}</td>
                                            <td>{el?.address}</td>
                                            <td>{el?.createdAt}</td>
                                            <td>{el?.userId?.email}</td>
                                            <td>
                                                <Switch
                                                    className="react-switch"
                                                    onChange={() => {
                                                        ChangeStatus(el?._id, el?.status)
                                                    }}
                                                    checked={el.status}
                                                    aria-label="super secret label that is not visible"
                                                />
                                            </td>
                                            <td>
                                                {/* <Link className="btn btn-danger" to={"/admin/manage"+el?._id}  
                                                >Delete</Link> */}
                                                <Link to={"/admin/delete/"+el?._id}
                                                    className="btn btn-danger"
                                                    style={{ border: "1px solid black", height: "40px", margin: "2px", width: "auto", color: "white" }}
                                                >Delete</Link>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
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
            </section >
        </>
    )
}