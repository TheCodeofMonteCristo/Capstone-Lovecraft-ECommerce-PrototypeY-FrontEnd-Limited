// Checkout.js - Page for finalizing purchases
import React, { useState } from 'react';

const Checkout = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  // Handle input changes for payment form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order submitted!'); // Handle order submission logic
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label>Card Number:</label>
        <input
          type="text"
          name="cardNumber"
          value={paymentDetails.cardNumber}
          onChange={handleInputChange}
          required
        />
        <label>Expiry Date:</label>
        <input
          type="text"
          name="expiryDate"
          value={paymentDetails.expiryDate}
          onChange={handleInputChange}
          required
        />
        <label>CVV:</label>
        <input
          type="text"
          name="cvv"
          value={paymentDetails.cvv}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default Checkout;
