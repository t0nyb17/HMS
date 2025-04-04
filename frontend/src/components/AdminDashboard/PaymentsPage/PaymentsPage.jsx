import React from "react";
import { useNavigate } from "react-router-dom";
import "./PaymentsPage.css"; // Styling for this component

const PaymentsPage = () => {
  const navigate = useNavigate();

  const handlePaymentRedirect = () => {
    window.location.href = "/payment-gateway-integration-main/paymentPage.html"; // Adjust this path as needed
  };

  return (
    <div className="payments-container">
      <h1>Make a Payment</h1>
      <p>Select an option below to proceed with your payment.</p>
      <button onClick={handlePaymentRedirect} className="pay-now-btn">
        Proceed to Payment
      </button>
    </div>
  );
};

export default PaymentsPage;
