import React, { useState, useEffect, useRef } from 'react';
import brandingIamgeOne from '../../../assets/case study images/branding/malar.jpg';
import brandingIamgeTwo from '../../../assets/case study images/branding/ecec.png';
import brandingIamgeThree from '../../../assets/case study images/branding/Nestoria.jpg';
import brandingIamgeFour from '../../../assets/case study images/branding/isha bites.png';
import './BrandingAndDesigning.css';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import MainPageSubFooter from '../MainPageSubFooter/MainPageSubFooter';
import { Helmet } from 'react-helmet';

const BrandingDesigning = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);
    const [visibleImages, setVisibleImages] = useState([]);
    const feedbackTrackRef = useRef(null);

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
        
        if (window.location.hash) {
            const id = window.location.hash.replace('#', '');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView();
                }
            }, 0);
        }
    }, []);

    const feedbacks = [
        {
            id: 1,
            text: "ENGLORAY delivered herbal packaging that feels trustworthy and premium. Customers now clearly understand our product quality.",
            author: "Malar Herbs",
            role: "Herbal Products",
            initial: "M"
        },
        {
            id: 2,
            text: "Digital ad campaigns helped us generate quality admission inquiries. The creatives and messaging worked very well.",
            author: "ECEC Skill School",
            role: "Skill School",
            initial: "E"
        },
        {
            id: 3,
            text: "The promotional creatives were attractive and perfectly suited our food brand. Customer engagement improved noticeably.",
            author: "ISHA Bites",
            role: "Food And Beverage",
            initial: "I"
        }
    ];

    const projects = [
        {
            id: 1,
            title: "Malar herbal products",
            description: "Complete brand identity redesign for a tech startup, including logo, color palette, typography, and brand guidelines.",
            category: "Herbal product",
            image: brandingIamgeOne,
            stats: {
                duration: "5 Weeks",
                satisfaction: "98%"
            }
        },
        {
            id: 2,
            title: "Nestoria",
            description: "End-to-end branding for a luxury brand, from initial concept to store implementation and digital presence.",
            category: "Branding",
            image: brandingIamgeThree,
            stats: {
                duration: "6 Weeks",
                satisfaction: "100%"
            }
        },
        {
            id: 3,
            title: "ISHA Bites",
            description: "Identity development for a beverage provider, establishing trust and professionalism in the food sector.",
            category: "food and beverage",
            image: brandingIamgeFour,
            stats: {
                duration: "5 Weeks",
                satisfaction: "97%"
            }
        }
    ];

    // Related branding & designing images - same size as main image
    const extraImages = [
        {
            id: 1,
            url: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Brand Strategy Workshop",
            description: "Collaborative brainstorming sessions to define brand vision and positioning"
        },
        {
            id: 2,
            url: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Design Process",
            description: "Sketching and digital design creation for comprehensive brand identity"
        },
        {
            id: 3,
            url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Creative Studio",
            description: "Our design team working on innovative branding projects"
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
            <meta name="description" content="Design tech brands for the digital, scalable systems with story telling ui" />
            <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
            {/* <link rel="canonical" href="https://yourapp.com" /> */}
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Your App | Config" />
            <meta property="og:description" content="Lorem Ipsum" />
            {/* <meta property="og:url" content="https://yourapp.com" /> */}
            </Helmet>

        <div className="bd-page" id='brandingPage'>
            <TopNavBar/>
            <TwoLineNavbar/>
            {/* Hero Section */}
            <section className="bd-hero-section">
                <div className="bd-hero-bg"></div>
                <div className="bd-container">
                    <div className="bd-hero-content">
                        <span className="bd-hero-badge">Branding & Designing</span>
                        <h1 className="bd-hero-title">Crafting Unforgettable Brand Experiences</h1>
                        <h2 className="bd-hero-subtitle">Where Strategy Meets Creativity</h2>
                        <p className="bd-hero-description">
                            We transform businesses into memorable brands through strategic design thinking, 
                            compelling visual identities, and cohesive brand ecosystems that resonate with 
                            your audience and drive meaningful connections.
                        </p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className={`bd-about-section ${isExpanded ? 'bd-image-scroll' : ''}`}>
                <div className="bd-container">
                    <div className="bd-about-content">
                        <div className="bd-about-text">
                            <h2 className="bd-about-title">About Our Approach</h2>
                            <p className="bd-about-description">
                                At ENGLORAY, we believe that great branding is more than just a logo - 
                                it's the complete story of your business. Our design philosophy combines 
                                strategic thinking with creative excellence to build brands that stand 
                                the test of time.
                            </p>
                            <ul className="bd-about-points">
                                <li className="bd-about-point">Strategic brand positioning and market analysis</li>
                                <li className="bd-about-point">Comprehensive visual identity systems</li>
                                <li className="bd-about-point">User-centered design thinking approach</li>
                                <li className="bd-about-point">Cross-platform brand consistency</li>
                                <li className="bd-about-point">Data-driven design decisions</li>
                            </ul>
                            
                            <button 
                                className={`bd-read-more-btn ${isExpanded ? 'expanded' : ''}`}
                                onClick={handleReadMore}
                            >
                                {isExpanded ? 'Read Less' : 'Read More'}
                                <span className="bd-arrow">↓</span>
                            </button>

                            <div className={`bd-expanded-content ${isExpanded ? 'expanded' : ''}`}>
                                <div className="bd-expanded-paragraphs">
                                    <p>
                                        <strong>Research & Discovery:</strong> We dive deep into your market, competitors, 
                                        and audience to understand the landscape and identify opportunities for differentiation 
                                        and growth. Our comprehensive analysis includes market trends, consumer behavior, 
                                        and competitive positioning to build a solid foundation for your brand strategy.
                                    </p>
                                    <p>
                                        <strong>Strategic Foundation:</strong> Building a solid brand foundation with clear 
                                        positioning, messaging, and values that guide all design decisions and communications. 
                                        We develop a unique brand voice and personality that resonates with your target 
                                        audience while maintaining consistency across all touchpoints.
                                    </p>
                                    <p>
                                        <strong>Creative Development:</strong> Translating strategy into compelling visual 
                                        identities through logo design, color systems, typography, and visual language. 
                                        Our creative process involves multiple iterations, feedback loops, and refinement 
                                        to ensure the final design perfectly captures your brand essence.
                                    </p>
                                    <p>
                                        <strong>Implementation & Guidelines:</strong> Creating comprehensive brand 
                                        guidelines and implementation systems to ensure consistency across all touchpoints 
                                        and platforms. We provide detailed documentation and support to help your team 
                                        maintain brand integrity as your business grows and evolves.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bd-about-images-column">
                            {/* Main Image */}
                            <div className="bd-about-image-main">
                                <img 
                                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    alt="Brand Design Process" 
                                />
                                <div className="bd-image-overlay">
                                    <h3>Our Design Studio</h3>
                                    <p>Where creativity meets strategy to build iconic brands</p>
                                </div>
                            </div>
                            
                            {/* Extra Images Section - SAME SIZE AS MAIN IMAGE */}
                            <div className={`bd-extra-images-fill ${isExpanded ? 'show' : ''}`}>
                                {extraImages.map((image) => (
                                    <div 
                                        key={image.id} 
                                        className={`bd-extra-image-fill ${visibleImages.includes(image.id) ? 'visible' : ''}`}
                                    >
                                        <div className="bd-fill-image-wrapper">
                                            <img src={image.url} alt={image.title} />
                                            <div className="bd-fill-image-overlay">
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

            {/* Projects Section */}
            <section className="bd-projects-section">
                <div className="bd-container">
                    <div className="bd-section-header">
                        <h2 className="bd-section-title">Our Branding Projects</h2>
                        <p className="bd-section-subtitle">
                            Discover how we've helped businesses transform through strategic branding and design
                        </p>
                    </div>
                    
                    <div className="bd-projects-grid">
                        {projects.map((project) => (
                            <div key={project.id} className="bd-project-card">
                                <div className="bd-project-image">
                                    <img src={project.image} alt={project.title} />
                                    <span className="bd-project-category">{project.category}</span>
                                </div>
                                <div className="bd-project-content">
                                    <h3 className="bd-project-title">{project.title}</h3>
                                    <p className="bd-project-description">{project.description}</p>
                                    <div className="bd-project-stats">
                                        <div className="bd-project-stat">
                                            <span className="bd-stat-number">{project.stats.duration}</span>
                                            <span className="bd-stat-label">Duration</span>
                                        </div>
                                        <div className="bd-project-stat">
                                            <span className="bd-stat-number">{project.stats.satisfaction}</span>
                                            <span className="bd-stat-label">Client Satisfaction</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feedback Section */}
            <section className="bd-feedback-section">
                <div className="bd-container bd-feedback-container-wide">
                    <div className="bd-section-header">
                        <h2 className="bd-section-title">Client Feedback</h2>
                        <p className="bd-section-subtitle">
                            Hear what our clients say about their branding journey with us
                        </p>
                    </div>
                    
                    <div className="bd-feedback-wrapper-wide">
                        {/* Left Button */}
                        <button 
                            className="bd-feedback-nav-btn bd-feedback-prev" 
                            onClick={handlePrevSlide}
                            aria-label="Previous feedback"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        
                        {/* Feedback Slider */}
                        <div className="bd-feedback-slider-wide">
                            <div className="bd-feedback-track" ref={feedbackTrackRef}>
                                {feedbacks.map((feedback) => (
                                    <div key={feedback.id} className="bd-feedback-slide">
                                        <div className="bd-feedback-card-wide">
                                            <div className="bd-feedback-content">
                                                <div className="bd-feedback-quote">"</div>
                                                <p className="bd-feedback-text-wide">{feedback.text}</p>
                                                
                                                {/* Author Info */}
                                                <div className="bd-feedback-author-center">
                                                    <div className="bd-author-avatar-center">
                                                        <div className="bd-avatar-initial">
                                                            {feedback.initial}
                                                        </div>
                                                    </div>
                                                    <div className="bd-author-info-center">
                                                        <h4>{feedback.author}</h4>
                                                        <p>{feedback.role}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Right Button */}
                        <button 
                            className="bd-feedback-nav-btn bd-feedback-next" 
                            onClick={handleNextSlide}
                            aria-label="Next feedback"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    
                    {/* Dots */}
                    <div className="bd-slider-dots">
                        {feedbacks.map((_, index) => (
                            <button
                                key={index}
                                className={`bd-slider-dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => handleDotClick(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <MainPageSubFooter/>
            <BackToTop/>
        </div>
                </div>
        </>
    );
};

export default BrandingDesigning;