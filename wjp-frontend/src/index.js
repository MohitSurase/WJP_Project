import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

import App from "./App";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Login from "./Login";
import SignUp from "./SignUp";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//   },

//   {
//     path: "Home",
//     element: <Home/>,
//   },

//   {
//     path: "AboutUs",
//     element: <AboutUs/>,
//   },
//   {
//     path: "ContactUs",
//     element: <ContactUs/>,
//   },

//   {
//     path: "Login",
//     element: <Login/>,
//   },
//   {
//     path: "SignUp",
//     element: <SignUp/>,
//   },

// ]);

{
  /* <RouterProvider router={Router} />;

 */
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
