import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGlobe,
  faPaintBrush,
  faBolt,
  faAtom,
  faRocket,
  faBriefcase,
  faGraduationCap,
  faChalkboardTeacher,
  faLaptopCode,
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
  faEnvelope,
  faPhone,
  faCalendar,
  faFileAlt,
  faCheckCircle,
  faUser,
  faChartLine,
  faCode,
  faPencilAlt,
  faShieldAlt,
  faArrowRight,
  faServer,
  faDatabase,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import './WebsiteDeveloperInternPage.css'
import { submitInternship } from "../../Sub Pages/HandleSubmit/InternshipSubmit";


import pathOne from '../../../assets/resources file/resources file/TECH/Website developer/Frontend Development Stack.pdf';
import pathTwo from '../../../assets/resources file/resources file/TECH/Website developer/Core Development Tools & Technology.pdf';
import pathFive from '../../../assets/resources file/resources file/TECH/Website developer/Benefits of Website Developer Resources.pdf';
import pathSix from '../../../assets/resources file/resources file/TECH/Website developer/Backend, Database & Server Support.pdf';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import Navbar from '../../../Components/Navbar/Navbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import TSPFFooter from '../TechGroupSubPagefooter/TSPFFooter';
import { Helmet } from 'react-helmet';

const WebsiteDeveloperInternPage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const sectionsRef = useRef({});
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

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = sectionsRef.current[sectionId];
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  // Set section ref
  const setRef = (sectionId) => (el) => {
    if (el) {
      sectionsRef.current[sectionId] = el;
    }
  };

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Add offset for better detection
      
      const sections = ['home', 'course', 'signin', 'assets', 'gallery', 'templates', 'resources', 'benefits', 'feedback'];
      
      for (const section of sections) {
        const element = sectionsRef.current[section];
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            if (activeSection !== section) {
              setActiveSection(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const showLockedSectionToast = (sectionName) => {
    setToastMessage(`🔒 ${sectionName} is locked. Please enroll in the course to access premium content.`);
  };

  const courseContent = [
    {
      id: 1,
      title: "Frontend Development",
      description: [
        "HTML5 & CSS3 Advanced",
        "JavaScript & ES6+ Features",
        "React.js & React Hooks",
        "Responsive Web Design",
        "CSS Frameworks (Bootstrap, Tailwind)",
        "Web Accessibility Standards"
      ],
      duration: "6 weeks",
      bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: 2,
      title: "Backend Development",
      description: [
        "Node.js & Express.js",
        "RESTful API Development",
        "Database Management (SQL & NoSQL)",
        "Authentication & Authorization",
        "Server Deployment",
        "API Security Best Practices"
      ],
      duration: "8 weeks",
      bgImage: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: 3,
      title: "Full-Stack Development",
      description: [
        "MERN/MEAN Stack Development",
        "Database Integration",
        "State Management",
        "Testing & Debugging",
        "DevOps & CI/CD",
        "Project Architecture"
      ],
      duration: "8 weeks",
      bgImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: 4,
      title: "Web Performance & SEO",
      description: [
        "Website Optimization",
        "Core Web Vitals",
        "Search Engine Optimization",
        "Performance Monitoring",
        "Caching Strategies",
        "CDN Implementation"
      ],
      duration: "6 weeks",
      bgImage: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    }
  ];

  const imagesWithDescriptions = [
    { 
      url: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Modern Web Lab",
      description: "Our state-of-the-art web development lab with high-performance computers and dual monitors for immersive coding sessions."
    },
    { 
      url: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Team Collaboration Space",
      description: "Students working together on web projects in our interactive collaboration zone with real-time code sharing."
    },
    { 
      url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Web Development Workstation",
      description: "Individual development stations equipped with professional tools and IDEs for hands-on web development practice."
    },
    { 
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Project Presentation Room",
      description: "Students showcasing web projects to instructors and peers in our dedicated presentation room."
    }
  ];

  // UPDATED: Course resources with local file paths
  const courseResources = [
    {
      id: 1,
      title: "Frontend Development Stack",
      description: "Detailed breakdown of all modules, learning objectives, and assessment criteria for the entire web development course.",
      type: "pdf",
      size: "2.5 MB",
      downloads: 2145,
      icon: <FontAwesomeIcon icon={faGlobe} />,
      isRestricted: false,
      fileName: "Frontend Development Stack.",
      localPath: pathOne
    },
    {
      id: 2,
      title: "Core Development Tools & Technology",
      description: "Collection of 150+ professionally designed website templates, UI components, and responsive layouts.",
      type: "pdf",
      size: "72 MB",
      downloads: 1856,
      icon: <FontAwesomeIcon icon={faPaintBrush} />,
      isRestricted: false,
      fileName: "Core Development Tools & Technology",
      localPath: pathTwo
    },
    {
      id: 3,
      title: "JavaScript Mastery Guide",
      description: "Comprehensive guide to modern JavaScript, ES6+ features, and advanced programming patterns.",
      type: "pdf",
      size: "3.2 MB",
      downloads: 2876,
      icon: <FontAwesomeIcon icon={faBolt} />,
      isRestricted: false,
      fileName: "javascript-mastery-guide.pdf",
      localPath: pathOne
    },
    {
      id: 4,
      title: "React.js Development Kit",
      description: "Essential React components, hooks, and best practices for modern web application development.",
      type: "zip",
      size: "45 MB",
      downloads: 1987,
      icon: <FontAwesomeIcon icon={faAtom} />,
      isRestricted: false,
      fileName: "Benefits of Website Developer Resources",
      localPath: pathTwo
    },
    {
      id: 5,
      title: "Benefits of Website Developer Resources",
      description: "Optimization techniques, performance metrics, and tools for building fast websites.",
      type: "pdf",
      size: "2.8 MB",
      downloads: 1567,
      icon: <FontAwesomeIcon icon={faRocket} />,
      isRestricted: true,
      fileName: "Benefits of Website Developer Resources",
      localPath: pathFive
    },
    {
      id: 6,
      title: "Backend, Database & Server Support",
      description: "Step-by-step guide to creating an impressive web developer portfolio with real projects.",
      type: "pdf",
      size: "3.1 MB",
      downloads: 1245,
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      isRestricted: true,
      fileName: "Backend, Database & Server Support",
      localPath: pathSix
    }
  ];

  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "I gained  confidence to work on real client apps.",
      author: "Suresh P"
    },
    {
      id: 2,
      rating: 4,
      text: "I learned how the users think before Designing.",
      author: "Prakash T"
    },
    {
      id: 3,
      rating: 5,
      text: "The trainers explained every step patiently.",
      author: "Harini R"
    },
    {
      id: 4,
      rating: 4,
      text: "Prefect course for beginners and career Switchers.",
      author: "Shalini P"
    }
  ];

  const benefits = [
    {
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      title: "Career Opportunities",
      description: "Access to 1500+ job placements with our tech partner companies across industries"
    },
    {
      icon: <FontAwesomeIcon icon={faGraduationCap} />,
      title: "Certification",
      description: "Industry-recognized certification that boosts your resume and credibility"
    },
    {
      icon: <FontAwesomeIcon icon={faChalkboardTeacher} />,
      title: "Mentorship",
      description: "1-on-1 mentorship sessions with experienced web development professionals"
    },
    {
      icon: <FontAwesomeIcon icon={faLaptopCode} />,
      title: "Software Access",
      description: "Free access to premium development tools and IDE licenses during the course"
    },
    {
      icon: <FontAwesomeIcon icon={faHandshake} />,
      title: "Networking",
      description: "Join our community of 15,000+ developers and industry professionals"
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
    showLockedSectionToast("Web Developer Benefits");
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon 
          key={i} 
          icon={faStar} 
          className={i <= rating ? 'WD-filled' : ''}
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
            <title>Engloray Tech</title>
            <meta name="description" content="Build live web applications from scratch with Git control." />
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
        <div className="WD-toast-message show">
          <div className="WD-toast-content">
            <span className="WD-toast-icon"><FontAwesomeIcon icon={faLock} /></span>
            <span className="WD-toast-text">{toastMessage}</span>
            <button 
              className="WD-toast-close"
              onClick={() => setShowToast(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      )}

      <div 
        className="WD-content" 
        ref={containerRef}
      >
        {/* <TopNavBar/> */}
        {/* <Navbar/> */}
        
        {/* Hero Section */}
        <section 
          className="WD-section WD-hero-section" 
          ref={setRef('home')}
          id="home"
        >
          <div className="WD-simple-particles">
            <div className="WD-simple-circle"></div>
            <div className="WD-simple-circle"></div>
            <div className="WD-simple-circle"></div>
            <div className="WD-simple-triangle"></div>
          </div>

          <div className="WD-hero-content">
            <p className="WD-hero-sublitle">Master Web Development</p>
            <p className="WD-hero-subtitle1">Learn modern Web Development with our comprehensive course. Scroll down to explore the curriculum and access valuable resources.</p>
            <button 
              className="WD-cta-button"
              onClick={() => scrollToSection('course')}
            >
              <FontAwesomeIcon icon={faRocket} /> Start Learning
            </button>
          </div>
        </section>

        {/* Course Content Section */}
        <section 
          className="WD-section WD-course-horizontal-section" 
          ref={setRef('course')}
          id="course"
        >
          <div className="WD-course-background-overlay"></div>
          
          <div className="WD-course-horizontal-container">
            <h2 className="WD-section-title">Web Developer Course</h2>
            <p className="WD-section-content">Build modern websites and web applications</p>
            
            <div className="WD-course-carousel-container">
              <div className="WD-carousel-wrapper">
                <div 
                  className="WD-course-cards-wrapper"
                  ref={cardsWrapperRef}
                >
                  {courseContent.map((item, index) => (
                    <div 
                      key={item.id} 
                      className="WD-course-horizontal-card"
                      style={{ backgroundImage: `url(${item.bgImage})` }}
                    >
                      <div className="WD-card-overlay"></div>
                      
                      <div className="WD-card-content">
                        <div className="WD-card-header">
                          <span className="WD-module-number">Module {item.id}</span>
                          <span className="WD-duration">{item.duration}</span>
                        </div>
                        
                        <div className="WD-card-body">
                          <h3 className="WD-course-title">{item.title}</h3>
                          
                          <div className="WD-course-features">
                            <ul className="WD-points-list">
                              {item.description.map((point, pointIndex) => (
                                <li key={pointIndex} className="WD-feature-item">
                                  <span className="WD-feature-icon"><FontAwesomeIcon icon={faCheck} /></span>
                                  <span className="WD-feature-text">{point}</span>
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
              
              <div className="WD-carousel-arrows">
                <button 
                  className="WD-carousel-arrow WD-carousel-arrow-left"
                  onClick={() => handleCourseArrowClick('left')}
                  aria-label="Previous module"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                
                <button 
                  className="WD-carousel-arrow WD-carousel-arrow-right"
                  onClick={() => handleCourseArrowClick('right')}
                  aria-label="Next module"
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
            
            <div className="WD-course-dots">
              {courseContent.map((_, index) => (
                <button
                  key={index}
                  className={`WD-course-dot ${index === activeCourseIndex ? 'WD-active-dot' : ''}`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Sign In Form Section */}
        <section 
          className="WD-section" 
          ref={setRef('signin')}
          id="signin"
        >
          <div className="WD-simple-particles">
            <div className="WD-simple-circle"></div>
            <div className="WD-simple-triangle"></div>
            <div className="WD-simple-square"></div>
          </div>
          
          <div className="WD-signin-section">
            <h2 className="WD-section-title">Join Our Course</h2>
            
            <div className="WD-signin-container">
              <div className="WD-description-section">
                <h3 className="WD-section-subtitle1"><FontAwesomeIcon icon={faCode} /> Web Developer course</h3>
                <p className="WD-section-description">
                  A web developer designs, builds, and maintains functional, user-friendly websites using coding languages,
                  frameworks, and modern technologies. They ensure responsive design, performance optimization, secure architecture,
                  seamless user experience, and smooth integration of backend and frontend systems to support business goals effectively.
                </p>
                
                {!showForm && (
                  <button 
                    className="WD-show-form-btn"
                    onClick={() => setShowForm(true)}
                  >
                    <FontAwesomeIcon icon={faRocket} /> Register Now
                  </button>
                )}
              </div>

              {showForm && (
                <div className="WD-form-section">
                  <div className="WD-form-wrapper">
                    <button 
                      className="WD-close-form-btn"
                      onClick={() => setShowForm(false)}
                      aria-label="Close form"
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                    
                    <form className="WD-signin-form" onSubmit={handleSignInSubmit}>
                      <div className="WD-form-group">
                        <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /> Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          className={`WD-form-input ${errors.email ? 'WD-error' : ''}`}
                          placeholder="Enter your email"
                        />
                        {errors.email && <span className="WD-error-message">{errors.email}</span>}
                      </div>

                      <div className="WD-form-group">
                        <label htmlFor="course"><FontAwesomeIcon icon={faEnvelope} /> Course</label>
                        <input
                          type="text"
                          id="course"
                          name="course"
                          value={formData.course}
                          onChange={handleFormChange}
                          className={`WD-form-input ${errors.password ? 'WD-error' : ''}`}
                          placeholder="Enter Course Name"
                        />
                        {errors.password && <span className="WD-error-message">{errors.password}</span>}
                      </div>

                      <div className="WD-form-group WD-checkbox-group">
                        <input
                          type="checkbox"
                          id="agreeTerms"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleFormChange}
                          className={errors.agreeTerms ? 'WD-error' : ''}
                        />
                        <label htmlFor="agreeTerms">
                          <FontAwesomeIcon icon={faCheckCircle} /> I agree to the Terms of Service and Privacy Policy
                        </label>
                        {errors.agreeTerms && <span className="WD-error-message">{errors.agreeTerms}</span>}
                      </div>

                      <button type="submit" className="WD-submit-btn">
                        <FontAwesomeIcon icon={faRocket} /> Register Now
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
          className="WD-section WD-locked-section" 
          ref={setRef('assets')}
          id="assets"
        >
          <div className="WD-locked-section-overlay"></div>
          <div className="WD-locked-content">
            <div className="WD-locked-icon">
              <span className="WD-premium-badge"><FontAwesomeIcon icon={faCrown} /> PREMIUM</span>
            </div>
            <h2 className="WD-section-title">Assets, Code Libraries & Development Support</h2>
            <p className="WD-section-description">
              Access our exclusive library of premium code assets, complete development kits, 
              and professional development support. Get 5000+ reusable components, 300+ API integrations, 
              code templates, and direct support from senior developers.
            </p>
            <button 
              className="WD-locked-btn"
              onClick={() => showLockedSectionToast("Assets, Code Libraries & Development Support")}
            >
              <span className="WD-locked-btn-text"><FontAwesomeIcon icon={faLock} /> Join course to Access</span>
            </button>
            <p className="WD-locked-note">
              <FontAwesomeIcon icon={faStar} /> Includes lifetime access to premium code assets + 6 months of development support
            </p>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section 
          className="WD-section WD-full-particle-section" 
          ref={setRef('gallery')}
          id="gallery"
        >
          <div className="WD-full-spread-particles">
            {[...Array(15)].map((_, i) => (
              <div key={i} className={`WD-spread-particle WD-spread-particle-${i % 5}`}></div>
            ))}
          </div>
          
          <div className="WD-gallery-section">
            <h2 className="WD-section-title"><FontAwesomeIcon icon={faEye} /> Learning Environment</h2>
            <p className="WD-section-subtitle">Explore our interactive learning materials and resources</p>
            
            <div className="WD-gallery-container">
              <div className="WD-gallery-grid">
                {imagesWithDescriptions.map((imageData, index) => (
                  <div 
                    key={index} 
                    className="WD-gallery-item-wrapper"
                  >
                    <div className="WD-gallery-item">
                      <div 
                        className="WD-image-container"
                        onClick={() => handleImageClick(imageData)}
                      >
                        <img 
                          src={imageData.url} 
                          alt={imageData.title}
                          loading="lazy"
                        />
                        <div className="WD-image-overlay">
                          <span>
                            {activeDescription === imageData.title ? (
                              <><FontAwesomeIcon icon={faEye} /> Hide Details</>
                            ) : (
                              <><FontAwesomeIcon icon={faEye} /> View Details</>
                            )}
                          </span>
                        </div>
                      </div>
                      
                      <div className="WD-image-title">
                        <h4>{imageData.title}</h4>
                      </div>
                    </div>
                    
                    {activeDescription === imageData.title && (
                      <div className="WD-gallery-description">
                        <div className="WD-description-content">
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

        {/* Ready-to-Use Web Templates */}
        <section 
          className="WD-section WD-locked-section WD-templates-section" 
          ref={setRef('templates')}
          id="templates"
        >
          <div className="WD-locked-section-overlay"></div>
          <div className="WD-locked-content">
            <div className="WD-locked-icon">
              <span className="WD-premium-badge"><FontAwesomeIcon icon={faGem} /> EXCLUSIVE</span>
            </div>
            <h2 className="WD-section-title">Ready-to-Use Web Templates</h2>
            <p className="WD-section-description">
              Get instant access to our proprietary library of 1000+ professionally developed web templates. 
              Includes e-commerce sites, business websites, admin dashboards, UI/UX components, 
              and responsive templates that are fully customizable and commercially licensed.
            </p>
            <button 
              className="WD-locked-btn WD-pay-now-btn"
              onClick={() => showLockedSectionToast("Ready-to-Use Web Templates")}
            >
              <span className="WD-locked-btn-text"><FontAwesomeIcon icon={faLock} /> Join course to Access</span>
            </button>
            <p className="WD-locked-note">
              <FontAwesomeIcon icon={faStar} /> One-time payment for lifetime access to all template updates
            </p>
          </div>
        </section>

        {/* Course Resources Section */}
        <section 
          className="WD-section WD-full-particle-section" 
          ref={setRef('resources')}
          id="resources"
        >
          <div className="WD-full-spread-particles">
            {[...Array(15)].map((_, i) => (
              <div key={i} className={`WD-spread-particle WD-spread-particle-${i % 5}`}></div>
            ))}
          </div>
          
          <div className="WD-resources-section">
            <h2 className="WD-section-title"><FontAwesomeIcon icon={faFileAlt} /> Course Resources</h2>
            <p className="WD-section-subtitle">
              Download valuable documents, templates, and guides to enhance your learning experience.
            </p>
            
            <div className="WD-resources-container">
              <div className="WD-resources-grid">
                {courseResources.map((resource) => (
                  <div 
                    key={resource.id} 
                    className="WD-resource-card"
                  >
                    <div className="WD-resource-icon">
                      <span className="WD-resource-icon-main">{resource.icon}</span>
                      <span className="WD-resource-type-icon">{getFileTypeIcon(resource.type)}</span>
                    </div>
                    
                    <div className="WD-resource-content">
                      <h3 className="WD-resource-title">{resource.title}</h3>
                      <p className="WD-resource-description">{resource.description}</p>
                      
                      <div className="WD-resource-meta">
                        <span className="WD-resource-type">
                          {resource.type.toUpperCase()} • {resource.size}
                        </span>
                        <span className="WD-resource-downloads">
                          <FontAwesomeIcon icon={faDownload} /> {resource.downloads.toLocaleString()} downloads
                        </span>
                        {resource.isRestricted && (
                          <span className="WD-resource-restricted-tag">
                            <FontAwesomeIcon icon={faLock} /> Course Exclusive
                          </span>
                        )}
                      </div>
                      
                      {resource.isRestricted ? (
                        <button 
                          className="WD-join-course-btn"
                          onClick={() => handleJoinCourseForResource(resource.title)}
                        >
                          <span><FontAwesomeIcon icon={faLock} /> Join Course to Download</span>
                        </button>
                      ) : (
                        <button 
                          className={`WD-download-btn ${downloadedResources.includes(resource.id) ? 'WD-downloaded' : ''}`}
                          onClick={() => handleDownloadResource(resource.id, resource.title, resource.localPath, resource.fileName)}
                        >
                          {downloadedResources.includes(resource.id) ? (
                            <>
                              <span><FontAwesomeIcon icon={faCheckCircle} /> Downloaded</span>
                              <span className="WD-download-again">Download Again</span>
                            </>
                          ) : (
                            <>
                              <span><FontAwesomeIcon icon={faDownload} /> Download Now</span>
                              <span className="WD-free-badge">FREE</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="WD-resources-info">
                <div className="WD-resources-stats">
                  <div className="WD-stat-card">
                    <h3><FontAwesomeIcon icon={faFileAlt} /> Total Resources</h3>
                    <p className="WD-stat-number">20</p>
                    <p className="WD-stat-label">Available Documents</p>
                  </div>
                  <div className="WD-stat-card">
                    <h3><FontAwesomeIcon icon={faDownload} /> Total Downloads</h3>
                    <p className="WD-stat-number">28,000</p>
                    <p className="WD-stat-label">By Students</p>
                  </div>
                  <div className="WD-stat-card">
                    <h3><FontAwesomeIcon icon={faUser} /> Your Downloads</h3>
                    <p className="WD-stat-number">{yourDownloadsCount}</p>
                    <p className="WD-stat-label">
                      {yourDownloadsPercentage}% Downloaded
                      <div className="WD-progress-bar">
                        <div 
                          className="WD-progress-fill" 
                          style={{ width: `${yourDownloadsPercentage}%` }}
                        ></div>
                      </div>
                    </p>
                  </div>
                </div>
                
                <div className="WD-resources-note">
                  <h4><FontAwesomeIcon icon={faLightbulb} /> Note:</h4>
                  <p>
                    Our course includes <strong>20 comprehensive resources</strong> to support your learning journey. 
                    First 4 resources are available for free download. <strong>Web Performance Handbook</strong> and 
                    <strong> Portfolio Project Guide</strong> are exclusive to enrolled students. 
                    Join our course to access all 20 premium resources and unlock full learning potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Web Developer Benefits Section */}
        <section 
          className="WD-section WD-benefits-section" 
          ref={setRef('benefits')}
          id="benefits"
        >
          <div className="WD-simple-particles">
            <div className="WD-simple-circle"></div>
            <div className="WD-simple-triangle"></div>
            <div className="WD-simple-square"></div>
            <div className="WD-simple-hexagon"></div>
          </div>
          
          <div className="WD-benefits-container">
            <h2 className="WD-section-title"><FontAwesomeIcon icon={faStar} /> Web Developer Benefits</h2>
            <p className="WD-section-subtitle">
              When you join our comprehensive web development course, you unlock exclusive benefits 
              that accelerate your career growth and skill development.
            </p>
            
            <div className="WD-benefits-grid">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="WD-benefit-card"
                >
                  <div className="WD-benefit-icon">
                    <span className="WD-benefit-icon-emoji">{benefit.icon}</span>
                  </div>
                  <h3 className="WD-benefit-title">{benefit.title}</h3>
                  <p className="WD-benefit-description">{benefit.description}</p>
                </div>
              ))}
            </div>
            
            <div className="WD-benefits-summary">
              <div className="WD-benefits-stats">
                <div className="WD-benefit-stat">
                  <h4>15,000+</h4>
                  <p><FontAwesomeIcon icon={faGraduationCap} /> Successful Graduates</p>
                </div>
                <div className="WD-benefit-stat">
                  <h4>96%</h4>
                  <p><FontAwesomeIcon icon={faBriefcase} /> Job Placement Rate</p>
                </div>
                <div className="WD-benefit-stat">
                  <h4>80+</h4>
                  <p><FontAwesomeIcon icon={faBuilding} /> Tech Partner Companies</p>
                </div>
                <div className="WD-benefit-stat">
                  <h4>24/7</h4>
                  <p><FontAwesomeIcon icon={faComments} /> Community Support</p>
                </div>
              </div>
              
              <div className="WD-benefits-cta">
                <button 
                  className="WD-benefits-join-btn"
                  onClick={handleBenefitsClick}
                >
                  <FontAwesomeIcon icon={faRocket} /> Join Now & Get All Benefits
                </button>
                <p className="WD-benefits-guarantee">
                  <FontAwesomeIcon icon={faCheckCircle} /> 30-day money-back guarantee • <FontAwesomeIcon icon={faSyncAlt} /> Lifetime access • <FontAwesomeIcon icon={faCertificate} /> Certificate included
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section 
          className="WD-section WD-full-particle-section" 
          ref={setRef('feedback')}
          id="feedback"
        >
          <div className="WD-full-spread-particles">
            {[...Array(12)].map((_, i) => (
              <div key={i} className={`WD-spread-particle WD-spread-particle-${i % 4}`}></div>
            ))}
          </div>
          
          <div className="WD-feedback-section">
            <h2 className="WD-section-title"><FontAwesomeIcon icon={faStar} /> Student Testimonials</h2>
            <p className="WD-section-subtitle">Hear what our students have to say about their learning experience</p>
            
            <div className="WD-testimonials">
              <div className="WD-testimonial-cards">
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="WD-testimonial-card"
                  >
                    <div className="WD-stars">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p>{testimonial.text}</p>
                    <span className="WD-author">- {testimonial.author}</span>
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

export default WebsiteDeveloperInternPage;