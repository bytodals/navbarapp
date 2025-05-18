import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [isOpen] = useState(false);

    return (
      <nav className="navbar">
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#!" role="button">Home</a></li> 
          <li><a href="#!" role="button">About</a></li> 
          <li><a href="#!" role="button">Contact</a></li> 
        </ul>
    </nav>
  );
}

export default Navbar;