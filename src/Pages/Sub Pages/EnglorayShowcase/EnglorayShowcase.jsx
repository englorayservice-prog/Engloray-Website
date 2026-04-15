import React, { useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRight,
    faRobot,
    faMicrochip,
    faChartLine,
    faBrain,
    faDatabase,
    faShieldAlt,
    faCogs
} from '@fortawesome/free-solid-svg-icons';
import TopNavbar from '../../../Components/TopNavbar/TopNavbar';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import Footer from '../../../Components/Footer/Footer';
import './EnglorayShowcase.css';

const EnglorayShowcase = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { scrollYProgress } = useScroll();
    
    // Transform values for the Opening Scene
    const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.5]);
    const heroY = useTransform(scrollYProgress, [0, 0.1], [0, -100]);
    const blurAmount = useTransform(scrollYProgress, [0, 0.05], [0, 20]);
    const blurFilter = useMotionTemplate`blur(${blurAmount}px)`;

    // Transform values for the Rising Business Content
    const contentY = useTransform(scrollYProgress, [0.08, 0.2], [400, 0]);
    const contentOpacity = useTransform(scrollYProgress, [0.08, 0.15], [0, 1]);

    return (
        <div className="showcase-master-container">
            <TopNavbar />
            <TwoLineNavbar />

            {/* CINEMATIC ENTRANCE SECTION */}
            <section className="cinematic-entrance">
                <motion.div 
                    className="entrance-overlay"
                    style={{ 
                        opacity: heroOpacity, 
                        scale: heroScale, 
                        y: heroY,
                        filter: blurFilter
                    }}
                >
                    <div className="mask-container">
                        <motion.h1 
                            className="reveal-text"
                            initial={{ y: "110%", skewY: 10 }}
                            animate={{ y: 0, skewY: 0 }}
                            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        >
                            WE ARE <span className="red-accent">ENGLORAY</span>
                        </motion.h1>
                    </div>
                    <motion.p 
                        className="reveal-subtext"
                        initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 1.2, delay: 0.8 }}
                    >
                        Redefining Enterprise Intelligence Through Motion
                    </motion.p>
                </motion.div>
                
                <motion.div 
                    className="scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    style={{ opacity: heroOpacity }}
                >
                    <span>Keep Scrolling</span>
                    <div className="mouse-icon"></div>
                </motion.div>
            </section>

            {/* BUSINESS SUITE MODULES WITH RISING TRANSITION */}
            <motion.div 
                className="showcase-content-wrapper"
                style={{ y: contentY, opacity: contentOpacity }}
            >
                
                {/* TRANSFORMING HERO */}
                <section className="showcase-ai-hero">
                    <div className="glass-container">
                        <div className="sc-header-group">
                            <motion.span 
                                className="premium-badge"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                            >
                                <FontAwesomeIcon icon={faRobot} /> Business Suite AI
                            </motion.span>
                            <motion.h2 
                                className="ultra-h2"
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                Automation Meets <span className="crimson-glow">Elegance</span>
                            </motion.h2>
                        </div>

                        <div className="dynamic-grid">
                            <motion.div 
                                className="dynamic-card main-card"
                                initial={{ y: 100, opacity: 0, filter: 'blur(10px)' }}
                                whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                viewport={{ once: true, margin: "-100px" }}
                                whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
                            >
                                <div className="card-inner-content">
                                    <div className="icon-sphere"><FontAwesomeIcon icon={faBrain} /></div>
                                    <h3>Neural Analytics</h3>
                                    <p>Predictive Modeling active for all market verticals.</p>
                                    <div className="data-visual">
                                        {[1,2,3,4,5].map(i => <div key={i} className="visual-bar"></div>)}
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="dynamic-card side-card"
                                initial={{ y: 100, opacity: 0, filter: 'blur(10px)' }}
                                whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                                viewport={{ once: true, margin: "-100px" }}
                                whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
                            >
                                <div className="icon-sphere red"><FontAwesomeIcon icon={faShieldAlt} /></div>
                                <h3>Fortified Security</h3>
                                <p>Encrypted data flow with zero vulnerability footprint.</p>
                                <button className="mini-btn">Review Logs</button>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* THE "WHY" SECTION - CLEAN WHITE REVEAL */}
                <section className="white-transition-section">
                    <div className="white-bg-container">
                        <motion.div 
                            className="stagger-group"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={{
                                visible: { transition: { staggerChildren: 0.2 } },
                                hidden: {}
                            }}
                        >
                            <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>WHY BUSINESS SUITE AI?</motion.h2>
                            <div className="floating-benefits">
                                {[
                                    { title: "24/7 Autonomy", icon: faCogs },
                                    { title: "Scalable Growth", icon: faChartLine },
                                    { title: "API Integration", icon: faDatabase }
                                ].map((b, i) => (
                                    <motion.div 
                                        key={i} 
                                        className="benefit-pill"
                                        variants={{ 
                                            hidden: { opacity: 0, scale: 0.8, filter: 'blur(5px)' }, 
                                            visible: { opacity: 1, scale: 1, filter: 'blur(0px)' } 
                                        }}
                                    >
                                        <FontAwesomeIcon icon={b.icon} /> {b.title}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* FINAL CTA - CINEMATIC IMPACT */}
                <section className="final-impact-section">
                    <div className="crv-container">
                        <motion.h3
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            The Future is <span className="red-glow">Autonomous</span>
                        </motion.h3>
                        <motion.div className="cta-action-box">
                            <a href="https://wa.me/916381759909" className="premium-btn-hero">
                                Start Your Pilot <FontAwesomeIcon icon={faArrowRight} />
                            </a>
                        </motion.div>
                    </div>
                </section>

            </motion.div>

            <Footer />
        </div>
    );
};

export default EnglorayShowcase;
