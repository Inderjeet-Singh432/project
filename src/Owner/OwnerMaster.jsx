import { Outlet } from "react-router-dom";
import OwnerHeader from "./OwnerHeader";
import OwnerFooter from "./OwnerFooter";

export default function OwnerMaster() {
    return (
        <>
            <OwnerHeader />
            <Outlet />
            <OwnerFooter />
        </>
    )
}