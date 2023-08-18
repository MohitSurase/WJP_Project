import React from "react";

import { Link } from "react-router-dom";
export default function ContactCard1() {
  return (
    <>
      <div className="row">
        <div className="col-md-6 p-3 mb-4 bg-body-tertiary rounded-3">
          <div className="container-fluid ">
            <h1 className="fw-bold">Contact Us</h1>
            <p className="fs-4">HQ Contact Information</p>
            <p className="fs-3">
              <img
                src="https://evreka.co/wp-content/themes/evreka-theme/assets/img/icon/phone-volume.svg"
                alt=""
              />
              +91 9876543210
            </p>
            <p className="fs-4">
              <img
                src="https://evreka.co/wp-content/themes/evreka-theme/assets/img/icon/envelope-alt.svg"
                alt=""
              />
              <a href="mailto:smartwaste@gmail.com">student@info.com</a>
            </p>
          </div>
        </div>
        <div className="col-md-6 p-3 mb-4 bg-body-tertiary rounded-3 ">
          <img src="student4.png" className="img-fluid" />
        </div>
      </div>
    </>
  );
}
