import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function AdminForm() {
  let formRef = useRef();
  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  let handlerEmailAction = (e) => {
    let newUser = { ...user, email: e.target.value };
    setUser(newUser);
  };

  let handlerPasswordAction = (e) => {
    let newUser = { ...user, password: e.target.value };
    setUser(newUser);
  };

  let loginAction = async (e) => {
    e.preventDefault();
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }
      let url = "http://localhost:8080/loginAdmin";
      let params = { email: user.email, password: user.password };

      let response = await axios.get(url, { params });
      let responseData = response.data;

      if (responseData === "Admin Login Successful") {
        // Login successful
        localStorage.setItem("loginStatus", "true");
        localStorage.setItem("userRole", "admin");
        window.open("/functionalpagecopy"); // Open functional page in the same tab/window
      } else {
        // Invalid credentials
        alert("Invalid Credentials");
        window.location.reload(); // Refresh the page
      }
      // if (
      //   (user.email === "mohit@gmail.com" && user.password === "mohit7") ||
      //   (user.email === "vishal@gmail.com" && user.password === "vishal") ||
      //   (user.email === "anwar@gmail.com" && user.password === "anwar")
      // ) {
      //   localStorage.setItem("loginStatus", "true");
      //   localStorage.setItem("userRole", "admin");
      //   // Login successful
      //   window.open("/functionalpagecopy"); // Open functional page in the same tab/window
      // } else {
      //   // Invalid credentials
      //   alert("Invalid Credentials");
      //   window.location.reload(); // Refresh the page
      // }

      let newUser = {
        email: "",
        password: "",
      };
      setUser(newUser);

      formRef.current.classList.remove("was-validated");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <br />
      <div className="col-lg-5 m-auto d-block ">
        <div
          className="modal-header text-light rounded-4"
          style={{ backgroundImage: "url(brownbg.jpg)" }}
        >
          <h1 className="mb-5 mt-5 fs-1 mx-auto ">Admin Login</h1>
        </div>
        <form ref={formRef} className="needs-validation">
          {/* <form className="" onsubmit="return validation()"> */}
          <div className="form-floating mb-3 mt-3">
            <input
              type="email"
              className="form-control rounded-3 border-dark"
              id="user"
              value={user.email}
              placeholder="example"
              onChange={handlerEmailAction}
              required
            />
            <label htmlFor="user">Email</label>
            <span id="username" className="text-danger font-weight-regular">
              {" "}
            </span>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control rounded-3 border-dark"
              id="pass"
              value={user.password}
              placeholder="Password"
              onChange={handlerPasswordAction}
              minLength="5"
              maxLength="20"
              required
            />
            <label htmlFor="pass">Password</label>
            <span id="passwords" className="text-danger font-weight-regular">
              {" "}
            </span>
          </div>
          <div className="">
            <button
              className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
              type="submit"
              onClick={loginAction}
            >
              Log In
            </button>
          </div>
          <div className="text-center">
            <Link className="" style={{ textDecoration: "none" }} to="#">
              Forgotten password?
            </Link>
          </div>
          {/* <small class="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small> */}
          <hr className="my-4" />
          <div className="text-center">
            {/* <button
              className="w-50  mb-2 btn btn-lg btn-success rounded-3 "
              type="submit"
            >
              <Link
                to="/SignUp"
                className="text-light"
                style={{ textDecoration: "none" }}
              >
                Create New Account
              </Link>
            </button> */}
          </div>
          <div className="text-center">
            <button
              className="w-50  mb-2 btn btn-lg btn-secondary rounded-3 "
              type="submit"
            >
              <Link
                to="/Home"
                className="text-light"
                style={{ textDecoration: "none" }}
              >
                Return to Home Page
              </Link>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AdminForm;
