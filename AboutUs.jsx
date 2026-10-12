import React from 'react';
import './AboutUs.css';

function AboutUs({ onGetStarted }) {
  return (
    <div className="about-us-container">
      <div className="about-us-hero">
        <span className="about-us-badge">Welcome to Paradise Nursery</span>
        <h2 className="about-us-title">Cultivating Serenity & Vitality in Every Living Space</h2>
        <p className="about-us-lead">
          At Paradise Nursery, we believe that bringing nature indoors transforms everyday living.
          From crisp air-purifying varieties to fragrant aromatic herbs and soothing medicinal flora,
          our hand-nurtured botanical collection is curated to inspire peace, wellness, and vibrant health.
        </p>
      </div>

      <div className="about-us-grid">
        <div className="about-us-card">
          <div className="card-icon">🌿</div>
          <h3>Purify Your Indoor Air</h3>
          <p>
            Modern homes and workspaces accumulate airborne pollutants. Our certified air-cleansing plants—like Peace Lilies,
            Snake Plants, and Boston Ferns—naturally absorb toxins, boost oxygen levels, and promote deeper breathing.
          </p>
        </div>

        <div className="about-us-card">
          <div className="card-icon">🌸</div>
          <h3>Aromatics for Mindful Living</h3>
          <p>
            Immerse yourself in gentle aromas that soothe stress and rejuvenate your senses. From therapeutic Lavender
            to revitalizing Rosemary and sweet Jasmine, our aromatic plants offer natural aromatherapeutic comfort.
          </p>
        </div>

        <div className="about-us-card">
          <div className="card-icon">🌱</div>
          <h3>Sustainably Grown & Packaged</h3>
          <p>
            Every plant at Paradise Nursery is cultivated under organic conditions without harmful synthetic pesticides.
            We pack and ship each specimen with biodegradable, eco-friendly materials to safeguard our planet.
          </p>
        </div>
      </div>

      <div className="about-us-mission">
        <div className="mission-content">
          <h3>Our Commitment to Plant Parents</h3>
          <p>
            Whether you are welcoming your very first succulent or curating an expansive indoor tropical jungle,
            Paradise Nursery provides seasoned horticultural guidance, detailed care cards, and ongoing support.
            Join thousands of happy plant parents creating happier, greener sanctuaries today.
          </p>
          {onGetStarted && (
            <button className="about-us-cta-btn" onClick={onGetStarted}>
              Explore Plant Collection →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
