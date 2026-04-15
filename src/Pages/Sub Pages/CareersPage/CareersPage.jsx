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
  faAward,
  faShieldAlt,
  faDatabase,
  faLeaf,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import MainPageSubFooter from '../MainPageSubFooter/MainPageSubFooter';

import avatar1 from '../../../assets/testimonials/cartoon_male_1.png';
import avatar2 from '../../../assets/testimonials/cartoon_female_1.png';
import avatar3 from '../../../assets/testimonials/cartoon_male_2.png';
import avatar4 from '../../../assets/testimonials/cartoon_female_2.png';
import avatar5 from '../../../assets/testimonials/cartoon_male_3.png';

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

  // Career paths data - 4 cards
  const careerPaths = [
    {
      title: 'Engineering & Development',
      icon: faCode,
      iconColor: '#3B82F6',
      description: 'Build scalable products using cutting-edge technologies',
      roles: [
        'Frontend Developer - Build responsive React applications',
        'Backend Engineer - Design scalable Node.js APIs',
        'DevOps Specialist - Manage cloud infrastructure'
      ],
      color: '#3B82F6',
      secondaryColor: '#8B5CF6',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/070/678/158/small/concept-of-web-development-with-connecting-icons-and-hand-touching-screen-on-dark-background-photo.jpeg'
    },
    {
      title: 'Product & Design',
      icon: faPalette,
      iconColor: '#8B5CF6',
      description: 'Shape user experiences and product strategy',
      roles: [
        'Product Manager - Lead product vision and roadmap',
        'UX Designer - Create intuitive user experiences',
        'UI Designer - Design beautiful interfaces'
      ],
      color: '#8B5CF6',
      secondaryColor: '#EC4899',
      image: 'https://karnavatiuniversity.edu.in/wp-content/uploads/2024/01/Product-Design-Development-A.jpeg'
    },
    {
      title: 'Growth & Business',
      icon: faChartLine,
      iconColor: '#10B981',
      description: 'Drive customer acquisition and business growth',
      roles: [
        'Growth Marketer - Drive user acquisition campaigns',
        'Business Development - Expand market partnerships',
        'Operations Manager - Optimize business processes'
      ],
      color: '#10B981',
      secondaryColor: '#3B82F6',
      image: 'data:image/jpeg;base64,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'
    },
    {
      title: 'Data & AI',
      icon: faDatabase,
      iconColor: '#F59E0B',
      description: 'Transform data into intelligent insights',
      roles: [
        'Data Scientist - Build predictive ML models',
        'AI Engineer - Develop intelligent AI solutions',
        'Data Analyst - Extract actionable insights'
      ],
      color: '#F59E0B',
      secondaryColor: '#EF4444',
      image: 'https://www.consultancy.nl/illustrations/news/detail/2025-02-03-033733575-De_belangrijkste_trends_in_data___AI_voor_2025.jpg?size=900/514'
    }
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

  // Culture points data - 5 cards
  const culturePoints = [
    {
      icon: faRocket,
      title: 'Move Fast & Innovate',
      description: 'We believe in rapid experimentation and learning from failures.'
    },
    {
      icon: faHandshake,
      title: 'Collaborative Environment',
      description: 'Flat hierarchy where everyone\'s voice is heard and valued.'
    },
    {
      icon: faHeart,
      title: 'Passion-Driven',
      description: 'We work on problems we\'re passionate about solving.'
    },
    {
      icon: faLeaf,
      title: 'Work-Life Balance',
      description: 'We prioritize mental health and flexible working hours.'
    },
    {
      icon: faGlobe,
      title: 'Global Impact',
      description: 'Create solutions that make a difference worldwide.'
    }
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
      experience: formData.experience,
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
      <TopNavBar />
      <TwoLineNavbar />
      {/* Progress Scroll Indicator */}
      <div className="cp-scroll-progress">
        <div className="cp-scroll-progress-bar"></div>
      </div>
      {/* Hero Section - Redesigned */}
      <section className="cp-hero-section cp-dark-bg">
        <div
          className="cp-hero-bg-image"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <div className="cp-hero-overlay"></div>
        </div>

        <div className="cp-hero-content-wrapper">
          {/* Top Section - Title, Subtitle, Button and Badge */}
          <div className="cp-hero-top">
            <h1 className="cp-hero-main-title">
              Your guided path to<br /> career success
            </h1>
            <p className="cp-hero-main-subtitle">
              Learn, develop, and gain the skills needed to move forward with confidence.
              Unlock new possibilities and shape a future that aligns with your goals.
            </p>
            <div className="cp-hero-button-group">
              <button className="cp-hero-start-btn" onClick={scrollToForm}>
                Apply Now <FontAwesomeIcon icon={faArrowDown} style={{ marginLeft: '10px' }} />
              </button>
              <div className="cp-hero-badge-new">
                <span className="cp-badge-activity">Activity</span>
                <span className="cp-badge-number">24.9</span>
              </div>
            </div>
          </div>

          {/* Subtext moved to right side above white card */}
          <div className="cp-hero-subtext-right">
            <p>Learn, develop, and gain the skills needed to move forward with confidence.
              Unlock new possibilities and shape a future that aligns with your goals.</p>
          </div>

          {/* Bottom Section - Avatar, Stats Container, Image Container, Right Card */}
          <div className="cp-hero-bottom">
            {/* Left Column - Avatar */}
            <div className="cp-hero-avatar-section">
              <div className="cp-avatar-stack">
                <img src={avatar1} alt="Avatar" className="cp-avatar" />
                <img src={avatar2} alt="Avatar" className="cp-avatar" />
                <img src={avatar3} alt="Avatar" className="cp-avatar" />
                <img src={avatar4} alt="Avatar" className="cp-avatar" />
                <img src={avatar5} alt="Avatar" className="cp-avatar" />
                {/* <div className="cp-avatar-more">+12</div> */}
              </div>
            </div>

            {/* Center Left - Stats Container with 6 Small Stats */}
            <div className="cp-hero-stats-container">
              <div className="cp-stats-grid">
                <div className="cp-stat-card">
                  <span className="cp-stat-number-large">50+</span>
                  <span className="cp-stat-label-small">OPEN POSITIONS</span>
                </div>
                <div className="cp-stat-card">
                  <span className="cp-stat-number-large">30+</span>
                  <span className="cp-stat-label-small">COUNTRIES</span>
                </div>
                <div className="cp-stat-card">
                  <span className="cp-stat-level">100+</span>
                  <span className="cp-stat-label-small">REMOTE FIRST</span>
                </div>
                <div className="cp-stat-card">
                  <span className="cp-stat-level">10K+</span>
                  <span className="cp-stat-label-small">APPLICATIONS RECEIVED</span>
                </div>
                <div className="cp-stat-card">
                  <span className="cp-stat-level">40+</span>
                  <span className="cp-stat-label-small">PROJECTS DELIVERED</span>
                </div>
                <div className="cp-stat-card">
                  <span className="cp-stat-level">4.8★</span>
                  <span className="cp-stat-label-small">TEAM RATING</span>
                </div>
              </div>
            </div>

            {/* Floating Stat Number */}
            <div className="cp-floating-stat">
              <span className="cp-floating-stat-number">95%</span>
              <span className="cp-floating-stat-label">Success Rate</span>
            </div>

            {/* Center Right - Big Image Container (Increased Size) */}
            <div className="cp-hero-image-container">
              <img
                src="https://i.pinimg.com/1200x/79/41/24/794124fd6d8cf9c37464f8f1e90b7a32.jpg"
                alt="Learning"
                className="cp-hero-big-image"
              />
            </div>

            {/* Right Side - White Card with Vertical Bar Graph */}
            <div className="cp-hero-right-card">
              <div className="cp-right-card-content">
                <h3 className="cp-right-card-title">Activity</h3>
                <div className="cp-right-card-stat">
                  <span className="cp-right-card-number">24.9</span>
                  <span className="cp-right-card-unit">k</span>
                </div>
                <div className="cp-vertical-bar-chart">
                  <div className="cp-vertical-bar-item">
                    <div className="cp-vertical-bar-bg">
                      <div className="cp-vertical-bar-fill" style={{ height: '65%' }}></div>
                    </div>
                    <div className="cp-vertical-bar-label">Mon</div>
                    <div className="cp-vertical-bar-value">65</div>
                  </div>
                  <div className="cp-vertical-bar-item">
                    <div className="cp-vertical-bar-bg">
                      <div className="cp-vertical-bar-fill" style={{ height: '78%' }}></div>
                    </div>
                    <div className="cp-vertical-bar-label">Tue</div>
                    <div className="cp-vertical-bar-value">78</div>
                  </div>
                  <div className="cp-vertical-bar-item">
                    <div className="cp-vertical-bar-bg">
                      <div className="cp-vertical-bar-fill" style={{ height: '82%' }}></div>
                    </div>
                    <div className="cp-vertical-bar-label">Wed</div>
                    <div className="cp-vertical-bar-value">82</div>
                  </div>
                  <div className="cp-vertical-bar-item">
                    <div className="cp-vertical-bar-bg">
                      <div className="cp-vertical-bar-fill" style={{ height: '58%' }}></div>
                    </div>
                    <div className="cp-vertical-bar-label">Thu</div>
                    <div className="cp-vertical-bar-value">58</div>
                  </div>
                  <div className="cp-vertical-bar-item">
                    <div className="cp-vertical-bar-bg">
                      <div className="cp-vertical-bar-fill" style={{ height: '91%' }}></div>
                    </div>
                    <div className="cp-vertical-bar-label">Fri</div>
                    <div className="cp-vertical-bar-value">91</div>
                  </div>
                  <div className="cp-vertical-bar-item">
                    <div className="cp-vertical-bar-bg">
                      <div className="cp-vertical-bar-fill" style={{ height: '45%' }}></div>
                    </div>
                    <div className="cp-vertical-bar-label">Sat</div>
                    <div className="cp-vertical-bar-value">45</div>
                  </div>
                  <div className="cp-vertical-bar-item">
                    <div className="cp-vertical-bar-bg">
                      <div className="cp-vertical-bar-fill" style={{ height: '52%' }}></div>
                    </div>
                    <div className="cp-vertical-bar-label">Sun</div>
                    <div className="cp-vertical-bar-value">52</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Paths Section - 4 Cards */}
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
                className={`cp-path-card-new ${index % 2 !== 0 ? 'cp-content-top' : ''}`}
              >
                {/* Image Section */}
                <div className="cp-card-image-container">
                  <img
                    src={path.image}
                    alt={path.title}
                    className="cp-card-image"
                  />
                </div>

                {/* Inner Content Card */}
                <div className="cp-inner-content-card">
                  <div className="cp-card-header">
                    <div className="cp-icon-circle" style={{ backgroundColor: path.iconColor }}>
                      <FontAwesomeIcon icon={path.icon} />
                    </div>
                    <h3 className="cp-card-title">{path.title}</h3>
                  </div>
                  <p className="cp-card-description">{path.description}</p>
                  <div className="cp-roles-list">
                    {path.roles.map((role, idx) => (
                      <div key={idx} className="cp-role-item">
                        <span className="cp-role-bullet">▹</span>
                        <span className="cp-role-text">{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks & Benefits Section with Marquee */}
      <section className="cp-perks-section cp-dark-bg">
        <div className="cp-section-wrapper">
          <div className="cp-section-header">
            <h2 className="cp-section-title">Perks & Benefits</h2>
            <p className="cp-section-description">
              We invest in our team's happiness, health, and professional growth with
              comprehensive benefits that support your entire journey.
            </p>
          </div>

          {/* Marquee Container for Perks Cards */}
          <div className="cp-perks-marquee">
            <div className="cp-perks-marquee-track">
              {[...Array(4)].map((_, arrayIndex) => (
                <div key={`perk-group-${arrayIndex}`} className="cp-marquee-group" style={{ display: 'flex', gap: '30px', paddingRight: '30px' }}>
                  {startupPerks.map((perk, index) => (
                    <div
                      key={`perk-${index}`}
                      className="cp-perk-card-new"
                      style={{
                        '--i': index,
                        borderColor: perk.iconColor
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
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Culture Section - Updated */}
      <section className="cp-culture-section">
        {/* Section Header with Left Title and Right Description */}
        <div className="cp-culture-header-wrapper">
          <div className="cp-culture-header-left">
            <h2 className="cp-culture-section-title">Our Culture & Values</h2>
          </div>
          <div className="cp-culture-header-right">
            <p className="cp-culture-section-subtitle">
              We believe that a great culture is the foundation of great work.
              Join a team where collaboration, innovation, and growth are at the heart of everything we do.
            </p>
          </div>
        </div>

        {/* Full Width Marquee */}
        <div className="cp-culture-marquee-wrapper">
          <div className="cp-culture-marquee-track">
            {[...Array(4)].map((_, arrayIndex) => (
              <div key={`culture-group-${arrayIndex}`} className="cp-marquee-group" style={{ display: 'flex', gap: '30px', paddingRight: '30px' }}>
                {culturePoints.map((point, index) => (
                  <div key={`point-${index}`} className="cp-culture-small-card">
                    <div className="cp-culture-small-icon">
                      <FontAwesomeIcon icon={point.icon} />
                    </div>
                    <h3 className="cp-culture-small-title">{point.title}</h3>
                    <p className="cp-culture-small-description">{point.description}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning & Development Section - Updated */}
      <section className="cp-learning-section cp-light-bg">
        {/* Section Header at Top */}
        <div className="cp-learning-section-header">
          <h2 className="cp-learning-section-title">Learning & Development</h2>
          <p className="cp-learning-section-subtitle">
            Your growth journey never stops. We provide comprehensive development
            programs tailored to your career aspirations.
          </p>
        </div>

        <div className="cp-learning-container">
          {/* Left Side - Big Container with Image */}
          <div className="cp-learning-left">
            <div className="cp-learning-big-container">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
                alt="Learning & Development"
                className="cp-learning-big-image"
              />
            </div>

            {/* Small Container - Placed Outside Big Container (Bottom Left) */}
            <div className="cp-learning-small-container">
              <div className="cp-learning-small-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
                  alt="Growth"
                  className="cp-learning-small-image"
                />
              </div>
              <div className="cp-learning-small-content">
                <h4>Continuous Growth</h4>
                <p>Empowering you to learn, grow, and excel in your career journey.</p>
              </div>
            </div>

            {/* Additional Small Container - Right Side of Big Container */}
            <div className="cp-learning-small-container-right">
              <h4>Mentorship Program</h4>
              <div className="cp-learning-small-image-wrapper-right">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
                  alt="Mentorship"
                  className="cp-learning-small-image-right"
                />
              </div>
              <p>Learn from industry experts and accelerate your career growth.</p>
            </div>
          </div>

          {/* Right Side - Cards Vertically */}
          <div className="cp-learning-right">
            <div className="cp-learning-cards-vertical">
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
                    <div className="cp-learning-card-header">
                      <div className="cp-learning-icon-container">
                        <div className="cp-learning-icon-outer">
                          <div className="cp-learning-icon-inner">
                            <FontAwesomeIcon icon={path.icon} />
                          </div>
                        </div>
                      </div>
                      <div className="cp-learning-card-header-content">
                        <h3 className="cp-learning-title">{path.title}</h3>
                        <p className="cp-learning-description">{path.description}</p>
                      </div>
                    </div>

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
        </div>
      </section>

      {/* Application Form Section - Updated */}
      <section className="cp-form-section">
        {/* Left Side Content */}
        <div className="cp-form-left-content">
          <h2 className="cp-form-contact-title">Contact Us</h2>
          <p className="cp-form-contact-subtitle">
            Get in touch with our hiring team directly to explore opportunities.
            We are always looking for passionate individuals ready to make an impact.
            Join an environment that encourages innovation and rapid growth.
          </p>

          <div className="cp-form-rating-container">
            <div className="cp-form-avatar-stack">
              <img src={avatar1} alt="Team member" className="cp-form-avatar" />
              <img src={avatar2} alt="Team member" className="cp-form-avatar" />
              <img src={avatar3} alt="Team member" className="cp-form-avatar" />
              <img src={avatar4} alt="Team member" className="cp-form-avatar" />
              <img src={avatar5} alt="Team member" className="cp-form-avatar" />
              {/* <div className="cp-form-avatar-more">+500</div> */}
            </div>
            <div className="cp-form-rating-details">
              <div className="cp-form-stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <span>4.9/5</span>
              </div>
              <p>Top Rated Workplace</p>
            </div>
          </div>
        </div>

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
                  <option value="Data Scientist">Data Scientist</option>
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
      <MainPageSubFooter />
    </div>
  );
};

export default CareersPage;
