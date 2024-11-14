// LoadingSpinner.js - A loading spinner to indicate waiting for data
import React from 'react';

// Simple functional component to show a spinner
const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
