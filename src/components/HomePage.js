import React, { useState } from 'react';
import Flashcards from './Flashcards';
import '../styles/HomePage.css';

const HomePage = ({ user, onLogout, onFileUpload, flashcards }) => {
    const [uploading, setUploading] = useState(false);

    if (!user) {
        return <div>Loading...</div>;
    }

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            setUploading(true);
            try {
                await onFileUpload(file);
            } catch (error) {
                console.error("File upload failed", error);
            } finally {
                setUploading(false);
            }
        }
    };

    const handleClickUpload = () => {
        document.getElementById('file-input').click();
    };

    return (
        <div className="home-container">
            <h1>Welcome, {user.firstName} {user.lastName}!</h1>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <button onClick={onLogout} className="logout-btn">Log Out</button>
            
            <div className="upload-section">
                <input 
                    type="file" 
                    accept=".pdf" 
                    id="file-input" 
                    onChange={handleFileChange} 
                />
                <button 
                    className="upload-btn" 
                    onClick={handleClickUpload} 
                    disabled={uploading}
                >
                    {uploading ? 'Uploading...' : 'Upload PDF'}
                </button>
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
