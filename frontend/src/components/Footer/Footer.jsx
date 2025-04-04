import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div className="f-left">
          <span className="primaryText">Information</span><br></br>
          <span className="text">
            Our vision is to make every community<br /> 
            the best place to live.
          </span>
        </div>
  
        <div className="f-right">
          <div className="flexCenter f-menu">
            {/* <span>Home</span>
            <span>Services</span>
            <span>Contact Us</span>
            <span>About Us</span>
            <span>T&C</span> */}
            <a className="a1" href="#">Home</a>
            <a className="a1" href="#features">Features</a>
            <a className="a1" href="#contact-us">Contact</a>
            <a className="a1" href="#about-us">About Us</a>
          </div>
        </div>
      </div>

      <div className="f-bottom flexCenter">
        <span>&copy; 2024 All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
