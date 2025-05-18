import React, { useState } from 'react';
import './Hamburger.css';

function HamburgerMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

return (
    <>
        <button className="hamburger" onClick={toggleMenu}>
        ☰
        </button>

        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleMenu}>×</button>
            <nav className="mobile-nav">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </nav>

        <section className="mobile-sidebar">
            <a href="/dashboard">link 1</a>
            <a href="/settings">link 2</a>
        </section>
        </div>
    </>
    );
}

export default HamburgerMenu;