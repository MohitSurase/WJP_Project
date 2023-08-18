import React from "react";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import RegisterHeading from "./RegisterHeading";
import RegisterForm from "./RegisterForm";

function SignUp() {
  return (
    <div>
      <>
        {/* <Navbar></Navbar> */}
        <Navbar2></Navbar2>
        {/* Register Heading */}

        <RegisterHeading />

        {/* Register Block */}

        <RegisterForm />

        {/* Footer  */}

        <Footer></Footer>
      </>
    </div>
  );
}
export default SignUp;
