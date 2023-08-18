import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* Footer  */}
      <footer className="footer bg-dark text-light">
        {/* <div className="container">
      <div className="row">
        <div className="col-md-1" />
        <div className="col-md-2">
          <br />
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a>Media</a>
            </li>
            <li className="nav-item mb-2">
              <a>Awards</a>
            </li>
            <li className="nav-item mb-2">
              <a>Blogs</a>
            </li>
            <li className="nav-item mb-2">
              <a>FAQs</a>
            </li>
            <li className="nav-item mb-2">
              <a>E-waste Drop Boxes</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <br />
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a>
                <img src="./accreditations.png" alt="" height={40} width={40} />
                Accreditations
              </a>
            </li>
            <li className="nav-item mb-2">
              <a>
                <img src="annual_reports.png" alt="" height={40} width={40} />
                Annual Reports
              </a>
            </li>
            <li className="nav-item mb-2">
              <a>
                <img src="compliances.png" alt="" height={40} width={40} />
                Compliances
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-1" />
        <div className="col-md-3 col-sm-6">
          <br />
          <h5 className="fw-bold">Contact Us</h5>
          <p />
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <span className="fw-bold" style={{ fontSize: 16 }}>
                Head Office
              </span>
            </li>
            <li className="nav-item mb-2">
              <span style={{ fontSize: 15 }}>#16, Shree Chhatrapati </span>
            </li>
            <li className="nav-item mb-2">
              <span style={{ fontSize: 15 }}>Shivaji Maharaj Complex, </span>
            </li>
            <li className="nav-item mb-2">
              <span style={{ fontSize: 15 }}>Professor Colony</span>
            </li>
            <li className="nav-item mb-2">
              <span style={{ fontSize: 15 }}>Ahmednagar - 414 003</span>
            </li>
            <li className="nav-item mb-2">
              <span style={{ fontSize: 15 }}>
                <strong>Phone: </strong> 9975338617
              </span>
            </li>
            <li className="nav-item mb-2">
              <span style={{ fontSize: 15 }}>
                <strong>Email: </strong> SmartWaste@gmail.com
              </span>
            </li>
          </ul>
        </div>
        <div className="col-md-2">
          <br />
          <h5 className="fw-bold">Follow Us</h5>
          <div>
          <Link to="https://www.instagram.com">
              <img src="insta.jfif" alt="" height={40} width={40} />
            </Link>
          </div>
          <br />
          <div>
            <Link to="https://www.facebook.com">
              <img src="fb.png" alt="" height={40} width={40} />
            </Link>
          </div>
          <br />
          <div>
            <Link to="https://www.twitter.com#">
              <img src="tw.png" alt="" height={40} width={40} />
            </Link>
          </div>
          <br />
          <div>
          <Link to="https://www.youtube.com">
           <img src="yt.jfif" alt="" height={40} width={40} />{" "}
          </Link>
          </div>
          <br />
        </div>
      </div> */}
        <hr />
        <p className="text-center">
          © 2023 Student Fees Management System. All rights reserved.
        </p>
        <br />
        {/* </div> */}
      </footer>
    </>
  );
}

export default Footer;
