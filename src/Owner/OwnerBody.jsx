import ApiServices from "../ApiServices"
import { useEffect, useState } from "react";

export default function OwnerBody() {
    var [data, setData] = useState([])

    useEffect(() => {
        ApiServices.OwnerGetall()
            .then((res) => {
                // console.log(res?.data);
                if (res?.data?.success) {
                    setData(res?.data?.data)
                    // console.log(res);
                }
                else {
                    // console.log("then block called but got error");
                }
            })
            .catch((err) => {
                // console.log("error is", err);
            })
    }, [])

    return (
        <>
            <section className="latest-news-events">
                <div className="container">
                    <div className="row">

                        <h1>ownerBody</h1>
                        <br />
                        <table className="table border-solid">
                            <thead>
                                <tr>
                                    <th>Sr no.</th>
                                    <th>Email</th>
                                    <th>created at</th>
                                </tr>
                                {
                                    data?.map((el, i) => (
                                         <tr key={i}>
                                                <td>{i}</td>
                                                <td>{el?.email}</td>
                                                <td>{el?.createdAt}</td>
                                            </tr>
                                    ))
                                }
                            </thead>
                        </table>

                    </div>
                </div>
            </section >
        </>
    )
}