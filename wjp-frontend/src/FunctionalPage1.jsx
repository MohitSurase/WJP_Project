import React, { useEffect, useRef, useState } from "react";
import FunctionalPage2 from "./FunctionalPage2";
import Navbar from "./Navbar";
import Navbar3 from "./Navbar3";
import Footer from "./Footer";
import axios from "axios";
import { Link } from "react-router-dom";

function FunctionalPage1() {
  const [listOfCourses, setListOfCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = () => {
    let url = `http://localhost:8080/viewCourses`;
    axios.get(url).then((response) => {
      setListOfCourses(response.data);
    });
  };

  const courseRows = listOfCourses.map((course) => (
    <option value={course.courseName} key={course.courseName}>
      {course.courseName}
    </option>
  ));

  const [show, setShow] = React.useState(false);

  let formRef = useRef();
  let [course, setCourse] = useState({
    courseName: "",
    fees: "",
    acNo: "",
  });

  let handlerNameAction = (e) => {
    let newCourse = { ...course, courseName: e.target.value };
    setCourse(newCourse);
  };

  let handleracNoAction = (e) => {
    let newCourse = { ...course, acNo: e.target.value };
    setCourse(newCourse);
  };
  let handlerfeesAction = (e) => {
    let newCourse = { ...course, fees: e.target.value };
    setCourse(newCourse);
  };

  let resetAction = () => {
    let newCourse = {
      courseName: "",
      fees: "",
      acNo: "",
    };
    setCourse(newCourse);
  };

  let payAction = async (e) => {
    try {
      e.preventDefault();
      let email = localStorage.getItem("email");
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      console.log(course);
      let url = `http://localhost:8080/addEnrollment?courseName=${course.courseName}&fee=${course.fees}&acNo=${course.acNo}&email=${email}`;

      axios.get(url, course).then((response) => {
        console.log(response.data);
      });
      window.alert(
        `Fees paid for : ${course.courseName}
Amount : ${course.fees}`
      );
      let newCourse = {
        courseName: "",
        fees: "",
        acNo: "",
      };
      setCourse(newCourse);

      formRef.current.classList.remove("was-validated");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <Navbar3 />
      <div className="FunctionalPage0Container">
        <div className="FunctionalPage1Container">
          <div
            style={{
              padding: "6rem",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              width: "400px",
            }}
          >
            <form ref={formRef} className="needs-validation">
              <div className="form-group mb-2">
                <label htmlFor="name" className="font-weight-regular">
                  {" "}
                  Course Name{" "}
                </label>
                {/* <input
                  type="text"
                  name="name"
                  className="form-control border-dark"
                  id="name"
                  value={course.courseName}
                  autoComplete="off"
                  onChange={handlerNameAction}
                  required
                /> */}
                <select
                  style={{
                    padding: "0.5rem",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                  value={course.courseName}
                  name="courses"
                  onChange={handlerNameAction}
                  required
                >
                  <option value="">Select Course</option>
                  {courseRows}
                </select>
                <span id="Name" className="text-danger font-weight-regular">
                  {" "}
                </span>
              </div>
              <div className="form-group ">
                <label className="font-weight-regular"> Account Number </label>
                <input
                  type="number"
                  name="acNo"
                  className="form-control  border-dark"
                  id="acNo"
                  autoComplete="off"
                  value={course.acNo}
                  onChange={handleracNoAction}
                  minLength={8}
                  maxLength={8}
                  required
                />
                <span
                  id="acNo"
                  className="text-danger font-weight-regular"
                ></span>
              </div>

              <div className="form-group ">
                <label className="font-weight-regular"> Fees </label>
                <input
                  type="number"
                  name="fees"
                  className="form-control  border-dark"
                  id="fees"
                  autoComplete="off"
                  value={course.fees}
                  onChange={handlerfeesAction}
                  minLength="5"
                  maxLength="5"
                  required
                />
                <span
                  id="fees"
                  className="text-danger font-weight-regular"
                ></span>
              </div>
              <br />
              <input
                type="button"
                name="submit"
                defaultValue="Pay"
                className="btn btn-lg btn-primary"
                onClick={payAction}
              />
              <input
                type="reset"
                name="reset"
                defaultValue="Reset"
                className="btn btn-lg btn-secondary"
                onClick={resetAction}
              />
            </form>
          </div>

          {show ? (
            <FunctionalPage2 Value={course} />
          ) : (
            <div
              style={{
                padding: "6rem",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                width: "400px",
              }}
            >
              <img
                style={{ height: "100%", width: "100%" }}
                src="https://media.istockphoto.com/id/1252332917/vector/more-info-symbol-navigation-sign-vector.jpg?s=612x612&w=0&k=20&c=7c-vgzLo8nWiEsF0uFuhgdpJlueSD08ux9KG2yacl-A="
                alt=""
              />
            </div>
          )}
        </div>

        <div className="FunctionalPage2Containe"></div>
      </div>
      <Footer />
    </>
  );
}

export default FunctionalPage1;
