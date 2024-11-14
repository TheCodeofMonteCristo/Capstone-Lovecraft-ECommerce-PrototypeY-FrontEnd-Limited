// CityList.js - Page displaying cities with search and filter functionality
import React, { useState, useEffect } from 'react';
import CityCard from '../components/CityCard';
import { getCities } from '../services/cityService'; // Service to fetch cities

const CityList = () => {
  const [cities, setCities] = useState([]); // State for cities
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const [filteredCities, setFilteredCities] = useState([]); // State for filtered cities
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch cities data when the component mounts
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const fetchedCities = await getCities();
        setCities(fetchedCities); // Store all cities
        setFilteredCities(fetchedCities); // Initially, show all cities
      } catch (error) {
        console.error('Error fetching cities:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, []);

  // Filter cities based on search query
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query); // Update search query state
    const filtered = cities.filter((city) =>
      city.name.toLowerCase().includes(query.toLowerCase()) // Case-insensitive search
    );
    setFilteredCities(filtered); // Update the list of filtered cities
  };

  return (
    <div className="city-list-page">
      <input
        type="text"
        placeholder="Search cities..."
        value={searchQuery}
        onChange={handleSearchChange} // Trigger filtering when the search query changes
      />
      {loading ? (
        <div>Loading...</div> // Show loading message while data is being fetched
      ) : (
        <div className="city-cards">
          {filteredCities.length > 0 ? (
            filteredCities.map((city) => <CityCard key={city.id} city={city} />) // Display filtered cities
          ) : (
            <p>No cities found.</p> // Message when no cities match the search
          )}
        </div>
      )}
    </div>
  );
};

export default CityList;
