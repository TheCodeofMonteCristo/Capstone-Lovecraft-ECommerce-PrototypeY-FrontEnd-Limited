// orderService.js - Handles API calls for order-related operations
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/orders'; // Base URL for orders API

// Function to create a new order
export const createOrder = async (orderData) => {
  try {
    const response = await axios.post(API_URL, orderData); // POST request to create a new order
    return response.data; // Return the created order data
  } catch (error) {
    console.error('Error creating order:', error);
    throw error; // Throw error to be handled by the calling component
  }
};

// Function to get the order history for a user
export const getOrderHistory = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/user/${userId}`); // GET request to fetch order history
    return response.data; // Return the list of orders for the user
  } catch (error) {
    console.error('Error fetching order history:', error);
    throw error;
  }
};

// Function to update an order status
export const updateOrderStatus = async (orderId, status) => {
  try {
    const response = await axios.put(`${API_URL}/${orderId}`, { status }); // PUT request to update order status
    return response.data; // Return the updated order data
  } catch (error) {
    console.error('Error updating order status:', error);
    throw error;
  }
};
