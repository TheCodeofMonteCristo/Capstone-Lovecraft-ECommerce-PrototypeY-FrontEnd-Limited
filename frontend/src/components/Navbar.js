// Navbar.js - The main navigation bar for the site
import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link for routing

// Functional component for the Navbar
const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo or Brand name (can link to homepage) */}
      <div className="navbar-brand">
        <Link to="/">Lovecraftian Cities</Link>
      </div>

      {/* Navigation links */}
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link> {/* Admin section */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
