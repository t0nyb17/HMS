import React from "react";
import "./GetStarted.css";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <button onClick={scrollToTop} className="button">
      Get Started
    </button>
  );
};

const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with HMS</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us.
            <br />
            Click below to get started
          </span>
          <ScrollToTopButton/>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
