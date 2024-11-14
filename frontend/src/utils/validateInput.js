// validateInput.js - Helper function for input validation in forms
const validateInput = (type, value) => {
    switch (type) {
      case 'email':
        // Regular expression to validate email format
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(value) ? '' : 'Invalid email format';
      
      case 'password':
        // Validate password: must be at least 6 characters long
        return value.length >= 6 ? '' : 'Password must be at least 6 characters';
      
      case 'required':
        // Ensure value is not empty
        return value.trim() !== '' ? '' : 'This field is required';
      
      default:
        return '';  // No validation for other cases
    }
  };
  
  export default validateInput;
  