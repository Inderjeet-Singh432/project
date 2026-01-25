import { Link, Outlet } from "react-router-dom";
export default function BodyMaster() {
    
    return (
        <>
            <section className="latest-news-events">
                <div className="container">
                    <Link className="btn btn-outline-primary d-flex justify-content-center" to={"/admin/owners"}
                        style={{ border: "1px solid black", height: "40px", width: "150px", marginTop: "40px" }}
                    >Owners</Link>
                </div>
              <div className="container-fluid">
                    <Outlet />
              </div>
            </section>
        </>
    )
}