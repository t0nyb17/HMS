import React, { useState } from 'react';
import './HomeServices.css';

const HomeServicesPage = () => {
  const [services] = useState([
    { id: 1, name: 'Plumbing', description: 'Leak repairs and plumbing installation.', contact: '123-456-7890' },
    { id: 2, name: 'Electrical', description: 'Electrical repairs and installations.', contact: '987-654-3210' },
    { id: 3, name: 'Cleaning', description: 'Deep cleaning services for your home.', contact: '456-789-0123' },
    { id: 4, name: 'Pest Control', description: 'Effective pest management solutions.', contact: '321-654-9870' },
  ]);

  const [newServiceRequest, setNewServiceRequest] = useState({ service: '', date: '', details: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewServiceRequest((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmitRequest = (e) => {
    e.preventDefault();
    alert(`Request submitted for ${newServiceRequest.service} on ${newServiceRequest.date}`);
    setNewServiceRequest({ service: '', date: '', details: '' });
  };

  return (
    <div className="home-services-page container">
      <header className="home-services-header text-center">
        <h1>Home Services</h1>
        <p className="explore-text">Explore the available home services and request assistance.</p> {/* Added class here */}
      </header>

      <h2 className="w-100 text-center my-4 available-services-title">Available Services</h2>

      <section className="services-container">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="card-body">
              <img className='imgsvg' src="/member.svg" alt="" />
              <h3 className="card-title1">{service.name}</h3>
              <p className="card-text1">{service.description}</p>
              <p className="card-text1"><strong>Contact:</strong> {service.contact}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="new-service-request my-4">
        <h2>Request a Service</h2>
        <form onSubmit={handleSubmitRequest}>
          <div className="form-group">
            <label htmlFor="service">Service Type</label>
            <select
              id="service"
              name="service"
              value={newServiceRequest.service}
              onChange={handleInputChange}
              required
              className="form-control"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service.id} value={service.name}>{service.name}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="date">Preferred Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={newServiceRequest.date}
              onChange={handleInputChange}
              required
              onFocus={(e) => e.target.showPicker()} 
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="details">Additional Details</label>
            <textarea
              id="details"
              name="details"
              value={newServiceRequest.details}
              onChange={handleInputChange}
              placeholder="Provide any additional information"
              className="form-control"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Request Service</button>
        </form>
      </section>
    </div>
  );
};

export default HomeServicesPage;
