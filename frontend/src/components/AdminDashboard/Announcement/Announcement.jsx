import React, { useState, useEffect } from 'react';
import './Announcement.css';

const Announcement = () => {
  const initialAnnouncements = [
    { id: 1, title: 'Scheduled Water Maintenance', date: '2024-09-20', time: '9 AM to 3 PM', description: 'Water will be turned off for maintenance from 9 AM to 3 PM.' },
    { id: 2, title: 'Community Meeting', date: '2024-09-25', time: '4 PM to 6 PM', description: 'There will be a community meeting on the 25th of September to discuss upcoming events.' },
  ];

  const [announcements, setAnnouncements] = useState(() => {
    const savedAnnouncements = localStorage.getItem('announcements');
    return savedAnnouncements ? JSON.parse(savedAnnouncements) : initialAnnouncements;
  });

  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [newAnnouncement, setNewAnnouncement] = useState({ title: '', date: '', time: '', description: '' });

  useEffect(() => {
    localStorage.setItem('announcements', JSON.stringify(announcements));
  }, [announcements]);

  const handleSelectAnnouncement = (announcement) => {
    setSelectedAnnouncement(announcement);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAnnouncement((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmitAnnouncement = (e) => {
    e.preventDefault();
    setAnnouncements((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        title: newAnnouncement.title,
        date: newAnnouncement.date,
        time: newAnnouncement.time, 
        description: newAnnouncement.description,
      },
    ]);
    setNewAnnouncement({ title: '', date: '', time: '', description: '' });
  };

  const handleDeleteAnnouncement = (id) => {
    const updatedAnnouncements = announcements.filter(announcement => announcement.id !== id);
    setAnnouncements(updatedAnnouncements);

    if (selectedAnnouncement && selectedAnnouncement.id === id) {
      setSelectedAnnouncement(null);
    }
  };

  const handleResetForm = () => {
    setNewAnnouncement({ title: '', date: '', time: '', description: '' });
  };

  return (
    <div className="announcement-page">
      <div className="announcement-header">
        <h1>Community Announcements</h1>
        <p>Stay informed about the latest announcements in your housing society.</p>
      </div>

      <div className="announcement-container">
        <div className="announcement-list">
          <h2>Current Announcements</h2>
          {announcements.length > 0 ? (
            <ul>
              {announcements.map((announcement) => (
                <li key={announcement.id}>
                  <div className="announcement-card">
                    <h3>{announcement.title}</h3>
                    <p><strong>Date:</strong> {announcement.date}</p>
                    <p><strong>Time:</strong> {announcement.time}</p> {/* Display time */}
                    <button onClick={() => handleSelectAnnouncement(announcement)} className="details-btn">
                      View Details
                    </button>
                    <button onClick={() => handleDeleteAnnouncement(announcement.id)} className="delete-btn">
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No announcements available.</p>
          )}
        </div>

        {selectedAnnouncement && (
          <div className="announcement-details">
            <h2>Announcement Details</h2>
            <div className="announcement-card">
              <h3>{selectedAnnouncement.title}</h3>
              <p><strong>Date:</strong> {selectedAnnouncement.date}</p>
              <p><strong>Time:</strong> {selectedAnnouncement.time}</p> {/* Display time in details */}
              <p>{selectedAnnouncement.description}</p>
              <button onClick={() => setSelectedAnnouncement(null)} className="back-btn">
                Back to List
              </button>
              <button onClick={() => handleDeleteAnnouncement(announcement.id)} className="delete-btn">
                      Delete
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="new-announcement">
        <h2>Create New Announcement</h2>
        <form onSubmit={handleSubmitAnnouncement}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newAnnouncement.title}
              onChange={handleInputChange}
              required
              placeholder="Enter announcement title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={newAnnouncement.date}
              onChange={handleInputChange}
              required
              onFocus={(e) => e.target.showPicker()} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input
              type="text"
              id="time"
              name="time"
              value={newAnnouncement.time}
              onChange={handleInputChange}
              required
              placeholder="Enter the time of the announcement"  
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={newAnnouncement.description}
              onChange={handleInputChange}
              required
              placeholder="Enter announcement details"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Add Announcement</button>
          <button type="reset" onClick={handleResetForm} className="reset-btn">Reset</button>
        </form>
      </div>
    </div>
  );
};

export default Announcement;
