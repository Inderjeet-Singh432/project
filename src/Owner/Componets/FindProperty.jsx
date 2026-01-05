import { useEffect, useState } from "react"
import ApiServices from "../../ApiServices";

export default function FindProperty() {
      var [data, setData] = useState([])
      
    useEffect(() => {
        ApiServices.propertyGetall()
            .then((res) => {
                // console.log(res);
                if (res?.data?.success) {
                    setData(res?.data?.data)
                }
                else {
                }
            })
            .catch((err) => {
            })
    }, [])

    return (
        <>
            <section className="featured-courses horizontal-column courses-wrap">
                <div className="container">
                    <div className="row">
                        <h1>find property/ all propertyes</h1>
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
                                    {/* <th>Image</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                  {
                                    data?.map((el, i) => (
                                         <tr key={i}>
                                                <td>{i}</td>
                                                <td>{el?.siteName}</td>
                                                <td>{el?.siteType}</td>
                                                <td>{el?.state}</td>
                                                <td>{el?.city}</td>
                                                <td>{el?.address}</td>
                                                <td>{el?.email}</td>
                                                {/* <td >{el?.image}</td> */}
                                            </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </section>
        </>
    )
}