import React, { useState, useEffect, useRef } from 'react';
import './DigitalMarketingService.css';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import WhiteFooter from '../../../Components/WhiteFooter/WhiteFooter';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import { Helmet } from 'react-helmet';

const DigitalMarketingService = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);
    const [visibleImages, setVisibleImages] = useState([]);
    const feedbackTrackRef = useRef(null);

    // Page data
    const pageData = {
        id: 5,
        title: "DIGITAL MARKETING",
        shortDescription: "Data-driven marketing strategies to boost your online presence",
        fullDescription: "Drive growth with targeted marketing strategies that reach the right audience at the right time.",
        features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "PPC Campaigns", "Analytics", "Email Marketing"],
        duration: "Ongoing",
        projects: "90+ completed",
        logo: "📈",
        route: "/digital-marketing"
    };

    const feedbacks = [
        {
            id: 1,
            text: "ENGLORAY delivered herbal packaging that feels trustworthy and premium. Customers now clearly understand our product quality.",
            author: "Malar Herbs",
        },
        {
            id: 2,
            text: "Packaging is well-structured and visually strong. ENGLORAY made our products look market-ready.",
            author: "Brandox",
        },
        {
            id: 3,
            text: "Clear, attractive, and professional packaging. Customers easily recognize and trust our products.",
            author: "SR Foods",
        }
    ];

    // Related digital marketing images - same size as main image
    const extraImages = [
        {
            id: 1,
            url: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Data Analytics Dashboard",
            description: "Real-time analytics and performance tracking for data-driven decisions"
        },
        {
            id: 2,
            url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Social Media Campaign",
            description: "Strategic social media marketing across multiple platforms"
        },
        {
            id: 3,
            url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Content Strategy Session",
            description: "Planning and creating compelling content for target audiences"
        }
    ];

    const internshipCourses = [
        {
            id: 1,
            name: "Digital Marketing Fundamentals",
            esc: "DMF101",
            duration: "8 Weeks",
            description: "Master the core principles of digital marketing and analytics",
            logo: "📊",
            features: ["SEO Basics", "Social Media Strategy", "Content Marketing", "Analytics Tools", "Conversion Optimization", "Email Marketing"]
        },
        {
            id: 2,
            name: "Advanced SEO & SEM",
            esc: "ASM201",
            duration: "10 Weeks",
            description: "Learn advanced search engine optimization and marketing techniques",
            logo: "🔍",
            features: ["Technical SEO", "Keyword Research", "PPC Campaigns", "Local SEO", "E-commerce SEO", "Analytics Reporting"]
        },
        {
            id: 3,
            name: "Social Media Marketing",
            esc: "SMM301",
            duration: "6 Weeks",
            description: "Create and execute winning social media campaigns",
            logo: "💬",
            features: ["Platform Strategy", "Content Creation", "Community Management", "Advertising", "Influencer Marketing", "Performance Analysis"]
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
            <title>Engloray Tech</title>
            <meta name="description" content= "Drive online growth with digital marketing: SEO, PPC, social media" />
            <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
            {/* <link rel="canonical" href="https://yourapp.com" /> */}
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Your App | Config" />
            <meta property="og:description" content="Lorem Ipsum" />
            {/* <meta property="og:url" content="https://yourapp.com" /> */}
            </Helmet>
        
        <div className="dima-page">
            <TwoLineNavbar/>
            
            {/* Hero Section */}
            <section className="dima-hero-section">
                <div className="dima-hero-bg"></div>
                <div className="dima-hero-overlay"></div>
                <div className="dima-container">
                    <div className="dima-hero-content">
                        <div className="dima-hero-content-inner">
                            <span className="dima-hero-badge">Digital Marketing</span>
                            <h1 className="dima-hero-title">{pageData.title}</h1>
                            <h2 className="dima-hero-subtitle">{pageData.shortDescription}</h2>
                            <p className="dima-hero-description">
                                We specialize in creating data-driven digital marketing strategies that deliver 
                                measurable results. From SEO and social media to PPC and content marketing, 
                                we help businesses grow their online presence and achieve their marketing goals.
                            </p>
                            <div className="dima-tech-stack">
                                {pageData.features.map((feature, index) => (
                                    <span key={index} className="dima-tech-item">{feature}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section - Updated with image expansion */}
            <section className={`dima-about-section ${isExpanded ? 'dima-image-scroll' : ''}`}>
                <div className="dima-container">
                    <div className="dima-about-content">
                        <div className="dima-about-text">
                            <h2 className="dima-about-title">Why Choose Our Digital Marketing Services?</h2>
                            <p className="dima-about-description">
                                We provide comprehensive digital marketing solutions that drive growth, 
                                increase brand awareness, and maximize ROI. Our data-driven approach 
                                ensures every campaign is optimized for maximum performance.
                            </p>
                            <p className="dima-about-description">
                                With over {pageData.projects} successful campaigns and ongoing optimization, 
                                we have the expertise to help businesses of all sizes achieve their 
                                digital marketing objectives.
                            </p>
                            
                            <button 
                                className={`dima-read-more-btn ${isExpanded ? 'expanded' : ''}`}
                                onClick={handleReadMore}
                            >
                                {isExpanded ? 'Read Less' : 'Read More'}
                                <span className="dima-arrow">{isExpanded ? '▲' : '▼'}</span>
                            </button>
                            
                            <div className={`dima-expanded-content ${isExpanded ? 'expanded' : ''}`}>
                                <div className="dima-expanded-paragraphs">
                                    <p>
                                        <strong>SEO Optimization:</strong> We implement comprehensive search engine 
                                        optimization strategies that improve your website's visibility, increase 
                                        organic traffic, and boost rankings on search engines like Google and Bing.
                                    </p>
                                    <p>
                                        <strong>Social Media Marketing:</strong> We develop and execute social media 
                                        strategies across all major platforms, creating engaging content that builds 
                                        brand loyalty and drives conversions.
                                    </p>
                                    <p>
                                        <strong>Content Strategy:</strong> We create compelling, SEO-optimized 
                                        content that attracts your target audience, establishes authority, and 
                                        guides users through the conversion funnel.
                                    </p>
                                    <p>
                                        <strong>PPC Campaigns:</strong> We manage pay-per-click advertising 
                                        campaigns on Google, Facebook, Instagram, and LinkedIn, ensuring maximum 
                                        ROI through precise targeting and continuous optimization.
                                    </p>
                                    <p>
                                        <strong>Email Marketing:</strong> We design and implement email marketing 
                                        campaigns that nurture leads, retain customers, and drive sales through 
                                        personalized communication.
                                    </p>
                                    <p>
                                        <strong>Analytics & Reporting:</strong> We provide detailed analytics and 
                                        regular performance reports, giving you clear insights into campaign 
                                        effectiveness and ROI.
                                    </p>
                                    <p>
                                        <strong>Conversion Rate Optimization:</strong> We analyze user behavior 
                                        and optimize website elements to increase conversions, improving the 
                                        effectiveness of your marketing funnel and maximizing return on ad spend.
                                    </p>

                                </div>
                            </div>
                        </div>
                        
                        <div className="dima-about-images-column">
                            {/* Main Image */}
                            <div className="dima-about-image-main">
                                <img 
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                                    alt="Digital Marketing Analytics Dashboard" 
                                />
                                <div className="dima-image-overlay">
                                    <h3>Data-Driven Marketing Experts</h3>
                                    <p>Our team of 40+ digital marketing specialists driving growth since 2016</p>
                                </div>
                            </div>
                            
                            {/* Extra Images Section - SAME SIZE AS MAIN IMAGE */}
                            <div className={`dima-extra-images-fill ${isExpanded ? 'show' : ''}`}>
                                {extraImages.map((image) => (
                                    <div 
                                        key={image.id} 
                                        className={`dima-extra-image-fill ${visibleImages.includes(image.id) ? 'visible' : ''}`}
                                    >
                                        <div className="dima-fill-image-wrapper">
                                            <img src={image.url} alt={image.title} />
                                            <div className="dima-fill-image-overlay">
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
            <section className="dima-courses-section">
                <div className="dima-container">
                    <div className="dima-section-header">
                        <h2 className="dima-section-title">Internship & Training Programs</h2>
                        <p className="dima-section-subtitle">
                            Comprehensive courses designed to train the next generation of digital marketing experts
                        </p>
                    </div>
                    
                    <div className="dima-courses-grid">
                        {internshipCourses.map((course) => (
                            <div className="dima-course-card" key={course.id}>
                                <div className="dima-course-header">
                                    <div className="dima-course-logo">{course.logo}</div>
                                    <h3 className="dima-course-title">{course.name}</h3>
                                    <p className="dima-course-desc">{course.description}</p>
                                </div>
                                
                                <div className="dima-course-features">
                                    <ul className="dima-features-list">
                                        {course.features.map((feature, index) => (
                                            <li key={index} className="dima-feature-item">{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div className="dima-course-details">
                                    <div className="dima-detail-item">
                                        <div className="dima-detail-label">Course Code</div>
                                        <div className="dima-detail-value">{course.esc}</div>
                                    </div>
                                    <div className="dima-detail-item">
                                        <div className="dima-detail-label">Duration</div>
                                        <div className="dima-detail-value">{course.duration}</div>
                                    </div>
                                    <div className="dima-detail-item">
                                        <div className="dima-detail-label">Projects</div>
                                        <div className="dima-detail-value">6+</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feedback Section */}
            <section className="dima-feedback-section">
                <div className="dima-container">
                    <div className="dima-section-header">
                        <h2 className="dima-section-title1">Client Success Stories</h2>
                        <p className="dima-section-subtitle1">
                            Hear what our clients have to say about our digital marketing services
                        </p>
                    </div>
                    
                    <div className="dima-feedback-slider">
                        <div className="dima-slider-arrows">
                            <button className="dima-slider-arrow" onClick={handlePrevSlide} aria-label="Previous testimonial">
                                ◀
                            </button>
                            <button className="dima-slider-arrow" onClick={handleNextSlide} aria-label="Next testimonial">
                                ▶
                            </button>
                        </div>
                        
                        <div className="dima-feedback-track" ref={feedbackTrackRef}>
                            {feedbacks.map((feedback) => (
                                <div className="dima-feedback-slide" key={feedback.id}>
                                    <div className="dima-feedback-card">
                                        <div className="dima-feedback-quote">"</div>
                                        <p className="dima-feedback-text">{feedback.text}</p>
                                        
                                        <div className="dima-feedback-author">
                                            <div className="dima-author-info">
                                                <h4>{feedback.author}</h4>
                                                <p>{feedback.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="dima-slider-nav">
                            {feedbacks.map((_, index) => (
                                <button
                                    key={index}
                                    className={`dima-slider-dot ${currentSlide === index ? 'active' : ''}`}
                                    onClick={() => handleDotClick(index)}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            <WhiteFooter/>
            <BackToTop/>
        </div>
        </div>
        </>
    );
};

export default DigitalMarketingService;
