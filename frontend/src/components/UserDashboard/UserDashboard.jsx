import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Announcement from './Announcement/Announcement1';
import Maintenance from './Maintenance/Maintenance';
import Members from './Members/Members';
import HomeServices from './HomeServices/HomeServices';
import Security from './Security/Security1';
import Complaint from './Complaint/Complaint1';
import Account from './Account/Account1';
import EventManagement from './EventManagement/EventMangement1';
const UserDashboard = () => {
  // State to manage which component is rendered
  const [activeComponent, setActiveComponent] = useState('Home');

  // Function to render the active component
  const renderComponent = () => {
    switch (activeComponent) {
      case 'Overview':
        return <Overview />;
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
      default:
        return <Home />;
    }
  };

  useEffect(() => {
    // Add the class to body when the component mounts
    document.body.classList.add('dashboard-body');

    // Cleanup function to remove the class when the component unmounts
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

export default UserDashboard;
