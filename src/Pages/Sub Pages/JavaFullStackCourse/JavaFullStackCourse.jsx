import React, { useState, useRef, useEffect } from 'react';
import './JavaFullStackCourse.css';
import { submitEnrollment } from "../../Sub Pages/HandleSubmit/HandleSubmit";
import javaCertificate from '../../../assets/java certifcate.jpeg';
import NavigationBar from '../../TechLearningSection/NavigationBar/NavigationBar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import LearningFooter from '../../TechLearningSection/LearningFooter/LearningFooter';


// FontAwesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLeaf, faAtom, faDatabase, faRocket, faCloud,
  faGlobe, faCogs, faLaptopCode, faCode, faEnvelope,
  faPhone, faMapMarkerAlt, faCommentDots, faLock, faCertificate,
  faCheckCircle, faGraduationCap, faChalkboardTeacher, faBriefcase,
  faTrophy, faSyncAlt, faHandshake, faMobileAlt, faWrench,
  faBook, faBolt, faServer, faNetworkWired, faCodeBranch,
  faChevronLeft, faChevronRight, faTimes, faCheck, faUser,
  faCalendarAlt, faProjectDiagram, faTools, faLayerGroup,
  faPalette, faPencilRuler, faFileCode, faBoltLightning,
  faInfinity, faUsers, faChartLine, faAward, faQrcode,
  faInfoCircle, faStar, faShieldAlt, faUpload, faDownload,
  faCubes, faMicrochip, faTerminal, faWindowMaximize,
  faDesktop, faTable, faBox, faCube, faShapes, faSitemap,
  faBullseye, faCoffee // Keeping faCoffee for other uses if needed
} from '@fortawesome/free-solid-svg-icons';
import { faDocker, faJava } from '@fortawesome/free-brands-svg-icons'; // Added faJava
import { Helmet } from 'react-helmet';

const JavaFullStackCourse = () => {
  const [showEnrollment, setShowEnrollment] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [expandedDescription, setExpandedDescription] = useState(false);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'Java FullStack Development'
  });

  const formSectionRef = useRef(null);
  const autoSlideRef = useRef(null);

  const courseData = {
    title: "Professional Java FullStack Development",
    subtitle: "Master Java, Spring Boot & React - Become Industry Ready in 6 Months",
    duration: "6 Months | Live Interactive Training"
  };

  const courseDescription = ` The JavaFullStatck Development course is a complete training program that prepares learners to build real-world web applications using both frontend and backend technologies. This course begins with web fundamentals and progresses to advanced backend frameworks and deployment. Students learn HTML, CSS, JavaScript, React.js, Core & Advanced Java, JDBC, Hibernate, Spring Framework, Maven, and MySQL, with deployment using AWS. By the end, students can confidently design, develop, and deploy full-stack applications in professional environments..

## What You'll Master:
- **Core Java & Advanced Java**: OOPs, Collections, Multithreading, JDBC
- **Spring Ecosystem**: Spring Boot, Spring MVC, Spring Security, Spring Data JPA
- **Frontend Development**: HTML5, CSS3, JavaScript, React.js, Bootstrap
- **Database Management**: MySQL, PostgreSQL, MongoDB
- **DevOps & Tools**: Git, Docker, Jenkins, Maven, REST APIs
- **Cloud Deployment**: AWS, Microservices Architecture

## Learning Outcomes:
1. Build scalable backend applications with Spring Boot
2. Create responsive frontend applications with React.js
3. Design and implement RESTful APIs
4. Work with both SQL and NoSQL databases
5. Deploy applications on cloud platforms
6. Understand microservices architecture

## Why Choose Our Program:
- 🎯 **Industry-Aligned Curriculum**: Updated with current market demands
- 👨‍🏫 **Expert Mentors**: Learn from senior developers with 10+ years experience
- 💼 **100% Placement Support**: Career assistance with top tech companies
- 🎓 **Global Certification**: Recognized by International Tech Council
- 🔄 **Lifetime Access**: Course materials and updates forever
- 🤝 **Community Access**: Network with 5000+ developers`;

  const courseOutcomes = [
    { icon: faJava, title: 'Core Java Mastery', desc: 'Master Java fundamentals to advanced concepts including OOPs, Collections, and Multithreading' }, // Changed to faJava
    { icon: faLeaf, title: 'Spring Framework', desc: 'Develop enterprise applications using Spring Boot, Spring MVC, and Spring Security' },
    { icon: faAtom, title: 'React.js Frontend', desc: 'Create dynamic user interfaces and single-page applications with React.js' },
    { icon: faDatabase, title: 'Database Management', desc: 'Perform database connectivity and CRUD operations using JDBC and ORM' },
    { icon: faRocket, title: 'REST APIs & Microservices', desc: 'Design and implement scalable RESTful APIs and microservices architecture' },
    { icon: faCloud, title: 'Cloud Deployment', desc: 'Deploy applications on AWS cloud platform with EC2, RDS, and S3 services' }
  ];

  // Updated 6-Month Curriculum with Detailed Modules
  const sixMonthCurriculum = [
    {
      month: "Month 1",
      title: "Web Development Basics",
      topics: [
        'HTML5,CSS',
        'Layouts',
        'Responsive Design(Flexbox/Grid)',
        'JavaScript Basics',
        'FORMS'
      ],
      projects: '10 Projects',
      icon: faGlobe,
      bgImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      month: "Month 2",
      title: "React.js",
      topics: [
        'ES6+,Components',
        'Hooks,Routing',
        'State Management',
        'API Calls',
        'UI Mini Project'
      ],
      projects: '8 Projects',
      icon: faAtom,
      bgImage: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      month: "Month 3",
      title: "Java(Core to Advanced)",
      topics: [
        'Java Syntax',
        'OOp Principles',
        'Collections',
        'Generics, I/O',
        'Exception Handling, Theards'
      ],
      projects: '12 Projects',
      icon: faJava, // Changed to faJava
      bgImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      month: "Month 4",
      title: "JDBC & MySQL",
      topics: [
        'JDBC Architecture',
        'Drivers,Statements ',
        'Connection Pooling,',
        'MYSQL Queries, CRUD',
        'MVC Pattern'
      ],
      projects: '15 Projects',
      icon: faDatabase,
      bgImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      month: "Month 5",
      title: "Maven, Hibernate,Spring Boot",
      topics: [
        'Maven Setup',
        'Dependancy Management',
        'Hibenate ORM,JPA',
        'Mapping, Spring Boot API',
        'REST Controllers'
      ],
      projects: '10 Projects',
      icon: faDocker,
      bgImage: 'https://images.unsplash.com/photo-1624953587687-daf255b6b80a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      month: "Month 6",
      title: "Full Stack Integration+ AWS Deployment",
      topics: [
        'Linking React & Spring Boot',
        'JWT Authentication(optional)',
        'MySQL Integration',
        'Deployment on AWS,EC2/RDS',
        'Final Capstone Project'
      ],
      projects: '8 Projects',
      icon: faCloud,
      bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    }
  ];

  // Updated Tools & Resources from the image content
  const toolsResources = [
    { 
      name: "Eclipse IDE", 
      icon: faLaptopCode, 
      description: "Java Development"
    },
    { 
      name: "VS Code", 
      icon: faCode, 
      description: "Frontend: HTML, CSS, JS, React"
    },
    { 
      name: "Postman", 
      icon: faEnvelope, 
      description: "API Testing"
    },
    { 
      name: "MySQL & MySQL Workbench", 
      icon: faDatabase, 
      description: "Database"
    },
    { 
      name: "React.js, Java, JDBC", 
      icon: faLayerGroup, 
      description: "Hibernate ORM, Spring Boot, Maven"
    },
    { 
      name: "Git & GitHub", 
      icon: faCodeBranch, 
      description: "Version Control"
    },
    { 
      name: "AWS EC2", 
      icon: faServer, 
      description: "Backend Hosting"
    },
    { 
      name: "AWS RDS MySQL", 
      icon: faDatabase, 
      description: "Database Hosting (Optional)"
    },
    { 
      name: "Netlify/Vercel", 
      icon: faUpload, 
      description: "Frontend Hosting (Optional)"
    }
  ];

  // Benefits array for Java FullStack Course
  const benefits = [
    {
      icon: faGraduationCap,
      title: 'Career',
      description: 'Eligible for roles like Full Stack Developer, Java Developer, React Developer'
    },
    {
      icon: faChalkboardTeacher,
      title: 'Job-Oriented Skills',
      description: 'Focus on Spring Boot + React — highly demanded in IT industry'
    },
    {
      icon: faBriefcase,
      title: 'Hands-On Learning',
      description: 'Includes multiple mini-projects + 1 major full stack project'
    },
    {
      icon: faTrophy,
      title: 'Deployment Knowledge',
      description: 'Learn AWS deployment for backend & database'
    },
    {
      icon: faSyncAlt,
      title: 'Portfolio Strength',
      description: 'Build a complete application to show in interviews/GitHub'
    },
    {
      icon: faHandshake,
      title: 'Practical Experience',
      description: 'End-to-end development: UI → API → Database → Cloud Deployment'
    },
    {
      icon: faLaptopCode,
      title: 'Interview Preparation',
      description: 'Includes project explanation guidance and technical concepts'
    },
    {
      icon: faCloud,
      title: 'Cloud Deployment',
      description: 'Hands-on experience with AWS and cloud technologies'
    },
    {
      icon: faCogs,
      title: 'DevOps Skills',
      description: 'Learn Docker, Jenkins, CI/CD pipelines'
    },
    {
      icon: faMobileAlt,
      title: 'FullStack Portfolio',
      description: 'End-to-end project development experience'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh K',
      role: 'Java Developer',
      review: 'The course structure helped me transition from manual testing to Java development in just 6 months!',
      rating: 5,
      avatar: 'RK',
      salary: 'Java FullStack'
    },
    {
      name: 'Priya M',
      role: 'FullStack Developer',
      review: 'Spring Boot and React combination made me job-ready. Got 3 offers after completing the course.',
      rating: 5,
      avatar: 'PM',
      salary: 'Java FullStack'
    },
    {
      name: 'Arun S',
      role: 'Backend Developer',
      review: 'Microservices and AWS modules were game-changers for my career growth.',
      rating: 5,
      avatar: 'AS',
      salary: 'Java FullStack'
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
      icon: faCommentDots,
      title: 'Quick Chat',
      details: ['Live Chat Available', 'Telegram Support'],
      description: 'Instant coding guidance'
    }
  ];

  const certificate = {
    id: 1,
    title: "Professional Java FullStack Certification",
    description: "Globally recognized certificate accredited by International Tech Council",
    features: [
      "Digital & Physical Copy",
      "Lifetime Validity",
      "Online Verification",
      "International Recognition",
      "QR Code Authentication",
      "Accredited by Tech Council"
    ],
  };

  const floatingIcons = [faJava, faLeaf, faAtom, faDocker, faBolt, faCloud, faRocket, faTrophy, faLaptopCode, faCogs]; // Changed first to faJava

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
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      course: formData.course
    };

    // 🔥 Call backend API
    await submitEnrollment(payload);

    // ✅ SUCCESS UI
    setShowSuccess(true);

    setFormData({
      name: '',
      email: '',
      phone: '',
      course: 'Java FullStack Development'
    });

    setTimeout(() => {
      setShowEnrollment(false);
    }, 3000);

    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);

  } catch (error) {
    console.error("Enrollment failed:", error.message);
    alert("Enrollment failed. Please try again.");
  }
};


  return (
    <>
    <div>
        <Helmet>
            <title>Engloray Learning</title>
            <meta name="description" content="Java basics to java advanced using the core java program" />
            <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
            {/* <link rel="canonical" href="https://yourapp.com" /> */}
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Your App | Config" />
            <meta property="og:description" content="Lorem Ipsum" />
            {/* <meta property="og:url" content="https://yourapp.com" /> */}
        </Helmet>
    <NavigationBar />
    <BackToTop />
    <div className="jfs-page">
      {/* Hero Section */}
      <section className="jfs-hero">
        <div className="jfs-hero-bg"></div>
        <div className="jfs-hero-overlay"></div>
        
        <div className="jfs-hero-content">
          <div className="jfs-hero-badge">
            <FontAwesomeIcon icon={faCertificate} className="jfs-badge-icon" />
            Professional Java FullStack Certification
          </div>
          <h1 className="jfs-hero-title">{courseData.title}</h1>
          <p className="jfs-hero-subtitle">{courseData.subtitle}</p>
          <p className="jfs-hero-duration">{courseData.duration}</p>
          
          <div className="jfs-hero-buttons">
            <button 
              className="jfs-enroll-btn"
              onClick={scrollToForm}
            >
              <FontAwesomeIcon icon={faRocket} className="jfs-btn-icon" />
              Enroll Now
            </button>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="jfs-section jfs-white-bg">
        <div className="jfs-container">
          <h2 className="jfs-section-title">Master Java FullStack in 6 Months</h2>
          <p className="jfs-section-subtitle">From beginner to professional developer - Complete career transformation</p>
          
          <div className="jfs-course-description">
            <div className={`jfs-description-content ${expandedDescription ? 'expanded' : ''}`}>
              {courseDescription}
            </div>
            <button 
              className="jfs-readmore-btn"
              onClick={() => setExpandedDescription(!expandedDescription)}
            >
              {expandedDescription ? 'Read Less' : 'Read Full Course Details'}
            </button>
          </div>
        </div>
      </section>

      {/* Course Outcomes */}
      <section className="jfs-section jfs-dark-bg">
        <div className="jfs-container">
          <h2 className="jfs-section-title">Course Outcomes</h2>
          <p className="jfs-section-subtitle">What you'll achieve after completing this program</p>
          
          <div className="jfs-outcomes-grid">
            {courseOutcomes.map((outcome, index) => (
              <div 
                key={index} 
                className="jfs-outcome-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="jfs-outcome-icon-wrapper">
                  <div className="jfs-outcome-icon">
                    <FontAwesomeIcon icon={outcome.icon} />
                  </div>
                  <div className="jfs-outcome-icon-glow"></div>
                </div>
                <h3 className="jfs-outcome-title">{outcome.title}</h3>
                <p className="jfs-outcome-desc">{outcome.desc}</p>
                <div className="jfs-outcome-hover-effect"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Month Detailed Curriculum Slider */}
      <section className="jfs-section jfs-white-bg">
        <div className="jfs-container">
          <h2 className="jfs-section-title jfs-green-text">6-Month Detailed Curriculum</h2>
          <p className="jfs-section-subtitle">Comprehensive structured learning path covering all essential modules</p>
          
          <div className="jfs-slider-controls-above">
            <button className="jfs-slider-prev" onClick={prevModule}>
              <FontAwesomeIcon icon={faChevronLeft} /> Previous Month
            </button>
            <div className="jfs-slider-dots">
              {sixMonthCurriculum.map((_, index) => (
                <button
                  key={index}
                  className={`jfs-slider-dot ${index === currentModuleIndex ? 'active' : ''}`}
                  onClick={() => setCurrentModuleIndex(index)}
                />
              ))}
            </div>
            <button className="jfs-slider-next" onClick={nextModule}>
              Next Month <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
          
          <div className="jfs-curriculum-slider-container">
            <div className="jfs-slider-wrapper">
              <div 
                className="jfs-slider-track"
                style={{ transform: `translateX(-${currentModuleIndex * 100}%)` }}
              >
                {sixMonthCurriculum.map((module, index) => (
                  <div 
                    key={index} 
                    className="jfs-module-slide"
                    style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.9)), url(${module.bgImage})` }}
                  >
                    <div className="jfs-module-content">
                      <div className="jfs-month-badge">{module.month}</div>
                      <div className="jfs-module-icon-slide">
                        <FontAwesomeIcon icon={module.icon} />
                      </div>
                      <h3 className="jfs-module-title-slide">{module.title}</h3>
                      <div className="jfs-module-meta-slide">
                        <span className="jfs-module-duration-slide">
                          <FontAwesomeIcon icon={faCalendarAlt} /> {module.month}
                        </span>
                        <span className="jfs-module-projects-slide">
                          <FontAwesomeIcon icon={faProjectDiagram} /> {module.projects}
                        </span>
                      </div>
                      
                      <div className="jfs-module-topics-slide">
                        {module.topics.map((topic, idx) => (
                          <div key={idx} className="jfs-topic-item-slide">
                            <span className="jfs-topic-check-slide">
                              <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className="jfs-topic-text-slide">{topic}</span>
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
          <div className="jfs-curriculum-highlights">
            <div className="jfs-highlight-card jfs-orange-highlight">
              <div className="jfs-highlight-icon">
                <FontAwesomeIcon icon={faJava} /> {/* Changed to faJava */}
              </div>
              <h3>Core to Advanced Java</h3>
              <p>Master Java from fundamentals to enterprise-level development</p>
            </div>
            <div className="jfs-highlight-card jfs-green-highlight">
              <div className="jfs-highlight-icon">
                <FontAwesomeIcon icon={faLeaf} />
              </div>
              <h3>Spring Boot Mastery</h3>
              <p>Build scalable backend applications with Spring ecosystem</p>
            </div>
            <div className="jfs-highlight-card jfs-orange-highlight">
              <div className="jfs-highlight-icon">
                <FontAwesomeIcon icon={faAtom} />
              </div>
              <h3>React.js Frontend</h3>
              <p>Create dynamic user interfaces with modern JavaScript</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Resources Section */}
      <section className="jfs-section jfs-light-green-bg">
        <div className="jfs-container">
          <h2 className="jfs-section-title jfs-green-text">Tools & Resources</h2>
          <p className="jfs-section-subtitle">Master industry-standard tools used in professional Java FullStack development</p>
          
          <div className="jfs-tools-grid">
            {toolsResources.map((tool, index) => (
              <div 
                key={index} 
                className="jfs-tool-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="jfs-tool-icon">
                  <FontAwesomeIcon icon={tool.icon} />
                </div>
                <div className="jfs-tool-content">
                  <h4 className="jfs-tool-name">{tool.name}</h4>
                  <p className="jfs-tool-desc">{tool.description}</p>
                </div>
                <div className="jfs-tool-hover-effect"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="jfs-section jfs-light-green-bg">
        <div className="jfs-container">
          <h2 className="jfs-section-title jfs-green-text">Program Benefits</h2>
          <p className="jfs-section-subtitle">Everything you need for a successful Java FullStack career</p>
          
          <div className="jfs-benefits-grid">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="jfs-benefit-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="jfs-benefit-icon-wrapper">
                  <div className="jfs-benefit-icon">
                    <FontAwesomeIcon icon={benefit.icon} />
                  </div>
                  <div className="jfs-benefit-icon-glow"></div>
                </div>
                <h3 className="jfs-benefit-title">{benefit.title}</h3>
                <p className="jfs-benefit-desc">{benefit.description}</p>
                <div className="jfs-benefit-hover-effect"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Section with Lock Overlay */}
      <section className="jfs-section jfs-dark-bg">
        <div className="jfs-container">
          <h2 className="jfs-section-title">Professional Certification</h2>
          <p className="jfs-section-subtitle">Earn a globally recognized Java FullStack certificate upon completion</p>
          
          <div className="jfs-certificate-single">
            <div className="jfs-certificate-image-wrapper">
             <img 
                src={javaCertificate}
                alt="Graphic Design Masterclass Certificate"
                className="gdc-certificate-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1589330273594-fade1ee91647?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
                }}
              />        
              
              <div className="jfs-certificate-lock-overlay">
                <div className="jfs-lock-icon">
                  <FontAwesomeIcon icon={faLock} />
                </div>
                <div className="jfs-lock-text">Certificate Locked</div>
                <div className="jfs-lock-subtext">Complete the course to unlock</div>
              </div>
              
              <div className="jfs-certificate-overlay">
                <span className="jfs-certificate-badge">Your Professional Certificate Template</span>
              </div>
            </div>
            
            <div className="jfs-certificate-info-single">
              <h3 className="jfs-certificate-title-single">
                <FontAwesomeIcon icon={faCertificate} className="jfs-cert-title-icon" />
                {certificate.title}
              </h3>
              <p className="jfs-certificate-desc-single">{certificate.description}</p>
              
              <div className="jfs-certificate-features-single">
                {certificate.features.map((feature, index) => (
                  <div key={index} className="jfs-certificate-feature-item-single">
                    <FontAwesomeIcon icon={faCheckCircle} className="jfs-feature-check" />
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="jfs-certificate-benefits">
                <div className="jfs-benefit">
                  <span className="jfs-benefit-icon">
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </span>
                  <span className="jfs-benefit-text">Enhances your professional credibility</span>
                </div>
                <div className="jfs-benefit">
                  <span className="jfs-benefit-icon">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </span>
                  <span className="jfs-benefit-text">Increases job opportunities by 90%</span>
                </div>
                <div className="jfs-benefit">
                  <span className="jfs-benefit-icon">
                    <FontAwesomeIcon icon={faGlobe} />
                  </span>
                  <span className="jfs-benefit-text">Globally recognized by tech companies</span>
                </div>
                <div className="jfs-benefit">
                  <span className="jfs-benefit-icon">
                    <FontAwesomeIcon icon={faQrcode} />
                  </span>
                  <span className="jfs-benefit-text">QR code verification for authenticity</span>
                </div>
              </div>
              
              <div className="jfs-certificate-instructions">
                <h4>
                  <FontAwesomeIcon icon={faInfoCircle} /> Certificate Details:
                </h4>
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
      <section className="jfs-section jfs-white-bg">
        <div className="jfs-container">
          <h2 className="jfs-section-title jfs-green-text">Student Success Stories</h2>
          <p className="jfs-section-subtitle">Transformations that inspire us every day</p>
          
          <div className="jfs-stories-grid-light">
            {testimonials.map((story, index) => (
              <div 
                key={index} 
                className="jfs-story-card-light"
              >
                <div className="jfs-story-header-light">
                  <div className="jfs-story-avatar-light">
                    <span className="jfs-avatar-text-light">{story.avatar}</span>
                  </div>
                  <div className="jfs-story-info-light">
                    <h4 className="jfs-story-name-light">{story.name}</h4>
                    <p className="jfs-story-role-light">
                      <FontAwesomeIcon icon={faUser} /> {story.role}
                    </p>
                    <div className="jfs-story-salary-light">
                      <FontAwesomeIcon icon={faGraduationCap} /> Course Studied: {story.salary}
                    </div>
                  </div>
                </div>
                
                <div className="jfs-story-rating-container-light">
                  <div className="jfs-story-rating-light">
                    {'★'.repeat(story.rating)}
                  </div>
                </div>
                
                <p className="jfs-story-review-light">
                  "{story.review}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Section */}
      <section className="jfs-section jfs-dark-enrollment" ref={formSectionRef}>
        <div className="jfs-container">
          <div className="jfs-floating-icons-container">
            {floatingIcons.map((icon, index) => (
              <div 
                key={index} 
                className="jfs-floating-icon"
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
          
          <h2 className="jfs-section-title">Start Your Java FullStack Journey Today</h2>
          <p className="jfs-section-subtitle">Limited seats available for the next batch</p>
          
          <div className="jfs-contact-details-grid">
            {contactDetails.map((contact, index) => (
              <div key={index} className="jfs-contact-item-dark">
                <div className="jfs-contact-icon-dark">
                  <FontAwesomeIcon icon={contact.icon} />
                </div>
                <h4 className="jfs-contact-title-dark">{contact.title}</h4>
                <div className="jfs-contact-info-dark">
                  {contact.details.map((detail, idx) => (
                    <p key={idx} className="jfs-contact-detail-dark">{detail}</p>
                  ))}
                </div>
                <p className="jfs-contact-description-dark">{contact.description}</p>
              </div>
            ))}
          </div>
          
          <div className="jfs-enrollment-section-dark">
            <h3 className="jfs-enrollment-title-dark">Secure Your Spot Now</h3>
            <p className="jfs-enrollment-subtitle-dark">Batch starting soon - Limited availability</p>
            
            {showEnrollment ? (
              <div className="jfs-enrollment-form-expanded-dark">
                <div className="jfs-form-header-expanded-dark">
                  <h4>Enrollment Form</h4>
                  <button 
                    className="jfs-form-close-btn-dark"
                    onClick={() => setShowEnrollment(false)}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
                
                <form onSubmit={handleSubmit} className="jfs-enrollment-form-content-dark">
                  <div className="jfs-form-grid-expanded-dark">
                    <div className="jfs-form-group-expanded-dark">
                      <label>
                        <FontAwesomeIcon icon={faUser} /> Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div className="jfs-form-group-expanded-dark">
                      <label>
                        <FontAwesomeIcon icon={faEnvelope} /> Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="you@example.com"
                      />
                    </div>
                    
                    <div className="jfs-form-group-expanded-dark">
                      <label>
                        <FontAwesomeIcon icon={faPhone} /> Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    
                    <div className="jfs-form-group-expanded-dark">
                      <label>
                        <FontAwesomeIcon icon={faGraduationCap} /> Course *
                      </label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="Java FullStack Development">Java FullStack Development</option>
                        <option value="Spring Boot Specialization">Spring Boot Specialization</option>
                        <option value="React.js Frontend">React.js Frontend</option>
                        <option value="Microservices Architecture">Microservices Architecture</option>
                      </select>
                    </div>
                  </div>
                  
                  <button type="submit" className="jfs-submit-btn-expanded-dark">
                    <FontAwesomeIcon icon={faRocket} /> Complete Enrollment
                  </button>
                </form>
              </div>
            ) : (
              <div className="jfs-enrollment-cta-dark">
                <button 
                  className="jfs-enrollment-btn-large-dark"
                  onClick={() => setShowEnrollment(true)}
                >
                  <FontAwesomeIcon icon={faBullseye} /> Start Enrollment Now
                </button>
                <p className="jfs-cta-note-dark">Complete the form to secure your seat</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Success Toast Message */}
      {showSuccess && (
        <div className="jfs-toast">
          <div className="jfs-toast-content">
            <div className="jfs-toast-icon">
              <FontAwesomeIcon icon={faAward} />
            </div>
            <div className="jfs-toast-message">
              <h4>Enrollment Successful!</h4>
              <p>Welcome to Java FullStack Development! Our team will contact you within 24 hours.</p>
            </div>
          </div>
        </div>
      )}
    </div>
    <LearningFooter />
  </div>
  </>
);
};

export default JavaFullStackCourse;