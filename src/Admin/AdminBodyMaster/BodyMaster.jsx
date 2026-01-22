import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function BodyMaster() {
    return (
        <>
    <section className="latest-news-events">
        <div className="container">
            <h1>admin body master page</h1>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-3" style={{ backgroundColor: "" }}>
                    <Sidebar />
                </div>
                <div className="col" style={{ backgroundColor: "" }}>
                    <Outlet />
                </div>
            </div>
        </div>
    </section>
        </>
    )
}