import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Main.css";

function App() {
  const navigate = useNavigate();

  const handleLocalLogout = async () => {
    await axios.post("http://localhost:3000/users/logout");
    navigate("/");
  };

  return (
    <div>
      <div className="top-bar mt-3">
        Hi, Alex{" "}
        <a className="btn btn-primary" onClick={handleLocalLogout}>
          Logout
        </a>
      </div>
      <h5 className="text-center">Name your Organization</h5>
      <div className="input-container d-flex justify-content-center">
        <input
          className="form-control mt-4"
          placeholder="Name your Organization"
          style={{ width: "500px" }}
        />
      </div>
      <h5 className="text-center mb-5">Select your Organization Type below</h5>

      <div className="container mt-3 ">
        <div className="row">
          <div className="col-md-3 p-3">
            <div className="card">
              <div className="card-body">
                <i
                  className="fas fa-plus fa-6x justify-content-center"
                  style={{ color: "#62a0ea" }}
                ></i>
              </div>
            </div>
          </div>
          <div className="col-md-3 p-3">
            <div className="card">
              <div className="card-body">
                <i
                  className="fas fa-trowel-bricks fa-4x"
                  style={{ color: "#62a0ea" }}
                ></i>
                <h5 className="card-title">Construction</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 p-3">
            <div className="card">
              <div className="card-body">
                <i
                  className="fas fa-graduation-cap fa-flip-horizontal fa-4x"
                  style={{ color: "#62a0ea" }}
                ></i>
                <h5 className="card-title">Education</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 p-3">
            <div className="card">
              <div className="card-body">
                <i
                  className="fas fa-house-chimney fa-4x"
                  style={{ color: "#62a0ea" }}
                ></i>
                <h5 className="card-title">Consultancy</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 p-3">
            <div className="card">
              <div className="card-body">
                <i
                  className="fas fa-tree-city fa-4x"
                  style={{ color: "#62a0ea" }}
                ></i>
                <h5 className="card-title">Logistics</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 p-3">
            <div className="card">
              <div className="card-body">
                <i
                  className="fas fa-trowel-bricks fa-4x"
                  style={{ color: "#62a0ea" }}
                ></i>
                <h5 className="card-title">IT</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 p-3">
            <div className="card">
              <div className="card-body">
                <i
                  className="fas fa-tree-city fa-4x"
                  style={{ color: "#62a0ea" }}
                ></i>
                <h5 className="card-title">Manufacturing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 p-3">
            <div className="card">
              <div className="card-body">
                <i
                  className="fas fa-cloud-meatball fa-4x"
                  style={{ color: "#62a0ea" }}
                ></i>
                <h5 className="card-title">Tourism</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="next btn btn-primary">Next</button>
      </div>
    </div>
  );
}

export default App;