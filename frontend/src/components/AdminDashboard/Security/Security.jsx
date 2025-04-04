import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Security.css';

const SecurityPage = () => {
  const [incidents, setIncidents] = useState([
    { id: 1, title: 'Suspicious Activity', date: '2024-09-15', description: 'Reported suspicious individuals near the entrance.' },
    { id: 2, title: 'Theft Attempt', date: '2024-09-20', description: 'Attempted break-in at flat 203.' },
  ]);

  const [newIncident, setNewIncident] = useState({ title: '', date: '', description: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewIncident((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleDeleteIncident = (id) => {
    if (window.confirm('Are you sure you want to delete this incident report?')) {
      setIncidents((prevState) => prevState.filter(incident => incident.id !== id));
    }
  };

  const handleSubmitIncident = (e) => {
    e.preventDefault();
    const newInc = { id: incidents.length + 1, title: newIncident.title, date: newIncident.date, description: newIncident.description };
    setIncidents((prevState) => [...prevState, newInc]);

    emailjs
      .send(
        'service_1f44684',      
        'template_gyoqsvd',      
        {
          title: newIncident.title,
          date: newIncident.date,
          description: newIncident.description,
          user_email: 'tanmaybabgar-inft@atharvacoe.ac.in',
        },
        'G2S01oNS79GIqTaNM'    
      )
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Incident reported, and email sent!');
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
        alert('Incident reported, but failed to send email.');
      });

    setNewIncident({ title: '', date: '', description: '' });
  };

  return (
    <div className="security-page">
      <div className="security-header">
        <h1>Security Management</h1>
        <p>Your safety is our priority. Report incidents and view security updates.</p>
      </div>

      {/* Incident List */}
      <div className="incident-container">
        <h2>Reported Incidents</h2>
        <ul>
          {incidents.map((incident) => (
            <li key={incident.id}>
              <div className="incident-card">
                <h3>{incident.title}</h3>
                <p><strong>Date:</strong> {incident.date}</p>
                <p><strong>Description:</strong> {incident.description}</p>

                <button onClick={() => handleDeleteIncident(incident.id)} className="delete-btn">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Submit New Incident */}
      <div className="new-incident">
        <h2>Report a New Incident</h2>
        <form onSubmit={handleSubmitIncident}>
          <div className="form-group">
            <label htmlFor="title">Incident Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newIncident.title}
              onChange={handleInputChange}
              required
              placeholder="Enter incident title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={newIncident.date}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={newIncident.description}
              onChange={handleInputChange}
              required
              placeholder="Describe the incident"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Submit Incident</button>
        </form>
      </div>
    </div>
  );
};

export default SecurityPage;
