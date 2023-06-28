import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  function registerUser(e) {
    e.preventDefault();

    axios.post('http://localhost:3000/users/signup', {
        username: name,
        email: email,
        password: password
      })
      .then(response => {
        console.log(response.data);
        setErrorMessage('');
        navigate('/');
      })
      .catch(error => {
        if (error.response && error.response.data.errors) {
          setErrorMessage(Object.values(error.response.data.errors).join(' '));
        } else {
          setErrorMessage('Failed to connect to API');
        }
      });
  }

  return (
    <div>
      <div className="protractor"></div>
      <div className="top-bar mt-3">
        Already have an account?
        <button className="top-btn btn btn-primary">Login</button>
      </div>
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={registerUser}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Let's go!</h3>
            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control mt-1"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control mt-1"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Choose Password</label>
              <input
                type="password"
                className="form-control mt-1"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Sign up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
