import React, { useState, useRef, useEffect } from 'react';
import './SoftwareDeveloperInternPage.css';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import Navbar from '../../../Components/Navbar/Navbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import { submitInternship } from "../../Sub Pages/HandleSubmit/InternshipSubmit";
import pathOne from '../../../assets/resources file/resources file/TECH/Software developer/Benefits for Software Developers.pdf';
import pathTwo from '../../../assets/resources file/resources file/TECH/Software developer/Core Programming Languages & Development Tools.pdf';
import pathFive from '../../../assets/resources file/resources file/TECH/Software developer/Backend Frameworks & Application Architecture.pdf';
import pathSix from '../../../assets/resources file/resources file/TECH/Software developer/Security, Performance & Code Quality.pdf';
import TSPFFooter from '../TechGroupSubPagefooter/TSPFFooter';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode,
  faLaptopCode,
  faServer,
  faMobileAlt,
  faClock,
  faCheck,
  faChevronLeft,
  faChevronRight,
  faBook,
  faGlobe,
  faTools,
  faFolder,
  faFilePdf,
  faFileArchive,
  faFileWord,
  faPaperclip,
  faDownload,
  faLock,
  faCheckCircle,
  faExclamationCircle,
  faTimes,
  faUserPlus,
  faEye,
  faEyeSlash,
  faCamera,
  faInfoCircle,
  faFolderOpen,
  faUserCheck,
  faLightbulb,
  faBriefcase,
  faGraduationCap,
  faUserTie,
  faLaptop,
  faNetworkWired,
  faMoneyBillWave,
  faRocket,
  faUserGraduate,
  faChartLine,
  faHandshake,
  faHeadset,
  faStar,
  faQuoteLeft,
  faArrowRight,
  faCrown,
  faGem,
  faDatabase,
  faShieldAlt,
  faCogs,
  faBrain,
  faProjectDiagram,
  faBug,
  faCloud,
  faLayerGroup,
  faPuzzlePiece,
  faSearch,
  faCertificate,
  faSyncAlt,
  faBuilding,
  faComments,
  faEnvelope,
  faPhone,
  faFileAlt
} from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';

const SoftwareDeveloperInternPage = () => {
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
    setToastMessage(`${sectionName} is locked. Please enroll in the course to access premium content.`);
  };

  const courseContent = [
    {
      id: 1,
      title: "Programming Fundamentals",
      description: [
        "Python Programming Basics",
        "JavaScript & ES6+ Features",
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Version Control with Git",
        "Problem-Solving Techniques"
      ],
      duration: "6 weeks",
      bgImage: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      icon: faCode
    },
    {
      id: 2,
      title: "Web Development",
      description: [
        "HTML5 & CSS3 Advanced",
        "React.js & React Hooks",
        "Node.js & Express.js",
        "RESTful API Development",
        "Database Management",
        "Authentication & Authorization"
      ],
      duration: "8 weeks",
      bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      icon: faGlobe
    },
    {
      id: 3,
      title: "Software Engineering",
      description: [
        "System Design Principles",
        "Design Patterns",
        "Testing & Debugging",
        "DevOps & CI/CD",
        "Cloud Computing Basics",
        "Agile Methodologies"
      ],
      duration: "8 weeks",
      bgImage: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      icon: faCogs
    },
    {
      id: 4,
      title: "Mobile Development",
      description: [
        "React Native Development",
        "iOS & Android Basics",
        "Cross-Platform Apps",
        "Mobile UI/UX Principles",
        "App Store Deployment",
        "Performance Optimization"
      ],
      duration: "6 weeks",
      bgImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      icon: faMobileAlt
    }
  ];

  const imagesWithDescriptions = [
    { 
      url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Modern Coding Lab",
      description: "Our state-of-the-art coding lab with high-performance computers and dual monitors for immersive programming sessions."
    },
    { 
      url: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Pair Programming Space",
      description: "Students collaborating on code in our interactive pair programming zone with collaborative coding setups."
    },
    { 
      url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Development Workstation",
      description: "Individual development stations equipped with professional IDEs and development tools for hands-on coding practice."
    },
    { 
      url: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Project Demo Room",
      description: "Students presenting software projects to instructors and peers in our presentation room with multimedia equipment."
    }
  ];

  // Course resources with local file paths for Software Development
  const courseResources = [
    {
      id: 1,
      title: "Benefits for Software Developers",
      description: "Detailed breakdown of all modules, learning objectives, and assessment criteria for the entire software development course.",
      type: "pdf",
      size: "2.8 MB",
      downloads: 2876,
      icon: faBook,
      isRestricted: false,
      fileName: "Benefits for Software Developers.pdf",
      localPath: pathOne
    },
    {
      id: 2,
      title: "Core Programming Languages & Development Tools",
      description: "Comprehensive guide to data structures, algorithms, and problem-solving patterns for technical interviews.",
      type: "pdf",
      size: "3.5 MB",
      downloads: 2345,
      icon: faCode,
      isRestricted: false,
      fileName: "Core Programming Languages & Development Tools.pdf",
      localPath: pathTwo
    },
    {
      id: 3,
      title: "Web Development Reference Guide",
      description: "Essential web development concepts, best practices, and modern framework usage guides.",
      type: "pdf",
      size: "2.1 MB",
      downloads: 1876,
      icon: faGlobe,
      isRestricted: false,
      fileName: "Web Development Reference Guide.pdf",
      localPath: "softwarePathThree"
    },
    {
      id: 4,
      title: "Code Templates & Snippets",
      description: "Collection of 100+ professionally written code templates, snippets, and boilerplate code for various projects.",
      type: "zip",
      size: "58 MB",
      downloads: 1567,
      icon: faLaptopCode,
      isRestricted: false,
      fileName: "Code Templates & Snippets.zip",
      localPath: "softwarePathFour"
    },
    {
      id: 5,
      title: "Backend Frameworks & Application Architecture",
      description: "Keyboard shortcuts and workflow tips for VS Code, Git, Terminal, and other essential developer tools.",
      type: "pdf",
      size: "1.5 MB",
      downloads: 1245,
      icon: faTools,
      isRestricted: true,
      fileName: "Backend Frameworks & Application Architecture.pdf",
      localPath: pathFive
    },
    {
      id: 6,
      title: "Security, Performance & Code Quality",
      description: "Step-by-step guide to creating an impressive developer portfolio that gets you hired.",
      type: "pdf",
      size: "2.9 MB",
      downloads: 987,
      icon: faShieldAlt,
      isRestricted: true,
      fileName: "Security, Performance & Code Quality.pdf",
      localPath: pathSix
    }
  ];

  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "The course helped me understand design communication.",
      author: "Aishwarya L"
    },
    {
      id: 2,
      rating: 4,
      text: "I learned industry-level vector design.",
      author: "Pradeep V"
    },
    {
      id: 3,
      rating: 5,
      text: "Good foundation for starting a design career.",
      author: "Nithin S"
    },
    {
      id: 4,
      rating: 4,
      text: "The course was well structured and easy to follow.",
      author: "Pavithra S"
    }
  ];

  const benefits = [
    {
      icon: faBriefcase,
      title: "Career Opportunities",
      description: "Access to 1000+ job placements with our partner companies across tech industries"
    },
    {
      icon: faGraduationCap,
      title: "Certification",
      description: "Industry-recognized certification that boosts your resume and credibility"
    },
    {
      icon: faUserTie,
      title: "Mentorship",
      description: "1-on-1 mentorship sessions with experienced software development professionals"
    },
    {
      icon: faLaptop,
      title: "Software Access",
      description: "Free access to premium development tools and IDEs during the course"
    },
    {
      icon: faNetworkWired,
      title: "Networking",
      description: "Join our community of 10,000+ developers and industry professionals"
    },
    {
      icon: faMoneyBillWave,
      title: "Money Back Guarantee",
      description: "100% money-back guarantee if you don't land a job within 6 months"
    }
  ];

  const totalResourcesCount = 20;
  const yourDownloadsCount = downloadedResources.length;
  const yourDownloadsPercentage = Math.round((yourDownloadsCount / totalResourcesCount) * 100);

  // Function to download local files
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
      setToastMessage(`Downloaded: ${resourceTitle}`);
      
    } catch (error) {
      console.error('Download error:', error);
      setToastMessage(`Error downloading ${resourceTitle}. File might not exist.`);
    }
  };

  const handleJoinCourseForResource = (resourceTitle) => {
    setToastMessage(`"${resourceTitle}" is only available to enrolled students. Please join our course to download this premium resource.`);
    
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

      // SUCCESS UI
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
    showLockedSectionToast("Software Developer Benefits");
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon 
          key={i} 
          icon={faStar} 
          className={i <= rating ? 'SD-filled' : ''}
        />
      );
    }
    return stars;
  };

  const getFileTypeIcon = (type) => {
    switch(type) {
      case 'pdf': return <FontAwesomeIcon icon={faFilePdf} />;
      case 'zip': return <FontAwesomeIcon icon={faFileArchive} />;
      case 'doc': return <FontAwesomeIcon icon={faFileWord} />;
      default: return <FontAwesomeIcon icon={faPaperclip} />;
    }
  };

  return (
    <>
  
    <div>
      <Helmet>
            <title>Engloray tech</title>
            <meta name="description" content="Build scalable software apps mastering algorithms, DSA, and design" />
            <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
            {/* <link rel="canonical" href="https://yourapp.com" /> */}
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Your App | Config" />
            <meta property="og:description" content="Lorem Ipsum" />
            {/* <meta property="og:url" content="https://yourapp.com" /> */}
      </Helmet>
    
  
      {/* Toast Message - Fixed Position */}
      {showToast && (
        <div className="SD-toast-message show">
          <div className="SD-toast-content">
            <span className="SD-toast-icon">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <span className="SD-toast-text">{toastMessage}</span>
            <button 
              className="SD-toast-close"
              onClick={() => setShowToast(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      )}

      <div 
        className="SD-content" 
        ref={containerRef}
      >
        {/* <TopNavBar/> */}
        {/* <Navbar/> */}
        {/* Hero Section */}
        <section 
          className="SD-section SD-hero-section" 
          ref={setRef('home')}
          id="home"
        >
          <div className="SD-simple-particles">
            <div className="SD-simple-circle"></div>
            <div className="SD-simple-circle"></div>
            <div className="SD-simple-circle"></div>
            <div className="SD-simple-triangle"></div>
          </div>

          <div className="SD-hero-content">
            <p className="SD-hero-sublitle">Master Software Development</p>
            <p className="SD-hero-subtitle1">Learn modern Software Engineering with our comprehensive course. Scroll down to explore the curriculum and access valuable resources.</p>
            <button 
              className="SD-cta-button"
              onClick={() => scrollToSection('course')}
            >
              <FontAwesomeIcon icon={faRocket} /> Start Learning
            </button>
          </div>
        </section>

        {/* Course Content Section */}
        <section 
          className="SD-section SD-course-horizontal-section" 
          ref={setRef('course')}
          id="course"
        >
          <div className="SD-course-background-overlay"></div>
          
          <div className="SD-course-horizontal-container">
            <h2 className="SD-section-title">Software Developer Course</h2>
            <p className="SD-section-content">Build modern applications and software solutions</p>
            
            <div className="SD-course-carousel-container">
              <div className="SD-carousel-wrapper">
                <div 
                  className="SD-course-cards-wrapper"
                  ref={cardsWrapperRef}
                >
                  {courseContent.map((item, index) => (
                    <div 
                      key={item.id} 
                      className="SD-course-horizontal-card"
                      style={{ backgroundImage: `url(${item.bgImage})` }}
                    >
                      <div className="SD-card-overlay"></div>
                      
                      <div className="SD-card-content">
                        <div className="SD-card-header">
                          <span className="SD-module-number">Module {item.id}</span>
                          <span className="SD-duration">
                            <FontAwesomeIcon icon={faClock} /> {item.duration}
                          </span>
                        </div>
                        
                        <div className="SD-card-body">
                          <h3 className="SD-course-title">
                            <FontAwesomeIcon icon={item.icon} /> {item.title}
                          </h3>
                          
                          <div className="SD-course-features">
                            <ul className="SD-points-list">
                              {item.description.map((point, pointIndex) => (
                                <li key={pointIndex} className="SD-feature-item">
                                  <span className="SD-feature-icon">
                                    <FontAwesomeIcon icon={faCheck} />
                                  </span>
                                  <span className="SD-feature-text">{point}</span>
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
              
              <div className="SD-carousel-arrows">
                <button 
                  className="SD-carousel-arrow SD-carousel-arrow-left"
                  onClick={() => handleCourseArrowClick('left')}
                  aria-label="Previous module"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                
                <button 
                  className="SD-carousel-arrow SD-carousel-arrow-right"
                  onClick={() => handleCourseArrowClick('right')}
                  aria-label="Next module"
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
            
            <div className="SD-course-dots">
              {courseContent.map((_, index) => (
                <button
                  key={index}
                  className={`SD-course-dot ${index === activeCourseIndex ? 'SD-active-dot' : ''}`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Sign In Form Section */}
        <section 
          className="SD-section" 
          ref={setRef('signin')}
          id="signin"
        >
          <div className="SD-simple-particles">
            <div className="SD-simple-circle"></div>
            <div className="SD-simple-triangle"></div>
            <div className="SD-simple-square"></div>
          </div>
          
          <div className="SD-signin-section">
            <h2 className="SD-section-title">Join Our Course</h2>
            
            <div className="SD-signin-container">
              <div className="SD-description-section">
                <h3 className="SD-section-subtitle1">
                  <FontAwesomeIcon icon={faCode} /> Software Developer course
                </h3>
                <p className="SD-section-description">
                  A software developer designs, builds, and maintains software applications and systems 
                  using programming languages and development tools. They solve complex problems, 
                  write efficient code, and create user-friendly interfaces, blending technical expertise 
                  with creativity to deliver functional and scalable digital solutions across various platforms 
                  and industries.
                </p>
                
                {!showForm && (
                  <button 
                    className="SD-show-form-btn"
                    onClick={() => setShowForm(true)}
                  >
                    <FontAwesomeIcon icon={faArrowRight} /> Register Now
                  </button>
                )}
              </div>

              {showForm && (
                <div className="SD-form-section">
                  <div className="SD-form-wrapper">
                    <button 
                      className="SD-close-form-btn"
                      onClick={() => setShowForm(false)}
                      aria-label="Close form"
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                    
                    <form className="SD-signin-form" onSubmit={handleSignInSubmit}>
                      <div className="SD-form-group">
                        <label htmlFor="email">
                          <FontAwesomeIcon icon={faEnvelope} /> Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          className={`SD-form-input ${errors.email ? 'SD-error' : ''}`}
                          placeholder="Enter your email"
                        />
                        {errors.email && <span className="SD-error-message">{errors.email}</span>}
                      </div>

                      <div className="SD-form-group">
                        <label htmlFor="course">
                          <FontAwesomeIcon icon={faBook} /> Course
                        </label>
                        <input
                          type="text"
                          id="course"
                          name="course"
                          value={formData.course}
                          onChange={handleFormChange}
                          className={`SD-form-input ${errors.password ? 'SD-error' : ''}`}
                          placeholder="Enter the course"
                        />
                        {errors.password && <span className="SD-error-message">{errors.password}</span>}
                      </div>

                      <div className="SD-form-group SD-checkbox-group">
                        <input
                          type="checkbox"
                          id="agreeTerms"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleFormChange}
                          className={errors.agreeTerms ? 'SD-error' : ''}
                        />
                        <label htmlFor="agreeTerms">
                          <FontAwesomeIcon icon={faCheckCircle} /> I agree to the Terms of Service and Privacy Policy
                        </label>
                        {errors.agreeTerms && <span className="SD-error-message">{errors.agreeTerms}</span>}
                      </div>

                      <button type="submit" className="SD-submit-btn">
                        <FontAwesomeIcon icon={faUserPlus} /> Register Now
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Assets, Code Libraries & Development Support */}
        <section 
          className="SD-section SD-locked-section" 
          ref={setRef('assets')}
          id="assets"
        >
          <div className="SD-locked-section-overlay"></div>
          <div className="SD-locked-content">
            <div className="SD-locked-icon">
              <span className="SD-premium-badge">
                <FontAwesomeIcon icon={faCrown} /> PREMIUM
              </span>
            </div>
            <h2 className="SD-section-title">Assets, Code Libraries & Development Support</h2>
            <p className="SD-section-description">
              Access our exclusive library of premium code assets, complete development kits, 
              and professional development support. Get 5000+ code snippets, 300+ API integrations, 
              development templates, and direct support from senior developers.
            </p>
            <button 
              className="SD-locked-btn"
              onClick={() => showLockedSectionToast("Assets, Code Libraries & Development Support")}
            >
              <span className="SD-locked-btn-text">
                <FontAwesomeIcon icon={faLock} /> Join course to Access
              </span>
            </button>
            <p className="SD-locked-note">
              <FontAwesomeIcon icon={faInfoCircle} /> Includes lifetime access to premium assets + 6 months of development support
            </p>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section 
          className="SD-section SD-full-particle-section" 
          ref={setRef('gallery')}
          id="gallery"
        >
          <div className="SD-full-spread-particles">
            {[...Array(15)].map((_, i) => (
              <div key={i} className={`SD-spread-particle SD-spread-particle-${i % 5}`}></div>
            ))}
          </div>
          
          <div className="SD-gallery-section">
            <h2 className="SD-section-title">
              <FontAwesomeIcon icon={faEye} /> Learning Environment
            </h2>
            <p className="SD-section-subtitle">Explore our interactive learning materials and resources</p>
            
            <div className="SD-gallery-container">
              <div className="SD-gallery-grid">
                {imagesWithDescriptions.map((imageData, index) => (
                  <div 
                    key={index} 
                    className="SD-gallery-item-wrapper"
                  >
                    <div className="SD-gallery-item">
                      <div 
                        className="SD-image-container"
                        onClick={() => handleImageClick(imageData)}
                      >
                        <img 
                          src={imageData.url} 
                          alt={imageData.title}
                          loading="lazy"
                        />
                        <div className="SD-image-overlay">
                          <span>
                            {activeDescription === imageData.title ? (
                              <>
                                <FontAwesomeIcon icon={faEyeSlash} /> Hide Details
                              </>
                            ) : (
                              <>
                                <FontAwesomeIcon icon={faEye} /> View Details
                              </>
                            )}
                          </span>
                        </div>
                      </div>
                      
                      <div className="SD-image-title">
                        <h4><FontAwesomeIcon icon={faCamera} /> {imageData.title}</h4>
                      </div>
                    </div>
                    
                    {activeDescription === imageData.title && (
                      <div className="SD-gallery-description">
                        <div className="SD-description-content">
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

        {/* Ready-to-Use Code Templates */}
        <section 
          className="SD-section SD-locked-section SD-templates-section" 
          ref={setRef('templates')}
          id="templates"
        >
          <div className="SD-locked-section-overlay"></div>
          <div className="SD-locked-content">
            <div className="SD-locked-icon">
              <span className="SD-premium-badge">
                <FontAwesomeIcon icon={faGem} /> EXCLUSIVE
              </span>
            </div>
            <h2 className="SD-section-title">Ready-to-Use Code Templates</h2>
            <p className="SD-section-description">
              Get instant access to our proprietary library of 1000+ professionally written code templates. 
              Includes web applications, mobile apps, API integrations, microservices, and production-ready 
              templates that are fully customizable and commercially licensed.
            </p>
            <button 
              className="SD-locked-btn SD-pay-now-btn"
              onClick={() => showLockedSectionToast("Ready-to-Use Code Templates")}
            >
              <span className="SD-locked-btn-text">
                <FontAwesomeIcon icon={faLock} /> Join course to Access
              </span>
            </button>
            <p className="SD-locked-note">
              <FontAwesomeIcon icon={faInfoCircle} /> One-time payment for lifetime access to all template updates
            </p>
          </div>
        </section>

        {/* Course Resources Section */}
        <section 
          className="SD-section SD-full-particle-section" 
          ref={setRef('resources')}
          id="resources"
        >
          <div className="SD-full-spread-particles">
            {[...Array(15)].map((_, i) => (
              <div key={i} className={`SD-spread-particle SD-spread-particle-${i % 5}`}></div>
            ))}
          </div>
          
          <div className="SD-resources-section">
            <h2 className="SD-section-title">
              <FontAwesomeIcon icon={faFileAlt} /> Course Resources
            </h2>
            <p className="SD-section-subtitle">
              Download valuable documents, templates, and guides to enhance your learning experience.
            </p>
            
            <div className="SD-resources-container">
              <div className="SD-resources-grid">
                {courseResources.map((resource) => (
                  <div 
                    key={resource.id} 
                    className="SD-resource-card"
                  >
                    <div className="SD-resource-icon">
                      <span className="SD-resource-icon-main">
                        <FontAwesomeIcon icon={resource.icon} />
                      </span>
                      <span className="SD-resource-type-icon">{getFileTypeIcon(resource.type)}</span>
                    </div>
                    
                    <div className="SD-resource-content">
                      <h3 className="SD-resource-title">{resource.title}</h3>
                      <p className="SD-resource-description">{resource.description}</p>
                      
                      <div className="SD-resource-meta">
                        <span className="SD-resource-type">
                          {resource.type.toUpperCase()} • {resource.size}
                        </span>
                        <span className="SD-resource-downloads">
                          <FontAwesomeIcon icon={faDownload} /> {resource.downloads.toLocaleString()} downloads
                        </span>
                        {resource.isRestricted && (
                          <span className="SD-resource-restricted-tag">
                            <FontAwesomeIcon icon={faLock} /> Course Exclusive
                          </span>
                        )}
                      </div>
                      
                      {resource.isRestricted ? (
                        <button 
                          className="SD-join-course-btn"
                          onClick={() => handleJoinCourseForResource(resource.title)}
                        >
                          <span>
                            <FontAwesomeIcon icon={faLock} /> Join Course to Download
                          </span>
                        </button>
                      ) : (
                        <button 
                          className={`SD-download-btn ${downloadedResources.includes(resource.id) ? 'SD-downloaded' : ''}`}
                          onClick={() => handleDownloadResource(resource.id, resource.title, resource.localPath, resource.fileName)}
                        >
                          {downloadedResources.includes(resource.id) ? (
                            <>
                              <span><FontAwesomeIcon icon={faCheckCircle} /> Downloaded</span>
                              <span className="SD-download-again">Download Again</span>
                            </>
                          ) : (
                            <>
                              <span><FontAwesomeIcon icon={faDownload} /> Download Now</span>
                              <span className="SD-free-badge">FREE</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="SD-resources-info">
                <div className="SD-resources-stats">
                  <div className="SD-stat-card">
                    <h3><FontAwesomeIcon icon={faFolderOpen} /> Total Resources</h3>
                    <p className="SD-stat-number">20</p>
                    <p className="SD-stat-label">Available Documents</p>
                  </div>
                  <div className="SD-stat-card">
                    <h3><FontAwesomeIcon icon={faDownload} /> Total Downloads</h3>
                    <p className="SD-stat-number">28,000</p>
                    <p className="SD-stat-label">By Students</p>
                  </div>
                  <div className="SD-stat-card">
                    <h3><FontAwesomeIcon icon={faUserCheck} /> Your Downloads</h3>
                    <p className="SD-stat-number">{yourDownloadsCount}</p>
                    <p className="SD-stat-label">
                      {yourDownloadsPercentage}% Downloaded
                      <div className="SD-progress-bar">
                        <div 
                          className="SD-progress-fill" 
                          style={{ width: `${yourDownloadsPercentage}%` }}
                        ></div>
                      </div>
                    </p>
                  </div>
                </div>
                
                <div className="SD-resources-note">
                  <h4><FontAwesomeIcon icon={faLightbulb} /> Note:</h4>
                  <p>
                    Our course includes <strong>20 comprehensive resources</strong> to support your learning journey. 
                    First 4 resources are available for free download. <strong>Developer Tool Cheatsheets</strong> and 
                    <strong> Portfolio Building Guide</strong> are exclusive to enrolled students. 
                    Join our course to access all 20 premium resources and unlock full learning potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Software Developer Benefits Section */}
        <section 
          className="SD-section SD-benefits-section" 
          ref={setRef('benefits')}
          id="benefits"
        >
          <div className="SD-simple-particles">
            <div className="SD-simple-circle"></div>
            <div className="SD-simple-triangle"></div>
            <div className="SD-simple-square"></div>
            <div className="SD-simple-hexagon"></div>
          </div>
          
          <div className="SD-benefits-container">
            <h2 className="SD-section-title">
              <FontAwesomeIcon icon={faStar} /> Software Developer Benefits
            </h2>
            <p className="SD-section-subtitle">
              When you join our comprehensive software development course, you unlock exclusive benefits 
              that accelerate your career growth and skill development.
            </p>
            
            <div className="SD-benefits-grid">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="SD-benefit-card"
                >
                  <div className="SD-benefit-icon">
                    <span className="SD-benefit-icon-emoji">
                      <FontAwesomeIcon icon={benefit.icon} />
                    </span>
                  </div>
                  <h3 className="SD-benefit-title">{benefit.title}</h3>
                  <p className="SD-benefit-description">{benefit.description}</p>
                </div>
              ))}
            </div>
            
            <div className="SD-benefits-summary">
              <div className="SD-benefits-stats">
                <div className="SD-benefit-stat">
                  <h4><FontAwesomeIcon icon={faUserGraduate} /> 10,000+</h4>
                  <p>Successful Graduates</p>
                </div>
                <div className="SD-benefit-stat">
                  <h4><FontAwesomeIcon icon={faChartLine} /> 94%</h4>
                  <p>Job Placement Rate</p>
                </div>
                <div className="SD-benefit-stat">
                  <h4><FontAwesomeIcon icon={faHandshake} /> 50+</h4>
                  <p>Industry Partners</p>
                </div>
                <div className="SD-benefit-stat">
                  <h4><FontAwesomeIcon icon={faHeadset} /> 24/7</h4>
                  <p>Community Support</p>
                </div>
              </div>
              
              <div className="SD-benefits-cta">
                <button 
                  className="SD-benefits-join-btn"
                  onClick={handleBenefitsClick}
                >
                  <FontAwesomeIcon icon={faRocket} /> Join Now & Get All Benefits
                </button>
                <p className="SD-benefits-guarantee">
                  <FontAwesomeIcon icon={faCheckCircle} /> 30-day money-back guarantee • 
                  <FontAwesomeIcon icon={faSyncAlt} /> Lifetime access • 
                  <FontAwesomeIcon icon={faCertificate} /> Certificate included
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section 
          className="SD-section SD-full-particle-section" 
          ref={setRef('feedback')}
          id="feedback"
        >
          <div className="SD-full-spread-particles">
            {[...Array(12)].map((_, i) => (
              <div key={i} className={`SD-spread-particle SD-spread-particle-${i % 4}`}></div>
            ))}
          </div>
          
          <div className="SD-feedback-section">
            <h2 className="SD-section-title">
              <FontAwesomeIcon icon={faStar} /> Student Testimonials
            </h2>
            <p className="SD-section-subtitle">Hear what our students have to say about their learning experience</p>
            
            <div className="SD-testimonials">
              <div className="SD-testimonial-cards">
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="SD-testimonial-card"
                  >
                    <div className="SD-stars">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p><FontAwesomeIcon icon={faQuoteLeft} /> {testimonial.text}</p>
                    <span className="SD-author">- {testimonial.author}</span>
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

export default SoftwareDeveloperInternPage;