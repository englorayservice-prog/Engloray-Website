import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import StatCards from './StatCards';
import './Tagline.css';

const Tagline = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="tagline-section" id='tagline'>
        <motion.div 
          className="tagline-container"
          initial={{ opacity: 0, y: 60, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }} // smooth cinematic ease
        >
          <h3 className="tagline-subtitle">BUILD BETTER BUSINESS</h3>
          <h1 className="tagline-title">STEP INTO THE WORLD OF <br /> ENGLORAY</h1>
          <p className="tagline-description">
            Your gateway to exclusive business scaling, tech solutions, and elite career growth.
          </p>
          <div className="tagline-buttons">
            <button className="tagline-btn btn-primary" onClick={() => navigate('#contactFooter')}>GET STARTED</button>
            <button className="tagline-btn btn-secondary" onClick={() => navigate('/tech-learning')}>ACADEMY</button>
          </div>
          <div className="scroll-indicator-container">
            <div className="mouse-scroll-indicator">
              <div className="mouse-dot"></div>
              <div className="mouse-chevron mouse-chevron-down-1"></div>
              <div className="mouse-chevron mouse-chevron-down-2"></div>
            </div>
            <span className="scroll-text">SCROLL DOWN</span>
          </div>
          <div className="tagline-bottom-text">
            <span>Verified</span>
            <div className="tagline-long-arrow"></div>
            <img src={require('../../assets/branding.png')} alt="Branding" className="tagline-icon" />
          </div>
        </motion.div>
      </section >
      <StatCards />
    </>
  );
};

export default Tagline;
