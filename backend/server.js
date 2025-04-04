const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const twilio = require('twilio');
require('dotenv').config(); // Load environment variables

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Twilio Setup
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// ✅ SOS API - Sends SMS + Call
app.post('/api/sos', async (req, res) => {
  try {
    const sms = await client.messages.create({
      body: '🚨 SOS Alert: Emergency situation detected. Immediate attention required!',
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.EMERGENCY_PHONE,
    });

    const call = await client.calls.create({
      twiml: '<Response><Say voice="alice">This is an emergency alert from your housing management system. Please respond immediately.</Say></Response>',
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.EMERGENCY_PHONE,
    });

    res.status(200).json({
      message: 'SOS alert sent via SMS and phone call.',
      smsSid: sms.sid,
      callSid: call.sid,
    });
  } catch (error) {
    console.error('Twilio SOS Error:', error.message);
    res.status(500).json({ error: 'Failed to send SOS alert.' });
  }
});

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'members_db'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('✅ Connected to the MySQL database.');
});

// Routes

app.get('/api/members', (req, res) => {
  db.query('SELECT * FROM members', (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

app.post('/api/members', (req, res) => {
  const { name, email, flatNumber, contact } = req.body;
  const sql = 'INSERT INTO members (name, email, flatNumber, contact) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, email, flatNumber, contact], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ id: result.insertId, ...req.body });
  });
});

app.delete('/api/members/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM members WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Member deleted successfully' });
  });
});

app.put('/api/members/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, flatNumber, contact } = req.body;
  const sql = 'UPDATE members SET name = ?, email = ?, flatNumber = ?, contact = ? WHERE id = ?';
  db.query(sql, [name, email, flatNumber, contact, id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Member updated successfully' });
  });
});

app.get('/api/bills', (req, res) => {
  db.query('SELECT * FROM bills', (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

// Start Server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
