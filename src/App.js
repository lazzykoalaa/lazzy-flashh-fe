import React, { useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import AuthPage from './components/AuthPage';
import Navbar from './components/Navbar';

function App() {
    const [user, setUser] = useState(null);
    const [flashcards, setFlashcards] = useState([]);
    const navigate = useNavigate(); // useNavigate is now safe to use

    const handleLogin = async (formData) => {
        const { email, password } = formData;
        
        const response = await fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const userData = await response.json();
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData)); // Store user data in localStorage
            navigate('/home'); // Redirect to home page
        } else {
            alert('Login failed');
        }
    };

    const handleSignup = async (formData) => {
        const { firstName, lastName, username, email, password } = formData;

        const response = await fetch('http://localhost:8000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName, lastName, username, email, password }),
        });

        if (response.ok) {
            const newUser = await response.json();
            setUser(newUser);
            localStorage.setItem('user', JSON.stringify(newUser));
            navigate('/home'); // Use navigate directly
        } else {
            alert('Signup failed');
        }
    };

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('user');
        navigate('/auth'); // Use navigate directly
    };

    const handleFileUpload = async (file) => {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('http://localhost:8000/summarize', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const result = await response.json();
            setFlashcards(result); // Set the flashcards data
        } else {
            alert('Failed to summarize the document');
        }
    };

    return (
        <>
            {user && <Navbar onLogout={handleLogout} />}
            <Routes>
                <Route
                    path="/home"
                    element={
                        user ? (
                            <HomePage
                                user={user}
                                onLogout={handleLogout}
                                onFileUpload={handleFileUpload}
                                flashcards={flashcards}
                            />
                        ) : (
                            <Navigate to="/auth" />
                        )
                    }
                />
                <Route
                    path="/auth"
                    element={
                        <AuthPage
                            onLogin={handleLogin}
                            onSignup={handleSignup}
                            setUser={setUser}
                        />
                    }
                />
                <Route path="/" element={<Navigate to={user ? "/home" : "/auth"} />} />
                <Route path="/landing" element={<LandingPage/>}>

                </Route>
            </Routes>
            
        </>
    );
}

export default App;
