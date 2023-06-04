// Menu.js
import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <aside className="menu">
      <nav>
        <ul>
          <li>
            <Link to="/">List of posts</Link>
          </li>
          <li>
            <Link to="/about">About me</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Menu;
