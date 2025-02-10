import React, { useState } from 'react';
import './Register.css';

const Register = ({ onComplete }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onComplete(profilePicture);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title gradient-text">Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="input-group">
          <label htmlFor="username" className="register-label">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="register-input"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email" className="register-label">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="register-input"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password" className="register-label">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="register-input"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="profilePicture" className="register-label">Profile Picture</label>
          <input
            type="file"
            id="profilePicture"
            onChange={handleFileChange}
            className="file-input"
            accept="image/*"
          />
        </div>
        {/* <input type="file" name='profilePicture' accept='image'/> */}
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

