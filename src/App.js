import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import AuthPage from './components/AuthPage';
import Navbar from './components/Navbar';

function App() {
    const [user, setUser] = useState(null);

    return (
        <Router>
            <AppContent user={user} setUser={setUser} />
        </Router>
    );
}

function AppContent({ user, setUser }) {
    const navigate = useNavigate(); // Use useNavigate inside Router context

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
            setUser(formData);
            console.log(userData);
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
            navigate('/home'); // Redirect to home page after signup
        } else {
            alert('Signup failed');
        }
    };

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('user'); // Clear user data from localStorage
        navigate('/auth'); // Redirect to auth page after logout
    };

    return (
        <>
            {user && <Navbar onLogout={handleLogout} />}
            <Routes>
                <Route path="/home" element={user ? <HomePage user={user} onLogout={handleLogout} /> : <Navigate to="/auth" />} />
                <Route path="/auth" element={<AuthPage onLogin={handleLogin} onSignup={handleSignup} setUser={setUser} />} />
                <Route path="/" element={<Navigate to={user ? "/home" : "/auth"} />} />
            </Routes>
        </>
    );
}

export default App;
