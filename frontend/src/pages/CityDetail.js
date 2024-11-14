// CityDetail.js - Page displaying details and reviews for a specific city
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // To get the city ID from the URL
import ReviewForm from '../components/ReviewForm';
import { getCityDetails } from '../services/cityService'; // Service to fetch city details

const CityDetail = () => {
  const { cityId } = useParams(); // Retrieve cityId from URL parameters
  const [city, setCity] = useState(null); // State for city details
  const [loading, setLoading] = useState(true); // Loading state
  const [reviews, setReviews] = useState([]); // State for city reviews

  // Fetch city details and reviews when the component mounts
  useEffect(() => {
    const fetchCityDetails = async () => {
      try {
        const cityData = await getCityDetails(cityId); // Fetch city details
        setCity(cityData.city);
        setReviews(cityData.reviews); // Set reviews for the city
      } catch (error) {
        console.error('Error fetching city details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCityDetails();
  }, [cityId]);

  // Handle review submission
  const handleReviewSubmit = (reviewData) => {
    // Add the new review to the reviews state
    setReviews((prevReviews) => [reviewData, ...prevReviews]);
  };

  return (
    <div className="city-detail-page">
      {loading ? (
        <div>Loading...</div> // Show loading message while city data is being fetched
      ) : (
        <>
          <h2>{city.name}</h2>
          <img src={city.imageUrl} alt={city.name} />
          <p>{city.description}</p>
          <h3>Reviews</h3>
          <div>
            {reviews.map((review) => (
              <div key={review.id}>
                <p>{review.content}</p>
                <p>Rating: {review.rating} stars</p>
              </div>
            ))}
          </div>
          <ReviewForm cityId={city.id} onSubmit={handleReviewSubmit} /> {/* Review submission form */}
        </>
      )}
    </div>
  );
};

export default CityDetail;
