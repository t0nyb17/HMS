import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Features.css"; 

const features = [
  {
    id: 1,
    image: "./bill.svg", 
    name: "Automated Billing",
    detail: "Simplified, accurate billing and payment processing for your residents.",
  },
  {
    id: 2,
    image: "./dev-icon-13.svg",
    name: "Maintenance Tracking",
    detail: "Efficiently track and resolve maintenance requests.",
  },
  {
    id: 3,
    image: "./member.svg",
    name: "Resident Communication",
    detail: "Seamless communication between management and residents.",
  },
  {
    id: 4,
    image: "./notice.svg",
    name: "Events",
    detail: "Manage the upcoming Events and notify about it to the residents.",
  },
  {
    id: 5,
    image: "./security.svg",
    name: "Security",
    detail: "Security data and time to time for entry of non-residents.",
  },
  {
    id: 6,
    image: "./report.svg",
    name: "Report Issue",
    detail: "To report any issue regarding society amenities for residents.",
  }
  
];

const Features = () => {
  return (
    <div id="features" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        {/* Header Section */}
        <div className="flexColStart r-head mb-4">
          <span className="orangeText">Features</span>
          <span className="primaryText">Try Our Services</span>
        </div>

        {/* Bootstrap Card Section */}
        <Row className="g-4">
          {features.map((feature) => (
            <Col key={feature.id} sm={12} md={4}>
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={feature.image}
                  alt={feature.name}
                  className="card-img-custom" 
                />
                <Card.Body>
                  <Card.Title>{feature.name}</Card.Title>
                  <Card.Text>{feature.detail}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Features;
