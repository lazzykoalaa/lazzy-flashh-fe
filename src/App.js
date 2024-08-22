import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import AuthPage from './components/AuthPage';
import Navbar from './components/Navbar';
import validateToken from './components/TokenVal';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';

function App() {
    const [user, setUser] = useState(false);
    const [flashcards, setFlashcards] = useState([]);
    const navigate = useNavigate();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        console.log(token);
        if (token && validateToken()) {
            console.log('valid token');
            setUser(true);
        }
        setIsLoaded(true); // Force re-render after checking token
    }, []);

    const handleLogin = async (formData) => {
        const { email, password } = formData;

        const response = await fetch('https://lazzy-flashh-backend.vercel.app/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const { access_token, user } = await response.json();
            localStorage.setItem('access_token', access_token);
            localStorage.setItem('user', JSON.stringify(user));
            console.log('login successful and token set', access_token);
            setUser(true);
            navigate('/home');
        } else {
            alert('Login failed');
        }
    };

    const handleSignup = async (formData) => {
        const { firstName, lastName, username, email, password } = formData;

        const response = await fetch('https://lazzy-flashh-backend.vercel.app/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName, lastName, username, email, password }),
        });

        if (response.ok) {
            const { access_token } = await response.json();
            localStorage.setItem('access_token', access_token);
            setUser(true);
            navigate('/home');
        } else {
            alert('Signup failed');
        }
    };

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('access_token');
        navigate('/auth');
    };

    const handleFileUpload = async (file) => {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('https://lazzy-flashh-backend.vercel.app/summarize', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const result = await response.json();
            setFlashcards(result);
        } else {
            alert('Failed to summarize the document');
        }
    };

    return (
        <>
            {user && <Navbar onLogout={handleLogout} />}
            {isLoaded ? (
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
                    <Route path="/" element={<Navigate to={user ? "/home" : "/landing"} />} />
                    <Route path="/landing" element={<LandingPage />} />
                    <Route path="/signup" element={<AuthPage onSignup={handleSignup} Login={false}/>} />
                    <Route path="/login" element={<AuthPage onLogin={handleLogin} Login={true}/>} />
                </Routes>
            ) : (
                <div>Loading...</div> // Optional: Add a loading indicator until isLoaded is true
            )}
        </>
    );
}

export default App;