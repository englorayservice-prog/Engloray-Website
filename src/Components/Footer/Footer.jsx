
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import {
    faPalette,
    faCode,
    faCircleNodes,
    faBriefcase,
    faFolderOpen,
    faBookOpen,
    faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import ELogo from '../../assets/018.png';
import globeBg from '../../assets/globe_v3.png';
import './Footer.css';
import WhiteFooter from '../WhiteFooter/WhiteFooter';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();

    const handleLinkClick = (path) => {
        window.scrollTo(0, 0);
        navigate(path);
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: false, amount: 0.1 },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    const staggerContainer = {
        initial: {},
        whileInView: { transition: { staggerChildren: 0.1 } }
    };

    return (
        <footer className="main-footer-v3">
            {/* Notch Header - White center dip with "E" Icon */}
            <div className="footer-notch-v3">
                <div className="notch-white-dip">
                    <div className="footer-logo-badge">
                        <img src={ELogo} alt="E logo" className="logo-img icon-mode only-e-logo" />
                        <span className="logo-text">ENGLORAY</span>
                    </div>
                </div>
            </div>

            {/* Ready to Transform Section - LEFT ALIGNED */}
            <motion.div
                className="footer-cta-section-v3"
                style={{
                    backgroundImage: `url(${globeBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 105%',
                    backgroundRepeat: 'no-repeat'
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="footer-cta-overlay"></div>
                <div className="footer-cta-content left-align">
                    <motion.h2 className="footer-cta-title" {...fadeInUp}>
                        Ready to Transform Your Business or Career?
                    </motion.h2>
                    <motion.p className="footer-cta-desc" {...fadeInUp}>
                        Join Engloray tech group to master skills, build projects, and transform your future through hands-on experience and professional guidance.
                    </motion.p>
                    <motion.div className="footer-cta-actions left-align" {...fadeInUp}>
                        <button className="footer-btn-primary" onClick={() => window.open('https://wa.me/6381759909', '_blank')}>
                            Join Us Now <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '10px' }} />
                        </button>
                        <button className="footer-btn-secondary" onClick={() => handleLinkClick('/CareersPage')}>
                            Explore Internships
                        </button>
                        <button className="footer-btn-glass" onClick={() => window.open('https://wa.me/6381759909', '_blank')}>
                            Contact Us
                        </button>
                    </motion.div>
                </div>
            </motion.div>

            <WhiteFooter />

        </footer>
    );
};

export default Footer;