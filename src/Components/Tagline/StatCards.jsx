import React from 'react';
import './StatCards.css';
import educationIcon from '../../assets/education-icon.png';
import { useNavigate } from 'react-router-dom';



const StatCards = () => {
    const navigate = useNavigate();
    return (
        <div className="bphs-stat-cards-container">
            <div className="bphs-stat-left-column">
                <h2 className="bphs-stat-heading">Branding for Bold Businesses</h2>
                <div className="bphs-scrolling-image-overflow">
                    <div className="bphs-scrolling-image-track">
                        {/* 24 sets of images to ensure width > 950px * 2 for seamless loop */}
                        {/* Set 1 */}
                        <img src={require('../../assets/01.png')} alt="Stat 01" />
                        <img src={require('../../assets/09.png')} alt="Stat 09" />
                        <img src={require('../../assets/018.png')} alt="Stat 018" />
                        {/* Set 2 */}
                        <img src={require('../../assets/01.png')} alt="Stat 01" />
                        <img src={require('../../assets/09.png')} alt="Stat 09" />
                        <img src={require('../../assets/018.png')} alt="Stat 018" />
                        {/* Set 3 */}
                        <img src={require('../../assets/01.png')} alt="Stat 01" />
                        <img src={require('../../assets/09.png')} alt="Stat 09" />
                        <img src={require('../../assets/018.png')} alt="Stat 018" />
                        {/* Set 4 */}
                        <img src={require('../../assets/01.png')} alt="Stat 01" />
                        <img src={require('../../assets/09.png')} alt="Stat 09" />
                        <img src={require('../../assets/018.png')} alt="Stat 018" />
                        {/* Set 5 */}
                        <img src={require('../../assets/01.png')} alt="Stat 01" />
                        <img src={require('../../assets/09.png')} alt="Stat 09" />
                        <img src={require('../../assets/018.png')} alt="Stat 018" />
                        {/* Set 6 */}
                        <img src={require('../../assets/01.png')} alt="Stat 01" />
                        <img src={require('../../assets/09.png')} alt="Stat 09" />
                        <img src={require('../../assets/018.png')} alt="Stat 018" />

                        {/* Set 7 */}
                        <img src={require('../../assets/01.png')} alt="Stat 01" />
                        <img src={require('../../assets/09.png')} alt="Stat 09" />
                        <img src={require('../../assets/018.png')} alt="Stat 018" />
                        {/* Set 8 */}
                        <img src={require('../../assets/01.png')} alt="Stat 01" />
                        <img src={require('../../assets/09.png')} alt="Stat 09" />
                        <img src={require('../../assets/018.png')} alt="Stat 018" />
                        {/* Set 9 */}
                        <img src={require('../../assets/01.png')} alt="Stat 01" />
                        <img src={require('../../assets/09.png')} alt="Stat 09" />
                        <img src={require('../../assets/018.png')} alt="Stat 018" />
                        {/* Set 10 */}
                        <img src={require('../../assets/01.png')} alt="Stat 01" />
                        <img src={require('../../assets/09.png')} alt="Stat 09" />
                        <img src={require('../../assets/018.png')} alt="Stat 018" />
                        {/* Set 11 */}
                        <img src={require('../../assets/01.png')} alt="Stat 01" />
                        <img src={require('../../assets/09.png')} alt="Stat 09" />
                        <img src={require('../../assets/018.png')} alt="Stat 018" />
                        {/* Set 12 */}
                        <img src={require('../../assets/01.png')} alt="Stat 01" />
                        <img src={require('../../assets/09.png')} alt="Stat 09" />
                        <img src={require('../../assets/018.png')} alt="Stat 018" />

                        {/* Duplicate Half (Sets 13-24) */}
                        {/* Set 13 */}
                        <img src={require('../../assets/01.png')} alt="Stat 01" />
                        <img src={require('../../assets/09.png')} alt="Stat 09" />
                        <img src={require('../../assets/018.png')} alt="Stat 018" />
                        {/* Set 14 */}
                        <img src={require('../../assets/01.png')} alt="Stat 01" />
                        <img src={require('../../assets/09.png')} alt="Stat 09" />
                        <img src={require('../../assets/018.png')} alt="Stat 018" />
                        {/* Set 15 */}
                        <img src={require('../../assets/01.png')} alt="Stat 01" />
                        <img src={require('../../assets/09.png')} alt="Stat 09" />
                        <img src={require('../../assets/018.png')} alt="Stat 018" />
                        {/* Set 16 */}
                        <img src={require('../../assets/01.png')} alt="Stat 01" />
                        <img src={require('../../assets/09.png')} alt="Stat 09" />
                        <img src={require('../../assets/018.png')} alt="Stat 018" />
                        {/* Set 17 */}
                        <img src={require('../../assets/01.png')} alt="Stat 01" />
                        <img src={require('../../assets/09.png')} alt="Stat 09" />
                        <img src={require('../../assets/018.png')} alt="Stat 018" />
                        {/* Set 18 */}
                        <img src={require('../../assets/01.png')} alt="Stat 01" />
                        <img src={require('../../assets/09.png')} alt="Stat 09" />
                        <img src={require('../../assets/018.png')} alt="Stat 018" />
                        {/* Set 19 */}
                        <img src={require('../../assets/01.png')} alt="Stat 01" />
                        <img src={require('../../assets/09.png')} alt="Stat 09" />
                        <img src={require('../../assets/018.png')} alt="Stat 018" />
                        {/* Set 20 */}
                        <img src={require('../../assets/01.png')} alt="Stat 01" />
                        <img src={require('../../assets/09.png')} alt="Stat 09" />
                        <img src={require('../../assets/018.png')} alt="Stat 018" />
                        {/* Set 21 */}
                        <img src={require('../../assets/01.png')} alt="Stat 01" />
                        <img src={require('../../assets/09.png')} alt="Stat 09" />
                        <img src={require('../../assets/018.png')} alt="Stat 018" />
                        {/* Set 22 */}
                        <img src={require('../../assets/01.png')} alt="Stat 01" />
                        <img src={require('../../assets/09.png')} alt="Stat 09" />
                        <img src={require('../../assets/018.png')} alt="Stat 018" />
                        {/* Set 23 */}
                        <img src={require('../../assets/01.png')} alt="Stat 01" />
                        <img src={require('../../assets/09.png')} alt="Stat 09" />
                        <img src={require('../../assets/018.png')} alt="Stat 018" />
                        {/* Set 24 */}
                        <img src={require('../../assets/01.png')} alt="Stat 01" />
                        <img src={require('../../assets/09.png')} alt="Stat 09" />
                        <img src={require('../../assets/018.png')} alt="Stat 018" />
                    </div>
                </div>
            </div>

            <div className="bphs-stat-cards-wrapper">
                <div className="bphs-stat-card bphs-stat-card-dark">
                    <div
                        className="bphs-stat-icon-top-right"
                        onClick={() => navigate('/raymartPage')}
                        style={{ cursor: 'pointer' }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </div>
                    <div className="bphs-stat-label-large bphs-centered-poppins">Our Service + Product</div>
                    <div className="bphs-stat-card-bottom-row">
                        <div className="bphs-stat-value-col">
                            <div className="bphs-stat-value-small">40+</div>
                            <div className="bphs-stat-value-subtext">
                                <span className="bphs-live-dot"></span>
                                Available
                            </div>
                        </div>
                        <div className="bphs-stat-graph">
                            <svg viewBox="0 0 100 40" preserveAspectRatio="none" width="100%" height="100%">
                                <path d="M0 30 Q 20 25, 40 10 T 80 20 T 100 5 V 40 H 0 Z" fill="rgba(255,255,255,0.2)" />
                                <path d="M0 30 Q 20 25, 40 10 T 80 20 T 100 5" fill="none" stroke="white" strokeWidth="2" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="bphs-stat-card bphs-stat-card-light">
                    <div className="bphs-stat-icon-top-right"
                        onClick={() => navigate('/tech-learning')}
                        style={{ cursor: 'pointer' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </div>
                    <div className="bphs-stat-label-large bphs-left-poppins">Education</div>
                    <div className="bphs-stat-value-container">
                        <span className="bphs-stat-value-number">7+</span>
                        <span className="bphs-stat-value-text">courses</span>
                    </div>
                    <div className="bphs-stat-card-bottom-row">
                        <div className="bphs-stat-visual-right">
                            <img src={educationIcon} alt="Education Icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatCards;