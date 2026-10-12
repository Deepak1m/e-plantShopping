import React, { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);

  // Transition to the product listing page
  const handleGetStarted = () => {
    setShowProductList(true);
  };

  // Return to the landing page
  const handleReturnHome = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-container">
      {showProductList ? (
        <ProductList onHomeClick={handleReturnHome} />
      ) : (
        <div className="landing-page-hero">
          <div className="hero-overlay"></div>

          {/* Top Landing Navigation */}
          <nav className="landing-nav">
            <div className="landing-brand">
              <span className="landing-logo">🌿</span>
              <span className="landing-brand-text">Paradise Nursery</span>
            </div>
            <div className="landing-nav-actions">
              <button
                className="landing-nav-btn"
                onClick={() => setShowAboutModal(!showAboutModal)}
              >
                {showAboutModal ? 'Close About Us' : 'About Us'}
              </button>
              <button
                className="landing-nav-btn primary"
                onClick={handleGetStarted}
              >
                Shop Plants
              </button>
            </div>
          </nav>

          {/* About Us Modal / Dropdown if toggled */}
          {showAboutModal && (
            <div className="about-modal-backdrop" onClick={() => setShowAboutModal(false)}>
              <div className="about-modal-card" onClick={(e) => e.stopPropagation()}>
                <button
                  className="modal-close-btn"
                  onClick={() => setShowAboutModal(false)}
                >
                  ✕
                </button>
                <AboutUs onGetStarted={handleGetStarted} />
              </div>
            </div>
          )}

          {/* Hero Content Section */}
          <div className="hero-content">
            <div className="hero-badge">Welcome to Green Living</div>
            <h1 className="company-title">Paradise Nursery</h1>
            <p className="company-tagline">Where Greenery Meets Serenity</p>
            <div className="divider-line"></div>
            <p className="hero-description">
              Elevate your home and workspace with our hand-curated collection of air-purifying,
              aromatic, and low-maintenance indoor plants. Nurtured sustainably, delivered with care.
            </p>

            <div className="hero-cta-group">
              <button className="get-started-btn" onClick={handleGetStarted}>
                Get Started
              </button>
              <button
                className="learn-more-btn"
                onClick={() => setShowAboutModal(true)}
              >
                Learn About Us
              </button>
            </div>

            <div className="hero-features-ribbon">
              <div className="feature-item">
                <span className="feature-icon">🌿</span>
                <span>Air Purifying</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📦</span>
                <span>Eco Packaging</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✨</span>
                <span>Guaranteed Healthy</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
