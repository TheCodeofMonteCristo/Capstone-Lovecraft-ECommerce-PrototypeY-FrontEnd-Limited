// apiHelpers.js - Helper function to handle API responses and errors
const handleApiResponse = async (response) => {
    // Check if the response is not OK (status code outside 2xx range)
    if (!response.ok) {
      // Parse and throw the error message from the response
      const errorData = await response.json();
      throw new Error(errorData.message || 'Something went wrong');
    }
  
    // If successful, return the JSON data from the response
    return response.json();
  };
  
  const handleApiError = (error) => {
    // Handle API errors by logging and showing a generic error message
    console.error('API Error:', error);
    return 'An error occurred. Please try again later.';
  };
  
  export { handleApiResponse, handleApiError };
  