import React, { useState, useEffect } from 'react';
import './Bills.css';

const MaintenanceBill = () => {
  const [bills, setBills] = useState([]);
  const [selectedBill, setSelectedBill] = useState(null);

  useEffect(() => {
    fetchBills();
  }, []);

  const fetchBills = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/bills');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const unpaidBills = data.map(bill => ({ ...bill, status: 'Unpaid' }));
      setBills(unpaidBills);
    } catch (error) {
      console.error('Error fetching bills:', error);
    }
  };

  const handlePayment = async (billId) => {
    const updatedBills = bills.map((bill) =>
      bill.id === billId ? { ...bill, status: 'Paid' } : bill
    );
    setBills(updatedBills);

    // Redirect to payment page
    window.location.href = '/payment-gateway-integration-main/paymentPage.html';
  };

  const showReceipt = (bill) => {
    setSelectedBill(bill);
  };

  const closeReceipt = () => {
    setSelectedBill(null);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  // Function to calculate the number of months unpaid
  const calculateUnpaidMonths = (dueDate) => {
    const due = new Date(dueDate);
    const now = new Date();
    const monthsDifference = (now.getFullYear() - due.getFullYear()) * 12 + now.getMonth() - due.getMonth();
    return monthsDifference > 0 ? monthsDifference : 0; // Return 0 if the bill is not overdue
  };

  return (
    <div className="maintenance-bill-page">
      <h1>Maintenance Bill Payment</h1>
      <div className="bill-list">
        {bills.map((bill) => (
          <div key={bill.id} className={`bill-card ${bill.status === 'Paid' ? 'paid' : 'unpaid'}`}>
            <h3>Flat Number: {bill.flat_number}</h3>
            <p>Amount: ₹{bill.amount}</p>
            <p>Due Date: {formatDate(bill.due_date)}</p>
            <p>Status: {bill.status}</p>
            <p>Months Unpaid: {calculateUnpaidMonths(bill.due_date)}</p> {/* Display unpaid months */}
            <button onClick={() => handlePayment(bill.id)} className="pay-btn">
              Pay Now
            </button>
            <button onClick={() => showReceipt(bill)} className="receipt-btn">
              Show Receipt
            </button>
          </div>
        ))}
      </div>

      {selectedBill && (
        <div className="receipt-modal">
          <div className="receipt-content">
            <h2>Receipt</h2>
            <p>Flat Number: {selectedBill.flat_number}</p>
            <p>Amount: ₹{selectedBill.amount}</p>
            <p>Due Date: {formatDate(selectedBill.due_date)}</p>
            <p>Status: {selectedBill.status}</p>
            <p>Months Unpaid: {calculateUnpaidMonths(selectedBill.due_date)}</p> {/* Display unpaid months in receipt */}
            <button className='reset-btn' onClick={closeReceipt}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MaintenanceBill;
