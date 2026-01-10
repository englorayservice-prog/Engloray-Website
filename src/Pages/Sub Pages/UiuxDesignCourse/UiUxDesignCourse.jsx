import React, { useState, useRef, useEffect } from 'react';
import { submitEnrollment } from "../../Sub Pages/HandleSubmit/HandleSubmit";

import './UiuxDesignCourse.css';

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap, faRocket, faBullseye, faLaptopCode,
  faMobileAlt, faBriefcase, faStar, faBook,
  faMap, faPalette, faBolt, faRobot,
  faPencilAlt, faRuler, faSyncAlt, faMicrophone,
  faFlask, faChartBar, faStickyNote, faVideo,
  faSave, faClipboardList, faChalkboardTeacher,
  faTrophy, faHandsHelping, faGlobe, faEnvelope,
  faPhone, faMapMarkerAlt, faComment, faChevronLeft,
  faChevronRight, faCheckCircle, faLock, faUserTie,
  faCertificate, faUsers, faProjectDiagram, faLightbulb,
  faTools, faSearch, faDatabase, faCloud, faMagic,
  faPaintBrush, faCode, faDesktop, faUserGraduate
} from '@fortawesome/free-solid-svg-icons';

// Import your assets
import uiuxCertificate from '../../../assets/UI Certificate.jpeg';
import { Helmet } from 'react-helmet';

const UiuxDesignCourse = () => {
  const [showEnrollment, setShowEnrollment] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [expandedDescription, setExpandedDescription] = useState(false);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'UI/UX Design Masterclass'
  });

  const formSectionRef = useRef(null);
  const autoSlideRef = useRef(null);

  const courseData = {
    title: "Professional UI/UX Design Masterclass",
    subtitle: "Transform into Industry-Ready Designer in 6 Months",
    duration: "6 Months | Live Interactive Training"
  };

  const courseDescription = `Master the art of user-centered design with our comprehensive UI/UX Design Masterclass! This 6-month intensive program is designed to transform beginners into industry-ready design professionals. Our curriculum combines design thinking principles with practical software skills and real-world project experience.

## What You'll Master:
- **UX Research**: User interviews, surveys, usability testing
- **UI Design**: Figma, Adobe XD, Sketch, design systems
- **Prototyping**: Interactive prototypes, user flows, wireframing
- **Portfolio Development**: Build a stunning professional portfolio
- **Career Readiness**: Product thinking, stakeholder management, job preparation

## Learning Outcomes:
1. Conduct comprehensive user research and analysis
2. Design intuitive and beautiful user interfaces
3. Create interactive prototypes and design systems
4. Develop a competitive design portfolio with case studies
5. Understand product development lifecycle and design thinking

## Why Choose Our Program:
- 🎯 **Industry-Aligned Curriculum**: Updated with current market demands
- 👨‍🏫 **Expert Mentors**: Learn from product designers with 10+ years experience
- 💼 **Placement Support**: 100% career assistance with top tech companies
- 🎓 **Global Certification**: Recognized by International Design Council
- 🔄 **Lifetime Access**: Course materials and updates forever
- 🤝 **Community Access**: Network with fellow designers`;

  const courseOutcomes = [
    { icon: faBullseye, title: 'User Research', desc: 'Master user interviews, surveys, and usability testing methodologies to understand user needs' },
    { icon: faLaptopCode, title: 'UI Design Skills', desc: 'Become proficient in Figma, Adobe XD, and industry-standard design tools' },
    { icon: faMobileAlt, title: 'Prototyping', desc: 'Create interactive prototypes for web and mobile applications' },
    { icon: faRocket, title: 'Portfolio Development', desc: 'Build a professional portfolio with 30+ real-world projects' },
    { icon: faBriefcase, title: 'Career Readiness', desc: 'Prepare for job interviews, portfolio reviews, and client presentations' },
    { icon: faStar, title: 'Product Thinking', desc: 'Develop strategic thinking for product design and development' }
  ];

  // Updated 6-Month Curriculum with Detailed Modules
  const sixMonthCurriculum = [
    {
      month: "Month 1",
      title: "UI/UX Fundamentals & Design Basics",
      topics: [
        'What is UI & UX? Difference between UI Designer & UX Designer',
        'Design thinking process & real-world UI/UX examples',
        'Role of UI/UX in business & startups',
        'Understanding users & user behavior',
        'User personas & journey mapping'
      ],
      projects: '8 Projects',
      icon: faBook,
      bgImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      month: "Month 2",
      title: "Information Architecture & Wireframing",
      topics: [
        'Content hierarchy & sitemap creation',
        'Navigation structure & UX flow planning',
        'Low-fidelity to high-fidelity wireframes',
        'Mobile vs Web wireframes',
        'UX best practices & card sorting basics'
      ],
      projects: '10 Projects',
      icon: faMap,
      bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      month: "Month 3",
      title: "UI Design Fundamentals & Tools",
      topics: [
        'Color theory for UI & typography for digital screens',
        'Layout systems, spacing & alignment',
        'Figma mastery: Interface, components & auto layout',
        'Adobe XD basics & design systems',
        'Visual hierarchy & responsive design'
      ],
      projects: '12 Projects',
      icon: faPalette,
      bgImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      month: "Month 4",
      title: "Mobile & Web UI Design",
      topics: [
        'Android & iOS UI guidelines',
        'App screen design & icons/UI elements',
        'Website UI principles & landing page design',
        'Responsive design: Desktop, tablet & mobile',
        'App & web UI case studies'
      ],
      projects: '15 Projects',
      icon: faMobileAlt,
      bgImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      month: "Month 5",
      title: "Prototyping & Usability Testing",
      topics: [
        'Clickable prototypes & micro-interactions',
        'Page transitions & user flow testing',
        'Usability testing methods & feedback collection',
        'Accessibility basics & UX optimization',
        'Prototype presentation & UX improvements'
      ],
      projects: '10 Projects',
      icon: faBolt,
      bgImage: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      month: "Month 6",
      title: "Portfolio & Career Development",
      topics: [
        'UI/UX portfolio structure & case study writing',
        'Behance & Dribbble profile setup',
        'Design handoff & working with developers',
        'Presentation skills & client-ready portfolio',
        'Interview preparation & freelance setup'
      ],
      projects: '8 Projects',
      icon: faBriefcase,
      bgImage: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    }
  ];

  // Updated Tools & Resources with AI Tools
  const toolsResources = [
    {
      category: "AI Tools for UX Thinking, Research & Content ",
      items: [
        { name: "ChatGPT", icon: faRobot, description: "UX research questions, user flows, microcopy" },
        { name: "Gemini", icon: faPalette, description: "UX problem framing & ideation" },
        { name: "Notion AI", icon: faBolt, description: "UX documentation, briefs, personas" },
        { name: "UX Pilot", icon: faRocket, description: "UX insights & recommendations" },
        { name: "Jasper", icon: faMicrophone, description: "Onboarding text & UX copy" },
        { name: "Maze", icon: faFlask, description: "AI-powered usability testing tools" }
      ]
    },
    {
      category: "AI Color, Font & Accessibility Tools ",
      items: [
        { name: "Khroma", icon: faBullseye, description: "Smart color systems" },
        { name: "Coolors", icon: faPencilAlt, description: "Palette creation & testing" },
        { name: "Fontjoy", icon: faRuler, description: "UI typography pairing" },
        { name: "Stark", icon: faSyncAlt, description: "Contrast & accessibility checks" }
      ]
    },
    {
      category: "AI Prototyping, Mockup & Visual Support ",
      items: [
        { name: "Adobe Firefly", icon: faMicrophone, description: "UI visuals & assets" },
        { name: "Mockup AI", icon: faFlask, description: "App & device mockups" },
        { name: "Spline AI", icon: faChartBar, description: "Interactive 3D UI visuals" },
        { name: "Loom AI", icon: faStickyNote, description: "UX walkthrough & explanations" }
      ]
    },
    {
      category: "AI UX Research, Testing & Validation Tools ",
      items: [
        { name: "Maze", icon: faVideo, description: "Usability testing & task analysis" },
        { name: "Hotjar", icon: faBook, description: "Heatmaps, recordings & insights" },
        { name: "UserTesting", icon: faSave, description: "Real user feedback" },
        { name: "UXtweak", icon: faClipboardList, description: "Research & validation support" }
      ]
    }
  ];

  // Benefits array for UI/UX Course
  const benefits = [
    {
      icon: faGraduationCap,
      title: 'Live Interactive Classes',
      description: 'Real-time training with industry experts and instant doubt resolution'
    },
    {
      icon: faChalkboardTeacher,
      title: '1:1 Mentorship Sessions',
      description: 'Personal guidance from senior product designers with 10+ years experience'
    },
    {
      icon: faBriefcase,
      title: '100% Placement Support',
      description: 'Career guidance with top tech companies and startup opportunities'
    },
    {
      icon: faTrophy,
      title: 'Global Certification',
      description: 'Internationally recognized certificate from Design Council'
    },
    {
      icon: faSyncAlt,
      title: 'Lifetime Access',
      description: 'All course materials, updates, and recordings available forever'
    },
    {
      icon: faHandsHelping,
      title: 'Design Community',
      description: 'Network with 5000+ designers and participate in design challenges'
    },
    {
      icon: faLaptopCode,
      title: 'Software License',
      description: 'Free access to Figma Pro and Adobe XD for practice during course'
    },
    {
      icon: faBullseye,
      title: 'Project Portfolio',
      description: 'Build 30+ real-world projects for your professional portfolio'
    },
    {
      icon: faMobileAlt,
      title: 'Mobile App Design',
      description: 'Master both Android and iOS design guidelines and patterns'
    },
    {
      icon: faGlobe,
      title: 'Web Design Skills',
      description: 'Learn responsive design for desktop, tablet, and mobile websites'
    }
  ];

  const testimonials = [
    {
      name: 'Pavithra S',
      role: 'UI Designer',
      review: 'This course completely well structred and easy way to follow through easy guidance and mentorship.',
      rating: 5,
      avatar: 'PS',
      salary: 'UI/UX'
    },
    {
      name: 'Suresh P',
      role: 'UI/UX Designer',
      review: 'Gained confidence of working with real client projects which I used to feared to face a client is now easy!....',
      rating: 5,
      avatar: 'SP',
      salary: 'UI/UX'
    },
    {
      name: 'Nithya M',
      role: 'UI Designer',
      review: 'Design thinking concepts were very useful to acheive the dream job in dream company.',
      rating: 5,
      avatar: 'NM',
      salary: 'UI/UX'
    }
  ];

  const contactDetails = [
    {
      icon: faEnvelope,
      title: 'Email Support',
      details: ['hello@engloraylearn.com', 'admissions@engloraylearn.com'],
      description: '24-hour response time'
    },
    {
      icon: faPhone,
      title: 'Call/WhatsApp',
      details: ['+91 63681 75990', '+91 63699 45920'],
      description: 'Available 9 AM - 9 PM'
    },
    {
      icon: faMapMarkerAlt,
      title: 'Learning Center',
      details: ['Madurai, Tamil Nadu', 'INDIA 625001'],
      description: 'Visit for demo class'
    },
    {
      icon: faComment,
      title: 'Quick Chat',
      details: ['Live Chat Available', 'Telegram Support'],
      description: 'Instant design guidance'
    }
  ];

  const certificate = {
    id: 1,
    title: "Professional UI/UX Certification",
    description: "Globally recognized certificate accredited by International Design Council",
    features: [
      "✅ Digital & Physical Copy",
      "✅ Lifetime Validity",
      "✅ Online Verification",
      "✅ International Recognition",
      "✅ QR Code Authentication",
      "✅ Accredited by Design Council"
    ],
     image: uiuxCertificate
  };

  const floatingIcons = [
    faPalette, faMobileAlt, faLaptopCode, faPencilAlt, 
    faBullseye, faLightbulb, faRocket, faTrophy, 
    faRobot, faBolt
  ];

  useEffect(() => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
    
    autoSlideRef.current = setInterval(() => {
      setCurrentModuleIndex((prev) => (prev + 1) % sixMonthCurriculum.length);
    }, 5000);

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, []);

  const nextModule = () => {
    setCurrentModuleIndex((prev) => (prev + 1) % sixMonthCurriculum.length);
    resetAutoSlide();
  };

  const prevModule = () => {
    setCurrentModuleIndex((prev) => (prev - 1 + sixMonthCurriculum.length) % sixMonthCurriculum.length);
    resetAutoSlide();
  };

  const resetAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
      autoSlideRef.current = setInterval(() => {
        setCurrentModuleIndex((prev) => (prev + 1) % sixMonthCurriculum.length);
      }, 5000);
    }
  };

  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    setShowEnrollment(true);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // payload must match backend DTO
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      course: formData.course
    };

    await submitEnrollment(payload); // 🔥 API call

    // ✅ SUCCESS
    setShowSuccess(true);

    setFormData({
      name: '',
      email: '',
      phone: '',
      course: 'UI/UX Design Masterclass'
    });

    setTimeout(() => {
      setShowEnrollment(false);
    }, 3000);

    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);

  } catch (error) {
    // ❌ FAILURE
    console.error("Enrollment failed:", error.message);
    alert("Enrollment failed. Please try again.");
  }
};


  return (
    <>
    <div>
      <Helmet>
            <title>Engloray Learning</title>
            <meta name="description" content="User experience and User interface can create a futuristic world" />
            <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
            {/* <link rel="canonical" href="https://yourapp.com" /> */}
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Your App | Config" />
            <meta property="og:description" content="Lorem Ipsum" />
            {/* <meta property="og:url" content="https://yourapp.com" /> */}
      </Helmet>

    <div className="uic-page">
      {/* Hero Section */}
      <section className="uic-hero">
        <div className="uic-hero-bg"></div>
        <div className="uic-hero-overlay"></div>
        
        <div className="uic-hero-content">
          <div className="uic-hero-badge">
            <FontAwesomeIcon icon={faGraduationCap} style={{marginRight: '10px'}} />
            Professional UI/UX Certification
          </div>
          <h1 className="uic-hero-title">{courseData.title}</h1>
          <p className="uic-hero-subtitle">{courseData.subtitle}</p>
          <p className="uic-hero-duration">{courseData.duration}</p>
          
          <div className="uic-hero-buttons">
            <button 
              className="uic-enroll-btn"
              onClick={scrollToForm}
            >
              <FontAwesomeIcon icon={faRocket} style={{marginRight: '10px'}} />
              Enroll Now
            </button>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="uic-section uic-white-bg">
        <div className="uic-container">
          <h2 className="uic-section-title">Master UI/UX Design in 6 Months</h2>
          <p className="uic-section-subtitle">From beginner to professional designer - Complete career transformation</p>
          
          <div className="uic-course-description">
            <div className={`uic-description-content ${expandedDescription ? 'expanded' : ''}`}>
              {courseDescription}
            </div>
            <button 
              className="uic-readmore-btn"
              onClick={() => setExpandedDescription(!expandedDescription)}
            >
              {expandedDescription ? 'Read Less' : 'Read Full Course Details'}
            </button>
          </div>
        </div>
      </section>

      {/* Course Outcomes */}
      <section className="uic-section uic-dark-bg">
        <div className="uic-container">
          <h2 className="uic-section-title">Course Outcomes</h2>
          <p className="uic-section-subtitle">What you'll achieve after completing this program</p>
          
          <div className="uic-outcomes-grid">
            {courseOutcomes.map((outcome, index) => (
              <div 
                key={index} 
                className="uic-outcome-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="uic-outcome-icon-wrapper">
                  <div className="uic-outcome-icon">
                    <FontAwesomeIcon icon={outcome.icon} />
                  </div>
                  <div className="uic-outcome-icon-glow"></div>
                </div>
                <h3 className="uic-outcome-title">{outcome.title}</h3>
                <p className="uic-outcome-desc">{outcome.desc}</p>
                <div className="uic-outcome-hover-effect"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Month Detailed Curriculum Slider */}
      <section className="uic-section uic-white-bg">
        <div className="uic-container">
          <h2 className="uic-section-title uic-blue-text">6-Month Detailed Curriculum</h2>
          <p className="uic-section-subtitle">Comprehensive structured learning path covering all 12 essential modules</p>
          
          <div className="uic-slider-controls-above">
            <button className="uic-slider-prev" onClick={prevModule}>
              <FontAwesomeIcon icon={faChevronLeft} style={{marginRight: '8px'}} />
              Previous Month
            </button>
            <div className="uic-slider-dots">
              {sixMonthCurriculum.map((_, index) => (
                <button
                  key={index}
                  className={`uic-slider-dot ${index === currentModuleIndex ? 'active' : ''}`}
                  onClick={() => setCurrentModuleIndex(index)}
                />
              ))}
            </div>
            <button className="uic-slider-next" onClick={nextModule}>
              Next Month
              <FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '8px'}} />
            </button>
          </div>
          
          <div className="uic-curriculum-slider-container">
            <div className="uic-slider-wrapper">
              <div 
                className="uic-slider-track"
                style={{ transform: `translateX(-${currentModuleIndex * 100}%)` }}
              >
                {sixMonthCurriculum.map((module, index) => (
                  <div 
                    key={index} 
                    className="uic-module-slide"
                    style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.9)), url(${module.bgImage})` }}
                  >
                    <div className="uic-module-content">
                      <div className="uic-month-badge">{module.month}</div>
                      <div className="uic-module-icon-slide">
                        <FontAwesomeIcon icon={module.icon} />
                      </div>
                      <h3 className="uic-module-title-slide">{module.title}</h3>
                      <div className="uic-module-meta-slide">
                        <span className="uic-module-duration-slide">{module.month}</span>
                        <span className="uic-module-projects-slide">{module.projects}</span>
                      </div>
                      
                      <div className="uic-module-topics-slide">
                        {module.topics.map((topic, idx) => (
                          <div key={idx} className="uic-topic-item-slide">
                            <span className="uic-topic-check-slide">
                              <FontAwesomeIcon icon={faCheckCircle} />
                            </span>
                            <span className="uic-topic-text-slide">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Curriculum Highlights */}
          <div className="uic-curriculum-highlights">
            <div className="uic-highlight-card uic-pink-highlight">
              <div className="uic-highlight-icon">
                <FontAwesomeIcon icon={faBook} />
              </div>
              <h3>12 Comprehensive Modules</h3>
              <p>From UI/UX basics to advanced portfolio development</p>
            </div>
            <div className="uic-highlight-card uic-blue-highlight">
              <div className="uic-highlight-icon">
                <FontAwesomeIcon icon={faBullseye} />
              </div>
              <h3>50+ Real Projects</h3>
              <p>Hands-on experience with real-world design challenges</p>
            </div>
            <div className="uic-highlight-card uic-pink-highlight">
              <div className="uic-highlight-icon">
                <FontAwesomeIcon icon={faRobot} />
              </div>
              <h3>AI Tools Integration</h3>
              <p>Learn modern AI-powered design tools and techniques</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools & Resources Section */}
      <section className="uic-section uic-light-blue-bg">
        <div className="uic-container">
          <h2 className="uic-section-title uic-blue-text">AI Tools & Resources</h2>
          <p className="uic-section-subtitle">Master cutting-edge AI tools used in modern UI/UX design</p>
          
          <div className="uic-tools-container">
            {toolsResources.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                className="uic-tools-category"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h3 className="uic-tools-category-title">{category.category}</h3>
                <div className="uic-tools-grid">
                  {category.items.map((tool, toolIndex) => (
                    <div 
                      key={toolIndex} 
                      className="uic-tool-card"
                      style={{ animationDelay: `${toolIndex * 0.1}s` }}
                    >
                      <div className="uic-tool-icon">
                        <FontAwesomeIcon icon={tool.icon} />
                      </div>
                      <div className="uic-tool-content">
                        <h4 className="uic-tool-name">{tool.name}</h4>
                        <p className="uic-tool-desc">{tool.description}</p>
                      </div>
                      <div className="uic-tool-hover-effect"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="uic-section uic-light-blue-bg">
        <div className="uic-container">
          <h2 className="uic-section-title uic-blue-text">Program Benefits</h2>
          <p className="uic-section-subtitle">Everything you need for a successful UI/UX design career</p>
          
          <div className="uic-benefits-grid">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="uic-benefit-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="uic-benefit-icon-wrapper">
                  <div className="uic-benefit-icon">
                    <FontAwesomeIcon icon={benefit.icon} />
                  </div>
                  <div className="uic-benefit-icon-glow"></div>
                </div>
                <h3 className="uic-benefit-title">{benefit.title}</h3>
                <p className="uic-benefit-desc">{benefit.description}</p>
                <div className="uic-benefit-hover-effect"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Section with Lock Overlay */}
      <section className="uic-section uic-dark-bg">
        <div className="uic-container">
          <h2 className="uic-section-title">Professional Certification</h2>
          <p className="uic-section-subtitle">Earn a globally recognized UI/UX certificate upon completion</p>
          
          <div className="uic-certificate-single">
            <div className="uic-certificate-image-wrapper">
              <img 
                src={certificate.image}
                alt="UI/UX Design Masterclass Certificate"
                className="uic-certificate-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
                }}
              />
              
              {/* Lock Overlay - Shows when hovering */}
              <div className="uic-certificate-lock-overlay">
                <div className="uic-lock-icon">
                  <FontAwesomeIcon icon={faLock} />
                </div>
                <div className="uic-lock-text">Certificate Locked</div>
              </div>
              
              <div className="uic-certificate-overlay">
                <span className="uic-certificate-badge">Your Professional Certificate Template</span>
              </div>
              <div className="uic-certificate-download-note">
                <p>This is a sample template. Your actual certificate will include your name, course details, and issue date.</p>
              </div>
            </div>
            
            <div className="uic-certificate-info-single">
              <h3 className="uic-certificate-title-single">{certificate.title}</h3>
              <p className="uic-certificate-desc-single">{certificate.description}</p>
              
              <div className="uic-certificate-features-single">
                {certificate.features.map((feature, index) => (
                  <div key={index} className="uic-certificate-feature-item-single">
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="uic-certificate-benefits">
                <div className="uic-benefit">
                  <span className="uic-benefit-icon">
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </span>
                  <span className="uic-benefit-text">Enhances your professional credibility</span>
                </div>
                <div className="uic-benefit">
                  <span className="uic-benefit-icon">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </span>
                  <span className="uic-benefit-text">Increases job opportunities by 85%</span>
                </div>
                <div className="uic-benefit">
                  <span className="uic-benefit-icon">
                    <FontAwesomeIcon icon={faGlobe} />
                  </span>
                  <span className="uic-benefit-text">Globally recognized by tech companies</span>
                </div>
                <div className="uic-benefit">
                  <span className="uic-benefit-icon">
                    <FontAwesomeIcon icon={faMobileAlt} />
                  </span>
                  <span className="uic-benefit-text">QR code verification for authenticity</span>
                </div>
              </div>
              
              <div className="uic-certificate-instructions">
                <h4>Certificate Details:</h4>
                <ul>
                  <li>Issued upon successful completion of the course</li>
                  <li>Includes student name and unique certificate ID</li>
                  <li>Verified through our online portal</li>
                  <li>Available in digital (PDF) and physical formats</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="uic-section uic-white-bg">
        <div className="uic-container">
          <h2 className="uic-section-title uic-blue-text">Student Success Stories</h2>
          <p className="uic-section-subtitle">Transformations that inspire us every day</p>
          
          <div className="uic-stories-grid-light">
            {testimonials.map((story, index) => (
              <div 
                key={index} 
                className="uic-story-card-light"
              >
                <div className="uic-story-header-light">
                  <div className="uic-story-avatar-light">
                    <span className="uic-avatar-text-light">{story.avatar}</span>
                  </div>
                  <div className="uic-story-info-light">
                    <h4 className="uic-story-name-light">{story.name}</h4>
                    <p className="uic-story-role-light">{story.role}</p>
                    <div className="uic-story-salary-light">Course Studied: {story.salary}</div>
                  </div>
                </div>
                
                <div className="uic-story-rating-container-light">
                  <div className="uic-story-rating-light">
                    {[...Array(story.rating)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} />
                    ))}
                  </div>
                </div>
                
                <p className="uic-story-review-light">
                  "{story.review}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Section */}
      <section className="uic-section uic-dark-enrollment" ref={formSectionRef}>
        <div className="uic-container">
          <div className="uic-floating-icons-container">
            {floatingIcons.map((icon, index) => (
              <div 
                key={index} 
                className="uic-floating-icon"
                style={{
                  animationDelay: `${index * 0.5}s`,
                  left: `${(index * 12.5) % 100}%`,
                  top: `${20 + (index * 10) % 60}%`
                }}
              >
                <FontAwesomeIcon icon={icon} />
              </div>
            ))}
          </div>
          
          <h2 className="uic-section-title">Start Your UI/UX Design Journey Today</h2>
          <p className="uic-section-subtitle">Limited seats available for the next batch</p>
          
          <div className="uic-contact-details-grid">
            {contactDetails.map((contact, index) => (
              <div key={index} className="uic-contact-item-dark">
                <div className="uic-contact-icon-dark">
                  <FontAwesomeIcon icon={contact.icon} />
                </div>
                <h4 className="uic-contact-title-dark">{contact.title}</h4>
                <div className="uic-contact-info-dark">
                  {contact.details.map((detail, idx) => (
                    <p key={idx} className="uic-contact-detail-dark">{detail}</p>
                  ))}
                </div>
                <p className="uic-contact-description-dark">{contact.description}</p>
              </div>
            ))}
          </div>
          
          <div className="uic-enrollment-section-dark">
            <h3 className="uic-enrollment-title-dark">Secure Your Spot Now</h3>
            <p className="uic-enrollment-subtitle-dark">Batch starting soon - Limited availability</p>
            
            {showEnrollment ? (
              <div className="uic-enrollment-form-expanded-dark">
                <div className="uic-form-header-expanded-dark">
                  <h4>Enrollment Form</h4>
                  <button 
                    className="uic-form-close-btn-dark"
                    onClick={() => setShowEnrollment(false)}
                  >
                    ×
                  </button>
                </div>
                
                <form onSubmit={handleSubmit} className="uic-enrollment-form-content-dark">
                  <div className="uic-form-grid-expanded-dark">
                    <div className="uic-form-group-expanded-dark">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div className="uic-form-group-expanded-dark">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="you@example.com"
                      />
                    </div>
                    
                    <div className="uic-form-group-expanded-dark">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    
                    <div className="uic-form-group-expanded-dark">
                      <label>Course *</label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="UI/UX Design Masterclass">UI/UX Design Masterclass</option>
                        <option value="Product Design Specialization">Product Design Specialization</option>
                        <option value="UX Research & Strategy">UX Research & Strategy</option>
                        <option value="Mobile App Design">Mobile App Design</option>
                      </select>
                    </div>
                  </div>
                  
                  <button type="submit" className="uic-submit-btn-expanded-dark">
                    <FontAwesomeIcon icon={faRocket} style={{marginRight: '10px'}} />
                    Complete Enrollment
                  </button>
                </form>
              </div>
            ) : (
              <div className="uic-enrollment-cta-dark">
                <button 
                  className="uic-enrollment-btn-large-dark"
                  onClick={() => setShowEnrollment(true)}
                >
                  <FontAwesomeIcon icon={faBullseye} style={{marginRight: '10px'}} />
                  Start Enrollment Now
                </button>
                <p className="uic-cta-note-dark">Complete the form to secure your seat</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Success Toast Message */}
      {showSuccess && (
        <div className="uic-toast">
          <div className="uic-toast-content">
            <div className="uic-toast-icon">
              <FontAwesomeIcon icon={faRocket} />
            </div>
            <div className="uic-toast-message">
              <h4>Enrollment Successful!</h4>
              <p>Welcome to UI/UX Design Masterclass</p>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
    </>
  );
};

export default UiuxDesignCourse;