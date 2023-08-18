import React from "react";
import { Navbar } from "react-bootstrap";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";
import Navbar3 from "./Navbar3";
import { Link, useNavigate } from "react-router-dom";
export default function FunctionalPageForUser1() {
  const navigate = useNavigate();

  const handleViewButtonClick = () => {
    // Redirect to another page
    navigate("/viewCourses2");
  };

  return (
    <>
      <Navbar />
      <div className="FunctionalPage0Container">
        {/* <h1
          //  class="btn btn-outline-info"
          style={{
            textAlign: "center",
            fontFamily: "cursive",
            marginTop: "30px",
            color: "blueviolet",
            border: "0px",
            // marginRight:"700px"
          }}
        >
          Welcome {localStorage.getItem("email")}
        </h1> */}
        <div
          className="modal-header text-light rounded-4"
          style={{ backgroundImage: "url(brownbg.jpg)" }}
        >
          <h1 className="mb-5 mt-5 fs-1 mx-auto ">
            Welcome {localStorage.getItem("email")}
          </h1>
        </div>
        <div className="FunctionalPage1Container">
          <div
            style={{
              padding: "6rem",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              width: "400px",
            }}
          >
            <h1 style={{ color: "gray" }}>Pay your Fees Here</h1>
            <button
              class="btn btn-outline-success"
              style={{ padding: "7px 22px 7px 22px" }}
            >
              <Link to="/functionalpage1" style={{ textDecoration: "none" }}>
                Pay
              </Link>
            </button>
          </div>

          <div
            style={{
              padding: "6rem",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              width: "400px",
            }}
          >
            <h1 style={{ color: "gray" }}>View Courses</h1>
            <button
              class="btn btn-outline-success"
              style={{ padding: "7px 22px 7px 22px" }}
              onClick={handleViewButtonClick}
            >
              View
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
