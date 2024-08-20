import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ onLogout }) => {
    return (
        <nav className="navbar">
            <h1>Flashcard Generator</h1>
            <button onClick={onLogout} className="logout-btn">Logout</button>
        </nav>
    );
};

export default Navbar;
