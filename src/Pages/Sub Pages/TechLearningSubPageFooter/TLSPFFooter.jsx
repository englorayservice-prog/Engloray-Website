import React from 'react';
import './TLSPFFooter.css';

const TLSPFFooter = () => {
  return (
    <footer className="TLSPF-footer">
      <div className="TLSPF-footer-container">
        {/* Main Content Row - All sections in horizontal arrangement */}
        <div className="TLSPF-main-row">
          {/* Brand Section */}
          <div className="TLSPF-brand-section">
            <div className="TLSPF-logo">
              <h2 className="TLSPF-logo-text">ENGLORY LEARNING</h2>
              
            </div>
            <p className="TLSPF-tagline">
              Transform your career through hands-on learning, expert mentorship, and real-world project experiences.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="TLSPF-links-section">
            <h3 className="TLSPF-section-title">QUICK LINKS</h3>
            <ul className="TLSPF-links-list">
              <li><a href="/allCoursesPage" className="TLSPF-link">Courses</a></li>
              <li><a href="/projectBasedLearningPage" className="TLSPF-link">Learning Programs</a></li>
              {/* <li><a href="/" className="TLSPF-link">Success Stories</a></li> */}
              <li><a href="/mentorshipLearningPage" className="TLSPF-link">Mentorship</a></li>
            </ul>
          </div>

          {/* Courses Section */}
          <div className="TLSPF-links-section">
            <h3 className="TLSPF-section-title">OUR COURSES</h3>
            <ul className="TLSPF-links-list">
              <li><a href="/graphicsDesignCoursePage" className="TLSPF-link">Graphic Design</a></li>
              <li><a href="/uiuxDesignCoursePage" className="TLSPF-link">UI/UX Design</a></li>
              <li><a href="/javaFullStackCourseCoursePage" className="TLSPF-link">Java fullstack</a></li>
            </ul>
          </div>

          {/* Programs Section */}
          <div className="TLSPF-links-section">
            <h3 className="TLSPF-section-title">OUR PROGRAMS</h3>
            <ul className="TLSPF-links-list">
              <li><a href="/CareersPage" className="TLSPF-link">Careers</a></li>
              <li><a href="/mentorshipLearningPage" className="TLSPF-link">Mentor-Based Learning</a></li>
              <li><a href="/workshopsPage" className="TLSPF-link">WorkShops</a></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="TLSPF-contact-section">
            <h3 className="TLSPF-section-title">CONTACT US</h3>
            <ul className="TLSPF-contact-list">
              <li className="TLSPF-contact-item">
                <a href="mailto:engloreviewro@gmail.com" className="TLSPF-contact-link">
                  engloraylearn@gmail@gmail.com
                </a>
              </li>
              <li className="TLSPF-contact-item">+91 6381759909</li>
              <li className="TLSPF-contact-item">+91 6369945920</li>
              <li className="TLSPF-contact-item">Madurai, TamilNadu, INDIA</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="TLSPF-bottom-bar">
        <div className="TLSPF-bottom-content">
          <p className="TLSPF-copyright">
            © 2025 Englory Learning. All rights reserved.
          </p>
          <div className="TLSPF-policy-links">
            <a href="/privacyPolicyPage" className="TLSPF-policy-link">Privacy Policy</a>
            <a href="/termsAndServicesPage" className="TLSPF-policy-link">Terms of Service</a>
            <a href="/cookiesPolicyPage" className="TLSPF-policy-link">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TLSPFFooter;