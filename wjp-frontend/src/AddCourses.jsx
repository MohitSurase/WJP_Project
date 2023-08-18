import axios from "axios";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar3 from "./Navbar3";

function AddCourses() {
  let formRef = useRef();
  let [course, setCourse] = useState({
    courseName: "",
    duration: "",
    fees: "",
  });

  let handlerNameAction = (e) => {
    let newCourse = { ...course, courseName: e.target.value };
    setCourse(newCourse);
  };

  let handlerDurationAction = (e) => {
    let newCourse = { ...course, duration: e.target.value };
    setCourse(newCourse);
  };

  let handlerFeesAction = (e) => {
    let newCourse = { ...course, fees: e.target.value };
    setCourse(newCourse);
  };

  let resetAction = () => {
    let newCourse = {
      courseName: "",
      duration: "",
      fees: "",
    };
    setCourse(newCourse);
  };

  let registerAction = async (e) => {
    try {
      e.preventDefault();

      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      console.log(course);
      let url = "http://localhost:8080/addCourse";

      axios.post(url, course).then((response) => {
        console.log(response.data);
      });
      window.alert(
        `Course added Successfully 
Course Name : ${course.courseName}
Course Fees : ${course.fees}
Time Duration : ${course.duration}`
      );
      let newCourse = {
        courseName: "",
        duration: "",
        fees: "",
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

      <div
        className="modal-header text-light rounded-4 mt-5"
        style={{ backgroundImage: "url(brownbg.jpg)" }}
      >
        <h1 className="mb-5 mt-5 fs-1 mx-auto">Add Course</h1>
      </div>

      <div className="container">
        <br />

        <div className="col-lg-5 m-auto d-block">
          <form ref={formRef} className="needs-validation">
            <div className="form-group mb-2">
              <label htmlFor="name" className="font-weight-regular">
                {" "}
                Name{" "}
              </label>
              <input
                type="text"
                name="courseName"
                className="form-control border-dark"
                id="courseName"
                value={course.courseName}
                autoComplete="off"
                onChange={handlerNameAction}
                required
              />
              <span id="Name" className="text-danger font-weight-regular">
                {" "}
              </span>
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
                minLength="10"
                maxLength="10"
                onChange={handlerFeesAction}
                required
              />
              <span
                id="mobileno"
                className="text-danger font-weight-regular"
              ></span>
            </div>
            <div className="form-group ">
              <label className="font-weight-regular"> Duration </label>
              <input
                type="number"
                name="duration"
                className="form-control  border-dark"
                id="duration"
                autoComplete="off"
                value={course.duration}
                onChange={handlerDurationAction}
                required
              />
              <span
                id="durationno"
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
          </form>
        </div>
      </div>
      <br />
      {/* </div> */}
    </>
  );
}

export default AddCourses;
