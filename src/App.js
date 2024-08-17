import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import HomePage from './components/HomePage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignupForm />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default App;
