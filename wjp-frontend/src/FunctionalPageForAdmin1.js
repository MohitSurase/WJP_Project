import React from "react";

import { Link, useNavigate } from "react-router-dom";

export default function FunctionalPageForAdmin1() {
  const navigate = useNavigate();

  const handleAddButtonClick = () => {
    // Redirect to another page
    navigate("/addCourses");
  };

  const handleDeleteButtonClick = () => {
    // Redirect to another page
    navigate("/viewCourses");
  };

  const handleEditButtonClick = () => {
    // Redirect to another page
    navigate("/editCourses");
  };
  return (
    <>
      <div className="FunctionalPage0Container">
        <h1
          style={{
            textAlign: "center",
            fontFamily: "cursive",
            marginTop: "30px",
            color: "blueviolet",
          }}
        >
          Admin Portal
        </h1>
        <div className="FunctionalPage1Container">
          <div
            style={{
              padding: "6rem",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              width: "400px",
            }}
          >
            <h1 style={{ fontFamily: "cursive", color: "gray" }}>
              Add Courses
            </h1>
            <button
              className="btn btn-outline-success"
              style={{ padding: "7px 22px 7px 22px" }}
              onClick={handleAddButtonClick}
            >
              Add
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
            <h1 style={{ fontFamily: "cursive", color: "gray" }}>
              Delete Courses
            </h1>
            <button
              class="btn btn-outline-success"
              style={{ padding: "7px 22px 7px 22px" }}
              onClick={handleDeleteButtonClick}
            >
              Delete
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
            <h1 style={{ color: "gray" }}>Edit Courses</h1>
            <button
              className="btn btn-outline-success"
              style={{ padding: "7px 22px 7px 22px" }}
              onClick={handleEditButtonClick}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
