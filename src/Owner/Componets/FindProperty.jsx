import { useEffect, useState } from "react"
import ApiServices from "../../ApiServices";

export default function FindProperty() {
    // var  [data , setData]= useState()
    useEffect(()=>{
        ApiServices.propertyGetall()
       .then((res)=>{
        console.log(res);
        // setData(res)
       })
       .catch((err)=>{
        console.log("error",err);
        
       })
            // 
    },[])
    return (
        <>
            <section className="featured-courses horizontal-column courses-wrap">
                <div className="container">
                    <div className="row">
                        <h1>find propertyd</h1>
                        <table className="table table-border-solid">
                            <thead>
                                <tr>
                                    <th>Sr no.</th>
                                    <th>Property Name</th>
                                    <th>Property Type</th>
                                    <th>State</th>
                                    <th>City</th>
                                    <th>Address</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            {/* {
                                data?.map((el,i)=(
                                    <tr key={i}>
                                        <td>{i}</td>
                                        <td>{el.name}</td>
                                        <td>{el.siteType}</td>
                                        <td>{el.state}</td>
                                        <td>{el.city}</td>
                                        <td>{el.address}</td>
                                        <td>{el.email}</td>
                                    </tr>
                                ))
                            } */}
                        </table>

                    </div>
                </div>
            </section>
        </>
    )
}