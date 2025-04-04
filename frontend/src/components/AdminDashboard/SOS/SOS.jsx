import React from 'react';
import './SOS.css';
import axios from 'axios';

const SOS = () => {
  const handleSOSClick = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/sos'); // Your backend URL

      alert("🚨 SOS sent! Message and call triggered.\nCheck your phone.");
      console.log("Response:", response.data);
    } catch (error) {
      console.error('SOS Error:', error);
      alert("❌ Failed to send SOS. Please try again.");
    }
  };

  return (
    <div className="sos-page">
      <h1>Emergency SOS</h1>
      <button className="sos-button" onClick={handleSOSClick}>
        SOS
      </button>
    </div>
  );
};

export default SOS;
