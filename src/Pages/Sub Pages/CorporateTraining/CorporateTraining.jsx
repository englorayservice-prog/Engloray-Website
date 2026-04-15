import React, { useState, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRobot,
  faCloud,
  faTools,
  faShieldAlt,
  faChartBar,
  faLightbulb,
  faCheck,
  faClock,
  faBullseye,
  faChevronLeft,
  faChevronRight,
  faUserTie,
  faGlobe, // Added for NFT-style features
  faProjectDiagram, // Added for NFT-style features
  faLaptopCode,
  faChartLine,
  faHandsHelping,
  faAward,
  faSearch,
  faClipboardList,
  faChalkboardTeacher,
  faRocket,
  faSyncAlt,
  faCode,
  faBuilding,
  faUsers,
  faStar,
  faWhatsapp,
  faTimes,
  faArrowRight,
  faQuoteLeft,
  faUser,
  faGraduationCap,
  faMobileAlt,
  faComments,
  faPhoneAlt,
  faPlus,
  faTerminal,
  faHeadset,
  faChartPie,
  faDraftingCompass,
  faChartArea,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp as faWhatsappBrand } from '@fortawesome/free-brands-svg-icons';
import './CorporateTraining.css';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import MainPageSubFooter from '../MainPageSubFooter/MainPageSubFooter';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import { Helmet } from 'react-helmet';
import threeMenCorporateHero from '../../../assets/three_men_corporate_hero.png';
import corporateImage from '../../../assets/corporate.jpeg';
import ctVisual1 from '../../../assets/ct_visual_1.png';
import ctVisual2 from '../../../assets/ct_visual_2.png';
import ctVisual3 from '../../../assets/ct_visual_3.png';
import ctVisual4 from '../../../assets/ct_visual_4.png';
import cardImg1 from '../../../assets/eLearning.png';
import cardImg2 from '../../../assets/education.png';

import bgAI from '../../../assets/bg_ai_ml.png';
import bgCloud from '../../../assets/bg_cloud.jpeg';
import bgDevOps from '../../../assets/bg_devops.png';
import bgCyber from '../../../assets/bg_cyber.png';
import bgData from '../../../assets/bg_data.png';
import bgFullStack from '../../../assets/bg_fullstack.png';
import heroCharFinal from '../../../assets/hero_character_final.png';
import arcImage from '../../../assets/arc.jpeg';

// Bento Benefit Images
import bentoFaculty from '../../../assets/ct_expert_faculty.png';
import bentoLabs from '../../../assets/ct_hands_on_labs.png';
import bentoRoi from '../../../assets/ct_roi_tracking.png';
import bentoSupport from '../../../assets/ct_continuous_support.png';
import bentoCustom from '../../../assets/ct_custom_design.png';
import bentoCerts from '../../../assets/ct_global_certs.png';

// Signature Collection Style Programs
const arcPrograms = [
  {
    id: 1,
    title: "Full Stack Development",
    tag: "TECHNICAL",
    duration: "6-8 Weeks",
    level: "Advanced",
    badge: "NEW",
    highlight: "Expert-led Sessions",
    img: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800&q=80",
    points: ["React & Next.js Mastery", "Scalable System Design", "Production Node Deployment", "Advanced React Patterns", "Microservices Architecture"]
  },
  {
    id: 2,
    title: "Cyber Security & Compliance",
    tag: "ENTERPRISE",
    duration: "4-6 Weeks",
    level: "Pro",
    badge: "PRO",
    highlight: "Hands-on Labs",
    img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80",
    points: ["Advanced Penetration Testing", "Security Architecture", "Global Compliance Standards", "Incident Response Training", "Network Security Protocols"]
  },
  {
    id: 3,
    title: "Cloud Masterclass",
    tag: "INFRASTRUCTURE",
    duration: "5-7 Weeks",
    level: "Intermediate",
    badge: "NEW",
    highlight: "AWS/Azure Certified",
    img: "https://images.unsplash.com/photo-1635830383423-281434493033?auto=format&fit=crop&w=800&q=80",
    points: ["AWS/Azure Multi-Cloud", "Kubernetes Orchestration", "Cost-Efficiency Strategies", "Serverless Architectures", "Cloud Security Best Practices"]
  },
  {
    id: 4,
    title: "Data Science Masters",
    tag: "AI & ML",
    duration: "8-10 Weeks",
    level: "Elite",
    badge: "ELITE",
    highlight: "Live Projects",
    img: "https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&w=800&q=80",
    points: ["LLM & Generative AI", "Predictive Analytics", "Real-world Data Pipelines", "Computer Vision Integration", "Natural Language Processing"]
  },
  {
    id: 5,
    title: "DevOps Excellence",
    tag: "AUTOMATION",
    duration: "4-6 Weeks",
    level: "Advanced",
    badge: "SPEED",
    highlight: "CI/CD Mastery",
    img: "https://images.unsplash.com/photo-1618401471353-b98aade8182a?auto=format&fit=crop&w=800&q=80",
    points: ["CI/CD Pipeline Mastery", "Docker Ecosystem", "Infrastructure as Code", "Kubernetes Advanced", "DevSecOps Integration"]
  },
  {
    id: 6,
    title: "UI/UX Engineering",
    tag: "CREATIVE",
    duration: "4-6 Weeks",
    level: "Advanced",
    badge: "NEW",
    highlight: "Hifi Prototypes",
    img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
    points: ["Design System Thinking", "UX Research Principles", "High-Fi Prototyping", "Complex Design Systems", "Motion Design Principles"]
  }
];

const CorporateTraining = () => {
  const [showToast, setShowToast] = useState(false);
  const methodologyGalleryRef = useRef(null);
  const successGalleryRef = useRef(null);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [currentSuccessIndex, setCurrentSuccessIndex] = useState(0);

  const handleMethodologyScroll = () => {
    if (methodologyGalleryRef.current) {
      const scrollPos = methodologyGalleryRef.current.scrollLeft;
      const cardWidth = methodologyGalleryRef.current.offsetWidth;
      setCurrentStoryIndex(Math.round(scrollPos / cardWidth));
    }
  };

  const handleStoriesScroll = () => {
    if (successGalleryRef.current) {
      const scrollPos = successGalleryRef.current.scrollLeft;
      const cardWidth = successGalleryRef.current.offsetWidth;
      setCurrentSuccessIndex(Math.round(scrollPos / cardWidth));
    }
  };

  const scrollMethodology = (direction) => {
    if (methodologyGalleryRef.current) {
      const slide = methodologyGalleryRef.current.querySelector('.ct-m-slide');
      if (slide) {
        const slideWidth = slide.offsetWidth + 30; // slide width + gap
        methodologyGalleryRef.current.scrollBy({ left: direction === 'next' ? slideWidth : -slideWidth, behavior: 'smooth' });
      }
    }
  };

  const scrollStories = (direction) => {
    if (successGalleryRef.current) {
      const exactScroll = successGalleryRef.current.offsetWidth;
      successGalleryRef.current.scrollBy({ left: direction === 'next' ? exactScroll : -exactScroll, behavior: 'smooth' });
    }
  };

  // MNC Companies with Logo Images - PURE IT & SOFTWARE GIANTS
  const mncCompanies = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", industry: "IT & Cloud" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", industry: "Software" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", industry: "IT & E-commerce" },
    { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg", industry: "Technology" },
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", industry: "Consumer Tech" },
    { name: "Oracle", logo: "https://www.vectorlogo.zone/logos/oracle/oracle-ar21.svg", industry: "Enterprise Software" },
    { name: "SAP", logo: "https://www.vectorlogo.zone/logos/sap/sap-ar21.svg", industry: "Enterprise Software" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", industry: "IT Services" },
    { name: "NVIDIA", logo: "https://www.vectorlogo.zone/logos/nvidia/nvidia-ar21.svg", industry: "AI & Hardware" },
    { name: "Adobe", logo: "https://www.vectorlogo.zone/logos/adobe/adobe-ar21.svg", industry: "Creative Software" },
    { name: "Intel", logo: "https://www.vectorlogo.zone/logos/intel/intel-ar21.svg", industry: "Hardware" },
    { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg", industry: "Networking" },
    { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg", industry: "CRM Software" },
    { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg", industry: "IT Consulting" },
    { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", industry: "Cloud Tech" },
    { name: "HP", logo: "https://www.vectorlogo.zone/logos/hp/hp-ar21.svg", industry: "IT Hardware" }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeArcIndex, setActiveArcIndex] = useState(2); // Center on 3rd item (index 2)

  const handleNextArc = () => {
    setActiveArcIndex((prev) => (prev + 1) % arcPrograms.length);
  };

  const handlePrevArc = () => {
    setActiveArcIndex((prev) => (prev - 1 + arcPrograms.length) % arcPrograms.length);
  };

  // Training Programs - with icons for thumbnails
  const trainingPrograms = [
    {
      id: 1,
      title: "AI & Machine Learning Enterprise",
      duration: "4-6 Weeks",
      level: "Advanced",
      description: "Transform your business with AI and ML solutions tailored for enterprise needs and digital transformation.",
      features: ["Custom ML Models", "AI Strategy Consulting", "Process Automation"],
      bgImage: bgAI,
      icon: faRobot
    },
    {
      id: 2,
      title: "Cloud Infrastructure & Migration",
      duration: "3-5 Weeks",
      level: "Intermediate",
      description: "Seamless cloud migration and optimization for scalable and secure enterprise infrastructure.",
      features: ["Cloud Migration", "Cost Optimization", "Security Best Practices"],
      bgImage: bgCloud,
      icon: faCloud
    },
    {
      id: 3,
      title: "DevOps & CI/CD Transformation",
      duration: "4-8 Weeks",
      level: "Advanced",
      description: "Implement enterprise-grade DevOps practices for faster and more reliable software delivery cycles.",
      features: ["CI/CD Pipelines", "Containerization", "Infrastructure as Code"],
      bgImage: bgDevOps,
      icon: faSyncAlt
    },
    {
      id: 4,
      title: "Cybersecurity Excellence Program",
      duration: "2-4 Weeks",
      level: "All Levels",
      description: "Comprehensive cybersecurity training for modern threat protection and regulatory compliance.",
      features: ["Threat Intelligence", "Incident Response", "Compliance Audits"],
      bgImage: bgCyber,
      icon: faShieldAlt
    },
    {
      id: 5,
      title: "Data Science & Analytics Mastery",
      duration: "4-6 Weeks",
      level: "Advanced",
      description: "Master the art of data-driven decision making with enterprise analytics and visualization.",
      features: ["Predictive Analytics", "Big Data Strategy", "Business Intelligence"],
      bgImage: bgData,
      icon: faChartBar
    },
    {
      id: 6,
      title: "Full-Stack Enterprise Innovation",
      duration: "6-8 Weeks",
      level: "Advanced",
      description: "Build robust, scalable full-stack applications with modern frameworks and agile methodologies.",
      features: ["Scalable Architecture", "Agile Transformation", "Modern Tech Stack"],
      bgImage: bgFullStack,
      icon: faCode
    }
  ];

  // Success Stories - Updated with FontAwesome icons
  const successStories = [
    {
      id: 1,
      company: "Global Logistics Enterprise",
      challenge: "Standardizing engineering practices across distributed global teams.",
      solution: "Full-Stack System Architecture Program",
      results: [
        "98% tool standard adoption achieved",
        "35% faster delivery cycles globally"
      ],
      testimonial: "The training provided a unified architectural framework that immediately improved our deployment speed and code consistency across all regions.",
      executive: "Global CTO"
    },
    {
      id: 2,
      company: "Fortune 500 Fintech Group",
      challenge: "Protecting legacy data systems against emerging cloud-based threats.",
      solution: "Cyber Security & Cloud Resilience Mastery",
      results: [
        "Zero critical vulnerabilities reported",
        "40% reduction in threat response time"
      ],
      testimonial: "More than just theory, the high-fidelity labs enabled our security team to identify and resolve vulnerabilities in real-time during the course.",
      executive: "SVP, Information Security"
    }
  ];

  const benefits = [
    {
      id: 1,
      icon: <FontAwesomeIcon icon={faProjectDiagram} />,
      title: "Custom Design",
      description: "Tailored programs for your business objectives. We analyze your workforce's current skill levels and design a modular curriculum that bridges gaps precisely. Our approach ensures alignment with your long-term strategic goals.",
      color: "#e0f2fe" // Light Blue
    },
    {
      id: 2,
      icon: <FontAwesomeIcon icon={faChalkboardTeacher} />,
      title: "Expert Faculty",
      description: "Industry veterans with real-world experience.",
      color: "#e0f2fe" // Light Blue
    },
    {
      id: 3,
      icon: <FontAwesomeIcon icon={faLaptopCode} />,
      title: "Hands-on Labs",
      description: "Practical exercises using industry tools in real-world scenarios.",
      color: "#e0f2fe" // Light Blue
    },
    {
      id: 4,
      icon: <FontAwesomeIcon icon={faChartLine} />,
      title: "ROI Tracking",
      description: "Clear KPIs and impact metrics. Detailed reporting on employee progress and performance improvements.",
      color: "#e0f2fe" // Light Blue
    },
    {
      id: 5,
      icon: <FontAwesomeIcon icon={faSyncAlt} />,
      title: "Continuous Support",
      description: "Post-training mentorship and resources. We provide dedicated support channels for all participants to ensure smooth implementation of new skills. Our experts offer personalized feedback to sustain long-term growth and technical excellence across your entire organization.",
      color: "#e0f2fe" // Light Blue
    },
    {
      id: 6,
      icon: <FontAwesomeIcon icon={faAward} />,
      title: "Global Certs",
      description: "Industry-recognized qualifications that validate expertise and boost workforce morale globally.",
      color: "#e0f2fe" // Light Blue
    }
  ];

  // Training Process - Updated with FontAwesome icons
  const processSteps = [
    { step: 1, title: "Corporate Needs Analysis", description: "Evaluating workforce skill gaps and business performance objectives to ensure strategic alignment.", icon: <FontAwesomeIcon icon={faSearch} /> },
    { step: 2, title: "Customized Learning Path", description: "Developing a modular, industry-aligned curriculum tailored specifically to your organization's technical needs.", icon: <FontAwesomeIcon icon={faClipboardList} /> },
    { step: 3, title: "Expert-Led Execution", description: "Immersive workshops and interactive sessions led by industry veterans to foster high-impact learning.", icon: <FontAwesomeIcon icon={faChalkboardTeacher} /> },
    { step: 4, title: "Hands-on Skill Labs", description: "Real-world project execution and practical application in advanced laboratory environments.", icon: <FontAwesomeIcon icon={faRocket} /> },
    { step: 5, title: "ROI & Impact Analysis", description: "Measuring skill acquisition and business impact through comprehensive performance tracking and ROI metrics.", icon: <FontAwesomeIcon icon={faChartBar} /> },
    { step: 6, title: "Post-Training Mentorship", description: "Ongoing expert support and continuous skill optimization to sustain long-term enterprise growth.", icon: <FontAwesomeIcon icon={faSyncAlt} /> }
  ];

  // Stats Data - Updated with FontAwesome icons
  const stats = [
    {
      value: "200+",
      label: "Global Companies",
      description: "Transformed through our customized training programs",
      icon: <FontAwesomeIcon icon={faBuilding} />
    },
    {
      value: "10,000+",
      label: "Professionals Trained",
      description: "Across 25+ countries and multiple industries",
      icon: <FontAwesomeIcon icon={faUsers} />
    },
    {
      value: "98%",
      label: "Success Rate",
      description: "Of clients achieve their training and business objectives",
      icon: <FontAwesomeIcon icon={faStar} />
    },
    {
      value: "40%",
      label: "Average ROI",
      description: "Business impact achieved within first 6 months",
      icon: <FontAwesomeIcon icon={faChartLine} />
    }
  ];

  // WhatsApp contact function
  const handleWhatsAppContact = () => {
    const phoneNumber = "6381759909"; // Your WhatsApp number
    const message = encodeURIComponent(
      "Hello! I'm interested in your Corporate Training Solutions. Can you please provide more information about your programs?"
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <div>
        <Helmet>
          <title>Engloray</title>
          <meta name="description" content="Bridge skill gaps with blended corporate training covering technical expertise & soft skills." />
          <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
          {/* <link rel="canonical" href="https://yourapp.com" /> */}
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Your App | Config" />
          <meta property="og:description" content="Lorem Ipsum" />
          {/* <meta property="og:url" content="https://yourapp.com" /> */}
        </Helmet>

        <div className="ct-page">
          {/* Toast Notification - Centered with new color theme */}
          {showToast && (
            <div className="ct-toast-overlay">
              <div className="ct-toast">
                <div className="ct-toast-content">
                  <span className="ct-toast-icon"><FontAwesomeIcon icon={faCheck} /></span>
                  <div className="ct-toast-text">
                    <h4 className="ct-toast-title">Redirecting to WhatsApp!</h4>
                    <p className="ct-toast-message">
                      You will be redirected to WhatsApp to discuss your corporate training requirements with our team.
                    </p>
                  </div>
                  <button
                    className="ct-toast-close"
                    onClick={() => setShowToast(false)}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ARC GRADIENT HERO SECTION - STRICT DESIGN UPGRADE MODE */}
          <section className="ct-arc-hero">
            {/* Navigation Layers */}
            <div className="ct-arc-nav">
              <TwoLineNavbar />
            </div>

            {/* NEW: Top Right Gradient Glow */}
            <div className="ct-arc-glow-right"></div>

            {/* Hero Content Canvas */}
            <div className="ct-arc-canvas">
              <div className="ct-arc-content-wrapper">
                {/* 1. Header Area */}
                <h1 className="ct-arc-h1">
                  CORPORATE TRAINING SOLUTIONS<br />
                  <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "38px" }}>Transform Your Workforce</span>
                </h1>

                {/* 2. Subtext */}
                <p className="ct-arc-p">
                  Expert-led programs designed to build enterprise capabilities,
                  drive innovation, and deliver measurable business impact.
                </p>

                {/* 3. CTA Row */}
                <div className="ct-arc-cta-row">
                  <button className="ct-arc-cta-btn" onClick={handleWhatsAppContact}>
                    Connect with WhatsApp
                  </button>
                </div>

                {/* 4. Stats Row */}
                <div className="ct-arc-stats-strip">
                  <div className="ct-arc-stat-node">
                    <span className="ct-stat-val">5+</span>
                    <span className="ct-stat-label">YEARS EXPERIENCE</span>
                  </div>
                  <div className="ct-arc-hr-divider"></div>
                  <div className="ct-arc-stat-node">
                    <span className="ct-stat-val">1M+</span>
                    <span className="ct-stat-label">LEARNING HOURS</span>
                  </div>
                  <div className="ct-arc-hr-divider"></div>
                  <div className="ct-arc-stat-node">
                    <span className="ct-stat-val">500+</span>
                    <span className="ct-stat-label">ENTERPRISE CLIENTS</span>
                  </div>
                  <div className="ct-arc-hr-divider"></div>
                  <div className="ct-arc-stat-node">
                    <span className="ct-stat-val">200+</span>
                    <span className="ct-stat-label">GLOBAL PARTNERS</span>
                  </div>
                </div>

                {/* 5. Animated Image Strip */}
                <div className="ct-image-strip-container">
                  <div className="ct-image-strip-track">
                    <img src={ctVisual1} alt="Corporate Visual" className="ct-strip-img" />
                    <img src={ctVisual2} alt="Corporate Visual" className="ct-strip-img" />
                    <img src={ctVisual3} alt="Corporate Visual" className="ct-strip-img" />
                    <img src={ctVisual4} alt="Corporate Visual" className="ct-strip-img" />
                    <img src={ctVisual1} alt="Corporate Visual" className="ct-strip-img" />
                    <img src={ctVisual2} alt="Corporate Visual" className="ct-strip-img" />
                    <img src={ctVisual3} alt="Corporate Visual" className="ct-strip-img" />
                    <img src={ctVisual4} alt="Corporate Visual" className="ct-strip-img" />
                    <img src={ctVisual1} alt="Corporate Visual" className="ct-strip-img" />
                    <img src={ctVisual2} alt="Corporate Visual" className="ct-strip-img" />
                    <img src={ctVisual3} alt="Corporate Visual" className="ct-strip-img" />
                    <img src={ctVisual4} alt="Corporate Visual" className="ct-strip-img" />
                  </div>
                </div>


                {/* 4. Centered Stats Row (Moved BELOW Image Strip) */}

              </div>
            </div>
          </section>

          {/* Main Content */}
          <main className="ct-main">
            {/* MNC Companies Section - ANIMATED MARQUEE REDESIGN */}
            <section className="ct-section ct-companies-section-new">
              <div className="ct-container-wide">
                <div className="ct-section-header-compact">
                  <h2 className="ct-section-title-dark">Trusted by Global Leaders</h2>
                  <p className="ct-section-subtitle-dark">TRAINING PARTNERS ACROSS INDUSTRIES AND CONTINENTS</p>
                </div>

                <div className="ct-marquee-container">
                  <div className="ct-marquee-track">
                    {/* First set of logos */}
                    {mncCompanies.map((company, index) => (
                      <div key={`logo-1-${index}`} className="ct-marquee-item">
                        <img src={company.logo} alt={company.name} className="ct-marquee-img" />
                      </div>
                    ))}
                    {/* Repeated set for seamless loop */}
                    {mncCompanies.map((company, index) => (
                      <div key={`logo-2-${index}`} className="ct-marquee-item">
                        <img src={company.logo} alt={company.name} className="ct-marquee-img" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="ct-section ct-anti-gravity-section">
              <div className="ct-container">
                <div className="ct-section-header">
                  <h2 className="ct-section-title">Enterprise Training Programs</h2>
                  <p className="ct-section-subtitle">Tailored modules for your growth</p>
                </div>

                <div className="ct-arc-viewport">
                  <div className="ct-arc-track">
                    {arcPrograms.map((program, index) => {
                      const diff = (index - activeArcIndex + arcPrograms.length) % arcPrograms.length;

                      let positionClass = "";
                      if (diff === 0) positionClass = "is-center";
                      else if (diff === 1) positionClass = "is-right-1";
                      else if (diff === arcPrograms.length - 1) positionClass = "is-left-1";
                      else if (diff === 2) positionClass = "is-right-2";
                      else if (diff === arcPrograms.length - 2) positionClass = "is-left-2";
                      else if (diff === 3) positionClass = "is-right-3";
                      else positionClass = "is-left-3";

                      return (
                        <div
                          key={program.id}
                          className={`ct-arc-card ${positionClass}`}
                          onClick={() => {
                            if (diff !== 0) {
                              setActiveArcIndex(index);
                            }
                          }}
                        >
                          <div className="ct-card-content">
                            {program.badge && <div className="ct-card-badge-themed">{program.badge}</div>}

                            <h3 className="ct-card-title-main">{program.title}</h3>

                            <div className="ct-card-specs-row">
                              <span className="ct-card-spec-tag">{program.duration}</span>
                              <span className="ct-card-spec-tag">{program.level}</span>
                            </div>

                            <ul className="ct-card-points-simple">
                              {program.points.map((pt, i) => (
                                <li key={i}>• {pt}</li>
                              ))}
                            </ul>

                            <div className="ct-card-highlight-row">
                              <span className="ct-card-highlight-val">{program.highlight}</span>
                            </div>

                            <button className="ct-card-enquire-btn" onClick={(e) => {
                              e.stopPropagation();
                              handleWhatsAppContact();
                            }}>
                              Enquire Now
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* ARC NAVIGATION CONTROLS - RESTRUCTURED TO SIDES */}
                  <div className="ct-arc-controls-wrapper">
                    <button className="ct-arc-nav-btn prev" onClick={handlePrevArc} aria-label="Previous Module">
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button className="ct-arc-nav-btn next" onClick={handleNextArc} aria-label="Next Module">
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                  </div>
                </div>

                <div className="ct-arc-dots-row">
                  <div className="ct-arc-dots">
                    {arcPrograms.map((_, i) => (
                      <div
                        key={i}
                        className={`ct-arc-dot ${i === activeArcIndex ? 'active' : ''}`}
                        onClick={() => setActiveArcIndex(i)}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Why Enterprise Leaders Choose Us section - PREMIUM WHITE REDESIGN */}
            <section className="ct-section ct-benefits-section-white">
              <div className="ct-container">
                <div className="ct-section-header-centered">
                  <h2 className="ct-section-title-alt" style={{ fontSize: '2.5rem' }}>Why Enterprise Leaders Choose Us</h2>
                  <p className="ct-section-subtitle-alt" style={{ fontSize: '0.9rem' }}>ELITE TRAINING BENEFITS FOR GLOBAL ORGANIZATIONS</p>
                  <div className="ct-section-underline-blue"></div>
                </div>

                <div className="ct-benefits-bento-grid">
                  {/* 1. Expert Faculty */}
                  <div className="ct-bento-item bento-theme-slate">
                    <div className="ct-bento-img-wrapper">
                      <img src={bentoFaculty} alt="Expert Faculty" className="ct-bento-img-bg" style={{ objectPosition: 'center' }} />
                      <div className="ct-bento-overlay" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 100%)' }}></div>
                    </div>
                    <div className="ct-bento-card-content ct-bento-card-align-top">
                      <div className="ct-bento-header-row" style={{ gap: '15px', justifyContent: 'flex-start' }}>
                        <h3 className="ct-bento-title" style={{ color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.5px', whiteSpace: 'nowrap' }}>Expert Faculty</h3>
                        <div className="ct-bento-icon-flat" style={{ color: '#ff0055' }}><FontAwesomeIcon icon={faUsers} /></div>
                      </div>
                      <p className="ct-bento-desc" style={{ color: 'rgba(255, 255, 255, 0.95)', fontSize: '0.88rem' }}>
                        Industry giants with real-world experience, bringing collective knowledge to your team's transformation journey.
                      </p>
                    </div>
                  </div>

                  {/* 2. Hands-on Labs */}
                  <div className="ct-bento-item bento-theme-blue">
                    <div className="ct-bento-img-wrapper">
                      <img src={bentoLabs} alt="Hands-on Labs" className="ct-bento-img-bg" style={{ objectPosition: 'center' }} />
                      <div className="ct-bento-overlay" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 100%)' }}></div>
                    </div>
                    <div className="ct-bento-card-content ct-bento-card-align-top">
                      <div className="ct-bento-header-row" style={{ gap: '15px', justifyContent: 'flex-start' }}>
                        <h3 className="ct-bento-title" style={{ color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.5px', whiteSpace: 'nowrap' }}>Hands-on Labs</h3>
                        <div className="ct-bento-icon-flat" style={{ color: '#00d4ff' }}><FontAwesomeIcon icon={faLaptopCode} /></div>
                      </div>
                      <p className="ct-bento-desc" style={{ color: 'rgba(255, 255, 255, 0.95)', fontSize: '0.88rem' }}>
                        Practical exercises using industrial-grade tools within scenarios to master complex enterprise protocols.
                      </p>
                    </div>
                  </div>

                  {/* 3. Continuous Support (TALL) */}
                  <div className="ct-bento-item bento-theme-indigo tall-span">
                    <div className="ct-bento-img-wrapper">
                      <img src={bentoSupport} alt="Continuous Support" className="ct-bento-img-bg" style={{ objectPosition: 'center' }} />
                      <div className="ct-bento-overlay" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 100%)' }}></div>
                    </div>
                    <div className="ct-bento-card-content ct-bento-card-align-top">
                      <div className="ct-bento-header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <h3 className="ct-bento-title" style={{ color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.5px', whiteSpace: 'normal', lineHeight: '1.2' }}>
                          CONTINUOUS <br /> SUPPORT
                        </h3>
                        <div className="ct-bento-icon-flat" style={{ color: '#a855f7' }}><FontAwesomeIcon icon={faHeadset} /></div>
                      </div>
                      <p className="ct-bento-desc" style={{ color: 'rgba(255, 255, 255, 0.95)', fontSize: '0.88rem' }}>
                        Post-training mentorship and personalized feedback to sustain long-term growth and technical excellence across your entire organization, ensuring your team remains at the cutting edge of industry standards with dedicated experts available 24/7 for tailored guidance, project reviews, and strategic roadmaps to success.
                      </p>
                    </div>
                  </div>

                  {/* 4. ROI Tracking */}
                  <div className="ct-bento-item bento-theme-purple">
                    <div className="ct-bento-img-wrapper">
                      <img src={bentoRoi} alt="ROI Tracking" className="ct-bento-img-bg" style={{ objectPosition: 'center' }} />
                      <div className="ct-bento-overlay" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 100%)' }}></div>
                    </div>
                    <div className="ct-bento-card-content ct-bento-card-align-top">
                      <div className="ct-bento-header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h3 className="ct-bento-title" style={{ color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.5px', whiteSpace: 'nowrap' }}>ROI Tracking</h3>
                        <div className="ct-bento-icon-flat" style={{ color: '#00ff88' }}><FontAwesomeIcon icon={faChartLine} /></div>
                      </div>
                      <p className="ct-bento-desc" style={{ color: 'rgba(255, 255, 255, 0.95)', fontSize: '0.88rem' }}>
                        Detailed reporting on employee progress and performance improvements.
                      </p>
                    </div>
                  </div>

                  {/* 5. Custom Design (WIDE) */}
                  <div className="ct-bento-item bento-theme-sage wide-span">
                    <div className="ct-bento-img-wrapper">
                      <img src={bentoCustom} alt="Custom Design" className="ct-bento-img-bg" style={{ objectPosition: 'center' }} />
                      <div className="ct-bento-overlay" style={{ background: 'linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.45) 60%, transparent 100%)' }}></div>
                    </div>
                    <div className="ct-bento-card-content row-content" style={{ justifyContent: 'space-between' }}>
                      <div className="text-col" style={{ flex: 1, textAlign: 'left' }}>
                        <h3 className="ct-bento-title" style={{ color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.5px', whiteSpace: 'nowrap' }}>Custom Design</h3>
                        <p className="ct-bento-desc" style={{ color: 'rgba(255, 255, 255, 0.95)', maxWidth: '85%', fontSize: '0.88rem' }}>
                          Tailored programs designed to bridge workforce gaps, precisely aligning curriculum with your organization's unique strategic objectives and goals.
                        </p>
                      </div>
                      <div className="icon-col">
                        <div className="ct-bento-icon-flat" style={{ color: '#00ffff', fontSize: '4.2rem' }}>
                          <FontAwesomeIcon icon={faDraftingCompass} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 6. Global Certs */}
                  <div className="ct-bento-item bento-theme-teal">
                    <div className="ct-bento-img-wrapper">
                      <img src={bentoCerts} alt="Global Certs" className="ct-bento-img-bg" style={{ objectPosition: 'center' }} />
                      <div className="ct-bento-overlay" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 100%)' }}></div>
                    </div>
                    <div className="ct-bento-card-content ct-bento-card-align-top">
                      <div className="ct-bento-header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h3 className="ct-bento-title" style={{ color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.5px', whiteSpace: 'nowrap' }}>Global Certs</h3>
                        <div className="ct-bento-icon-flat" style={{ color: '#ffd700' }}><FontAwesomeIcon icon={faAward} /></div>
                      </div>
                      <p className="ct-bento-desc" style={{ color: 'rgba(255, 255, 255, 0.95)', fontSize: '0.88rem' }}>
                        Industry-recognized qualifications that validate expertise and boost workforce morale globally.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Success Stories Section - Side-by-Side Split Gallery */}
            <section className="ct-section ct-stories-section">
              <div className="ct-container ct-stories-split-layout">
                {/* Left Side: Title & Description */}
                <div className="ct-stories-left" style={{ textAlign: 'left' }}>
                  <h2 className="ct-arc-title-ref" style={{ color: "#111827", fontSize: "3rem", lineHeight: "1.1", marginBottom: "20px", textAlign: 'left', fontWeight: '900', textTransform: 'uppercase' }}>
                    ENTERPRISE SUCCESS<br />STORIES
                  </h2>
                  <p className="ct-arc-description-ref" style={{ color: "#4b5563", marginBottom: "40px", textAlign: 'left' }}>
                    Real impact, measurable results across industries. Swipe to discover the transformational feedback from executing professionals and enterprise clients.
                  </p>
                </div>

                {/* Right Side: Swipeable Feedback Cards */}
                <div className="ct-stories-right">
                  <div className="ct-stories-wrapper">
                    <div className="ct-stories-gallery" ref={successGalleryRef} onScroll={handleStoriesScroll}>
                      <div className="ct-s-track">
                        {successStories.map((story, index) => {
                          const bgOpts = [
                            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80", // Strategy
                            "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80" // Corporate team
                          ];
                          return (
                            <div key={story.id} className="ct-story-slide">
                              <div className="ct-story-dental-card">
                                <img src={bgOpts[index % bgOpts.length]} alt={story.company} className="ct-sd-bg" />
                                <div className="ct-sd-overlay"></div>

                                <div className="ct-sd-content-split">
                                  {/* Left Text inside Image */}
                                  <div className="ct-sd-left">
                                    <div className="ct-sd-badge">{story.company}</div>
                                    <h3 className="ct-sd-title">{story.solution}</h3>
                                    <p className="ct-sd-desc">{story.challenge}</p>
                                  </div>

                                  {/* Right Floating Dashboard Box */}
                                  <div className="ct-sd-right">
                                    <div className="ct-sd-glass-panel">
                                      {/* Result mini cards */}
                                      <div className="ct-sd-mini-cards">
                                        {story.results.slice(0, 2).map((res, i) => (
                                          <div key={i} className="ct-sd-mini-card">
                                            <div className="ct-sd-mc-top">
                                              <span style={{ fontWeight: 600, color: '#334155', fontFamily: "'Inter', sans-serif" }}>Metric {i + 1}</span>
                                              <span className="ct-sd-status-badge">Achieved</span>
                                            </div>
                                            <p className="ct-sd-mc-val" style={{ fontFamily: "'Poppins', sans-serif" }}>{res}</p>
                                          </div>
                                        ))}
                                      </div>

                                      <div className="ct-sd-testimonial-mc">
                                        <p className="ct-sd-tmc-text">"{story.testimonial}"</p>
                                        <div className="ct-sd-tmc-footer">
                                          <span className="ct-sd-tmc-author">{story.executive}</span>
                                          <span className="ct-sd-tmc-date">Verified Prof.</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Gallery Navigation Controls for Stories - Split to sides */}
                    <div className="ct-s-nav-controls">
                      <button
                        className={`ct-m-nav-btn prev-btn ${currentSuccessIndex === 0 ? 'faded' : ''}`}
                        onClick={() => scrollStories('prev')}
                      >
                        <FontAwesomeIcon icon={faArrowLeft} />
                      </button>
                      <div style={{ flex: 1 }}></div>
                      <button
                        className={`ct-m-nav-btn next-btn ${currentSuccessIndex === successStories.length - 1 ? 'faded' : ''}`}
                        onClick={() => scrollStories('next')}
                      >
                        <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* Process Section - Updated with FontAwesome icons */}
            <section className="ct-section ct-process-section">
              <div className="ct-container">
                <div className="ct-arc-header-split">
                  <div className="ct-arc-header-left">
                    <h2 className="ct-arc-title-ref" style={{ color: "#111827" }}>OUR TRAINING <br />METHODOLOGY</h2>
                  </div>
                  <div className="ct-arc-header-right">
                    <p className="ct-arc-description-ref" style={{ color: "#4b5563" }}>
                      A structured approach to enterprise learning excellence. Explore our phase-by-phase execution framework designed to guarantee measurable business impact.
                    </p>
                  </div>
                </div>

                {/* Dashboard UI Swiper Gallery */}
                <div className="ct-methodology-wrapper">
                  <div className="ct-methodology-gallery" ref={methodologyGalleryRef} onScroll={handleMethodologyScroll}>
                    <div className="ct-m-track">
                      {processSteps.map((step, index) => {
                        const bgOptions = [
                          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80", // 1. Discovery (Team workshop)
                          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80", // 2. Curriculum Design (Planning)
                          "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80", // 3. Training Delivery (Class)
                          "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80", // 4. Practical Implementation (Collaborating)
                          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80", // 5. Performance Eval (Analytics)
                          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"  // 6. Continuous Improvement
                        ];
                        return (
                          <div key={step.step} className="ct-m-slide">
                            <img src={bgOptions[index % bgOptions.length]} alt={step.title} className="ct-m-slide-bg" />
                            <div className="ct-m-ui-overlay">
                              <div className="ct-m-dashboard-card">

                                <div className="ct-m-dash-header">
                                  <div className="ct-m-dash-main-val">{"0" + step.step}</div>
                                  <div className="ct-m-dash-status">
                                    {step.title} is <br />ready to execute
                                  </div>
                                </div>

                                <div className="ct-m-dash-progress"><div className="ct-m-dash-fill"></div></div>

                                <div className="ct-m-dash-grid">
                                  <div className="ct-m-dash-box theme-light">
                                    <div className="ct-m-box-top">
                                      {step.icon} <span>-</span>
                                    </div>
                                    <p className="ct-m-box-label">Primary Focus</p>
                                    <h4 className="ct-m-box-text">
                                      {index === 0 && "Aligning enterprise learning goals with technical workforce potential."}
                                      {index === 1 && "Designing custom, modular learning paths for specific workforce gaps."}
                                      {index === 2 && "Executing live, scenario-based modules with expert mentorship."}
                                      {index === 3 && "Validating technical skills through hands-on industrial-grade labs."}
                                      {index === 4 && "Measuring workforce impact through deep-dive KPI tracking."}
                                      {index === 5 && "Maintaining long-term growth through professional strategic support."}
                                    </h4>
                                  </div>

                                  <div className="ct-m-dash-box theme-orange">
                                    <div className="ct-m-box-top">
                                      <FontAwesomeIcon icon={faSyncAlt} /> <span>-</span>
                                    </div>
                                    <p className="ct-m-box-label">Objective</p>
                                    <h4 className="ct-m-box-text">{step.description}</h4>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Gallery Navigation Controls - MOVED INSIDE WRAPPER FOR SIDE POSITIONING */}
                  <div className="ct-m-nav-controls">
                    {currentStoryIndex > 0 && (
                      <button className="ct-m-nav-btn prev-btn" onClick={() => scrollMethodology('prev')}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                      </button>
                    )}
                    <div style={{ flex: 1 }}></div>
                    {currentStoryIndex < processSteps.length - 1 && (
                      <button className="ct-m-nav-btn next-btn" onClick={() => scrollMethodology('next')}>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                    )}
                  </div>
                </div>


                {/* Minimalist Bottom Stats */}
                <div className="ct-m-bottom-stats">
                  {stats.map((stat, index) => (
                    <div key={index} className="ct-m-stat-clean">
                      <h3 className="ct-m-stat-val-h">{stat.value}</h3>
                      <p className="ct-m-stat-sub-p">{stat.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* WhatsApp Contact Section - Updated with FontAwesome icons */}
            <section className="ct-section ct-whatsapp-minimal">
              <div className="ct-container" style={{ position: 'relative', zIndex: 10 }}>
                <div className="ct-w-minimal-card">
                  <h2 className="ct-w-title-big">Ready To Transform Your Team?</h2>
                  <p className="ct-w-subtitle-slim">
                    Contact us directly on WhatsApp for personalized consultation,<br className="desktop-only" />
                    customized training proposals, and immediate assistance.
                  </p>

                  <div className="ct-w-action-wrapper">
                    <button
                      className="ct-w-pill-btn"
                      onClick={() => {
                        setShowToast(true);
                        setTimeout(() => handleWhatsAppContact(), 1000);
                      }}
                    >
                      <span className="btn-label">Chat on WhatsApp</span>
                      <span className="btn-icon-box">
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </button>
                  </div>

                  <div className="ct-w-status-row">
                    <span className="status-dot"></span>
                    <span className="status-text">Available 24/7 for Global Consultation</span>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <MainPageSubFooter />
          <BackToTop />
        </div>
      </div>
    </>
  );
};

export default CorporateTraining;