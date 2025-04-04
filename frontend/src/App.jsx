import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Value from "./components/Value/Value";
import LoginPage from "./components/LoginPage/LoginPage";
import AdminLogin from "./components/LoginPage/AdminLogin/AdminLogin";
import UserLogin from "./components/LoginPage/UserLogin/UserLogin";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";


function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <div>
              <div className="white-gradient" />
              <Header />
              <Hero />
            </div>
            <Features />
            <Value />
            <GetStarted />
            <Contact />
            <Footer />
          </div>
        }
      />

      {/* Login and other routes */}
      <Route path="/loginpage" element={<LoginPage />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/user-login" element={<UserLogin />} />
      <Route path="/registerPage" element={<RegisterPage />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;