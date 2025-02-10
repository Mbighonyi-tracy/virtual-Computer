import React, { useState } from 'react';
import './Login.css';

const Login = ({ onComplete, profilePicture }) => {
  // const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onComplete();
  };

  return (
    <div className="login-container">
      <h2 className="login-title gradient-text">Login</h2>
      {profilePicture && (
        <div>
          <img src={profilePicture} alt="Profile" className="login-profile-picture" />
        </div>
      )}
      <form onSubmit={handleSubmit} className="login-form">
        <div className="login-input-group">
          {/* <label htmlFor="email" className="login-label">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
            required
          /> */}
        </div>
        <div className="login-input-group">
          <label htmlFor="password" className="login-label">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

