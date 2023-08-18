import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";
//import { V_Login } from './V_Login.js';
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import AdminForm from "./AdminForm";

function Admin() {
  return (
    <div>
      <>
        {/* <Navbar></Navbar> */}
        <Navbar2></Navbar2>
        <AdminForm />
      </>
    </div>
  );
}

export default Admin;
