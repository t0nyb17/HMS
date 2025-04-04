-- Create Database
CREATE DATABASE IF NOT EXISTS members_db;
USE members_db;

-- Members Table
CREATE TABLE IF NOT EXISTS members (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    flatNumber VARCHAR(50) NOT NULL UNIQUE,  -- Ensure flatNumber is unique
    contact VARCHAR(20) NOT NULL
);

-- Insert Sample Members
INSERT INTO members (name, email, flatNumber, contact) VALUES
('Shaan Aigal', 'shaan.aigal@example.com', 'A101', '1234567890'),
('Tanmay Bangar', 'tanmay.bangar@example.com', 'A102', '1234567891'),
('Om Amberkar', 'om.amberkar@example.com', 'A103', '1234567892'),
('Shashank Dubey', 'shashank.dubey@example.com', 'A104', '1234567893'),
('Soni Vihaan Amit', 'soni.vihaan.amit@example.com', 'A105', '1234567894'),
('Sulane Akanksha Ashok', 'sulane.akanksha.ashok@example.com', 'A106', '1234567895'),
('Surve Yash Rakesh', 'surve.yash.rakesh@example.com', 'A107', '1234567896'),
('Sutariya Dhanvi Ghanshyambhai', 'sutariya.dhanvi.ghanshyambhai@example.com', 'A108', '1234567897'),
('Tare Purva Prakash', 'tare.purva.prakash@example.com', 'A109', '1234567898'),
('Temkar Omkar Shrinivas', 'temkar.omkar.shrinivas@example.com', 'A110', '1234567899'),
('Thakur Kundankumar Dayanand', 'thakur.kundankumar.dayanand@example.com', 'A111', '1234567800'),
('Tiwari Vikas Ashish', 'tiwari.vikas.ashish@example.com', 'A112', '1234567801'),
('Tonde Vedant Suresh', 'tonde.vedant.suresh@example.com', 'A113', '1234567802'),
('Varhadi Aryan Nitin', 'varhadi.aryan.nitin@example.com', 'A114', '1234567803'),
('Vaze Ruchit Ajit', 'vaze.ruchit.ajit@example.com', 'A115', '1234567804'),
('Verma Gaurvi Sumant', 'verma.gaurvi.sumant@example.com', 'A116', '1234567805'),
('Rushikesh Virkar', 'rushikesh.virkar@example.com', 'A117', '1234567806'),
('Wadkar Shivam Mangesh', 'wadkar.shivam.mangesh@example.com', 'A118', '1234567807'),
('Waghela Tushar Nilesh', 'waghela.tushar.nilesh@example.com', 'A119', '1234567808'),
('Waghmode Pratiksha Arun', 'waghmode.pratiksha.arun@example.com', 'A120', '1234567809'),
('Yadav Aayush Radheshyam', 'yadav.aayush.radheshyam@example.com', 'A121', '1234567810'),
('Yadav Bhagyashree Ramdarshan', 'yadav.bhagyashree.ramdarshan@example.com', 'A122', '1234567811'),
('Yadav Prince Rajesh', 'yadav.prince.rajesh@example.com', 'A123', '1234567812'),
('Yadav Saurabh Subhash', 'yadav.saurabh.subhash@example.com', 'A124', '1234567813'),
('Zore Harshad Ramchandra', 'zore.harshad.ramchandra@example.com', 'A125', '1234567814'),
('Pranav Natalkar', 'pranav.natalkar@example.com', 'A126', '1234567815'),
('Nawathe Shravani Mandar', 'nawathe.shravani.mandar@example.com', 'A127', '1234567816'),
('Nibade Pratham Santosh', 'nibade.pratham.santosh@example.com', 'A128', '1234567817'),
('Pandey Harsh AjayShankar', 'pandey.harsh.ajayshankar@example.com', 'A129', '1234567818'),
('Naik Harshal Sambhaji', 'naik.harshal.sambhaji@example.com', 'A130', '1234567819'),
('Nikita Gautam Pagare', 'nikita.gautam.pagare@example.com', 'A131', '1234567820'),
('Raut Ayush Sandeep', 'raut.ayush.sandeep@example.com', 'A132', '1234567821'),
('Bhide Priyanka Milind', 'bhide.priyanka.milind@example.com', 'A133', '1234567822'),
('Gawade Ninad Prakash', 'gawade.ninad.prakash@example.com', 'A134', '1234567823'),
('Angwalkar Prerana Santosh', 'angwalkar.prerana.santosh@example.com', 'A135', '1234567824'),
('Raut Aayushi Prakash', 'raut.aayushi.prakash@example.com', 'A136', '1234567825'),
('Kini Himani Vanraj', 'kini.himani.vanraj@example.com', 'A137', '1234567826'),
('Narkar Shivam Sanjay', 'narkar.shivam.sanjay@example.com', 'A138', '1234567827'),
('Khairnar Mohit Avinash', 'khairnar.mohit.avinash@example.com', 'A139', '1234567828'),
('Patel Dhwani Jayesh', 'patel.dhwani.jayesh@example.com', 'A140', '1234567829'),
('Shetye Mitesh Sandeep', 'shetye.mitesh.sandeep@example.com', 'A141', '1234567830'),
('Nair Bhumika Premanand', 'nair.bhumika.premanand@example.com', 'A142', '1234567831'),
('Gohil Pratham Yogesh', 'gohil.pratham.yogesh@example.com', 'A143', '1234567832'),
('Khot Bhagyashri Pravin', 'khot.bhagyashri.pravin@example.com', 'A144', '1234567833');

-- Bills Table
CREATE TABLE IF NOT EXISTS bills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    flat_number VARCHAR(50) NOT NULL,       
    amount DECIMAL(10, 2) NOT NULL,
    due_date DATE NOT NULL,
    status ENUM('Unpaid', 'Paid') DEFAULT 'Unpaid',
    months_unpaid INT NOT NULL,
    FOREIGN KEY (flat_number) REFERENCES members(flatNumber)
);

-- Insert sample overdue bill records for the first 10 members
INSERT INTO bills (flat_number, amount, due_date, status, months_unpaid) VALUES
('A101', 5000, '2024-10-15', 'Unpaid', 1),
('A102', 4500, '2024-09-20', 'Unpaid', 1),
('A103', 4800, '2024-08-18', 'Unpaid', 2),
('A104', 5500, '2024-07-25', 'Unpaid', 4),
('A105', 5200, '2024-06-30', 'Unpaid', 2),
('A106', 5300, '2024-05-15', 'Unpaid', 3),
('A107', 5100, '2024-04-20', 'Unpaid', 2),
('A108', 4950, '2024-03-18', 'Unpaid', 1),
('A109', 4600, '2024-02-25', 'Unpaid', 3),
('A110', 4700, '2024-01-30', 'Unpaid', 1);


CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  role ENUM('admin', 'user') NOT NULL DEFAULT 'user'
);

-- Create the events table
CREATE TABLE IF NOT EXISTS events (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  date DATETIME NOT NULL
);

-- Create the announcements table
CREATE TABLE IF NOT EXISTS announcements (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the complaints table
CREATE TABLE IF NOT EXISTS complaints (
  id INT AUTO_INCREMENT PRIMARY KEY,
  member_id INT NOT NULL,
  subject VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  status ENUM('open', 'in_progress', 'resolved') DEFAULT 'open',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (member_id) REFERENCES members(id)
);

-- Create the maintenance_requests table
CREATE TABLE IF NOT EXISTS maintenance_requests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  member_id INT NOT NULL,
  issue VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  status ENUM('pending', 'scheduled', 'completed') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (member_id) REFERENCES members(id)
);

-- Insert sample data into the users table
INSERT INTO users (username, password, email, role) VALUES
('admin', 'admin123', 'admin@example.com', 'admin'),
('user1', 'user123', 'user1@example.com', 'user'),
('user2', 'user456', 'user2@example.com', 'user');

-- Insert sample data into the events table
INSERT INTO events (title, description, date) VALUES
('Annual General Meeting', 'Yearly meeting for all society members', '2023-07-15 18:00:00'),
('Summer Barbecue', 'Community gathering with food and games', '2023-08-05 12:00:00'),
('Diwali Celebration', 'Festival of lights celebration', '2023-11-12 19:00:00');

-- Insert sample data into the announcements table
INSERT INTO announcements (title, content) VALUES
('Water Shutdown Notice', 'Water will be shut off for maintenance on June 1st from 10 AM to 2 PM.'),
('New Gym Equipment', 'We have installed new treadmills and weight machines in the community gym.'),
('Parking Lot Resurfacing', 'The parking lot will be resurfaced next week. Please move your vehicles.');

-- Insert sample data into the complaints table
INSERT INTO complaints (member_id, subject, description, status) VALUES
(1, 'Noisy Neighbors', 'The residents in flat B202 are playing loud music late at night.', 'open'),
(3, 'Broken Elevator', 'The elevator in Building C is not working properly.', 'in_progress'),
(5, 'Garbage Collection', 'Garbage is not being collected regularly from the bins.', 'resolved');

-- Insert sample data into the maintenance_requests table
INSERT INTO maintenance_requests (member_id, issue, description, status) VALUES
(2, 'Leaky Faucet', 'The kitchen faucet is leaking and needs repair.', 'pending'),
(4, 'Faulty Air Conditioning', 'The AC unit in the living room is not cooling properly.', 'scheduled'),
(6, 'Broken Window', 'The window in the bedroom is cracked and needs replacement.', 'completed');

-- Create the payments table
CREATE TABLE IF NOT EXISTS payments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  member_id INT NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (member_id) REFERENCES members(id)
);

-- Insert sample data into the bills table
INSERT INTO bills (member_id, amount, due_date, description, status) VALUES
(1, 1000.00, '2023-06-30', 'Monthly Maintenance Fee', 'unpaid'),
(2, 500.00, '2023-06-15', 'Water Bill', 'paid'),
(3, 1500.00, '2023-07-05', 'Electricity Bill', 'unpaid');

-- Insert sample data into the payments table
INSERT INTO payments (member_id, amount) VALUES
(2, 500.00),
(4, 1000.00),
(5, 750.00);
