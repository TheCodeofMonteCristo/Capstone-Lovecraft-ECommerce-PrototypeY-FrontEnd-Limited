// Home.js - The homepage displaying featured cities
import React, { useEffect, useState } from 'react';
import CityCard from '../components/CityCard'; // Importing CityCard component
import { getFeaturedCities } from '../services/cityService'; // Service to fetch featured cities

const Home = () => {
  const [cities, setCities] = useState([]); // State to store cities data
  const [loading, setLoading] = useState(true); // State for loading status

  // Fetch featured cities on component mount
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const fetchedCities = await getFeaturedCities();
        setCities(fetchedCities); // Update state with the fetched cities
      } catch (error) {
        console.error('Error fetching cities:', error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchCities();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div className="home-page">
      {loading ? (
        <div>Loading...</div> // Display a loading message if data is still being fetched
      ) : (
        <div className="city-cards">
          {cities.map((city) => (
            <CityCard key={city.id} city={city} /> // Map through cities to render CityCard components
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
