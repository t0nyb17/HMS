import React, { useState, useEffect } from 'react';
import './EventManagement.css';

const EventManagement = () => {

  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem('events');
    return savedEvents ? JSON.parse(savedEvents) : [
      { id: 1, title: 'Society Meeting', date: '2024-10-01', description: 'Monthly society meeting to discuss important updates.', confirmed: false },
      { id: 2, title: 'Diwali Celebration', date: '2024-11-12', description: 'Join us for the Diwali festivities!', confirmed: false },
    ];
  });

  const [newEvent, setNewEvent] = useState({ title: '', date: '', description: '' });

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    setEvents((prevEvents) => [
      ...prevEvents,
      { id: prevEvents.length + 1, ...newEvent, confirmed: false },
    ]);
    setNewEvent({ title: '', date: '', description: '' });
  };

  const handleMarkAsDone = (id) => {
    setEvents((prevEvents) =>
      prevEvents.map(event => event.id === id ? { ...event, confirmed: true } : event)
    );
  };

  const handleDeleteEvent = (id) => {
    setEvents((prevEvents) => prevEvents.filter(event => event.id !== id));
  };

  const handleResetForm = () => {
    setNewEvent({ title: '', date: '', description: '' });
  };

  return (
    <div className="event-management">
      <header className="event-header">
        <h1>Event Management</h1>
        <p>View upcoming events and mark them as done!</p>
      </header>

      <section className="event-list">
        <h2>Upcoming Events</h2>
        <ul className='listEvents'>
          {events.map(event => (
            <li key={event.id} className={`event-item ${event.confirmed ? 'confirmed' : ''}`}>
              <div className="event-details">
                <h3>{event.title}</h3>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Description: </strong>{event.description}</p>
                <button className='done'
                  onClick={() => handleMarkAsDone(event.id)}
                  disabled={event.confirmed}
                >
                  {event.confirmed ? 'Done' : 'Mark as Done'}
                </button>
                {/* <button onClick={() => handleDeleteEvent(event.id)}
                  className="delete-btn">
                  Delete
                </button> */}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="new-event">
        <h2>Add New Event</h2>
        <form onSubmit={handleSubmitEvent}>
          <div className="form-group">
            <label htmlFor="title">Event Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newEvent.title}
              onChange={handleInputChange}
              required
              placeholder="Enter the title of Event"
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Event Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={newEvent.date}
              onFocus={(e) => e.target.showPicker()} 
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={newEvent.description}
              onChange={handleInputChange}
              required
              placeholder="Event details"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Add Event</button>
          <button type="button" className="reset-btn" onClick={handleResetForm}>Reset</button>
        </form>
      </section>
    </div>
  );
};

export default EventManagement;
