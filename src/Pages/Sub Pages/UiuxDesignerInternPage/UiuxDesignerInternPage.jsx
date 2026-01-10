import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPaintBrush,
  faPalette,
  faSearch,
  faFolderOpen,
  faVideo,
  faBriefcase,
  faGraduationCap,
  faChalkboardTeacher,
  faMobileAlt,
  faHandshake,
  faMoneyBillWave,
  faLock,
  faCheck,
  faTimes,
  faDownload,
  faFilePdf,
  faFileArchive,
  faFileWord,
  faPaperclip,
  faStar,
  faChevronLeft,
  faChevronRight,
  faLightbulb,
  faCrown,
  faGem,
  faEye,
  faInfoCircle,
  faUsers,
  faBuilding,
  faComments,
  faSyncAlt,
  faCertificate,
  faNetworkWired,
  faTools,
  faRocket,
  faEnvelope,
  faPhone,
  faCalendar,
  faFileAlt,
  faCheckCircle,
  faUser,
  faChartLine,
  faLaptopCode,
  faPencilAlt,
  faCode,
  faLayerGroup,
  faBrain,
  faShieldAlt,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import './UiuxDesignerInternPage.css';
import { submitInternship } from "../../Sub Pages/HandleSubmit/InternshipSubmit";


import pathOne from '../../../assets/resources file/resources file/TECH/UIUX Designers/UIUX Design Tools & Technology.pdf';
import pathTwo from '../../../assets/resources file/resources file/TECH/UIUX Designers/Learning, UX Thinking & Skill Development.pdf';
import pathThree from '../../../assets/resources file/resources file/TECH/UIUX Designers/Benefits of UIUX Design (for Designers & Businesses).pdf';
import pathFive from '../../../assets/resources file/resources file/TECH/UIUX Designers/Productivity, AI & UX Workflow Support.pdf';
import pathSix from '../../../assets/resources file/resources file/TECH/UIUX Designers/UX Research, Testing & Design Systems.pdf';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import Navbar from '../../../Components/Navbar/Navbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import TSPFFooter from '../TechGroupSubPagefooter/TSPFFooter';

const UiuxDesignerInternPage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const sectionsRef = useRef({
    home: null,
    course: null,
    signin: null,
    assets: null,
    gallery: null,
    templates: null,
    resources: null,
    benefits: null,
    feedback: null
  });

  const containerRef = useRef(null);

  const [formData, setFormData] = useState({
    email: '',
    course: '',
    agreeTerms: false
  });
  const [errors, setErrors] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [activeDescription, setActiveDescription] = useState(null);
  const [downloadedResources, setDownloadedResources] = useState([]);
  const [activeCourseIndex, setActiveCourseIndex] = useState(0);
  const cardsWrapperRef = useRef(null);
  const autoSlideIntervalRef = useRef(null);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);


  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = sectionsRef.current[sectionId];
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      const sections = ['home', 'course', 'signin', 'assets', 'gallery', 'templates', 'resources', 'benefits', 'feedback'];
      for (const section of sections) {
        const element = sectionsRef.current[section];
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show toast message
  useEffect(() => {
    if (toastMessage) {
      setShowToast(true);
      const timer = setTimeout(() => {
        setShowToast(false);
        setToastMessage('');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const setRef = (sectionId) => (el) => {
    sectionsRef.current[sectionId] = el;
  };

  const showLockedSectionToast = (sectionName) => {
    setToastMessage(`🔒 ${sectionName} is locked. Please enroll in the course to access premium content.`);
  };

  const courseContent = [
    {
      id: 1,
      title: "Visual Design & UI Design",
      description: [
        "Figma Mastery & Advanced Prototyping",
        "Adobe XD Complete Workflow",
        "Canva Design System & Templates",
        "Google Fonts & Typography Hierarchy",
        "Color Theory & Accessibility Standards",
        "Design Systems & Component Libraries"
      ],
      duration: "6 weeks",
      bgImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: 2,
      title: "UX Research & User Psychology",
      description: [
        "User Research Methods & Personas",
        "Google Analytics & Data Interpretation",
        "Hotjar Heatmaps & Session Recordings",
        "Usability Testing & Heuristic Evaluation",
        "Survey Design & User Interviews",
        "Information Architecture & Card Sorting"
      ],
      duration: "8 weeks",
      bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: 3,
      title: "Interaction Design & Prototyping",
      description: [
        "Figma Interactive Prototypes",
        "Protopie Advanced Animations",
        "InVision Design Handoff",
        "Framer Motion & Code Components",
        "Principle for Micro-interactions",
        "Miro for Collaborative Design"
      ],
      duration: "8 weeks",
      bgImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: 4,
      title: "Advanced Design & Portfolio",
      description: [
        "Responsive Design Patterns",
        "Mobile App Design Principles",
        "Web Design Modern Trends",
        "Portfolio Case Studies",
        "Client Presentation Skills",
        "Design Thinking Workshops"
      ],
      duration: "6 weeks",
      bgImage: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    }
  ];

  const imagesWithDescriptions = [
    { 
      url: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Modern Design Studio",
      description: "Our state-of-the-art design studio with high-resolution displays, Wacom tablets, and collaborative design spaces."
    },
    { 
      url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "User Testing Lab",
      description: "Dedicated user testing facility with observation rooms, recording equipment, and usability testing setups."
    },
    { 
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Design Thinking Workshop",
      description: "Interactive workshop space for design thinking sessions, brainstorming, and collaborative problem-solving."
    },
    { 
      url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Portfolio Review Room",
      description: "Professional presentation area for portfolio reviews, client meetings, and design critiques."
    }
  ];

  // UPDATED: Course resources with local file paths for UI/UX
  const courseResources = [
    {
      id: 1,
      title: "UIUX Design Tools & Technology",
      description: "Comprehensive guide covering design principles, user psychology, and interface patterns for modern digital products.",
      type: "pdf",
      size: "3.2 MB",
      downloads: 2856,
      icon: <FontAwesomeIcon icon={faPaintBrush} />,
      isRestricted: false,
      fileName: "UIUX Design Tools & Technology.pdf",
      localPath: pathOne
    },
    {
      id: 2,
      title: "Learning, UX Thinking & Skill Development",
      description: "Complete wireframing kit with templates, components, and responsive layouts for mobile and web interfaces.",
      type: "pdf",
      size: "5.8 MB",
      downloads: 2341,
      icon: <FontAwesomeIcon icon={faPencilAlt} />,
      isRestricted: false,
      fileName: "Learning, UX Thinking & Skill Development.pdf",
      localPath: pathTwo
    },
    {
      id: 3,
      title: "Benefits of UIUX Design (for Designers & Businesses)",
      description: "Essential guide to color psychology, accessibility standards, and creating harmonious color palettes.",
      type: "pdf",
      size: "2.9 MB",
      downloads: 1987,
      icon: <FontAwesomeIcon icon={faPalette} />,
      isRestricted: false,
      fileName: "Benefits of UIUX Design (for Designers & Businesses).pdf",
      localPath: pathThree
    },
    {
      id: 4,
      title: "UX Research Methods",
      description: "Collection of user research templates, interview scripts, and usability testing frameworks.",
      type: "pdf",
      size: "4.1 MB",
      downloads: 1765,
      icon: <FontAwesomeIcon icon={faSearch} />,
      isRestricted: false,
      fileName: "UX Research Methods.pdf",
      localPath: "uiUxPathFour"
    },
    {
      id: 5,
      title: "Productivity, AI & UX Workflow Support",
      description: "Professional portfolio templates and case study formats to showcase your design work effectively.",
      type: "pdf",
      size: "65 MB",
      downloads: 1654,
      icon: <FontAwesomeIcon icon={faFolderOpen} />,
      isRestricted: true,
      fileName: "Productivity, AI & UX Workflow Support.pdf",
      localPath: pathFive
    },
    {
      id: 6,
      title: "UX Research, Testing & Design Systems",
      description: "Advanced animation principles and micro-interaction patterns for creating engaging prototypes.",
      type: "pdf",
      size: "3.5 MB",
      downloads: 1423,
      icon: <FontAwesomeIcon icon={faVideo} />,
      isRestricted: true,
      fileName: "UX Research, Testing & Design Systemse.pdf",
      localPath: pathSix
    }
  ];

  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "The Course prepared me for Indusrty Work. ",
      author: "Vasanth K"
    },
    {
      id: 2,
      rating: 4,
      text: "I Understood real-world UI/UX workflow.",
      author: "Lokesh M"
    },
    {
      id: 3,
      rating: 5,
      text: "Very pratical and career-focused training.",
      author: "Revathi L"
    },
    {
      id: 4,
      rating: 4,
      text: "Hands-on practice made learning easy.",
      author: "Kavin S"
    }
  ];

  const benefits = [
    {
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      title: "Career Opportunities",
      description: "Access to 1500+ job placements with our partner tech companies across industries"
    },
    {
      icon: <FontAwesomeIcon icon={faGraduationCap} />,
      title: "Certification",
      description: "Industry-recognized UI/UX certification that boosts your resume and credibility"
    },
    {
      icon: <FontAwesomeIcon icon={faChalkboardTeacher} />,
      title: "Mentorship",
      description: "1-on-1 mentorship sessions with experienced UI/UX design professionals"
    },
    {
      icon: <FontAwesomeIcon icon={faMobileAlt} />,
      title: "Software Access",
      description: "Free access to premium design software (Figma Pro, Adobe Suite) during the course"
    },
    {
      icon: <FontAwesomeIcon icon={faHandshake} />,
      title: "Networking",
      description: "Join our community of 15,000+ designers and tech industry professionals"
    },
    {
      icon: <FontAwesomeIcon icon={faMoneyBillWave} />,
      title: "Money Back Guarantee",
      description: "100% money-back guarantee if you don't land a job within 6 months"
    }
  ];

  const totalResourcesCount = 20;
  const yourDownloadsCount = downloadedResources.length;
  const yourDownloadsPercentage = Math.round((yourDownloadsCount / totalResourcesCount) * 100);

  // UPDATED: Function to download local files
  const handleDownloadResource = (resourceId, resourceTitle, localPath, fileName) => {
    if (!downloadedResources.includes(resourceId)) {
      setDownloadedResources(prev => [...prev, resourceId]);
    }
    
    try {
      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = localPath;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Show success message
      setToastMessage(`✅ Downloaded: ${resourceTitle}`);
      
    } catch (error) {
      console.error('Download error:', error);
      setToastMessage(`❌ Error downloading ${resourceTitle}. File might not exist.`);
    }
  };

  const handleJoinCourseForResource = (resourceTitle) => {
    setToastMessage(`🔒 "${resourceTitle}" is only available to enrolled students. Please join our course to download this premium resource.`);
    
    setTimeout(() => {
      scrollToSection('signin');
    }, 1000);
  };

  // Auto-slide functionality
  useEffect(() => {
    const startAutoSlide = () => {
      autoSlideIntervalRef.current = setInterval(() => {
        setActiveCourseIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % courseContent.length;
          return nextIndex;
        });
      }, 5000);
    };

    startAutoSlide();

    const container = cardsWrapperRef.current;
    const pauseAutoSlide = () => {
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current);
      }
    };

    const resumeAutoSlide = () => {
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current);
      }
      startAutoSlide();
    };

    if (container) {
      container.addEventListener('mouseenter', pauseAutoSlide);
      container.addEventListener('mouseleave', resumeAutoSlide);
    }

    return () => {
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current);
      }
      if (container) {
        container.removeEventListener('mouseenter', pauseAutoSlide);
        container.removeEventListener('mouseleave', resumeAutoSlide);
      }
    };
  }, [courseContent.length]);

  useEffect(() => {
    if (cardsWrapperRef.current) {
      const translateX = -activeCourseIndex * 100;
      cardsWrapperRef.current.style.transform = `translateX(${translateX}%)`;
    }
  }, [activeCourseIndex]);

  const handleCourseArrowClick = (direction) => {
    let newIndex;
    if (direction === 'left') {
      newIndex = activeCourseIndex === 0 ? courseContent.length - 1 : activeCourseIndex - 1;
    } else {
      newIndex = activeCourseIndex === courseContent.length - 1 ? 0 : activeCourseIndex + 1;
    }
    setActiveCourseIndex(newIndex);
    
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current);
      autoSlideIntervalRef.current = setInterval(() => {
        setActiveCourseIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % courseContent.length;
          return nextIndex;
        });
      }, 5000);
    }
  };

  const handleDotClick = (index) => {
    setActiveCourseIndex(index);
    
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current);
      autoSlideIntervalRef.current = setInterval(() => {
        setActiveCourseIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % courseContent.length;
          return nextIndex;
        });
      }, 5000);
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // const validatePassword = (password) => {
  //   return password.length >= 6;
  // };

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

const handleSignInSubmit = async (e) => {
  e.preventDefault();

  try {
    const payload = {
      email: formData.email,
      course: formData.course
    };

    await submitInternship(payload);

    // ✅ SUCCESS UI
    setShowSuccess(true);

    setFormData({
      email: "",
      course: ""
    });

    setTimeout(() => {
      setShowSuccess(false);
    }, 4000);

  } catch (error) {
    console.error("Internship submission failed:", error.message);
    alert(error.message); // shows backend validation message
  }
};


  const handleImageClick = (imageData) => {
    if (activeDescription === imageData.title) {
      setActiveDescription(null);
    } else {
      setActiveDescription(imageData.title);
    }
  };

  const handleBenefitsClick = () => {
    showLockedSectionToast("UI/UX Designer Benefits");
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon 
          key={i} 
          icon={faStar} 
          className={i <= rating ? 'UiUx-filled' : ''}
        />
      );
    }
    return stars;
  };

  const getFileTypeIcon = (type) => {
    switch(type) {
      case 'pdf': return <FontAwesomeIcon icon={faFilePdf} />;
      case 'fig': return <FontAwesomeIcon icon={faPaintBrush} />;
      case 'zip': return <FontAwesomeIcon icon={faFileArchive} />;
      case 'doc': return <FontAwesomeIcon icon={faFileWord} />;
      default: return <FontAwesomeIcon icon={faPaperclip} />;
    }
  };

  return (
    <>
    <div>
            <title>Engloray Tech</title>
            <meta name="description" content="Using ui/ux design you can master designing thorugh hands on project" />
            <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
            {/* <link rel="canonical" href="https://yourapp.com" /> */}
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Your App | Config" />
            <meta property="og:description" content="Lorem Ipsum" />
            {/* <meta property="og:url" content="https://yourapp.com" /> */}

      {/* Toast Message - Fixed Position */}
      {showToast && (
        <div className="UiUx-toast-message show">
          <div className="UiUx-toast-content">
            <span className="UiUx-toast-icon"><FontAwesomeIcon icon={faLock} /></span>
            <span className="UiUx-toast-text">{toastMessage}</span>
            <button 
              className="UiUx-toast-close"
              onClick={() => setShowToast(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      )}

      <div 
        className="UiUx-content" 
        ref={containerRef}
      >
        {/* <TopNavBar/> */}
        {/* <Navbar/> */}
        {/* Hero Section */}
        <section 
          className="UiUx-section UiUx-hero-section" 
          ref={setRef('home')}
          id="home"
        >
          <div className="UiUx-simple-particles">
            <div className="UiUx-simple-circle"></div>
            <div className="UiUx-simple-circle"></div>
            <div className="UiUx-simple-circle"></div>
            <div className="UiUx-simple-triangle"></div>
          </div>

          <div className="UiUx-hero-content">
            <p className="UiUx-hero-sublitle">
                 Master UI/<span style={{ 
                  color: 'rgb(52, 87, 171)', 
                  fontWeight: '600',
                  display: 'inline',
                  WebkitTextFillColor: '#156fb9ff' 
                  }}>UX</span> Design
          </p>
            <p className="UiUx-hero-subtitle1">Learn modern UI/UX Design with our comprehensive course. Scroll down to explore the curriculum and access valuable resources.</p>
            <button 
              className="UiUx-cta-button"
              onClick={() => scrollToSection('course')}
            >
              <FontAwesomeIcon icon={faRocket} /> Start Learning
            </button>
          </div>
        </section>

        {/* Course Content Section */}
        <section 
          className="UiUx-section UiUx-course-horizontal-section" 
          ref={setRef('course')}
          id="course"
        >
          <div className="UiUx-course-background-overlay"></div>
          
          <div className="UiUx-course-horizontal-container">
            <h2 className="UiUx-section-title">UI/UX Designer Course</h2>
            <p className="UiUx-section-content">Design intuitive user interfaces and exceptional experiences</p>
            
            <div className="UiUx-course-carousel-container">
              <div className="UiUx-carousel-wrapper">
                <div 
                  className="UiUx-course-cards-wrapper"
                  ref={cardsWrapperRef}
                >
                  {courseContent.map((item, index) => (
                    <div 
                      key={item.id} 
                      className="UiUx-course-horizontal-card"
                      style={{ backgroundImage: `url(${item.bgImage})` }}
                    >
                      <div className="UiUx-card-overlay"></div>
                      
                      <div className="UiUx-card-content">
                        <div className="UiUx-card-header">
                          <span className="UiUx-module-number">Module {item.id}</span>
                          <span className="UiUx-duration">{item.duration}</span>
                        </div>
                        
                        <div className="UiUx-card-body">
                          <h3 className="UiUx-course-title">{item.title}</h3>
                          
                          <div className="UiUx-course-features">
                            <ul className="UiUx-points-list">
                              {item.description.map((point, pointIndex) => (
                                <li key={pointIndex} className="UiUx-feature-item">
                                  <span className="UiUx-feature-icon"><FontAwesomeIcon icon={faCheck} /></span>
                                  <span className="UiUx-feature-text">{point}</span>
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
              
              <div className="UiUx-carousel-arrows">
                <button 
                  className="UiUx-carousel-arrow UiUx-carousel-arrow-left"
                  onClick={() => handleCourseArrowClick('left')}
                  aria-label="Previous module"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                
                <button 
                  className="UiUx-carousel-arrow UiUx-carousel-arrow-right"
                  onClick={() => handleCourseArrowClick('right')}
                  aria-label="Next module"
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
            
            <div className="UiUx-course-dots">
              {courseContent.map((_, index) => (
                <button
                  key={index}
                  className={`UiUx-course-dot ${index === activeCourseIndex ? 'UiUx-active-dot' : ''}`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Sign In Form Section */}
        <section 
          className="UiUx-section" 
          ref={setRef('signin')}
          id="signin"
        >
          <div className="UiUx-simple-particles">
            <div className="UiUx-simple-circle"></div>
            <div className="UiUx-simple-triangle"></div>
            <div className="UiUx-simple-square"></div>
          </div>
          
          <div className="UiUx-signin-section">
            <h2 className="UiUx-section-title">Join Our Course</h2>
            
            <div className="UiUx-signin-container">
              <div className="UiUx-description-section">
                <h3 className="UiUx-section-subtitle1"><FontAwesomeIcon icon={faPencilAlt} /> UI/UX Designer Course</h3>
                <p className="UiUx-section-description">
                  A UI/UX designer creates intuitive, visually appealing interfaces and seamless user experiences by understanding user needs, 
                  conducting research, prototyping designs, and collaborating with developers to ensure products are both functional and enjoyable to use.
                </p>
                
                {!showForm && (
                  <button 
                    className="UiUx-show-form-btn"
                    onClick={() => setShowForm(true)}
                  >
                    <FontAwesomeIcon icon={faRocket} /> Register Now
                  </button>
                )}
              </div>

              {showForm && (
                <div className="UiUx-form-section">
                  <div className="UiUx-form-wrapper">
                    <button 
                      className="UiUx-close-form-btn"
                      onClick={() => setShowForm(false)}
                      aria-label="Close form"
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                    
                    <form className="UiUx-signin-form" onSubmit={handleSignInSubmit}>
                      <div className="UiUx-form-group">
                        <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /> Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          className={`UiUx-form-input ${errors.email ? 'UiUx-error' : ''}`}
                          placeholder="Enter your email"
                        />
                        {errors.email && <span className="UiUx-error-message">{errors.email}</span>}
                      </div>

                      <div className="UiUx-form-group">
                        <label htmlFor="course"><FontAwesomeIcon icon={faEnvelope} />Enter the course</label>
                        <input
                          type="text"
                          id="course"
                          name="course"
                          value={formData.course}
                          onChange={handleFormChange}
                          className={`UiUx-form-input ${errors.password ? 'UiUx-error' : ''}`}
                          placeholder="Enter the Course"
                        />
                        {errors.password && <span className="UiUx-error-message">{errors.password}</span>}
                      </div>

                      <div className="UiUx-form-group UiUx-checkbox-group">
                        <input
                          type="checkbox"
                          id="agreeTerms"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleFormChange}
                          className={errors.agreeTerms ? 'UiUx-error' : ''}
                        />
                        <label htmlFor="agreeTerms">
                          <FontAwesomeIcon icon={faCheckCircle} /> I agree to the Terms of Service and Privacy Policy
                        </label>
                        {errors.agreeTerms && <span className="UiUx-error-message">{errors.agreeTerms}</span>}
                      </div>

                      <button type="submit" className="UiUx-submit-btn">
                        <FontAwesomeIcon icon={faRocket} /> Register Now
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Assets, Branding & Design Support */}
        <section 
          className="UiUx-section UiUx-locked-section" 
          ref={setRef('assets')}
          id="assets"
        >
          <div className="UiUx-locked-section-overlay"></div>
          <div className="UiUx-locked-content">
            <div className="UiUx-locked-icon">
              <span className="UiUx-premium-badge"><FontAwesomeIcon icon={faCrown} /> PREMIUM</span>
            </div>
            <h2 className="UiUx-section-title">Assets, Branding & Design Support</h2>
            <p className="UiUx-section-description">
              Access our exclusive library of premium UI/UX assets, complete design systems, 
              and professional design support. Get 3000+ UI components, 200+ premium fonts, 
              design system templates, and direct support from senior UI/UX designers.
            </p>
            <button 
              className="UiUx-locked-btn"
              onClick={() => showLockedSectionToast("Assets, Branding & Design Support")}
            >
              <span className="UiUx-locked-btn-text"><FontAwesomeIcon icon={faLock} /> Join course to Access</span>
            </button>
            <p className="UiUx-locked-note">
              <FontAwesomeIcon icon={faStar} /> Includes lifetime access to premium assets + 6 months of design support
            </p>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section 
          className="UiUx-section UiUx-full-particle-section" 
          ref={setRef('gallery')}
          id="gallery"
        >
          <div className="UiUx-full-spread-particles">
            {[...Array(15)].map((_, i) => (
              <div key={i} className={`UiUx-spread-particle UiUx-spread-particle-${i % 5}`}></div>
            ))}
          </div>
          
          <div className="UiUx-gallery-section">
            <h2 className="UiUx-section-title"><FontAwesomeIcon icon={faEye} /> Design Environment</h2>
            <p className="UiUx-section-subtitle">Explore our interactive design spaces and resources</p>
            
            <div className="UiUx-gallery-container">
              <div className="UiUx-gallery-grid">
                {imagesWithDescriptions.map((imageData, index) => (
                  <div 
                    key={index} 
                    className="UiUx-gallery-item-wrapper"
                  >
                    <div className="UiUx-gallery-item">
                      <div 
                        className="UiUx-image-container"
                        onClick={() => handleImageClick(imageData)}
                      >
                        <img 
                          src={imageData.url} 
                          alt={imageData.title}
                          loading="lazy"
                        />
                        <div className="UiUx-image-overlay">
                          <span>
                            {activeDescription === imageData.title ? (
                              <><FontAwesomeIcon icon={faEye} /> Hide Details</>
                            ) : (
                              <><FontAwesomeIcon icon={faEye} /> View Details</>
                            )}
                          </span>
                        </div>
                      </div>
                      
                      <div className="UiUx-image-title">
                        <h4>{imageData.title}</h4>
                      </div>
                    </div>
                    
                    {activeDescription === imageData.title && (
                      <div className="UiUx-gallery-description">
                        <div className="UiUx-description-content">
                          <h4><FontAwesomeIcon icon={faInfoCircle} /> About this Environment:</h4>
                          <p>{imageData.description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ready-to-Use Internal Templates */}
        <section 
          className="UiUx-section UiUx-locked-section UiUx-templates-section" 
          ref={setRef('templates')}
          id="templates"
        >
          <div className="UiUx-locked-section-overlay"></div>
          <div className="UiUx-locked-content">
            <div className="UiUx-locked-icon">
              <span className="UiUx-premium-badge"><FontAwesomeIcon icon={faGem} /> EXCLUSIVE</span>
            </div>
            <h2 className="UiUx-section-title">Ready-to-Use Design Templates</h2>
            <p className="UiUx-section-description">
              Get instant access to our proprietary library of 800+ professionally designed UI/UX templates. 
              Includes mobile app kits, web design systems, dashboard templates, wireframe libraries, 
              and design components that are fully customizable and commercially licensed.
            </p>
            <button 
              className="UiUx-locked-btn UiUx-pay-now-btn"
              onClick={() => showLockedSectionToast("Ready-to-Use Design Templates")}
            >
              <span className="UiUx-locked-btn-text"><FontAwesomeIcon icon={faLock} /> Join course to Access</span>
            </button>
            <p className="UiUx-locked-note">
              <FontAwesomeIcon icon={faStar} /> One-time payment for lifetime access to all template updates
            </p>
          </div>
        </section>

        {/* Course Resources Section */}
        <section 
          className="UiUx-section UiUx-full-particle-section" 
          ref={setRef('resources')}
          id="resources"
        >
          <div className="UiUx-full-spread-particles">
            {[...Array(15)].map((_, i) => (
              <div key={i} className={`UiUx-spread-particle UiUx-spread-particle-${i % 5}`}></div>
            ))}
          </div>
          
          <div className="UiUx-resources-section">
            <h2 className="UiUx-section-title"><FontAwesomeIcon icon={faFileAlt} /> Design Resources</h2>
            <p className="UiUx-section-subtitle">
              Download valuable design templates, guides, and assets to enhance your creative process.
            </p>
            
            <div className="UiUx-resources-container">
              <div className="UiUx-resources-grid">
                {courseResources.map((resource) => (
                  <div 
                    key={resource.id} 
                    className="UiUx-resource-card"
                  >
                    <div className="UiUx-resource-icon">
                      <span className="UiUx-resource-icon-main">{resource.icon}</span>
                      <span className="UiUx-resource-type-icon">{getFileTypeIcon(resource.type)}</span>
                    </div>
                    
                    <div className="UiUx-resource-content">
                      <h3 className="UiUx-resource-title">{resource.title}</h3>
                      <p className="UiUx-resource-description">{resource.description}</p>
                      
                      <div className="UiUx-resource-meta">
                        <span className="UiUx-resource-type">
                          {resource.type.toUpperCase()} • {resource.size}
                        </span>
                        <span className="UiUx-resource-downloads">
                          <FontAwesomeIcon icon={faDownload} /> {resource.downloads.toLocaleString()} downloads
                        </span>
                        {resource.isRestricted && (
                          <span className="UiUx-resource-restricted-tag">
                            <FontAwesomeIcon icon={faLock} /> Course Exclusive
                          </span>
                        )}
                      </div>
                      
                      {resource.isRestricted ? (
                        <button 
                          className="UiUx-join-course-btn"
                          onClick={() => handleJoinCourseForResource(resource.title)}
                        >
                          <span><FontAwesomeIcon icon={faLock} /> Join Course to Download</span>
                        </button>
                      ) : (
                        <button 
                          className={`UiUx-download-btn ${downloadedResources.includes(resource.id) ? 'UiUx-downloaded' : ''}`}
                          onClick={() => handleDownloadResource(resource.id, resource.title, resource.localPath, resource.fileName)}
                        >
                          {downloadedResources.includes(resource.id) ? (
                            <>
                              <span><FontAwesomeIcon icon={faCheckCircle} /> Downloaded</span>
                              <span className="UiUx-download-again">Download Again</span>
                            </>
                          ) : (
                            <>
                              <span><FontAwesomeIcon icon={faDownload} /> Download Now</span>
                              <span className="UiUx-free-badge">FREE</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="UiUx-resources-info">
                <div className="UiUx-resources-stats">
                  <div className="UiUx-stat-card">
                    <h3><FontAwesomeIcon icon={faFileAlt} /> Total Resources</h3>
                    <p className="UiUx-stat-number">20</p>
                    <p className="UiUx-stat-label">Available Documents</p>
                  </div>
                  <div className="UiUx-stat-card">
                    <h3><FontAwesomeIcon icon={faDownload} /> Total Downloads</h3>
                    <p className="UiUx-stat-number">32,000</p>
                    <p className="UiUx-stat-label">By Design Students</p>
                  </div>
                  <div className="UiUx-stat-card">
                    <h3><FontAwesomeIcon icon={faUser} /> Your Downloads</h3>
                    <p className="UiUx-stat-number">{yourDownloadsCount}</p>
                    <p className="UiUx-stat-label">
                      {yourDownloadsPercentage}% Downloaded
                      <div className="UiUx-progress-bar">
                        <div 
                          className="UiUx-progress-fill" 
                          style={{ width: `${yourDownloadsPercentage}%` }}
                        ></div>
                      </div>
                    </p>
                  </div>
                </div>
                
                <div className="UiUx-resources-note">
                  <h4><FontAwesomeIcon icon={faLightbulb} /> Note:</h4>
                  <p>
                    Our course includes <strong>20 comprehensive resources</strong> to support your design journey. 
                    First 4 resources are available for free download. <strong>Design Portfolio Templates</strong> and 
                    <strong> Prototyping Animation Guide</strong> are exclusive to enrolled students. 
                    Join our course to access all 20 premium resources and unlock full learning potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UI/UX Designer Benefits Section */}
        <section 
          className="UiUx-section UiUx-benefits-section" 
          ref={setRef('benefits')}
          id="benefits"
        >
          <div className="UiUx-simple-particles">
            <div className="UiUx-simple-circle"></div>
            <div className="UiUx-simple-triangle"></div>
            <div className="UiUx-simple-square"></div>
            <div className="UiUx-simple-hexagon"></div>
          </div>
          
          <div className="UiUx-benefits-container">
            <h2 className="UiUx-section-title"><FontAwesomeIcon icon={faStar} /> UI/UX Designer Benefits</h2>
            <p className="UiUx-section-subtitle">
              When you join our comprehensive UI/UX design course, you unlock exclusive benefits 
              that accelerate your career growth and skill development.
            </p>
            
            <div className="UiUx-benefits-grid">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="UiUx-benefit-card"
                >
                  <div className="UiUx-benefit-icon">
                    <span className="UiUx-benefit-icon-emoji">{benefit.icon}</span>
                  </div>
                  <h3 className="UiUx-benefit-title">{benefit.title}</h3>
                  <p className="UiUx-benefit-description">{benefit.description}</p>
                </div>
              ))}
            </div>
            
            <div className="UiUx-benefits-summary">
              <div className="UiUx-benefits-stats">
                <div className="UiUx-benefit-stat">
                  <h4>15,000+</h4>
                  <p><FontAwesomeIcon icon={faGraduationCap} /> Successful Graduates</p>
                </div>
                <div className="UiUx-benefit-stat">
                  <h4>96%</h4>
                  <p><FontAwesomeIcon icon={faBriefcase} /> Job Placement Rate</p>
                </div>
                <div className="UiUx-benefit-stat">
                  <h4>80+</h4>
                  <p><FontAwesomeIcon icon={faBuilding} /> Tech Company Partners</p>
                </div>
                <div className="UiUx-benefit-stat">
                  <h4>24/7</h4>
                  <p><FontAwesomeIcon icon={faComments} /> Community Support</p>
                </div>
              </div>
              
              <div className="UiUx-benefits-cta">
                <button 
                  className="UiUx-benefits-join-btn"
                  onClick={handleBenefitsClick}
                >
                  <FontAwesomeIcon icon={faRocket} /> Join Now & Get All Benefits
                </button>
                <p className="UiUx-benefits-guarantee">
                  <FontAwesomeIcon icon={faCheckCircle} /> 30-day money-back guarantee • <FontAwesomeIcon icon={faSyncAlt} /> Lifetime access • <FontAwesomeIcon icon={faCertificate} /> Certificate included
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section 
          className="UiUx-section UiUx-full-particle-section" 
          ref={setRef('feedback')}
          id="feedback"
        >
          <div className="UiUx-full-spread-particles">
            {[...Array(12)].map((_, i) => (
              <div key={i} className={`UiUx-spread-particle UiUx-spread-particle-${i % 4}`}></div>
            ))}
          </div>
          
          <div className="UiUx-feedback-section">
            <h2 className="UiUx-section-title"><FontAwesomeIcon icon={faStar} /> Student Testimonials</h2>
            <p className="UiUx-section-subtitle">Hear what our design students have to say about their learning experience</p>
            
            <div className="UiUx-testimonials">
              <div className="UiUx-testimonial-cards">
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="UiUx-testimonial-card"
                  >
                    <div className="UiUx-stars">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p>{testimonial.text}</p>
                    <span className="UiUx-author">- {testimonial.author}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* <TSPFFooter/> */}
        <BackToTop/>
      </div>
      </div>
    </>
  );
}

export default UiuxDesignerInternPage;