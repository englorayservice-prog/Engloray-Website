import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPageSubFooter.css';

const MainPageSubFooter = () => {
  const navigate = useNavigate();

  const handleServiceNavigation = (page) => navigate(page);
  const handleEducationNavigation = (page) => navigate(page);

  // Company section navigation
  const scrollToSection = (sectionId) => {
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  };

  const navigateToCareersPage = () => navigate('/CareersPage');
  const navigateToWorksPage = () => navigate('/worksCaseStudiesPage');
  
  // Policy navigation functions
  const navigateToPrivacyPolicy = () => navigate('/privacyPolicyPage');
  const navigateToTermsConditions = () => navigate('/termsAndServicesPage');
  const navigateToCookiePolicy = () => navigate('/cookiesPolicyPage');
  

  return (
    <footer className="mpsf-footer">
      <div className="mpsf-footer-content">
        {/* Brand Section */}
        <div className="mpsf-brand-section">
          <div className="mpsf-brand-wrapper">
            <h2 className="mpsf-footer-logo">ENGLORAY</h2>
            <p className="mpsf-footer-tagline">
              Transforming businesses and empowering individuals through innovative digital solutions and education.
            </p>
          </div>
        </div>

        {/* Navigation Columns with Contact */}
        <div className="mpsf-nav-contact-section">
          <div className="mpsf-nav-columns">
            {/* Services Column */}
            <div className="mpsf-footer-column">
              <h3 className="mpsf-column-title">SERVICES</h3>
              <ul className="mpsf-footer-links">
                <li onClick={() => handleServiceNavigation('/brandingPage')}>
                  <span>Branding & Design</span>
                </li>
                <li onClick={() => handleServiceNavigation('/developmentPage')}>
                  <span>Web Development</span>
                </li>
                <li onClick={() => handleServiceNavigation('/marketingPage')}>
                  <span>Digital Marketing</span>
                </li>
                <li onClick={() => handleServiceNavigation('/UiUxPage')}>
                  <span>UI/UX Design</span>
                </li>
                <li onClick={() => handleServiceNavigation('/mobileApplicationsPage')}>
                  <span>Mobile Applications</span>
                </li>
                <li onClick={() => handleServiceNavigation('/saasPage')}>
                  <span>SAAS Solutions</span>
                </li>
              </ul>
            </div>

            {/* Education Column */}
            <div className="mpsf-footer-column">
              <h3 className="mpsf-column-title">EDUCATION</h3>
              <ul className="mpsf-footer-links">
                <li onClick={() => handleEducationNavigation('/allProgramsPage')}>
                  <span>All Programs</span>
                </li>
                <li onClick={() => handleEducationNavigation('/workshopsPage')}>
                  <span>Workshops</span>
                </li>
                <li onClick={() => handleEducationNavigation('/corporateTraining')}>
                  <span>Corporate Training</span>
                </li>
                <li onClick={navigateToCareersPage}>
                  <span>Careers</span>
                </li>
                <li onClick={() => handleEducationNavigation('/allCoursesPage')}>
                  <span>E-learning</span>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="mpsf-footer-column">
              <h3 className="mpsf-column-title">COMPANY</h3>
              <ul className="mpsf-footer-links">
                <li onClick={() => scrollToSection('about')}>
                  <span>About Us</span>
                </li>
                <li onClick={navigateToWorksPage}>
                  <span>Works</span>
                </li>
                <li onClick={navigateToCareersPage}>
                  <span>Careers</span>
                </li>
                <li onClick={() => scrollToSection('contactFooter')}>
                  <span>Contact</span>
                </li>
              </ul>
            </div>

            {/* Contact Info Column */}
            <div className="mpsf-footer-column mpsf-contact-column">
              <h3 className="mpsf-column-title">CONTACT INFO</h3>
              <div className="mpsf-contact-details">
                <div className="mpsf-contact-item">
                  <span className="mpsf-contact-icon">✉</span>
                  <span className="mpsf-contact-text">engloray@gmail.com</span>
                </div>
                <div className="mpsf-contact-item">
                  <span className="mpsf-contact-icon">📱</span>
                  <span className="mpsf-contact-text">+91 6981759909</span>
                </div>
                <div className="mpsf-contact-item">
                  <span className="mpsf-contact-icon">📞</span>
                  <span className="mpsf-contact-text">+91 6989845920</span>
                </div>
                <div className="mpsf-contact-item">
                  <span className="mpsf-contact-icon">📍</span>
                  <span className="mpsf-contact-text">Madurai, TamilNadu, INDIA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright and Policies combined */}
      <div className="mpsf-bottom-section">
        <div className="mpsf-bottom-content">
          <p className="mpsf-copyright-text">
            © 2025 ENGLORAY. All rights reserved. I Made with ❤️ for the tech community
          </p>
          
          {/* Policies inline with copyright text */}
          <div className="mpsf-policies-inline">
            <span className="mpsf-policy-item" onClick={navigateToPrivacyPolicy}>
              Privacy Policy
            </span>
            <span className="mpsf-policy-separator"> </span>
            <span className="mpsf-policy-item" onClick={navigateToTermsConditions}>
              Terms & Conditions
            </span>
            <span className="mpsf-policy-separator"> </span>
            <span className="mpsf-policy-separator"> </span>
            <span className="mpsf-policy-item" onClick={navigateToCookiePolicy}>
              cookie Policy
            </span>
            <span className="mpsf-policy-separator"> </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainPageSubFooter;