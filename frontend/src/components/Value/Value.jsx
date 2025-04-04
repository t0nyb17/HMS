import React from "react";
import "./Value.css"; 

const housingDetails = [
  {
    id: 1,
    title: "Streamlined Management",
    description: "Our housing management system simplifies property management by providing tools for tracking maintenance requests, managing billing, and facilitating resident communication.",
  },
  {
    id: 2,
    title: "User-Friendly Interface",
    description: "Designed with residents and management in mind, our intuitive interface makes it easy for users to navigate and access essential features.",
  },
  {
    id: 3,
    title: "Future Aspirations",
    description: "We aspire to integrate smart home technologies and AI-driven insights into our system, creating a more connected and efficient living experience for all residents.",
  },
];

const AboutUs = () => {
  return (
    <div id="about-us" className="about-wrapper py-12">
      <div className="paddings innerWidth about-container">
        {/* Header Section */}
        <div className="flexColStart about-head mb-8 text-center">
          <h2 className="orangeText">About Us</h2>
          <p className="primaryText">Learn more about our housing management system</p>
        </div>

        {/* Housing Management System Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {housingDetails.map((detail) => (
            <div key={detail.id} className="housing-card rounded-lg shadow-lg p-4 bg-white">
              <h3 className="text-lg font-semibold">{detail.title}</h3>
              <p className="mt-2 text-gray-700">{detail.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
