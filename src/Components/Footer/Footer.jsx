
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
import globeBg from '../../assets/download.png';
import './Footer.css';

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
            <img src={ELogo} alt="E favicon" className="logo-img icon-mode" />
            <span className="logo-text">ENGLORAY</span>
          </div>
        </div>
      </div>

      {/* Ready to Transform Section - LEFT ALIGNED */}
      <motion.div 
        className="footer-cta-section-v3"
        style={{ backgroundImage: `url(${globeBg})` }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="footer-cta-overlay"></div>
        <div className="footer-cta-content left-align">
          <motion.h2 className="footer-cta-title" {...fadeInUp}>
            Ready to Start Your Journey?
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
          </motion.div>
        </div>
      </motion.div>

      <div className="footer-content-wrapper">
        <motion.div 
          className="footer-main-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false }}
        >
          {/* Brand/About Column */}
          <motion.div className="footer-col brand-col" variants={fadeInUp}>
            <h4 className="footer-h4">ENGLORAY.COM</h4>
            <p className="footer-desc">
              Transforming businesses and empowering individuals through innovative digital solutions and world-class education.
            </p>
            <div className="footer-social-mini">
              <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div className="footer-col" variants={fadeInUp}>
            <h4 className="footer-h4">SERVICES</h4>
            <ul>
              <li onClick={() => handleLinkClick('/brandingPage')}>Branding & Design</li>
              <li onClick={() => handleLinkClick('/developmentPage')}>Software Development</li>
              <li onClick={() => handleLinkClick('/marketingPage')}>Digital Marketing</li>
              <li onClick={() => handleLinkClick('/UiUxPage')}>UI/UX Design</li>
            </ul>
          </motion.div>

          {/* Education Column */}
          <motion.div className="footer-col" variants={fadeInUp}>
            <h4 className="footer-h4">EDUCATION</h4>
            <ul>
              <li onClick={() => handleLinkClick('/allProgramsPage')}>All Programs</li>
              <li onClick={() => handleLinkClick('/mentorshipLearningPage')}>Mentorship</li>
              <li onClick={() => handleLinkClick('/projectBasedLearningPage')}>Project Learning</li>
              <li onClick={() => handleLinkClick('/corporateTraining')}>Corporate Training</li>
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div className="footer-col" variants={fadeInUp}>
            <h4 className="footer-h4">COMPANY</h4>
            <ul>
              <li onClick={() => handleLinkClick('/ourStoryPage')}>About Us</li>
              <li onClick={() => handleLinkClick('/worksCaseStudiesPage')}>Works</li>
              <li onClick={() => handleLinkClick('/CareersPage')}>Careers</li>
              <li onClick={() => handleLinkClick('/contactSection')}>Contact</li>
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div className="footer-col" variants={fadeInUp}>
            <h4 className="footer-h4">CONTACT</h4>
            <p className="contact-item">engloraytechgroup@gmail.com</p>
            <p className="contact-item">+91 6381759909</p>
            <p className="contact-item">Madurai, TamilNadu, INDIA</p>
          </motion.div>
        </motion.div>

        {/* Other Links Section - Like FooterOne */}
        <div className="footer-other-links-divider"></div>
        <motion.div 
          className="footer-other-links-section"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false }}
        >
          <motion.h3 className="other-links-header" variants={fadeInUp}>OTHER LINKS</motion.h3>
          <div className="other-links-grid">
            <motion.div className="other-group" variants={fadeInUp}>
              <h5><FontAwesomeIcon icon={faPalette} /> DESIGN</h5>
              <ul>
                <li onClick={() => handleLinkClick('/brandingIdentityPage')}>Branding</li>
                <li onClick={() => handleLinkClick('/graphicDesignPage')}>Graphics</li>
                <li onClick={() => handleLinkClick('/uiuxDesignPage')}>UI/UX</li>
              </ul>
            </motion.div>
            <motion.div className="other-group" variants={fadeInUp}>
              <h5><FontAwesomeIcon icon={faCode} /> DEV</h5>
              <ul>
                <li onClick={() => handleLinkClick('/softwareDevelopmentPage')}>Software</li>
                <li onClick={() => handleLinkClick('/erpSolutionsPage')}>ERP</li>
              </ul>
            </motion.div>
            <motion.div className="other-group" variants={fadeInUp}>
              <h5><FontAwesomeIcon icon={faCircleNodes} /> LEARNING</h5>
              <ul>
                <li onClick={() => handleLinkClick('/allProgramsPage')}>Programs</li>
                <li onClick={() => handleLinkClick('/workshopsPage')}>Workshops</li>
              </ul>
            </motion.div>
            <motion.div className="other-group" variants={fadeInUp}>
              <h5><FontAwesomeIcon icon={faBriefcase} /> INTERN</h5>
              <ul>
                <li onClick={() => handleLinkClick('/websiteDeveloperInternPage')}>Web Dev</li>
                <li onClick={() => handleLinkClick('/uiuxDesignerInternPage')}>UI Designer</li>
              </ul>
            </motion.div>
            <motion.div className="other-group" variants={fadeInUp}>
              <h5><FontAwesomeIcon icon={faFolderOpen} /> WORKS</h5>
              <ul>
                <li onClick={() => handleLinkClick('/worksCaseStudiesPage')}>Case Studies</li>
                <li onClick={() => handleLinkClick('/allProjectsPage')}>Tech Projects</li>
              </ul>
            </motion.div>
            <motion.div className="other-group" variants={fadeInUp}>
              <h5><FontAwesomeIcon icon={faBookOpen} /> COURSES</h5>
              <ul>
                <li onClick={() => handleLinkClick('/graphicsDesignCoursePage')}>Graphics Design</li>
                <li onClick={() => handleLinkClick('/uiuxDesignCoursePage')}>UI/UX Design</li>
                <li onClick={() => handleLinkClick('/javaFullStackCourseCoursePage')}>Java Full Stack</li>
                <li onClick={() => handleLinkClick('/digitalMarketingCoursePage')}>Digital Marketing</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="copyright-info">
            Copyright ©{currentYear} All rights reserved | This template is made with <span className="heart">❤</span> by Engloray
          </div>
          <div className="legal-links">
            <span onClick={() => handleLinkClick('/termsAndServicesPage')}>Terms & Service</span>
            <span onClick={() => handleLinkClick('/privacyPolicyPage')}>Privacy Policy</span>
            <span onClick={() => handleLinkClick('/cookiesPolicyPage')}>Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;