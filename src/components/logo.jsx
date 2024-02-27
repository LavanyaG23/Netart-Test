import React from 'react';
import {logoImage} from '../assets'; // Import your logo image

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logoImage} alt="Logo" className="logo-image" />
    </div>
  );
}

export default Logo;
