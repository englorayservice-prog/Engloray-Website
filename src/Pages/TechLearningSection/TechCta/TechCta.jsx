import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './TechCta.css';
import { motion } from 'framer-motion';

const TechCta = () => {
    const navigate = useNavigate();

    const handleApplyNow = () => {
        window.scrollTo(0, 0);
        navigate('/allCoursesPage');
    };

    return (
        <section 
    className="tech-cta-fullbleed" 
    style={{ fontFamily: "'Poppins', sans-serif", position: 'relative', overflow: 'hidden' }}
>
    {/* Animated Background Circles */}
    <motion.div 
        className="cta-bg-circle circle-1"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    ></motion.div>
    <motion.div 
        className="cta-bg-circle circle-2"
        animate={{ scale: [1, 1.3, 1], x: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    ></motion.div>
    <motion.div 
        className="cta-bg-circle circle-3"
        animate={{ scale: [1, 1.2, 1], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    ></motion.div>
    
    <div className="cta-content">
        <motion.h2 
            className="cta-title" 
            style={{ fontFamily: "'Poppins', sans-serif" }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
        >
            Ready to <span className="cta-title-bold">Transform</span> Your Career?
        </motion.h2>

        <motion.p 
            className="cta-description" 
            style={{ fontFamily: "'Poppins', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            Join our professional learning program and gain the skills, experience,
            and mentorship needed to succeed in today's competitive tech industry.
        </motion.p>

        <motion.div 
            className="cta-button-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
            <motion.button 
                className="le-cta-btn-primary" 
                onClick={handleApplyNow}
                style={{ fontFamily: "'Poppins', sans-serif" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Apply Now
                <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '10px' }} />
            </motion.button>

            <motion.button 
                className="le-cta-btn-secondary" 
                onClick={() => navigate('/allCoursesPage')}
                style={{ fontFamily: "'Poppins', sans-serif" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                View Courses
                <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '10px' }} />
            </motion.button>
        </motion.div>
    </div>
</section>
    );
};

export default TechCta;
