// Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if user exists in the database
    const userExists = await checkUserExists(username);
    if (userExists) {
      alert('User already exists. Please login.');
      navigate('/login');
    } else {
      // Proceed with registration
      console.log('Registering...');
    }
  };

  const checkUserExists = async (username) => {
    // Simulated API call to check if user exists in the database
    // Replace this with your actual API call
    // For demonstration purposes, let's assume it always returns false
    return false;
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label><br />
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
        <label htmlFor="password">Password:</label><br />
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        <label htmlFor="confirm_password">Confirm Password:</label><br />
        <input type="password" id="confirm_password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /><br /><br />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <a href="/login">Login here</a>.</p>
    </div>
  );
};

export default Register;
