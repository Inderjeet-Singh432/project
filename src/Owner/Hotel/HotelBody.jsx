import React, { useState } from 'react';
import Calendar from 'react-calendar';

export default function HotelBody(){
    const [value, onChange] = useState(new Date());


    return(
        <>

<section id="about" className="about section">
    <div className="container">

         <div className="row gy-4" style={{ border:"solid", margin:"20px"}}> 
                <div className="col-4" style={{border:"groove", marginBottom:"15px"}} >
                    
                        <div className="btn-group" style={{width:"100%"}}>
                        <button
                            className="btn btn-lg dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Select Location
                        </button>
                        <ul className="dropdown-menu" style={{width:"100%"}}>
                            <li>
                            <a className="dropdown-item" href="#">
                                Action
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                Another action
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                Something else here
                            </a>
                            </li>
                        </ul>
                        </div>

                </div>
                <div className="col-4"  style={{border:"groove", marginBottom:"15px"}}>

                     <div className="btn-group" style={{width:"100%"}}>
                        <button
                            className="btn btn-lg dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                              select date
                        </button>
                        <ul className="dropdown-menu" style={{width:"100%"}}>
                            <li>
                            <a className="dropdown-item" href="#">
                                Action
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                Another action
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                Something else here
                            </a>
                            </li>
                        </ul>
                        </div>
                       
                            {/* <Calendar 
                                onChange={onChange} 
                                value={value} 
                            />  */}
                </div>
                <div className="col-2"  style={{border:"groove", marginBottom:"15px"}} >

                            <div>
                            <button type="button" class="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{width:"100%", height:"100%"}}>
                               adults, childrens
                            </button>
                               <ul className="dropdown-menu" >
                            <li>
                            <a className="dropdown-item" href="#">
                                Action
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                Another action
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                Something else here
                            </a>
                            </li>
                        </ul>
                            </div>

                </div>
                 <div className="col btn btn-primary" style={{marginBottom:"15px",border:"groove"}} >
                    Search
                </div>
      </div>
    <div className="row gy-4" >
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
                />
                <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={1}
                aria-label="Slide 2"
                />
                <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={2}
                aria-label="Slide 3"
                />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="public\Assets\assets\image\h1.jpg" className="d-block w-100 img-fluid img-thumble" style={{height:"500px", marginTop:"50px" ,marginBottom:"50px"}} alt="..." />
                </div>
                <div className="carousel-item">
                <img src="public\Assets\assets\image\h1.jpg" className="d-block w-100 img-fluid img-thumble" style={{height:"500px", marginTop:"50px", marginBottom:"50px"}} alt="..." />
                </div>
                <div className="carousel-item">
                <img src="public\Assets\assets\image\h1.jpg" className="d-block w-100 img-fluid img-thumble" style={{height:"500px", marginTop:"50px" ,marginBottom:"50px"}} alt="..." />
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
    </div>
</div>

       
          
    </div>
</section>
        </>
    )
}