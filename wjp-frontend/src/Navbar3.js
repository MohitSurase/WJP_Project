import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Your code here

export default function Navbar3() {
  let navigate = useNavigate();

  const handleLogout = () => {
    // localStorage.removeItem("loginStatus");
    // navigate("/login", { replace: true });
    localStorage.removeItem("loginStatus");
    localStorage.removeItem("userRole");
    navigate("/login");
    window.close();
  };

  // let loginStatus = localStorage.getItem("loginStatus");
  // if (!loginStatus) {
  //   return <></>;
  // }

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
        <span className="fs-2 text-warning">Student Portal</span>
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
              <button
                type="button"
                className="btn fs-5 me-4 btn-outline-primary"
                onClick={handleLogout}
              >
                <Link to="/Home" style={{ textDecoration: "none" }}>
                  Log Out
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
