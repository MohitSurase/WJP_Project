import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Home from "./Home";
import AboutUs from "./AboutUs";
import SignUp from "./SignUp";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login";
import ContactUs from "./ContactUs";
import FunctionalPage from "./FunctionalPage";
import FunctionalPage1 from "./FunctionalPage1";
import FunctionalInfo from "./FuncitonalInfo";
import FunctionalPageForAdmin1 from "./FunctionalPageForAdmin1";
import Admin from "./Admin";
import FunctionalPagecopy from "./FunctionalPagecopy";
import AddCourses from "./AddCourses";
import SearchForCourses from "./viewCourses";
import SearchForCourses2 from "./viewCourses2";
import EditCourses from "./editCourses";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/functionalpage"
            element={
              <ProtectedRoute allowedRoles={["student"]}>
                <FunctionalPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/functionalpage1"
            element={
              <ProtectedRoute allowedRoles={["student"]}>
                <FunctionalPage1 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/viewCourses2"
            element={
              <ProtectedRoute allowedRoles={["student"]}>
                <SearchForCourses2 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/functionalpagecopy"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <FunctionalPagecopy />
              </ProtectedRoute>
            }
          />
          <Route
            path="/addCourses"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AddCourses />
              </ProtectedRoute>
            }
          />
          <Route
            path="/viewCourses"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <SearchForCourses />
              </ProtectedRoute>
            }
          />
          <Route
            path="/editCourses"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <EditCourses />
              </ProtectedRoute>
            }
          />
          <Route path="/admin" element={<Admin />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/SignUp" element={<SignUp />} />
          {/* <Route path="/functionalpage" element={<FunctionalPage />} /> */}
          {/* <Route path="/functionalpage1" element={<FunctionalPage1 />} /> */}
          {/* <Route path="/list" element={<FunctionalInfo />} /> */}
          {/* <Route path="/functionalpagecopy" element={<FunctionalPagecopy />} /> */}
          {/* <Route path="/addCourses" element={<AddCourses />} /> */}
          {/* <Route path="/viewCourses" element={<SearchForCourses />} /> */}
          {/* <Route path="/editCourses" element={<EditCourses />} /> */}
          {/* <Route path="/viewCourses2" element={<SearchForCourses2 />} /> */}
          <Route path="*" element={<h1>Page not found </h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export function ProtectedRoute({ children, allowedRoles }) {
  const loginStatus = localStorage.getItem("loginStatus");
  const userRole = localStorage.getItem("userRole");

  // Check if user is logged in
  if (!loginStatus) {
    return <Navigate to="/login" replace={true} />;
  }

  // Check if user has the allowed role
  if (allowedRoles && allowedRoles.indexOf(userRole) === -1) {
    return <Navigate to="/" replace={true} />;
  }

  return children;
}

export default App;
