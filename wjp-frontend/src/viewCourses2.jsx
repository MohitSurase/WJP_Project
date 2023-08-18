import axios from "axios";
import { useState, useEffect } from "react";
import Navbar3 from "./Navbar3";
import { Link } from "react-router-dom";

export default function SearchForCourses2() {
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
    <tr key={course.courseId}>
      <td>{course.courseId}</td>
      <td>{course.courseName}</td>
      <td>{course.fees}</td>
      <td>{course.duration}</td>
    </tr>
  ));

  return (
    <>
      <Navbar3 />

      <div
        className="modal-header text-light rounded-4 mt-5"
        style={{ backgroundImage: "url(brownbg.jpg)" }}
      >
        <h1 className="mb-5 mt-5 fs-1 mx-auto">Course Details</h1>
      </div>
      <div className="container">
        <table className="dark-themed-table mt-5">
          <thead>
            <tr>
              <th>Course ID</th>
              <th>Course Name</th>
              <th>Fees</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>{courseRows}</tbody>
        </table>
      </div>
    </>
  );
}
