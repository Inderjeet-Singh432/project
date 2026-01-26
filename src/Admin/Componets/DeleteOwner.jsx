import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import AdminApiServices from "../../AdminApiServices";
import Swal from "sweetalert2";

export default function DeleteOwner() {
    var [OwnerId, setOwnerId] = useState()

    let { id } = useParams()
    const abParam = useParams()
    // console.log("param id is", abParam.id);
    const Data = {
        _id: id
    }

    //delete owner api
    useEffect((e) => {
        Swal.fire({
            title: "Are you sure to delete this Owner",
            //  text: "You won't be able to revert this!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!!"
        })

            .then((result) => {
                if (result.isConfirmed) {
                    AdminApiServices.hardDelete(Data)
                        .then((res) => {
                            // console.log(res?.data?.data);
                            setOwnerId(res?.data?.data?._id)
                        })
                        .catch((err) => {
                            // console.log(err);
                        })
                }
            })

    }, [])

   useEffect((e) => {
        Swal.fire({
            title: "Are you sure to delete this property",
            //  text: "You won't be able to revert this!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!!"
        })

            .then((result) => {
                if (result.isConfirmed) {
                    AdminApiServices.PHardDelete(Data)
                        .then((res) => {
                            // console.log(res?.data?.data);
                            setOwnerId(res?.data?.data?._id)
                        })
                        .catch((err) => {
                            // console.log(err);
                        })
                }
            })

    }, [])
    return (
        <>
            <section className="latest-news-events">
                <div className="container">
                    <div className="row" style={{ backgroundColor: "" }} >
                        <div className="col-12">

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}