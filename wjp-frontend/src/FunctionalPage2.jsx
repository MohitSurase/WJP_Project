import React from "react";
import Navbar3 from "./Navbar3";

function FunctionalPage2({ Value }) {
  console.log({ Value });
  const { courseName, fees, acNo } = Value;
  return (
    <>
      <div
        style={{
          padding: "6rem",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
          width: "400px",
          backgroundImage: "url(brownbg.jpg)",
        }}
      >
        <h1 style={{ color: "White", fontFamily: "bold" }}> Your Details:</h1>
        <p style={{ color: "White", fontFamily: "bold" }}>
          Course Name : {courseName}
        </p>
        <p style={{ color: "White", fontFamily: "bold" }}> Fees: {fees}</p>
        <p style={{ color: "White", fontFamily: "bold" }}>
          Account Number : {acNo}
        </p>
      </div>
    </>
  );
}

export default FunctionalPage2;
