import React, { useState } from 'react';
import './MentorshipLearning.css';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import NavigationBar from '../../TechLearningSection/NavigationBar/NavigationBar';
import TLSPFFooter from '../TechLearningSubPageFooter/TLSPFFooter';
import BackToTop from '../../../Components/BackToTop/BackToTop';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  // User/People Icons
  faUserTie, faChalkboardTeacher, faUserGraduate, faUserNinja, faUserAstronaut,
  faUserSecret, faUser, faUsers, faUserCheck, faUserFriends,
  
  // Tech & Development Icons
  faRobot, faLaptopCode, faCode, faBrain, faMicrochip, faPalette,
  faPaintBrush, faDesktop, faServer, faNetworkWired, faDatabase,
  faMagic, // Added faMagic
  faLightbulb, // Added faLightbulb
  faGlobe, // Added faGlobe
  
  // Business & Career Icons
  faBriefcase, faSuitcase, faChartLine, faTrophy, faAward, faMedal,
  faGraduationCap, faCertificate, faRibbon, faStar, faStars,
  
  // Tools & Process Icons
  faCogs, faToolbox, faWrench, faClipboardList, faClipboardCheck,
  faTasks, faProjectDiagram, faMap, faRoute, faSignsPost,
  
  // Communication & Time Icons
  faComments, faCommentDots, faCommentAlt, faClock, faHourglassHalf,
  faCalendarAlt, faCalendarCheck, faCalendarDay,
  
  // Success & Achievement Icons
  faRocket, faBullseye, faFlagCheckered, faCheckCircle, faCheck,
  faThumbsUp, faHandshake, faHandHoldingHeart,
  
  // Navigation & UI Icons
  faChevronRight, faArrowRight, faArrowAltCircleRight, faExternalLinkAlt,
  faTimes, faTimesCircle,
  
  // Solid platform icons (some might need to be from brands)
  faComments as faWhatsappSolid // Using comments icon as WhatsApp alternative
} from '@fortawesome/free-solid-svg-icons';

// Import brand icons separately - only keeping what we use
import { faWhatsapp, faTelegram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const MentorshipLearning = () => {
  const [showToast, setShowToast] = useState(false);

  // Personal WhatsApp number (replace with your actual number)
  const whatsappNumber = "6381759909";
  const whatsappMessage = "Hello! I'm interested in the mentorship program. Can we schedule a consultation?";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Mentors Data with professional icons
  const mentors = [
    {
      id: 1,
      name: "Gowtham",
      role: "Career growth & Guidance",
      company: "Engloray",
      experience: "2+ years in Mentorship",
      expertise: ["Case Studies", "Portfolio", "Branding"],
      students: "200+",
      rating: "4.9",
      icon: faUserTie,
      badge: "Career Expert",
      badgeIcon: faChartLine,
      color: "#3B82F6" // Blue
    },
    {
      id: 2,
      name: "Surya",
      role: "Senior Graphic Designer",
      company: "Engloray",
      experience: "2+ years in Graphic Design",
      expertise: ["Marketing", "Branding", "Label Design"],
      students: "150+",
      rating: "4.8",
      icon: faPalette,
      badge: "Graphics Guru",
      badgeIcon: faPaintBrush,
      color: "#8B5CF6" // Purple
    },
    {
      id: 3,
      name: "Priya Nandhini",
      role: "UI/UX Design Mentor",
      company: "Engloray Tech Group",
      experience: "2+ years in UI/UX Design",
      expertise: ["UX Designs", "Wireframing", "UI Label"],
      students: "180+",
      rating: "4.9",
      icon: faDesktop,
      badge: "Design Wizard",
      badgeIcon: faMagic, // Fixed: Changed to faMagic
      color: "#10B981" // Green
    },
    {
      id: 4,
      name: "Ashwin Kumar",
      role: "AI Tools Mentor",
      company: "Engloray Tech",
      experience: "2+ years in AI Tools",
      expertise: ["AI Usage", "Creative Workflow", "AI Tools"],
      students: "250+",
      rating: "5.0",
      icon: faRobot,
      badge: "AI Master",
      badgeIcon: faBrain,
      color: "#EF4444" // Red
    },
    {
      id: 5,
      name: "Stella",
      role: "Branding & Visual Identity Mentor",
      company: "Engloray Tech",
      experience: "2+ years in Branding & Identity",
      expertise: ["Color Psychology", "Brand Strategy", "Typography"],
      students: "120+",
      rating: "4.8",
      icon: faCertificate,
      badge: "Branding Pro",
      badgeIcon: faRibbon,
      color: "#F59E0B" // Amber
    }
  ];

  // Learning Paths with professional icons
  const learningPaths = [
    {
      id: 1,
      title: "AI & Machine Learning Mastery",
      duration: "6 Months",
      level: "Advanced",
      icon: faRobot,
      iconColor: "#EF4444",
      description: "Master AI concepts with hands-on projects and real-world applications under expert guidance",
      modules: [
        "Fundamentals of ML",
        "Deep Learning Architecture",
        "Real-world AI Projects",
        "Model Deployment"
      ],
      mentorCount: "8 Industry Experts",
      projects: "15+ Capstone Projects"
    },
    {
      id: 2,
      title: "Full-Stack Development",
      duration: "4 Months",
      level: "Intermediate",
      icon: faLaptopCode,
      iconColor: "#3B82F6",
      description: "Build complete web applications from frontend to backend with personalized mentorship",
      modules: [
        "React & Node.js",
        "Database Design",
        "API Development",
        "DevOps & Deployment"
      ],
      mentorCount: "6 Senior Developers",
      projects: "12+ Real Applications"
    }
  ];

  // Success Stories with professional icons
  const successStories = [
    {
      id: 1,
      name: "Vasanth K",
      before: "Junior Developer",
      after: "Senior Software Engineer",
      timeline: "8 months",
      mentor: "Surya",
      quote: "The 1:1 mentorship transformed my career. I went from fixing bugs to designing systems.",
      achievement: "3x salary increase",
      icon: faUserNinja,
      color: "#3B82F6"
    },
    {
      id: 2,
      name: "Balaji R",
      before: "Data Analyst",
      after: "Lead Data Scientist",
      timeline: "10 months",
      mentor: "Priya Nandhini",
      quote: "My mentor's guidance on real-world projects gave me the confidence to lead my own data science team.",
      achievement: "Promoted to team lead",
      icon: faUserAstronaut,
      color: "#10B981"
    },
    {
      id: 3,
      name: "Prakash T",
      before: "Self-Taught Developer",
      after: "Frontend Engineer",
      timeline: "6 months",
      mentor: "Ashwin Kumar",
      quote: "Having a mentor who believed in me made all the difference. I landed my dream job.",
      achievement: "First tech job secured",
      icon: faUserSecret,
      color: "#8B5CF6"
    },
    {
      id: 4,
      name: "Pavithra S",
      before: "Marketing Manager",
      after: "Product Manager",
      timeline: "9 months",
      mentor: "Gowtham",
      quote: "Career transition was scary, but my mentor guided me through every step. Now I'm building products I love.",
      achievement: "Successful career switch",
      icon: faUserGraduate,
      color: "#F59E0B"
    }
  ];

  // Benefits of Mentorship with professional icons
  const benefits = [
    {
      icon: faUserFriends,
      title: "1:1 Personalized Sessions",
      description: "Weekly dedicated sessions with your mentor tailored to your goals",
      color: "#3B82F6"
    },
    {
      icon: faBullseye,
      title: "Custom Learning Roadmap",
      description: "Personalized curriculum based on your current skills and career objectives",
      color: "#10B981"
    },
    {
      icon: faProjectDiagram,
      title: "Real Project Experience",
      description: "Work on actual industry projects with mentor guidance",
      color: "#8B5CF6"
    },
    {
      icon: faGraduationCap,
      title: "Career Guidance",
      description: "Resume reviews, interview prep, and networking opportunities",
      color: "#F59E0B"
    },
    {
      icon: faClipboardCheck,
      title: "Continuous Feedback",
      description: "Regular code reviews and progress assessments",
      color: "#EF4444"
    },
    {
      icon: faGlobe, // Fixed: Changed to faGlobe
      title: "Global Network",
      description: "Connect with peers and professionals worldwide",
      color: "#06B6D4"
    }
  ];

  // Process Steps with professional icons
  const processSteps = [
    {
      step: 1,
      title: "Skill Assessment",
      description: "Evaluate your current skills and career goals",
      icon: faClipboardList,
      color: "#3B82F6"
    },
    {
      step: 2,
      title: "Mentor Matching",
      description: "Get matched with the perfect mentor for your needs",
      icon: faUserCheck,
      color: "#10B981"
    },
    {
      step: 3,
      title: "Custom Roadmap",
      description: "Create personalized learning journey with milestones",
      icon: faMap,
      color: "#8B5CF6"
    },
    {
      step: 4,
      title: "Weekly Sessions",
      description: "Regular 1:1 meetings with your mentor",
      icon: faCalendarAlt,
      color: "#F59E0B"
    },
    {
      step: 5,
      title: "Project Work",
      description: "Build real projects with expert guidance",
      icon: faRocket,
      color: "#EF4444"
    },
    {
      step: 6,
      title: "Career Launch",
      description: "Get job-ready with interview prep and networking",
      icon: faFlagCheckered,
      color: "#06B6D4"
    }
  ];

  // Stats with professional icons
  const stats = [
    {
      value: "95%",
      label: "Career Advancement",
      description: "Of learners report significant career growth",
      icon: faChartLine,
      color: "#10B981"
    },
    {
      value: "10,000+",
      label: "Hours Mentored",
      description: "Dedicated 1:1 mentorship hours delivered",
      icon: faClock,
      color: "#3B82F6"
    },
    {
      value: "500+",
      label: "Industry Mentors",
      description: "Experts from top tech companies",
      icon: faChalkboardTeacher,
      color: "#8B5CF6"
    },
    {
      value: "4.9/5",
      label: "Satisfaction Rate",
      description: "Average mentor and program rating",
      icon: faStar,
      color: "#F59E0B"
    }
  ];

  const handleWhatsAppClick = () => {
    setShowToast(true);
    setTimeout(() => {
      window.open(whatsappLink, '_blank');
      setShowToast(false);
    }, 1500);
  };

  return (
    <div className="mbl-page">
      <TopNavBar/>
      <NavigationBar/>
      {/* Toast Notification */}
      {showToast && (
        <div className="mbl-toast-overlay">
          <div className="mbl-toast">
            <div className="mbl-toast-content">
              <span className="mbl-toast-icon">
                <FontAwesomeIcon icon={faRocket} />
              </span>
              <div className="mbl-toast-text">
                <h4 className="mbl-toast-title">Redirecting to WhatsApp!</h4>
                <p className="mbl-toast-message">
                  You'll be redirected to WhatsApp to start your consultation. Looking forward to connecting with you!
                </p>
              </div>
              <button 
                className="mbl-toast-close"
                onClick={() => setShowToast(false)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <header className="mbl-hero">
        <div className="mbl-hero-background">
          <div className="mbl-hero-content">
            <div className="mbl-hero-text">
              <h1 className="mbl-hero-title">
                <span className="mbl-hero-main">Transform Your Career</span>
                <span className="mbl-hero-sub">Through Expert Mentorship</span>
              </h1>
              
              <p className="mbl-hero-description">
                1:1 mentorship with industry leaders from Google, Amazon, Microsoft, and more. 
                Get personalized guidance, work on real projects, and accelerate your career growth.
              </p>
              
              <div className="mbl-hero-stats">
                <div className="mbl-hero-stat">
                  <span className="mbl-stat-icon" style={{ color: '#3B82F6' }}>
                    <FontAwesomeIcon icon={faRocket} />
                  </span>
                  <div>
                    <div className="mbl-stat-number">10x</div>
                    <div className="mbl-stat-label">Faster Learning</div>
                  </div>
                </div>
                <div className="mbl-hero-stat">
                  <span className="mbl-stat-icon" style={{ color: '#10B981' }}>
                    <FontAwesomeIcon icon={faBriefcase} />
                  </span>
                  <div>
                    <div className="mbl-stat-number">95%</div>
                    <div className="mbl-stat-label">Career Growth</div>
                  </div>
                </div>
                <div className="mbl-hero-stat">
                  <span className="mbl-stat-icon" style={{ color: '#8B5CF6' }}>
                    <FontAwesomeIcon icon={faHandshake} />
                  </span>
                  <div>
                    <div className="mbl-stat-number">500+</div>
                    <div className="mbl-stat-label">Experts</div>
                  </div>
                </div>
              </div>
              
              <div className="mbl-hero-actions">
                <button 
                  className="mbl-hero-cta-primary"
                  onClick={handleWhatsAppClick}
                >
                  <span className="mbl-cta-text">Join Free Consultation</span>
                  <span className="mbl-cta-icon">
                    <FontAwesomeIcon icon={faComments} />
                  </span>
                </button>
              </div>
            </div>
            
            <div className="mbl-hero-visual">
              <div className="mbl-visual-container">
                <div className="mbl-visual-mentor mbl-visual-1">
                  <div className="mbl-visual-avatar">
                    <FontAwesomeIcon icon={faLaptopCode} 
                    color='#d43535ff'/>
                  </div>
                  <div className="mbl-visual-badge">Senior Developer</div>
                </div>
                <div className="mbl-visual-mentor mbl-visual-2">
                  <div className="mbl-visual-avatar">
                    <FontAwesomeIcon icon={faBrain} 
                    color='#1ecd14ff'/>
                  </div>
                  <div className="mbl-visual-badge">Data Scientist</div>
                </div>
                <div className="mbl-visual-mentor mbl-visual-3">
                  <div className="mbl-visual-avatar">
                    <FontAwesomeIcon icon={faRocket} 
                    color='#a40878ff'/>
                  </div>
                  <div className="mbl-visual-badge">Tech Lead</div>
                </div>
                <div className="mbl-visual-connection"></div>
                <div className="mbl-visual-connection"></div>
                <div className="mbl-visual-student">
                  <div className="mbl-visual-avatar">
                    <FontAwesomeIcon icon={faUser} 
                    color='#053a41ff'/>
                  </div>
                  <div className="mbl-visual-badge">You</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mbl-main">
        {/* Stats Section */}
        <section className="mbl-section mbl-stats-section">
          <div className="mbl-container">
            <div className="mbl-stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="mbl-stat-card mbl-float-animation">
                  <div className="mbl-stat-icon-wrapper">
                    <div className="mbl-stat-icon" style={{ color: stat.color }}>
                      <FontAwesomeIcon icon={stat.icon} />
                    </div>
                  </div>
                  <div className="mbl-stat-number" style={{ color: stat.color }}>{stat.value}</div>
                  <h3 className="mbl-company-stat-label">{stat.label}</h3>
                  <p className="mbl-stat-description">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mentors Section */}
        <section id="mbl-mentors" className="mbl-section mbl-mentors-section">
          <div className="mbl-container">
            <div className="mbl-section-header">
              <h2 className="mbl-section-title">Learn from Industry Leaders</h2>
              <p className="mbl-section-subtitle">Get mentored by experts from top tech companies</p>
            </div>
            
            <div className="mbl-mentors-scroll-container">
              <div className="mbl-mentors-scroll">
                {[...mentors, ...mentors].map((mentor, index) => (
                  <div key={`${mentor.id}-${index}`} className="mbl-mentor-card">
                    <div className="mbl-mentor-header">
                      <div className="mbl-mentor-avatar" style={{ color: mentor.color }}>
                        <FontAwesomeIcon icon={mentor.icon} />
                      </div>
                      <div className="mbl-mentor-badge" style={{ backgroundColor: mentor.color }}>
                        <FontAwesomeIcon icon={mentor.badgeIcon} className="mbl-badge-icon" />
                        {mentor.badge}
                      </div>
                    </div>
                    
                    <div className="mbl-mentor-info">
                      <h3 className="mbl-mentor-name">{mentor.name}</h3>
                      <p className="mbl-mentor-role">{mentor.role}</p>
                      <p className="mbl-mentor-company">{mentor.company}</p>
                      
                      <div className="mbl-mentor-experience">
                        <span className="mbl-experience-icon" style={{ color: mentor.color }}>
                          <FontAwesomeIcon icon={faClock} />
                        </span>
                        <span className="mbl-experience-text">{mentor.experience}</span>
                      </div>
                    </div>
                    
                    <div className="mbl-mentor-expertise">
                      <h4 className="mbl-expertise-title">Expertise:</h4>
                      <div className="mbl-expertise-tags">
                        {mentor.expertise.map((skill, skillIndex) => (
                          <span key={skillIndex} className="mbl-expertise-tag" style={{ backgroundColor: `${mentor.color}20`, color: mentor.color }}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mbl-mentor-stats">
                      <div className="mbl-mentor-stat">
                        <span className="mbl-stat-icon" style={{ color: mentor.color }}>
                          <FontAwesomeIcon icon={faUsers} />
                        </span>
                        <span className="mbl-stat-text">{mentor.students} students</span>
                      </div>
                      <div className="mbl-mentor-stat">
                        <span className="mbl-stat-icon" style={{ color: mentor.color }}>
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                        <span className="mbl-stat-text">{mentor.rating} rating</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Learning Paths Section */}
        <section className="mbl-section mbl-paths-section">
          <div className="mbl-container">
            <div className="mbl-section-header">
              <h2 className="mbl-section-title">Structured Learning Paths</h2>
              <p className="mbl-section-subtitle">Choose your journey with guided mentorship</p>
            </div>
            
            <div className="mbl-paths-grid">
              {learningPaths.map((path) => (
                <div key={path.id} className="mbl-path-card">
                  <div className="mbl-path-header">
                    <div className="mbl-path-icon" style={{ color: path.iconColor }}>
                      <FontAwesomeIcon icon={path.icon} />
                    </div>
                    <div className="mbl-path-level">
                      {path.level}
                    </div>
                  </div>
                  
                  <div className="mbl-path-content">
                    <h3 className="mbl-path-title">{path.title}</h3>
                    <p className="mbl-path-description">{path.description}</p>
                    
                    <div className="mbl-path-duration">
                      <span className="mbl-duration-icon" style={{ color: path.iconColor }}>
                        <FontAwesomeIcon icon={faClock} />
                      </span>
                      <span className="mbl-duration-text">{path.duration}</span>
                    </div>
                    
                    <div className="mbl-path-modules">
                      <h4 className="mbl-modules-title">What You'll Learn:</h4>
                      <ul className="mbl-modules-list">
                        {path.modules.map((module, index) => (
                          <li key={index} className="mbl-module-item">
                            <span className="mbl-module-icon" style={{ color: path.iconColor }}>
                              <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className="mbl-module-text">{module}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mbl-path-details">
                      <div className="mbl-path-detail">
                        <span className="mbl-detail-icon" style={{ color: path.iconColor }}>
                          <FontAwesomeIcon icon={faChalkboardTeacher} />
                        </span>
                        <span className="mbl-detail-text">{path.mentorCount}</span>
                      </div>
                      <div className="mbl-path-detail">
                        <span className="mbl-detail-icon" style={{ color: path.iconColor }}>
                          <FontAwesomeIcon icon={faProjectDiagram} />
                        </span>
                        <span className="mbl-detail-text">{path.projects}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mbl-section mbl-benefits-section">
          <div className="mbl-container">
            <div className="mbl-section-header">
              <h2 className="mbl-section-title">Why Mentorship Works</h2>
              <p className="mbl-section-subtitle">Accelerate your learning with personalized guidance</p>
            </div>
            
            <div className="mbl-benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="mbl-benefit-card mbl-float-animation">
                  <div className="mbl-benefit-icon-wrapper">
                    <div className="mbl-benefit-icon" style={{ color: benefit.color }}>
                      <FontAwesomeIcon icon={benefit.icon} />
                    </div>
                    <div className="mbl-benefit-glow" style={{ backgroundColor: benefit.color }}></div>
                  </div>
                  <h3 className="mbl-benefit-title">{benefit.title}</h3>
                  <p className="mbl-benefit-description">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="mbl-section mbl-process-section">
          <div className="mbl-container">
            <div className="mbl-section-header">
              <h2 className="mbl-section-title">How It Works</h2>
              <p className="mbl-section-subtitle">Your journey to career transformation</p>
            </div>
            
            <div className="mbl-process-timeline">
              {processSteps.map((step) => (
                <div key={step.step} className="mbl-process-step">
                  <div className="mbl-step-number" style={{ backgroundColor: step.color }}>
                    <span className="mbl-step-digit">{step.step}</span>
                  </div>
                  <div className="mbl-step-content">
                    <div className="mbl-step-icon" style={{ color: step.color }}>
                      <FontAwesomeIcon icon={step.icon} />
                    </div>
                    <h3 className="mbl-step-title">{step.title}</h3>
                    <p className="mbl-step-description">{step.description}</p>
                  </div>
                  {step.step < processSteps.length && (
                    <div className="mbl-step-connector" style={{ backgroundColor: step.color }}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mbl-section mbl-stories-section">
          <div className="mbl-container">
            <div className="mbl-section-header">
              <h2 className="mbl-section-title">Success Stories</h2>
              <p className="mbl-section-subtitle">Real people, real transformations</p>
            </div>
            
            <div className="mbl-stories-grid">
              {successStories.map((story) => (
                <div key={story.id} className="mbl-story-card">
                  <div className="mbl-story-avatar" style={{ color: story.color }}>
                    <FontAwesomeIcon icon={story.icon} />
                  </div>
                  
                  <div className="mbl-story-content">
                    <div className="mbl-story-header">
                      <h3 className="mbl-story-name">{story.name}</h3>
                      <div className="mbl-story-timeline">
                        <span className="mbl-timeline-icon" style={{ color: story.color }}>
                          <FontAwesomeIcon icon={faClock} />
                        </span>
                        <span className="mbl-timeline-text">{story.timeline}</span>
                      </div>
                    </div>
                    
                    <div className="mbl-story-transformation">
                      <div className="mbl-transformation-before">
                        <span className="mbl-before-text">{story.before}</span>
                      </div>
                      <div className="mbl-transformation-arrow" style={{ color: story.color }}>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </div>
                      <div className="mbl-transformation-after">
                        <span className="mbl-after-text">{story.after}</span>
                      </div>
                    </div>
                    
                    <div className="mbl-story-quote">
                      <p className="mbl-quote-text">"{story.quote}"</p>
                    </div>
                    
                    <div className="mbl-story-footer">
                      <div className="mbl-story-mentor">
                        <span className="mbl-mentor-icon" style={{ color: story.color }}>
                          <FontAwesomeIcon icon={faChalkboardTeacher} />
                        </span>
                        <span className="mbl-mentor-text">Mentor: {story.mentor}</span>
                      </div>
                      <div className="mbl-story-achievement">
                        <span className="mbl-achievement-icon" style={{ color: story.color }}>
                          <FontAwesomeIcon icon={faTrophy} />
                        </span>
                        <span className="mbl-achievement-text">{story.achievement}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mbl-section mbl-cta-section">
          <div className="mbl-cta-background"></div>
          <div className="mbl-container">
            <div className="mbl-cta-container">
              <div className="mbl-cta-content">
                <h2 className="mbl-cta-title">Ready to Transform Your Career?</h2>
                <p className="mbl-cta-subtitle">
                  Join thousands who have accelerated their careers with personalized mentorship.
                  Start with a free consultation on WhatsApp.
                </p>
                
                <div className="mbl-cta-features">
                  <div className="mbl-cta-feature">
                    <span className="mbl-feature-icon" style={{ color: '#25D366' }}>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className="mbl-feature-text">Free 30-minute consultation</span>
                  </div>
                  <div className="mbl-cta-feature">
                    <span className="mbl-feature-icon" style={{ color: '#25D366' }}>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className="mbl-feature-text">Personalized learning roadmap</span>
                  </div>
                  <div className="mbl-cta-feature">
                    <span className="mbl-feature-icon" style={{ color: '#25D366' }}>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className="mbl-feature-text">Meet your potential mentor</span>
                  </div>
                </div>
                
                <button 
                  className="mbl-cta-button"
                  onClick={handleWhatsAppClick}
                >
                  <span className="mbl-button-text">Book Free Consultation on WhatsApp</span>
                  <span className="mbl-button-icon">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </span>
                </button>
                
                <div className="mbl-cta-note">
                  <span className="mbl-note-icon" style={{ color: '#25D366' }}>
                    <FontAwesomeIcon icon={faLightbulb} /> {/* Fixed: Changed to faLightbulb */}
                  </span>
                  <span className="mbl-note-text">Direct WhatsApp consultation • 100% satisfaction guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <TLSPFFooter/>
      <BackToTop/>
    </div>
  );
};

export default MentorshipLearning;