import React, { useState } from 'react';
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
  faUserTie,
  faLaptopCode,
  faChartLine,
  faHandsHelping,
  faAward,
  faSearch,
  faClipboardList,
  faChalkboardTeacher,
  faRocket,
  faSyncAlt,
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
  faPhoneAlt
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp as faWhatsappBrand } from '@fortawesome/free-brands-svg-icons';
import './CorporateTraining.css';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import MainPageSubFooter from '../MainPageSubFooter/MainPageSubFooter';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import { Helmet } from 'react-helmet';

const CorporateTraining = () => {
  const [showToast, setShowToast] = useState(false);

  // MNC Companies with Logo Images - UNCHANGED
  const mncCompanies = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", industry: "Technology" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", industry: "Software" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", industry: "E-commerce" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", industry: "IT Services" },
    { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg", industry: "Consulting" },
    { name: "Deloitte", logo: "https://upload.wikimedia.org/wikipedia/commons/1/15/Deloitte.svg", industry: "Professional Services" },
    { name: "JPMorgan Chase", logo: "https://upload.wikimedia.org/wikipedia/commons/3/38/JPMorgan_Chase_logo.svg", industry: "Banking" },
    { name: "Siemens", logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/Siemens_AG_logo.svg", industry: "Manufacturing" },
    { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg", industry: "Networking" },
    { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg", industry: "CRM" },
    { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", industry: "Database" },
    { name: "SAP", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg", industry: "Enterprise Software" }
  ];

  // Training Programs - Updated with FontAwesome icons
  const trainingPrograms = [
    {
      id: 1,
      title: "AI & Machine Learning Enterprise",
      duration: "4-6 Weeks",
      level: "Advanced",
      icon: <FontAwesomeIcon icon={faRobot} />,
      description: "Transform your business with AI and ML solutions tailored for enterprise needs and digital transformation.",
      features: [
        "Custom ML Model Development",
        "AI Strategy Consulting",
        "Team Upskilling Program",
        "Production Deployment Support"
      ],
      outcomes: "40% increase in operational efficiency and automation"
    },
    {
      id: 2,
      title: "Cloud Infrastructure & Migration",
      duration: "3-5 Weeks",
      level: "Intermediate",
      icon: <FontAwesomeIcon icon={faCloud} />,
      description: "Seamless cloud migration and optimization for scalable and secure enterprise infrastructure.",
      features: [
        "Multi-cloud Strategy Planning",
        "Cost Optimization Framework",
        "Security Best Practices",
        "Disaster Recovery Setup"
      ],
      outcomes: "35% reduction in IT infrastructure costs"
    },
    {
      id: 3,
      title: "DevOps & CI/CD Transformation",
      duration: "4-8 Weeks",
      level: "Advanced",
      icon: <FontAwesomeIcon icon={faTools} />,
      description: "Implement enterprise-grade DevOps practices for faster and more reliable software delivery cycles.",
      features: [
        "Pipeline Automation Setup",
        "Container Orchestration",
        "Monitoring Stack Implementation",
        "Security Integration Framework"
      ],
      outcomes: "70% faster deployment and release cycles"
    },
    {
      id: 4,
      title: "Cybersecurity Excellence Program",
      duration: "2-4 Weeks",
      level: "All Levels",
      icon: <FontAwesomeIcon icon={faShieldAlt} />,
      description: "Comprehensive cybersecurity training for modern threat protection and regulatory compliance.",
      features: [
        "Threat Intelligence Analysis",
        "Incident Response Planning",
        "Compliance Framework Implementation",
        "Risk Assessment Methodology"
      ],
      outcomes: "Zero critical vulnerabilities and full compliance"
    },
    {
      id: 5,
      title: "Data Science & Analytics Mastery",
      duration: "4-6 Weeks",
      level: "Intermediate",
      icon: <FontAwesomeIcon icon={faChartBar} />,
      description: "Build data-driven decision making capabilities across your organization with advanced analytics.",
      features: [
        "Predictive Analytics Models",
        "Data Visualization Dashboards",
        "Statistical Modeling Techniques",
        "Business Intelligence Solutions"
      ],
      outcomes: "25% boost in data-driven business decisions"
    },
    {
      id: 6,
      title: "Digital Transformation Leadership",
      duration: "6-12 Weeks",
      level: "Strategic",
      icon: <FontAwesomeIcon icon={faLightbulb} />,
      description: "Guide your organization through comprehensive digital transformation and innovation initiatives.",
      features: [
        "Strategy Development Framework",
        "Change Management Program",
        "Technology Roadmap Planning",
        "ROI Analysis Methodology"
      ],
      outcomes: "Successful organization-wide digital transformation"
    }
  ];

  // Success Stories - Updated with FontAwesome icons
  const successStories = [
    {
      id: 1,
      company: "Client Feedback",
      challenge: "Legacy systems and slow digital transformation initiatives",
      solution: "Custom DevOps & Cloud Migration Program",
      results: [
        "60% faster deployment cycles",
        "40% infrastructure cost reduction",
        "Zero downtime migration achieved",
        "100% team certification rate"
      ],
      testimonial: "The training was very practical and relevant to our daily work. Our team's design quality and speed improved noticeably",
      executive: "marketing team lead"
    },
    {
      id: 2,
      company: "Student Feedback",
      challenge: "Data silos and inefficient analytics capabilities",
      solution: "Enterprise Data Science Program",
      results: [
        "Unified data platform implemented",
        "Real-time analytics dashboards created",
        "Predictive patient care models developed",
        "Data governance framework established"
      ],
      testimonial: "UI/UX concepts were explained clearly with real examples. Our developers and designers now collaborate better.",
      executive: "Marketing team lead"
    }
  ];

  // Training Benefits - Updated with FontAwesome icons
  const benefits = [
    {
      icon: <FontAwesomeIcon icon={faBullseye} />,
      title: "Custom Curriculum Design",
      description: "Tailored programs designed specifically for your business objectives and industry requirements"
    },
    {
      icon: <FontAwesomeIcon icon={faChalkboardTeacher} />,
      title: "Expert Faculty Team",
      description: "Industry veterans with real-world implementation experience and proven track records"
    },
    {
      icon: <FontAwesomeIcon icon={faLaptopCode} />,
      title: "Hands-on Learning Labs",
      description: "Practical exercises using industry-standard tools and real-world business scenarios"
    },
    {
      icon: <FontAwesomeIcon icon={faChartLine} />,
      title: "Measurable ROI Tracking",
      description: "Clear KPIs and performance metrics to track business impact and training effectiveness"
    },
    {
      icon: <FontAwesomeIcon icon={faHandsHelping} />,
      title: "Continuous Support System",
      description: "Post-training mentorship and resources for ongoing success and skill development"
    },
    {
      icon: <FontAwesomeIcon icon={faAward} />,
      title: "Global Certification Program",
      description: "Industry-recognized certifications for your team members with international validity"
    }
  ];

  // Training Process - Updated with FontAwesome icons
  const processSteps = [
    { step: 1, title: "Discovery & Assessment", description: "In-depth analysis of training needs and business objectives", icon: <FontAwesomeIcon icon={faSearch} /> },
    { step: 2, title: "Curriculum Design", description: "Custom program development with learning objectives", icon: <FontAwesomeIcon icon={faClipboardList} /> },
    { step: 3, title: "Training Delivery", description: "Interactive expert-led sessions with practical exercises", icon: <FontAwesomeIcon icon={faChalkboardTeacher} /> },
    { step: 4, title: "Practical Implementation", description: "Real-world project execution and application", icon: <FontAwesomeIcon icon={faRocket} /> },
    { step: 5, title: "Performance Evaluation", description: "Comprehensive assessment and feedback collection", icon: <FontAwesomeIcon icon={faChartBar} /> },
    { step: 6, title: "Continuous Improvement", description: "Ongoing support, optimization, and follow-up sessions", icon: <FontAwesomeIcon icon={faSyncAlt} /> }
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
      <TopNavBar/>
      <TwoLineNavbar/>
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

      {/* Hero Section - FULL VH */}
      <header className="ct-hero">
        <div className="ct-hero-background">
          <div className="ct-hero-content">
            <h1 className="ct-hero-title">
              <span className="ct-hero-main">Corporate Training Solutions</span>
              <span className="ct-hero-sub">Transform Your Workforce • Accelerate Business Growth</span>
            </h1>
            
            <p className="ct-hero-description">
              Expert-led training programs designed to build enterprise capabilities, 
              drive innovation, and deliver measurable business impact across your organization.
            </p>
            
            <button 
              className="ct-hero-cta"
              onClick={handleWhatsAppContact}
            >
              <span className="ct-cta-text">Contact on WhatsApp</span>
              <span className="ct-cta-icon"><FontAwesomeIcon icon={faWhatsappBrand} /></span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="ct-main">
        {/* MNC Companies Section - UNCHANGED */}
        <section className="ct-section ct-companies-section">
          <div className="ct-container">
            <div className="ct-section-header">
              <h2 className="ct-section-title">Trusted by Global Leaders</h2>
              <p className="ct-section-subtitle">Training partners across industries and continents</p>
            </div>
            
            <div className="ct-companies-grid">
              {mncCompanies.map((company, index) => (
                <div 
                  key={index} 
                  className="ct-company-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="ct-company-logo-wrapper">
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`}
                      className="ct-company-logo-img"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
                          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                            <rect width="100" height="100" fill="#f0f0f0"/>
                            <text x="50" y="50" font-family="Arial" font-size="12" text-anchor="middle" dy=".3em" fill="#666">${company.name.substring(0, 3)}</text>
                          </svg>
                        `);
                      }}
                    />
                    <div className="ct-company-glow"></div>
                  </div>
                  <h3 className="ct-company-name">{company.name}</h3>
                  <p className="ct-company-industry">{company.industry}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Programs Section - Updated with FontAwesome icons */}
        <section className="ct-section ct-programs-section">
          <div className="ct-container">
            <div className="ct-section-header">
              <h2 className="ct-section-title">Enterprise Training Programs</h2>
              <p className="ct-section-subtitle">Comprehensive solutions for modern business challenges</p>
            </div>
            
            <div className="ct-programs-grid">
              {trainingPrograms.map((program) => (
                <div 
                  key={program.id} 
                  className="ct-program-card"
                >
                  <div className="ct-program-header">
                    <div className="ct-program-icon">
                      {program.icon}
                    </div>
                    <div className="ct-program-level">
                      {program.level}
                    </div>
                  </div>
                  
                  <div className="ct-program-content">
                    <h3 className="ct-program-title">{program.title}</h3>
                    <p className="ct-program-description">{program.description}</p>
                    
                    <div className="ct-program-duration">
                      <span className="ct-duration-icon"><FontAwesomeIcon icon={faClock} /></span>
                      <span className="ct-duration-text">{program.duration}</span>
                    </div>
                    
                    <div className="ct-program-features">
                      <h4 className="ct-features-title">Key Features:</h4>
                      <ul className="ct-features-list">
                        {program.features.map((feature, index) => (
                          <li key={index} className="ct-feature-item">
                            <span className="ct-feature-icon"><FontAwesomeIcon icon={faCheck} /></span>
                            <span className="ct-feature-text">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="ct-program-outcome">
                      <span className="ct-outcome-icon"><FontAwesomeIcon icon={faBullseye} /></span>
                      <span className="ct-outcome-text">{program.outcomes}</span>
                    </div>
                  </div>
                  
                  <button 
                    className="ct-program-cta"
                    onClick={handleWhatsAppContact}
                  >
                    <span className="ct-cta-text">Get Program Details</span>
                    <span className="ct-cta-arrow"><FontAwesomeIcon icon={faWhatsappBrand} /></span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section - Updated with FontAwesome icons */}
        <section className="ct-section ct-benefits-section">
          <div className="ct-container">
            <div className="ct-section-header">
              <h2 className="ct-section-title">Why Enterprise Leaders Choose Us</h2>
              <p className="ct-section-subtitle">Comprehensive benefits designed for global organizations</p>
            </div>
            
            <div className="ct-benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="ct-benefit-card">
                  <div className="ct-benefit-icon-wrapper">
                    <div className="ct-benefit-icon">{benefit.icon}</div>
                    <div className="ct-benefit-glow"></div>
                  </div>
                  <h3 className="ct-benefit-title">{benefit.title}</h3>
                  <p className="ct-benefit-description">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section - Updated with FontAwesome icons */}
        <section className="ct-section ct-stories-section">
          <div className="ct-container">
            <div className="ct-section-header">
              <h2 className="ct-section-title">Enterprise Success Stories</h2>
              <p className="ct-section-subtitle">Real impact, measurable results across industries</p>
            </div>
            
            <div className="ct-stories-grid">
              {successStories.map((story) => (
                <div key={story.id} className="ct-story-card">
                  <div className="ct-story-header">
                    <div className="ct-story-company-info">
                      <h3 className="ct-story-company">{story.company}</h3>
                      <div className="ct-story-challenge">
                        <span className="ct-challenge-icon"><FontAwesomeIcon icon={faBullseye} /></span>
                        <span className="ct-challenge-text">{story.challenge}</span>
                      </div>
                    </div>
                    <div className="ct-story-solution">
                      <span className="ct-solution-icon"><FontAwesomeIcon icon={faLightbulb} /></span>
                      <span className="ct-solution-text">{story.solution}</span>
                    </div>
                  </div>
                  
                  <div className="ct-story-results">
                    <h4 className="ct-results-title">Key Results:</h4>
                    <ul className="ct-results-list">
                      {story.results.map((result, index) => (
                        <li key={index} className="ct-result-item">
                          <span className="ct-result-icon"><FontAwesomeIcon icon={faCheck} /></span>
                          <span className="ct-result-text">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="ct-story-testimonial">
                    <div className="ct-quote-mark"><FontAwesomeIcon icon={faQuoteLeft} /></div>
                    <p className="ct-testimonial-text">"{story.testimonial}"</p>
                    <div className="ct-testimonial-author">
                      <span className="ct-author-icon"><FontAwesomeIcon icon={faUser} /></span>
                      <span className="ct-author-name">{story.executive}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section - Updated with FontAwesome icons */}
        <section className="ct-section ct-process-section">
          <div className="ct-container">
            <div className="ct-section-header">
              <h2 className="ct-section-title">Our Training Methodology</h2>
              <p className="ct-section-subtitle">A structured approach to enterprise learning excellence</p>
            </div>
            
            {/* Stats Section - Updated with FontAwesome icons */}
            <div className="ct-stats-section">
              <div className="ct-stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="ct-stat-item">
                    <div className="ct-stat-icon">{stat.icon}</div>
                    <div className="ct-stat-number">{stat.value}</div>
                    <h3 className="ct-stat-label">{stat.label}</h3>
                    <p className="ct-stat-description">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Process Steps - Updated with FontAwesome icons */}
            <div className="ct-process-timeline">
              {processSteps.map((step) => (
                <div key={step.step} className="ct-process-step ct-float-animation">
                  <div className="ct-step-number">
                    <span className="ct-step-digit">{step.step}</span>
                  </div>
                  <div className="ct-step-content">
                    <div className="ct-step-icon">{step.icon}</div>
                    <h3 className="ct-step-title">{step.title}</h3>
                    <p className="ct-step-description">{step.description}</p>
                  </div>
                  {step.step < processSteps.length && (
                    <div className="ct-step-connector"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WhatsApp Contact Section - Updated with FontAwesome icons */}
        <section className="ct-section ct-whatsapp-section">
          <div className="ct-container">
            <div className="ct-whatsapp-wrapper">
              <div className="ct-whatsapp-content">
                <div className="ct-whatsapp-icon"><FontAwesomeIcon icon={faWhatsappBrand} /></div>
                <h2 className="ct-whatsapp-title">Ready to Transform Your Team?</h2>
                <p className="ct-whatsapp-description">
                  Contact us directly on WhatsApp for personalized consultation, 
                  customized training proposals, and immediate assistance.
                </p>
                <button 
                  className="ct-whatsapp-button"
                  onClick={() => {
                    setShowToast(true);
                    setTimeout(() => {
                      handleWhatsAppContact();
                    }, 1000);
                  }}
                >
                  <span className="ct-whatsapp-button-icon"><FontAwesomeIcon icon={faMobileAlt} /></span>
                  <span className="ct-whatsapp-button-text">Chat on WhatsApp</span>
                  <span className="ct-whatsapp-button-arrow"><FontAwesomeIcon icon={faArrowRight} /></span>
                </button>
                <div className="ct-whatsapp-note">
                  <span className="ct-note-icon"><FontAwesomeIcon icon={faComments} /></span>
                  <span className="ct-note-text">
                    Our training experts are available 24/7 to discuss your corporate training needs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <MainPageSubFooter/>
      <BackToTop/>
    </div>
    </div>
    </>
  );
};

export default CorporateTraining;