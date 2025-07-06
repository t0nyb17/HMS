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

> (*Screenshots remain the same; removed here for brevity*)

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

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
