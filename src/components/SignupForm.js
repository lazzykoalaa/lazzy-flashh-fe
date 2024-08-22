import React, { useState } from 'react';
import { auth, googleProvider, facebookProvider } from './firebase.js';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from "firebase/auth";
import '../styles/SignupForm.css';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate(); // Define navigate using useNavigate hook

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleEmailSignup = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('https://lazzy-flashh-backend.vercel.app/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                alert('Signup successful! Welcome aboard.');
            } else {
                const errorData = await response.json();
                alert(`Signup failed: ${errorData.detail || 'Unknown error occurred'}`);
            }
        } catch (error) {
            console.error('Signup error:', error);
            alert('An error occurred during signup. Please try again later.');
        }
    };
    

    // const handleOAuthSignup = async (provider) => {
    //     try {
    //         // Use signInWithPopup directly with the provided provider
    //         const result = await signInWithPopup(auth, provider);
    //         const user = result.user;
    
    //         // Extract user data from the OAuth result
    //         const oauthData = {
    //             firstName: user.displayName ? user.displayName.split(' ')[0] : '',
    //             lastName: user.displayName ? user.displayName.split(' ').slice(1).join(' ') : '',
    //             username: user.email ? user.email.split('@')[0] : '',
    //             email: user.email,
    //         };
    
    //         // Store the user data in localStorage
    //         localStorage.setItem('user', JSON.stringify(oauthData));
    
    //         // Send the data to your backend API
    //         const response = await fetch('https://lazzy-flashh-backend.vercel.app/oauth_signup', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify(oauthData),
    //         });
    
    //         // Handle the response
    //         if (response.ok) {
    //             // If signup was successful, redirect to the home page
    //             navigate('/home');
    //         } else {
    //             alert('OAuth signup failed');
    //         }
    //     } catch (error) {
    //         console.error('OAuth signup error:', error);
    //         alert('OAuth signup failed');
    //     }
    // };

    // const HandleGoogleSignup = async () => {
    //     signInWithPopup(auth, googleProvider).then((data) => {
    //         setFormData(data.user.email)
    //         localStorage.setItem("email", data.user.email)
    //     })
    // };

    return (
        <div className="signup-container">
            <form onSubmit={handleEmailSignup} className="signup-form">
                {/* <h2>Sign Up</h2> */}
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.last_name}
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
                <button type="submit" className="auth-btn">Sign Up</button>
            </form>

            {/* <div className="oauth-signup">
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
            </div> */}
        </div>
    );
};

export default SignupForm;