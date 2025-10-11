import { Outlet } from "react-router-dom";
import PgHeader from "./PgHeader";

export default function PgMaster(){
    return(
        <>
        <PgHeader/>
        <Outlet/>
        </>
    )
}