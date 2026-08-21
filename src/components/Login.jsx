import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:9000/accounts?email=${email}`,
      );

      if (response.data.length === 0) {
        return;
      }

      const account = response.data[0];

      if (account.password !== password) {
        return;
      }

      if (account.status !== "Active") {
        return;
      }

      localStorage.setItem("account", JSON.stringify(account));

      navigate("/syllabus");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="card text-center">
        <div className="card-header">Sign in</div>

        <div className="card-body">
          <form onSubmit={handleLogin}>
            <div className="row g-3 align-items-center mb-3">
              <div className="col-auto" style={{ width: "100px" }}>
                <label className="col-form-label">Email</label>
              </div>

              <div className="col-auto">
                <input
                  type="email"
                  className="form-control"
                  placeholder="email of student or lecturer"
                  style={{ width: "300px" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-auto" style={{ width: "100px" }}>
                <label className="col-form-label">Password</label>
              </div>

              <div className="col-auto">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  style={{ width: "300px" }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-success">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
