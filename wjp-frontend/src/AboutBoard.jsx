import React from "react";

export default function AboutBoard() {
  return (
    <>
      <div className="col-lg-5 m-auto d-block mb-5">
        <div
          className="modal-header text-light rounded-4"
          style={{ backgroundImage: "url(brownbg.jpg)" }}
        >
          <h1 className="mb-5 mt-5 fs-1 mx-auto ">Created By</h1>
        </div>
      </div>
      <br />
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="IMG_20230516_210642.jpg"
                className="card-img-top"
                style={{ height: "390px" }}
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  <b>Mohit Surase</b>
                  <br />
                  CDAC Kharghar
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="vishal.jpg"
                className="card-img-top"
                style={{ height: "390px" }}
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  <b>Vishal Shinde</b>
                  <br />
                  CDAC Juhu
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="anwar.jpg"
                className="card-img-top"
                style={{ height: "390px" }}
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  <b>Anwar Sheikh</b>
                  <br />
                  CDAC Kharghar
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="malkeet sir.jpg"
                className="card-img-top"
                style={{ height: "390px" }}
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  <b>Malkeet Singh</b>
                  <br />
                  CDAC Faculty
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}
