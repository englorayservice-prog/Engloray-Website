import React, { useState, useEffect, useRef } from 'react';

import digitalImageOne from '../../../assets/case study images/products/amico.png';
import digitalImageTwo from '../../../assets/case study images/products/brandex.png';
import digitalImageThree from '../../../assets/case study images/products/tamil natrals.png';
import './DigitalMarketing.css';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import MainPageSubFooter from '../MainPageSubFooter/MainPageSubFooter';
import { Helmet } from 'react-helmet';

const DigitalMarketing = () => {
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
            text: "ENGLORAY transformed our product packaging into a professional, market-ready design. The labels improved shelf visibility and customer confidence",
            author: "Amico",
            role: "Amico Food Products"
        },
        {
            id: 2,
            text: "The packaging feels authentic and natural. ENGLORAY captured our brand story perfectly through design.",
            author: "Tamil Naturals",
            role: "Tamil Naturals food products"
        },
        {
            id: 3,
            text: "Packaging is well-structured and visually strong. ENGLORAY made our products look market-ready",
            author: "Brandex",
            role: "Brandex Products"
        }
    ];

    const campaigns = [
        {
            id: 1,
            title: "Amico Foods",
            description: "Comprehensive SEO strategy targeting B2B tech industry with content marketing and technical optimization.",
            category: "Consumer Products",
            image: digitalImageOne,
            stats: {
                duration: "1.5 Months",
                improvement: "400% ROI"
            }
        },
        {
            id: 2,
            title: "Tamil Naturals",
            description: "Designed with cultural inspiration with tradtional and modern elements.",
            category: "Traditional products",
            image: digitalImageTwo,
            stats: {
                duration: "1 Months",
                improvement: "500% Growth"
            }
        },
        {
            id: 3,
            title: "Brandex",
            description: "Clear product communication  with strong shelf layout.",
            category: "FMCG Advertising",
            image: digitalImageThree,
            stats: {
                duration: "1 Months",
                improvement: "250% ROAS"
            }
        }
        
    ];

    // Related digital marketing images - 4 DIFFERENT images
    const extraImages = [
        {
            id: 1,
            url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            title: "Data Analytics Dashboard",
            description: "Real-time performance tracking and data-driven decision making"
        },
        {
            id: 2,
            url: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            title: "Marketing Strategy Session",
            description: "Collaborative planning and campaign development workshops"
        },
        {
            id: 3,
            url: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            title: "Content Creation Studio",
            description: "Professional content production for digital marketing campaigns"
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
            <meta name="description" content="Increase conversions and revenue with data-driven digital marketing strategies that deliver measurable ROI." />
            <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
            {/* <link rel="canonical" href="https://yourapp.com" /> */}
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Your App | Config" />
            <meta property="og:description" content="Lorem Ipsum" />
            {/* <meta property="og:url" content="https://yourapp.com" /> */}
            </Helmet>
        
        <div className="dm-page" id='digitalMarketingPage'>
            <TopNavBar/>
            <TwoLineNavbar/>
            {/* Hero Section */}
            <section className="dm-hero-section">
                <div className="dm-hero-bg"></div>
                <div className="dm-container">
                    <div className="dm-hero-content">
                        <span className="dm-hero-badge">DIGITAL MARKETING</span>
                        <h1 className="dm-hero-title">DRIVING GROWTH THROUGH DIGITAL EXCELLENCE</h1>
                        <h2 className="dm-hero-subtitle">Where Strategy Meets Performance</h2>
                        <p className="dm-hero-description">
                            We create data-driven digital marketing campaigns that deliver exceptional ROI. 
                            Our integrated approach combines creativity with analytics to drive meaningful 
                            results and sustainable growth for your business.
                        </p>
                        <div className="dm-services-stack">
                            <span className="dm-service-item">SEO Optimization</span>
                            <span className="dm-service-item">Social Media Marketing</span>
                            <span className="dm-service-item">PPC Advertising</span>
                            <span className="dm-service-item">Content Marketing</span>
                            <span className="dm-service-item">Email Marketing</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section with Image Expand */}
            <section className={`dm-about-section ${isExpanded ? 'dm-image-scroll' : ''}`}>
                <div className="dm-container">
                    <div className="dm-about-content">
                        <div className="dm-about-text">
                            <h2 className="dm-about-title">Why ENGLORAY for Digital Marketing?</h2>
                            <p className="dm-about-description">
                                We specialize in creating integrated digital marketing campaigns that deliver exceptional ROI. 
                                Our holistic approach ensures all marketing channels work together to achieve your business objectives.
                            </p>
                            <ul className="dm-about-points">
                                <li className="dm-about-point">Data-driven strategy development and execution</li>
                                <li className="dm-about-point">Multi-channel marketing integration</li>
                                <li className="dm-about-point">Real-time analytics and performance tracking</li>
                                <li className="dm-about-point">Conversion rate optimization expertise</li>
                                <li className="dm-about-point">Continuous campaign optimization and testing</li>
                            </ul>
                            
                            <button 
                                className={`dm-read-more-btn ${isExpanded ? 'expanded' : ''}`}
                                onClick={handleReadMore}
                            >
                                {isExpanded ? 'Read Less' : 'Read More'}
                                <span className="dm-arrow">↓</span>
                            </button>

                            <div className={`dm-expanded-content ${isExpanded ? 'expanded' : ''}`}>
                                <p className="dm-expanded-paragraph">
                                    <strong>Strategic Foundation:</strong> Our marketing process begins with comprehensive market research 
                                    and competitor analysis. We identify key opportunities and develop strategies tailored to your 
                                    specific business goals, ensuring every campaign is optimized for maximum impact.
                                </p>
                                <p className="dm-expanded-paragraph">
                                    <strong>Data-Driven Execution:</strong> We utilize advanced analytics tools to track performance 
                                    across all channels in real-time. Our team continuously optimizes campaigns based on data insights, 
                                    ensuring your marketing budget is always working at peak efficiency.
                                </p>
                                <p className="dm-expanded-paragraph">
                                    <strong>Performance Optimization:</strong> With expertise in AI-powered marketing automation, 
                                    we implement sophisticated targeting and personalization strategies that significantly increase 
                                    engagement and conversion rates while reducing customer acquisition costs.
                                </p>
                                <p className="dm-expanded-paragraph">
                                    <strong>Integrated Channel Approach:</strong> We don't view digital channels in isolation. Our 
                                    integrated marketing approach ensures SEO, social media, PPC, email, and content marketing work 
                                    together harmoniously, creating a cohesive brand experience that drives sustainable growth and 
                                    maximizes customer lifetime value.
                                </p>
                                <p className="dm-expanded-paragraph">
                                    <strong>Continuous Innovation:</strong> The digital landscape evolves rapidly, and so do we. 
                                    We stay ahead of industry trends, algorithm updates, and emerging technologies to ensure your 
                                    marketing strategy remains competitive and effective in an ever-changing digital ecosystem.
                                </p>
                            </div>
                        </div>
                        
                        <div className="dm-about-images-column">
                            {/* Main Image */}
                            <div className="dm-about-image-main">
                                <img 
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                                    alt="Digital Marketing Team" 
                                />
                                <div className="dm-image-overlay">
                                    <h3>Expert Marketing Team</h3>
                                    <p>Our team of 40+ marketers, analysts, and strategists driving growth since 2017</p>
                                </div>
                            </div>
                            
                            {/* Extra Images Section - All 4 images will appear here */}
                            <div className={`dm-extra-images-fill ${isExpanded ? 'show' : ''}`}>
                                {extraImages.map((image) => (
                                    <div 
                                        key={image.id} 
                                        className={`dm-extra-image-fill ${visibleImages.includes(image.id) ? 'visible' : ''}`}
                                    >
                                        <div className="dm-fill-image-wrapper">
                                            <img src={image.url} alt={image.title} />
                                            <div className="dm-fill-image-overlay">
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

            {/* Campaigns Section */}
            <section className="dm-campaigns-section">
                <div className="dm-container">
                    <div className="dm-section-header">
                        <h2 className="dm-section-title">Success Campaigns</h2>
                        <p className="dm-section-subtitle">
                            Real campaigns delivering exceptional results for our clients
                        </p>
                    </div>
                    
                    <div className="dm-campaigns-grid">
                        {campaigns.map((campaign) => (
                            <div className="dm-campaign-card" key={campaign.id}>
                                <div className="dm-campaign-image">
                                    <img src={campaign.image} alt={campaign.title} />
                                    <span className="dm-campaign-category">{campaign.category}</span>
                                </div>
                                <div className="dm-campaign-content">
                                    <h3 className="dm-campaign-title">{campaign.title}</h3>
                                    <p className="dm-campaign-description">{campaign.description}</p>
                                    <div className="dm-campaign-stats">
                                        <div className="dm-campaign-stat">
                                            <span className="dm-stat-number">{campaign.stats.duration}</span>
                                            <span className="dm-stat-label">Campaign Duration</span>
                                        </div>
                                        <div className="dm-campaign-stat">
                                            <span className="dm-stat-number">{campaign.stats.improvement}</span>
                                            <span className="dm-stat-label">Results Achieved</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feedback Section - WIDER - AVATAR REMOVED */}
            <section className="dm-feedback-section">
                <div className="dm-container dm-feedback-container-wide">
                    <div className="dm-section-header">
                        <h2 className="dm-section-title">Client Success Stories</h2>
                        <p className="dm-section-subtitle">
                            Hear what our clients have to say about working with ENGLORAY
                        </p>
                    </div>
                    
                    <div className="dm-feedback-wrapper-wide">
                        {/* Left Button */}
                        <button 
                            className="dm-feedback-nav-btn dm-feedback-prev" 
                            onClick={handlePrevSlide}
                            aria-label="Previous feedback"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        
                        {/* Feedback Slider - WIDER */}
                        <div className="dm-feedback-slider-wide">
                            <div className="dm-feedback-track" ref={feedbackTrackRef}>
                                {feedbacks.map((feedback) => (
                                    <div key={feedback.id} className="dm-feedback-slide">
                                        <div className="dm-feedback-card-wide">
                                            <div className="dm-feedback-content">
                                                <div className="dm-feedback-quote">"</div>
                                                <p className="dm-feedback-text-wide">{feedback.text}</p>
                                                
                                                {/* AUTHOR INFO WITHOUT AVATAR */}
                                                <div className="dm-feedback-author-simple">
                                                    <div className="dm-author-info-simple">
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
                            className="dm-feedback-nav-btn dm-feedback-next" 
                            onClick={handleNextSlide}
                            aria-label="Next feedback"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    
                    {/* Dots */}
                    <div className="dm-slider-dots">
                        {feedbacks.map((_, index) => (
                            <button
                                key={index}
                                className={`dm-slider-dot ${index === currentSlide ? 'active' : ''}`}
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

export default DigitalMarketing;