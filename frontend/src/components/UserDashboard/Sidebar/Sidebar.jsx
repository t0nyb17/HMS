// Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ setActiveComponent }) => {
  const [isOpen, setIsOpen] = useState(true); // Sidebar is initially open

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        {/* Close button inside the sidebar */}
        <div className="close-btn" onClick={toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
        <button onClick={() => setActiveComponent('Home')}>Home</button>
        <button onClick={() => setActiveComponent('Announcement')}>Announcement</button>
        <button onClick={() => setActiveComponent('Maintenance')}>Maintenance</button>
        <button onClick={() => setActiveComponent('Members')}>Members</button>
        <button onClick={() => setActiveComponent('HomeServices')}>Home Services</button>
        <button onClick={() => setActiveComponent('Security')}>Security</button>
        <button onClick={() => setActiveComponent('Complaint')}>Complaint</button>
        <button onClick={() => setActiveComponent('Account')}>Account</button>
        <button onClick={() => setActiveComponent('EventManagement')}>Event Management</button>
      </div>

      {/* Open button (SVG icon) */}
      {!isOpen && (
        <div className="open-btn" onClick={toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
