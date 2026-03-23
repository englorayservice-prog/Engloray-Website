import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { FaHeart } from 'react-icons/fa';
import './TSPFFooter.css';

const TSPFFooter = () => {
  const navigate = useNavigate();

  const handleServiceClick = (e) => {
    e.preventDefault();
    
    // Navigate to home page first
    navigate('/tech-group');
    
    // After navigation, scroll to service section
    // Using setTimeout to ensure navigation completes first
    setTimeout(() => {
      const serviceSection = document.getElementById('serviceSection');
      if (serviceSection) {
        serviceSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100); // Small delay to ensure page has loaded
  };

  return (
    <footer className="TSPF-footer">
      <div className="TSPF-footer-container">
        {/* Main Content Row - All sections in horizontal arrangement */}
        <div className="TSPF-main-row">
          {/* Brand Section */}
          <div className="TSPF-brand-section">
            <div className="TSPF-logo">
              <h2 className="TSPF-logo-text">ENGLORAY TECH</h2>
              <div className="TSPF-logo-icon">⚡</div>
            </div>
            <p className="TSPF-tagline">
              Building the future of tech education through innovative programs and real-world experience.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="TSPF-links-section">
            <h3 className="TSPF-section-title">QUICK LINKS</h3>
            <ul className="TSPF-links-list">
              <li>
                <a 
                  href="/" 
                  className="TSPF-link"
                  onClick={handleServiceClick}
                >
                  Service
                </a>
              </li>
              <li><a href="/worksCaseStudiesPage" className="TSPF-link">Works</a></li>
              <li><a href="/worksClientProjectsPage" className="TSPF-link">Clients</a></li>
              <li><a href="/allProgramsPage" className="TSPF-link">Interships</a></li>
            </ul>
          </div>

          {/* Programs Section */}
          <div className="TSPF-links-section">
            <h3 className="TSPF-section-title">PROGRAMS</h3>
            <ul className="TSPF-links-list">
              <li><a href="/GraphicDesignerInternPage" className="TSPF-link">Graphic Design</a></li>
              <li><a href="/websiteDeveloperInternPage" className="TSPF-link">Web Development</a></li>
              <li><a href="/uiuxDesignerInternPage" className="TSPF-link">UIUX Design</a></li>
              <li><a href="/SoftwareDeveloperInternPage" className="TSPF-link">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="TSPF-links-section">
            <h3 className="TSPF-section-title">SERVICES</h3>
            <ul className="TSPF-links-list">
              <li><a href="/brandingIdentityPage" className="TSPF-link">Branding & Identity</a></li>
              <li><a href="/uiuxDesignPage" className="TSPF-link">UI/UX</a></li>
              <li><a href="/softwareDevelopmentPage" className="TSPF-link">Software Development</a></li>
              <li><a href="/digitalMarketingServicePage" className="TSPF-link">DigitalMarketing</a></li>
              <li><a href="/saasPage" className="TSPF-link">SAAS</a></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="TSPF-contact-section">
            <h3 className="TSPF-section-title">CONTACT INFO</h3>
            <ul className="TSPF-contact-list">
              <li className="TSPF-contact-item">
                <a href="mailto:englorwytech@group@gmail.com" className="TSPF-contact-link">
                engloraytechgroup@gamil.com                
                </a>
              </li>
              <li className="TSPF-contact-item">+91 6381759909</li>
              <li className="TSPF-contact-item">+91 6369945920</li>
              <li className="TSPF-contact-item">Madurai, TamilNadu, INDIA</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="TSPF-bottom-bar">
        <div className="TSPF-bottom-content">
          <p className="TSPF-copyright">
            © 2025 Englorwy Tech Group. All rights reserved. | 
            Made with for the tech community
          </p>
          <div className="TSPF-policy-links">
            <a href="/privacyPolicyPage" className="TSPF-policy-link">Privacy Policy</a>
            <a href="/termsAndServicesPage" className="TSPF-policy-link">Terms & Services</a>
            <a href="/cookiesPolicyPage" className="TSPF-policy-link">cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TSPFFooter;