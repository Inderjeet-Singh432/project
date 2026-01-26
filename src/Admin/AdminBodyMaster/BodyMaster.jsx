import { Link, Outlet } from "react-router-dom";
export default function BodyMaster() {

    return (
        <>
            <section className="latest-news-events">
                <div className="container">
                    <div className="row">
                        <Link className="btn btn-outline-primary d-flex justify-content-center" to={"/admin/owners"}
                            style={{ border: "1px solid black", height: "40px", width: "150px", marginRight:"30px",marginTop: "40px" }}
                        >Owners</Link>
                        <Link className="btn btn-outline-primary d-flex justify-content-center" to={"/admin/property"}
                            style={{ border: "1px solid black", height: "40px", width: "150px", marginRight:"30px",marginTop: "40px" }}
                        >Property</Link>
                        <Link className="btn btn-outline-primary d-flex justify-content-center" to={"/admin/managebooking"}
                            style={{ border: "1px solid black", height: "40px", width: "150px", marginRight:"30px",marginTop: "40px" }}
                        >Booking</Link>
                    </div>

                </div>
                <div className="container-fluid">
                    <Outlet />
                </div>
            </section>
        </>
    )
}