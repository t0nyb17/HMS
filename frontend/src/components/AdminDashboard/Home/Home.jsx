import React, { useState, useEffect } from 'react'; 
import './Home.css'; 
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

const Home = () => {
  const [data, setData] = useState({
    reports: 0,
    maintenanceEvents: 0,
    members: 0,
    events: 0,
  });

  const pieData = [
    { name: 'Reports', value: data.reports },
    { name: 'Maintenance', value: data.maintenanceEvents },
    { name: 'Members', value: data.members },
    { name: 'Events', value: data.events },
  ];

  const lineChartData = [
    { name: 'Week 1', reports: 5, events: 1, members: 10 },
    { name: 'Week 2', reports: 3, events: 2, members: 20 },
    { name: 'Week 3', reports: 4, events: 3, members: 15 },
    { name: 'Week 4', reports: 5, events: 4, members: 30 },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const reports = await getReportsCount(); 
      const maintenanceEvents = await getMaintenanceEventsCount(); 
      const members = await getMembersCount(); 
      const events = await getEventsCount(); 

      setData({
        reports,
        maintenanceEvents,
        members,
        events,
      });
    };

    fetchData();
  }, []);

  return (
    <div className="home-page">
      <h1 className='dashboard-title'>Welcome Admin</h1>
      <h1 className="dashboard-title">Dashboard Overview</h1>

      <div className="card-container">
        <div className="card1">
          <h2>Reports</h2>
          <p className="card-number">{data.reports}</p>
        </div>

        <div className="card1">
          <h2>Maintenance</h2>
          <p className="card-number">{data.maintenanceEvents}</p>
        </div>

        <div className="card1">
          <h2>Members</h2>
          <p className="card-number">{data.members}</p>
        </div>

        <div className="card1">
          <h2>Events</h2>
          <p className="card-number">{data.events}</p>
        </div>
      </div>

      <div className="charts-container">
        <h2>Overview Graphs</h2>
        <div className="chart">
          <h3>Member Statistics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={lineChartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="reports" barSize={50} fill="#8884d8" />
              <Line type="monotone" dataKey="members" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <div className="chart">
          <h3>Reports, Maintenance, Members, and Events Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" outerRadius={140} fill="#8884d8" dataKey="value">
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 0 ? '#0088FE' : index === 1 ? '#00C49F' : index === 2 ? '#FFBB28' : '#FF8042'} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const getReportsCount = async () => 5; 
const getMaintenanceEventsCount = async () => 10; 
const getMembersCount = async () => 40; 
const getEventsCount = async () => 3; 
export default Home;
