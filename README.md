# 🏡 Home Management System (HMS)

Welcome to **HMS – Home Rental and Maintenance Management System**, a modern full-stack web application designed to streamline residential community management for both users and administrators.

Built using **React** for the frontend, **Express + SQL** for the backend, and integrated with secure authentication and payment processing, HMS simplifies tasks like maintenance tracking, event scheduling, security logs, and digital payments.

---

## 🚀 Features

🔐 **Authentication & Authorization**
- Secure Login/Register for **Users** and **Admins**
- Session-less JWT-based authentication
- Google OAuth 2.0 login with Passport.js
- Role-based access control (RBAC)

📋 **User Dashboard**
- Track maintenance requests and real-time updates
- View and pay utility bills using Razorpay
- Receive announcements and notifications
- View security visitor logs and building alerts
- Participate in community events

🛠️ **Admin Dashboard**
- Approve/reject maintenance and service requests
- Manage events, bills, and user activity
- Confirm and track payments
- Oversee building security and resident communications

💳 **Payment Integration**
- Integrated with **Razorpay** for secure online bill payments
- Create and verify orders from backend
- Webhook-based transaction validation
- Payment history saved in the database

🛡️ **Backend Security**
- Password hashing with bcrypt
- Secure headers via `helmet`
- Rate limiting with `express-rate-limit`
- Input sanitization and CSRF-ready structure

---

## 🌐 Tech Stack

| Layer        | Tech                          |
|--------------|-------------------------------|
| Frontend     | React.js                      |
| Backend      | Express.js (Node.js)          |
| Auth         | JWT + Google OAuth (Passport) |
| Database     | SQL (MySQL / PostgreSQL)      |
| Payments     | Razorpay                      |
| Security     | Helmet, Rate Limiting, bcrypt |

---

## 🖼️ Screenshots

![Screenshot 1](https://github.com/user-attachments/assets/c428fc7b-ff36-44c0-95e2-c2ed9a6a83e3)
![Screenshot 2](https://github.com/user-attachments/assets/c8201bb3-d675-44cf-83e9-b2425b9eaf85)
![Screenshot 3](https://github.com/user-attachments/assets/73d2c63b-861d-4396-99f5-c96373b23795)
![Screenshot 4](https://github.com/user-attachments/assets/43843288-4c73-4c68-adc5-75444d411bf6)
![Screenshot 5](https://github.com/user-attachments/assets/f79c63f1-70d0-4af5-9d57-ab202c52feab)
![Screenshot 6](https://github.com/user-attachments/assets/d08723f2-8a93-4044-aa08-4eb7f0e4476e)
![Screenshot 7](https://github.com/user-attachments/assets/916ba560-29db-4e88-92ed-c6ca3440ba52)
![Screenshot 8](https://github.com/user-attachments/assets/549afbeb-e241-49b9-a3c3-f7052730d453)
![Screenshot 9](https://github.com/user-attachments/assets/b2082ff8-3ffa-4ef0-81ae-7e3bba815d92)
![Screenshot 10](https://github.com/user-attachments/assets/4be01067-b8e0-4223-a7bf-25c15c3e09e6)
![Screenshot 11](https://github.com/user-attachments/assets/dd34cdce-405c-4865-86ee-7aa0fa286281)
![Screenshot 12](https://github.com/user-attachments/assets/cda02a21-1421-4aa0-9cd8-eace664e5716)
![Screenshot 13](https://github.com/user-attachments/assets/288d41fd-701c-43f2-9858-a7608b558df7)
![Screenshot 14](https://github.com/user-attachments/assets/4ca89978-173d-4b35-9864-e8b4b7b34f67)
![Screenshot 15](https://github.com/user-attachments/assets/43b7103e-806f-49eb-b21d-7b22baf3f0fe)

---

## 🛠 Installation Guide

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/hms.git
   cd hms
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment:**
   Create a `.env` file and add:
   ```env
   PORT=3000
   JWT_SECRET=your_jwt_secret
   GOOGLE_CLIENT_ID=your_google_oauth_client_id
   GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret
   RAZORPAY_KEY_ID=your_razorpay_key
   RAZORPAY_SECRET=your_razorpay_secret
   DB_USER=your_db_user
   DB_PASSWORD=your_db_pass
   DB_NAME=hms
   ```

4. **Run development server:**
   ```bash
   npm start
   ```

5. **Frontend:**
   Located in the `client/` directory (if split). Start with:
   ```bash
   cd client
   npm install
   npm start
   ```

---

## 📌 Future Improvements

- Real-time push notifications using WebSockets
- In-app messaging/chat between residents and admins
- Mobile app with React Native
- Monthly invoice generation (PDF)
- Admin analytics dashboard (D3.js / Chart.js)
- Stripe/PayPal payment options

---

## 🤝 Contributing

We welcome contributions! Fork the repo, branch out, and submit a pull request with improvements, fixes, or features.

---

## 👨‍💻 Developed By

**Tanmay Bangar, Shaan Aigal**  
Engineering Students | Passionate Web Developers

---

## 📬 Contact

📧 Email: [tanmaymbangar@gmail.com](mailto:tanmaymbangar@gmail.com)
https://github.com/ShaanAigal AND https://github.com/t0nyb17

---
