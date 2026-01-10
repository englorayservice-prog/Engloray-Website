import React, { useState, useEffect, useRef } from 'react';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import Navbar from '../../../Components/Navbar/Navbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import './ErpSolutions.css';
import TSPFFooter from '../TechGroupSubPagefooter/TSPFFooter';
import { Helmet } from 'react-helmet';

const ErpSolutions = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);
    const [visibleImages, setVisibleImages] = useState([]);
    const feedbackTrackRef = useRef(null);

    // Page data
    const pageData = {
        id: 4,
        title: "ERP & CRM SOLUTIONS",
        shortDescription: "Integrated Business Systems for Maximum Efficiency",
        fullDescription: "Comprehensive ERP and CRM solutions that streamline operations, enhance customer relationships, and drive business growth.",
        features: ["ERP Implementation", "CRM Integration", "Business Automation", "Data Analytics"],
        duration: "6-12 weeks",
        projects: "75+ completed",
        logo: "📊"
    };

    const feedbacks = [
        {
            id: 1,
            text: "ENGLORAY transformed our business operations with their ERP implementation. The system streamlined our processes and improved efficiency by 40%.",
            author: "AMICO (2025)",
        },
        {
            id: 2,
            text: "The CRM integration perfectly unified our customer data. Sales tracking and customer service have never been smoother.",
            author: "VIA NATURE (2024)",
        },
        {
            id: 3,
            text: "The ERP system implementation was seamless and professional. It helped our organization optimize resource management significantly.",
            author: "MAAX LIFE (2024)",
        }
    ];

    // Related ERP & CRM images - same size as main image
    const extraImages = [
        {
            id: 1,
            url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Business Process Analysis",
            description: "Comprehensive analysis and mapping of business workflows for optimal system integration"
        },
        {
            id: 2,
            url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "System Integration",
            description: "Seamless integration of ERP and CRM systems for unified business operations"
        },
        {
            id: 3,
            url: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Data Analytics Dashboard",
            description: "Real-time business intelligence and reporting solutions for informed decision making"
        }
    ];

    const internshipCourses = [
        {
            id: 1,
            name: "ERP System Implementation",
            esc: "ERPI101",
            duration: "10 Weeks",
            description: "Learn end-to-end ERP implementation, configuration, and management",
            logo: "📊",
            features: ["ERP Fundamentals", "System Configuration", "Data Migration", "User Training", "Go-Live Support", "Post-Implementation"]
        },
        {
            id: 2,
            name: "CRM & Sales Automation",
            esc: "CRMS201",
            duration: "8 Weeks",
            description: "Master CRM setup, sales automation, and customer data management",
            logo: "🤝",
            features: ["CRM Concepts", "Lead Management", "Sales Pipeline", "Automation Rules", "Reporting", "Integration"]
        },
        {
            id: 3,
            name: "Business Process Analysis",
            esc: "BPA301",
            duration: "6 Weeks",
            description: "Analyze and optimize business processes for ERP/CRM integration",
            logo: "🔍",
            features: ["Process Mapping", "Gap Analysis", "Requirements Gathering", "Solution Design", "Change Management", "ROI Analysis"]
        }
    ];

    // Handle slide change
    useEffect(() => {
        if (feedbackTrackRef.current) {
            feedbackTrackRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    }, [currentSlide]);

    // Auto slide functionality
    useEffect(() => {
        let interval;
        if (autoSlide) {
            interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % feedbacks.length);
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [autoSlide, feedbacks.length]);

    // Handle image animation when expanded
    useEffect(() => {
        if (isExpanded) {
            // Show images one by one with delay
            const timeouts = [];
            extraImages.forEach((img, index) => {
                const timeout = setTimeout(() => {
                    setVisibleImages(prev => [...prev, img.id]);
                }, index * 300); // 300ms delay between each image
                timeouts.push(timeout);
            });
            
            return () => {
                timeouts.forEach(timeout => clearTimeout(timeout));
                setVisibleImages([]);
            };
        } else {
            // Clear all images when collapsed
            setVisibleImages([]);
        }
    }, [isExpanded]);

    const handleDotClick = (index) => {
        setCurrentSlide(index);
        setAutoSlide(false);
        setTimeout(() => setAutoSlide(true), 10000);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1));
        setAutoSlide(false);
        setTimeout(() => setAutoSlide(true), 10000);
    };

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % feedbacks.length);
        setAutoSlide(false);
        setTimeout(() => setAutoSlide(true), 10000);
    };

    const handleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
        <div>
            <Helmet>
            <title>Engloray</title>
            <meta name="description" content="Streamline business operations with integrated ERP solutions that connect finance etc." />
            <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
            {/* <link rel="canonical" href="https://yourapp.com" /> */}
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Your App | Config" />
            <meta property="og:description" content="Lorem Ipsum" />
            {/* <meta property="og:url" content="https://yourapp.com" /> */}
            </Helmet>
        
        <div className="erp-page" id='erpPage'>
            <TopNavBar/>
            <Navbar/>
            
            {/* Hero Section */}
            <section className="erp-hero-section">
                <div className="erp-hero-bg"></div>
                <div className="erp-hero-overlay"></div>
                <div className="erp-container">
                    <div className="erp-hero-content">
                        <div className="erp-hero-content-inner">
                            <span className="erp-hero-badge">ERP & CRM Solutions</span>
                            <h1 className="erp-hero-title">{pageData.title}</h1>
                            <h2 className="erp-hero-subtitle">{pageData.shortDescription}</h2>
                            <p className="erp-hero-description">
                                We implement comprehensive ERP and CRM solutions that unify business processes, 
                                enhance customer relationships, and drive operational efficiency across all departments.
                            </p>
                            <div className="erp-tech-stack">
                                {pageData.features.map((feature, index) => (
                                    <span key={index} className="erp-tech-item">{feature}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section - Updated with image expansion */}
            <section className={`erp-about-section ${isExpanded ? 'erp-image-scroll' : ''}`}>
                <div className="erp-container">
                    <div className="erp-about-content">
                        <div className="erp-about-text">
                            <h2 className="erp-about-title">Why Choose Our ERP & CRM Solutions?</h2>
                            <p className="erp-about-description">
                                We provide end-to-end ERP and CRM implementation services, from needs 
                                assessment to deployment and ongoing support. Our solutions are tailored 
                                to streamline your business operations through modern technology platforms.
                            </p>
                            <p className="erp-about-description">
                                With over {pageData.projects} projects completed and an average implementation 
                                timeline of {pageData.duration}, we have the expertise to handle projects 
                                of any scale and complexity.
                            </p>
                            
                            <button 
                                className={`erp-read-more-btn ${isExpanded ? 'expanded' : ''}`}
                                onClick={handleReadMore}
                            >
                                {isExpanded ? 'Read Less' : 'Read More'}
                                <span className="erp-arrow">{isExpanded ? '▲' : '▼'}</span>
                            </button>
                            
                            <div className={`erp-expanded-content ${isExpanded ? 'expanded' : ''}`}>
                                <div className="erp-expanded-paragraphs">
                                    <p>
                                        <strong>ERP Implementation:</strong> We design and implement 
                                        Enterprise Resource Planning systems that integrate all your 
                                        business functions including finance, HR, manufacturing, supply 
                                        chain, services, and procurement into one complete system.
                                    </p>
                                    <p>
                                        <strong>CRM System Setup:</strong> We deploy Customer Relationship 
                                        Management systems that help you manage interactions with current 
                                        and potential customers. Our solutions include sales automation, 
                                        customer service, marketing automation, and analytics.
                                    </p>
                                    <p>
                                        <strong>Business Process Automation:</strong> We identify repetitive 
                                        tasks and processes that can be automated to increase efficiency, 
                                        reduce errors, and free up your team to focus on strategic activities.
                                    </p>
                                    <p>
                                        <strong>Data Analytics & Reporting:</strong> We implement powerful 
                                        analytics tools that transform your business data into actionable 
                                        insights, helping you make informed decisions and predict future trends.
                                    </p>
                                    <p>
                                        <strong>Cloud Migration & Management:</strong> We help businesses 
                                        migrate their ERP and CRM systems to the cloud, providing secure, 
                                        scalable solutions that offer flexibility and cost-efficiency while 
                                        ensuring data security and compliance.
                                    </p>
                                    <p>
                                        <strong>Custom Development & Integration:</strong> We develop custom 
                                        modules and integrations that extend the functionality of your ERP/CRM 
                                        systems, ensuring they work seamlessly with your existing software 
                                        ecosystem and meet unique business requirements.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="erp-about-images-column">
                            {/* Main Image */}
                            <div className="erp-about-image-main">
                                <img 
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    alt="ERP CRM Dashboard Analytics" 
                                />
                                <div className="erp-image-overlay">
                                    <h3>Integrated Business Solutions</h3>
                                    <p>Our team of 30+ ERP/CRM specialists delivering transformation</p>
                                </div>
                            </div>
                            
                            {/* Extra Images Section - SAME SIZE AS MAIN IMAGE */}
                            <div className={`erp-extra-images-fill ${isExpanded ? 'show' : ''}`}>
                                {extraImages.map((image) => (
                                    <div 
                                        key={image.id} 
                                        className={`erp-extra-image-fill ${visibleImages.includes(image.id) ? 'visible' : ''}`}
                                    >
                                        <div className="erp-fill-image-wrapper">
                                            <img src={image.url} alt={image.title} />
                                            <div className="erp-fill-image-overlay">
                                                <h4>{image.title}</h4>
                                                <p>{image.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Internship Courses Section */}
            <section className="erp-courses-section">
                <div className="erp-container">
                    <div className="erp-section-header">
                        <h2 className="erp-section-title">Internship & Training Programs</h2>
                        <p className="erp-section-subtitle">
                            Comprehensive courses designed to train the next generation of ERP & CRM specialists
                        </p>
                    </div>
                    
                    <div className="erp-courses-grid">
                        {internshipCourses.map((course) => (
                            <div className="erp-course-card" key={course.id}>
                                <div className="erp-course-header">
                                    <div className="erp-course-logo">{course.logo}</div>
                                    <h3 className="erp-course-title">{course.name}</h3>
                                    <p className="erp-course-desc">{course.description}</p>
                                </div>
                                
                                <div className="erp-course-features">
                                    <ul className="erp-features-list">
                                        {course.features.map((feature, index) => (
                                            <li key={index} className="erp-feature-item">{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div className="erp-course-details">
                                    <div className="erp-detail-item">
                                        <div className="erp-detail-label">Course Code</div>
                                        <div className="erp-detail-value">{course.esc}</div>
                                    </div>
                                    <div className="erp-detail-item">
                                        <div className="erp-detail-label">Duration</div>
                                        <div className="erp-detail-value">{course.duration}</div>
                                    </div>
                                    <div className="erp-detail-item">
                                        <div className="erp-detail-label">Projects</div>
                                        <div className="erp-detail-value">5+</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feedback Section */}
            <section className="erp-feedback-section">
                <div className="erp-container">
                    <div className="erp-section-header">
                        <h2 className="erp-section-title1">Client Success Stories</h2>
                        <p className="erp-section-subtitle1">
                            Hear what our clients have to say about our ERP & CRM implementation services
                        </p>
                    </div>
                    
                    <div className="erp-feedback-slider">
                        <div className="erp-slider-arrows">
                            <button className="erp-slider-arrow" onClick={handlePrevSlide} aria-label="Previous testimonial">
                                ◀
                            </button>
                            <button className="erp-slider-arrow" onClick={handleNextSlide} aria-label="Next testimonial">
                                ▶
                            </button>
                        </div>
                        
                        <div className="erp-feedback-track" ref={feedbackTrackRef}>
                            {feedbacks.map((feedback) => (
                                <div className="erp-feedback-slide" key={feedback.id}>
                                    <div className="erp-feedback-card">
                                        <div className="erp-feedback-quote">"</div>
                                        <p className="erp-feedback-text">{feedback.text}</p>
                                        
                                        <div className="erp-feedback-author">
                                            <div className="erp-author-info">
                                                <h4>{feedback.author}</h4>
                                                <p>{feedback.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="erp-slider-nav">
                            {feedbacks.map((_, index) => (
                                <button
                                    key={index}
                                    className={`erp-slider-dot ${currentSlide === index ? 'active' : ''}`}
                                    onClick={() => handleDotClick(index)}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            <TSPFFooter/>
            <BackToTop/>
        </div>
        </div>
        </>
    );
};

export default ErpSolutions;