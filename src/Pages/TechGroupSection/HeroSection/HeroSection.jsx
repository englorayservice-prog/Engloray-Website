import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // WhatsApp contact URL - update with your phone number and message
  const whatsappNumber = '916381759909'; // Replace with your actual phone number
  const whatsappMessage = 'Hello! I would like to start a project with you.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Double scroll animation with container scaling
  const getTransformValues = () => {
    if (scrollY < 200) {
      // First scroll: scale from 1.0 to 0.9
      const progress = scrollY / 200;
      const scale = 1.0 - (progress * 0.1);
      return { scale };
    } else {
      // Second scroll: scale from 0.9 to 0.8
      const progress = (scrollY - 200) / 200;
      const scale = 0.9 - (progress * 0.1);
      return { scale };
    }
  };

  const { scale } = getTransformValues();

  return (
    <section className="hero-section" id='heroSection'>
      <div className="hero-container">
        <div 
          className="hero-background"
          style={{
            transform: `scale(${scale})`
          }}
        />
        
        <div className="hero-content-wrapper">
          <div className="hero-content">
            <h1 className="hero-title">Powered by Intelligence. Driven by Design.</h1>
            <p className="hero-description">
              Creative design, marketing, and technology solutions that empower brands.
            </p>
            <div className="hero-buttons">
              {/* Updated to WhatsApp link */}
              <a 
                href={whatsappUrl} 
                className="btn btn-primary"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Start Your Project
              </a>
              
              {/* Keep the internship link as internal navigation */}
              <Link to="#internship" className="btn btn-secondary">
                Apply for Internship
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background shapes */}
        <div className="hero-visual">
          <div className="hero-shape hero-shape-1"></div>
          <div className="hero-shape hero-shape-2"></div>
          <div className="hero-shape hero-shape-3"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;