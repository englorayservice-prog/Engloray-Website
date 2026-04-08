import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import ClientMarquee from '../../../Components/CustomScrollbar/ClientMarquee/ClientMarquee.jsx';
const HeroSection = () => {

    // WhatsApp contact URL - update with your phone number and message
    const whatsappNumber = '916381759909'; // Replace with your actual phone number
    const whatsappMessage = 'Hello! I would like to start a project with you.';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <section className="hero-section" id='heroSection'>
            <div className="hero-background" />
            <div className="hero-container" >


                <div className="hero-content-wrapper">
                    <div className="hero-content">
                        {/* Feature badge - Vetra style */}
                        <Link to="/ourTeamPage" className="hero-feature-badge" style={{ textDecoration: 'none' }}>
                            <span className="hero-feature-badge__label">New feature</span>
                            <span className="hero-feature-badge__text">Check out the team dashboard</span>
                            <span className="hero-feature-badge__arrow">→</span>
                        </Link>

                        <h1 className="hero-title">Powered by Intelligence. </h1>
                        <h1 className="hero-title">Driven by Design.</h1>
                        <div className="hero-search-container">
                            <div className="hero-search-glow"></div>
                            <div className="hero-search-box">
                                <input
                                    type="text"
                                    placeholder="What service or product are you looking for?"
                                    className="hero-search-input"
                                />
                                <button className="hero-search-button" aria-label="Search">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>
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
                                Join Academic Program
                            </Link>

                        </div>
                    </div>
                    <div className="client-container">
                        <ClientMarquee />
                    </div>
                </div>

                {/* Background shapes */}
                <div className="hero-visual">
                    <div className="hero-shape hero-shape-1"></div>
                    <div className="hero-shape hero-shape-2"></div>
                    <div className="hero-shape hero-shape-3"></div>
                </div>
            </div>
        </section >
    );
};

export default HeroSection;