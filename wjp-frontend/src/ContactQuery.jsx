import React from "react";
import { Link } from "react-router-dom";
export default function ContactQuery() {
  return (
    <>
      <div className="col-md-6 col-sm-12">
        <div className="h-100 p-5 bg-body-tertiary border rounded-3">
          <h2 className="fw-bold">Send your concerns to us</h2>
          <br />
          <form>
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail3" />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputaddress" className="col-sm-2 col-form-label">
                Reason
              </label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="inputAddress" />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="query" className="col-sm-2 col-form-label">
                Query
              </label>
              <div className="col-sm-10">
                <textarea
                  name=""
                  id="query"
                  cols={50}
                  rows={5}
                  defaultValue={""}
                />
              </div>
            </div>
            <button type="button" className="btn btn-primary">
              Send Mail
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
