import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const attemptLogin = () => {
    axios
      .post('http://localhost:3000/users/login', {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        setErrorMessage('');
        const token = response.data.Bearer;
        var user = {
          username: username,
          token: token,
        };
        localStorage.setItem('token', token);
        navigate('/main');
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.message) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage('Failed to login.');
        }
      });
  };

  return (
    <div>
      <div className="protractor"></div>
      <div className="top-bar mt-3">
        Don't have an account?
        <a href="/signup" className="top-btn btn btn-primary">
          Signup
        </a>
      </div>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Welcome back!</h3>
            <div className="form-group mt-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email address"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={attemptLogin}>
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <p id="para" className="text-center">
          <a className="tag" href="#">
            Forgot your password?
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
