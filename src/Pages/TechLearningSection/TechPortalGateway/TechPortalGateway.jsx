import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './TechPortalGateway.css';

const stepCards = [
    {
        stepLabel: 'STEP 01 · EXPLORE',
        stepNumber: '01',
        title: 'Explore',
        desc: 'Discover the track built for where you want to go: AI & ML, MERN Stack, UI/UX, or Graphic Design.',
    },
    {
        stepLabel: 'STEP 02 · BUILD',
        stepNumber: '02',
        title: 'Build',
        desc: 'Train under real industry mentors with hands-on sprints and certification workshops.',
    },
    {
        stepLabel: 'STEP 03 · LAUNCH',
        stepNumber: '03',
        title: 'Launch',
        desc: "Walk into a paid internship or placement backed by your mentor's referral.",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.45,
            delay: index * 0.08,
            ease: 'easeOut',
        },
    }),
};

const TechPortalGateway = () => {
    const navigate = useNavigate();

    const handleBeginJourney = () => {
        window.scrollTo(0, 0);
        navigate('/admissionPortal');
    };

    return (
        <section className="tech-portal-gateway-section">
            <div className="portal-gateway-grid-bg" />

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
                        Admission & <span>Program Path</span>
                    </motion.h2>

                    <motion.p
                        className="portal-description"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Every path here is mapped — from your first project sprint to the day you walk into a paid role. Explore specialized tracks, train under mentors who work in the industry today, and build a portfolio companies actually look at.                    </motion.p>

                    <ul className="portal-feature-list">
                        <li className="portal-feature-item">
                            <span className="portal-feature-bullet" />
                            <span>Project-based learning across AI & ML, MERN Stack, UI/UX & More </span>
                        </li>
                        <li className="portal-feature-item">
                            <span className="portal-feature-bullet" />
                            <span>1:1 guidance from working industry mentors — not lecturers, practitioners</span>
                        </li>
                        <li className="portal-feature-item">
                            <span className="portal-feature-bullet" />
                            <span>Paid internships from Year 1, backed by your mentor's own referral</span>
                        </li>
                    </ul>

                    <motion.button
                        className="portal-cta-button"
                        onClick={handleBeginJourney}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Begin the journey →
                    </motion.button>
                </div>

                {/* Right Column - Journey-Led Step Cards */}
                <div className="portal-right-column">
                    {stepCards.map((card, index) => (
                        <motion.div
                            className="portal-info-card"
                            key={card.stepNumber}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.4 }}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleBeginJourney}
                            style={{ cursor: 'pointer' }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                        >
                            <div className="portal-card-icon-wrap">
                                <span className="portal-card-label">{card.stepLabel}</span>
                                <span className="portal-card-number">{card.stepNumber}</span>
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