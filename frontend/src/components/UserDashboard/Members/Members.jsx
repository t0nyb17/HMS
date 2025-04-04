import React, { useState, useEffect } from 'react';
import './Members.css';

const Members = () => {
  const [members, setMembers] = useState([]);
  const [newMember, setNewMember] = useState({ name: '', email: '', flatNumber: '', contact: '' });
  const [editMode, setEditMode] = useState(false);
  const [currentMemberId, setCurrentMemberId] = useState(null);

  // Fetch members from backend
  useEffect(() => {
    fetch('http://localhost:5000/api/members')
      .then((res) => res.json())
      .then((data) => setMembers(data))
      .catch((error) => console.error('Error fetching members:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddMember = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/members', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMember),
    })
      .then((res) => res.json())
      .then((data) => {
        setMembers([...members, data]);
        setNewMember({ name: '', email: '', flatNumber: '', contact: '' });
      })
      .catch((error) => console.error('Error adding member:', error));
  };

  const handleDeleteMember = (id) => {
    fetch(`http://localhost:5000/api/members/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        const updatedMembers = members.filter((member) => member.id !== id);
        setMembers(updatedMembers);
      })
      .catch((error) => console.error('Error deleting member:', error));
  };

  const handleEditMember = (id) => {
    const memberToEdit = members.find((member) => member.id === id);
    setNewMember(memberToEdit);
    setCurrentMemberId(id);
    setEditMode(true);
  };

  const handleSaveMember = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/api/members/${currentMemberId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMember),
    })
      .then(() => {
        const updatedMembers = members.map((member) =>
          member.id === currentMemberId ? newMember : member
        );
        setMembers(updatedMembers);
        setNewMember({ name: '', email: '', flatNumber: '', contact: '' });
        setEditMode(false);
        setCurrentMemberId(null);
      })
      .catch((error) => console.error('Error updating member:', error));
  };

  const handleCancelEdit = () => {
    setNewMember({ name: '', email: '', flatNumber: '', contact: '' });
    setEditMode(false);
    setCurrentMemberId(null);
  };

  return (
    <div className="members-page">
      <h1 className="title">Members List</h1>
      <form onSubmit={editMode ? handleSaveMember : handleAddMember} className="member-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newMember.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newMember.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="flatNumber"
          placeholder="Flat Number"
          value={newMember.flatNumber}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={newMember.contact}
          onChange={handleInputChange}
          required
        />
        <button type="submit" className="btn">{editMode ? 'Save Changes' : 'Add Member'}</button>
        {editMode && (
          <button type="button" className="btn cancel" onClick={handleCancelEdit}>
            Cancel
          </button>
        )}
      </form>

      <ul className="members-list">
        {members.map((member, index) => (
          <li className="member-card" key={member.id}>
            <span>
            {index + 1}.&nbsp;&nbsp;Name:  {member.name} <br/>Email: ({member.email}) <br />
              Flat No: {member.flatNumber} <br />
              Contact: {member.contact}
            </span>
            {/* <div className="member-actions">
              <button className="btn edit" onClick={() => handleEditMember(member.id)}>Edit</button>
              <button className="btn delete" onClick={() => handleDeleteMember(member.id)}>Delete</button>
            </div> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Members;
