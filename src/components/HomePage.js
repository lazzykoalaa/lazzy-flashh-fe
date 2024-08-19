import React from 'react';
import Flashcards from './Flashcards';
import '../styles/HomePage.css';

const HomePage = ({ user, onLogout, onFileUpload, flashcards }) => {
    if (!user) {
        return <div>Loading...</div>;
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            onFileUpload(file);
        }
    };

    return (
        <div className="home-container">
            <h1>Welcome, {user.firstName} {user.lastName}!</h1>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <button onClick={onLogout} className="logout-btn">Log Out</button>
            
            <div className="upload-section">
                <input type="file" accept=".pdf" onChange={handleFileChange} />
                <p>Upload a PDF to generate flashcards</p>
            </div>

            {flashcards.length > 0 && (
                <div className="flashcards-section">
                    <Flashcards cards={flashcards} />
                </div>
            )}
        </div>
    );
};

export default HomePage;
