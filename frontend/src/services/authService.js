// authService.js - Handles API calls related to authentication (login, signup, etc.)
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Base URL for authentication API

// Function to register a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData); // POST request to register a user
    return response.data; // Return the server's response
  } catch (error) {
    console.error('Error during registration:', error);
    throw error; // Throw error to be handled by the calling component
  }
};

// Function to log in an existing user
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials); // POST request to login
    return response.data; // Return the server's response
  } catch (error) {
    console.error('Error during login:', error);
    throw error; // Throw error to be handled by the calling component
  }
};

// Function to check if the user is authenticated (by checking the token)
export const checkAuthStatus = async () => {
  try {
    const response = await axios.get(`${API_URL}/status`, { withCredentials: true }); // GET request to check auth status
    return response.data;
  } catch (error) {
    console.error('Error checking auth status:', error);
    throw error;
  }
};
