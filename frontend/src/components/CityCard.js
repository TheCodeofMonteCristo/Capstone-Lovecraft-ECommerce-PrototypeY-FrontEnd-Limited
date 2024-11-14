// CityCard.js - A card component to display city information
import React from 'react';
import { Link } from 'react-router-dom'; // For linking to city details page

// The CityCard component accepts props to display the city information
const CityCard = ({ city }) => {
  return (
    <div className="city-card">
      {/* Image of the city */}
      <img src={city.imageUrl} alt={city.name} className="city-card-image" />

      {/* City Name */}
      <h3 className="city-card-title">{city.name}</h3>

      {/* City price */}
      <p className="city-card-price">${city.price}</p>

      {/* Link to the city detail page */}
      <Link to={`/city/${city.id}`} className="city-card-button">
        View Details
      </Link>
    </div>
  );
};

export default CityCard;
