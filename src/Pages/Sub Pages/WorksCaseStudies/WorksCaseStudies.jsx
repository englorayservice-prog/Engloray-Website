import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBullseye, 
  faChartLine, 
  faBolt, 
  faRocket,
  faLightbulb,
  faPalette,
  faCode,
  faMobileAlt,
  faLaptop,
  faGem,
  faLeaf,
  faHamburger,
  faBuilding,
  faFlask,
  faStethoscope,
  faGraduationCap,
  faRing,
  faBriefcase,
  faCrown,
  faTrophy,
  faUsers,
  faCalendarCheck,
  faStar,
  faQuoteLeft,
  faChevronDown,
  faChevronUp,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
//uiux
import caseStudyLogoOne from '../../../assets/case study images/uiux/pavizham.jpg';
import caseStudyLogoTwo from '../../../assets/case study images/uiux/viaan.jpg';
//branding
import caseStudyLogoThree from '../../../assets/case study images/branding/isha bites.png';
import caseStudyLogoFour from '../../../assets/case study images/branding/malar.jpg';
//products
import caseStudyLogoFive from '../../../assets/case study images/products/amico.png';
import caseStudyLogoSix from '../../../assets/case study images/products/brandex.png';
//websites
import caseStudyLogoSeven from '../../../assets/case study images/websites/green park school.png';
import caseStudyLogoEight from '../../../assets/case study images/websites/say.jpg';
//application
import caseStudyLogoNine from '../../../assets/case study images/Application/aara.png';
import caseStudyLogoTen from '../../../assets/case study images/Application/orthopetic clinic.png';
import './WorksCaseStudies.css';
import MainPageSubFooter from '../MainPageSubFooter/MainPageSubFooter';

const WorksCaseStudies = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [expandedCard, setExpandedCard] = useState(null);
    const [showAllStudies, setShowAllStudies] = useState(false);

    // Case study data
    const caseStudies = [
        {
            id: 1,
            title: "Pavizham Jewellery",
            subtitle: "Modernizing online shopping experience",
            category: "UiUx",
            client: "Pavizham Jewellers",
            duration: "1.5 Months",
            results: "+180% Sales Increase",
            description: "Complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
            image: caseStudyLogoOne,
            // icon: faGem,
            color: "#FF6B6B",
            challenges: [
                "No mobile-based digital system for customers ",
                "Manual processes caused delays and confusion",
                "Poor user experience in accessing services"
            ],
            solutions: [
                "Designed and developed a user-friendly mobile application ",
                "Structured features for easy service access and communication",
                "Focused on smooth navigation and usability ",
                "Clean and intuitive mobile UI",
                "Smooth user flow for service interaction"
            ]
        },
        {
            id: 2,
            title: "Isha Bites",
            subtitle: "Building scalable Brands",
            category: "Branding",
            client: "Isha Bites",
            duration: "1.5 Months",
            results: "+95% User Engagement",
            description: "Development of full branding with real-time features and logo integration.",
            image: caseStudyLogoThree,
            icon: faHamburger,
            color: "#4ECDC4",
            challenges: [
                "Low engagement on promotional content",
                "Brand visibility was limited"
            ],
            solutions: [
                "Created bold and attractive food promotions",
                "Focused on visual appeal and clear offers",
                "Food-friendly creative design",
                "High-engagement layouts"
            ]
        },
        {
            id: 3,
            title: "Amico food Products",
            subtitle: "creative Food Product Designs",
            category: "Products",
            client: "Amico",
            duration: "1.5 Months",
            results: "+300% Productivity",
            description: "Created the Productive designs for the natural food product company.",
            image: caseStudyLogoFive,
            icon: faBriefcase,
            color: "#45B7D1",
            challenges: [
                "Product packaging lacked professional shelf presence",
                "Labels were unclear and did not communicate quality",
                "Inconsistent visual identity across product range"
            ],
            solutions: [
                "Designed market-ready product packaging aligned with brand identity",
                "Created clear and premium label layouts for better readability",
                "Applied color psychology to improve shelf visibility and trust",
                "Shelf-optimized label system",
                "Consistent brand language across all products"
            ]
        },
        {
            id: 4,
            title: "Viaan Enterprises",
            subtitle: "Multi-channel marketing strategy",
            category: "UiUx",
            client: "Viaan Enterprises",
            duration: "1 Months",
            results: "+150% Lead Generation",
            description: "Comprehensive enterprise campaign across social media, search, and email channels.",
            image: caseStudyLogoTwo,
            icon: faBuilding,
            color: "#FF6B6B",
            challenges: [
                "Website UX lacked clarity and structure",
                "Users faced difficulty navigating service pages"
            ],
            solutions: [
                "Redesigned UI with clear sections",
                "Improved UX flow for service discovery ",
                "Modern and minimal UI ",
                "Easy navigation structure"
            ]
        },
        {
            id: 5,
            title: "Malar Herbs",
            subtitle: "Creating a herbal product using branding",
            category: "Branding",
            client: "Malar Herbal Products",
            duration: "1.5 Months",
            results: "+200% Operational Efficiency",
            description: "Enterprise branding platform for internal operations.",
            image: caseStudyLogoFour,
            icon: faLeaf,
            color: "#4ECDC4",
            challenges: [
                "Product range lacked consistency ",
                "Labels did not communicate herbal authenticity clearly"

            ],
            solutions: [
                "Created a structured packaging system across products", 
                "Designed herbal-focused labels with clear information flow", 
                "Applied calming and trustworthy visual elements" ,
                "Consistent herbal packaging system ",
                "Clear ingredient and usage hierarchy" ,
                "Nature-driven color palette "

            ]
        },
        {
            id: 6,
            title: "Brandex",
            subtitle: "products-driven decision making",
            category: "Products",
            client: "Brandex",
            duration: "1 Months",
            results: "+250% Insight Generation",
            description: "Creative Logos and Design for the product Company.",
            image: caseStudyLogoSix,   
            icon: faCrown,
            color: "#45B7D1",
            challenges: [
                "Packaging lacked clarity and market readiness"
            ],
            solutions: [
                "Designed market-ready label system ",
                "Improved visual balance and readability ",
                "Clear product communication ",
                "Strong shelf layout "

            ]
        },
         {
            id: 7,
            title: "Green Park School",
            subtitle: "Modernizing online school experience",
            category: "Website",
            client: "Green park school",
            duration: "2 Months",
            results: "+180% Digitalization",
            description: "Complete redesign of an erp platform focusing on user experience and conversion optimization.",
            image: caseStudyLogoSeven,
            icon: faGraduationCap,
            color: "#3D0C41",
            challenges: [
                "Outdated School Websites",
                "Difficult for parents to find information."
            ],
            solutions: [
                "Designed a student- and parent-friendly website", 
                "Structured academic and admission information clearly", 
                "Improved readability and navigation"
            ]
        },
        {
            id: 8,
            title: "Say Bridal Studio",
            subtitle: "Building scalable Brands",
            category: "Website",
            client: "Say bridals",
            duration: "1.5 Months",
            results: "+95% User Engagement",
            description: "Development of full website with real-time features and logo integration.",
            image: caseStudyLogoEight,
            icon: faRing,
            color: "#3D0C41",
            challenges: [
                "Needed an elegant online presence for bridal services", 
                "Website had to emotionally connect with customers "
            ],
            solutions: [
                "Designed a graceful and visually rich bridal website",
                "Focused on aesthetics, portfolio display, and inquiry flow", 
                "Ensured smooth mobile experience "
            ]
        },
        {
            id: 9,
            title: "Aara Labs",
            subtitle: "creative Lab application Designs",
            category: "App",
            client: "Aara Labs",
            duration: "2.5 Months",
            results: "+300% Productivity",
            description: "Created the Productive application for the medical testing lab .",
            image: caseStudyLogoNine,
            icon: faFlask,
            color: "#8B0000",
            challenges: [
                "No mobile access for lab services and reports ",
                "Patients needed easy digital access"
            ],
            solutions: [
                "Developed a clean and secure lab mobile application", 
                "Structured UX for reports, services, and contact",
                "Simple mobile access."
            ]
        },
        {
            id: 10,
            title: "Orthopedic Clinic",
            subtitle: "Multi-channel Clinic app",
            category: "App",
            client: "Orthopedic clinic",
            duration: "2 Months",
            results: "+150% Lead Patients",
            description: "Comprehensive enterprise App across social media, search, and email channels.",
            image: caseStudyLogoTen,
            icon: faStethoscope,
            color: "#8B0000",
            challenges: [
                "Patients struggled with manual appointment booking", 
                "High administrative workload", 
                "Poor patient experience"
            ],
            solutions: [
                "Developed a patient-friendly mobile application ",
                "Integrated appointment booking and notifications", 
                "Simplified patient interaction with the clinic"
            ]
        },
    ];

    // Testimonials data
    const testimonials = [
        {
            id: 1,
            text: "Very clean and professional website design. ENGLORAY gave us a strong digital presence that suits our business.",
            author: "Pavizham jewellery",
            role: "Pavithra S",
            company: "Jewellery shop",
            icon: faGem
        },
        {
            id: 2,
            text: "ENGLORAY delivered herbal packaging that feels trustworthy and premium. Customers now clearly understand our product quality.",
            author: "Malar Herbs",
            role: "Malarvizhi S",
            company: "Herbal products",
            icon: faLeaf
        },
        {
            id: 3,
            text: "ENGLORAY transformed our product packaging into a professional, market-ready design. The labels improved shelf visibility and customer confidence",
            author: "Amico",
            role: "Elango C",
            company: "food Products",
            icon: faBriefcase
        }
    ];

    // Filter case studies by category
    const filteredStudies = activeCategory === 'all' 
        ? caseStudies 
        : caseStudies.filter(study => study.category === activeCategory);

    // Determine which studies to display based on showAllStudies state
    const displayedStudies = showAllStudies 
        ? filteredStudies 
        : filteredStudies.slice(0, 3);

    // Reset showAllStudies when category changes
    useEffect(() => {
        setShowAllStudies(false);
        setExpandedCard(null);
    }, [activeCategory]);

    // Auto rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    const handleTestimonialClick = (index) => {
        setCurrentTestimonial(index);
    };

    const toggleCardExpand = (id) => {
        setExpandedCard(expandedCard === id ? null : id);
    };

    const toggleShowAllStudies = () => {
        setShowAllStudies(!showAllStudies);
    };

    const getCategoryLabel = (category) => {
        switch(category) {
            case 'UiUx': return 'UIUX';
            case 'Branding': return 'Branding';
            case 'Products': return 'Products';
            case 'App': return 'App';
            case 'Website': return 'Website';
            default: return category;
        }
    };

    const getCategoryColor = (category) => {
        switch(category) {
            case 'UiUx': return '#FF6B6B';
            case 'Branding': return '#4ECDC4';
            case 'Products': return '#45B7D1';
            case 'App': return '#8B0000';
            case 'Website': return '#3D0C41';
            default: return '#95A5A6';
        }
    };

    return (
        <div className="wcs-container">
            <TopNavBar/>
            <TwoLineNavbar/>
            {/* Hero Section - Blue Theme with Background Image */}
            <section className="wcs-hero-section">
                <div className="wcs-hero-bg"></div>
                <div className="wcs-hero-overlay"></div>
                <div className="wcs-hero-content">
                    <div className="wcs-hero-text">
                        <span className="wcs-hero-badge">Case Studies</span>
                        <h1 className="wcs-hero-title">
                            Featured Works
                        </h1>
                        <p className="wcs-hero-subtitle">
                            Explore our portfolio of successful projects across Digital Marketing, 
                            Full Stack Development, and AI Creative Intelligence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Success Stories Section - Light BG with Icon Floating Animation */}
            <section className="wcs-stories-section">
                <div className="wcs-stories-container">
                    <div className="wcs-section-header">
                        <h2 className="wcs-section-title-testimonials">Our Success Stories</h2>
                        <p className="wcs-section-subtitle-testimonials">
                            We transform ideas into reality through innovative solutions and cutting-edge 
                            technology. Each project tells a story of challenges overcome and goals achieved.
                        </p>
                    </div>
                    
                    {/* Stats Grid */}
                    <div className="wcs-stats-grid">
                        <div className="wcs-stat-item">
                            <h3>150+</h3>
                            <p>Projects Completed</p>
                        </div>
                        <div className="wcs-stat-item">
                            <h3>98%</h3>
                            <p>Client Satisfaction</p>
                        </div>
                        <div className="wcs-stat-item">
                            <h3>40+</h3>
                            <p>Industry Awards</p>
                        </div>
                        <div className="wcs-stat-item">
                            <h3>5 Years</h3>
                            <p>Excellence</p>
                        </div>
                    </div>
                    
                    {/* Process Steps with Floating Icons */}
                    <div className="wcs-process-steps">
                        <div className="wcs-process-step">
                            <div className="wcs-step-icon-container">
                                <div className="wcs-step-icon-bg"></div>
                                <div className="wcs-step-icon">
                                    <FontAwesomeIcon icon={faBullseye} />
                                </div>
                            </div>
                            <h4>Discovery</h4>
                            <p>Understanding client needs and project scope</p>
                        </div>
                        <div className="wcs-process-step">
                            <div className="wcs-step-icon-container">
                                <div className="wcs-step-icon-bg"></div>
                                <div className="wcs-step-icon">
                                    <FontAwesomeIcon icon={faChartLine} />
                                </div>
                            </div>
                            <h4>Strategy</h4>
                            <p>Planning the approach and technology stack</p>
                        </div>
                        <div className="wcs-process-step">
                            <div className="wcs-step-icon-container">
                                <div className="wcs-step-icon-bg"></div>
                                <div className="wcs-step-icon">
                                    <FontAwesomeIcon icon={faBolt} />
                                </div>
                            </div>
                            <h4>Execution</h4>
                            <p>Building with precision and attention to detail</p>
                        </div>
                        <div className="wcs-process-step">
                            <div className="wcs-step-icon-container">
                                <div className="wcs-step-icon-bg"></div>
                                <div className="wcs-step-icon">
                                    <FontAwesomeIcon icon={faRocket} />
                                </div>
                            </div>
                            <h4>Delivery</h4>
                            <p>Launching and providing ongoing support</p>
                        </div>
                    </div>
                </div>
                
                {/* Floating Icons Background */}
                <div className="wcs-floating-icons">
                    <div className="wcs-floating-icon">
                        <FontAwesomeIcon icon={faLightbulb} />
                    </div>
                    <div className="wcs-floating-icon">
                        <FontAwesomeIcon icon={faPalette} />
                    </div>
                    <div className="wcs-floating-icon">
                        <FontAwesomeIcon icon={faCode} />
                    </div>
                    <div className="wcs-floating-icon">
                        <FontAwesomeIcon icon={faMobileAlt} />
                    </div>
                    <div className="wcs-floating-icon">
                        <FontAwesomeIcon icon={faLaptop} />
                    </div>
                </div>
            </section>

            {/* Case Studies Section - Dark BG */}
            <section className="wcs-studies-section">
                <div className="wcs-studies-container">
                    <div className="wcs-section-header">
                        <h2 className="wcs-section-title">Featured Case Studies</h2>
                        <p className="wcs-section-subtitle">
                            Browse our portfolio of successful implementations across different domains
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="wcs-category-filter">
                        <button 
                            className={`wcs-category-btn ${activeCategory === 'all' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('all')}
                        >
                            All Projects
                        </button>
                        <button 
                            className={`wcs-category-btn ${activeCategory === 'UiUx' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('UiUx')}
                            style={{ '--category-color': getCategoryColor('UiUx') }}
                        >
                            <FontAwesomeIcon icon={faPalette} className="wcs-category-icon" />
                            UIUX
                        </button>
                        <button 
                            className={`wcs-category-btn ${activeCategory === 'Branding' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('Branding')}
                            style={{ '--category-color': getCategoryColor('Branding') }}
                        >
                            <FontAwesomeIcon icon={faCrown} className="wcs-category-icon" />
                            Branding
                        </button>
                        <button 
                            className={`wcs-category-btn ${activeCategory === 'Products' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('Products')}
                            style={{ '--category-color': getCategoryColor('Products') }}
                        >
                            <FontAwesomeIcon icon={faBriefcase} className="wcs-category-icon" />
                            Products
                        </button>
                         <button 
                            className={`wcs-category-btn ${activeCategory === 'App' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('App')}
                            style={{ '--category-color': getCategoryColor('App') }}
                        >
                            <FontAwesomeIcon icon={faMobileAlt} className="wcs-category-icon" />
                            App
                        </button> 
                        <button 
                            className={`wcs-category-btn ${activeCategory === 'Website' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('Website')}
                            style={{ '--category-color': getCategoryColor('Website') }}
                        >
                            <FontAwesomeIcon icon={faLaptop} className="wcs-category-icon" />
                            Website
                        </button>
                    </div>

                    {/* Case Studies List - Horizontal Cards */}
                    <div className="wcs-studies-list">
                        {displayedStudies.map((study, index) => (
                            <div 
                                className={`wcs-study-item ${expandedCard === study.id ? 'expanded' : ''}`}
                                key={study.id}
                                style={{ 
                                    '--delay': index,
                                    '--category-color': study.color
                                }}
                            >
                                <div className="wcs-study-main">
                                    <div className="wcs-study-image">
                                        <img src={study.image} alt={study.title} />
                                        <div className="wcs-study-image-placeholder">
                                            <FontAwesomeIcon icon={study.icon} />
                                        </div>
                                        <span className="wcs-study-category">
                                            {getCategoryLabel(study.category)}
                                        </span>
                                    </div>
                                    <div className="wcs-study-content">
                                        <div className="wcs-study-header">
                                            <h3 className="wcs-study-title">{study.title}</h3>
                                            <p className="wcs-study-subtitle">{study.subtitle}</p>
                                            <p className="wcs-study-client">Client: {study.client}</p>
                                        </div>
                                        
                                        <div className="wcs-study-metrics">
                                            <div className="wcs-study-metric">
                                                <span className="wcs-metric-label">
                                                    <FontAwesomeIcon icon={faCalendarCheck} className="wcs-metric-icon" />
                                                    Duration
                                                </span>
                                                <span className="wcs-metric-value">{study.duration}</span>
                                            </div>
                                            <div className="wcs-study-metric">
                                                <span className="wcs-metric-label">
                                                    <FontAwesomeIcon icon={faTrophy} className="wcs-metric-icon" />
                                                    Results
                                                </span>
                                                <span className="wcs-metric-value-highlighter">{study.results}</span>
                                            </div>
                                        </div>

                                        <p className="wcs-study-description">{study.description}</p>

                                        <button 
                                            className="wcs-read-more-btn"
                                            onClick={() => toggleCardExpand(study.id)}
                                        >
                                            {expandedCard === study.id ? 'Show Less' : 'Read More'}
                                            <span className="wcs-arrow">
                                                <FontAwesomeIcon icon={expandedCard === study.id ? faChevronUp : faChevronDown} />
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                {/* Expanded Details */}
                                {expandedCard === study.id && (
                                    <div className="wcs-study-details">
                                        <div className="wcs-details-content">
                                            <div className="wcs-detail-section">
                                                <h4>Challenges</h4>
                                                <ul className="wcs-detail-list">
                                                    {study.challenges.map((challenge, idx) => (
                                                        <li key={idx}>{challenge}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="wcs-detail-section">
                                                <h4>Solutions</h4>
                                                <ul className="wcs-detail-list">
                                                    {study.solutions.map((solution, idx) => (
                                                        <li key={idx}>{solution}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* View More/View Less Button */}
                    {filteredStudies.length > 3 && (
                        <div className="wcs-view-more-container">
                            <button 
                                className="wcs-view-more-btn"
                                onClick={toggleShowAllStudies}
                            >
                                {showAllStudies ? 'View Less' : `View More (${filteredStudies.length - 3} more)`}
                                <span className="wcs-view-more-arrow">
                                    <FontAwesomeIcon icon={showAllStudies ? faChevronUp : faChevronDown} />
                                </span>
                            </button>
                        </div>
                    )}

                    {/* Empty State */}
                    {filteredStudies.length === 0 && (
                        <div className="wcs-empty-state">
                            <h3>No projects found in this category</h3>
                            <p>Try selecting a different category to view our case studies</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Testimonials Section - Light BG */}
            <section className="wcs-testimonials-section">
                <div className="wcs-testimonials-container">
                    <div className="wcs-section-header">
                        <h2 className="wcs-section-title-testimonials">Client Testimonials</h2>
                        <p className="wcs-section-subtitle-testimonials">
                            Hear directly from our clients about their experience working with us
                        </p>
                    </div>

                    <div className="wcs-testimonials">
                        <div className="wcs-testimonial-track">
                            {testimonials.map((testimonial, index) => (
                                <div 
                                    className={`wcs-testimonial-slide ${index === currentTestimonial ? 'active' : ''}`}
                                    key={testimonial.id}
                                >
                                    <div className="wcs-testimonial-card">
                                        <div className="wcs-testimonial-content">
                                            <div className="wcs-testimonial-quote">
                                                <FontAwesomeIcon icon={faQuoteLeft} />
                                            </div>
                                            <p className="wcs-testimonial-text">{testimonial.text}</p>
                                            <div className="wcs-testimonial-author">
                                                <div className="wcs-author-icon">
                                                    <FontAwesomeIcon icon={testimonial.icon} />
                                                </div>
                                                <div className="wcs-author-info">
                                                    <h4>{testimonial.author}</h4>
                                                    <p>{testimonial.role}</p>
                                                    <span className="wcs-author-company">{testimonial.company}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="wcs-testimonial-nav">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`wcs-testimonial-dot ${index === currentTestimonial ? 'active' : ''}`}
                                    onClick={() => handleTestimonialClick(index)}
                                    aria-label={`View testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <MainPageSubFooter/>
            <BackToTop/> 
        </div>
    );
};

export default WorksCaseStudies;