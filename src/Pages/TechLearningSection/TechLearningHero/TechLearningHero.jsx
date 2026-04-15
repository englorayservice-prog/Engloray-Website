import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion
import './TechLearningHero.css';
import studentsImg from '../../../assets/images/students.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faGraduationCap, faHandshake, faArrowUpRightFromSquare, faChartLine, faLaptopCode, faUsers, faTrophy, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const TechLearningHero = () => {
    const whatsappNumber = '6381759909';
    const whatsappMessage = "Hi! I'd like to book a demo for your courses. Can you please provide more information?";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <section className="tlh-peoplr-container" id="home">

            {/* Top Purple Section */}
            <div className="tlh-peoplr-top-section">
                <header className="tlh-peoplr-header">
                    <nav className="tlh-nav-links"></nav>
                </header>

                {/* ANIMATION: Title Fade Up */}
                <motion.h1 
                    className="tlh-peoplr-title"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                >
                    UPSKILL FOR YOUR<br />CAREER
                </motion.h1>

                <div className="tlh-peoplr-stage">
                    {/* ANIMATION: Image Wrapper Fade Up */}
                    <motion.div 
                        className="tlh-peoplr-image-wrapper"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img src={studentsImg} alt="Students" className="tlh-peoplr-students" />
                    </motion.div>

                    {/* ANIMATION: Floating Card Left */}
                    <motion.div 
                        className="tlh-float-card tlh-float-left"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="tlh-card-top-row">
                            <span className="tlh-huge-num">90<sup>%</sup></span>
                            <div className="tlh-card-icon-pill lime-icon">
                                <FontAwesomeIcon icon={faGraduationCap} />
                            </div>
                        </div>
                        <p className="tlh-card-desc" style={{ marginBottom: '15px' }}>Placement<br />Assistance</p>
                        <div className="tlh-card-extra" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ color: '#d8ff4a' }}>✓</span> Resume Building</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ color: '#d8ff4a' }}>✓</span> Mock Interviews</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ color: '#d8ff4a' }}>✓</span> Career Support</span>
                        </div>
                    </motion.div>

                    {/* ANIMATION: Floating Card Right */}
                    <motion.div 
                        className="tlh-float-card tlh-float-right"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <div className="tlh-card-top-row">
                            <span className="tlh-huge-num">300<sup>+</sup></span>
                            <div className="tlh-card-icon-pill dark-icon">
                                <FontAwesomeIcon icon={faHandshake} />
                            </div>
                        </div>
                        <p className="tlh-card-desc" style={{ marginBottom: '15px' }}>Hiring<br />Partners</p>
                        <div className="tlh-card-extra" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ color: '#d8ff4a' }}>✓</span> Top Tech Firms</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ color: '#d8ff4a' }}>✓</span> Global Startups</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ color: '#d8ff4a' }}>✓</span> MNCs Connect</span>
                        </div>
                    </motion.div>

                    {/* ANIMATION: Buttons Pop In */}
                    <div className="tlh-center-cta-group">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            style={{ display: 'inline-block' }}
                        >
                            <Link to="/allCoursesPage" className="tlh-pill-btn-lime">
                                Start Learning
                                <span className="tlh-pill-icon"><FontAwesomeIcon icon={faPhone} /></span>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            style={{ display: 'inline-block' }}
                        >
                            <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className="tlh-pill-btn-lime">
                                Book a call
                                <span className="tlh-pill-icon"><FontAwesomeIcon icon={faPhone} /></span>
                            </a>
                        </motion.div>
                    </div>
                </div>

                <div className="tlh-marquee-container">
                    <div className="tlh-marquee-track">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(iteration => (
                            <React.Fragment key={iteration}>
                                <div className="tlh-marquee-card"><FontAwesomeIcon icon={faChartLine} style={{ marginRight: '8px', color: '#d8ff4a' }} /> 50+ Industry Tools</div>
                                <div className="tlh-marquee-card">React & Node.js</div>
                                <div className="tlh-marquee-card">Python Analytics</div>
                                <div className="tlh-marquee-card">Cloud DevOps</div>
                                <div className="tlh-marquee-card">Data Science</div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            {/* ANIMATION: Bottom Grid Cards Reveal */}
            <div className="tlh-peoplr-bottom-grid">
                {[
                    { title: "Real-World \n Practice", desc: "Develop your abilities with hands-on projects designed to simulate actual industry scenarios.", icon: faLaptopCode, pill: "Live Projects" },
                    { title: "Guided \n Mentorship", desc: "Gain insights from experienced industry professionals who provide personalized support.", icon: faUsers, pill: "Expert Mentors" },
                    { title: "Experience \n First", desc: "Equip yourself with the practical skills, strong portfolio, and confidence needed for success.", icon: faTrophy, pill: "90% Placement" },
                    { title: "Industry-Ready \n Skills", desc: "Master in-demand technologies and frameworks used by top companies globally.", icon: faBriefcase, pill: "Job Ready" }
                ].map((item, index) => (
                    <motion.div 
                        key={index}
                        className="tlh-bottom-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                    >
                        <div className="tlh-bcard-header">
                            <h3 style={{ whiteSpace: 'pre-line' }}>{item.title}</h3>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="tlh-card-arrow" />
                        </div>
                        <p>{item.desc}</p>
                        <div className="tlh-card-footer">
                            <span className="tlh-footer-pill lime-footer"><FontAwesomeIcon icon={item.icon} style={{ marginRight: '6px' }} /> {item.pill}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default TechLearningHero;