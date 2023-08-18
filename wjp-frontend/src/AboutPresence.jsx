import React from "react";

export default function AboutOurPresence() {
  return (
    <>
      <div className="col-lg-5 m-auto d-block mb-5">
        <div
          className="modal-header text-light rounded-4"
          style={{ backgroundImage: "url(brownbg.jpg)" }}
        >
          <h1 className="mb-5 mt-5 fs-1 mx-auto ">Our Presence</h1>
        </div>
      </div>
      <br />
      <div className="text-light justify-content-center">
        <div
          className="row p-5 text-center "
          style={{ backgroundImage: "url(cyanbg.jpg)" }}
        >
          <div className="col-md-2" />
          <div className="col-md-3">
            <p style={{ fontSize: 30 }}>
              <b>1 lakh+ </b>
            </p>
            <p style={{ fontSize: 30 }}>Students</p>
          </div>
          <div className="col-md-3">
            <p style={{ fontSize: 30 }}>
              <b>250+ </b>
            </p>
            <p style={{ fontSize: 30 }}>Institutions</p>
          </div>
          <div className="col-md-3">
            <p style={{ fontSize: 30 }}>
              <b> 25+ </b>
            </p>
            <p style={{ fontSize: 30 }}>Cities</p>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}
