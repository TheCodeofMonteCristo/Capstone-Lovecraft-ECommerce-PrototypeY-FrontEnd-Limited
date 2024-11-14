// App.js - Main app component that manages routing and layout of the app
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router for routing
import Navbar from './components/Navbar';  // Import the Navbar component
import Footer from './components/Footer';  // Import the Footer component
import Home from './pages/Home';  // Homepage displaying featured cities
import CityList from './pages/CityList';  // List of cities with search and filter options
import CityDetail from './pages/CityDetail';  // Detailed page for a specific city
import Cart from './pages/Cart';  // Shopping cart page
import Checkout from './pages/Checkout';  // Checkout page
import Profile from './pages/Profile';  // User profile management
import AdminDashboard from './pages/AdminDashboard';  // Admin page for managing cities and users

// Main App component responsible for routing and layout
function App() {
  return (
    <Router>
      <div className="app">
        {/* Navbar displayed at the top of the app */}
        <Navbar />
        
        <main>
          {/* Routes define which component renders for different URL paths */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cities" element={<CityList />} />
            <Route path="/cities/:id" element={<CityDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>

        {/* Footer displayed at the bottom of the app */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
