import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import AuthPage from './components/AuthPage';
import Navbar from './components/Navbar';
import Flashcards from './components/Flashcards';

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Check if user data is stored in localStorage (for persistence across refreshes)
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        const mockUser = { firstName: 'John', lastName: 'Doe', username: 'johndoe', email };
        setUser(mockUser);
        localStorage.setItem('user', JSON.stringify(mockUser)); // Store user data in localStorage
    };

    const handleSignup = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const username = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('password');
        const newUser = { firstName, lastName, username, email };
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser)); // Store user data in localStorage
    };

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('user'); // Remove user data from localStorage
    };

    return (
        <Router>
            {user && <Navbar onLogout={handleLogout} />}
            <Routes>
                <Route path="/home" element={user ? <HomePage user={user} onLogout={handleLogout} /> : <Navigate to="/auth" />} />
                <Route path="/auth" element={<AuthPage onLogin={handleLogin} onSignup={handleSignup} setUser={setUser} />} />
                <Route path="/" element={<Navigate to={user ? "/home" : "/auth"} />} />
                <Route path="/flashcards" element={<Flashcards/>} />
            </Routes>
        </Router>
    );
}

export default App;
