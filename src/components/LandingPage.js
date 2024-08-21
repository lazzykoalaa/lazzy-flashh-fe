import React from 'react';
import '../styles/LandingPage.css'; // Import the CSS file

const LandingPage = () => {
  const handleGetStarted = () => {
    // Navigate to the get started page or section
  };

  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Lazzy Flashh</h1>
        <p>Effortlessly create flashcards using AI by uploading your PDF files.</p>
      </header>

      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>AI-powered flashcard generation</li>
          <li>Supports multiple formats</li>
          <li>Real-time content preview</li>
          <li>Easy export options</li>
          <li>Seamless PDF uploads</li>
        </ul>
      </section>

      <section className="pricing">
        <h2>Pricing</h2>
        <div className="plan">
          <h3>Free Plan</h3>
          <p>Access basic features</p>
          <div className="price">₹0/month</div>
        </div>
        <div className="plan">
          <h3>Premium Plan</h3>
          <p>Unlock all features</p>
          <div className="price">₹799/month</div>
        </div>
      </section>

      <section className="contact-us">
        <h2>Contact Us</h2>
        <p>Have questions? Reach out to the Lazzy Koalaa team!</p>
        <button onClick={handleGetStarted}>Get Started</button>
      </section>
    </div>
  );
};

export default LandingPage;
