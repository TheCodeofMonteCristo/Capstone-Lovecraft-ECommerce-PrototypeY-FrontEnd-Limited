// index.js - Main entry point of the React application
import React from 'react';
import ReactDOM from 'react-dom/client';  // Import ReactDOM for rendering the app
import './index.css';  // Import global CSS styles
import App from './App';  // Import the main App component

// Rendering the App component into the root div of the HTML page
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* App component wrapped in StrictMode for additional checks during development */}
    <App />
  </React.StrictMode>
);
