import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";
//import { V_Login } from './V_Login.js';
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <div>
      <>
        {/* <Navbar></Navbar> */}
        <Navbar2></Navbar2>
        <LoginForm />
      </>
    </div>
  );
}

export default Login;
