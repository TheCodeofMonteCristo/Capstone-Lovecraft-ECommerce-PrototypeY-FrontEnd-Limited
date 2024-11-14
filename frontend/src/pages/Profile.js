// Profile.js - Page for managing user profile information
import React, { useState } from 'react';

const Profile = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated!');
  };

  return (
    <div className="profile-page">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleInputChange}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
