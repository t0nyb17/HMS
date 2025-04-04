import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/'); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/image.png" alt="" width={100} />
      </div>
      <div className="navbar-links">
        <button
          className="logoutbtn"
          onClick={handleLogout} 
        >
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
