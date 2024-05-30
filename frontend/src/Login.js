import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in...');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label><br />
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
        <label htmlFor="password">Password:</label><br />
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/register">Register here</a>.</p>
    </div>
  );
};

export default Login;
