import React from "react";

export default function () {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="mb-4">
              <div className="card">
                <div
                  className="card-body fs-5"
                  style={{ textAlign: "justify" }}
                >
                  <p>
                    Student Fees Management System is capable of managing each
                    and every data regarding student, payments etc. Student
                    Management System helps us in managing in an extremely
                    efficient way. This Student Fees Management System works in
                    an efficient manner. We have two modules in this project.
                    One is admin and other is user.
                  </p>
                  {/* <p>
                    Admin can maintain the fee details of students and can
                    generate the reports can export the details to excel. User
                    module can edit their personal details and can view the fee
                    details.
                  </p> */}
                  <p>
                    Whenever the student will register his/her name then the
                    student will be given by one individual username and
                    password. When the student will type the correct username
                    and password then the will enter into another page. In that
                    page student can select two options that are update details
                    and view details.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Image carousel */}
          <div className="col-sm-12 col-md-6">
            <div
              id="carouselExampleFade"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="student1.png" className="d-block w-100" alt="..." />
                </div>
              </div>
              {/* <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              > */}
              {/* <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}
