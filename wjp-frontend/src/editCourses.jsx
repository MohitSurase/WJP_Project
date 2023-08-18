import axios from "axios";
import { useState, useEffect } from "react";
import Navbar3 from "./Navbar3";
import { Link } from "react-router-dom";

export default function EditCourses() {
  const [listOfCourses, setListOfCourses] = useState([]);
  const [editCourseId, setEditCourseId] = useState(null);
  const [editCourseFees, setEditCourseFees] = useState("");

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = () => {
    let url = `http://localhost:8080/viewCourses`;
    axios.get(url).then((response) => {
      setListOfCourses(response.data);
    });
  };

  const handleEditAction = (courseId, currentFees) => {
    setEditCourseId(courseId);
    setEditCourseFees(currentFees);
  };

  const handleSaveAction = (courseId) => {
    const updatedCourses = listOfCourses.map((course) => {
      if (course.courseId === courseId) {
        return { ...course, fees: editCourseFees };
      }
      return course;
    });

    // Update the course fees
    axios
      .put(
        `http://localhost:8080/updateCourseFees?courseId=${courseId}&fees=${editCourseFees}`
      )
      .then((response) => {
        if (response.status === 200) {
          setListOfCourses(updatedCourses);
          setEditCourseId(null);
        }
      })
      .catch((error) => {
        console.error("Error updating course fees:", error);
      });
  };

  const handleCancelAction = () => {
    setEditCourseId(null);
  };

  const courseRows = listOfCourses.map((course) => (
    <tr key={course.courseId}>
      <td>{course.courseId}</td>
      <td>{course.courseName}</td>
      <td>
        {editCourseId === course.courseId ? (
          <input
            type="text"
            value={editCourseFees}
            onChange={(e) => setEditCourseFees(e.target.value)}
          />
        ) : (
          course.fees
        )}
      </td>
      <td>{course.duration}</td>
      <td>
        {editCourseId === course.courseId ? (
          <>
            <button
              className="w-50 btn btn-success rounded-3"
              onClick={() => handleSaveAction(course.courseId)}
            >
              Save
            </button>
            <button
              className="w-50 btn btn-secondary rounded-3"
              onClick={handleCancelAction}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            className="w-50 btn btn-primary rounded-3"
            onClick={() => handleEditAction(course.courseId, course.fees)}
          >
            Edit
          </button>
        )}
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
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>{courseRows}</tbody>
        </table>
      </div>
    </>
  );
}
