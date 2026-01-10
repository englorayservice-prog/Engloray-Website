import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Helmet } from 'react-helmet';
import { 
  faRocket, 
  faUserTie, 
  faCertificate, 
  faChartLine,
  faCheckCircle,
  faPaperclip,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faPalette,
  faDesktop,
  faCode,
  faGraduationCap,
  faBuilding,
  faBookOpen,
  faUserGraduate,
  faProjectDiagram
} from '@fortawesome/free-solid-svg-icons';
import { 
  faWhatsapp,
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import './BenifitsFooter.css';

// Add only the icons that are actually used in the component
library.add(
  faRocket, faUserTie, faCertificate, faChartLine,
  faCheckCircle, faPaperclip, faEnvelope, faPhone, faMapMarkerAlt,
  faPalette, faDesktop, faCode, faGraduationCap, faBuilding,
  faBookOpen, faUserGraduate, faProjectDiagram,
  faWhatsapp, faFacebookF, faTwitter, faInstagram, faLinkedinIn
);

const BenefitsFooter = ({ onOpenInternshipForm }) => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [showInternshipForm, setShowInternshipForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    preference: '',
    resume: null
  });

  // Social media URLs
  const socialLinks = {
    facebook: 'https://www.facebook.com/englorayspacemedia/',
    twitter: 'https://x.com/engloray38720',
    instagram: 'https://www.instagram.com/engloray.techgroup/',
    linkedin: 'https://www.linkedin.com/in/engloray-tech-group-916b1b2b8/'
  };

  // Icon colors for benefits
  const benefitColors = {
    rocket: '#FF6B6B',     // Red
    userTie: '#4ECDC4',    // Teal
    certificate: '#FFD166', // Yellow
    chartLine: '#06D6A0'   // Green
  };

  const benefits = [
    {
      icon: faRocket,
      iconColor: benefitColors.rocket,
      title: "Work on live client projects",
      description: "Gain real-world experience by working on actual client projects"
    },
    {
      icon: faUserTie,
      iconColor: benefitColors.userTie,
      title: "Mentorship from professionals",
      description: "Learn from industry experts with years of experience"
    },
    {
      icon: faCertificate,
      iconColor: benefitColors.certificate,
      title: "Experience certificate",
      description: "Get certified recognition for your skills and contributions"
    },
    {
      icon: faChartLine,
      iconColor: benefitColors.chartLine,
      title: "Skill growth through Engloray Tech Group",
      description: "Continuous learning and development opportunities"
    }
  ];

  const roles = [
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "Digital Marketing"
  ];

  const handleButtonHover = (button) => {
    setHoveredButton(button);
  };

  const handleButtonLeave = () => {
    setHoveredButton(null);
  };

  const openWhatsApp = () => {
    const phoneNumber = '6381759909';
    const message = 'Hello! I would like to start a project with ENGLORAY.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleSocialClick = (e, platform) => {
    e.preventDefault();
    window.open(socialLinks[platform], '_blank', 'noopener,noreferrer');
  };

  const handleInternshipApply = () => {
    setShowInternshipForm(true);
    setSubmitSuccess(false);
    setFormData({
      name: '',
      email: '',
      role: '',
      preference: '',
      resume: null
    });
  };

  const handleCloseForm = () => {
    setShowInternshipForm(false);
    setIsSubmitting(false);
    setSubmitSuccess(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("role", formData.role);
    formDataToSend.append("mode", formData.preference);
    formDataToSend.append("resume", formData.resume);

    const response = await fetch(
      "https://localhost:8081/api/ButtonInternForm/submit",
      {
        method: "POST",
        body: formDataToSend
      }
    );

    if (!response.ok) {
      const err = await response.text();
      throw new Error(err);
    }

    setSubmitSuccess(true);
  } catch (error) {
    alert(error.message || "Submission failed");
  } finally {
    setIsSubmitting(false);
  }
};


  return (
   <>
    <div>
      <Helmet>
            <title>Engloray Tech</title>
            <meta name="description" content="Communicates core learning benefits and outcomes for every enrolled student." />
            <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
            {/* <link rel="canonical" href="https://yourapp.com" /> */}
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="BenifitsFooter" />
            <meta property="og:description" content="Communicates core learning benefits and outcomes for every enrolled student." />
            {/* <meta property="og:url" content="https://yourapp.com" /> */}
       </Helmet>

       <section className="benefits-cta-section" id="benefits">
      <div className="benefits-cta-container">
        {/* Benefits Section */}
        <div className="benefits-main-section">
          <div className="benefits-main-header">
            <span className="benefits-main-badge">Why Choose Us</span>
            <h2 className="benefits-main-title">Amazing Benefits</h2>
            <p className="benefits-main-subtitle">
              Unlock your potential with our comprehensive internship program
            </p>
          </div>

          <div className="benefits-main-grid">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="benefits-main-item"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="benefits-main-icon-wrapper">
                  <div className="benefits-main-icon">
                    <FontAwesomeIcon 
                      icon={benefit.icon}
                      style={{ 
                        color: benefit.iconColor,
                        fontSize: '2.5rem'
                      }}
                    />
                  </div>
                  <div className="benefits-main-icon-glow"></div>
                </div>
                <div className="benefits-main-content">
                  <h3 className="benefits-main-item-title">{benefit.title}</h3>
                  <p className="benefits-main-item-description">{benefit.description}</p>
                </div>
                <div className="benefits-main-hover-effect"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="benefits-cta-main-section" id='benefits-cta-main-section'>
          <div className="benefits-cta-main-content">
            <h2 className="benefits-cta-main-title">Ready to Start Your Journey?</h2>
            <p className="benefits-cta-main-subtitle">
              Transform your career with hands-on experience and professional guidance
            </p>
            
            <div className="benefits-cta-main-buttons">
              <button 
                className={`benefits-cta-main-btn benefits-primary-btn ${hoveredButton === 'project' ? 'benefits-hovered' : ''}`}
                onMouseEnter={() => handleButtonHover('project')}
                onMouseLeave={handleButtonLeave}
                onClick={openWhatsApp}
              >
                <span>
                  <FontAwesomeIcon 
                    icon={faWhatsapp}
                    style={{ 
                      color: '#ffffff',
                      fontSize: '1.2rem',
                      marginRight: '8px'
                    }}
                  />
                  Start Your Project
                </span>
                <div className="benefits-btn-shine"></div>
                <div className="benefits-btn-particles"></div>
              </button>
              
              <button 
                className={`benefits-cta-main-btn benefits-secondary-btn ${hoveredButton === 'internship' ? 'benefits-hovered' : ''}`}
                onMouseEnter={() => handleButtonHover('internship')}
                onMouseLeave={handleButtonLeave}
                onClick={handleInternshipApply}
              >
                <span>Apply for Internship</span>
                <div className="benefits-btn-shine"></div>
                <div className="benefits-btn-particles"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Internship Application Modal */}
        {showInternshipForm && (
          <div className="benefits-internship-modal-overlay">
            <div className="benefits-internship-modal">
              <div className="benefits-modal-header">
                <h3 className="benefits-modal-title">Join Our Internship Program</h3>
                <button 
                  className="benefits-modal-close"
                  onClick={handleCloseForm}
                  disabled={isSubmitting}
                >
                  ×
                </button>
              </div>

              <div className="benefits-modal-content">
                {!submitSuccess ? (
                  <form className="benefits-internship-form" onSubmit={handleSubmit}>
                    <div className="benefits-form-group">
                      <label htmlFor="name" className="benefits-form-label">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="benefits-form-input"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="benefits-form-group">
                      <label htmlFor="email" className="benefits-form-label">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="benefits-form-input"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="benefits-form-group">
                      <label htmlFor="role" className="benefits-form-label">
                        Preferred Role *
                      </label>
                      <select
                        id="role"
                        name="role"
                        className="benefits-form-select"
                        value={formData.role}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                      >
                        <option value="">Select your preferred role</option>
                        {roles.map(role => (
                          <option key={role} value={role}>
                            {role}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="benefits-form-group">
                      <label className="benefits-form-label">
                        Internship Preference *
                      </label>
                      <div className="benefits-radio-group">
                        <label className="benefits-radio-label">
                          <input
                            type="radio"
                            name="preference"
                            value="online"
                            checked={formData.preference === 'online'}
                            onChange={handleInputChange}
                            required
                            disabled={isSubmitting}
                            className="benefits-radio-input"
                          />
                          <span className="benefits-radio-custom"></span>
                          Online
                        </label>
                        <label className="benefits-radio-label">
                          <input
                            type="radio"
                            name="preference"
                            value="offline"
                            checked={formData.preference === 'offline'}
                            onChange={handleInputChange}
                            required
                            disabled={isSubmitting}
                            className="benefits-radio-input"
                          />
                          <span className="benefits-radio-custom"></span>
                          Offline
                        </label>
                      </div>
                    </div>

                    <div className="benefits-form-group">
                      <label htmlFor="resume" className="benefits-form-label">
                        Upload Resume *
                      </label>
                      <div className="benefits-file-upload">
                        <input
                          type="file"
                          id="resume"
                          name="resume"
                          className="benefits-file-input"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx"
                          required
                          disabled={isSubmitting}
                        />
                        <label htmlFor="resume" className="benefits-file-label">
                          <span className="benefits-file-icon">
                            <FontAwesomeIcon 
                              icon={faPaperclip}
                              style={{ 
                                color: '#666',
                                fontSize: '1rem'
                              }}
                            />
                          </span>
                          <span className="benefits-file-text">
                            {formData.resume ? formData.resume.name : 'Choose file (PDF, DOC)'}
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="benefits-form-actions">
                      <button
                        type="button"
                        className="benefits-form-cancel"
                        onClick={handleCloseForm}
                        disabled={isSubmitting}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="benefits-form-submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="benefits-submit-spinner"></div>
                            Submitting...
                          </>
                        ) : (
                          'Submit Application'
                        )}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="benefits-success-message">
                    <div className="benefits-success-icon">
                      <FontAwesomeIcon 
                        icon={faCheckCircle}
                        style={{ 
                          color: '#06D6A0',
                          fontSize: '3rem'
                        }}
                      />
                    </div>
                    <h4 className="benefits-success-title">Application Received!</h4>
                    <p className="benefits-success-text">
                      Thank you for your interest in our internship program. 
                      We've received your application and will review it shortly.
                    </p>
                    <p className="benefits-success-note">
                      You'll hear back from us within 3-5 business days.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Footer Section - Structured like reference image */}
        <footer className="benefits-cta-footer" id='bebefitFooter'>
          <div className="benefits-cta-footer-content">
            {/* Main Footer Content */}
            <div className="benefits-cta-footer-main">
              {/* Brand Section */}
              <div className="benefits-cta-footer-brand">
                <div className="benefits-cta-footer-logo">
                  <span className="benefits-cta-logo-icon">
                    <FontAwesomeIcon 
                      icon={faRocket}
                      style={{ 
                        color: '#ffffff',
                        fontSize: '1.5rem'
                      }}
                    />
                  </span>
                  ENGLORAY
                </div>
                <p className="benefits-cta-footer-tagline">
                  Transforming businesses and empowering individuals through innovative digital solutions and education.
                </p>
                <div className="benefits-cta-social-links">
                  <a 
                    href={socialLinks.facebook}
                    className="benefits-cta-social-link"
                    onClick={(e) => handleSocialClick(e, 'facebook')}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <span className="benefits-cta-social-icon">
                      <FontAwesomeIcon 
                        icon={faFacebookF}
                        style={{ 
                          color: '#1877F2',
                          fontSize: '1.2rem'
                        }}
                      />
                    </span>
                  </a>
                  <a 
                    href={socialLinks.twitter}
                    className="benefits-cta-social-link"
                    onClick={(e) => handleSocialClick(e, 'twitter')}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <span className="benefits-cta-social-icon">
                      <FontAwesomeIcon 
                        icon={faTwitter}
                        style={{ 
                          color: '#1DA1F2',
                          fontSize: '1.2rem'
                        }}
                      />
                    </span>
                  </a>
                  <a 
                    href={socialLinks.instagram}
                    className="benefits-cta-social-link"
                    onClick={(e) => handleSocialClick(e, 'instagram')}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <span className="benefits-cta-social-icon">
                      <FontAwesomeIcon 
                        icon={faInstagram}
                        style={{ 
                          color: '#E4405F',
                          fontSize: '1.2rem'
                        }}
                      />
                    </span>
                  </a>
                  <a 
                    href={socialLinks.linkedin}
                    className="benefits-cta-social-link"
                    onClick={(e) => handleSocialClick(e, 'linkedin')}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <span className="benefits-cta-social-icon">
                      <FontAwesomeIcon 
                        icon={faLinkedinIn}
                        style={{ 
                          color: '#0A66C2',
                          fontSize: '1.2rem'
                        }}
                      />
                    </span>
                  </a>
                </div>
              </div>

              {/* Main Links Grid (SERVICES, EDUCATION, COMPANY, CONTACT INFO) */}
              <div className="benefits-cta-footer-links">
                {/* SERVICES Column */}
                <div className="benefits-cta-footer-column">
                  <h4 className="benefits-cta-column-title">
                    <FontAwesomeIcon 
                      icon={faDesktop}
                      style={{ 
                        color: '#ffffff',
                        fontSize: '0.9rem',
                        marginRight: '8px'
                      }}
                    />
                    SERVICES
                  </h4>
                  <ul className="benefits-cta-footer-list">
                    <li><a href="/brandingIdentityPage">Branding & Design</a></li>
                    <li><a href="/softwareDevelopmentPage">software Development</a></li>
                    <li><a href="/digitalMarketingServicePage">Digital Marketing</a></li>
                    <li><a href="/uiuxDesignPage">UI/UX Design</a></li>
                  </ul>
                </div>

                {/* EDUCATION Column */}
                <div className="benefits-cta-footer-column">
                  <h4 className="benefits-cta-column-title">
                    <FontAwesomeIcon 
                      icon={faGraduationCap}
                      style={{ 
                        color: '#ffffff',
                        fontSize: '0.9rem',
                        marginRight: '8px'
                      }}
                    />
                    EDUCATION
                  </h4>
                  <ul className="benefits-cta-footer-list">
                    <li><a href="/allProgramsPage">All Programs</a></li>
                    <li><a href="/workshopsPage">Workshops</a></li>
                    <li><a href="/corporateTraining">Corporate Training</a></li>
                    <li><a href="/allCoursesPage">E-learning</a></li>
                  </ul>
                </div>

                {/* COMPANY Column */}
                <div className="benefits-cta-footer-column">
                  <h4 className="benefits-cta-column-title">
                    <FontAwesomeIcon 
                      icon={faBuilding}
                      style={{ 
                        color: '#ffffff',
                        fontSize: '0.9rem',
                        marginRight: '8px'
                      }}
                    />
                    COMPANY
                  </h4>
                  <ul className="benefits-cta-footer-list">
                    <li><a href="/ourStoryPage">About Us</a></li>
                    <li><a href="/worksCaseStudiesPage">Works</a></li>
                    <li><a href="/CareersPage">Careers</a></li>
                    <li><a href="#bebefitFooter">Contact</a></li>
                  </ul>
                </div>

                {/* CONTACT INFO Column */}
                <div className="benefits-cta-footer-column">
                  <h4 className="benefits-cta-column-title">
                    <FontAwesomeIcon 
                      icon={faEnvelope}
                      style={{ 
                        color: '#ffffff',
                        fontSize: '0.9rem',
                        marginRight: '8px'
                      }}
                    />
                    CONTACT INFO
                  </h4>
                  <ul className="benefits-cta-footer-list benefits-cta-contact-list">
                    <li>
                      {/* <FontAwesomeIcon 
                        icon={faEnvelope}
                        style={{ 
                          color: '#94a3b8',
                          fontSize: '0.8rem',
                          marginRight: '8px'
                        }}
                      /> */}
                      engloraytechgroup@gamil.com
                    </li>
                    <li>
                      {/* <FontAwesomeIcon 
                        icon={faPhone}
                        style={{ 
                          color: '#94a3b8',
                          fontSize: '0.8rem',
                          marginRight: '8px'
                        }}
                      /> */}
                      +91 6381759909
                    </li>
                    <li>
                      {/* <FontAwesomeIcon 
                        icon={faPhone}
                        style={{ 
                          color: '#94a3b8',
                          fontSize: '0.8rem',
                          marginRight: '8px'
                        }}
                      /> */}
                      +91 6366945920
                    </li>
                    <li>
                      {/* <FontAwesomeIcon 
                        icon={faMapMarkerAlt}
                        style={{ 
                          color: '#94a3b8',
                          fontSize: '0.8rem',
                          marginRight: '8px'
                        }}
                      /> */}
                      Madurai, TamilNadu, INDIA
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* OTHER LINKS Section - Separate section below main links */}
            <div className="benefits-cta-other-links-section">
              <h4 className="benefits-cta-other-links-main-title">OTHER LINKS</h4>
              <div className="benefits-cta-other-links-grid">
                {/* DESIGN Column */}
                <div className="benefits-cta-other-links-column">
                  <h5 className="benefits-cta-other-links-title">
                    <FontAwesomeIcon 
                      icon={faPalette}
                      style={{ 
                        color: '#ffffff',
                        fontSize: '0.8rem',
                        marginRight: '6px'
                      }}
                    />
                    DESIGN
                  </h5>
                  <ul className="benefits-cta-other-links-list">
                    <li><a href="/brandingIdentityPage">Branding & Identity</a></li>
                    <li><a href="/graphicsDesignCoursePage">Graphic Design</a></li>
                    <li><a href="/uiuxDesignCoursePage">UI/UX Design</a></li>
                  </ul>
                </div>

                {/* DEVELOPMENT Column */}
                <div className="benefits-cta-other-links-column">
                  <h5 className="benefits-cta-other-links-title">
                    <FontAwesomeIcon 
                      icon={faCode}
                      style={{ 
                        color: '#ffffff',
                        fontSize: '0.8rem',
                        marginRight: '6px'
                      }}
                    />
                    DEVELOPMENT
                  </h5>
                  <ul className="benefits-cta-other-links-list">
                    <li><a href="/softwareDevelopmentPage">Software Development</a></li>
                    <li><a href="/erpSolutionsPage">ERP Solutions</a></li>
                    <li><a href="/mobileApplicationsPage">Mobile Applications</a></li>
                  </ul>
                </div>

                {/* LEARNING Column */}
                <div className="benefits-cta-other-links-column">
                  <h5 className="benefits-cta-other-links-title">
                    <FontAwesomeIcon 
                      icon={faBookOpen}
                      style={{ 
                        color: '#ffffff',
                        fontSize: '0.8rem',
                        marginRight: '6px'
                      }}
                    />
                    LEARNING
                  </h5>
                  <ul className="benefits-cta-other-links-list">
                    <li><a href="/allProgramsPage">All Programs</a></li>
                    <li><a href="/mentorshipLearningPage">Mentorship Learning</a></li>
                    <li><a href="/projectBasedLearningPage">Project Based Learning</a></li>
                    <li><a href="/corporateTraining">Corporate Training</a></li>
                    <li><a href="/allCoursesPage">Courses</a></li>
                  </ul>
                </div>

                {/* INTERNSHIPS Column */}
                <div className="benefits-cta-other-links-column">
                  <h5 className="benefits-cta-other-links-title">
                    <FontAwesomeIcon 
                      icon={faUserGraduate}
                      style={{ 
                        color: '#ffffff',
                        fontSize: '0.8rem',
                        marginRight: '6px'
                      }}
                    />
                    INTERNSHIPS
                  </h5>
                  <ul className="benefits-cta-other-links-list">
                    <li><a href="/GraphicDesignerInternPage">Graphic Designer</a></li>
                    <li><a href="/websiteDeveloperInternPage">Web Developer</a></li>
                    <li><a href="/uiuxDesignerInternPage">UI/UX Designer</a></li>
                    <li><a href="/SoftwareDeveloperInternPage">Software Developer</a></li>
                  </ul>
                </div>

                {/* WORKS Column */}
                <div className="benefits-cta-other-links-column">
                  <h5 className="benefits-cta-other-links-title">
                    <FontAwesomeIcon 
                      icon={faProjectDiagram}
                      style={{ 
                        color: '#ffffff',
                        fontSize: '0.8rem',
                        marginRight: '6px'
                      }}
                    />
                    WORKS
                  </h5>
                  <ul className="benefits-cta-other-links-list">
                    <li><a href="/worksCaseStudiesPage">Case Studies</a></li>
                    <li><a href="/worksClientProjectsPage">Client Projects</a></li>
                    <li><a href="/allProjectsPage">Tech Group Projects</a></li>
                  </ul>
                </div>

                {/* COURSES Column */}
                <div className="benefits-cta-other-links-column">
                  <h5 className="benefits-cta-other-links-title">
                    <FontAwesomeIcon 
                      icon={faGraduationCap}
                      style={{ 
                        color: '#ffffff',
                        fontSize: '0.8rem',
                        marginRight: '6px'
                      }}
                    />
                    COURSES
                  </h5>
                  <ul className="benefits-cta-other-links-list">
                    <li><a href="/graphicsDesignCoursePage">Graphic Design Course</a></li>
                    <li><a href="/uiuxDesignCoursePage">UI/UX course</a></li>
                    <li><a href="/javaFullStackCourseCoursePage">Java Full Stack</a></li>
                    <li><a href="/allCoursesPage">Digital Marketing</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="benefits-cta-footer-bottom">
              <div className="benefits-cta-footer-divider">
                <div className="benefits-cta-divider-glow"></div>
              </div>
              <div className="benefits-cta-bottom-content">
                <p className="benefits-cta-copyright">
                  © 2025 ENGLORAY. All rights reserved.
                </p>
                <div className="benefits-cta-footer-badges">
                  <a href="/privacyPolicyPage" className="benefits-cta-badge">Privacy Policy</a>
                  <a href="/termsAndServicesPage" className="benefits-cta-badge">Terms of Service</a>
                  <a href="/cookiesPolicyPage" className="benefits-cta-badge">Cookie Policy</a>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="benefits-cta-floating-element benefits-cta-el-1">
            <FontAwesomeIcon 
              icon={faDesktop}
              style={{ 
                color: 'rgba(255, 255, 255, 0.08)',
                fontSize: '1.2rem'
              }}
            />
          </div>
          <div className="benefits-cta-floating-element benefits-cta-el-2">
            <FontAwesomeIcon 
              icon={faCode}
              style={{ 
                color: 'rgba(255, 255, 255, 0.08)',
                fontSize: '1.2rem'
              }}
            />
          </div>
          <div className="benefits-cta-floating-element benefits-cta-el-3">
            <FontAwesomeIcon 
              icon={faRocket}
              style={{ 
                color: 'rgba(255, 255, 255, 0.08)',
                fontSize: '1.2rem'
              }}
            />
          </div>
          <div className="benefits-cta-floating-element benefits-cta-el-4">
            <FontAwesomeIcon 
              icon={faPalette}
              style={{ 
                color: 'rgba(255, 255, 255, 0.08)',
                fontSize: '1.2rem'
              }}
            />
          </div>
        </footer>
      </div>
    </section>
    </div>
   </>
  );
};

export default BenefitsFooter;