import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import {
    faArrowRight,
    faDesktop,
    faGraduationCap,
    faBuilding,
    faEnvelope,
    faPalette,
    faCode,
    faCircleNodes,
    faBriefcase,
    faFolderOpen,
    faBookOpen,
    faRocket
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import benefitsBlueEarth from '../../../assets/download.png';
import './FooterOne.css';

const FooterOne = () => {
    const navigate = useNavigate();
    const [isSwitched, setIsSwitched] = React.useState(false);

    // Icon colors for benefits
    const benefitColors = {
        laptop: '#3498db',
        users: '#e74c3c',
        award: '#f39c12',
        brain: '#9b59b6',
        handshake: '#1abc9c',
        headset: '#3498db',
        rocket: '#FF6B6B',
        cogs: '#7f8c8d',
        building: '#2c3e50',
        chartLine: '#06D6A0',
        clock: '#e67e22',
        projectDiagram: '#6C5B7B'
    };

    const benefits = [
        { icon: faCode, iconColor: benefitColors.laptop, title: "Work on live client projects", description: "Gain real-world experience by working on actual client projects" },
        { icon: faBriefcase, iconColor: benefitColors.users, title: "Mentorship from professionals", description: "Learn from industry experts with years of experience" },
        { icon: faGraduationCap, iconColor: benefitColors.award, title: "Experience certificate", description: "Get certified recognition for your skills and contributions" },
        { icon: faCircleNodes, iconColor: benefitColors.brain, title: "Skill growth through Engloray Tech Group", description: "Continuous learning and development opportunities" },
        { icon: faCode, iconColor: benefitColors.handshake, title: "Collaborative team environment", description: "Work alongside talented peers and build your network" },
        { icon: faDesktop, iconColor: benefitColors.headset, title: "24/7 Support", description: "Get assistance anytime you need help with your projects" }
    ];

    const benefitsAlternative = [
        { icon: faRocket, iconColor: benefitColors.rocket, title: "Agile Development", description: "Fast-paced, transparent development cycles ensuring rapid delivery." },
        { icon: faCode, iconColor: benefitColors.cogs, title: "Scalable Architecture", description: "Future-proof infrastructure designed to grow with your business needs." },
        { icon: faBuilding, iconColor: benefitColors.building, title: "Global Industry Expertise", description: "Specialized insights from a diverse team of international experts." },
        { icon: faDesktop, iconColor: benefitColors.chartLine, title: "Enterprise Standards", description: "Adherence to top-tier security and quality protocols for your projects." },
        { icon: faCircleNodes, iconColor: benefitColors.clock, title: "24/7 Systems Monitoring", description: "Proactive maintenance ensuring maximum uptime and stability." },
        { icon: faFolderOpen, iconColor: benefitColors.projectDiagram, title: "Strategic Consulting", description: "Data-driven roadmaps designed to achieve long-term corporate growth." }
    ];

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
        <footer className="footer-one">
            {/* New Section: When people do work with us */}
            <div className="footer-benefits-section">
                <motion.div
                    className="footer-benefits-header"
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: false, amount: 0.1 }}
                    variants={fadeInUp}
                >
                    <div className="footer-benefits-badge">
                        <FontAwesomeIcon icon={faRocket} className="badge-icon" />
                        <span>Let's build something</span>
                    </div>
                    <h2 className="footer-benefits-title">
                        WHEN PEOPLE <br />
                        <span className="do-with-switch">
                            <span className="red-text">do</span>
                            <div
                                className={`switch-container ${isSwitched ? 'active' : ''}`}
                                onClick={() => setIsSwitched(!isSwitched)}
                            >
                                <div className="switch-track"></div>
                                <div className="switch-thumb"></div>
                            </div>
                            <span className="rest-text"> work with us.</span>
                        </span>
                    </h2>
                </motion.div>

                <motion.div
                    className="footer-benefits-grid"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    {(isSwitched ? benefitsAlternative : benefits).map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="benefit-card"
                            variants={fadeInUp}
                        >
                            <div className="benefit-icon" style={{ '--benefit-icon-color': benefit.iconColor }}>
                                <FontAwesomeIcon icon={benefit.icon} className="fa-benefit-icon" />
                            </div>
                            <h3 className="benefit-title">{benefit.title}</h3>
                            <p className="benefit-desc">{benefit.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div className="footer-inner-box">
                {/* CTA Section - Ready to Transform */}
                <motion.div
                    className="footer-cta-section"
                    style={{
                        backgroundImage: `url(${benefitsBlueEarth})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center top',
                        backgroundRepeat: 'no-repeat'
                    }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                >
                    <div className="footer-hero-overlay"></div>
                    <div className="footer-cta-content">
                        <motion.h2 className="footer-cta-title" {...fadeInUp}>
                            Ready to Transform?
                        </motion.h2>
                        <motion.p className="footer-cta-desc" {...fadeInUp} transition={{ delay: 0.2 }}>
                            Transform your career with hands-on experience and professional guidance,<br />
                            while building real-world skills through practical, project-based learning
                        </motion.p>
                        <motion.div className="footer-cta-actions" {...fadeInUp} transition={{ delay: 0.4 }}>
                            <button
                                className="footer-btn-primary"
                                onClick={() => window.open('https://wa.me/6381759909?text=Hello! I would like to start a project with ENGLORAY.', '_blank')}
                            >
                                <span>Start Your Project</span>
                                <span className="btn-icon">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </span>
                            </button>
                            <button className="footer-btn-secondary" onClick={() => handleLinkClick('/CareersPage')}>
                                <span>Apply for Internship</span>
                                <span className="btn-icon">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </span>
                            </button>
                        </motion.div>
                    </div>
                </motion.div>

                <div className="footer-main-divider"></div>

                <motion.div
                    className="footer-top-container"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: false }}
                >
                    {/* Main Brand Column */}
                    <motion.div className="footer-brand-col" variants={fadeInUp}>
                        <h2 className="footer-logo">ENGLORAY</h2>
                        <p className="footer-brand-desc">
                            Transforming businesses and empowering individuals through innovative digital solutions and education.
                        </p>
                        <div className="footer-social-section">
                            <div className="footer-social-links">
                                <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a href="#" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href="#" className="social-icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Services Column */}
                    <motion.div className="footer-links-col" variants={fadeInUp}>
                        <h3><FontAwesomeIcon icon={faDesktop} /> SERVICES</h3>
                        <ul>
                            <li onClick={() => handleLinkClick('/brandingPage')}>Branding & Design</li>
                            <li onClick={() => handleLinkClick('/developmentPage')}>software Development</li>
                            <li onClick={() => handleLinkClick('/marketingPage')}>Digital Marketing</li>
                            <li onClick={() => handleLinkClick('/UiUxPage')}>UI/UX Design</li>
                        </ul>
                    </motion.div>

                    {/* Education Column */}
                    <motion.div className="footer-links-col" variants={fadeInUp}>
                        <h3><FontAwesomeIcon icon={faGraduationCap} /> EDUCATION</h3>
                        <ul>
                            <li onClick={() => handleLinkClick('/allProgramsPage')}>All Programs</li>
                            <li onClick={() => handleLinkClick('/workshopsPage')}>Workshops</li>
                            <li onClick={() => handleLinkClick('/corporateTraining')}>Corporate Training</li>
                            <li onClick={() => handleLinkClick('/tech-learning')}>E-learning</li>
                        </ul>
                    </motion.div>

                    {/* Company Column */}
                    <motion.div className="footer-links-col" variants={fadeInUp}>
                        <h3><FontAwesomeIcon icon={faBuilding} /> COMPANY</h3>
                        <ul>
                            <li onClick={() => handleLinkClick('/ourStoryPage')}>About Us</li>
                            <li onClick={() => handleLinkClick('/worksCaseStudiesPage')}>Works</li>
                            <li onClick={() => handleLinkClick('/CareersPage')}>Careers</li>
                            <li onClick={() => handleLinkClick('/contactPage')}>Contact</li>
                        </ul>
                    </motion.div>

                    {/* Contact info Column */}
                    <motion.div className="footer-links-col contact-col" variants={fadeInUp}>
                        <h3><FontAwesomeIcon icon={faEnvelope} /> CONTACT INFO</h3>
                        <p className="contact-item">engloraytechgroup@gmail.com</p>
                        <p className="contact-item">+91 6381759909</p>
                        <p className="contact-item">+91 6366945920</p>
                        <p className="contact-item">Madurai, TamilNadu, INDIA</p>
                    </motion.div>
                </motion.div>

                <div className="footer-divider"></div>

                <motion.div
                    className="footer-bottom-container"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: false }}
                >
                    <motion.h2 className="other-links-title" variants={fadeInUp}>OTHER LINKS</motion.h2>
                    <div className="other-links-grid">
                        {/* Design Section */}
                        <motion.div className="other-links-group" variants={fadeInUp}>
                            <h4><FontAwesomeIcon icon={faPalette} /> DESIGN</h4>
                            <ul>
                                <li onClick={() => handleLinkClick('/brandingIdentityPage')}>Branding & Identity</li>
                                <li onClick={() => handleLinkClick('/graphicDesignPage')}>Graphic Design</li>
                                <li onClick={() => handleLinkClick('/uiuxDesignPage')}>UI/UX Design</li>
                            </ul>
                        </motion.div>

                        {/* Development Section */}
                        <motion.div className="other-links-group" variants={fadeInUp}>
                            <h4><FontAwesomeIcon icon={faCode} /> DEVELOPMENT</h4>
                            <ul>
                                <li onClick={() => handleLinkClick('/softwareDevelopmentPage')}>Software Development</li>
                                <li onClick={() => handleLinkClick('/erpSolutionsPage')}>ERP Solutions</li>
                            </ul>
                        </motion.div>

                        {/* Learning Section */}
                        <motion.div className="other-links-group" variants={fadeInUp}>
                            <h4><FontAwesomeIcon icon={faCircleNodes} /> LEARNING</h4>
                            <ul>
                                <li onClick={() => handleLinkClick('/allProgramsPage')}>All Programs</li>
                                <li onClick={() => handleLinkClick('/mentorshipLearningPage')}>Mentorship Learning</li>
                                <li onClick={() => handleLinkClick('/projectBasedLearningPage')}>Project Based Learning</li>
                            </ul>
                        </motion.div>

                        {/* Internships Section */}
                        <motion.div className="other-links-group" variants={fadeInUp}>
                            <h4><FontAwesomeIcon icon={faBriefcase} /> INTERNSHIPS</h4>
                            <ul>
                                <li onClick={() => handleLinkClick('/GraphicDesignerInternPage')}>Graphic Designer</li>
                                <li onClick={() => handleLinkClick('/websiteDeveloperInternPage')}>Web Developer</li>
                                <li onClick={() => handleLinkClick('/uiuxDesignerInternPage')}>UI/UX Designer</li>
                            </ul>
                        </motion.div>

                        {/* Works Section */}
                        <motion.div className="other-links-group" variants={fadeInUp}>
                            <h4><FontAwesomeIcon icon={faFolderOpen} /> WORKS</h4>
                            <ul>
                                <li onClick={() => handleLinkClick('/worksCaseStudiesPage')}>Case Studies</li>
                                <li onClick={() => handleLinkClick('/worksClientProjectsPage')}>Client Projects</li>
                                <li onClick={() => handleLinkClick('/allProjectsPage')}>Tech Group Projects</li>
                            </ul>
                        </motion.div>

                        {/* Courses Section */}
                        <motion.div className="other-links-group" variants={fadeInUp}>
                            <h4><FontAwesomeIcon icon={faBookOpen} /> COURSES</h4>
                            <ul>
                                <li onClick={() => handleLinkClick('/graphicsDesignCoursePage')}>Graphic Design Course</li>
                                <li onClick={() => handleLinkClick('/uiuxDesignCoursePage')}>UI/UX course</li>
                                <li onClick={() => handleLinkClick('/javaFullStackCourseCoursePage')}>Java Full Stack</li>
                                <li onClick={() => handleLinkClick('/drawingCoursePage')}>Drawing</li>
                                <li onClick={() => handleLinkClick('/digitalMarketingCoursePage')}>Digital Marketing</li>
                            </ul>
                        </motion.div>
                    </div>
                </motion.div>

                <div className="footer-copyright-strip">
                    <p>© 2024 ENGLORAY. All Rights Reserved.</p>
                    <div className="footer-legal-links">
                        <span onClick={() => handleLinkClick('/privacyPolicyPage')}>Privacy Policy</span>
                        <span onClick={() => handleLinkClick('/cookiesPolicyPage')}>Cookie Policy</span>
                        <span onClick={() => handleLinkClick('/termsAndServicesPage')}>Terms & Conditions</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterOne;
