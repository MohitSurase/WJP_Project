import axios from "axios";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

function RegisterForm() {
  let formRef = useRef();
  let [user, setUser] = useState({
    studentName: "",
    email: "",
    username: "",
    password: "",
    mobileNumber: "",
  });

  let handlerNameAction = (e) => {
    let newUser = { ...user, studentName: e.target.value };
    setUser(newUser);
  };

  let handlerEmailAction = (e) => {
    let newUser = { ...user, email: e.target.value };
    setUser(newUser);
  };
  let handlerUsernameAction = (e) => {
    let newUser = { ...user, username: e.target.value };
    setUser(newUser);
  };

  let handlerPasswordAction = (e) => {
    let newUser = { ...user, password: e.target.value };
    setUser(newUser);
  };

  let handlerMobileAction = (e) => {
    let newUser = { ...user, mobileNumber: e.target.value };
    setUser(newUser);
  };

  let resetAction = () => {
    let newUser = {
      studentName: "",
      email: "",
      username: "",
      password: "",
      mobileNumber: "",
    };
    setUser(newUser);
  };

  let registerAction = async (e) => {
    try {
      e.preventDefault();
      
      if (isNaN(user.mobileNumber)) {
        document.getElementById("mobileno").innerHTML =
          " ** user must write digits only not characters";
        return false;
      } else {
        document.getElementById("mobileno").innerHTML = "";
      }

      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      // //Backend URL
      // let url = `http://localhost:4000/adduser?name=${user.name}&username=${user.username}&password=${user.password}&email=${user.email}&mobile=${user.mobile}`;
      // let res = await fetch(url);

      // if (res.status !== 200) {
      //   let newUser = {
      //     email: "",
      //   };
      //   setUser(newUser);
      //   throw new Error("This Email ID is already in use");
      // }

      console.log(user);
      let url = "http://localhost:8080/addStudent";

      axios.post(url, user).then((response) => {
        console.log(response.data);
      });
      window.alert(
        `Registration Successful for ${user.studentName}
Username : ${user.username}`
      );
      let newUser = {
        studentName: "",
        email: "",
        username: "",
        password: "",
        mobileNumber: "",
      };
      setUser(newUser);

      formRef.current.classList.remove("was-validated");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <div className="container">
        <br />

        <div className="col-lg-5 m-auto d-block">
          <form ref={formRef} className="needs-validation">
            {/* <form action="#" onsubmit="return validation()"> */}
            <div className="form-group mb-2">
              <label htmlFor="name" className="font-weight-regular">
                {" "}
                Name{" "}
              </label>
              <input
                type="text"
                name="name"
                className="form-control border-dark"
                id="name"
                value={user.studentName}
                autoComplete="off"
                onChange={handlerNameAction}
                required
              />
              <span id="Name" className="text-danger font-weight-regular">
                {" "}
              </span>
            </div>
            <div className="form-group mb-2">
              <label className="font-weight-regular"> Email </label>
              <input
                type="email"
                name="email"
                className="form-control  border-dark"
                id="emails"
                value={user.email}
                autoComplete="off"
                onChange={handlerEmailAction}
                required
              />
              <span
                id="emailids"
                className="text-danger font-weight-regular"
              ></span>
            </div>
            <div className="form-group mb-2">
              <label htmlFor="user" className="font-weight-regular">
                {" "}
                Username{" "}
              </label>
              <input
                type="text"
                name="user"
                className="form-control  border-dark"
                id="user"
                value={user.username}
                autoComplete="off"
                onChange={handlerUsernameAction}
                minLength="5"
                maxLength="20"
                required
              />
              <span
                id="username"
                className="text-danger font-weight-regular"
              ></span>
            </div>
            <div className="form-group mb-2">
              <label className="font-weight-regular"> Password </label>
              <input
                type="password"
                name="pass"
                className="form-control  border-dark"
                id="pass"
                value={user.password}
                autoComplete="off"
                onChange={handlerPasswordAction}
                minLength="5"
                maxLength="20"
                required
              />
              <span
                id="passwords"
                className="text-danger font-weight-regular"
              ></span>
            </div>
            {/* <div className="form-group mb-2">
              <label className="font-weight-regular"> Confirm Password </label>
              <input
                type="password"
                name="conpass"
                className="form-control  border-dark"
                id="conpass"
                autoComplete="off"
              />
              <span
                id="confrmpass"
                className="text-danger font-weight-regular"
              ></span>
            </div> */}
            <div className="form-group ">
              <label className="font-weight-regular"> Mobile Number </label>
              <input
                type="text"
                name="mobile"
                className="form-control  border-dark"
                id="mobileNumber"
                autoComplete="off"
                value={user.mobileNumber}
                minLength="10"
                maxLength="10"
                onChange={handlerMobileAction}
                required
              />
              <span
                id="mobileno"
                className="text-danger font-weight-regular"
              ></span>
            </div>
            <br />
            <input
              type="button"
              name="submit"
              defaultValue="Submit"
              className="btn btn-lg btn-primary"
              onClick={registerAction}
            />
            <input
              type="reset"
              name="reset"
              defaultValue="Reset"
              className="btn btn-lg btn-secondary"
              onClick={resetAction}
            />
            <br />
            Already have an account?
            <Link to="/Login">Login</Link>
          </form>
        </div>
      </div>
      <br />
    </>
  );
}

export default RegisterForm;
