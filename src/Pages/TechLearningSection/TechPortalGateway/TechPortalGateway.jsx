import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './TechPortalGateway.css';

const TechPortalGateway = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        window.scrollTo(0, 0);
        navigate('/admissionPortal');
    };

    return (
        <section className="tech-portal-gateway-section">
            <div className="portal-gateway-grid-bg"></div>

            <div className="portal-gateway-container">
                {/* Left Column - Content Description */}
                <div className="portal-left-column">
                    <span className="portal-tagline">Integrated Upskilling</span>
                    
                    <motion.h2 
                        className="portal-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Admission & <span>Program Portal</span>
                    </motion.h2>

                    <motion.p 
                        className="portal-description"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Ready to accelerate your tech career? Enter our Admissions Portal to secure your seat in our specialized industry-ready upskilling programs, paid internships, and mentor-guided coding cohorts.
                    </motion.p>

                    <ul className="portal-feature-list">
                        <li className="portal-feature-item">
                            <span className="portal-feature-bullet"></span>
                            <span>Hands-on Sprints & Specialized Certification Workshops</span>
                        </li>
                        <li className="portal-feature-item">
                            <span className="portal-feature-bullet"></span>
                            <span>Direct 1:1 Corporate Mentor Matchups & Portfolio Audits</span>
                        </li>
                        <li className="portal-feature-item">
                            <span className="portal-feature-bullet"></span>
                            <span>Paid Internships & Placements from Year 1</span>
                        </li>
                    </ul>

                    <motion.button 
                        className="portal-cta-button"
                        onClick={handleNavigate}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Enter Admission Portal →
                    </motion.button>
                </div>

                {/* Right Column - Highlight Cards */}
                <div className="portal-right-column">
                    {[
                        {
                            num: "1",
                            title: "Apply Online",
                            desc: "Fill in your student profile details in our responsive lead capture form."
                        },
                        {
                            num: "2",
                            title: "Choose Program Track",
                            desc: "Select your specialized track: AI & ML, MERN Stack, UI/UX, or Graphic Design."
                        },
                        {
                            num: "3",
                            title: "Align with Mentor",
                            desc: "Review your goals with our industry experts and lock in internship placements."
                        }
                    ].map((card, index) => (
                        <motion.div 
                            className="portal-info-card" 
                            key={index}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <div className="portal-card-icon-wrap">
                                {card.num}
                            </div>
                            <div className="portal-card-details">
                                <h4 className="portal-card-title">{card.title}</h4>
                                <p className="portal-card-desc">{card.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechPortalGateway;
