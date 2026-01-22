import { useEffect, useState } from "react"
import ApiServices from "../../ApiServices"

export default function MainBody() {
    var[data,setData]=useState()

    //get all owner api
    useEffect(()=>{
        ApiServices.OwnerGetall()
        .then((res)=>{
            // console.log(res?.data?.data);
            setData(res?.data?.data)
        })
        .catch((err)=>{
            console.log(err);
            
        })
    },[])
    
    return (
        <>
    <section className="latest-news-events"  >
        <div className="container-fluid">
            <div className="row" style={{ backgroundColor: "#f5f7f6"  }} >
                <h1>main body</h1>
                <table className="" style={{border:"solid 3px",width:"100%",margin:"2%"}}>
                    <thead><tr>
                        <th>Sr no.</th>
                        <th>Name.</th>
                        <th>Email.</th>
                        <th>Created At</th>
                        {/* <th>status.</th> */}
                    </tr></thead>
                    <tbody>
                        {
                            data?.map((el,i)=>(
                                <tr key={i} style={{border:"solid 3px"}} >
                                    <td>{i}</td>
                                    <td>{el?.name}</td>
                                    <td>{el?.createdAt}</td>
                                    {/* <td>{el?.status}</td> */}
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </section>
        </>
    )
}