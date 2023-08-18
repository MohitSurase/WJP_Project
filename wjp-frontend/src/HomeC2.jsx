import React from "react";


export default function HomeC2(){
    return(
    <div>
 <div className="row justify-content-center">
    <div className="col-1" />
    <div className="col-md-3 col-sm-12">
      <div className="card" style={{ width: "18rem" }}>
        <img src="green city.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            We conduct campaigns with students, corporate volunteers, etc
            focusing on the principle of 3Rs (Reduce, Reuse and Recycle).
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-3 col-sm-12">
      <div className="card" style={{ width: "18rem" }}>
        <img src="green city5.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            Our solid waste management projects focus on providing support for
            implementing sustainable waste management practices.{" "}
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-3 col-sm-12">
      <div className="card" style={{ width: "18rem" }}>
        <img src="green city7.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            Our social inclusion programs focus on integrating waste workers in
            formal Solid Waste Management systems
          </p>
        </div>
      </div>
    </div>
  </div>
    </div>)
    }