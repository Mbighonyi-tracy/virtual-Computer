import React from 'react';
import './Logo.css';

const Logo = ({ onClick }) => {
  return (
    <div className="logo" onClick={onClick}>
      <img src="./avater.png" alt="logo" className='logo-image' />
      {/* <span className="logo-text"> your logo
      </span> */}
    </div>
  );
};

export default Logo;

