import React, { useState } from 'react';
import './ProjectBasedLearning.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  // Project & Development Icons
  faProjectDiagram, faCodeBranch, faTasks, faClipboardCheck,
  faRocket, faPuzzlePiece, faCube, faCubes, faBoxOpen,
  faLayerGroup, faSitemap, faStream, faNetworkWired, faPaintBrush,
  
  // Tech & Tools Icons
  faLaptopCode, faCode, faDatabase, faServer, faCloud,
  faMobileAlt, faTabletAlt, faDesktop, faMicrochip,
  faRobot, faBrain, faMagic,
  
  // People & Team Icons
  faUsers, faUserFriends, faUserCheck, faUserTie,
  faChalkboardTeacher, faUserGraduate, faHandshake,
  faComments, faCommentDots,
  
  // Business & Success Icons
  faChartLine, faTrophy, faAward, faMedal, faCertificate,
  faRibbon, faStar, faStars, faFlagCheckered, faBullseye,
  
  // Tools & Process Icons
  faToolbox, faWrench, faCogs, faHammer, faTools,
  faPaintRoller, faPalette, faBrush, faRulerCombined,
  faClipboardList, faCalendarCheck, faClock,
  
  // Navigation & UI Icons
  faChevronRight, faArrowRight, faArrowAltCircleRight,
  faExternalLinkAlt, faTimes, faTimesCircle,
  faCheck, faCheckCircle, faLightbulb,
  
  // Document Icons
  faFileCode, faFileAlt, faFileInvoice,
  faBookOpen, faGraduationCap,
  
  // Shopping & E-commerce Icons
  faShoppingCart, faShoppingBag, faStore,
  
  // Bug/Testing Icons
  faBug, faExclamationTriangle, faSearch,
  
  // Briefcase for Hero Section
  faBriefcase,
  
  // Chevron Icons for View More
  faChevronDown, faChevronUp
} from '@fortawesome/free-solid-svg-icons';

// Import brand icons
import { 
  faWhatsapp, 
  faTelegram, 
  faLinkedin, 
  faGithub, 
  faFigma,
  faReact,
  faNodeJs,
  faPython,
  faAws,
  faDocker
} from '@fortawesome/free-brands-svg-icons';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import NavigationBar from '../../TechLearningSection/NavigationBar/NavigationBar';
import TLSPFFooter from '../TechLearningSubPageFooter/TLSPFFooter';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import { Helmet } from 'react-helmet';

const ProjectBasedLearning = () => {
  const [showToast, setShowToast] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  // WhatsApp configuration
  const whatsappNumber = "6381759909";
  const whatsappMessage = "Hello! I'm interested in the project-based learning program. Can we discuss project options?";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Project Experts Data
  const projectExperts = [
    {
      id: 1,
      name: "Gowtham",
      role: "Career growth & Guidance",
      company: "Engloray",
      experience: "2+ years in Mentorship",
      expertise: ["Case Studies", "Portfolio", "Branding"],
      projects: "36+",
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
      projects: "17+",
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
      projects: "9+",
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
      projects: "8+",
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
      projects: "5+",
      rating: "4.8",
      icon: faCertificate,
      badge: "Branding Pro",
      badgeIcon: faRibbon,
      color: "#F59E0B" // Amber
    }
  ];

  // Project Categories
  const projectCategories = [
    {
      id: 1,
      title: "E-Commerce Platform",
      duration: "8 Weeks",
      level: "Intermediate",
      icon: faShoppingCart,
      iconColor: "#D4A017",
      description: "Build a complete e-commerce solution with payment gateway, admin panel, and inventory management",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      deliverables: [
        "Fully functional e-commerce site",
        "Admin dashboard",
        "Payment integration",
        "Product catalog system"
      ],
      mentorCount: "3 Project Experts",
      complexity: "Advanced"
    },
    {
      id: 2,
      title: "Social Media App",
      duration: "6 Weeks",
      level: "Beginner to Intermediate",
      icon: faUsers,
      iconColor: "#FFD700",
      description: "Create a social networking application with real-time messaging and user profiles",
      technologies: ["React Native", "Firebase", "WebSockets"],
      deliverables: [
        "Mobile app with user auth",
        "Real-time chat",
        "Photo sharing",
        "User profile system"
      ],
      mentorCount: "2 Mobile Experts",
      complexity: "Intermediate"
    },
    {
      id: 3,
      title: "AI Chatbot Assistant",
      duration: "10 Weeks",
      level: "Advanced",
      icon: faRobot,
      iconColor: "#E6BE8A",
      description: "Develop an intelligent chatbot using NLP and machine learning algorithms",
      technologies: ["Python", "TensorFlow", "NLTK", "FastAPI"],
      deliverables: [
        "Trained ML model",
        "REST API for chatbot",
        "Web interface",
        "Integration examples"
      ],
      mentorCount: "4 AI Specialists",
      complexity: "Expert"
    },
    {
      id: 4,
      title: "Task Management System",
      duration: "5 Weeks",
      level: "Beginner",
      icon: faTasks,
      iconColor: "#B8860B",
      description: "Build a comprehensive task management application with team collaboration features",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      deliverables: [
        "Task CRUD operations",
        "User authentication",
        "Team management",
        "Real-time updates"
      ],
      mentorCount: "2 Full-Stack Mentors",
      complexity: "Beginner"
    }
  ];

  // Project Success Stories
  const successStories = [
    {
      id: 1,
      name: "Aravind S",
      project: "Healthcare Management System",
      timeline: "12 weeks",
      mentor: "Arun Kumar",
      quote: "Building a real healthcare system with mentor guidance gave me confidence to apply for senior roles.",
      achievement: "Landed Senior Developer role",
      salary: "80% salary increase",
      icon: faMedal,
      color: "#D4A017"
    },
    {
      id: 2,
      name: "Meena K",
      project: "E-Learning Platform",
      timeline: "10 weeks",
      mentor: "Divya Sharma",
      quote: "The project portfolio helped me switch from graphic design to product design successfully.",
      achievement: "Product Designer position",
      salary: "Promoted to Lead Designer",
      icon: faTrophy,
      color: "#FFD700"
    },
    {
      id: 3,
      name: "Karthik R",
      project: "FinTech Dashboard",
      timeline: "8 weeks",
      mentor: "Rajesh Patel",
      quote: "Completing a complex FinTech project with real data visualization made my resume stand out.",
      achievement: "Frontend Engineer at FinTech startup",
      salary: "First tech job secured",
      icon: faAward,
      color: "#E6BE8A"
    },
    {
      id: 4,
      name: "Anjali P",
      project: "AI Content Moderation",
      timeline: "14 weeks",
      mentor: "Priya Nair",
      quote: "The AI project was challenging but the step-by-step guidance made it achievable.",
      achievement: "Data Scientist role",
      salary: "3x salary increase",
      icon: faCertificate,
      color: "#B8860B"
    }
  ];

  // Project Benefits
  const benefits = [
    {
      icon: faProjectDiagram,
      title: "Real-World Projects",
      description: "Work on industry-relevant projects with real business requirements",
      color: "#D4A017"
    },
    {
      icon: faCodeBranch,
      title: "Git Portfolio",
      description: "Build an impressive GitHub portfolio with production-ready code",
      color: "#FFD700"
    },
    {
      icon: faUsers,
      title: "Team Collaboration",
      description: "Learn agile methodologies and team collaboration tools",
      color: "#E6BE8A"
    },
    {
      icon: faClipboardCheck,
      title: "Project Management",
      description: "Master project planning, tracking, and delivery processes",
      color: "#B8860B"
    },
    {
      icon: faRocket,
      title: "Deployment Experience",
      description: "Deploy projects to cloud platforms with CI/CD pipelines",
      color: "#D4A017"
    },
    {
      icon: faHandshake,
      title: "Industry Connections",
      description: "Network with professionals and potential employers",
      color: "#FFD700"
    }
  ];

  // Project Process Steps
  const processSteps = [
    {
      step: 1,
      title: "Project Selection",
      description: "Choose from 50+ real-world project templates",
      icon: faClipboardList,
      color: "#D4A017"
    },
    {
      step: 2,
      title: "Requirements Analysis",
      description: "Understand project scope and business requirements",
      icon: faFileAlt,
      color: "#FFD700"
    },
    {
      step: 3,
      title: "Technical Planning",
      description: "Design architecture and select technologies",
      icon: faSitemap,
      color: "#E6BE8A"
    },
    {
      step: 4,
      title: "Development Phase",
      description: "Code implementation with expert guidance",
      icon: faLaptopCode,
      color: "#B8860B"
    },
    {
      step: 5,
      title: "Testing & Debugging",
      description: "Learn testing methodologies and debugging techniques",
      icon: faBug,
      color: "#D4A017"
    },
    {
      step: 6,
      title: "Deployment & Showcase",
      description: "Deploy project and create portfolio presentation",
      icon: faRocket,
      color: "#FFD700"
    }
  ];

  // Project Stats
  const stats = [
    {
      value: "500+",
      label: "Projects Completed",
      description: "Real-world projects built by learners",
      icon: faProjectDiagram,
      color: "#D4A017"
    },
    {
      value: "95%",
      label: "Portfolio Success",
      description: "Of learners build impressive portfolios",
      icon: faChartLine,
      color: "#FFD700"
    },
    {
      value: "100+",
      label: "Industry Projects",
      description: "Project templates from real companies",
      icon: faCube,
      color: "#E6BE8A"
    },
    {
      value: "4.8/5",
      label: "Satisfaction Rate",
      description: "Average project mentorship rating",
      icon: faStar,
      color: "#B8860B"
    }
  ];

  // Project Technologies
  const technologies = [
    { name: "React", icon: faReact, color: "#61DAFB" },
    { name: "Node.js", icon: faNodeJs, color: "#68A063" },
    { name: "Python", icon: faPython, color: "#3776AB" },
    { name: "AWS", icon: faAws, color: "#FF9900" },
    { name: "Docker", icon: faDocker, color: "#2496ED" },
    { name: "MongoDB", icon: faDatabase, color: "#47A248" },
    { name: "Figma", icon: faFigma, color: "#F24E1E" },
    { name: "TensorFlow", icon: faBrain, color: "#FF6F00" }
  ];

  const handleWhatsAppClick = () => {
    setShowToast(true);
    setTimeout(() => {
      window.open(whatsappLink, '_blank');
      setShowToast(false);
    }, 1500);
  };

  // Get visible projects based on state
  const visibleProjects = showAllProjects ? projectCategories : projectCategories.slice(0, 2);

  return (
    <>
    <div>
      <Helmet>
            <title>Engloray learning</title>
            <meta name="description" content="Learn by doing with industry-aligned projects concepts and professional application." />
            <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
            {/* <link rel="canonical" href="https://yourapp.com" /> */}
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Your App | Config" />
            <meta property="og:description" content="Lorem Ipsum" />
            {/* <meta property="og:url" content="https://yourapp.com" /> */}
      </Helmet>
    
    <div className="spbl-page">
      <TopNavBar/>
      <NavigationBar/>
      {/* Toast Notification */}
      {showToast && (
        <div className="spbl-toast-overlay">
          <div className="spbl-toast">
            <div className="spbl-toast-content">
              <span className="spbl-toast-icon">
                <FontAwesomeIcon icon={faRocket} />
              </span>
              <div className="spbl-toast-text">
                <h4 className="spbl-toast-title">Redirecting to WhatsApp!</h4>
                <p className="spbl-toast-message">
                  You'll be redirected to WhatsApp to discuss your project ideas. Let's build something amazing!
                </p>
              </div>
              <button 
                className="spbl-toast-close"
                onClick={() => setShowToast(false)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <header className="spbl-hero">
        <div className="spbl-hero-background">
          <div className="spbl-hero-content">
            <div className="spbl-hero-text">
              <h1 className="spbl-hero-title">
                <span className="spbl-hero-main">Build Real Projects</span>
                <span className="spbl-hero-sub">Master Skills Through Hands-On Experience</span>
              </h1>
              
              <p className="spbl-hero-description">
                Learn by building real-world projects with industry experts. From concept to deployment, 
                gain practical experience that employers value. Build your portfolio while mastering in-demand skills.
              </p>
              
              <div className="spbl-hero-stats">
                <div className="spbl-hero-stat">
                  <span className="spbl-stat-icon" style={{ color: '#D4A017' }}>
                    <FontAwesomeIcon icon={faProjectDiagram} />
                  </span>
                  <div>
                    <div className="spbl-stat-number">500+</div>
                    <div className="spbl-stat-label">Projects Built</div>
                  </div>
                </div>
                <div className="spbl-hero-stat">
                  <span className="spbl-stat-icon" style={{ color: '#FFD700' }}>
                    <FontAwesomeIcon icon={faUsers} />
                  </span>
                  <div>
                    <div className="spbl-stat-number">95%</div>
                    <div className="spbl-stat-label">Career Success</div>
                  </div>
                </div>
                <div className="spbl-hero-stat">
                  <span className="spbl-stat-icon" style={{ color: '#E6BE8A' }}>
                    <FontAwesomeIcon icon={faBriefcase} />
                  </span>
                  <div>
                    <div className="spbl-stat-number">100+</div>
                    <div className="spbl-stat-label">Industry Projects</div>
                  </div>
                </div>
              </div>
              
              <div className="spbl-hero-actions">
                <button 
                  className="spbl-hero-cta-primary"
                  onClick={handleWhatsAppClick}
                >
                  <span className="spbl-cta-text">Start Your First Project</span>
                  <span className="spbl-cta-icon">
                    <FontAwesomeIcon icon={faRocket} />
                  </span>
                </button>
              </div>
            </div>
            
            <div className="spbl-hero-visual">
              <div className="spbl-visual-container">
                <div className="spbl-visual-project spbl-visual-1">
                  <div className="spbl-visual-icon">
                    <FontAwesomeIcon icon={faMobileAlt} />
                  </div>
                  <div className="spbl-visual-badge">Mobile App</div>
                </div>
                <div className="spbl-visual-project spbl-visual-2">
                  <div className="spbl-visual-icon">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </div>
                  <div className="spbl-visual-badge">E-Commerce</div>
                </div>
                <div className="spbl-visual-project spbl-visual-3">
                  <div className="spbl-visual-icon">
                    <FontAwesomeIcon icon={faRobot} />
                  </div>
                  <div className="spbl-visual-badge">AI Project</div>
                </div>
                <div className="spbl-visual-connection"></div>
                <div className="spbl-visual-connection"></div>
                <div className="spbl-visual-learner">
                  <div className="spbl-visual-icon">
                    <FontAwesomeIcon icon={faUserGraduate} />
                  </div>
                  <div className="spbl-visual-badge">You</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="spbl-main">
        {/* Stats Section */}
        <section className="spbl-section spbl-stats-section">
          <div className="spbl-container">
            <div className="spbl-stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="spbl-stat-card spbl-float-animation">
                  <div className="spbl-stat-icon-wrapper">
                    <div className="spbl-stat-icon" style={{ color: stat.color }}>
                      <FontAwesomeIcon icon={stat.icon} />
                    </div>
                  </div>
                  <div className="spbl-stat-number" style={{ color: stat.color }}>{stat.value}</div>
                  <h3 className="spbl-company-stat-label">{stat.label}</h3>
                  <p className="spbl-stat-description">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Experts Section */}
        <section id="spbl-experts" className="spbl-section spbl-experts-section">
          <div className="spbl-container">
            <div className="spbl-section-header">
              <h2 className="spbl-section-title">Learn from Project Experts</h2>
              <p className="spbl-section-subtitle">Get guidance from professionals who've built real-world applications</p>
            </div>
            
            <div className="spbl-experts-scroll-container">
              <div className="spbl-experts-scroll">
                {[...projectExperts, ...projectExperts].map((expert, index) => (
                  <div key={`${expert.id}-${index}`} className="spbl-expert-card">
                    <div className="spbl-expert-header">
                      <div className="spbl-expert-avatar" style={{ color: expert.color }}>
                        <FontAwesomeIcon icon={expert.icon} />
                      </div>
                      <div className="spbl-expert-badge" style={{ backgroundColor: expert.color }}>
                        <FontAwesomeIcon icon={expert.badgeIcon} className="spbl-badge-icon" />
                        {expert.badge}
                      </div>
                    </div>
                    
                    <div className="spbl-expert-info">
                      <h3 className="spbl-expert-name">{expert.name}</h3>
                      <p className="spbl-expert-role">{expert.role}</p>
                      <p className="spbl-expert-company">{expert.company}</p>
                      
                      <div className="spbl-expert-experience">
                        <span className="spbl-experience-icon" style={{ color: expert.color }}>
                          <FontAwesomeIcon icon={faClock} />
                        </span>
                        <span className="spbl-experience-text">{expert.experience}</span>
                      </div>
                    </div>
                    
                    <div className="spbl-expert-expertise">
                      <h4 className="spbl-expertise-title">Specialized In:</h4>
                      <div className="spbl-expertise-tags">
                        {expert.expertise.map((skill, skillIndex) => (
                          <span key={skillIndex} className="spbl-expertise-tag" style={{ backgroundColor: `${expert.color}20`, color: expert.color }}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="spbl-expert-stats">
                      <div className="spbl-expert-stat">
                        <span className="spbl-stat-icon" style={{ color: expert.color }}>
                          <FontAwesomeIcon icon={faProjectDiagram} />
                        </span>
                        <span className="spbl-stat-text">{expert.projects} projects</span>
                      </div>
                      <div className="spbl-expert-stat">
                        <span className="spbl-stat-icon" style={{ color: expert.color }}>
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                        <span className="spbl-stat-text">{expert.rating} rating</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Project Categories Section */}
        <section className="spbl-section spbl-categories-section">
          <div className="spbl-container">
            <div className="spbl-section-header">
              <h2 className="spbl-section-title">Choose Your Project</h2>
              <p className="spbl-section-subtitle">Select from diverse real-world project categories</p>
            </div>
            
            <div className="spbl-categories-grid">
              {visibleProjects.map((category) => (
                <div key={category.id} className="spbl-category-card">
                  <div className="spbl-category-header">
                    <div className="spbl-category-icon" style={{ color: category.iconColor }}>
                      <FontAwesomeIcon icon={category.icon} />
                    </div>
                    <div className="spbl-category-level">
                      {category.level}
                    </div>
                  </div>
                  
                  <div className="spbl-category-content">
                    <h3 className="spbl-category-title">{category.title}</h3>
                    <p className="spbl-category-description">{category.description}</p>
                    
                    <div className="spbl-category-duration">
                      <span className="spbl-duration-icon" style={{ color: category.iconColor }}>
                        <FontAwesomeIcon icon={faClock} />
                      </span>
                      <span className="spbl-duration-text">{category.duration}</span>
                    </div>
                    
                    <div className="spbl-category-technologies">
                      <h4 className="spbl-technologies-title">Technologies:</h4>
                      <div className="spbl-technologies-tags">
                        {category.technologies.map((tech, index) => (
                          <span key={index} className="spbl-technology-tag" style={{ backgroundColor: `${category.iconColor}20`, color: category.iconColor }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="spbl-category-deliverables">
                      <h4 className="spbl-deliverables-title">You'll Build:</h4>
                      <ul className="spbl-deliverables-list">
                        {category.deliverables.map((item, index) => (
                          <li key={index} className="spbl-deliverable-item">
                            <span className="spbl-deliverable-icon" style={{ color: category.iconColor }}>
                              <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className="spbl-deliverable-text">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="spbl-category-details">
                      <div className="spbl-category-detail">
                        <span className="spbl-detail-icon" style={{ color: category.iconColor }}>
                          <FontAwesomeIcon icon={faChalkboardTeacher} />
                        </span>
                        <span className="spbl-detail-text">{category.mentorCount}</span>
                      </div>
                      <div className="spbl-category-detail">
                        <span className="spbl-detail-icon" style={{ color: category.iconColor }}>
                          <FontAwesomeIcon icon={faCogs} />
                        </span>
                        <span className="spbl-detail-text">{category.complexity}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View More Button */}
            <div className="spbl-view-more-container">
              <button 
                className="spbl-view-more-btn"
                onClick={() => setShowAllProjects(!showAllProjects)}
              >
                <span className="spbl-view-more-text">
                  {showAllProjects ? 'View Less' : `View More Projects (${projectCategories.length - 2} more)`}
                </span>
                <span className="spbl-view-more-icon">
                  <FontAwesomeIcon icon={showAllProjects ? faChevronUp : faChevronDown} />
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="spbl-section spbl-benefits-section">
          <div className="spbl-container">
            <div className="spbl-section-header">
              <h2 className="spbl-section-title">Why Project-Based Learning Works</h2>
              <p className="spbl-section-subtitle">Build skills employers actually look for</p>
            </div>
            
            <div className="spbl-benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="spbl-benefit-card spbl-float-animation">
                  <div className="spbl-benefit-icon-wrapper">
                    <div className="spbl-benefit-icon" style={{ color: benefit.color }}>
                      <FontAwesomeIcon icon={benefit.icon} />
                    </div>
                    <div className="spbl-benefit-glow" style={{ backgroundColor: benefit.color }}></div>
                  </div>
                  <h3 className="spbl-benefit-title">{benefit.title}</h3>
                  <p className="spbl-benefit-description">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="spbl-section spbl-process-section">
          <div className="spbl-container">
            <div className="spbl-section-header">
              <h2 className="spbl-section-title">Project Development Process</h2>
              <p className="spbl-section-subtitle">Step-by-step guidance from idea to deployment</p>
            </div>
            
            <div className="spbl-process-timeline">
              {processSteps.map((step) => (
                <div key={step.step} className="spbl-process-step">
                  <div className="spbl-step-number" style={{ backgroundColor: step.color }}>
                    <span className="spbl-step-digit">{step.step}</span>
                  </div>
                  <div className="spbl-step-content">
                    <div className="spbl-step-icon" style={{ color: step.color }}>
                      <FontAwesomeIcon icon={step.icon} />
                    </div>
                    <h3 className="spbl-step-title">{step.title}</h3>
                    <p className="spbl-step-description">{step.description}</p>
                  </div>
                  {step.step < processSteps.length && (
                    <div className="spbl-step-connector" style={{ backgroundColor: step.color }}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Stack */}
        <section className="spbl-section spbl-tech-section">
          <div className="spbl-container">
            <div className="spbl-section-header">
              <h2 className="spbl-section-title">Master In-Demand Technologies</h2>
              <p className="spbl-section-subtitle">Learn technologies that companies actually use</p>
            </div>
            
            <div className="spbl-tech-grid">
              {technologies.map((tech, index) => (
                <div key={index} className="spbl-tech-card">
                  <div className="spbl-tech-icon" style={{ color: tech.color }}>
                    <FontAwesomeIcon icon={tech.icon} />
                  </div>
                  <h3 className="spbl-tech-name">{tech.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="spbl-section spbl-stories-section">
          <div className="spbl-container">
            <div className="spbl-section-header">
              <h2 className="spbl-section-title">Project Success Stories</h2>
              <p className="spbl-section-subtitle">See how project experience transformed careers</p>
            </div>
            
            <div className="spbl-stories-grid">
              {successStories.map((story) => (
                <div key={story.id} className="spbl-story-card">
                  <div className="spbl-story-avatar" style={{ color: story.color }}>
                    <FontAwesomeIcon icon={story.icon} />
                  </div>
                  
                  <div className="spbl-story-content">
                    <div className="spbl-story-header">
                      <h3 className="spbl-story-name">{story.name}</h3>
                      <div className="spbl-story-project">
                        <span className="spbl-project-icon" style={{ color: story.color }}>
                          <FontAwesomeIcon icon={faProjectDiagram} />
                        </span>
                        <span className="spbl-project-text">{story.project}</span>
                      </div>
                    </div>
                    
                    <div className="spbl-story-timeline">
                      <span className="spbl-timeline-icon" style={{ color: story.color }}>
                        <FontAwesomeIcon icon={faClock} />
                      </span>
                      <span className="spbl-timeline-text">Completed in {story.timeline}</span>
                    </div>
                    
                    <div className="spbl-story-quote">
                      <p className="spbl-quote-text">"{story.quote}"</p>
                    </div>
                    
                    <div className="spbl-story-footer">
                      <div className="spbl-story-mentor">
                        <span className="spbl-mentor-icon" style={{ color: story.color }}>
                          <FontAwesomeIcon icon={faChalkboardTeacher} />
                        </span>
                        <span className="spbl-mentor-text">Mentor: {story.mentor}</span>
                      </div>
                      <div className="spbl-story-achievement">
                        <span className="spbl-achievement-icon" style={{ color: story.color }}>
                          <FontAwesomeIcon icon={faTrophy} />
                        </span>
                        <span className="spbl-achievement-text">{story.achievement}</span>
                      </div>
                      <div className="spbl-story-salary">
                        <span className="spbl-salary-icon" style={{ color: story.color }}>
                          <FontAwesomeIcon icon={faChartLine} />
                        </span>
                        <span className="spbl-salary-text">{story.salary}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="spbl-section spbl-cta-section">
          <div className="spbl-cta-background"></div>
          <div className="spbl-container">
            <div className="spbl-cta-container">
              <div className="spbl-cta-content">
                <h2 className="spbl-cta-title">Ready to Build Your Portfolio?</h2>
                <p className="spbl-cta-subtitle">
                  Start building real projects today. Get expert guidance, build your GitHub portfolio, 
                  and accelerate your career growth with hands-on experience.
                </p>
                
                <div className="spbl-cta-features">
                  <div className="spbl-cta-feature">
                    <span className="spbl-feature-icon" style={{ color: '#D4A017' }}>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className="spbl-feature-text">Free project consultation</span>
                  </div>
                  <div className="spbl-cta-feature">
                    <span className="spbl-feature-icon" style={{ color: '#D4A017' }}>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className="spbl-feature-text">Choose from 50+ project templates</span>
                  </div>
                  <div className="spbl-cta-feature">
                    <span className="spbl-feature-icon" style={{ color: '#D4A017' }}>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className="spbl-feature-text">Get matched with project expert</span>
                  </div>
                </div>
                
                <button 
                  className="spbl-cta-button"
                  onClick={handleWhatsAppClick}
                >
                  <span className="spbl-button-text">Start Project Consultation on WhatsApp</span>
                  <span className="spbl-button-icon">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </span>
                </button>
                
                <div className="spbl-cta-note">
                  <span className="spbl-note-icon" style={{ color: '#D4A017' }}>
                    <FontAwesomeIcon icon={faLightbulb} />
                  </span>
                  <span className="spbl-note-text">Free project planning session • Portfolio review included</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <TLSPFFooter/>
      <BackToTop/>
    </div>
    </div>
    </>
  );
};

export default ProjectBasedLearning;