import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; 

const LoginPage = () => {
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    navigate('/admin-login'); 
  };

  const handleUserLogin = () => {
    navigate('/user-login'); 
  };

  return (
    <div className="login-page-container">
      {/* Background video */}
      <video autoPlay muted loop id="background-video">
        <source src="/videoplayback.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Login content */}
      <div className="login-content">
        <h2>Select Login Type</h2>
        <div className="login-buttons">
          <button className="button" onClick={handleAdminLogin}>
            Admin Login
          </button>
          <button className="button" onClick={handleUserLogin}>
            User Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
