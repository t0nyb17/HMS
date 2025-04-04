import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./AdminLogin.css"; 

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("User logged in");
    navigate("/admin-dashboard"); 
  };

  return (
    <div className="login-page-wrapper">
      <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
        <div className="row login-card shadow-lg">
          {/* Left Side Image */}
          <div className="col-md-5 p-0">
            <img
              src="/r3.png"
              alt="login"
              className="login-image"
            />
          </div>

          {/* Right Side Form */}
          <div className="col-md-7 d-flex flex-column justify-content-center p-5">
            <div className="brand-wrapper mb-4">
              <img src="/image2.png" alt="logo" className="logo" />
            </div>
            <h3 className="login-card-description">Sign into Admin account</h3>
            <form onSubmit={handleLogin}>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="userUsername"
                  placeholder="Enter your Email"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="userPassword"
                  placeholder="Enter your Password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-dark w-100">
                Login
              </button>
            </form>
            <a href="#!" className="forgot-password-link mt-3">
              Forgot password?
            </a>
            <p className="login-card-footer-text mt-4">
              Don't have an account? <a href="/registerPage" className="text-reset">Register here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

