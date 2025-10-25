import { Link } from "react-router-dom";

export default function AddingForm() {
  return (
    <>
      <section id="about" className="about section">
        <div className="container">
          <div className="row gy-4">
            <div className="col"></div>
            <div className="col-6" style={{marginTop:"100px"}}>
                <h1>add form</h1>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                   <h5> Add Property type</h5>
                  </label>
                  <br />
                  <input type="radio" />
                  Hotel <br />
                  <input type="radio" />
                  Pg <br />
                  <input type="radio" />
                  Domintory <br />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    <h5>Name of Property</h5>
                  </label>
                  <input
                    type="text"
                    className="form-control"/>
                </div>
                 <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    <h5>image</h5>
                  </label>
                  <input
                    type="file"
                    className="form-control"/>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"/>
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Terma & conditions
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <Link className="btn btn-outline-primary" to={"/owner"}>cancel</Link>

              </form>
            </div>
            <div className="col">
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
