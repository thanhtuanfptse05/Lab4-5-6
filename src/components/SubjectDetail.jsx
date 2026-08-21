import React from "react";

function SubjectDetail() {
  return (
    <div>
      <div className="m-3">
        <h3>Subject Information</h3>
      </div>
      <div className="row m-3">
        <div className="col-auto" style={{ width: "150px" }}>
          <label className="col-form-label" style={{ fontWeight: "bold" }}>
            Code
          </label>
          <input
            type="text"
            className="form-control"
            style={{ width: "300px" }}
          />
        </div>
      </div>
      <div className="row m-3">
        <div className="col-auto" style={{ width: "150px" }}>
          <label className="col-form-label" style={{ fontWeight: "bold" }}>
            Name
          </label>
          <input
            type="text"
            className="form-control"
            style={{ width: "300px" }}
          />
        </div>
      </div>
      <div className="row m-3">
        <div className="col-auto" style={{ width: "150px" }}>
          <label className="col-form-label" style={{ fontWeight: "bold" }}>
            Curriculum
          </label>
          <input
            type="text"
            className="form-control"
            style={{ width: "300px" }}
          />
        </div>
      </div>
      <div className="row m-3">
        <div className="col-auto" style={{ width: "150px" }}>
          <label className="col-form-label" style={{ fontWeight: "bold" }}>
            Semester
          </label>
          <input
            type="text"
            className="form-control"
            style={{ width: "300px" }}
          />
        </div>
      </div>
      <div className="row m-3">
        <div className="col-auto" style={{ width: "150px" }}>
          <label className="col-form-label" style={{ fontWeight: "bold" }}>
            Credit
          </label>
          <input
            type="text"
            className="form-control"
            style={{ width: "300px" }}
          />
        </div>
      </div>
      <div className="row m-3">
        <div className="col-auto" style={{ width: "150px" }}>
          <label className="col-form-label" style={{ fontWeight: "bold" }}>
            Pre-requisites
          </label>
          <input
            type="text"
            className="form-control"
            style={{ width: "300px" }}
          />
        </div>
      </div>
      <div className="row m-3">
        <div className="col-auto" style={{ width: "150px" }}>
          <label className="col-form-label" style={{ fontWeight: "bold" }}>
            Description
          </label>
          <input
            type="text"
            className="form-control"
            style={{ width: "300px" }}
          />
        </div>
      </div>
      <div className="d-flex m-3 justify-content-between">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default SubjectDetail;
