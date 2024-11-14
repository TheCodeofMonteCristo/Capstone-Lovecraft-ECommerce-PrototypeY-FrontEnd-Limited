// reviewService.js - Handles API calls for review operations
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/reviews'; // Base URL for reviews API

// Function to submit a new review for a city
export const submitReview = async (reviewData) => {
  try {
    const response = await axios.post(API_URL, reviewData); // POST request to submit a review
    return response.data; // Return the submitted review data
  } catch (error) {
    console.error('Error submitting review:', error);
    throw error; // Throw error to be handled by the calling component
  }
};

// Function to update an existing review by its ID
export const updateReview = async (reviewId, updatedReview) => {
  try {
    const response = await axios.put(`${API_URL}/${reviewId}`, updatedReview); // PUT request to update a review
    return response.data; // Return the updated review data
  } catch (error) {
    console.error('Error updating review:', error);
    throw error;
  }
};

// Function to delete a review by its ID
export const deleteReview = async (reviewId) => {
  try {
    const response = await axios.delete(`${API_URL}/${reviewId}`); // DELETE request to remove a review
    return response.data; // Return confirmation of deletion
  } catch (error) {
    console.error('Error deleting review:', error);
    throw error;
  }
};
