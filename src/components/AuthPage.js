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
                    <div>
                        <LoginForm onLogin={onLogin} />
                        <GoogleAuthButton setUser={setUser} isSignup={false}/> 
                    </div>
                ) : (
                    <div>
                        <SignupForm onSignup={onSignup} />
                        <GoogleAuthButton setUser={setUser} isSignup={true}/> 
                    </div>
                )}
                <button onClick={toggleAuthMode} className="auth-btn" style={{width: '80%', textAlign:'center', marginLeft:'1vw'}}>
                    {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
                </button>
            </div>
        </div>
    );
};

export default AuthPage;
