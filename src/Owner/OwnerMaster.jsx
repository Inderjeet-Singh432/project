import { Outlet } from "react-router-dom";
import OwnerHeader from "./OwnerHeader";

export default function OwnerMaster(){
    return(
        <>
        <OwnerHeader/>
        <Outlet/>
        </>
    )
}