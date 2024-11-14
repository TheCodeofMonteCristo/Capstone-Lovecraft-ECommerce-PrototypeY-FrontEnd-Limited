// adminService.js - Handles admin-related API calls
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/admin'; // Base URL for admin API

// Function to fetch all users
export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`); // GET request to fetch all users
    return response.data; // Return the list of users
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Function to fetch all cities (for admin purposes)
export const getAllCitiesAdmin = async () => {
  try {
    const response = await axios.get(`${API_URL}/cities`); // GET request to fetch all cities
    return response.data; // Return the list of cities
  } catch (error) {
    console.error('Error fetching cities:', error);
    throw error;
  }
};

// Function to delete a user by ID
export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`${API_URL}/users/${userId}`); // DELETE request to remove a user
    return response.data; // Return confirmation of deletion
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};
