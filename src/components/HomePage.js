import React, { useState } from 'react';
import Flashcards from './Flashcards';
import '../styles/HomePage.css';

const HomePage = ({ user, onLogout, onFileUpload, flashcards }) => {
    const [uploading, setUploading] = useState(false);
    const [savedFlashcards, setSavedFlashcards] = useState([]);
    
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

    const handleSaveCards = () => {
        if (flashcards.length > 0) {
            setSavedFlashcards(prev => [...prev, flashcards]);
        }
    };

    const groupFlashcards = (flashcardSets) => {
        const flatCards = flashcardSets.flat();
        const blocks = [];
        for (let i = 0; i < flatCards.length; i += 30) { // 3 columns * 10 cards per column
            blocks.push(flatCards.slice(i, i + 30));
        }
        return blocks;
    };

    const renderSavedFlashcards = () => {
        const flashcardBlocks = groupFlashcards(savedFlashcards);
        return (
            <table className="saved-cards-table">
                <tbody>
                    {flashcardBlocks.map((block, index) => {
                        const rows = [];
                        for (let i = 0; i < block.length; i += 10) {
                            rows.push(block.slice(i, i + 10));
                        }
                        return (
                            <tr key={index}>
                                {rows.map((row, rowIndex) => (
                                    <td key={`${index}-${rowIndex}`}>
                                        <Flashcards cards={row} />
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
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
                    style={{ display: 'none' }}
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
                    <button className="save-btn" onClick={handleSaveCards}>Save Cards</button>
                </div>
            )}

            {savedFlashcards.length > 0 && (
                <div className="saved-cards-section">
                    <h2>Saved Flashcards</h2>
                    {renderSavedFlashcards()}
                </div>
            )}
        </div>
    );
};

export default HomePage;
