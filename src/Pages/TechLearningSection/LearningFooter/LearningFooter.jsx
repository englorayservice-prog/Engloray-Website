import React, { useState } from 'react';
import './LearningFooter.css';
import EnrollementForm from '../EnrollementForm/EnrollementForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Helmet } from 'react-helmet';
import { faSquareFacebook, faSquareXTwitter, faSquareInstagram, faSquareLinkedin} from '@fortawesome/free-brands-svg-icons' 

const LearningFooter = () => {
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);

  // Social media URLs - same as BenefitsFooter
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
    {name: "Careers", path: "/CareersPage"},
    {name: "MentorShip Learning ", path: "/mentorshipLearningPage"},
    {name: "WorkShops", path: "/workshopsPage"},
    {name: "Project Learning", path: "/projectBasedLearningPage"},
  ];

  const Contact_us = [
    { name: "engloraylearn@gmail.com"},
    { name: "+91 6381759909"},
    { name: "+91 6369945920"},
    { name: "Madurai, TamilNadu, INDIA"}
  ];

  const handleJoinCourse = () => {
    setShowEnrollmentForm(true);
  };

  const handleCloseEnrollment = () => {
    setShowEnrollmentForm(false);
  };

  return (
    <> 
    <div>
       
       <Helmet>
            <title>Engloray Learning</title>
            <meta name="description" content="Supports learners with tools, tips, and educational links for improvement." />
            <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
            {/* <link rel="canonical" href="https://yourapp.com" /> */}
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="LearningFooter" />
            <meta property="og:description" content="Supports learners with tools, tips, and educational links for improvement." />
            {/* <meta property="og:url" content="https://yourapp.com" /> */}
         </Helmet>

      <footer className="learning-footer">
      <div className="learning-container">

        {/* Middle Section - Links & Brand */}
        <div className="learning-footer-content" id='contact'>
          
          {/* Brand & Social */}
          <div className="learning-footer-brand">
            <div className="learning-footer-logo">
              <span className="learning-logo-icon">🎓</span>
              <span className="learning-logo-text">Engloray Learning</span>
            </div>
            <p className="learning-footer-description">
              Transform your career through hands-on learning, expert mentorship, 
              and real-world project experiences.
            </p>
            
            {/* Social Links */}
            <div className="learning-social-links">
              <a 
                href={socialLinks.facebook}
                className="learning-social-link"
                onClick={(e) => handleSocialClick(e, 'facebook')}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <span className="learning-social-icon">
                    <FontAwesomeIcon 
                    icon={faSquareFacebook} 
                    style={{color: "#fff", fontSize: "1.5rem"}} 
                  />
                </span>
              </a>
              
              <a 
                href={socialLinks.twitter}
                className="learning-social-link"
                onClick={(e) => handleSocialClick(e, 'twitter')}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <span className="learning-social-icon">
                    <FontAwesomeIcon 
                    icon={faSquareXTwitter} 
                    style={{color: "#03051aff", fontSize: "1.5rem"}} 
                  />
                </span>
              </a>
              
              <a 
                href={socialLinks.instagram}
                className="learning-social-link"
                onClick={(e) => handleSocialClick(e, 'instagram')}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <span className="learning-social-icon">
                    <FontAwesomeIcon 
                    icon={faSquareInstagram} 
                    style={{color: "#170216ff", fontSize: "1.5rem"}} 
                  />
                </span>
              </a>
              
              <a 
                href={socialLinks.linkedin}
                className="learning-social-link"
                onClick={(e) => handleSocialClick(e, 'linkedin')}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <span className="learning-social-icon">
                    <FontAwesomeIcon 
                    icon={faSquareLinkedin} 
                    style={{ color: "#fff", fontSize: "1.5rem"}} 
                  />
                </span>
              </a>
            </div>
          </div>

          {/* Main Links Grid (Quick Links, Courses, Programs, Contact Us) */}
          <div className="learning-links-grid">
            {/* Quick Links */}
            <div className="learning-footer-links">
              <h4 className="learning-links-title">Quick Links</h4>
              <ul className="learning-links-list">
                {quickLinks.map((link, index) => (
                  <li key={index} className="learning-links-item">
                    <a href={link.path} className="learning-links-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses */}
            <div className="learning-footer-links">
              <h4 className="learning-links-title">Our Courses</h4>
              <ul className="learning-links-list">
                {courses.map((course, index) => (
                  <li key={index} className="learning-links-item">
                    <a href={course.path} className="learning-links-link">
                      {course.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Programs */}
            <div className="learning-footer-links">
              <h4 className="learning-links-title">Our Programs</h4>
              <ul className="learning-links-list">
                {programs.map((program, index) => (
                  <li key={index} className="learning-links-item">
                    <a href={program.path} className="learning-links-link">
                      {program.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div className="learning-footer-links">
              <h4 className="learning-links-title">Contact Us</h4>
              <ul className="learning-links-list">
                {Contact_us.map((link, index) => (
                  <li key={index} className="learning-links-item">
                    <span className="learning-contact-info">
                      {link.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* OTHER LINKS Section - Added like BenefitsFooter */}
        <div className="learning-other-links-section">
          <h4 className="learning-other-links-main-title">OTHER LINKS</h4>
          <div className="learning-other-links-grid">
            {/* DESIGN Column */}
            <div className="learning-other-links-column">
              <h5 className="learning-other-links-title">DESIGN</h5>
              <ul className="learning-other-links-list">
                <li><a href="/graphicsDesignCoursePage">Graphic Design</a></li>
                <li><a href="/uiuxDesignCoursePage">UI/UX Design</a></li>
                <li><a href="/allCoursesPage">Web Design</a></li>
              </ul>
            </div>

            {/* DEVELOPMENT Column */}
            <div className="learning-other-links-column">
              <h5 className="learning-other-links-title">DEVELOPMENT</h5>
              <ul className="learning-other-links-list">
                <li><a href="/websiteDeveloperInternPage">Web Development</a></li>
                <li><a href="/mobileApplicationsPage">Mobile App Dev</a></li>
                <li><a href="/javaFullStackCourseCoursePage">Full Stack</a></li>
              </ul>
            </div>

            {/* LEARNING Column */}
            <div className="learning-other-links-column">
              <h5 className="learning-other-links-title">LEARNING</h5>
              <ul className="learning-other-links-list">
                <li><a href="/allProgramsPage">All Programs</a></li>
                <li><a href="/mentorshipLearningPage">Mentorship</a></li>
                <li><a href="/projectBasedLearningPage">Project Learning</a></li>
                <li><a href="/workshopsPage">Workshops</a></li>
                <li><a href="/corporateTraining">Corporate Training</a></li>
              </ul>
            </div>

            {/* INTERNSHIPS Column */}
            <div className="learning-other-links-column">
              <h5 className="learning-other-links-title">INTERNSHIPS</h5>
              <ul className="learning-other-links-list">
                <li><a href="/GraphicDesignerInternPage">Design Internship</a></li>
                <li><a href="/websiteDeveloperInternPage">Web Dev Internship</a></li>
                <li><a href="/uiuxDesignerInternPage">UI/UX Internship</a></li>
                <li><a href="/SoftwareDeveloperInternPage">Software Internship</a></li>
              </ul>
            </div>

            {/* works Column */}
            <div className="learning-other-links-column">
              <h5 className="learning-other-links-title">Works</h5>
              <ul className="learning-other-links-list">
                 <li><a href="/worksCaseStudiesPage">Case Studies</a></li>
                 <li><a href="/worksClientProjectsPage">Client Projects</a></li>
                 <li><a href="/allProjectsPage">Tech Group Projects</a></li>
              </ul>
            </div>

            {/* courses Column */}
            <div className="learning-other-links-column">
              <h5 className="learning-other-links-title">Courses</h5>
              <ul className="learning-other-links-list">
                 <li><a href="/graphicsDesignCoursePage">Graphic Design Course</a></li>
                 <li><a href="/uiuxDesignCoursePage">UI/UX course</a></li>
                 <li><a href="/javaFullStackCourseCoursePage">Java Fullstack</a></li>
                 <li><a href="/allCoursesPage">Digital Marketing</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section - Full Width Join Button */}
        <div className="learning-join-fullwidth">
          <button className="learning-join-button-full" onClick={handleJoinCourse}>
            <div className="learning-join-content">
              <span className="learning-join-text">
                <i className="fas fa-rocket"></i>
                JOIN A COURSE
              </span>
              <span className="learning-join-arrow">→</span>
            </div>
          </button>
        </div>

        {/* Footer Copyright */}
        <div className="learning-footer-copyright-section">
          <div className="learning-footer-copyright">
            <p>&copy; 2025 Engloray Learning. All rights reserved.</p>
          </div>
          <div className="learning-footer-legal">
            <a href="/privacyPolicyPage" className="learning-legal-link">Privacy Policy</a>
            <a href="/termsAndServicesPage" className="learning-legal-link">Terms of Service</a>
            <a href="/cookiesPolicyPage" className="learning-legal-link">Cookie Policy</a>
          </div>
        </div>

      </div>

      {/* Enrollment Form Dialog */}
      {showEnrollmentForm && (
        <div className="learning-enrollment-dialog">
          <div className="learning-dialog-overlay" onClick={handleCloseEnrollment}></div>
          <div className="learning-dialog-content">
            <button className="learning-dialog-close" onClick={handleCloseEnrollment}>
              <i className="fas fa-times"></i>
            </button>
            <EnrollementForm onClose={handleCloseEnrollment} />
          </div>
        </div>
      )}
    </footer>
    </div>
    </>
  );
};

export default LearningFooter;