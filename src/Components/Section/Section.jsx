'use client'
import "./Section.css"
import React, { useState } from 'react';
import LoadingScreen from '../LoadingScreen/loadingScreen';
import AuthOptions from '../AuthOption/AuthOption';
import RegisterPage from '../Register/Register';
import Logo from '../Logo/Logo';
import HomePage from '../../Pages/HomePage/HomePage';
import Login from '../Login/Login';


export default function Section() {
  const [currentScreen, setCurrentScreen] = useState('logo');
  const [loadingMessage, setLoadingMessage] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const handleLogoClick = () => {
    setCurrentScreen('loading');
    setLoadingMessage('Loading');
    
    setTimeout(() => {
      setLoadingMessage('Please wait');
      
      setTimeout(() => {
        setCurrentScreen('auth');
      }, 1000);
    }, 2000);
  };

  const handleRegister = () => {
    setCurrentScreen('register');
  };

  const handleLogin = () => {
    setCurrentScreen('login');
  };

  const handleRegistrationComplete = (picture) => {
    setProfilePicture(picture);
    setCurrentScreen('login');
  };

  const handleLoginComplete = () => {
    setCurrentScreen('home');
  };

  return (
    // <div className="min-h-screen bg-black text-white flex items-center justify-center">
    <div className="parts">
      {currentScreen === 'logo' && <Logo onClick={handleLogoClick} />}
      {currentScreen === 'loading' && <LoadingScreen message={loadingMessage} />}
      {currentScreen === 'auth' && <AuthOptions onRegister={handleRegister} onLogin={handleLogin} />}
      {currentScreen === 'register' && <RegisterPage onComplete={handleRegistrationComplete} />}
      {currentScreen === 'login' && <Login onComplete={handleLoginComplete} profilePicture={profilePicture} />}
      {currentScreen === 'home' && <HomePage profilePicture={profilePicture} />}
    </div>
  );
}

