// ReviewForm.js - Form for submitting or editing a review for a city
import React, { useState } from 'react';

// The ReviewForm component will accept cityId and a current review (for editing purposes)
const ReviewForm = ({ cityId, currentReview = "", onSubmit }) => {
  // State to hold the current input in the form
  const [reviewText, setReviewText] = useState(currentReview);
  const [rating, setRating] = useState(5); // Default rating is 5

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    onSubmit({ cityId, reviewText, rating }); // Call the parent onSubmit with the data
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h2>{currentReview ? "Edit Review" : "Submit a Review"}</h2>
      
      {/* Textarea for review */}
      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)} // Update state on input change
        placeholder="Write your review here"
        required
      />

      {/* Rating input (simplified to a number input) */}
      <div>
        <label>Rating: </label>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)} // Update rating
          min="1"
          max="5"
          required
        />
      </div>

      {/* Submit button */}
      <button type="submit">{currentReview ? "Update" : "Submit"} Review</button>
    </form>
  );
};

export default ReviewForm;
