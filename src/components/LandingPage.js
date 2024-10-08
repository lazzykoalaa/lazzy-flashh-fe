import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRobot, FaFilePdf, FaEye, FaDownload, FaPaperPlane } from 'react-icons/fa';
import Navbar from './Navbar';

import '../styles/LandingPage.css';
import '../styles/HomePage.css';
import '../styles/SignupForm.css';
import "../styles/login.css";



const LandingPage = () => {
  const navigate = useNavigate(); 
  const handleGetStarted = () => {
    // Navigate to the get started page or section
    window.location.href = '/auth';
  };

  return (
    <div className="landing-container">
      <Navbar />
      <header className="landing-header">
      <div className="mainHeading">
        <h1>
        Lazzy Flashh
        </h1>
        </div>
        <h1 className="subHeader">Create Flashcards Effortlessly</h1>
        <p>Upload your PDF files and let AI do the magic.</p>
        <button onClick={() => navigate('/home')}>Get Started</button>
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
            <ul className='list'>
              <li>Basic AI flashcard generation</li>
              <li>Single format support</li>
              <li>Limited real-time preview</li>
              <li>Basic export options</li>
              <li>PDF uploads only</li>
            </ul>
            <div className="price">₹0/month</div>
          </div>
          <div className="pricing-plan premium">
            <h3 className='premium-heading'>Premium Plan</h3>
            <ul className='list'>
              <li>Advanced AI flashcard generation</li>
              <li>Multi-format support</li>
              <li>Full real-time preview</li>
              <li>Advanced export options</li>
              <li>Seamless PDF uploads</li>
              <li>Personalized flashcards</li>
            </ul>
            <div className="price">₹799/month</div>
            <div ><button className="getPremium" onClick={handleGetStarted}>Get Premium</button></div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-us">
        <h2>Contact Us</h2>
        <p>Have questions? Reach out to the Lazzy Koalaa team!</p>
        <div className="cs-14-footer space-pt--25 space-pb--25" style={{width: "100%", textAlign: "center" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start cs-14-social-icons">
                  <a
                    href="https://www.instagram.com/lazzykoalaa/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/assets/img/icons/instagram-01.svg"}
                      alt="Instagram"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/lazzykoalaa/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/assets/img/icons/linkedin-01.svg"}
                      alt="LinkedIn"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCIC2lUnISguxOlgOieAXPVQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/assets/img/icons/youtube-01.svg"}
                      alt="YouTube"
                    />
                  </a>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="cs-14-copyright text-right">
                &copy; {new Date().getFullYear()}{" "}
                <a
                  href="mailto:lazzykoalaa@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  lazzykoalaa
                </a>
                , all rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default LandingPage;
