import axios from "axios";
import { useState, useEffect } from "react";
import Navbar3 from "./Navbar3";
import { Link } from "react-router-dom";

export default function SearchForCourses() {
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

  const handleDeleteAction = (courseId) => {
    console.log(courseId);
    axios
      .delete(`http://localhost:8080/deleteCourse?courseId=${courseId}`)
      .then((response) => {
        if (response.status === 200) {
          // Remove the deleted course from the table
          const updatedCourses = listOfCourses.filter(
            (course) => course.courseId !== courseId
          );
          setListOfCourses(updatedCourses);
        }
      })
      .catch((error) => {
        console.error("Error deleting course:", error);
      });
  };

  const courseRows = listOfCourses.map((course) => (
    <tr key={course.courseId}>
      <td>{course.courseId}</td>
      <td>{course.courseName}</td>
      <td>{course.fees}</td>
      <td>{course.duration}</td>
      <td>
        <button
          className="w-50  mb-2 btn btn-primary rounded-3"
          type="submit"
          onClick={() => handleDeleteAction(course.courseId)}
        >
          Delete
        </button>
      </td>
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
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{courseRows}</tbody>
        </table>
      </div>
    </>
  );
}
