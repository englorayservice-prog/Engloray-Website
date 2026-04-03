
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Footer.css';
import ContactForm from '../../Components/ContactForm/ContactForm';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const navigate = useNavigate();
  const particleContainerRef = useRef(null);
  const [particles, setParticles] = useState([]);
  const buttonRefs = useRef([]);

  // Social media URLs
  const socialLinks = {
    facebook: ' https://www.facebook.com/profile.php?id=61583616114977',
    twitter: 'https://x.com/engloraytech',
    linkedin: 'https://www.linkedin.com/in/engloray-group-7534b6391/',
    instagram: 'https://www.instagram.com/engloray/'
  };

  // Other Links Data
  const otherLinks = [
    {
      category: 'Design',
      links: [
        { name: 'Branding & Identity', path: '/brandingIdentityPage' },
        { name: 'UI/UX Design', path: '/uiuxDesignPage' },
        { name: 'Graphic Design Course', path: '/graphicsDesignCoursePage' }
      ]
    },
    {
      category: 'Development',
      links: [
        { name: 'Software Development', path: '/softwareDevelopmentPage' },
        { name: 'ERP Solutions', path: '/erpSolutionsPage' },
        { name: 'Mobile Applications', path: '/mobileApplicationsPage' }
      ]
    },
    {
      category: 'Learning',
      links: [
        { name: 'All Programs', path: '/allProgramsPage' },
        { name: 'Mentorship Learning', path: '/mentorshipLearningPage' },
        { name: 'Project Based Learning', path: '/projectBasedLearningPage' },
        { name: 'Corporate Training', path: '/corporateTraining' }
      ]
    },
    {
      category: 'Internships',
      links: [
        { name: 'Graphic Designer', path: '/GraphicDesignerInternPage' },
        { name: 'Web Developer', path: '/websiteDeveloperInternPage' },
        { name: 'UI/UX Designer', path: '/uiuxDesignerInternPage' },
        { name: 'Software Developer', path: '/SoftwareDeveloperInternPage' }
      ]
    },
    {
      category: 'Works',
      links: [
        { name: 'Case Studies', path: '/worksCaseStudiesPage' },
        { name: 'Client Projects', path: '/worksClientProjectsPage' },
        { name: 'Tech Group Projects', path: '/allProjectsPage' },
        { name: 'Courses', path: '/allCoursesPage' }
      ]
    },
    {
      category: 'Courses',
      links: [
        { name: 'Graphic Design', path: '/graphicsDesignCoursePage' },
        { name: 'UI/UX course', path: '/uiuxDesignCoursePage' },
        { name: 'Java FullStack', path: '/javaFullStackCourseCoursePage' },
        { name: 'Digital Marketing', path: '/allCoursesPage' }
      ]
    }
  ];

  // Initialize particles
  useEffect(() => {
    if (!particleContainerRef.current) return;

    // Create floating particles
    const particleTypes = ['small', 'medium', 'large', 'glow', 'spark'];
    const newParticles = [];

    // Create 60 particles for desktop, 30 for mobile
    const particleCount = window.innerWidth < 768 ? 30 : 60;

    for (let i = 0; i < particleCount; i++) {
      const type = particleTypes[Math.floor(Math.random() * particleTypes.length)];
      const left = Math.random() * 100;
      const delay = Math.random() * 15;
      const duration = 8 + Math.random() * 12;
      const animationType = Math.floor(Math.random() * 3) + 1;
      let animation = `ff-particle-float`;

      if (type === 'spark') {
        animation = 'ff-particle-spark';
      } else if (type === 'glow') {
        animation = 'ff-particle-glow';
      } else {
        animation = `ff-particle-float-${animationType}`;
      }

      newParticles.push({
        id: i,
        type,
        left,
        delay,
        duration: type === 'spark' ? 5 + Math.random() * 5 : duration,
        animation
      });
    }

    setParticles(newParticles);

    // Create swirling particles
    const swirlContainer = document.createElement('div');
    swirlContainer.className = 'ff-swirl-container';
    particleContainerRef.current.appendChild(swirlContainer);

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'ff-swirl-particle';
      particle.style.animationDelay = `${i * 0.5}s`;
      particle.style.opacity = `${0.1 + Math.random() * 0.2}`;
      swirlContainer.appendChild(particle);
    }

    return () => {
      if (swirlContainer.parentNode) {
        swirlContainer.parentNode.removeChild(swirlContainer);
      }
    };
  }, []);

  // Button click particle effect
  const createButtonParticles = (button, count = 8) => {
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'ff-btn-particle';

      const angle = (i / count) * Math.PI * 2;
      const distance = 50 + Math.random() * 50;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;

      particle.style.setProperty('--tx', `${tx}px`);
      particle.style.setProperty('--ty', `${ty}px`);
      particle.style.left = `${centerX}px`;
      particle.style.top = `${centerY}px`;

      document.body.appendChild(particle);

      particle.style.animation = 'ff-btn-particle-burst 0.6s ease-out forwards';

      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 600);
    }
  };

  const handleContactClick = () => {
    setIsContactOpen(true);
  };

  const openWhatsApp = () => {
    const phoneNumber = '9047374263';
    const message = 'Hello! I would like to start a project with ENGLORAY.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const navigateToTechLearning = () => {
    navigate('/tech-learning');
  };

  const handleButtonClick = (e, action) => {
    createButtonParticles(e.currentTarget);
    setTimeout(() => {
      if (action === 'whatsapp') {
        openWhatsApp();
      } else if (action === 'course') {
        navigateToTechLearning();
      } else if (action === 'contact') {
        handleContactClick();
      }
    }, 300);
  };

  // Handle social media clicks
  const handleSocialClick = (e, platform) => {
    e.preventDefault();
    createButtonParticles(e.currentTarget, 6);

    setTimeout(() => {
      window.open(socialLinks[platform], '_blank', 'noopener,noreferrer');
    }, 200);
  };

  // Handle navigation
  const handleLinkClick = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <>
      <div>

        <Helmet>
          <title>Engloray</title>
          <meta name="description" content="Displays program advantages to help learners understand value before joining." />
          <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
          {/* <link rel="canonical" href="https://yourapp.com" /> */}
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Footer" />
          <meta property="og:description" content="Displays program advantages to help learners understand value before joining." />
          {/* <meta property="og:url" content="https://yourapp.com" /> */}
        </Helmet>

        <footer className="ff-footer">
          {/* CTA Section with Particles */}
          <section className="ff-cta-section">
            <div className="ff-cta-particles" ref={particleContainerRef}>
              {particles.map(particle => (
                <div
                  key={particle.id}
                  className={`ff-particle ${particle.type}`}
                  style={{
                    left: `${particle.left}%`,
                    top: '100%',
                    animation: `${particle.animation} ${particle.duration}s ease-in-out infinite`,
                    animationDelay: `${particle.delay}s`
                  }}
                />
              ))}
            </div>

            <div className="ff-cta-container">
              <div className="ff-cta-content">
                <h2>Ready to Transform Your Business or Career?</h2>
                <p>Choose your path to success with ENGLORAY</p>
                <div className="ff-cta-buttons">
                  <button
                    className="ff-cta-btn ff-primary"
                    onClick={(e) => handleButtonClick(e, 'whatsapp')}
                    ref={el => buttonRefs.current[0] = el}
                  >
                    Start a Project
                  </button>
                  <button
                    className="ff-cta-btn ff-secondary"
                    onClick={(e) => handleButtonClick(e, 'course')}
                    ref={el => buttonRefs.current[1] = el}
                  >
                    Join a Course
                  </button>
                  <button
                    className="ff-cta-btn ff-outline"
                    onClick={(e) => handleButtonClick(e, 'contact')}
                    ref={el => buttonRefs.current[2] = el}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Main Footer */}
          <div className="ff-footer-main" id="contactFooter">
            <div className="ff-footer-container">
              <div className="ff-footer-content">
                <div className="ff-footer-brand">
                  <h3>ENGLORAY</h3>
                  <p>Transforming businesses and empowering individuals through innovative digital solutions and education.</p>
                  <div className="ff-social-links">
                    <a
                      href={socialLinks.facebook}
                      aria-label="Facebook"
                      onClick={(e) => handleSocialClick(e, 'facebook')}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>

                    <a
                      href={socialLinks.twitter}
                      aria-label="Twitter"
                      onClick={(e) => handleSocialClick(e, 'twitter')}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>

                    <a
                      href={socialLinks.linkedin}
                      aria-label="LinkedIn"
                      onClick={(e) => handleSocialClick(e, 'linkedin')}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>

                    <a
                      href={socialLinks.instagram}
                      aria-label="Instagram"
                      onClick={(e) => handleSocialClick(e, 'instagram')}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="ff-footer-links">
                  <div className="ff-footer-column">
                    <h4>Services</h4>
                    <ul>
                      <li><a href="/brandingPage" onClick={(e) => handleLinkClick(e, '/brandingPage')}>Branding & Design</a></li>
                      <li><a href="/developmentPage" onClick={(e) => handleLinkClick(e, '/developmentPage')}>Web Development</a></li>
                      <li><a href="/marketingPage" onClick={(e) => handleLinkClick(e, '/marketingPage')}>Digital Marketing</a></li>
                      <li><a href="/UiUxPage" onClick={(e) => handleLinkClick(e, '/UiUxPage')}>UI/UX Design</a></li>
                    </ul>
                  </div>

                  <div className="ff-footer-column">
                    <h4>Education</h4>
                    <ul>
                      <li><a href="/allProgramsPage" onClick={(e) => handleLinkClick(e, '/allProgramsPage')}>All Programs</a></li>
                      <li><a href="/workshopsPage" onClick={(e) => handleLinkClick(e, '/workshopsPage')}>Workshops</a></li>
                      <li><a href="/corporateTraining" onClick={(e) => handleLinkClick(e, '/corporateTraining')}>Corporate Training</a></li>
                      <li><a href="/allCoursesPage" onClick={(e) => handleLinkClick(e, '/allCoursesPage')}>E-learning</a></li>
                    </ul>
                  </div>

                  <div className="ff-footer-column">
                    <h4>Company</h4>
                    <ul>
                      <li><a href="/ourStoryPage" onClick={(e) => handleLinkClick(e, '/ourStoryPage')}>About Us</a></li>
                      <li><a href="/worksCaseStudiesPage" onClick={(e) => handleLinkClick(e, '/worksCaseStudiesPage')}>Works</a></li>
                      <li><a href="/CareersPage" onClick={(e) => handleLinkClick(e, '/CareersPage')}>Careers</a></li>
                      <li><a href="#footer" onClick={handleContactClick}>Contact</a></li>
                    </ul>
                  </div>

                  <div className="ff-footer-column">
                    <h4>Contact Info</h4>
                    <div className="ff-contact-info">
                      <div className="ff-contact-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                        <span>engloray@gmail.com</span>
                      </div>
                      <div className="ff-contact-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
                        </svg>
                        <div className="ff-phone-numbers">
                          <div>+91 6381759909</div>
                          <div>+91 6369945920</div>
                        </div>
                      </div>
                      <div className="ff-contact-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                        <span>Madurai<br />TamilNadu, INDIA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Links Section - NEW ADDITION */}
              <div className="ff-other-links-section">
                <h4 className="ff-other-links-title">Other Links</h4>
                <div className="ff-other-links-grid">
                  {otherLinks.map((category, index) => (
                    <div key={index} className="ff-other-links-category">
                      <h5>{category.category}</h5>
                      <ul>
                        {category.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <a
                              href={link.path}
                              onClick={(e) => handleLinkClick(e, link.path)}
                            >
                              {link.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="ff-footer-bottom">
            <div className="ff-footer-container">
              <div className="ff-footer-bottom-content">
                <p>&copy; {currentYear} ENGLORAY. All rights reserved.</p>
                <div className="ff-footer-legal">
                  <a href="/privacyPolicyPage" onClick={(e) => handleLinkClick(e, '/privacyPolicyPage')}>Privacy Policy</a>
                  <a href="/termsAndServicesPage" onClick={(e) => handleLinkClick(e, '/termsAndServicesPage')}>Terms of Service</a>
                  <a href="/cookiesPolicyPage" onClick={(e) => handleLinkClick(e, '/cookiesPolicyPage')}>Cookie Policy</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Modal */}
          <ContactForm
            isOpen={isContactOpen}
            onClose={() => setIsContactOpen(false)}
          />
        </footer>
      </div>
    </>

  );
};

export default Footer;