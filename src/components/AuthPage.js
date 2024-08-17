import React, { useState } from 'react';
import GoogleAuthButton from './GoogleAuthButton';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import '../styles/AuthPage.css';

const AuthPage = ({ onLogin, onSignup, setUser }) => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleAuthMode = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
                {isLogin ? (
                    <LoginForm onLogin={onLogin} />
                ) : (
                    <SignupForm onSignup={onSignup} />
                )}
                <GoogleAuthButton setUser={setUser} /> {/* Pass setUser to GoogleAuthButton */}
                <button onClick={toggleAuthMode} className="switch-btn">
                    {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
                </button>
            </div>
        </div>
    );
};

export default AuthPage;
