import React, { useState } from 'react';
import './MentorshipLearning.css';

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
  faRibbon, faStar, faFlagCheckered, faBullseye,

  // Tools & Process Icons
  faToolbox, faWrench, faCogs, faHammer, faTools,
  faPaintRoller, faPalette, faBrush, faRulerCombined,
  faClipboardList, faCalendarCheck, faClock, faGlobe,

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
  faBug, faExclamationTriangle, faSearch, faUserNinja, faUserAstronaut, faUserSecret, faMap,

  // Briefcase for Hero Section
  faBriefcase,

  // Chevron Icons for View More
  faChevronDown, faChevronUp
} from '@fortawesome/free-solid-svg-icons';

import {
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import NavigationBar from '../../TechLearningSection/NavigationBar/NavigationBar';
import TLSPFFooter from '../TechLearningSubPageFooter/TLSPFFooter';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import { Helmet } from 'react-helmet';
import studentPurpleBG from '../../../assets/images/student_purple_bg.png';
import studentYellowBG from '../../../assets/images/student_yellow_bg.png';
import studentRedBG from '../../../assets/images/student_red_bg.png';

const MentorshipLearning = () => {
  const [showToast, setShowToast] = useState(false);
  const [showAllPaths, setShowAllPaths] = useState(false);

  const whatsappNumber = "6381759909";
  const whatsappMessage = "Hello! I'm interested in the mentorship program. Can we schedule a consultation?";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

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
      color: "#3B82F6"
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
      color: "#8B5CF6"
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
      badgeIcon: faMagic,
      color: "#10B981"
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
      color: "#EF4444"
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
      color: "#F59E0B"
    }
  ];

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
      icon: faGlobe,
      title: "Global Network",
      description: "Connect with peers and professionals worldwide",
      color: "#06B6D4"
    }
  ];

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
      icon: faCalendarCheck,
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

  const visiblePaths = showAllPaths ? learningPaths : learningPaths.slice(0, 2);

  return (
    <>
      <div>
        <Helmet>
          <title>Engloray Mentorship</title>
          <meta name="description" content="Personalized mentorship with industry leaders to accelerate your career growth." />
          <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Engloray Mentorship" />
          <meta property="og:description" content="Transform your career through expert mentorship." />
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
                      You'll be redirected to WhatsApp to start your consultation. Looking forward to connecting with you!
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
          <header className="pbl-hero-wrapper" style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px', background: '#FCFCFA', position: 'relative', overflow: 'hidden', fontFamily: '"Inter", "Helvetica Neue", sans-serif' }}>
            <div className="pbl-hero-container" style={{ maxWidth: '1500px', margin: '0 auto', padding: '0 40px', position: 'relative' }}>
              <div className="pbl-hero-layout" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '30px', position: 'relative', zIndex: 2, marginBottom: '60px' }}>

                {/* Left Content */}
                <div className="pbl-hero-left" style={{ flex: '0 1 auto', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', zIndex: 2, marginLeft: '-120px', minWidth: '900px' }}>
                  <div className="pbl-hero-tag" style={{ padding: '6px 16px', borderRadius: '20px', backgroundColor: '#FBBF24', color: '#111', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px', display: 'inline-block' }}>
                    WE CAN HELP YOU
                  </div>
                  <h1 className="pbl-hero-title" style={{ textAlign: 'left', fontFamily: '"Inter", "Helvetica Neue", sans-serif', fontSize: 'clamp(3rem, 4.8vw, 5.5rem)', fontWeight: 600, color: '#111', lineHeight: 1.05, margin: '0 0 24px 0', letterSpacing: '-2.5px', width: '100%', maxWidth: '900px' }}>
                    Transform Your <span className="pbl-hero-highlight" style={{ fontWeight: 400, color: '#97AAAC', fontStyle: 'italic' }}>Career</span> Through Expert Mentorship
                  </h1>
                  <p className="pbl-hero-desc" style={{ textAlign: 'left', fontFamily: '"Inter", "Helvetica Neue", sans-serif', fontSize: '1.2rem', color: '#64748B', lineHeight: 1.5, width: '100%', maxWidth: '640px', margin: '0 0 40px 0' }}>
                    1:1 mentorship with industry leaders from Google, Amazon, Microsoft, and more.
                    Get personalized guidance, work on real projects, and accelerate your career growth.
                  </p>

                  <div className="pbl-hero-buttons" style={{ display: 'flex', alignItems: 'center', gap: '30px', justifyContent: 'flex-start', width: '100%' }}>
                    <button className="pbl-btn-primary" onClick={handleWhatsAppClick} style={{ background: '#000', color: '#fff', border: 'none', borderRadius: '40px', padding: '8px 8px 8px 24px', display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', cursor: 'pointer', fontFamily: '"Inter", sans-serif' }}>
                      JOIN FREE CONSULTATION
                      <span className="pbl-btn-icon-circle" style={{ background: 'transparent', width: '34px', height: '34px', borderRadius: '50%', border: '1px solid #BBF7D0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#BBF7D0' }}>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </button>
                  </div>
                </div>

                {/* Right Content - Custom Masonry Grid */}
                <div className="pbl-hero-right" style={{ flex: '0 0 45%', display: 'flex', gap: '20px', position: 'relative', zIndex: 2, transform: 'translateX(60px)' }}>
                  {/* Column 1 */}
                  <div className="pbl-masonry-col" style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1, paddingTop: '80px' }}>
                    {/* Tall Purple Image */}
                    <div className="pbl-masonry-item" style={{ borderRadius: '40px', overflow: 'hidden', height: '340px', width: '100%', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                      <img src={studentPurpleBG} alt="Student" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    {/* Green Stats Box */}
                    <div className="pbl-masonry-item" style={{ borderRadius: '40px', background: '#A3E635', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '200px', padding: '24px', textAlign: 'center', color: '#111', width: '100%', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                      <h3 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0 0 8px', letterSpacing: '-1px', fontFamily: '"Inter", sans-serif' }}>500+</h3>
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
                      <p style={{ fontSize: '0.9rem', fontWeight: 600, margin: 0, opacity: 0.9, fontFamily: '"Inter", sans-serif' }}>Career Advancement</p>
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
            {/* Mentors Section */}
            <>
              <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');`}</style>
              <section id="spbl-experts" className="spbl-section spbl-experts-section" style={{ fontFamily: "'Poppins', sans-serif" }}>
                <div className="spbl-container">
                  <div className="spbl-section-header">
                    <h2 className="spbl-section-title" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Learn from Industry Leaders</h2>
                    <p className="spbl-section-subtitle" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>Get mentored by experts from top tech companies</p>
                  </div>

                  <div className="spbl-experts-scroll-container">
                    <div className="spbl-experts-scroll">
                      {[...mentors, ...mentors].map((expert, index) => (
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
                                <FontAwesomeIcon icon={faUsers} />
                              </span>
                              <span className="spbl-stat-text" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>{expert.students} students</span>
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
                </div>
              </section>
            </>

            {/* Structured Learning Paths Section */}
            <>
              <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');`}</style>
              <section className="spbl-section spbl-categories-section" style={{ fontFamily: "'Poppins', sans-serif" }}>
                <div className="spbl-container">
                  <div className="spbl-section-header">
                    <h2 className="spbl-section-title" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Structured Learning Paths</h2>
                    <p className="spbl-section-subtitle" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>Choose your journey with guided mentorship</p>
                  </div>

                  <div className="spbl-categories-grid">
                    {visiblePaths.map((path) => (
                      <div key={path.id} className="spbl-category-card" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        <div className="spbl-category-header">
                          <div className="spbl-category-icon" style={{ color: path.iconColor }}>
                            <FontAwesomeIcon icon={path.icon} />
                          </div>
                          <div className="spbl-category-level" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
                            {path.level}
                          </div>
                        </div>

                        <div className="spbl-category-content">
                          <h3 className="spbl-category-title" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>{path.title}</h3>
                          <p className="spbl-category-description" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>{path.description}</p>

                          <div className="spbl-category-duration">
                            <span className="spbl-duration-icon" style={{ color: path.iconColor }}>
                              <FontAwesomeIcon icon={faClock} />
                            </span>
                            <span className="spbl-duration-text" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>{path.duration}</span>
                          </div>

                          <div className="spbl-category-deliverables">
                            <h4 className="spbl-deliverables-title" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>What You'll Learn:</h4>
                            <ul className="spbl-deliverables-list">
                              {path.modules.map((item, index) => (
                                <li key={index} className="spbl-deliverable-item">
                                  <span className="spbl-deliverable-icon" style={{ color: path.iconColor }}>
                                    <FontAwesomeIcon icon={faCheck} />
                                  </span>
                                  <span className="spbl-deliverable-text" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="spbl-category-details">
                            <div className="spbl-category-detail">
                              <span className="spbl-detail-icon" style={{ color: path.iconColor }}>
                                <FontAwesomeIcon icon={faChalkboardTeacher} />
                              </span>
                              <span className="spbl-detail-text" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>{path.mentorCount}</span>
                            </div>
                            <div className="spbl-category-detail">
                              <span className="spbl-detail-icon" style={{ color: path.iconColor }}>
                                <FontAwesomeIcon icon={faProjectDiagram} />
                              </span>
                              <span className="spbl-detail-text" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>{path.projects}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {learningPaths.length > 2 && (
                    <div className="spbl-view-more-container">
                      <button
                        className="spbl-view-more-btn"
                        onClick={() => setShowAllPaths(!showAllPaths)}
                        style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                      >
                        <span className="spbl-view-more-text">
                          {showAllPaths ? 'View Less' : `View More Paths (${learningPaths.length - 2} more)`}
                        </span>
                        <span className="spbl-view-more-icon">
                          <FontAwesomeIcon icon={showAllPaths ? faChevronUp : faChevronDown} />
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </section>
            </>

            {/* Benefits Section */}
            <section className="spbl-section spbl-benefits-section-staffing">
              <div className="spbl-container staffing-grid-container">
                <div className="staffing-title-wrapper">
                  <h2 className="staffing-title">
                    Why Mentorship <br />
                    Works <span className="title-blue">Works</span>
                  </h2>
                  <p className="staffing-title-desc">
                    Accelerate your learning with personalized guidance from experienced professionals in the industry.
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
                      HOW IT <br />
                      WORKS
                    </h2>
                  </div>

                  <div className="process-divider-line"></div>

                  <div className="process-desc-area">
                    <p className="process-header-text">
                      Your journey to career transformation. Our structured approach ensures you get the matching, learning, and launch opportunities you deserve.
                    </p>
                  </div>
                </div>

                <div className="process-static-grid">
                  {processSteps.map((step, index) => {
                    const badgeNames = [
                      "Evaluation",
                      "Matching",
                      "Planning",
                      "Engagement",
                      "Building",
                      "Success"
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

            {/* Success Stories */}
            <section className="spbl-section spbl-stories-section">
              <div className="spbl-container">
                <div className="spbl-section-header">
                  <h2 className="spbl-section-title">Success Stories</h2>
                  <p className="spbl-section-subtitle">Real people, real transformations</p>
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
                                <FontAwesomeIcon icon={faBriefcase} />
                              </span>
                              <span className="spbl-project-text">{story.before}</span>
                            </div>
                          </div>

                          <div className="spbl-story-timeline">
                            <span className="spbl-timeline-icon" style={{ color: story.color }}>
                              <FontAwesomeIcon icon={faClock} />
                            </span>
                            <span className="spbl-timeline-text">Took {story.timeline}</span>
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
                                <FontAwesomeIcon icon={faRocket} />
                              </span>
                              <span className="spbl-salary-text">{story.after}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* Seamless Loop */}
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
                                <FontAwesomeIcon icon={faBriefcase} />
                              </span>
                              <span className="spbl-project-text">{story.before}</span>
                            </div>
                          </div>

                          <div className="spbl-story-timeline">
                            <span className="spbl-timeline-icon" style={{ color: story.color }}>
                              <FontAwesomeIcon icon={faClock} />
                            </span>
                            <span className="spbl-timeline-text">Took {story.timeline}</span>
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
                                <FontAwesomeIcon icon={faRocket} />
                              </span>
                              <span className="spbl-salary-text">{story.after}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="spbl-section spbl-cta-section-light">
              <div className="spbl-container">
                <div className="cta-light-header">
                  <h2 className="cta-light-title">
                    Ready to Transform Your <span className="cta-title-highlighter">Career?</span>
                  </h2>
                  <p className="cta-light-subtitle">
                    Join thousands who have accelerated their careers with personalized mentorship.
                    Start with a free consultation on WhatsApp.
                  </p>
                </div>

                <div className="cta-light-features-row">
                  <div className="cta-light-feature">
                    <span className="cta-feature-dot">•</span>
                    <span className="cta-feature-text">Free 30-minute consultation</span>
                  </div>
                  <div className="cta-light-feature">
                    <span className="cta-feature-dot">•</span>
                    <span className="cta-feature-text">Personalized learning roadmap</span>
                  </div>
                  <div className="cta-light-feature">
                    <span className="cta-feature-dot">•</span>
                    <span className="cta-feature-text">Meet your potential mentor</span>
                  </div>
                </div>

                <div className="cta-light-action">
                  <button className="cta-light-button" onClick={handleWhatsAppClick}>
                    Book Free Consultation
                    <span className="spbl-button-icon">
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </span>
                  </button>

                  <div className="cta-light-note">
                    <span className="cta-note-icon">💡</span>
                    <span className="cta-note-text">Direct WhatsApp consultation • 100% satisfaction guarantee</span>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <TLSPFFooter />
          <BackToTop />
        </div>
      </div>
    </>
  );
};

export default MentorshipLearning;