import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar2() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary border border-warning">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/Home">
          <img
            src="Student logo.jfif"
            alt=""
            style={{ height: "50px", width: "70px", marginLeft: "80px" }}
          />
        </Link>
        <span className="fs-2 text-dark">Student Portal</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fs-5">
            <li className="nav-item">
              <Link className="nav-link me-4" aria-current="page" to="/Home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link me-4" to="/AboutUs">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link me-4" to="/ContactUs">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn fs-5 me-4 btn-outline-primary"
              >
                <Link to="/login" style={{ textDecoration: "none" }}>
                  Log In
                </Link>
              </button>
              <button
                type="button"
                className="btn fs-5 me-4 btn-outline-primary"
              >
                <Link to="/admin" style={{ textDecoration: "none" }}>
                  Admin
                </Link>
              </button>
              <button
                type="button"
                className="btn fs-5 me-4 btn-outline-primary"
              >
                <Link to="/SignUp" style={{ textDecoration: "none" }}>
                  Sign Up
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
