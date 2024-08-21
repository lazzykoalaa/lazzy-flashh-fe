import React from 'react';
import { FaRobot, FaFilePdf, FaEye, FaDownload, FaPaperPlane } from 'react-icons/fa';
import '../styles/LandingPage.css'; // Import the CSS file

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
        <h1>Create Flashcards Effortlessly with AI</h1>
        <p>Transform your PDF files into personalized flashcards within seconds.</p>
        <button onClick={handleGetStarted}>Get Started</button>
      </header>

      <section id="features" className="features">
        <h2>Core Features</h2>
        <ul>
          <li>
            <FaRobot aria-label="AI-powered flashcard generation" />
            <div className="feature-description">
              <h3>AI-powered flashcard generation</h3>
              <p>Automatically generate flashcards from your PDF files using advanced AI algorithms.</p>
            </div>
          </li>
          <li>
            <FaFilePdf aria-label="Supports multiple formats" />
            <div className="feature-description">
              <h3>Supports multiple formats</h3>
              <p>Upload PDF files and more, with support for various document formats.</p>
            </div>
          </li>
          <li>
            <FaEye aria-label="Real-time content preview" />
            <div className="feature-description">
              <h3>Real-time content preview</h3>
              <p>Preview the generated flashcards before saving them to ensure quality content.</p>
            </div>
          </li>
          <li>
            <FaDownload aria-label="Easy export options" />
            <div className="feature-description">
              <h3>Easy export options</h3>
              <p>Export your flashcards in multiple formats for use across various platforms.</p>
            </div>
          </li>
          <li>
            <FaPaperPlane aria-label="Seamless PDF uploads" />
            <div className="feature-description">
              <h3>Seamless PDF uploads</h3>
              <p>Quickly upload your PDF files and let our system handle the rest.</p>
            </div>
          </li>
        </ul>
      </section>

      <section id="pricing" className="pricing">
        <h2>Pricing Plans</h2>
        <table className="pricing-table">
          <thead>
            <tr>
              <th>Features</th>
              <th>Free Plan</th>
              <th>Premium Plan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AI-powered flashcard generation</td>
              <td>Limited</td>
              <td>Unlimited</td>
            </tr>
            <tr>
              <td>Personalized flashcards</td>
              <td>Not available</td>
              <td>Available</td>
            </tr>
            <tr>
              <td>Real-time content preview</td>
              <td>Basic</td>
              <td>Advanced</td>
            </tr>
            <tr>
              <td>Export options</td>
              <td>Limited formats</td>
              <td>All formats</td>
            </tr>
            <tr>
              <td>PDF upload size</td>
              <td>Up to 10MB</td>
              <td>Up to 100MB</td>
            </tr>
          </tbody>
        </table>
        <div className="plan">
          <h3>Free Plan</h3>
          <p>Access basic features</p>
          <div className="price">₹0/month</div>
        </div>
        <div className="plan premium">
          <h3>Premium Plan</h3>
          <p>Unlock all features</p>
          <div className="price">₹799/month</div>
        </div>
      </section>

      <section id="contact" className="contact-us">
        <h2>Contact Us</h2>
        <p>Have questions? Reach out to the Lazzy Koalaa team for support.</p>
        <button onClick={handleGetStarted}>Get Started</button>
      </section>
    </div>
  );
};

export default LandingPage;
