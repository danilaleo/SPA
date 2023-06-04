// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="burger-menu">
        {/* Add burger menu icon here */}
      </div>
      <div className="user-info">
        <Link to="/about">About Me</Link>
        {/* Add user avatar, name, and mailing address here */}
      </div>
    </header>
  );
}

export default Header;
