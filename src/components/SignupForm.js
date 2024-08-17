import React, { useState } from 'react';
import { auth, googleProvider, facebookProvider } from './firebase.js';
import './SignupForm.css';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleEmailSignup = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Signup successful');
        } else {
            alert('Signup failed');
        }
    };

    const handleOAuthSignup = async (provider) => {
        try {
            const result = await auth.signInWithPopup(provider);
            const { user } = result;
            const oauthData = {
                firstName: user.displayName.split(' ')[0],
                lastName: user.displayName.split(' ').slice(1).join(' '),
                username: user.email.split('@')[0],
                email: user.email,
            };
            const response = await fetch('/api/oauth_signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(oauthData),
            });

            if (response.ok) {
                alert('OAuth signup successful');
            } else {
                alert('OAuth signup failed');
            }
        } catch (error) {
            console.error('OAuth signup error:', error);
            alert('OAuth signup failed');
        }
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleEmailSignup} className="signup-form">
                <h2>Sign Up</h2>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="signup-btn">Sign Up</button>
            </form>

            <div className="oauth-signup">
                <h3>Or sign up with</h3>
                <button
                    onClick={() => handleOAuthSignup(googleProvider)}
                    className="oauth-btn google-btn"
                >
                    Google
                </button>
                <button
                    onClick={() => handleOAuthSignup(facebookProvider)}
                    className="oauth-btn facebook-btn"
                >
                    Facebook
                </button>
            </div>
        </div>
    );
};

export default SignupForm;
