import React, { useState, useEffect, useRef } from 'react';
import './AICreativeIntelligence.css';

const AICreativeIntelligence = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);
    const [visibleImages, setVisibleImages] = useState([]);
    const feedbackTrackRef = useRef(null);

    const feedbacks = [
        {
            id: 1,
            text: "ENGLORAY's AI-powered creative solutions transformed our content strategy completely. Their intelligent algorithms generated content that increased our engagement by 450% while reducing production time by 70%.",
            author: "Alexandra Chen",
            role: "Head of Innovation, TechVision AI",
            avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        {
            id: 2,
            text: "The AI-driven design system implemented by ENGLORAY revolutionized our creative workflow. We now generate 300+ unique visual assets per month with AI assistance, maintaining consistent brand quality while scaling production.",
            author: "Marcus Rodriguez",
            role: "Creative Director, DigitalArt Studio",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        {
            id: 3,
            text: "ENGLORAY's AI copywriting tools increased our content output by 500% while maintaining exceptional quality. The AI-powered sentiment analysis and optimization features helped us create more engaging, conversion-focused content.",
            author: "Sophie Williams",
            role: "Content Strategist, GrowthLabs",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        }
    ];

    const solutions = [
        {
            id: 1,
            title: "AI CONTENT GENERATION PLATFORM",
            description: "Intelligent content creation system that produces SEO-optimized articles, blogs, and marketing copy at scale.",
            category: "AI Writing",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            technologies: ["NLP", "GPT 4", "SEO AI", "Analytics"],
            results: {
                timeline: "3 MONTHS",
                improvement: "450% OUTPUT",
                subtitle: "Implemented from"
            }
        },
        {
            id: 2,
            title: "INTELLIGENT DESIGN ASSISTANT",
            description: "AI-powered design system that generates brand-consistent visuals, layouts, and marketing materials automatically.",
            category: "AI Design",
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            technologies: ["GANs", "Style Transfer", "Auto Layout", "Brand AI"],
            results: {
                timeline: "4 MONTHS",
                improvement: "300+ ASSETS/MONTH",
                subtitle: "Implemented from"
            }
        },
        {
            id: 3,
            title: "PREDICTIVE CONTENT OPTIMIZATION",
            description: "Machine learning system that predicts content performance and optimizes for maximum engagement and conversions.",
            category: "AI Analytics",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            technologies: ["ML", "Predictive AI", "A/B testing", "Engagement AI"],
            results: {
                timeline: "2 MONTHS",
                improvement: "200% ENGAGEMENT",
                subtitle: "Implemented from"
            }
        }
    ];

    // Related AI creative intelligence images - same size as main image
    const extraImages = [
        {
            id: 1,
            url: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "AI Neural Networks",
            description: "Advanced neural networks processing creative data patterns"
        },
        {
            id: 2,
            url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Creative AI Studio",
            description: "Our AI systems generating innovative creative concepts"
        },
        {
            id: 3,
            url: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "AI Content Generation",
            description: "Automated content creation with intelligent algorithms"
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
        <div className="ai-page" id='aiPage'>
            {/* Hero Section */}
            <section className="ai-hero-section">
                <div className="ai-hero-bg"></div>
                <div className="ai-container">
                    <div className="ai-hero-content">
                        <span className="ai-hero-badge">AI CREATIVE INTELLIGENCE</span>
                        <h1 className="ai-hero-title">
                            REVOLUTIONIZING CREATIVE WORK WITH AI
                        </h1>
                        <h2 className="ai-hero-subtitle">Where Artificial Intelligence Meets Human Creativity</h2>
                        <p className="ai-hero-description">
                            We harness the power of artificial intelligence to transform creative processes, 
                            automate content production, and generate intelligent solutions that elevate brand 
                            storytelling to unprecedented levels of efficiency and impact.
                        </p>
                        <div className="ai-capabilities-stack">
                            <span className="ai-capability-item">AI Content Generation</span>
                            <span className="ai-capability-item">Intelligent Design</span>
                            <span className="ai-capability-item">Predictive Analytics</span>
                            <span className="ai-capability-item">Video Automation</span>
                            <span className="ai-capability-item">Personalization AI</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section - UPDATED WITH IMAGE COLUMN */}
            <section className={`ai-about-section ${isExpanded ? 'ai-image-scroll' : ''}`}>
                <div className="ai-container">
                    <div className="ai-about-content">
                        <div className="ai-about-text">
                            <h2 className="ai-about-title">Why Choose ENGLORAY for AI Creative Solutions?</h2>
                            <p className="ai-about-description">
                                We combine cutting-edge artificial intelligence with human creativity to deliver 
                                unprecedented results. Our AI-powered solutions automate complex creative tasks 
                                while maintaining the human touch that connects with audiences.
                            </p>
                            <ul className="ai-about-points">
                                <li className="ai-about-point">State-of-the-art AI models for creative tasks</li>
                                <li className="ai-about-point">Human-AI collaboration workflows</li>
                                <li className="ai-about-point">Real-time creative optimization</li>
                                <li className="ai-about-point">Scalable content production pipelines</li>
                                <li className="ai-about-point">Continuous learning and improvement</li>
                            </ul>
                            
                            <button 
                                className={`ai-read-more-btn ${isExpanded ? 'expanded' : ''}`}
                                onClick={handleReadMore}
                            >
                                {isExpanded ? 'Read Less' : 'Read More'}
                                <span className="ai-arrow">{isExpanded ? '▲' : '▼'}</span>
                            </button>
                            
                            <div className={`ai-expanded-content ${isExpanded ? 'expanded' : ''}`}>
                                <div className="ai-expanded-paragraphs">
                                    <p>
                                        <strong>Advanced AI Architecture:</strong> Our AI creative platform leverages 
                                        advanced machine learning algorithms trained on millions of successful creative 
                                        works. This enables us to generate content that not only meets brand guidelines 
                                        but also resonates with target audiences at scale.
                                    </p>
                                    <p>
                                        <strong>Proprietary Models:</strong> We've developed proprietary AI models 
                                        specifically optimized for creative tasks, including natural language generation, 
                                        visual design synthesis, and predictive content performance analysis. Our systems 
                                        continuously learn and improve from every interaction.
                                    </p>
                                    <p>
                                        <strong>Human-in-the-Loop:</strong> Our approach ensures that AI-generated 
                                        content maintains emotional intelligence and brand authenticity. Creative 
                                        directors work alongside AI systems to refine outputs, ensuring perfect 
                                        alignment with strategic objectives.
                                    </p>
                                    <p>
                                        <strong>Scalable Solutions:</strong> From startups to enterprises, our 
                                        AI creative solutions scale to meet any production demand while maintaining 
                                        quality and consistency across all generated content and designs.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        {/* UPDATED: Image Column Layout */}
                        <div className="ai-about-images-column">
                            {/* Main Image */}
                            <div className="ai-about-image-main">
                                <img 
                                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                                    alt="AI Creative Intelligence" 
                                />
                                <div className="ai-image-overlay">
                                    <h3>AI Creative Platform</h3>
                                    <p>Our advanced AI system processes 50,000+ creative assets daily with 99.7% accuracy</p>
                                </div>
                            </div>
                            
                            {/* Extra Images Section - SAME SIZE AS MAIN IMAGE */}
                            <div className={`ai-extra-images-fill ${isExpanded ? 'show' : ''}`}>
                                {extraImages.map((image) => (
                                    <div 
                                        key={image.id} 
                                        className={`ai-extra-image-fill ${visibleImages.includes(image.id) ? 'visible' : ''}`}
                                    >
                                        <div className="ai-fill-image-wrapper">
                                            <img src={image.url} alt={image.title} />
                                            <div className="ai-fill-image-overlay">
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
            <section className="ai-solutions-section">
                <div className="ai-container">
                    <div className="ai-section-header">
                        <h2 className="ai-section-title">AI Solutions in Action</h2>
                        <p className="ai-section-subtitle">
                            Real-world implementations driving measurable results
                        </p>
                    </div>
                    
                    <div className="ai-solutions-grid">
                        {solutions.map((solution) => (
                            <div className="ai-solution-card" key={solution.id}>
                                <div className="ai-solution-image">
                                    <img src={solution.image} alt={solution.title} />
                                    <span className="ai-solution-category">{solution.category}</span>
                                </div>
                                <div className="ai-solution-content">
                                    <h3 className="ai-solution-title">{solution.title}</h3>
                                    <p className="ai-solution-description">{solution.description}</p>
                                    
                                    <div className="ai-solution-technologies">
                                        {solution.technologies.map((tech, index) => (
                                            <span className="ai-tech-tag" key={index}>{tech}</span>
                                        ))}
                                    </div>
                                    
                                    <div className="ai-solution-results">
                                        <div className="ai-solution-result">
                                            <span className="ai-result-number">{solution.results.timeline}</span>
                                            <span className="ai-result-label">{solution.results.subtitle}</span>
                                        </div>
                                        <div className="ai-solution-result">
                                            <span className="ai-result-number">{solution.results.improvement}</span>
                                            <span className="ai-result-label">Performance Gain</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* UPDATED: Feedback Section - WIDER VERSION */}
            <section className="ai-feedback-section">
                <div className="ai-container ai-feedback-container-wide">
                    <div className="ai-section-header">
                        <h2 className="ai-section-title">Client Success Stories</h2>
                        <p className="ai-section-subtitle">
                            Discover how AI creative intelligence is transforming businesses
                        </p>
                    </div>
                    
                    <div className="ai-feedback-wrapper-wide">
                        {/* Left Button */}
                        <button 
                            className="ai-feedback-nav-btn ai-feedback-prev" 
                            onClick={handlePrevSlide}
                            aria-label="Previous feedback"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        
                        {/* Feedback Slider - WIDER */}
                        <div className="ai-feedback-slider-wide">
                            <div className="ai-feedback-track" ref={feedbackTrackRef}>
                                {feedbacks.map((feedback) => (
                                    <div key={feedback.id} className="ai-feedback-slide">
                                        <div className="ai-feedback-card-wide">
                                            <div className="ai-feedback-content">
                                                <div className="ai-feedback-quote">"</div>
                                                <p className="ai-feedback-text-wide">{feedback.text}</p>
                                                
                                                <div className="ai-feedback-author-center">
                                                    <div className="ai-author-avatar-center">
                                                        <img src={feedback.avatar} alt={feedback.author} />
                                                    </div>
                                                    <div className="ai-author-info-center">
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
                            className="ai-feedback-nav-btn ai-feedback-next" 
                            onClick={handleNextSlide}
                            aria-label="Next feedback"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    
                    {/* Dots */}
                    <div className="ai-slider-dots">
                        {feedbacks.map((_, index) => (
                            <button
                                key={index}
                                className={`ai-slider-dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => handleDotClick(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AICreativeIntelligence;