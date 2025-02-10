import React from 'react';
import './AuthOptions.css';

const AuthOptions = ({ onRegister, onLogin }) => {
  return (
    <div className="auth-container">
      <h2 className="auth-title gradient-text">Welcome</h2>
      <p className="auth-text">Don't have an account?</p>
      <button 
        onClick={onRegister}
        className="auth-button register-button"
      >
        Register
      </button>
      <p className="auth-text">Already have an account?</p>
      <button 
        onClick={onLogin}
        className="auth-button login-button"
      >
        Login
      </button>
    </div>
  );
};

export default AuthOptions;

