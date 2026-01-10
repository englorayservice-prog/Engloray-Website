import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb,
  faPalette,
  faCogs,
  faRocket,
  faChartLine,
  faBrush,
  faCode,
  faMobileAlt,
  faLaptop,
  faCrown,
  faGem,
  faBriefcase,
  faFlask,
  faPlane,
  faStethoscope,
  faDumbbell,
  faLeaf,
  faKissWinkHeart, // Replaced faLipstick with faKissWinkHeart
  faGraduationCap,
  faQuoteLeft,
  faChevronDown,
  faChevronUp,
  faCalendarCheck,
  faTrophy,
  faUsers,
  faSmile // Alternative if needed
} from '@fortawesome/free-solid-svg-icons';

import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';

//uiux
import clientLogoOne from '../../../assets/case study images/uiux/Divya makeovers.jpg';
import clientLogoTwo  from '../../../assets/case study images/uiux/gym life.png';
//branding
import clientLogoThree  from '../../../assets/case study images/branding/via nature.png';
import clientLogoFour  from '../../../assets/case study images/branding/say.jpg';
//products
import clientLogoFive  from '../../../assets/case study images/products/maax life.png';
import clientLogoSix  from '../../../assets/case study images/products/studio makeup.png';
//websites
import clientLogoSeven  from '../../../assets/case study images/Application/aara.png';
import clientLogoEight  from '../../../assets/case study images/websites/mitt travels.jpg';
//applications
import clientLogoNine  from '../../../assets/case study images/Application/pavizham.jpg';
import clientLogoTen  from '../../../assets/case study images/Application/orthopetic clinic.png';

import './WorksClientProjects.css';
import MainPageSubFooter from '../MainPageSubFooter/MainPageSubFooter';

const WorksClientProjects = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [expandedCard, setExpandedCard] = useState(null);
    const [showAllProjects, setShowAllProjects] = useState(false);

    // Client projects data
    const clientProjects = [
        {
            id: 1,
            title: "Divya Makeovers",
            subtitle: "Modernizing Makeovers with Designs",
            category: "UiUx",
            client: "Divya Makeovers",
            duration: "1 Months",
            results: "+40% Digital actions",
            description: "Built a Ui/Ux design for the makeovers to outlast their needs.",
            image: clientLogoOne,
            icon: faBrush,
            color: "#FF6B6B",
            challenges: [
                "Poor user flow for service inquiry and booking ",
                "Users found it difficult to navigate the website ",
                "No clear visual hierarchy "
            ],
            solutions: [
                "Designed a clean and intuitive UI layout ",
                "Structured user journey for easy service discovery", 
                "Improved visual hierarchy for better user focus "
            ]
        },
        {
            id: 2,
            title: "Via Nature",
            subtitle: "Nature inspired visual system with organic color palette",
            category: "Branding",
            client: "Via Nature",
            duration: "1 Months",
            results: "+30% Faster Processing",
            description: "Clean and minimal label designs using the Label Designing and UI designing.",
            image: clientLogoThree,
            icon: faLeaf,
            color: "#4ECDC4",
            challenges: [
                "Packaging did not reflect natural and organic values ",
                "Labels lacked clarity and authenticity "
            ],
            solutions: [
                "Designed clean, eco-inspired product layouts ",
                "Built earthy label designs aligned with organic branding ",
                "Improved content hierarchy for ingredient and benefit clarity "
            ]
        },
        {
            id: 3,
            title: "Maxx Life",
            subtitle: "About the health and wellness of the people",
            category: "Products",
            client: "Maxx Life",
            duration: "1 Months",
            results: "+5000 Active Users",
            description: "Interactive wellness plaftorm with application and progress tracking.",
            image: clientLogoFive,
            icon: faBriefcase,
            color: "#FFD166",
            challenges: [
                "Labels lacked premium feel", 
                "Product presentation did not match quality"
            ],
            solutions: [
                "Designed clean and premium label layouts", 
                "Improved typography and spacing for clarity", 
                "Strengthened visual hierarchy "
            ]
        },
        {
            id: 4,
            title: "Gym Life",
            subtitle: "Optimizing the Fitness World",
            category: "UiUx",
            client: "Gym Life",
            duration: "2 Months",
            results: "+35% Faster Usage",
            description: "Regularing the routine the of the Gym freaks using the Featured UI.",
            image: clientLogoTwo,
            icon: faDumbbell,
            color: "#FF6B6B",
            challenges: [
                "No website to showcase gym facilities and programs", 
                "Difficulty converting visitors into membership inquiries" 
            ],
            solutions: [
                "Designed a bold, fitness-focused website", 
                "Highlighted programs, trainers, and facilities clearly", 
                "Created strong call-to-action sections for inquiries",
            ]
        },
        {
            id: 5,
            title: "Say Bridals",
            subtitle: "Modern Bridals discovery",
            category: "Branding",
            client: "Say Bridals",
            duration: "1.5 Months",
            results: "+300% Lead Increase",
            description: "Getting the bridals through the easy searching and with fixed SEO's.",
            image: clientLogoFour,
            icon: faGem,
            color: "#4ECDC4",
            challenges: [
                "Needed an elegant online presence for bridal services", 
                "Website had to emotionally connect with customers "
            ],
            solutions: [
                "Designed a graceful and visually rich bridal website ",
                "Focused on aesthetics, portfolio display, and inquiry flow ",
                "Ensured smooth mobile experience "
            ]
        },
        {
            id: 6,
            title: "Studio Makeup",
            subtitle: "Clean and elegant design for makeup studio",
            category: "Products",
            client: "Studio Makeup",
            duration: "1 Months",
            results: "+60% Online Orders",
            description: "Enhanced brand image with premium product appearence.",
            image: clientLogoSix,
            icon: faKissWinkHeart, // Changed from faLipstick
            color: "#FFD166",
            challenges: [
                "Needed premium cosmetic packaging", 
                "Brand identity was not reflected clearly on products "
            ],
            solutions: [
                "Designed modern and premium cosmetic labels ",
                "Aligned product visuals with brand tone"
            ]
        },
        {
            id: 7,
            title: "Aara Labs",
            subtitle: "creative Lab application Designs",
            category: "Website",
            client: "Aara Labs",
            duration: "2.5 Months",
            results: "+300% Productivity",
            description: "Created the Productive application for the medical testing lab .",
            image: clientLogoSeven,
            icon: faFlask,
            color: "#DC143C",
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
            id: 8,
            title: "Mitt Travels",
            subtitle: "Inspired visual design with natural color palette",
            category: "Website",
            client: "Mitt Travels",
            duration: "1 Months",
            results: "+30% Faster Processing",
            description: "Clean and minimal web designs using the web Designing and UI designing.",
            image: clientLogoEight,
            icon: faPlane,
            color: "#DC143C",
            challenges: [
                "No online presence to showcase travel services ",
                "Needed a simple inquiry-driven website "
            ],
            solutions: [
                "Designed a clean and informative travel website ",
                "Highlighted services, destinations, and contact flow ",
                "Simple and attractive layout"
            ]
        },
        {
            id: 9,
            title: "Pavizham Jewellery",
            subtitle: "Modernizing online shopping experience",
            category: "App",
            client: "Pavizham Jewellers",
            duration: "1.5 Months",
            results: "+180% Sales Increase",
            description: "Complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
            image: clientLogoNine,
            icon: faCrown,
            color: "#6A0DAD",
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
            id: 10,
            title: "Orthopedic Clinic",
            subtitle: "Multi-channel Clinic app",
            category: "App",
            client: "Orthopedic clinic",
            duration: "2 Months",
            results: "+150% Lead Patients",
            description: "Comprehensive enterprise App across social media, search, and email channels.",
            image: clientLogoTen,
            icon: faStethoscope,
            color: "#6A0DAD",
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

    // Client testimonials
    const clientTestimonials = [
        {
            id: 1,
            text: "The UI/UX design made our website simple, elegant, and easy for customers to book services. User experience improved a lot.",
            author: "Divya Makeover",
            role: "Bridal makeups online",
            company: "Bridals designs",
            icon: faBrush
        },
        {
            id: 2,
            text: "The product and label designs perfectly reflect our natural and organic values. Clean, clear, and very appealing.",
            author: "Via Nature",
            role: "Branding nature projects",
            company: "Nature products",
            icon: faLeaf
        },
        {
            id: 3,
            text: "The product and label designs look premium and modern. It enhanced our brand image instantly.",
            author: "Studio makeup",
            role: "Bridal makeups",
            company: "Bridal makeup",
            icon: faKissWinkHeart // Changed from faLipstick
        }
    ];

    // Filter projects by category
    const filteredProjects = activeCategory === 'all' 
        ? clientProjects 
        : clientProjects.filter(project => project.category === activeCategory);

    // Determine which projects to display based on showAllProjects state
    const displayedProjects = showAllProjects 
        ? filteredProjects 
        : filteredProjects.slice(0, 3);

    // Reset showAllProjects when category changes
    useEffect(() => {
        setShowAllProjects(false);
        setExpandedCard(null);
    }, [activeCategory]);

    // Auto rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % clientTestimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [clientTestimonials.length]);

    const handleTestimonialClick = (index) => {
        setCurrentTestimonial(index);
    };

    const toggleCardExpand = (id) => {
        setExpandedCard(expandedCard === id ? null : id);
    };

    const toggleShowAllProjects = () => {
        setShowAllProjects(!showAllProjects);
    };

    const getCategoryLabel = (category) => {
        switch(category) {
            case 'UiUx': return 'UiUx';
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
            case 'Products': return '#FFD166';
            case 'App': return '#6A0DAD';
            case 'Website': return '#DC143C';
            default: return '#95A5A6';
        }
    };

    return (
        <div className="wcp-container">

            { <TopNavBar/> }
            { <TwoLineNavbar/> }
            
            {/* Hero Section - Blue Theme with Background Image */}
            <section className="wcp-hero-section">
                <div className="wcp-hero-bg"></div>
                <div className="wcp-hero-overlay"></div>
                <div className="wcp-hero-content">
                    <div className="wcp-hero-text">
                        <span className="wcp-hero-badge">Client Projects</span>
                        <h1 className="wcp-hero-title">
                            Our Client Success Stories
                        </h1>
                        <p className="wcp-hero-subtitle">
                            Discover how we've partnered with businesses across industries to deliver 
                            innovative solutions that drive growth and transformation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Success Stories Section - Light BG with Icon Floating Animation */}
            <section className="wcp-stories-section">
                <div className="wcp-stories-container">
                    <div className="wcp-section-header">
                        <h2 className="wcp-section-title-testimonials">Our Project Methodology</h2>
                        <p className="wcp-section-subtitle-testimonials">
                            We follow a proven methodology that ensures every project delivers maximum value 
                            while maintaining the highest standards of quality and innovation.
                        </p>
                    </div>
                    
                    {/* Stats Grid */}
                    <div className="wcp-stats-grid">
                        <div className="wcp-stat-item">
                            <h3>19+</h3>
                            <p>Projects Delivered</p>
                        </div>
                        <div className="wcp-stat-item">
                            <h3>99%</h3>
                            <p>On-Time Delivery</p>
                        </div>
                        <div className="wcp-stat-item">
                            <h3>50+</h3>
                            <p>Industries Served</p>
                        </div>
                        <div className="wcp-stat-item">
                            <h3>100%</h3>
                            <p>Client Retention</p>
                        </div>
                    </div>
                    
                    {/* Process Steps with Floating Icons */}
                    <div className="wcp-process-steps">
                        <div className="wcp-process-step">
                            <div className="wcp-step-icon-container">
                                <div className="wcp-step-icon-bg"></div>
                                <div className="wcp-step-icon">
                                    <FontAwesomeIcon icon={faLightbulb} />
                                </div>
                            </div>
                            <h4>Discovery & Planning</h4>
                            <p>Understanding client needs and defining project scope</p>
                        </div>
                        <div className="wcp-process-step">
                            <div className="wcp-step-icon-container">
                                <div className="wcp-step-icon-bg"></div>
                                <div className="wcp-step-icon">
                                    <FontAwesomeIcon icon={faPalette} />
                                </div>
                            </div>
                            <h4>Design & Prototyping</h4>
                            <p>Creating intuitive designs and interactive prototypes</p>
                        </div>
                        <div className="wcp-process-step">
                            <div className="wcp-step-icon-container">
                                <div className="wcp-step-icon-bg"></div>
                                <div className="wcp-step-icon">
                                    <FontAwesomeIcon icon={faCogs} />
                                </div>
                            </div>
                            <h4>Development & Testing</h4>
                            <p>Building robust solutions with comprehensive testing</p>
                        </div>
                        <div className="wcp-process-step">
                            <div className="wcp-step-icon-container">
                                <div className="wcp-step-icon-bg"></div>
                                <div className="wcp-step-icon">
                                    <FontAwesomeIcon icon={faRocket} />
                                </div>
                            </div>
                            <h4>Deployment & Support</h4>
                            <p>Launching projects and providing ongoing support</p>
                        </div>
                    </div>
                </div>
                
                {/* Floating Icons Background */}
                <div className="wcp-floating-icons">
                    <div className="wcp-floating-icon">
                        <FontAwesomeIcon icon={faChartLine} />
                    </div>
                    <div className="wcp-floating-icon">
                        <FontAwesomeIcon icon={faBrush} />
                    </div>
                    <div className="wcp-floating-icon">
                        <FontAwesomeIcon icon={faCode} />
                    </div>
                    <div className="wcp-floating-icon">
                        <FontAwesomeIcon icon={faMobileAlt} />
                    </div>
                    <div className="wcp-floating-icon">
                        <FontAwesomeIcon icon={faLaptop} />
                    </div>
                </div>
            </section>

            {/* Projects Section - Dark BG */}
            <section className="wcp-studies-section">
                <div className="wcp-studies-container">
                    <div className="wcp-section-header">
                        <h2 className="wcp-section-title">Featured Client Projects</h2>
                        <p className="wcp-section-subtitle">
                            Explore our diverse portfolio of successful projects across various industries
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="wcp-category-filter">
                        <button 
                            className={`wcp-category-btn ${activeCategory === 'all' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('all')}
                        >
                            All Projects
                        </button>
                        <button 
                            className={`wcp-category-btn ${activeCategory === 'UiUx' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('UiUx')}
                            style={{ '--category-color': getCategoryColor('UiUx') }}
                        >
                            <FontAwesomeIcon icon={faPalette} className="wcp-category-icon" />
                            UI/UX
                        </button>
                        <button 
                            className={`wcp-category-btn ${activeCategory === 'Branding' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('Branding')}
                            style={{ '--category-color': getCategoryColor('Branding') }}
                        >
                            <FontAwesomeIcon icon={faCrown} className="wcp-category-icon" />
                            Branding
                        </button>
                        <button 
                            className={`wcp-category-btn ${activeCategory === 'Products' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('Products')}
                            style={{ '--category-color': getCategoryColor('Products') }}
                        >
                            <FontAwesomeIcon icon={faBriefcase} className="wcp-category-icon" />
                            Products
                        </button>
                         <button 
                            className={`wcp-category-btn ${activeCategory === 'App' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('App')}
                            style={{ '--category-color': getCategoryColor('App') }}
                        >
                            <FontAwesomeIcon icon={faMobileAlt} className="wcp-category-icon" />
                            App
                        </button> 
                        <button 
                            className={`wcp-category-btn ${activeCategory === 'Website' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('Website')}
                            style={{ '--category-color': getCategoryColor('Website') }}
                        >
                            <FontAwesomeIcon icon={faLaptop} className="wcp-category-icon" />
                            Website
                        </button>
                    </div>

                    {/* Projects List - Horizontal Cards */}
                    <div className="wcp-studies-list">
                        {displayedProjects.map((project, index) => (
                            <div 
                                className={`wcp-study-item ${expandedCard === project.id ? 'expanded' : ''}`}
                                key={project.id}
                                style={{ 
                                    '--delay': index,
                                    '--category-color': project.color
                                }}
                            >
                                <div className="wcp-study-main">
                                    <div className="wcp-study-image">
                                        {/* Image placeholder - original image import is commented */}
                                        <img src={project.image} alt={project.title} />
                                        <div className="wcp-study-image-placeholder">
                                            <FontAwesomeIcon icon={project.icon} />
                                        </div>
                                        <span className="wcp-study-category">
                                            {getCategoryLabel(project.category)}
                                        </span>
                                    </div>
                                    <div className="wcp-study-content">
                                        <div className="wcp-study-header">
                                            <h3 className="wcp-study-title">{project.title}</h3>
                                            <p className="wcp-study-subtitle">{project.subtitle}</p>
                                            <p className="wcp-study-client">Client: {project.client}</p>
                                        </div>
                                        
                                        <div className="wcp-study-metrics">
                                            <div className="wcp-study-metric">
                                                <span className="wcp-metric-label">
                                                    <FontAwesomeIcon icon={faCalendarCheck} className="wcp-metric-icon" />
                                                    Duration
                                                </span>
                                                <span className="wcp-metric-value">{project.duration}</span>
                                            </div>
                                            <div className="wcp-study-metric">
                                                <span className="wcp-metric-label">
                                                    <FontAwesomeIcon icon={faTrophy} className="wcp-metric-icon" />
                                                    Results
                                                </span>
                                                <span className="wcp-metric-value-highlighter">{project.results}</span>
                                            </div>
                                        </div>

                                        <p className="wcp-study-description">{project.description}</p>

                                        <button 
                                            className="wcp-read-more-btn"
                                            onClick={() => toggleCardExpand(project.id)}
                                        >
                                            {expandedCard === project.id ? 'Show Less' : 'Read More'}
                                            <span className="wcp-arrow">
                                                <FontAwesomeIcon icon={expandedCard === project.id ? faChevronUp : faChevronDown} />
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                {/* Expanded Details */}
                                {expandedCard === project.id && (
                                    <div className="wcp-study-details">
                                        <div className="wcp-details-content">
                                            <div className="wcp-detail-section">
                                                <h4>Challenges</h4>
                                                <ul className="wcp-detail-list">
                                                    {project.challenges.map((challenge, idx) => (
                                                        <li key={idx}>{challenge}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="wcp-detail-section">
                                                <h4>Solutions</h4>
                                                <ul className="wcp-detail-list">
                                                    {project.solutions.map((solution, idx) => (
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
                    {filteredProjects.length > 3 && (
                        <div className="wcp-view-more-container">
                            <button 
                                className="wcp-view-more-btn"
                                onClick={toggleShowAllProjects}
                            >
                                {showAllProjects ? 'View Less' : `View More (${filteredProjects.length - 3} more)`}
                                <span className="wcp-view-more-arrow">
                                    <FontAwesomeIcon icon={showAllProjects ? faChevronUp : faChevronDown} />
                                </span>
                            </button>
                        </div>
                    )}

                    {/* Empty State */}
                    {filteredProjects.length === 0 && (
                        <div className="wcp-empty-state">
                            <h3>No projects found in this category</h3>
                            <p>Try selecting a different category to view client projects</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Testimonials Section - Light BG */}
            <section className="wcp-testimonials-section">
                <div className="wcp-testimonials-container">
                    <div className="wcp-section-header">
                        <h2 className="wcp-section-title-testimonials">Client Testimonials</h2>
                        <p className="wcp-section-subtitle-testimonials">
                            Hear what our clients say about working with us
                        </p>
                    </div>

                    <div className="wcp-testimonials">
                        <div className="wcp-testimonial-track">
                            {clientTestimonials.map((testimonial, index) => (
                                <div 
                                    className={`wcp-testimonial-slide ${index === currentTestimonial ? 'active' : ''}`}
                                    key={testimonial.id}
                                >
                                    <div className="wcp-testimonial-card">
                                        <div className="wcp-testimonial-content">
                                            <div className="wcp-testimonial-quote">
                                                <FontAwesomeIcon icon={faQuoteLeft} />
                                            </div>
                                            <p className="wcp-testimonial-text">{testimonial.text}</p>
                                            <div className="wcp-testimonial-author">
                                                <div className="wcp-author-icon">
                                                    <FontAwesomeIcon icon={testimonial.icon} />
                                                </div>
                                                <div className="wcp-author-info">
                                                    <h4>{testimonial.author}</h4>
                                                    <p>{testimonial.role}</p>
                                                    <span className="wcp-author-company">{testimonial.company}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="wcp-testimonial-nav">
                            {clientTestimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`wcp-testimonial-dot ${index === currentTestimonial ? 'active' : ''}`}
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

export default WorksClientProjects;