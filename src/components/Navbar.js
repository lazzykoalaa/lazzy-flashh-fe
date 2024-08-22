import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ onLogout }) => {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="logo">
                <img src='/assets/img/logo/main-logo.png' alt="Logo" />
            </div>
            <ul className="nav-links">
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
            <div className="auth-buttons">
                <button className="btn-signin" onClick={() => navigate('/login')}>Sign In</button>
                <button className="btn-signup" onClick={() => navigate('/signup')}>Sign Up</button>
            </div>
        </nav>
    );
};

export default Navbar;