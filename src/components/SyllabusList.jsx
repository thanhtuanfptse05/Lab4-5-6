import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SyllabusList() {
  const [subjects, setSubjects] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [selected, setSelected] = useState("code");
  const [filterOption, setFilterOption] = useState({ key: "", type: "code" });

  const loadData = async () => {
    const res = await axios.get("http://localhost:9000/subjects");
    setSubjects(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSearch = () => {
    setFilterOption({
      key: searchKey,
      type: selected,
    });
  };

  const handleFilter = subjects.filter((item) => {
    const matchSearch =
      filterOption.type === "code"
        ? item.code.toLowerCase().includes(filterOption.key.toLowerCase())
        : item.name.toLowerCase().includes(filterOption.key.toLowerCase());

    return matchSearch;
  });

  return (
    <div>
      <div className="m-3">
        <h3>Syllabus Management</h3>
      </div>

      <div className="row m-3">
        <div className="col-auto" style={{ width: "150px" }}>
          <label className="col-form-label" style={{ fontWeight: "bold" }}>
            Search by:
          </label>
        </div>
        <div className="col-auto">
          <select
            className="form-select"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="code">Code</option>
            <option value="name">Name</option>
          </select>
        </div>
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Enter keyword..."
            style={{ width: "300px" }}
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-success" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      <div className="m-3">
        <h5>Subject List</h5>
      </div>
      <div className="m-3">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Curriculum</th>
              <th>Semester</th>
              <th>Credit</th>
              <th>Pre-requisites</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {handleFilter.map((s) => (
              <tr key={s.id}>
                <td>
                  <Link to={`/subject/${s.id}`}>{s.code}</Link>
                </td>
                <td>{s.name}</td>
                <td>{s.curriculum}</td>
                <td>{s.semester}</td>
                <td>{s.credits}</td>
                <td>{s.preRequisites.length > 0 ? s.preRequisites : "None"}</td>
                <td>{s.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SyllabusList;
