import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ setActiveComponent }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        {/* Toggle Button */}
        <div className="close-btn" onClick={toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>

        {/* 🔴 SOS Button */}
        <button className="sos-button" onClick={() => setActiveComponent('SOS')}>🚨 SOS</button>

        {/* Navigation Buttons */}
        <button onClick={() => setActiveComponent('Home')}>Home</button>
        <button onClick={() => setActiveComponent('Announcement')}>Announcement</button>
        <button onClick={() => setActiveComponent('Maintenance')}>Maintenance</button>
        <button onClick={() => setActiveComponent('Members')}>Members</button>
        <button onClick={() => setActiveComponent('HomeServices')}>Home Services</button>
        <button onClick={() => setActiveComponent('Security')}>Security</button>
        <button onClick={() => setActiveComponent('Complaint')}>Complaint</button>
        <button onClick={() => setActiveComponent('Account')}>Account</button>
        <button onClick={() => setActiveComponent('EventManagement')}>Event Management</button>
        <button onClick={() => setActiveComponent('Payments')}>Payments</button>
      </div>

      {/* Open button (when closed) */}
      {!isOpen && (
        <div className="open-btn" onClick={toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
