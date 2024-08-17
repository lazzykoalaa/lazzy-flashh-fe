import React from 'react';
import { useEffect } from 'react';
import '../styles/HomePage.css';

const HomePage = ({ user, onLogout }) => {
    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="home-container">
            <h1>Welcome, {user.firstName} {user.lastName}!</h1>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <button onClick={onLogout} className="logout-btn">Log Out</button>
        </div>
    );
};

export default HomePage;
