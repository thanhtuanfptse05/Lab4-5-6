import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function SubjectDetail() {
  const { id } = useParams();
  const [subject, setSubject] = useState([]);
  useEffect(() => {
    loadData();
  }, [id]);
  const navigate = useNavigate();
  const loadData = async () => {
    const subjectRes = await axios.get(`http://localhost:9000/subjects/${id}`);
    setSubject(subjectRes.data);
  };
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("xoa");

    if (!confirmDelete) {
      return;
    }
    await axios.delete(`http://localhost:9000/subjects/${id}`);

    navigate("/syllabus");
  };
  return (
    <div>
      <div className="row m-3" style={{ width: "35%" }}>
        <label className="form-label" style={{ fontWeight: "bold" }}>
          Code
        </label>
        <input type="text" className="form-control" value={subject.code} />
      </div>
      <div className="row m-3" style={{ width: "35%" }}>
        <label className="form-label" style={{ fontWeight: "bold" }}>
          Name
        </label>
        <input type="text" className="form-control" value={subject.name} />
      </div>
      <div className="row m-3" style={{ width: "35%" }}>
        <label className="form-label" style={{ fontWeight: "bold" }}>
          Curriculum
        </label>
        <input
          type="text"
          className="form-control"
          value={subject.curriculum}
        />
      </div>
      <div className="row m-3" style={{ width: "35%" }}>
        <label className="form-label" style={{ fontWeight: "bold" }}>
          Semester
        </label>
        <input type="text" className="form-control" value={subject.semester} />
      </div>
      <div className="row m-3" style={{ width: "35%" }}>
        <label className="form-label" style={{ fontWeight: "bold" }}>
          Credit
        </label>
        <input type="text" className="form-control" value={subject.credits} />
      </div>
      <div className="row m-3" style={{ width: "35%" }}>
        <label className="form-label" style={{ fontWeight: "bold" }}>
          Pre-requisites
        </label>
        <input
          type="text"
          className="form-control"
          value={subject.preRequisites}
        />
      </div>
      <div className="row m-3" style={{ width: "35%" }}>
        <label className="form-label" style={{ fontWeight: "bold" }}>
          Description
        </label>
        <input
          type="text"
          className="form-control"
          value={subject.description}
        />
      </div>

      <div className="row m-3">
        <div className="col-auto">
          <button className="btn btn-primary">Edit</button>
        </div>
        <div className="col-auto">
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(subject.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubjectDetail;
