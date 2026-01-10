import React, { useState, useEffect } from 'react';
import './CareersPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRocket,
  faLaptopCode,
  faGlobeAmericas,
  faCode,
  faPalette,
  faChartLine,
  faBolt,
  faGem,
  faHome,
  faGraduationCap,
  faClock,
  faUsers,
  faBook,
  faBrain,
  faUserCheck,
  faArrowDown,
  faInfoCircle,
  faPaperPlane,
  faCheck,
  faHandshake,
  faHeart,
  faMagic,
  faStar,
  faCrown,
  faBriefcase,
  faLightbulb,
  faTools,
  faSearch,
  faCog,
  faBullseye,
  faFlag,
  faTrophy,
  faAward
} from '@fortawesome/free-solid-svg-icons';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import MainPageSubFooter from '../MainPageSubFooter/MainPageSubFooter';

const CareersPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    experience: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Career paths data
  const careerPaths = [
    {
      title: 'Engineering & Development',
      icon: faCode,
      iconColor: '#3B82F6',
      roles: ['Frontend Developer', 'Backend Engineer', 'DevOps Specialist'],
      description: 'Build scalable products using cutting-edge technologies',
      color: '#3B82F6',
      secondaryColor: '#8B5CF6',
      details: {
        requirements: '3+ years experience in modern web development, strong problem-solving skills',
        benefits: 'Stock options, flexible hours, $2k learning budget, remote work'
      }
    },
    {
      title: 'Product & Design',
      icon: faPalette,
      iconColor: '#8B5CF6',
      roles: ['Product Manager', 'UX Designer', 'UI Designer'],
      description: 'Shape user experiences and product strategy',
      color: '#8B5CF6',
      secondaryColor: '#EC4899',
      details: {
        requirements: '2+ years in product design or management, portfolio required',
        benefits: 'Creative freedom, user impact, design conferences, flexible schedule'
      }
    },
    {
      title: 'Growth & Business',
      icon: faChartLine,
      iconColor: '#10B981',
      roles: ['Growth Marketer', 'Business Development', 'Operations Manager'],
      description: 'Drive customer acquisition and business growth',
      color: '#10B981',
      secondaryColor: '#3B82F6',
      details: {
        requirements: '3+ years in growth or business roles, proven track record',
        benefits: 'Commission structure, remote work, team events, leadership opportunities'
      }
    },
  ];

  const startupPerks = [
    { 
      icon: faBolt, 
      iconColor: '#3B82F6',
      title: 'Rapid Growth', 
      desc: 'Fast-track your career with real impact' 
    },
    { 
      icon: faGem, 
      iconColor: '#8B5CF6',
      title: 'Equity Options', 
      desc: 'Own a piece of what you build' 
    },
    { 
      icon: faHome, 
      iconColor: '#10B981',
      title: 'Remote First', 
      desc: 'Work from anywhere in the world' 
    },
    { 
      icon: faGraduationCap, 
      iconColor: '#F59E0B',
      title: 'Learning Budget', 
      desc: '$2k annual budget for courses' 
    },
    { 
      icon: faClock, 
      iconColor: '#EF4444',
      title: 'Flexible Hours', 
      desc: 'Work when you\'re most productive' 
    },
    { 
      icon: faUsers, 
      iconColor: '#8B5CF6',
      title: 'Team Events', 
      desc: 'Quarterly offsites and team-building' 
    },
  ];

  const learningPaths = [
    { 
      title: 'Accelerated Onboarding', 
      icon: faBook,
      iconColor: '#3B82F6',
      description: '2-week intensive program to get you up to speed',
      color: '#3B82F6',
      secondaryColor: '#8B5CF6',
      features: ['Mentor pairing', 'Project-based learning', 'Hands-on training']
    },
    { 
      title: 'Continuous Learning', 
      icon: faBrain,
      iconColor: '#8B5CF6',
      description: 'Never stop growing with our learning initiatives',
      color: '#8B5CF6',
      secondaryColor: '#EC4899',
      features: ['Weekly tech talks', 'Conference sponsorships', 'Certification support']
    },
    { 
      title: 'Career Progression', 
      icon: faChartLine,
      iconColor: '#10B981',
      description: 'Clear paths for advancement and skill development',
      color: '#10B981',
      secondaryColor: '#3B82F6',
      features: ['Bi-annual reviews', 'Leadership training', 'Promotion tracks']
    },
  ];

  // Particle effects for perks and culture sections
  useEffect(() => {
    const createParticles = (containerSelector, count = 20) => {
      const container = document.querySelector(containerSelector);
      if (!container) return;

      // Clear existing particles
      const existingParticles = container.querySelectorAll('.cp-particle');
      existingParticles.forEach(p => p.remove());

      for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'cp-particle';
        
        const size = Math.random() * 4 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 5;
        const opacity = Math.random() * 0.3 + 0.1;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.opacity = opacity;
        particle.style.background = containerSelector.includes('culture') ? '#8b5cf6' : '#3b82f6';
        particle.style.boxShadow = `0 0 8px ${containerSelector.includes('culture') ? '#8b5cf6' : '#3b82f6'}`;
        
        container.appendChild(particle);
      }
    };

    // Create particles for perks and culture sections
    createParticles('.cp-perks-section', 15);
    createParticles('.cp-culture-section', 12);

    // Update particles on resize
    const handleResize = () => {
      createParticles('.cp-perks-section', 15);
      createParticles('.cp-culture-section', 12);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Zoom animation for hero background
  useEffect(() => {
    const zoomInterval = setInterval(() => {
      setZoomLevel(prev => prev === 1 ? 1.1 : 1);
    }, 5000);
    
    return () => clearInterval(zoomInterval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    name: formData.name,
    email: formData.email,
    role: formData.role,
    experience:formData.experience, // IMPORTANT
    message: formData.message
  };

  try {
    console.log("Payload:", payload);

    const response = await fetch(
      "https://localhost:8081/api/careerform/submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      }
    );

    if (!response.ok) {
      const err = await response.text();
      throw new Error(err);
    }

    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      role: "",
      experience: "",
      message: ""
    });

    setTimeout(() => setSubmitted(false), 3000);
  } catch (error) {
    alert("Submission failed: " + error.message);
  }
};


  const scrollToForm = () => {
    const formSection = document.querySelector('.cp-form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="cp-careers-container">
      <TopNavBar/>
      <TwoLineNavbar/>
      {/* Progress Scroll Indicator */}
      <div className="cp-scroll-progress">
        <div className="cp-scroll-progress-bar"></div>
      </div>

      {/* Hero Section */}
      <section className="cp-hero-section cp-dark-bg">
        <div 
          className="cp-hero-bg-image"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <div className="cp-hero-overlay"></div>
        </div>
        
        <div className="cp-hero-content-wrapper">
          <div className="cp-hero-content">
            <div className="cp-hero-badge">
              <FontAwesomeIcon icon={faCrown} style={{ marginRight: '10px' }} />
              <span className="cp-badge-text">We're Hiring!</span>
            </div>
            <h1 className="cp-hero-title">
              Build the Future with 
              <span className="cp-gradient-text"> Next-Gen Tech</span>
            </h1>
            <p className="cp-hero-subtitle">
              Join our mission to revolutionize digital experiences. We're looking for passionate 
              individuals who want to make an impact through technology and innovation.
            </p>
            
            <div className="cp-hero-stats">
              <div className="cp-stat-item">
                <span className="cp-stat-number">50+</span>
                <span className="cp-stat-label">Open Positions</span>
              </div>
              <div className="cp-stat-item">
                <span className="cp-stat-number">30+</span>
                <span className="cp-stat-label">Countries</span>
              </div>
              <div className="cp-stat-item">
                <span className="cp-stat-number">100%</span>
                <span className="cp-stat-label">Remote First</span>
              </div>
            </div>
            
            <button 
              className="cp-hero-cta"
              onClick={scrollToForm}
            >
              Apply Now <FontAwesomeIcon icon={faArrowDown} className="cp-arrow-icon" style={{ marginLeft: '10px' }} />
            </button>
          </div>
          
          <div className="cp-hero-visual">
            <div className="cp-floating-element cp-floating-1">
              <FontAwesomeIcon icon={faRocket} />
            </div>
            <div className="cp-floating-element cp-floating-2">
              <FontAwesomeIcon icon={faLaptopCode} />
            </div>
            <div className="cp-floating-element cp-floating-3">
              <FontAwesomeIcon icon={faGlobeAmericas} />
            </div>
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="cp-paths-section cp-light-bg">
        <div className="cp-section-wrapper">
          <div className="cp-section-header">
            <h2 className="cp-section-title">Explore Career Paths</h2>
            <p className="cp-section-description">
              Discover opportunities across our core disciplines. Each path offers unique 
              challenges and growth opportunities.
            </p>
          </div>
          
          <div className="cp-paths-grid">
            {careerPaths.map((path, index) => (
              <div 
                key={index} 
                className="cp-path-card-new"
                style={{
                  '--path-color': path.color,
                  '--path-color-secondary': path.secondaryColor || path.color
                }}
              >
                <div className="cp-card-border-wrapper">
                  <div className="cp-card-border-animated"></div>
                </div>
                
                <div className="cp-new-card-inner">
                  <div className="cp-new-card-content">
                    <div className="cp-new-card-icon">
                      <div className="cp-icon-circle" style={{ backgroundColor: path.iconColor }}>
                        <FontAwesomeIcon icon={path.icon} />
                      </div>
                    </div>
                    
                    <div className="cp-new-card-body">
                      <h3 className="cp-new-card-title">{path.title}</h3>
                      <p className="cp-new-card-description">{path.description}</p>
                      
                      <div className="cp-roles-slider">
                        {path.roles.map((role, idx) => (
                          <span key={idx} className="cp-role-chip">
                            {role}
                          </span>
                        ))}
                      </div>
                      
                      <div className="cp-path-details">
                        <div className="cp-detail-section">
                          <h4>Requirements</h4>
                          <p className="cp-requirements">{path.details.requirements}</p>
                        </div>
                        
                        <div className="cp-detail-section">
                          <h4>Benefits</h4>
                          <p className="cp-requirements">{path.details.benefits}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks & Benefits Section with Particles */}
      <section className="cp-perks-section cp-dark-bg">
        {/* Particles will be added here by JavaScript */}
        <div className="cp-section-wrapper">
          <div className="cp-section-header">
            <h2 className="cp-section-title">Perks & Benefits</h2>
            <p className="cp-section-description">
              We invest in our team's happiness, health, and professional growth with 
              comprehensive benefits that support your entire journey.
            </p>
          </div>
          
          <div className="cp-perks-grid">
            {startupPerks.map((perk, index) => (
              <div 
                key={index} 
                className="cp-perk-card-new"
                style={{ 
                  '--i': index,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="cp-perk-icon-wrapper">
                  <div className="cp-perk-icon-ring" style={{ color: perk.iconColor, borderColor: perk.iconColor }}>
                    <FontAwesomeIcon icon={perk.icon} />
                  </div>
                </div>
                <h3 className="cp-perk-title">{perk.title}</h3>
                <p className="cp-perk-description">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture Section with Particles */}
      <section className="cp-culture-section cp-dark-bg">
        {/* Particles will be added here by JavaScript */}
        <div className="cp-section-wrapper">
          <div className="cp-culture-content">
            <div className="cp-culture-text">
              <h2 className="cp-culture-title">Our Startup Culture</h2>
              <div className="cp-culture-points">
                <div className="cp-culture-point">
                  <div className="cp-point-icon">
                    <FontAwesomeIcon icon={faRocket} />
                  </div>
                  <div>
                    <h3>Move Fast & Innovate</h3>
                    <p>We believe in rapid experimentation and learning from failures.</p>
                  </div>
                </div>
                <div className="cp-culture-point">
                  <div className="cp-point-icon">
                    <FontAwesomeIcon icon={faHandshake} />
                  </div>
                  <div>
                    <h3>Collaborative Environment</h3>
                    <p>Flat hierarchy where everyone's voice is heard and valued.</p>
                  </div>
                </div>
                <div className="cp-culture-point">
                  <div className="cp-point-icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                  <div>
                    <h3>Passion-Driven</h3>
                    <p>We work on problems we're passionate about solving.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cp-culture-visual">
              <div className="cp-culture-visual-inner">
                <div className="cp-visual-element cp-visual-1">
                  <FontAwesomeIcon icon={faMagic} />
                </div>
                <div className="cp-visual-element cp-visual-2">
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="cp-visual-element cp-visual-3">
                  <FontAwesomeIcon icon={faAward} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning & Development Section */}
      <section className="cp-learning-section cp-light-bg">
        <div className="cp-section-wrapper">
          <div className="cp-section-header">
            <h2 className="cp-section-title">Learning & Development</h2>
            <p className="cp-section-description">
              Your growth journey never stops. We provide comprehensive development 
              programs tailored to your career aspirations.
            </p>
          </div>
          
          <div className="cp-learning-grid-new">
            {learningPaths.map((path, index) => (
              <div 
                key={index} 
                className="cp-learning-card-new"
                style={{
                  '--learning-color': path.color,
                  '--learning-color-secondary': path.secondaryColor || path.color
                }}
              >
                <div className="cp-learning-border-wrapper">
                  <div className="cp-learning-border-animated"></div>
                </div>
                
                <div className="cp-learning-card-inner">
                  <div className="cp-learning-icon-container">
                    <div className="cp-learning-icon-outer">
                      <div className="cp-learning-icon-inner">
                        <FontAwesomeIcon icon={path.icon} />
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="cp-learning-title">{path.title}</h3>
                  <p className="cp-learning-description">{path.description}</p>
                  
                  <div className="cp-features-expandable">
                    <div className="cp-features-content">
                      <ul className="cp-learning-features-new">
                        {path.features.map((feature, idx) => (
                          <li key={idx} className="cp-learning-feature-new">
                            <div className="cp-feature-check">
                              <FontAwesomeIcon icon={faCheck} />
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section - FIXED HEIGHT */}
      <section className="cp-form-section">
        <div className="cp-form-container">
          <div className="cp-form-header">
            <h2 className="cp-form-title">Ready to Join Us?</h2>
            <p className="cp-form-subtitle">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>
          
          <form className="cp-career-form" onSubmit={handleSubmit}>
            <div className="cp-form-row">
              <div className="cp-form-group">
                <label className="cp-form-label" htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="cp-form-input"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="cp-form-group">
                <label className="cp-form-label" htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="cp-form-input"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            
            <div className="cp-form-row">
              <div className="cp-form-group">
                <label className="cp-form-label" htmlFor="role">Role Interested In</label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="cp-form-select"
                  required
                >
                  <option value="">Select a role</option>
                  <option value="Frontend Developer">Frontend Developer</option>
                  <option value="Backend Engineer">Backend Engineer</option>
                  <option value="Product Manager">Product Manager</option>
                  <option value="UX Designer">UX Designer</option>
                  <option value="Growth Marketer">Growth Marketer</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="cp-form-group">
                <label className="cp-form-label" htmlFor="experience">Years of Experience</label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="cp-form-select"
                  required
                >
                  <option value="">Select experience</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5+">5+ years</option>
                </select>
              </div>
            </div>
            
            <div className="cp-form-group">
              <label className="cp-form-label" htmlFor="message">Why do you want to join our startup?</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="cp-form-textarea"
                placeholder="Tell us about your passion and why you'd be a great fit..."
                rows="3"
                required
              ></textarea>
            </div>
            
            <div className="cp-form-footer">
              <div className="cp-form-note">
                <FontAwesomeIcon icon={faInfoCircle} className="cp-note-icon" />
                <span>We review every application personally within 24 hours</span>
              </div>
              <button 
                type="submit" 
                className={`cp-submit-btn ${submitted ? 'cp-submitted' : ''}`}
              >
                {submitted ? (
                  <>
                    <FontAwesomeIcon icon={faCheck} style={{ marginRight: '10px' }} /> Application Sent!
                  </>
                ) : (
                  <>
                    Submit Application <FontAwesomeIcon icon={faPaperPlane} className="cp-submit-icon" style={{ marginLeft: '10px' }} />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
      <MainPageSubFooter/>
    </div>
  );
};

export default CareersPage;