import React, { useState } from 'react';
import './LearningFooter.css';
import EnrollementForm from '../EnrollementForm/EnrollementForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';

import { 
  faFacebookF, 
  faXTwitter, 
  faInstagram, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

const LearningFooter = () => {
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);

  // Social media URLs
  const socialLinks = {
    facebook: 'https://www.facebook.com/profile.php?id=61583697831413',
    twitter: 'https://x.com/engloraylearn',
    instagram: 'https://www.instagram.com/engloray.learning/',
    linkedin: 'https://www.linkedin.com/in/engloray-learning-603620391/'
  };

  const handleSocialClick = (e, platform) => {
    e.preventDefault();
    window.open(socialLinks[platform], '_blank', 'noopener,noreferrer');
  };

  const quickLinks = [
    { name: "Courses", path: "#courses" },
    { name: "Learning Programs", path: "#programs" },
    { name: "Success Stories", path: "#feedback" },
    { name: "Mentorship", path: "#programs" }
  ];

  const courses = [
    { name: "Graphic Design", path: "/graphicsDesignCoursePage" },
    { name: "UX/UI Design", path: "/uiuxDesignCoursePage" },
    { name: "Java full stack", path: "/javaFullStackCourseCoursePage" },
    { name: "Cyber Security", path: "/allCoursesPage" }
  ];

  const programs = [
    { name: "Careers", path: "/CareersPage" },
    { name: "MentorShip Learning", path: "/mentorshipLearningPage" },
    { name: "WorkShops", path: "/workshopsPage" },
    { name: "Project Learning", path: "/projectBasedLearningPage" },
  ];

  const contactUs = [
    { name: "engloraylearn@gmail.com", type: "email" },
    { name: "+91 6381759909", type: "tel" },
    { name: "+91 6369945920", type: "tel" },
    { name: "Madurai, TamilNadu, INDIA", type: "text" }
  ];

  const otherLinks = [
    {
      title: "DESIGN",
      links: [
        { name: "Graphic Design", path: "/graphicsDesignCoursePage" },
        { name: "UI/UX Design", path: "/uiuxDesignCoursePage" },
        { name: "Web Design", path: "/allCoursesPage" }
      ]
    },
    {
      title: "DEVELOPMENT",
      links: [
        { name: "Web Development", path: "/websiteDeveloperInternPage" },
        { name: "Mobile App Dev", path: "/mobileApplicationsPage" },
        { name: "Full Stack", path: "/javaFullStackCourseCoursePage" }
      ]
    },
    {
      title: "LEARNING",
      links: [
        { name: "All Programs", path: "/allProgramsPage" },
        { name: "Mentorship", path: "/mentorshipLearningPage" },
        { name: "Project Learning", path: "/projectBasedLearningPage" },
        { name: "Workshops", path: "/workshopsPage" },
        { name: "Corporate Training", path: "/corporateTraining" }
      ]
    },
    {
      title: "INTERNSHIPS",
      links: [
        { name: "Design Internship", path: "/GraphicDesignerInternPage" },
        { name: "Web Dev Internship", path: "/websiteDeveloperInternPage" },
        { name: "UI/UX Internship", path: "/uiuxDesignerInternPage" },
        { name: "Software Internship", path: "/SoftwareDeveloperInternPage" }
      ]
    },
    {
      title: "Works",
      links: [
        { name: "Case Studies", path: "/worksCaseStudiesPage" },
        { name: "Client Projects", path: "/worksClientProjectsPage" },
        { name: "Tech Group Projects", path: "/allProjectsPage" }
      ]
    },
    {
      title: "Courses",
      links: [
        { name: "Graphic Design Course", path: "/graphicsDesignCoursePage" },
        { name: "UI/UX course", path: "/uiuxDesignCoursePage" },
        { name: "Java Fullstack", path: "/javaFullStackCourseCoursePage" },
        { name: "Digital Marketing", path: "/allCoursesPage" }
      ]
    }
  ];

  const handleJoinCourse = () => {
    setShowEnrollmentForm(true);
  };

  const handleCloseEnrollment = () => {
    setShowEnrollmentForm(false);
  };

  return (
    <>
      <Helmet>
        <title>Engloray Learning</title>
        <meta name="description" content="Supports learners with tools, tips, and educational links for improvement." />
        <meta property="og:title" content="LearningFooter" />
      </Helmet>

     <footer className="learning-footer">
  <div className="learning-container">
    <motion.div 
      className="learning-footer-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Top Section - Brand and Main Nav */}
      <div className="learning-footer-top">
        <motion.div 
          className="learning-brand-col"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="learning-brand-title">Engloray Learning</h2>
          <p className="learning-brand-desc">
            Transform your career through hands-on learning, expert mentorship, and real-world project experiences.
          </p>
          <div className="learning-social-icons">
            {[
              { icon: faFacebookF, link: socialLinks.facebook, label: "facebook" },
              { icon: faXTwitter, link: socialLinks.twitter, label: "twitter" },
              { icon: faInstagram, link: socialLinks.instagram, label: "instagram" },
              { icon: faLinkedinIn, link: socialLinks.linkedin, label: "linkedin" }
            ].map((soc, i) => (
              <motion.a 
                key={i}
                href={soc.link} 
                onClick={(e) => handleSocialClick(e, soc.label)} 
                aria-label={soc.label}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FontAwesomeIcon icon={soc.icon} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Staggered Link Columns */}
        {[
          { title: "Quick Links", items: quickLinks },
          { title: "Our Courses", items: courses },
          { title: "Our Programs", items: programs }
        ].map((col, idx) => (
          <motion.div 
            key={idx} 
            className="learning-link-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + (idx * 0.1) }}
          >
            <h3 className="learning-col-title">{col.title}</h3>
            <ul className="learning-col-list">
              {col.items.map((link, i) => (
                <li key={i}><a href={link.path}>{link.name}</a></li>
              ))}
            </ul>
          </motion.div>
        ))}

        <motion.div 
          className="learning-link-col contact-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="learning-col-title">Contact Us</h3>
          <ul className="learning-col-list">
            {contactUs.map((link, idx) => (
              <li key={idx}>
                {link.type === 'email' ? (
                  <a href={`mailto:${link.name}`}>{link.name}</a>
                ) : link.type === 'tel' ? (
                  <a href={`tel:${link.name}`}>{link.name}</a>
                ) : (
                  <span>{link.name}</span>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Other Links Section */}
      <motion.div 
        className="learning-other-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <h2 className="learning-other-heading">OTHER LINKS</h2>
        <div className="learning-other-grid">
          {otherLinks.map((section, sIdx) => (
            <div key={sIdx} className="learning-other-col">
              <h4 className="learning-other-title">{section.title}</h4>
              <ul className="learning-other-list">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}><a href={link.path}>{link.name}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Join Button with Rocket Animation */}
      <div className="learning-join-section">
        <motion.button 
          className="learning-join-btn" 
          onClick={handleJoinCourse}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            style={{ display: 'inline-block', marginRight: '10px' }}
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FontAwesomeIcon icon={faRocket} className="rocket-icon" />
          </motion.div>
          JOIN A COURSE →
        </motion.button>
      </div>

      {/* Bottom Bar */}
      <div className="learning-bottom-bar">
        <div className="learning-copyright">
          © 2025 Engloray Learning. All rights reserved.
        </div>
        <div className="learning-legal-links">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((text, i) => (
            <motion.a 
              key={i} 
              href="#" 
              whileHover={{ color: '#007bff' }}
            >
              {text}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  </div>

  {/* Enrollment Form Dialog with AnimatePresence */}
  <AnimatePresence>
    {showEnrollmentForm && (
      <motion.div 
        className="learning-enrollment-dialog"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="learning-dialog-overlay" onClick={handleCloseEnrollment}></div>
        <motion.div 
          className="learning-dialog-content"
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 50 }}
        >
          <button className="learning-dialog-close" onClick={handleCloseEnrollment}>
            ×
          </button>
          <EnrollementForm onClose={handleCloseEnrollment} />
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
</footer>
    </>
  );
};

export default LearningFooter;