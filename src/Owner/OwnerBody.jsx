import ApiServices from "../ApiServices"
import { useEffect,useState } from "react";

  

export default function OwnerBody() {
    var [data, setData] = useState([])

      useEffect(() => {
        ApiServices.getall()
            .then((res) => {
                if (res) {
                    // setData(res)
                    // console.log(res?.data);
                    setData(res?.data)
                }
                else {
                    console.log("abcd3");
                }
            })
            .catch((err) => {
                console.log("abcd5",err);
            })
    })
    return (
        <>
            <section className="latest-news-events">
                <div className="container">
                    <div className="row">

                        <h1>ownerBody</h1>
                               
                    </div>
                </div>
            </section>
        </>
    )
}