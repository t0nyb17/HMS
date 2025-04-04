import React, { useState, useEffect } from 'react';
import './Complaint.css';

const Complaint = () => {
  const [complaints, setComplaints] = useState(() => {

    const savedComplaints = localStorage.getItem('complaints');
    return savedComplaints ? JSON.parse(savedComplaints) : [
      { id: 1, title: 'Leaking Pipe in Bathroom', date: '2024-09-19', description: 'The pipe in my bathroom has been leaking for two days.', memberName: 'John Doe', flatNo: '101', resolved: false },
      { id: 2, title: 'Noisy Neighbors', date: '2024-09-21', description: 'The neighbors are making noise late at night. Please address this issue.', memberName: 'Jane Smith', flatNo: '102', resolved: false },
    ];
  });

  const [newComplaint, setNewComplaint] = useState({ title: '', date: '', description: '', memberName: '', flatNo: '' });

  useEffect(() => {

    localStorage.setItem('complaints', JSON.stringify(complaints));
  }, [complaints]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComplaint((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmitComplaint = (e) => {
    e.preventDefault();
    setComplaints((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        title: newComplaint.title,
        date: newComplaint.date,
        description: newComplaint.description,
        memberName: newComplaint.memberName,
        flatNo: newComplaint.flatNo,
        resolved: false,
      },
    ]);
    setNewComplaint({ title: '', date: '', description: '', memberName: '', flatNo: '' });
  };

  const handleDeleteComplaint = (id) => {
    if (window.confirm('Are you sure you want to delete this complaint?')) {
      setComplaints((prevState) => prevState.filter(complaint => complaint.id !== id));
    }
  };

  const toggleResolved = (id) => {
    setComplaints((prevState) => 
      prevState.map(complaint => 
        complaint.id === id ? { ...complaint, resolved: !complaint.resolved } : complaint
      )
    );
  };

  return (
    <div className="complaint-page">
      <div className="complaint-header">
        <h1>Report a Complaint</h1>
        <p>If you are facing any issues in the housing society, please report them below.</p>
      </div>

      {/* Complaint List */}
      <div className="complaint-container">
        <div className="complaint-list">
          <h2>Existing Complaints</h2>
          <ul>
            {complaints.map((complaint) => (
              <li key={complaint.id}>
                <div className={`complaint-card ${complaint.resolved ? 'resolved' : ''}`}>
                  <h3>{complaint.title} {complaint.resolved && <span className='spanResolve'>(Resolved)</span>}</h3>
                  <p><strong>Date:</strong> {complaint.date}</p>
                  <p><strong>Member Name:</strong> {complaint.memberName}</p>
                  <p><strong>Flat No:</strong> {complaint.flatNo}</p>
                  <p><strong>Problem: </strong>{complaint.description}</p>
                  <button onClick={() => toggleResolved(complaint.id)} className="resolve-btn">
                    {complaint.resolved ? 'Mark as Unresolved' : 'Mark as Resolved'}
                  </button>
                  {/* <button onClick={() => handleDeleteComplaint(complaint.id)} className="delete-btn">
                    Delete
                  </button> */}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Submit New Complaint */}
      <div className="new-complaint">
        <h2>Submit a New Complaint</h2>
        <form onSubmit={handleSubmitComplaint}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newComplaint.title}
              onChange={handleInputChange}
              required
              placeholder="Enter complaint title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={newComplaint.date}
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
              value={newComplaint.description}
              onChange={handleInputChange}
              required
              placeholder="Describe the issue you're facing"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="memberName">Member Name</label>
            <input
              type="text"
              id="memberName"
              name="memberName"
              value={newComplaint.memberName}
              onChange={handleInputChange}
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="flatNo">Flat No</label>
            <input
              type="text"
              id="flatNo"
              name="flatNo"
              value={newComplaint.flatNo}
              onChange={handleInputChange}
              required
              placeholder="Enter your flat number"
            />
          </div>
          <button type="submit" className="submit-btn">Submit Complaint</button>
        </form>
      </div>
    </div>
  );
};

export default Complaint;
