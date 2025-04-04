import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Account.css";

const Account = () => {
  const navigate = useNavigate();
  const [accountInfo, setAccountInfo] = useState({
    name: 'hms',
    email: 'hms@gmail.com',
    flatNumber: 'A-101',
    contact: '9960006541',
  });

  const [editMode, setEditMode] = useState(false);
  const [updatedInfo, setUpdatedInfo] = useState(accountInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setAccountInfo(updatedInfo);
    setEditMode(false);
  };

  const handleCancel = () => {
    setUpdatedInfo(accountInfo);
    setEditMode(false);
  };

  const handleLogout = () => {
    navigate('/'); 
  };

  return (
    <div className="account-page">
      <h1 className="page-title">Account</h1>

      {!editMode ? (
        <div>
          <p><strong>Name:</strong> {accountInfo.name}</p>
          <p><strong>Email:</strong> {accountInfo.email}</p>
          <p><strong>Flat Number:</strong> {accountInfo.flatNumber}</p>
          <p><strong>Contact:</strong> {accountInfo.contact}</p>

          <button className="edit-button" onClick={() => setEditMode(true)}>
            Edit Info
          </button>
        </div>
      ) : (
        <form onSubmit={handleSave}>
          <div className="input-group">
            <label>Name</label>
            <input type="text" name="name" value={updatedInfo.name} onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" name="email" value={updatedInfo.email} onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Flat Number</label>
            <input type="text" name="flatNumber" value={updatedInfo.flatNumber} onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Contact</label>
            <input type="tel" name="contact" value={updatedInfo.contact} onChange={handleChange} />
          </div>

          <div className="button-group">
            <button type="submit" className="save-button">
              Save
            </button>
            <button type="button" className="cancel-button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      )}

  <div className="mt-8">
        <button
          className="logout-button"
          onClick={handleLogout} // Call handleLogout on button click
        >
          Log Out
        </button>
      </div>
    </div>

  );
};

export default Account;