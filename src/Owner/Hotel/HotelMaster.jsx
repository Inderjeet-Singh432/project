import { Outlet } from "react-router-dom";
import HotelHeader from "./HotelHeader";

export default function HotelMaster(){
    return(
        <>
        <HotelHeader/>
        <Outlet/>
        </>
    )
}