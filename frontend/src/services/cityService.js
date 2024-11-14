// cityService.js - Handles API calls for city-related operations
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/cities'; // Base URL for city API

// Function to fetch a list of all cities
export const getCities = async () => {
  try {
    const response = await axios.get(API_URL); // GET request to fetch all cities
    return response.data; // Return the list of cities
  } catch (error) {
    console.error('Error fetching cities:', error);
    throw error; // Throw error to be handled by the calling component
  }
};

// Function to fetch details of a single city by its ID
export const getCityDetails = async (cityId) => {
  try {
    const response = await axios.get(`${API_URL}/${cityId}`); // GET request to fetch city details
    return response.data; // Return the city details
  } catch (error) {
    console.error('Error fetching city details:', error);
    throw error;
  }
};

// Function to add a new city
export const addCity = async (cityData) => {
  try {
    const response = await axios.post(API_URL, cityData); // POST request to add a city
    return response.data; // Return the newly added city
  } catch (error) {
    console.error('Error adding city:', error);
    throw error;
  }
};

// Function to delete a city by its ID
export const deleteCity = async (cityId) => {
  try {
    const response = await axios.delete(`${API_URL}/${cityId}`); // DELETE request to remove a city
    return response.data; // Return confirmation of deletion
  } catch (error) {
    console.error('Error deleting city:', error);
    throw error;
  }
};
