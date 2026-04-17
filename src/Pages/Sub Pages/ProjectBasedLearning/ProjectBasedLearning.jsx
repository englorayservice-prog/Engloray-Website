import React, { useState, useEffect } from 'react';
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
  faBug, faExclamationTriangle, faSearch, faUserNinja, faUserAstronaut, faUserSecret,
  faChevronLeft,

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
import SubFooterTwo from '../subFooterTwo/NewFooter';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import { Helmet } from 'react-helmet';
import studentPurpleBG from '../../../assets/images/student_purple_bg.png';
import studentYellowBG from '../../../assets/images/student_yellow_bg.png';
import studentRedBG from '../../../assets/images/student_red_bg.png';
import taskImage from '../../../assets/task.jpeg';
import ecomImage from '../../../assets/ecom.jpeg';
import socialImage from '../../../assets/social.jpeg';
import aiAssistantImage from '../../../assets/aiassistant.jpeg';
import healthcareImage from '../../../assets/erp_dashboard_analytics.png';
import fintechImage from '../../../assets/crmbg.png';

const ProjectBasedLearning = () => {
  const [showToast, setShowToast] = useState(false);

  // Project Categories
  const projectCategories = [
    {
      id: 1,
      title: "E-Commerce Platform",
      bgImage: ecomImage,
      imageClass: "spbl-custom-zoom",
      duration: "8 Weeks",
      level: "Intermediate",
      icon: faShoppingCart,
      iconColor: "#3B82F6",
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
      bgImage: socialImage,
      imageClass: "spbl-custom-zoom",
      duration: "6 Weeks",
      level: "Beginner to Intermediate",
      icon: faUsers,
      iconColor: "#60A5FA",
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
      bgImage: aiAssistantImage,
      duration: "10 Weeks",
      level: "Advanced",
      icon: faRobot,
      iconColor: "#93C5FD",
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
      bgImage: taskImage,
      duration: "5 Weeks",
      level: "Beginner",
      icon: faTasks,
      iconColor: "#1D4ED8",
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
    },
    {
      id: 5,
      title: "Healthcare Management",
      bgImage: healthcareImage,
      duration: "12 Weeks",
      level: "Advanced",
      icon: faNetworkWired,
      iconColor: "#ef4444",
      description: "Develop a full-scale healthcare platform for patient tracking, digital billing, and clinic management.",
      technologies: ["React", "Node.js", "PostgreSQL", "OAuth"],
      deliverables: [
        "Patient tracking system",
        "Billing & Invoice generator",
        "Medical records security",
        "Doctor scheduling portal"
      ],
      mentorCount: "3 Healthcare Experts",
      complexity: "Advanced"
    },
    {
      id: 6,
      title: "FinTech Dashboard",
      bgImage: fintechImage,
      duration: "10 Weeks",
      level: "Expert",
      icon: faChartLine,
      iconColor: "#fbbf24",
      description: "Create a professional financial technology dashboard with real-time data visualization and projections.",
      technologies: ["React", "Express", "D3.js", "Chart.js"],
      deliverables: [
        "Interactive financial charts",
        "Real-time currency rates",
        "Transaction analytics",
        "Smart Budget tracker"
      ],
      mentorCount: "4 FinTech Mentors",
      complexity: "Expert"
    }
  ];

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
      color: "#3B82F6" // Blue
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
      color: "#3B82F6" // Amber
    }
  ];

  // Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCardsPerPage(1);
      } else {
        setCardsPerPage(2);
      }
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalCards = projectCategories.length;
  const maxSlides = totalCards - cardsPerPage;

  const nextSlide = () => {
    if (currentSlide < maxSlides) {
      setCurrentSlide(prev => prev + 1);
    }
  };


  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  // WhatsApp configuration
  const whatsappNumber = "6381759909";
  const whatsappMessage = "Hello! I'm interested in the project-based learning program. Can we discuss project options?";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;




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
      icon: faUserNinja,
      color: "#3B82F6"
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
      icon: faUserAstronaut,
      color: "#10B981"
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
      icon: faUserSecret,
      color: "#8B5CF6"
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
      icon: faUserGraduate,
      color: "#3B82F6"
    }
  ];

  // Project Benefits
  const benefits = [
    {
      icon: faProjectDiagram,
      title: "Real-World Projects",
      description: "Work on industry-relevant projects with real business requirements",
      color: "#2563EB"
    },
    {
      icon: faCodeBranch,
      title: "Git Portfolio",
      description: "Build an impressive GitHub portfolio with production-ready code",
      color: "#3B82F6"
    },
    {
      icon: faUsers,
      title: "Team Collaboration",
      description: "Learn agile methodologies and team collaboration tools",
      color: "#93C5FD"
    },
    {
      icon: faClipboardCheck,
      title: "Project Management",
      description: "Master project planning, tracking, and delivery processes",
      color: "#1D4ED8"
    },
    {
      icon: faRocket,
      title: "Deployment Experience",
      description: "Deploy projects to cloud platforms with CI/CD pipelines",
      color: "#2563EB"
    },
    {
      icon: faHandshake,
      title: "Industry Connections",
      description: "Network with professionals and potential employers",
      color: "#3B82F6"
    }
  ];

  // Project Process Steps
  const processSteps = [
    {
      step: 1,
      title: "Project Selection",
      description: "Choose from 50+ real-world project templates",
      icon: faClipboardList,
      color: "#2563EB"
    },
    {
      step: 2,
      title: "Requirements Analysis",
      description: "Understand project scope and business requirements",
      icon: faFileAlt,
      color: "#3B82F6"
    },
    {
      step: 3,
      title: "Technical Planning",
      description: "Design architecture and select technologies",
      icon: faSitemap,
      color: "#3B82F6"
    },
    {
      step: 4,
      title: "Development Phase",
      description: "Code implementation with expert guidance",
      icon: faLaptopCode,
      color: "#1D4ED8"
    },
    {
      step: 5,
      title: "Testing & Debugging",
      description: "Learn testing methodologies and debugging techniques",
      icon: faBug,
      color: "#2563EB"
    },
    {
      step: 6,
      title: "Deployment & Showcase",
      description: "Deploy project and create portfolio presentation",
      icon: faRocket,
      color: "#3B82F6"
    }
  ];

  // Project Stats
  const stats = [
    {
      value: "500+",
      label: "Projects Completed",
      description: "Real-world projects built by learners",
      icon: faProjectDiagram,
      color: "#2563EB"
    },
    {
      value: "95%",
      label: "Portfolio Success",
      description: "Of learners build impressive portfolios",
      icon: faChartLine,
      color: "#3B82F6"
    },
    {
      value: "100+",
      label: "Industry Projects",
      description: "Project templates from real companies",
      icon: faCube,
      color: "#93C5FD"
    },
    {
      value: "4.8/5",
      label: "Satisfaction Rate",
      description: "Average project mentorship rating",
      icon: faStar,
      color: "#1D4ED8"
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

  const handleEnrollClick = handleWhatsAppClick;


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
          <TopNavBar />
          <NavigationBar />
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
          <header className="pbl-hero-wrapper" style={{ minHeight: '100vh', paddingTop: '60px', paddingBottom: '80px', background: '#FCFCFA', position: 'relative', overflow: 'hidden', fontFamily: '"Inter", "Helvetica Neue", sans-serif' }}>
            <div className="pbl-hero-container" style={{ maxWidth: '1500px', margin: '0 auto', padding: '0 40px', position: 'relative' }}>
              <div className="pbl-hero-layout" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '30px', position: 'relative', zIndex: 2, marginBottom: '60px', paddingTop: '40px' }}>

                {/* Left Content */}
                <div className="pbl-hero-left" style={{ flex: '0 1 auto', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', zIndex: 2, marginTop: '20px' }}>
                  <div className="pbl-hero-tag" style={{ padding: '6px 16px', borderRadius: '20px', backgroundColor: '#60A5FA', color: '#111', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px', display: 'inline-block' }}>
                    WE CAN HELP YOU
                  </div>
                  <h1 className="pbl-hero-title" style={{ textAlign: 'left', fontFamily: '"Inter", "Helvetica Neue", sans-serif', fontSize: 'clamp(4.5rem, 7.5vw, 8.5rem)', fontWeight: 800, color: '#111', lineHeight: 1.05, margin: '0 0 24px 0', letterSpacing: '-2.5px', width: '100%' }}>
                    Build <span className="pbl-hero-highlight" style={{ fontWeight: 400, color: '#97AAAC', fontStyle: 'italic' }}>real projects</span> master skills through hands-on experience
                  </h1>
                  <p className="pbl-hero-desc" style={{ textAlign: 'left', fontFamily: '"Inter", "Helvetica Neue", sans-serif', fontSize: '1.2rem', color: '#64748B', lineHeight: 1.5, width: '100%', maxWidth: '640px', margin: '0 0 40px 0' }}>
                    Learn by building real-world projects with industry experts. From concept to deployment,
                    gain practical experience that employers value. Build your portfolio while mastering in-demand skills.
                    Develop industrial-grade applications using the latest tech stacks and agile methodologies.
                    Receive personalized feedback and reviews from seniors at every phase of your project lifecycle.
                  </p>

                  <div className="pbl-hero-buttons" style={{ display: 'flex', alignItems: 'center', gap: '30px', justifyContent: 'flex-start', width: '100%' }}>
                    <button className="pbl-btn-primary" onClick={handleWhatsAppClick} style={{ background: '#000', color: '#fff', border: 'none', borderRadius: '40px', padding: '8px 8px 8px 24px', display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', cursor: 'pointer', fontFamily: '"Inter", sans-serif' }}>
                      GET STARTED
                      <span className="pbl-btn-icon-circle" style={{ background: 'transparent', width: '34px', height: '34px', borderRadius: '50%', border: '1px solid #BBF7D0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#BBF7D0' }}>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </button>
                    {/* <button className="pbl-btn-text" onClick={handleWhatsAppClick} style={{ background: 'transparent', border: 'none', color: '#000', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '1px', cursor: 'pointer', fontFamily: '"Inter", sans-serif' }}>
                      LEARN MORE
                    </button> */}
                  </div>
                </div>

                {/* Right Content */}
                {/* Right Content - Custom Masonry Grid */}
                <div className="pbl-hero-right" style={{ flex: '0 0 45%', display: 'flex', gap: '20px', position: 'relative', zIndex: 2 }}>
                  {/* Column 1 */}
                  <div className="pbl-masonry-col" style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1, paddingTop: '80px' }}>
                    {/* Tall Purple Image */}
                    <div className="pbl-masonry-item" style={{ borderRadius: '40px', overflow: 'hidden', height: '340px', width: '100%', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                      <img src={studentPurpleBG} alt="Student" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    {/* Green Stats Box */}
                    <div className="pbl-masonry-item" style={{ borderRadius: '40px', background: '#A3E635', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '200px', padding: '24px', textAlign: 'center', color: '#111', width: '100%', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                      <h3 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0 0 8px', letterSpacing: '-1px', fontFamily: '"Inter", sans-serif' }}>100+</h3>
                      <p style={{ fontSize: '1rem', fontWeight: 600, margin: 0, opacity: 0.8, fontFamily: '"Inter", sans-serif' }}>Industry Mentors</p>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="pbl-masonry-col" style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>
                    {/* Short Red Image */}
                    <div className="pbl-masonry-item" style={{ borderRadius: '40px', overflow: 'hidden', height: '200px', width: '100%', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                      <img src={studentRedBG} alt="Student" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    {/* Tall Yellow Image */}
                    <div className="pbl-masonry-item" style={{ borderRadius: '40px', overflow: 'hidden', height: '320px', width: '100%', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                      <img src={studentYellowBG} alt="Student" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    {/* Blue Stats Box */}
                    <div className="pbl-masonry-item" style={{ borderRadius: '40px', background: '#38BDF8', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '160px', padding: '24px', textAlign: 'center', color: '#fff', width: '100%', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                      <h3 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0 0 8px', letterSpacing: '-1px', fontFamily: '"Inter", sans-serif' }}>95%</h3>
                      <p style={{ fontSize: '0.9rem', fontWeight: 600, margin: 0, opacity: 0.9, fontFamily: '"Inter", sans-serif' }}>Career Success</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connecting bezier line */}
              <div className="pbl-hero-divider" style={{ position: 'absolute', top: '55%', left: '-10%', width: '120%', zIndex: 1, pointerEvents: 'none' }}>
                <svg viewBox="0 0 1200 100" preserveAspectRatio="none" style={{ width: '100%', height: '80px', display: 'block' }}>
                  <path d="M 0,20 L 600,20 Q 640,20 660,50 L 680,80 Q 700,100 750,100 L 1200,100" fill="none" stroke="#E2E8F0" strokeWidth="2" />
                  <circle cx="20" cy="20" r="4" fill="#E2E8F0" />
                </svg>
              </div>
            </div>

            {/* Bottom Stats Pill */}
            <div className="pbl-stats-wrapper">
              <div className="pbl-stats-pill">
                {stats.map((stat, index) => (
                  <div key={index} className="pbl-stat-item">
                    <h3 className="pbl-stat-val">{stat.value}</h3>
                    <p className="pbl-stat-lbl">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </header>

          <main className="spbl-main">
            {/* Stats Section */}
            {/* <section className="spbl-section spbl-stats-section">
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
            </section> */}

            {/* Project Experts Section */}
            <>
              <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');`}</style>

              <section id="spbl-experts" className="spbl-section spbl-experts-section" style={{ fontFamily: "'Poppins', sans-serif" }}>
                <div className="spbl-container">
                  <div className="spbl-section-header">
                    <h2 className="spbl-section-title" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Learn from Project Experts</h2>
                    <p className="spbl-section-subtitle" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>Get guidance from professionals who've built real-world applications</p>
                  </div>
                </div>

                <div className="spbl-experts-scroll-container">
                  <div className="spbl-experts-scroll">
                    {[...projectExperts, ...projectExperts].map((expert, index) => (
                      <div key={`${expert.id}-${index}`} className="spbl-expert-card" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        <div className="spbl-expert-header" style={{ justifyContent: 'flex-start' }}>
                          <div className="spbl-expert-badge" style={{ backgroundColor: expert.color, fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
                            <FontAwesomeIcon icon={expert.badgeIcon} className="spbl-badge-icon" />
                            {expert.badge}
                          </div>
                        </div>

                        <div className="spbl-expert-info">
                          <h3 className="spbl-expert-name" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>{expert.name}</h3>
                          <p className="spbl-expert-role" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>{expert.role}</p>
                          <p className="spbl-expert-company" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>{expert.company}</p>

                          <div className="spbl-expert-experience">
                            <span className="spbl-experience-icon" style={{ color: expert.color }}>
                              <FontAwesomeIcon icon={faClock} />
                            </span>
                            <span className="spbl-experience-text" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>{expert.experience}</span>
                          </div>
                        </div>

                        <div className="spbl-expert-expertise">
                          <h4 className="spbl-expertise-title" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>Specialized In:</h4>
                          <div className="spbl-expertise-tags">
                            {expert.expertise.map((skill, skillIndex) => (
                              <span key={skillIndex} className="spbl-expertise-tag" style={{ backgroundColor: `${expert.color}20`, color: expert.color, fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
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
                            <span className="spbl-stat-text" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>{expert.projects} projects</span>
                          </div>
                          <div className="spbl-expert-stat">
                            <span className="spbl-stat-icon" style={{ color: expert.color }}>
                              <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span className="spbl-stat-text" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>{expert.rating} rating</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </>

            {/* Project Categories Section */}
            <>
              <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');`}</style>

              <section className="spbl-section spbl-categories-section" style={{ fontFamily: "'Poppins', sans-serif" }}>
                <div className="spbl-container">
                  <div className="spbl-section-header">
                    <h2 className="spbl-section-title" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Choose Your Project</h2>
                    <p className="spbl-section-subtitle" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>Select from diverse real-world project categories</p>
                  </div>
                  <div className="spbl-categories-carousel-container">
                    {currentSlide > 0 && cardsPerPage > 1 && (
                      <button className="spbl-carousel-arrow left" onClick={prevSlide} aria-label="Previous Path">
                        <FontAwesomeIcon icon={faChevronLeft} />
                      </button>
                    )}

                    <div className="spbl-categories-carousel-viewport">
                      <div className="spbl-categories-carousel-track" style={{
                        transform: `translateX(calc(-${currentSlide} * (100% / ${cardsPerPage} + ${cardsPerPage === 1 ? '0rem' : '1rem'})))`,
                      }}>
                        {projectCategories.map((category, index) => {
                          return (
                            <div key={category.id} className="spbl-category-card" style={{
                              fontFamily: "'Poppins', sans-serif",
                              flexDirection: 'column'
                            }}>
                              <div className="spbl-category-image-wrapper" style={{ position: 'relative' }}>
                                <div className="spbl-image-mask" style={{ width: '100%', height: '100%', overflow: 'hidden', borderRadius: '48px' }}>
                                  <img
                                    src={category.bgImage}
                                    alt={category.title}
                                    className={category.imageClass ? category.imageClass : ""}
                                  />
                                </div>
                                <div className="spbl-category-level" style={{
                                  position: 'absolute',
                                  top: '36px',
                                  right: '36px',
                                  fontFamily: "'Poppins', sans-serif",
                                  fontWeight: 600,
                                  color: '#1E293B',
                                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                  padding: '6px 14px',
                                  borderRadius: '12px',
                                  zIndex: 2,
                                  fontSize: '0.85rem',
                                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                                }}>
                                  {category.level}
                                </div>
                              </div>

                              <div className="spbl-category-body" style={{ paddingTop: '20px' }}>
                                <div className="spbl-category-content">
                                  <h3 className="spbl-category-title" style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontWeight: 700,
                                    color: '#0F172A'
                                  }}>{category.title}</h3>
                                  <p className="spbl-category-description" style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontWeight: 400,
                                    color: '#475569'
                                  }}>{category.description}</p>

                                  <div className="spbl-category-duration">
                                    <span className="spbl-duration-icon" style={{ color: '#2563EB' }}>
                                      <FontAwesomeIcon icon={faClock} />
                                    </span>
                                    <span className="spbl-duration-text" style={{
                                      fontFamily: "'Poppins', sans-serif",
                                      fontWeight: 500,
                                      color: '#0F172A'
                                    }}>{category.duration}</span>
                                  </div>

                                  <div className="spbl-category-deliverables">
                                    <h4 className="spbl-deliverables-title" style={{
                                      fontFamily: "'Poppins', sans-serif",
                                      fontWeight: 600,
                                      color: '#0F172A'
                                    }}>Project Deliverables:</h4>
                                    <div className="spbl-deliverable-list">
                                      {category.deliverables.map((del, i) => (
                                        <div key={i} className="spbl-deliverable-item">
                                          <span className="spbl-deliverable-icon" style={{ color: '#2563EB' }}>
                                            <FontAwesomeIcon icon={faCheck} />
                                          </span>
                                          <span className="spbl-deliverable-text" style={{
                                            fontFamily: "'Poppins', sans-serif",
                                            fontWeight: 400,
                                            color: '#475569'
                                          }}>{del}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>

                                <div className="spbl-category-footer">
                                  <div className="spbl-category-stats">
                                    <div className="spbl-stat-item">
                                      <FontAwesomeIcon icon={faUserTie} className="spbl-stat-icon" style={{ color: '#2563EB' }} />
                                      <span className="spbl-stat-text" style={{ color: '#475569' }}>{category.mentorCount}</span>
                                    </div>
                                    <div className="spbl-stat-item">
                                      <FontAwesomeIcon icon={faProjectDiagram} className="spbl-stat-icon" style={{ color: '#2563EB' }} />
                                      <span className="spbl-stat-text" style={{ color: '#475569' }}>{category.complexity}</span>
                                    </div>
                                  </div>
                                  <button className="spbl-enroll-btn" onClick={handleEnrollClick} style={{
                                    backgroundColor: '#2563EB',
                                    color: '#FFFFFF'
                                  }}>Select Project</button>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {currentSlide < maxSlides && (
                      <button className="spbl-carousel-arrow right" onClick={nextSlide} aria-label="Next Project">
                        <FontAwesomeIcon icon={faChevronRight} />
                      </button>
                    )}
                  </div>
                </div>
              </section>
            </>

            {/* Benefits Section */}
            {/* Benefits Section */}
            <section className="spbl-section spbl-benefits-section-staffing">
              <div className="spbl-container staffing-grid-container">
                <div className="staffing-title-wrapper">
                  <h2 className="staffing-title">
                    Why Project-Based <br />
                    Learning <span className="title-blue">Works</span>
                  </h2>
                  <p className="staffing-title-desc">
                    Project-based learning helps you gain real-world skills by building practical applications, making concepts easier to understand and apply.
                  </p>
                </div>

                {benefits.slice(0, 5).map((benefit, index) => (
                  <div key={index} className="staffing-benefit-card">
                    <div className="staffing-card-top">
                      <span className="staffing-card-num">0{index + 1}</span>
                      <div className="staffing-card-icon" style={{ color: benefit.color }}>
                        <FontAwesomeIcon icon={benefit.icon} />
                      </div>
                    </div>
                    <div className="staffing-card-header">
                      <h3 className="staffing-card-title">{benefit.title}</h3>
                      <div className="staffing-card-underline"></div>
                    </div>
                    <p className="staffing-card-desc">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Process Section - Final Static Grid UI */}
            <section className="spbl-section spbl-process-section-light">
              <div className="spbl-container">
                <div className="process-header-grid">
                  <div className="process-title-area">
                    <h2 className="process-main-title">
                      TOP NOTCH QUALITY PROCESS WE PROVIDE
                    </h2>
                  </div>

                  <div className="process-divider-line"></div>

                  <div className="process-desc-area">
                    <p className="process-header-text">
                      Step-by-step guidance from idea to deployment. Our expert-led approach ensures high-performance results and industry-standard best practices in every project we navigate.
                    </p>
                  </div>
                </div>

                <div className="process-static-grid">
                  {processSteps.map((step, index) => {
                    // Assigning suitable badge names based on content
                    const badgeNames = [
                      "Asset Library",
                      "Scope Analysis",
                      "Architecture",
                      "Implementation",
                      "QA & Debug",
                      "Final Release"
                    ];
                    return (
                      <div key={index} className="quality-process-card-final">
                        <div className="quality-card-badge-pill" style={{ backgroundColor: step.color }}>
                          {badgeNames[index] || "Full Support"}
                        </div>
                        <h3 className="quality-card-title-bold">{step.title}</h3>
                        <div className="quality-card-divider"></div>
                        <p className="quality-card-desc-muted">{step.description}</p>
                      </div>
                    );
                  })}
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

                <style>
                  {`
                    @keyframes pblMarqueeLeftToRight {
                      0% { transform: translateX(-50%); }
                      100% { transform: translateX(0); }
                    }
                    .spbl-tech-section {
                       overflow: hidden;
                    }
                  `}
                </style>
                <div className="spbl-tech-marquee-container" style={{ width: '100%', position: 'relative', marginTop: '40px' }}>
                  <div className="spbl-tech-marquee-track" style={{ display: 'flex', width: 'max-content', animation: 'pblMarqueeLeftToRight 30s linear infinite' }}>

                    {/* First Set */}
                    <div style={{ display: 'flex', gap: '24px', paddingRight: '24px' }}>
                      {technologies.map((tech, index) => (
                        <div key={`set1-${index}`} className="spbl-tech-card" style={{ flex: '0 0 240px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', background: '#1E293B', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', transition: 'transform 0.3s ease', cursor: 'default' }}>
                          <div className="spbl-tech-icon" style={{ color: tech.color, fontSize: '3.5rem', marginBottom: '20px' }}>
                            <FontAwesomeIcon icon={tech.icon} />
                          </div>
                          <h3 className="spbl-tech-name" style={{ color: '#F8FAFC', fontSize: '1.3rem', fontWeight: '600', margin: 0 }}>{tech.name}</h3>
                        </div>
                      ))}
                    </div>

                    {/* Second Set */}
                    <div style={{ display: 'flex', gap: '24px', paddingRight: '24px' }}>
                      {technologies.map((tech, index) => (
                        <div key={`set2-${index}`} className="spbl-tech-card" style={{ flex: '0 0 240px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', background: '#1E293B', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', transition: 'transform 0.3s ease', cursor: 'default' }}>
                          <div className="spbl-tech-icon" style={{ color: tech.color, fontSize: '3.5rem', marginBottom: '20px' }}>
                            <FontAwesomeIcon icon={tech.icon} />
                          </div>
                          <h3 className="spbl-tech-name" style={{ color: '#F8FAFC', fontSize: '1.3rem', fontWeight: '600', margin: 0 }}>{tech.name}</h3>
                        </div>
                      ))}
                    </div>

                  </div>
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
              </div>

              <div className="spbl-stories-marquee-container">
                <div className="spbl-stories-marquee-track">
                  {/* First Loop */}
                  {successStories.map((story) => (
                    <div key={story.id} className="spbl-story-card">
                      <div className="spbl-story-avatar" style={{ border: `2px solid ${story.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: `${story.color}20` }}>
                        <FontAwesomeIcon icon={story.icon} style={{ color: story.color, fontSize: '2rem' }} />
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
                  {/* Seamless Loop (ID duplication handled) */}
                  {successStories.map((story) => (
                    <div key={`${story.id}-loop`} className="spbl-story-card">
                      <div className="spbl-story-avatar" style={{ border: `2px solid ${story.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: `${story.color}20` }}>
                        <FontAwesomeIcon icon={story.icon} style={{ color: story.color, fontSize: '2rem' }} />
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

            {/* CTA Section - Candidate Search Style Redesign */}
            <section className="spbl-section spbl-cta-section-light">
              <div className="spbl-container">
                <div className="cta-light-header">
                  <h2 className="cta-light-title">
                    Ready to Build Your <span className="cta-title-highlighter">Portfolio?</span>
                  </h2>
                  <p className="cta-light-subtitle">
                    Start building real projects today. Get expert guidance, build your GitHub portfolio,
                    and accelerate your career growth with hands-on experience.
                  </p>
                </div>

                <div className="cta-light-features-row">
                  <div className="cta-light-feature">
                    <span className="cta-feature-dot">•</span>
                    <span className="cta-feature-text">Free project consultation</span>
                  </div>
                  <div className="cta-light-feature">
                    <span className="cta-feature-dot">•</span>
                    <span className="cta-feature-text">Choose from 50+ templates</span>
                  </div>
                  <div className="cta-light-feature">
                    <span className="cta-feature-dot">•</span>
                    <span className="cta-feature-text">Get matched with experts</span>
                  </div>
                </div>

                <div className="cta-light-action">
                  <button className="cta-light-button" onClick={handleWhatsAppClick}>
                    Start Project Consultation
                    <span className="spbl-button-icon">
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </span>
                  </button>

                  <div className="cta-light-note">
                    <span className="cta-note-icon">💡</span>
                    <span className="cta-note-text">Free project planning session • Portfolio review included</span>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <SubFooterTwo />
          <BackToTop />
        </div>
      </div>
    </>
  );
};

export default ProjectBasedLearning;
