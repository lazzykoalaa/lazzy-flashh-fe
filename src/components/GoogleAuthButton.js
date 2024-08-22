import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from './firebase';
import { signInWithPopup } from 'firebase/auth';

const GoogleAuthButton = ({ setUser }) => {
    const navigate = useNavigate();

    const handleGoogleSignup = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const { user } = result;

            const oauthData = {
                firstName: user.displayName.split(' ')[0],
                lastName: user.displayName.split(' ').slice(1).join(' '),
                username: user.email.split('@')[0],
                email: user.email,
            };

            const response = await fetch('https://lazzy-flashh-backend.vercel.app/oauth_signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(oauthData),
            });

            if (response.ok) {
                localStorage.setItem('user', JSON.stringify(oauthData));
                setUser(oauthData); // Update user state in App.js
                navigate('/home');
            } else {
                alert('OAuth signup failed');
            }
        } catch (error) {
            console.error('OAuth signup error:', error);
            alert('OAuth signup failed');
        }
    };

    return (
        <button onClick={handleGoogleSignup} className="oauth-btn google-btn">
            Sign in with Google
        </button>
    );
};

export default GoogleAuthButton;
