import { Outlet } from "react-router-dom";
import DomitoryHeader from "./DomitoryHeader";

export default function DormitoryMaster(){
    return(
        <>
        <DomitoryHeader/>
        <Outlet/>
        </>
    )
}