import React, { useState, useEffect, useRef } from 'react';

import appImageOne from '../../../assets/case study images/Application/aara.png';
import appImageTwo from '../../../assets/case study images/Application/orthopetic clinic.png';
import appImageThree from '../../../assets/case study images/Application/pavizham.jpg';
import './MobileApplications.css';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import MainPageSubFooter from '../MainPageSubFooter/MainPageSubFooter';
import { Helmet } from 'react-helmet';

const MobileApplications = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);
    const [visibleImages, setVisibleImages] = useState([]);
    const feedbackTrackRef = useRef(null);

    const feedbacks = [
        {
            id: 1,
            text: "The mobile app helped patients access lab services and reports easily. Very clean, secure, and professional",
            author: "Aara labs",
            role: "Aara health care labs"
        },
        {
            id: 2,
            text: "The mobile app simplified appointment booking for patients. It reduced our workload and improved patient satisfaction.",
            author: "Orthopedic clinic",
            role: "Healthcare and wellness"
        },
        {
            id: 3,
            text: "The mobile application made our services easily accessible for customers. The app is smooth, professional, and user-friendly",
            author: "pavizham",
            role: "pavizham jewellery"
        }
    ];

    const solutions = [
        {
            id: 1,
            title: "Aara Labs",
            description: "Developed a clean and secure lab mobile application.",
            category: "Mobile Development",
            image: appImageOne,
            technologies: ["React Native", "Flutter", "iOS", "Android"],
            results: {
                timeline: "2.5 MONTHS",
                improvement: "320% ENGAGEMENT",
                subtitle: "Development Time"
            }
        },
        {
            id: 2,
            title: "Orthopedic Clinic",
            description: "Easy appointment booking with user friendly interface",
            category: "Health Care",
            image: appImageTwo,
            technologies: ["Node.js", "MongoDB", "AWS", "Firebase"],
            results: {
                timeline: "2 MONTHS",
                improvement: "50K+ USERS",
                subtitle: "Scaled to"
            }
        },
        {
            id: 3,
            title: "Pavizham",
            description: "Clean and intutive UI with smooth user flow service interaction.",
            category: "App Optimization",
            image: appImageThree,
            technologies: ["Performance", "UX Design", "Analytics", "Testing"],
            results: {
                timeline: "2 MONTHS",
                improvement: "4.8 STAR RATING",
                subtitle: "Achieved"
            }
        }
    ];

    // Related mobile applications images - same size as main image
    const extraImages = [
        {
            id: 1,
            url: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "iOS App Development",
            description: "Native iOS applications with Swift and modern UIKit"
        },
        {
            id: 2,
            url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Android Solutions",
            description: "High-performance Android apps with Kotlin and Jetpack"
        },
        {
            id: 3,
            url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Cross-Platform Apps",
            description: "React Native and Flutter apps for maximum reach"
        }
    ];

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
            <meta name="description" content="Reach both iOS and Android users with React Native apps that deliver native performance." />
            <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
            {/* <link rel="canonical" href="https://yourapp.com" /> */}
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Your App | Config" />
            <meta property="og:description" content="Lorem Ipsum" />
            {/* <meta property="og:url" content="https://yourapp.com" /> */}
            </Helmet>
        
        <div className="map-page" id='mobileAppsPage'>
            <TopNavBar/>
            <TwoLineNavbar/>
            {/* Hero Section */}
            <section className="map-hero-section">
                <div className="map-hero-bg"></div>
                <div className="map-container">
                    <div className="map-hero-content">
                        <span className="map-hero-badge">MOBILE APPLICATIONS</span>
                        <h1 className="map-hero-title">
                            PREMIUM MOBILE APP DEVELOPMENT
                        </h1>
                        <h2 className="map-hero-subtitle">Building the Future of Mobile Experiences</h2>
                        <p className="map-hero-description">
                            We create powerful, intuitive, and scalable mobile applications that transform businesses 
                            and delight users. From startups to enterprises, we deliver native and cross-platform 
                            solutions that drive engagement and growth.
                        </p>
                        <div className="map-capabilities-stack">
                            <span className="map-capability-item">iOS Development</span>
                            <span className="map-capability-item">Android Apps</span>
                            <span className="map-capability-item">React Native</span>
                            <span className="map-capability-item">Flutter</span>
                            <span className="map-capability-item">App Optimization</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section - UPDATED WITH IMAGE COLUMN */}
            <section className={`map-about-section ${isExpanded ? 'map-image-scroll' : ''}`}>
                <div className="map-container">
                    <div className="map-about-content">
                        <div className="map-about-text">
                            <h2 className="map-about-title">Why Choose ENGLORAY for Mobile Development?</h2>
                            <p className="map-about-description">
                                We combine technical expertise with creative design to build mobile applications 
                                that not only function flawlessly but also provide exceptional user experiences. 
                                Our approach ensures your app stands out in today's competitive market.
                            </p>
                            <ul className="map-about-points">
                                <li className="map-about-point">Native iOS & Android development</li>
                                <li className="map-about-point">Cross-platform solutions with React Native & Flutter</li>
                                <li className="map-about-point">End-to-end mobile strategy and planning</li>
                                <li className="map-about-point">App Store & Play Store optimization</li>
                                <li className="map-about-point">Ongoing maintenance and support</li>
                            </ul>
                            
                            <button 
                                className={`map-read-more-btn ${isExpanded ? 'expanded' : ''}`}
                                onClick={handleReadMore}
                            >
                                {isExpanded ? 'Read Less' : 'Read More'}
                                <span className="map-arrow">{isExpanded ? '▲' : '▼'}</span>
                            </button>
                            
                            <div className={`map-expanded-content ${isExpanded ? 'expanded' : ''}`}>
                                <div className="map-expanded-paragraphs">
                                    <p>
                                        <strong>Full-Stack Mobile Expertise:</strong> Our team specializes in both 
                                        frontend and backend development, ensuring seamless integration between 
                                        your mobile app and server infrastructure. We handle everything from 
                                        UI/UX design to API development and database management.
                                    </p>
                                    <p>
                                        <strong>Performance Optimization:</strong> We build mobile applications 
                                        that load quickly, respond instantly, and use minimal battery and data. 
                                        Our performance optimization techniques ensure your app runs smoothly 
                                        even on older devices and slower networks.
                                    </p>
                                    <p>
                                        <strong>Security First Approach:</strong> Mobile security is our top priority. 
                                        We implement industry best practices for data encryption, secure authentication, 
                                        and protection against common mobile vulnerabilities to keep your users' data safe.
                                    </p>
                                    <p>
                                        <strong>Scalable Architecture:</strong> Whether you're building for thousands 
                                        or millions of users, our mobile solutions are designed to scale. We implement 
                                        cloud-native architectures and microservices that grow with your business needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        {/* UPDATED: Image Column Layout */}
                        <div className="map-about-images-column">
                            {/* Main Image */}
                            <div className="map-about-image-main">
                                <img 
                                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                                    alt="Mobile App Development" 
                                />
                                <div className="map-image-overlay">
                                    <h3>Mobile Development Studio</h3>
                                    <p>Our team has delivered 150+ successful mobile applications across various industries</p>
                                </div>
                            </div>
                            
                            {/* Extra Images Section - SAME SIZE AS MAIN IMAGE */}
                            <div className={`map-extra-images-fill ${isExpanded ? 'show' : ''}`}>
                                {extraImages.map((image) => (
                                    <div 
                                        key={image.id} 
                                        className={`map-extra-image-fill ${visibleImages.includes(image.id) ? 'visible' : ''}`}
                                    >
                                        <div className="map-fill-image-wrapper">
                                            <img src={image.url} alt={image.title} />
                                            <div className="map-fill-image-overlay">
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

            {/* Solutions Section - Dark Background */}
            <section className="map-solutions-section">
                <div className="map-container">
                    <div className="map-section-header">
                        <h2 className="map-section-title">Our Mobile Solutions</h2>
                        <p className="map-section-subtitle">
                            Comprehensive mobile development services delivering measurable results
                        </p>
                    </div>
                    
                    <div className="map-solutions-grid">
                        {solutions.map((solution) => (
                            <div className="map-solution-card" key={solution.id}>
                                <div className="map-solution-image">
                                    <img src={solution.image} alt={solution.title} />
                                    <span className="map-solution-category">{solution.category}</span>
                                </div>
                                <div className="map-solution-content">
                                    <h3 className="map-solution-title">{solution.title}</h3>
                                    <p className="map-solution-description">{solution.description}</p>
                                    
                                    <div className="map-solution-technologies">
                                        {solution.technologies.map((tech, index) => (
                                            <span className="map-tech-tag" key={index}>{tech}</span>
                                        ))}
                                    </div>
                                    
                                    <div className="map-solution-results">
                                        <div className="map-solution-result">
                                            <span className="map-result-number">{solution.results.timeline}</span>
                                            <span className="map-result-label">{solution.results.subtitle}</span>
                                        </div>
                                        <div className="map-solution-result">
                                            <span className="map-result-number">{solution.results.improvement}</span>
                                            <span className="map-result-label">Performance Gain</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* UPDATED: Feedback Section - WIDER VERSION WITHOUT AVATAR */}
            <section className="map-feedback-section">
                <div className="map-container map-feedback-container-wide">
                    <div className="map-section-header">
                        <h2 className="map-section-title">Client Success Stories</h2>
                        <p className="map-section-subtitle">
                            Discover how our mobile applications are transforming businesses
                        </p>
                    </div>
                    
                    <div className="map-feedback-wrapper-wide">
                        {/* Left Button */}
                        <button 
                            className="map-feedback-nav-btn map-feedback-prev" 
                            onClick={handlePrevSlide}
                            aria-label="Previous feedback"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        
                        {/* Feedback Slider - WIDER */}
                        <div className="map-feedback-slider-wide">
                            <div className="map-feedback-track" ref={feedbackTrackRef}>
                                {feedbacks.map((feedback) => (
                                    <div key={feedback.id} className="map-feedback-slide">
                                        <div className="map-feedback-card-wide">
                                            <div className="map-feedback-content">
                                                <div className="map-feedback-quote">"</div>
                                                <p className="map-feedback-text-wide">{feedback.text}</p>
                                                
                                                {/* AUTHOR INFO WITHOUT AVATAR */}
                                                <div className="map-feedback-author-simple">
                                                    <div className="map-author-info-simple">
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
                            className="map-feedback-nav-btn map-feedback-next" 
                            onClick={handleNextSlide}
                            aria-label="Next feedback"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    
                    {/* Dots */}
                    <div className="map-slider-dots">
                        {feedbacks.map((_, index) => (
                            <button
                                key={index}
                                className={`map-slider-dot ${index === currentSlide ? 'active' : ''}`}
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

export default MobileApplications;