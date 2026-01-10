import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPaintBrush,
  faLaptopCode,
  faMobileAlt,
  faRocket,
  faBriefcase,
  faStar,
  faBook,
  faPencilAlt,
  faImage,
  faVideo,
  faFont,
  faCamera,
  faFileAlt,
  faSave,
  faClipboard,
  faChalkboardTeacher,
  faUserTie,
  faHandshake,
  faGraduationCap,
  faTrophy,
  faSyncAlt,
  faBullseye,
  faFlask,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faComments,
  faLock,
  faCheck,
  faCertificate,
  faBuilding,
  faGlobe,
  faQrcode,
  faUser,
  faPlayCircle,
  faPauseCircle,
  faClock,
  faCheckCircle,
  faTimes,
  faArrowRight,
  faRulerCombined,
  faPenFancy,
  faLightbulb,
  faFilePdf,
  faFileArchive,
  faFileWord,
  faFile,
  faDownload,
  faUsers,
  faMoneyBillWave,
  faNetworkWired,
  faTools,
  faPalette,
  faLayerGroup,
  faEye,
  faShieldAlt,
  faCrown,
  faGem,
  faInfoCircle  // This was added earlier
} from '@fortawesome/free-solid-svg-icons';
import './GraphicDesignerInternPage.css';
import { submitInternship } from "../../Sub Pages/HandleSubmit/InternshipSubmit";


import pathOne from '../../../assets/resources file/resources file/TECH/GRAPHICS DESIGNERS/Design Tools & Technology.pdf';
import pathTwo from '../../../assets/resources file/resources file/TECH/GRAPHICS DESIGNERS/Graphic Designer Benefits.pdf';
import pathFive from '../../../assets/resources file/resources file/TECH/GRAPHICS DESIGNERS/Learning, Skill Development & Growth.pdf';
import pathSix from '../../../assets/resources file/resources file/TECH/GRAPHICS DESIGNERS/Productivity, AI & Workflow Support.pdf';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import Navbar from '../../../Components/Navbar/Navbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import { Helmet } from 'react-helmet';

const GraphicDesignerInternPage = () => {
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


  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Adjust for header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'course', 'signin', 'assets', 'gallery', 'templates', 'resources', 'benefits', 'feedback'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
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

    window.addEventListener('scroll', handleScroll);
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

  const showLockedSectionToast = (sectionName) => {
    setToastMessage(`🔒 ${sectionName} is locked. Please enroll in the course to access premium content.`);
  };
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const payload = {
      email: formData.email,
      course: formData.course
    };

    await submitInternship(payload);

    // ✅ success UI
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
    alert(error.message); // backend error text
  }
};


  const courseContent = [
    {
      id: 1,
      title: "Typography",
      description: [
        "Adobe Fonts (Learning Library)",
        "Google Fonts Knowledge",
        "Type-Scale Generator (Figma / Online Tools)",
        "Figma Typography Tools",
        "FontPair & Typ.io",
        "LearnUI / UX Beginner Typography Sections"
      ],
      duration: "4 weeks",
      bgImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      icon: <FontAwesomeIcon icon={faFont} />
    },
    {
      id: 2,
      title: "Color Theory",
      description: [
        "Figma Color Styles / Contrast Checker",
        "Adobe Color",
        "Coolors.co",
        "Canva Color Wheel",
        "Color Hunt",
        "Muzli Colors"
      ],
      duration: "6 weeks",
      bgImage: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      icon: <FontAwesomeIcon icon={faPalette} />
    },
    {
      id: 3,
      title: "Layout & Composition",
      description: [
        "Grid System Generators",
        "Figma Layout Grids",
        "Adobe XD / Illustrator",
        "Canva Design School",
        "Webflow University",
        "Pinterest / Behance Layout"
      ],
      duration: "8 weeks",
      bgImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      icon: <FontAwesomeIcon icon={faLayerGroup} />
    },
    {
      id: 4,
      title: "Imagery & Visual Elements",
      description: [
        "Unsplash (Photography Libraries)",
        "Photoshop (Enhancement Tools)",
        "Noun Project (Icon Librarys)",
        "Vectornator (Illustration Tools)",
        "Canva Design School",
        "Pinterest/Behance Mood Boards"
      ],
      duration: "6 weeks",
      bgImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      icon: <FontAwesomeIcon icon={faImage} />
    }
  ];

  const imagesWithDescriptions = [
    { 
      url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Modern Learning Studio",
      description: "Our state-of-the-art classroom with dual monitors and ergonomic furniture for comfortable learning sessions.",
      icon: <FontAwesomeIcon icon={faChalkboardTeacher} />
    },
    { 
      url: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Collaboration Space",
      description: "Students working together on projects in our interactive collaboration zone with whiteboards and discussion areas.",
      icon: <FontAwesomeIcon icon={faUsers} />
    },
    { 
      url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Design Workstation",
      description: "Individual design stations equipped with high-performance computers and creative tools for hands-on practice.",
      icon: <FontAwesomeIcon icon={faLaptopCode} />
    },
    { 
      url: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "Project Presentation",
      description: "Student presenting final project to instructors and peers in our presentation room with multimedia equipment.",
      icon: <FontAwesomeIcon icon={faRocket} />
    }
  ];

  // Course resources with local file paths
  const courseResources = [
    {
      id: 1,
      title: "Design Tools & Technology",
      description: "Detailed breakdown of all modules, learning objectives, and assessment criteria for the entire graphic design course.",
      type: "pdf",
      size: "2.4 MB",
      downloads: 2345,
      icon: <FontAwesomeIcon icon={faTools} />,
      isRestricted: false,
      fileName: "Design Tools & Technology.pdf",
      localPath: pathOne
    },
    {
      id: 2,
      title: "Graphic Designer Benefits",
      description: "Comprehensive guide to color psychology, harmonies, and practical applications in graphic design.",
      type: "pdf",
      size: "3.1 MB",
      downloads: 1876,
      icon: <FontAwesomeIcon icon={faStar} />,  // Changed from faSparkles to faStar
      isRestricted: false,
      fileName: "Graphic Designer Benefits.pdf",
      localPath: pathTwo
    },
    {
      id: 3,
      title: "Typography Reference Guide",
      description: "Essential typography rules, font pairing suggestions, and best practices for readable design.",
      type: "pdf",
      size: "1.8 MB",
      downloads: 1567,
      icon: <FontAwesomeIcon icon={faFont} />,
      isRestricted: false,
      fileName: "Typography Reference Guide.pdf",
      localPath: pathOne
    },
    {
      id: 4,
      title: "Design Templates Pack",
      description: "Collection of 50+ professionally designed templates for business cards, brochures, social media posts, and more.",
      type: "zip",
      size: "45 MB",
      downloads: 1245,
      icon: <FontAwesomeIcon icon={faPaintBrush} />,
      isRestricted: false,
      fileName: "Design Templates Pack.zip",
      localPath: pathOne
    },
    {
      id: 5,
      title: "Learning, Skill Development & Growth",
      description: "Keyboard shortcuts and workflow tips for Adobe Photoshop, Illustrator, Figma, and Canva.",
      type: "pdf",
      size: "1.2 MB",
      downloads: 987,
      icon: <FontAwesomeIcon icon={faGraduationCap} />,
      isRestricted: true,
      fileName: "Learning, Skill Development & Growth.pdf",
      localPath: pathFive
    },
    {
      id: 6,
      title: "Productivity, AI & Workflow Support",
      description: "Step-by-step guide to creating an impressive design portfolio that gets you hired.",
      type: "pdf",
      size: "2.7 MB",
      downloads: 743,
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      isRestricted: true,
      fileName: "Productivity, AI & Workflow Support.pdf",
      localPath: pathSix
    },
  ];

  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Learning graphic design from scratch at ENGLORAY helped me start my design career.",
      author: "Arun kumar"
    },
    {
      id: 2,
      rating: 4,
      text: "I gained confidence and clarity in design fundamentals.",
      author: "Anitha M"
    },
    {
      id: 3,
      rating: 5,
      text: "From zero to portfolio-ENGLORAY guided me step by step.",
      author: "Karthik P"
    },
    {
      id: 4,
      rating: 4,
      text: "The training was beginner-friendly and very practical.",
      author: "Deepika R"
    }
  ];

  const benefits = [
    {
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      title: "Career Opportunities",
      description: "Access to 1000+ job placements with our partner companies across industries"
    },
    {
      icon: <FontAwesomeIcon icon={faCertificate} />,
      title: "Certification",
      description: "Industry-recognized certification that boosts your resume and credibility"
    },
    {
      icon: <FontAwesomeIcon icon={faChalkboardTeacher} />,
      title: "Mentorship",
      description: "1-on-1 mentorship sessions with experienced graphic design professionals"
    },
    {
      icon: <FontAwesomeIcon icon={faTools} />,
      title: "Software Access",
      description: "Free access to premium design software and tools during the course"
    },
    {
      icon: <FontAwesomeIcon icon={faNetworkWired} />,
      title: "Networking",
      description: "Join our community of 10,000+ designers and industry professionals"
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

  // Function to download local files
  const handleDownloadResource = (resourceId, resourceTitle, localPath, fileName) => {
    if (!downloadedResources.includes(resourceId)) {
      setDownloadedResources(prev => [...prev, resourceId]);
    }
    
    try {
      if (!localPath) {
        setToastMessage(`❌ File "${resourceTitle}" is not available for download.`);
        return;
      }
      
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

const handleSignSubmit = async (e) => {
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
    showLockedSectionToast("Graphic Designer Benefits");
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon 
          key={i} 
          icon={faStar} 
          className={i <= rating ? 'GD-filled' : ''}
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
      default: return <FontAwesomeIcon icon={faFile} />;
    }
  };

  return (
    <>
    <div>
      <Helmet>
            <title>Engloray Tech</title>
            <meta name="description" content="Transform creative concepts into professional designs while mastering Adobe" />
            <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
            {/* <link rel="canonical" href="https://yourapp.com" /> */}
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Your App | Config" />
            <meta property="og:description" content="Lorem Ipsum" />
            {/* <meta property="og:url" content="https://yourapp.com" /> */}
      </Helmet>
    </div>
      {/* Toast Message - Fixed Position */}
      {showToast && (
        <div className="GD-toast-message show">
          <div className="GD-toast-content">
            <span className="GD-toast-icon"><FontAwesomeIcon icon={faLock} /></span>
            <span className="GD-toast-text">{toastMessage}</span>
            <button 
              className="GD-toast-close"
              onClick={() => setShowToast(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      )}

      <div className="GD-content" ref={containerRef}>
        {/* <TopNavBar/> */}
        {/* <Navbar/> */}
        
        {/* Hero Section */}
        <section 
          className="GD-section GD-hero-section" 
          id="home"
        >
          <div className="GD-simple-particles">
            <div className="GD-simple-circle"></div>
            <div className="GD-simple-circle"></div>
            <div className="GD-simple-circle"></div>
            <div className="GD-simple-triangle"></div>
          </div>

          <div className="GD-hero-content">
            <p className="GD-hero-sublitle">Master Graphic Design</p>
            <p className="GD-hero-subtitle1">Learn modern Graphic Designing with our comprehensive course. Scroll down to explore the curriculum and access valuable resources.</p>
            <button 
              className="GD-cta-button"
              onClick={() => scrollToSection('course')}
            >
              <FontAwesomeIcon icon={faRocket} /> Start Learning
            </button>
          </div>
        </section>

        {/* Course Content Section */}
        <section 
          className="GD-section GD-course-horizontal-section" 
          id="course"
        >
          <div className="GD-course-background-overlay"></div>
          
          <div className="GD-course-horizontal-container">
            <h2 className="GD-section-title">Graphic Designer Course</h2>
            <p className="GD-section-content">Create stunning Visual designs and Branding materials</p>
            
            <div className="GD-course-carousel-container">
              <div className="GD-carousel-wrapper">
                <div 
                  className="GD-course-cards-wrapper"
                  ref={cardsWrapperRef}
                >
                  {courseContent.map((item, index) => (
                    <div 
                      key={item.id} 
                      className="GD-course-horizontal-card"
                      style={{ backgroundImage: `url(${item.bgImage})` }}
                    >
                      <div className="GD-card-overlay"></div>
                      
                      <div className="GD-card-content">
                        <div className="GD-card-header">
                          <span className="GD-module-number">Module {item.id}</span>
                          <span className="GD-duration">{item.duration}</span>
                        </div>
                        
                        <div className="GD-card-body">
                          <div className="GD-course-title-wrapper">
                            <div className="GD-course-icon">{item.icon}</div>
                            <h3 className="GD-course-title">{item.title}</h3>
                          </div>
                          
                          <div className="GD-course-features">
                            <ul className="GD-points-list">
                              {item.description.map((point, pointIndex) => (
                                <li key={pointIndex} className="GD-feature-item">
                                  <span className="GD-feature-icon"><FontAwesomeIcon icon={faCheck} /></span>
                                  <span className="GD-feature-text">{point}</span>
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
              
              <div className="GD-carousel-arrows">
                <button 
                  className="GD-carousel-arrow GD-carousel-arrow-left"
                  onClick={() => handleCourseArrowClick('left')}
                  aria-label="Previous module"
                >
                  <FontAwesomeIcon icon={faArrowRight} style={{transform: 'rotate(180deg)'}} />
                </button>
                
                <button 
                  className="GD-carousel-arrow GD-carousel-arrow-right"
                  onClick={() => handleCourseArrowClick('right')}
                  aria-label="Next module"
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
            
            <div className="GD-course-dots">
              {courseContent.map((_, index) => (
                <button
                  key={index}
                  className={`GD-course-dot ${index === activeCourseIndex ? 'GD-active-dot' : ''}`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Sign In Form Section */}
        <section 
          className="GD-section" 
          id="signin"
        >
          <div className="GD-simple-particles">
            <div className="GD-simple-circle"></div>
            <div className="GD-simple-triangle"></div>
            <div className="GD-simple-square"></div>
          </div>
          
          <div className="GD-signin-section">
            <h2 className="GD-section-title">Join Our Course</h2>
            
            <div className="GD-signin-container">
              <div className="GD-description-section">
                <h3 className="GD-section-subtitle1"><FontAwesomeIcon icon={faPaintBrush} /> Graphic Designer course</h3>
                <p className="GD-section-description">
                  A graphic designer creates visual concepts that communicate messages through
                  typography, color, imagery, and layout. They design logos, branding, 
                  posters, digital content, and user interfaces, blending creativity with strategy
                  to solve problems and deliver clear, engaging visual communication across
                  different media platforms.
                </p>
                
                {!showForm && (
                  <button 
                    className="GD-show-form-btn"
                    onClick={() => setShowForm(true)}
                  >
                    <FontAwesomeIcon icon={faRocket} /> Register Now
                  </button>
                )}
              </div>

              {showForm && (
                <div className="GD-form-section">
                  <div className="GD-form-wrapper">
                    <button 
                      className="GD-close-form-btn"
                      onClick={() => setShowForm(false)}
                      aria-label="Close form"
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                    
                    <form className="GD-signin-form" onSubmit={handleSignSubmit}>
                      <div className="GD-form-group">
                        <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /> Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          className={`GD-form-input ${errors.email ? 'GD-error' : ''}`}
                          placeholder="Enter your email"
                        />
                        {errors.email && <span className="GD-error-message">{errors.email}</span>}
                      </div>

                      <div className="GD-form-group">
                        <label htmlFor="course"><FontAwesomeIcon icon={faEnvelope} /> Course</label>
                        <input
                          type="text"
                          id="course"
                          name="course"
                          value={formData.password}
                          onChange={handleFormChange}
                          className={`GD-form-input ${errors.password ? 'GD-error' : ''}`}
                          placeholder="Enter Course Name"
                        />
                        {errors.password && <span className="GD-error-message">{errors.password}</span>}
                      </div>

                      <div className="GD-form-group GD-checkbox-group">
                        <input
                          type="checkbox"
                          id="agreeTerms"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleFormChange}
                          className={errors.agreeTerms ? 'GD-error' : ''}
                        />
                        <label htmlFor="agreeTerms">
                          <FontAwesomeIcon icon={faCheckCircle} /> I agree to the Terms of Service and Privacy Policy
                        </label>
                        {errors.agreeTerms && <span className="GD-error-message">{errors.agreeTerms}</span>}
                      </div>

                      <button type="submit" className="GD-submit-btn">
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
          className="GD-section GD-locked-section" 
          id="assets"
        >
          <div className="GD-locked-section-overlay"></div>
          <div className="GD-locked-content">
            <div className="GD-locked-icon">
              <span className="GD-premium-badge"><FontAwesomeIcon icon={faCrown} /> PREMIUM</span>
            </div>
            <h2 className="GD-section-title">Assets, Branding & Design Support</h2>
            <p className="GD-section-description">
              Access our exclusive library of premium design assets, complete branding kits, 
              and professional design support. Get 5000+ vector illustrations, 300+ premium fonts, 
              brand identity templates, and direct support from senior designers.
            </p>
            <button 
              className="GD-locked-btn"
              onClick={() => showLockedSectionToast("Assets, Branding & Design Support")}
            >
              <span className="GD-locked-btn-text"><FontAwesomeIcon icon={faLock} /> Join course to Access</span>
            </button>
            <p className="GD-locked-note">
              <FontAwesomeIcon icon={faStar} /> Includes lifetime access to premium assets + 6 months of design support  {/* Changed from faSparkles to faStar */}
            </p>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section 
          className="GD-section GD-full-particle-section" 
          id="gallery"
        >
          <div className="GD-full-spread-particles">
            {[...Array(15)].map((_, i) => (
              <div key={i} className={`GD-spread-particle GD-spread-particle-${i % 5}`}></div>
            ))}
          </div>
          
          <div className="GD-gallery-section">
            <h2 className="GD-section-title"><FontAwesomeIcon icon={faEye} /> Learning Environment</h2>
            <p className="GD-section-subtitle">Explore our interactive learning materials and resources</p>
            
            <div className="GD-gallery-container">
              <div className="GD-gallery-grid">
                {imagesWithDescriptions.map((imageData, index) => (
                  <div 
                    key={index} 
                    className="GD-gallery-item-wrapper"
                  >
                    <div className="GD-gallery-item">
                      <div 
                        className="GD-image-container"
                        onClick={() => handleImageClick(imageData)}
                      >
                        <img 
                          src={imageData.url} 
                          alt={imageData.title}
                          loading="lazy"
                        />
                        <div className="GD-image-overlay">
                          <span>
                            {activeDescription === imageData.title ? (
                              <><FontAwesomeIcon icon={faEye} /> Hide Details</>
                            ) : (
                              <><FontAwesomeIcon icon={faEye} /> View Details</>
                            )}
                          </span>
                        </div>
                      </div>
                      
                      <div className="GD-image-title">
                        <div className="GD-image-icon">{imageData.icon}</div>
                        <h4>{imageData.title}</h4>
                      </div>
                    </div>
                    
                    {activeDescription === imageData.title && (
                      <div className="GD-gallery-description">
                        <div className="GD-description-content">
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

        {/* Ready-to-Use Design Templates */}
        <section 
          className="GD-section GD-locked-section GD-templates-section" 
          id="templates"
        >
          <div className="GD-locked-section-overlay"></div>
          <div className="GD-locked-content">
            <div className="GD-locked-icon">
              <span className="GD-premium-badge"><FontAwesomeIcon icon={faGem} /> EXCLUSIVE</span>
            </div>
            <h2 className="GD-section-title">Ready-to-Use Design Templates</h2>
            <p className="GD-section-description">
              Get instant access to our proprietary library of 1000+ professionally designed templates. 
              Includes social media kits, business presentations, marketing materials, UI/UX components, 
              and print-ready templates that are fully customizable and commercially licensed.
            </p>
            <button 
              className="GD-locked-btn GD-pay-now-btn"
              onClick={() => showLockedSectionToast("Ready-to-Use Design Templates")}
            >
              <span className="GD-locked-btn-text"><FontAwesomeIcon icon={faLock} /> Join course to Access</span>
            </button>
            <p className="GD-locked-note">
              <FontAwesomeIcon icon={faStar} /> One-time payment for lifetime access to all template updates  {/* Changed from faSparkles to faStar */}
            </p>
          </div>
        </section>

        {/* Course Resources Section */}
        <section 
          className="GD-section GD-full-particle-section" 
          id="resources"
        >
          <div className="GD-full-spread-particles">
            {[...Array(15)].map((_, i) => (
              <div key={i} className={`GD-spread-particle GD-spread-particle-${i % 5}`}></div>
            ))}
          </div>
          
          <div className="GD-resources-section">
            <h2 className="GD-section-title"><FontAwesomeIcon icon={faFileAlt} /> Design Resources</h2>
            <p className="GD-section-subtitle">
              Download valuable design templates, guides, and assets to enhance your creative process.
            </p>
            
            <div className="GD-resources-container">
              <div className="GD-resources-grid">
                {courseResources.map((resource) => (
                  <div 
                    key={resource.id} 
                    className="GD-resource-card"
                  >
                    <div className="GD-resource-icon">
                      <span className="GD-resource-icon-main">{resource.icon}</span>
                      <span className="GD-resource-type-icon">{getFileTypeIcon(resource.type)}</span>
                    </div>
                    
                    <div className="GD-resource-content">
                      <h3 className="GD-resource-title">{resource.title}</h3>
                      <p className="GD-resource-description">{resource.description}</p>
                      
                      <div className="GD-resource-meta">
                        <span className="GD-resource-type">
                          {resource.type.toUpperCase()} • {resource.size}
                        </span>
                        <span className="GD-resource-downloads">
                          <FontAwesomeIcon icon={faDownload} /> {resource.downloads.toLocaleString()} downloads
                        </span>
                        {resource.isRestricted && (
                          <span className="GD-resource-restricted-tag">
                            <FontAwesomeIcon icon={faLock} /> Course Exclusive
                          </span>
                        )}
                      </div>
                      
                      {resource.isRestricted ? (
                        <button 
                          className="GD-join-course-btn"
                          onClick={() => handleJoinCourseForResource(resource.title)}
                        >
                          <span><FontAwesomeIcon icon={faLock} /> Join Course to Download</span>
                        </button>
                      ) : (
                        <button 
                          className={`GD-download-btn ${downloadedResources.includes(resource.id) ? 'GD-downloaded' : ''}`}
                          onClick={() => handleDownloadResource(resource.id, resource.title, resource.localPath, resource.fileName)}
                        >
                          {downloadedResources.includes(resource.id) ? (
                            <>
                              <span><FontAwesomeIcon icon={faCheckCircle} /> Downloaded</span>
                              <span className="GD-download-again">Download Again</span>
                            </>
                          ) : (
                            <>
                              <span><FontAwesomeIcon icon={faDownload} /> Download Now</span>
                              <span className="GD-free-badge">FREE</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="GD-resources-info">
                <div className="GD-resources-stats">
                  <div className="GD-stat-card">
                    <h3><FontAwesomeIcon icon={faFileAlt} /> Total Resources</h3>
                    <p className="GD-stat-number">20</p>
                    <p className="GD-stat-label">Available Documents</p>
                  </div>
                  <div className="GD-stat-card">
                    <h3><FontAwesomeIcon icon={faDownload} /> Total Downloads</h3>
                    <p className="GD-stat-number">32,000</p>
                    <p className="GD-stat-label">By Design Students</p>
                  </div>
                  <div className="GD-stat-card">
                    <h3><FontAwesomeIcon icon={faUser} /> Your Downloads</h3>
                    <p className="GD-stat-number">{yourDownloadsCount}</p>
                    <p className="GD-stat-label">
                      {yourDownloadsPercentage}% Downloaded
                      <div className="GD-progress-bar">
                        <div 
                          className="GD-progress-fill" 
                          style={{ width: `${yourDownloadsPercentage}%` }}
                        ></div>
                      </div>
                    </p>
                  </div>
                </div>
                
                <div className="GD-resources-note">
                  <h4><FontAwesomeIcon icon={faLightbulb} /> Note:</h4>
                  <p>
                    Our course includes <strong>20 comprehensive resources</strong> to support your design journey. 
                    First 4 resources are available for free download. <strong>Design Software Cheatsheets</strong> and 
                    <strong> Portfolio Building Guide</strong> are exclusive to enrolled students. 
                    Join our course to access all 20 premium resources and unlock full learning potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Graphic Designer Benefits Section */}
        <section 
          className="GD-section GD-benefits-section" 
          id="benefits"
        >
          <div className="GD-simple-particles">
            <div className="GD-simple-circle"></div>
            <div className="GD-simple-triangle"></div>
            <div className="GD-simple-square"></div>
            <div className="GD-simple-hexagon"></div>
          </div>
          
          <div className="GD-benefits-container">
            <h2 className="GD-section-title"><FontAwesomeIcon icon={faStar} /> Graphic Designer Benefits</h2>  {/* Changed from faSparkles to faStar */}
            <p className="GD-section-subtitle">
              When you join our comprehensive graphic design course, you unlock exclusive benefits 
              that accelerate your career growth and skill development.
            </p>
            
            <div className="GD-benefits-grid">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="GD-benefit-card"
                >
                  <div className="GD-benefit-icon">
                    <span className="GD-benefit-icon-fa">{benefit.icon}</span>
                  </div>
                  <h3 className="GD-benefit-title">{benefit.title}</h3>
                  <p className="GD-benefit-description">{benefit.description}</p>
                </div>
              ))}
            </div>
            
            <div className="GD-benefits-summary">
              <div className="GD-benefits-stats">
                <div className="GD-benefit-stat">
                  <h4>10,000+</h4>
                  <p><FontAwesomeIcon icon={faGraduationCap} /> Successful Graduates</p>
                </div>
                <div className="GD-benefit-stat">
                  <h4>94%</h4>
                  <p><FontAwesomeIcon icon={faBriefcase} /> Job Placement Rate</p>
                </div>
                <div className="GD-benefit-stat">
                  <h4>50+</h4>
                  <p><FontAwesomeIcon icon={faBuilding} /> Industry Partners</p>
                </div>
                <div className="GD-benefit-stat">
                  <h4>24/7</h4>
                  <p><FontAwesomeIcon icon={faComments} /> Community Support</p>
                </div>
              </div>
              
              <div className="GD-benefits-cta">
                <button 
                  className="GD-benefits-join-btn"
                  onClick={handleBenefitsClick}
                >
                  <FontAwesomeIcon icon={faRocket} /> Join Now & Get All Benefits
                </button>
                <p className="GD-benefits-guarantee">
                  <FontAwesomeIcon icon={faCheckCircle} /> 30-day money-back guarantee • <FontAwesomeIcon icon={faSyncAlt} /> Lifetime access • <FontAwesomeIcon icon={faCertificate} /> Certificate included
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section 
          className="GD-section GD-full-particle-section" 
          id="feedback"
        >
          <div className="GD-full-spread-particles">
            {[...Array(12)].map((_, i) => (
              <div key={i} className={`GD-spread-particle GD-spread-particle-${i % 4}`}></div>
            ))}
          </div>
          
          <div className="GD-feedback-section">
            <h2 className="GD-section-title"><FontAwesomeIcon icon={faStar} /> Student Testimonials</h2>
            <p className="GD-section-subtitle">Hear what our students have to say about their learning experience</p>
            
            <div className="GD-testimonials">
              <div className="GD-testimonial-cards">
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="GD-testimonial-card"
                  >
                    <div className="GD-stars">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p>{testimonial.text}</p>
                    <span className="GD-author">- {testimonial.author}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <BackToTop/>
      </div>
    </>
  );
}

export default GraphicDesignerInternPage;