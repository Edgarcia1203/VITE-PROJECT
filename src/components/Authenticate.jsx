// Authenticate.jsx
import React, { useState } from 'react';

const Authenticate = ({ token }) => {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [userData, setUserData] = useState(null); // Add state to store user data

  const handleClick = async () => {
    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();

      if (result.success) {
        setUserData(result.data); // Set user data on successful authentication
        setSuccessMessage(result.message);
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      {/* ... (previous code) */}

      {/* Task 1: Display username */}
      {userData && <p>Welcome, {userData.username}!</p>}

      {/* ... (remaining code) */}
    </>
  );
};

export default Authenticate;