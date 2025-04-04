import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Navbar from './Navbar/Navbar';

import Home from './Home/Home';
import Announcement from './Announcement/Announcement';
import Maintenance from './Maintenance/Maintenance';
import Members from './Members/Members';
import HomeServices from './HomeServices/HomeServices';
import Security from './Security/Security';
import Complaint from './Complaint/Complaint';
import Account from './Account/Account';
import EventManagement from './EventManagement/EventMangement';
import PaymentsPage from './PaymentsPage/PaymentsPage';
import SOS from './SOS/SOS'; // ✅ SOS import

const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('Home');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Overview':
        return <Home />; // Assuming 'Overview' points to Home
      case 'Announcement':
        return <Announcement />;
      case 'Maintenance':
        return <Maintenance />;
      case 'Members':
        return <Members />;
      case 'HomeServices':
        return <HomeServices />;
      case 'Security':
        return <Security />;
      case 'Complaint':
        return <Complaint />;
      case 'Account':
        return <Account />;
      case 'EventManagement':
        return <EventManagement />;
      case 'Payments':
        return <PaymentsPage />;
      case 'SOS': // ✅ SOS route
        return <SOS />;
      default:
        return <Home />;
    }
  };

  useEffect(() => {
    document.body.classList.add('dashboard-body');
    return () => {
      document.body.classList.remove('dashboard-body');
    };
  }, []);

  return (
    <div className="dashboard">
      <Sidebar setActiveComponent={setActiveComponent} />
      <div className="main-content">
        <Navbar />
        <div className="content-area">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
