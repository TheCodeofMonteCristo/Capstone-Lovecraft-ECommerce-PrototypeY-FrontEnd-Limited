// AdminDashboard.js - Admin page for city and user management
import React, { useState, useEffect } from 'react';
import { getAllCities } from '../services/cityService'; // Service to fetch all cities

const AdminDashboard = () => {
  const [cities, setCities] = useState([]); // State for cities
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch cities when the component mounts
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const fetchedCities = await getAllCities();
        setCities(fetchedCities); // Set the cities data
      } catch (error) {
        console.error('Error fetching cities:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, []);

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      {loading ? (
        <div>Loading...</div> // Show loading message while data is being fetched
      ) : (
        <div>
          <h3>Cities</h3>
          <ul>
            {cities.map((city) => (
              <li key={city.id}>
                {city.name} - ${city.price}
                {/* Here you could add options for editing or deleting cities */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
