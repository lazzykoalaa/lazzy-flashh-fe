import React from 'react';
import { FaRobot, FaFilePdf, FaEye, FaDownload, FaPaperPlane } from 'react-icons/fa';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const handleGetStarted = () => {
    // Navigate to the get started page or section
  };

  return (
    <div className="landing-container">
      <nav className="landing-nav">
        <div className="logo">Lazzy Flashh</div>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

      <header className="landing-header">
        <h1>Create Flashcards Effortlessly</h1>
        <p>Upload your PDF files and let AI do the magic.</p>
        <button onClick={handleGetStarted}>Get Started</button>
      </header>

      <section id="features" className="features">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <FaRobot aria-label="AI-powered flashcard generation" />
            <p>AI-powered flashcard generation: Effortlessly create flashcards with the help of AI.</p>
          </div>
          <div className="feature-item">
            <FaFilePdf aria-label="Supports multiple formats" />
            <p>Supports multiple formats: Compatible with PDF, Word, and more.</p>
          </div>
          <div className="feature-item">
            <FaEye aria-label="Real-time content preview" />
            <p>Real-time content preview: See your flashcards as they are generated.</p>
          </div>
          <div className="feature-item">
            <FaDownload aria-label="Easy export options" />
            <p>Easy export options: Download your flashcards in various formats.</p>
          </div>
          <div className="feature-item">
            <FaPaperPlane aria-label="Seamless PDF uploads" />
            <p>Seamless PDF uploads: Upload your PDFs with just a few clicks.</p>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <h2>Pricing</h2>
        <div className="pricing-table">
          <div className="pricing-plan">
            <h3>Free Plan</h3>
            <ul>
              <li>Basic AI flashcard generation</li>
              <li>Single format support</li>
              <li>Limited real-time preview</li>
              <li>Basic export options</li>
              <li>PDF uploads only</li>
            </ul>
            <div className="price">₹0/month</div>
          </div>
          <div className="pricing-plan premium">
            <h3>Premium Plan</h3>
            <ul>
              <li>Advanced AI flashcard generation</li>
              <li>Multi-format support</li>
              <li>Full real-time preview</li>
              <li>Advanced export options</li>
              <li>Seamless PDF uploads</li>
              <li>Personalized flashcards</li>
            </ul>
            <div className="price">₹799/month</div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-us">
        <h2>Contact Us</h2>
        <p>Have questions? Reach out to the Lazzy Koalaa team!</p>
        <button onClick={handleGetStarted}>Get Started</button>
      </section>
    </div>
  );
};

export default LandingPage;
