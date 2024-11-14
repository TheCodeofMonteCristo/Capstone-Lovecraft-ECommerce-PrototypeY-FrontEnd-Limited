// formatPrice.js - Helper function to format price values consistently
const formatPrice = (price) => {
    // Ensure the price is a valid number
    if (isNaN(price) || price < 0) {
      return '$0.00';  // Return default value if the price is invalid
    }
  
    // Format the price to 2 decimal places, prepend dollar sign
    return `$${price.toFixed(2)}`;
  };
  
  export default formatPrice;
  