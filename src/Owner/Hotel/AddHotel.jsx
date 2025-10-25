import { Link } from "react-router-dom";

export default function AddHotel() {
  return (
    <>
      <section id="about" className="about section">
        <div className="container">
          <div className="row gy-4">

            <div className="col">
              <Link to={"/Owner/addform"}>
                <div className="card  mb-3"
                  style={{
                    maxWidth: "18rem",
                    marginTop: "40px",
                    height: "130px",
                    backgroundColor:"#5c85d6",
                    color:"white"
                  }}    >
                  <div className="card-body">
                    <h1 className="card-text d-flex justify-content-center ">
                      ADD
                    </h1>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col">
              <Link>
                <div className="card  mb-3"
                  style={{
                    maxWidth: "18rem",
                    marginTop: "40px",
                    height: "130px",
                    backgroundColor:"#5c85d6",
                    color:"white"
                  }}    >
                  <div className="card-body">
                    <h1 className="card-text d-flex justify-content-center ">
                      MANAGE
                    </h1>
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
