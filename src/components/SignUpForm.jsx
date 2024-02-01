// SignUpForm.jsx
import React, { useState } from 'react';

const SignUpForm = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Form validation
      if (username.length < 8 || password.length < 8) {
        setError('Username and password must be at least 8 characters long.');
        return;
      }

      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();

      if (result.success) {
        setToken(result.token);
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
    </>
  );
};

export default SignUpForm;