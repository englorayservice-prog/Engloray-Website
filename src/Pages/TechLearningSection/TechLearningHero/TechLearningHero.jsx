import React from 'react';
import { Link } from 'react-router-dom';
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

            {/* Top Purple Section containing Header, Text, and Image Stage */}
            <div className="tlh-peoplr-top-section">
                {/* Top Header/Nav Area — Book a call removed from here */}
                <header className="tlh-peoplr-header">
                    <nav className="tlh-nav-links">
                        {/* Nav items removed per request */}
                    </nav>
                </header>

                {/* Main Hero Header text */}
                <h1 className="tlh-peoplr-title">
                    UPSKILL FOR YOUR<br />CAREER
                </h1>

                {/* Main Stage with Image and Floating Cards */}
                <div className="tlh-peoplr-stage">

                    {/* Center Image — Start Learning button removed from here */}
                    <div className="tlh-peoplr-image-wrapper">
                        <img src={studentsImg} alt="Students" className="tlh-peoplr-students" />
                    </div>

                    {/* Floating Stat Card Left (90% Placement) */}
                    <div className="tlh-float-card tlh-float-left">
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
                    </div>

                    {/* Floating Stat Card Right (300+ Partners) */}
                    <div className="tlh-float-card tlh-float-right">
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
                    </div>

                    {/* Centered CTA Buttons (Above Marquee) */}
                    <div className="tlh-center-cta-group">
                        <Link to="/allCoursesPage" className="tlh-pill-btn-lime">
                            Start Learning
                            <span className="tlh-pill-icon"><FontAwesomeIcon icon={faPhone} /></span>
                        </Link>
                        <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className="tlh-pill-btn-lime">
                            Book a call
                            <span className="tlh-pill-icon"><FontAwesomeIcon icon={faPhone} /></span>
                        </a>
                    </div>
                </div>

                {/* Overlapping Glass Marquee Track INSIDE the Top Card */}
                <div className="tlh-marquee-container">
                    <div className="tlh-marquee-track">
                        {/* Duplicate array multiple times for seamless marquee loop on large screens */}
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

            {/* Merged Highlights Section */}
            <div className="tlh-peoplr-bottom-grid">
                <div className="tlh-bottom-card">
                    <div className="tlh-bcard-header">
                        <h3>Real-World <br />Practice</h3>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="tlh-card-arrow" />
                    </div>
                    <p>Develop your abilities with hands-on projects designed to simulate actual industry scenarios and workplace challenges.</p>
                    <div className="tlh-card-footer">
                        <span className="tlh-footer-pill lime-footer"><FontAwesomeIcon icon={faLaptopCode} style={{ marginRight: '6px' }} /> Live Projects</span>
                        <div className="tlh-icon-badges" style={{ marginLeft: 'auto' }}>
                            <div className="tlh-edu-badge" style={{ background: '#3b2c85' }}><FontAwesomeIcon icon={faLaptopCode} /></div>
                            <div className="tlh-edu-badge" style={{ background: '#6a4ae0' }}><FontAwesomeIcon icon={faGraduationCap} /></div>
                        </div>
                    </div>
                </div>

                <div className="tlh-bottom-card">
                    <div className="tlh-bcard-header">
                        <h3>Guided <br />Mentorship</h3>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="tlh-card-arrow" />
                    </div>
                    <p>Gain insights from experienced industry professionals who provide personalized support and feedback throughout your journey.</p>
                    <div className="tlh-card-footer">
                        <span className="tlh-footer-pill lime-footer"><FontAwesomeIcon icon={faUsers} style={{ marginRight: '6px' }} /> Expert Mentors</span>
                        <div className="tlh-icon-badges" style={{ marginLeft: 'auto' }}>
                            <div className="tlh-edu-badge" style={{ background: '#3b2c85' }}><FontAwesomeIcon icon={faUsers} /></div>
                        </div>
                    </div>
                </div>

                <div className="tlh-bottom-card">
                    <div className="tlh-bcard-header">
                        <h3>Experience <br />First</h3>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="tlh-card-arrow" />
                    </div>
                    <p>Equip yourself with the practical skills, strong portfolio, and confidence needed to secure top-tier tech opportunities.</p>
                    <div className="tlh-card-footer">
                        <span className="tlh-footer-pill lime-footer"><FontAwesomeIcon icon={faTrophy} style={{ marginRight: '6px' }} /> 90% Placement</span>
                        <div className="tlh-icon-badges" style={{ marginLeft: 'auto' }}>
                            <div className="tlh-edu-badge" style={{ background: '#3b2c85' }}><FontAwesomeIcon icon={faTrophy} /></div>
                            <div className="tlh-edu-badge" style={{ background: '#6a4ae0' }}><FontAwesomeIcon icon={faHandshake} /></div>
                            <div className="tlh-edu-badge" style={{ background: '#8b6ff0' }}><FontAwesomeIcon icon={faUsers} /></div>
                        </div>
                    </div>
                </div>
                <div className="tlh-bottom-card">
                    <div className="tlh-bcard-header">
                        <h3>Industry-Ready <br />Skills</h3>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="tlh-card-arrow" />
                    </div>
                    <p>Master in-demand technologies and frameworks used by top companies, preparing you to hit the ground running from day one.</p>
                    <div className="tlh-card-footer">
                        <span className="tlh-footer-pill lime-footer"><FontAwesomeIcon icon={faBriefcase} style={{ marginRight: '6px' }} /> Job Ready</span>
                        <div className="tlh-icon-badges" style={{ marginLeft: 'auto' }}>
                            <div className="tlh-edu-badge" style={{ background: '#3b2c85' }}><FontAwesomeIcon icon={faBriefcase} /></div>
                            <div className="tlh-edu-badge" style={{ background: '#6a4ae0' }}><FontAwesomeIcon icon={faLaptopCode} /></div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default TechLearningHero;