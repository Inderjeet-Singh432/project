import React, { useState } from 'react';
import Calendar from 'react-calendar';


export default function HotelBody(){
    const [value, onChange] = useState(new Date());

    return(
        <>

<section id="about" className="about section">
  
{/* booking option start */}
         <div className="row gy-4 booknav1"> 
              <div className='row booknav2' >

                  <div className="col-3 booknavitem2"  >
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
                {/* calender start */}
                <div className="col-3 booknavitem2" >
                    <div className="btn-group" style={{width:"100%"}}>
                            <button
                            className="btn btn-lg dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                select date
                            </button>

                            <ul className="dropdown-menu">
                                <li>
                                    <div>
                                    <Calendar onChange={onChange} value={value} />
                                    </div>
                                </li>
                        </ul>
                    </div>
                </div>
                {/* calender end */}

                <div className="col-3 booknavitem2"  >
                    <div>
                            <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{width:"100%", height:"100%"}}>
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
                           
    

                            </li>
                        </ul>
                    </div>
                </div>
   
                 <div className="col btn btn-primary" style={{height:"100%",marginLeft:"2%", marginRight:"2%"}}>
                    Search
                </div>
              </div>
        </div>
{/* booking option ended */}

  {/* slider start */}
      <div className='container'>

        <div className='row'>

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
                  <img src="public\Assets\assets\image\h1.jpg" className="d-block w-100" style={{height:"450px", backgroundColor:"blue", marginTop:"10px", marginBottom:"20px"}} />
                </div>
                <div className="carousel-item active">
                  <img src="public\Assets\assets\image\h7.jpeg" className="d-block w-100" style={{height:"450px", backgroundColor:"blue", marginTop:"10px", marginBottom:"20px"}} />
                </div>
                <div className="carousel-item active">
                  <img src="public\Assets\assets\image\h2.webp" className="d-block w-100" style={{height:"450px", backgroundColor:"blue", marginTop:"10px", marginBottom:"20px"}} />
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
  {/* slider end */}

{/* body start */}
  <div className="container body">

        <div className="card mb-3" style={{width: "540px"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>

    </div>
{/* body end */}

</section>



        </>
    )
}