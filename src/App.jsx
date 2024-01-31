// SignUpForm.jsx
import React, { useState } from 'react';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Step 14: Make a POST request to the API
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      // Step 15: Parse the response
      const result = await response.json();
      console.log(result);

      // Check if the response has a token
      if (result.token) {
        // You can handle the token as needed, e.g., store it in state or localStorage
        console.log('Token:', result.token);
      } else {
        // Handle error or display a message if the response doesn't contain a token
        setError(result.message);
      }
    } catch (error) {
      // Step 11: Handle network request failure
      setError(error.message);
    }
  };

  return (
    <>
      <h2>Sign Up</h2>

      {/* Step 12: Conditionally render the error message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SignUpForm;