import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ message }) => {
  return (
    <div className="loading-container">
      <div>{message}</div>
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingScreen;

