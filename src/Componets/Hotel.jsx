export default function Hotel(){
    return(
        <>
        {/* headerstart */}
          <section id="about" class="about section">

      <div class="container">

        <div class="row gy-4">
        
            <div className="col-4">
                From  
            </div>
            <div className="col-4">
                To  
            </div>
            <div className="col-2">

            </div>
            <div className="col-2">
                <button className="btn btn-primary">Search</button>
            </div>
        </div>
       {/* header ended */}
       {/* body start */}
       <div className="">
            <div className="card text-bg-dark">
                <img src="..." className="card-img" alt="..."/>
                <div className="card-img-overlay">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small>Last updated 3 mins ago</small></p>
                </div>
                </div>
       </div>
       {/* body ended */}
       </div> 
       </section>
        </>
    )
}