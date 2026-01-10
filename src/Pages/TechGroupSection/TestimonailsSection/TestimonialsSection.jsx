import React, { useState, useEffect, useRef } from 'react';

import techLogoOne from '../../../assets/logos/aara-Photoroom.png';
import techLogoTwo from '../../../assets/logos/amico-Photoroom.png';
import techLogoThree from '../../../assets/logos/malar-Photoroom.png';
import techLogoFour from '../../../assets/logos/manjari-Photoroom.png';
import techLogoFive from '../../../assets/logos/nestoria-Photoroom.png';
import techLogoSix from '../../../assets/logos/say-Photoroom.png';
import techLogoSeven from '../../../assets/logos/tamil natrals-Photoroom.png';
import techLogoEight from '../../../assets/logos/maax life-Photoroom.png';
import techLogNine from '../../../assets/logos/brandex-Photoroom.png';
import techLogoTen from '../../../assets/logos/wooden street-Photoroom.png';
import techLogoEleven from '../../../assets/logos/amoura-Photoroom.png';
import techLogoTwelve from '../../../assets/logos/coreFitness-Photoroom.png';
import techLogoThirteen from '../../../assets/logos/ecec logo.png';
import techLogoFourteen from '../../../assets/logos/studio makeup-Photoroom.png';
import techLogoFifteen from '../../../assets/logos/Pavizham-Photoroom.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoneyBill, faClock, faShieldAlt, faChartLine } from '@fortawesome/free-solid-svg-icons';
import './TestimonialsSection.css';

// Add icons to the library
library.add(faMoneyBill, faClock, faShieldAlt, faChartLine);

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeSuccessStory, setActiveSuccessStory] = useState(0);
  const [currentLogoSet, setCurrentLogoSet] = useState(0);
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  // Color options for icons
  const iconColors = {
    moneyBill: '#4CAF50',  // Green for money
    clock: '#2196F3',      // Blue for time
    shieldAlt: '#FF9800',  // Orange for security
    chartLine: '#9C27B0',  // Purple for growth
    default: '#FFFFFF'     // White default
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSuccessStory((prev) => (prev + 1) % 2);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Change logo set every 3 seconds
    const interval = setInterval(() => {
      setCurrentLogoSet((prev) => (prev + 1) % 3); // Changed to 3 sets
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsVisible(true);
          } else {
            setStatsVisible(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Emily C",
      position: "Brandex",
      company: "TechInnovate Inc.",
      text: "Our product packaging now looks market-ready and professional on shelves. Label designs are clear, attractive, and customer-friendly",
      subtitle: "label & product Success",
      rating: 5,
      project: "Product & label Design",
      results: "45% increase in operational efficiency",
      backgroundImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      name: "Pavithra S",
      position: "Pavizham Jewellers",
      company: "Global Solutions Ltd.",
      text: "The mobile app simplified our daily operations and customer interactions. Online appointment system reduced manual work and saved time",
      subtitle: "Streamlined Mobile Apps",
      rating: 5,
      project: "Mobile App",
      results: "30% reduction in operational costs",
      backgroundImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      name: "Malar Herbs",
      position: "Malarvizhi S",
      company: "Creative Minds Agency",
      text: "Promotional creatives helped us increase engagement and walk-ins. Ad designs were visually strong and result-oriented.",
      subtitle: "Promotion Ads",
      rating: 5,
      project: "Brand Identity & Marketing",
      results: "60% increase in brand recognition",
      backgroundImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      name: "Karthikeyan M",
      position: "Gym Life",
      company: "FinTech Solutions",
      text: "The brand looks very professional and trustworthy. Website is easy to use and informative. The app experience is smooth and user-friendly",
      subtitle: "Mobile Excellence",
      rating: 5,
      project: "Mobile App Development",
      results: "75% increase in user engagement",
      backgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const clientBenefits = [
    {
      id: 1,
      title: "Cost Efficiency",
      description: "Reduce operational costs by up to 40% with our optimized solutions and efficient development processes.",
      icon: faMoneyBill,
      iconColor: iconColors.moneyBill,
      backgroundImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Time Savings",
      description: "Accelerate your time-to-market with our agile development approach and rapid prototyping capabilities.",
      icon: faClock,
      iconColor: iconColors.clock,
      backgroundImage: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Quality Assurance",
      description: "Get enterprise-grade solutions with comprehensive testing, security, and performance optimization.",
      icon: faShieldAlt,
      iconColor: iconColors.shieldAlt,
      backgroundImage: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "Scalable Growth",
      description: "Future-proof your business with scalable architectures that grow with your evolving needs.",
      icon: faChartLine,
      iconColor: iconColors.chartLine,
      backgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  // Array of all 15 logo images
  const logoImages = [
    { id: 1, src: techLogoOne, alt: "Aara" },
    { id: 3, src: techLogoFifteen, alt: "pavizham" },
    { id: 2, src: techLogoTwo, alt: "Amico" },
    { id: 4, src: techLogoEight, alt: "maax life" },
    { id: 5, src: techLogoTwelve, alt: "Core Fitness" },
    { id: 6, src: techLogoFive, alt: "Nestoria" },
    { id: 7, src: techLogoSix, alt: "Say" },
    { id: 8, src: techLogoSeven, alt: "Tamil Naturals" },
    { id: 9, src: techLogNine, alt: "Brandex" },
    { id: 10, src: techLogoTen, alt: "Wooden Street" },
    { id: 11, src: techLogoEleven, alt: "Amoura" },
    { id: 12, src: techLogoThirteen, alt: "ECEC" },
    { id: 13, src: techLogoFour, alt: "Manjari" },
    { id: 14, src: techLogoFourteen, alt: "Studio Makeup" },
    { id: 15, src: techLogoThree, alt: "Malar" },
  ];

  // Function to get current set of 5 logos based on currentLogoSet
  const getCurrentLogos = () => {
    if (currentLogoSet === 0) {
      return logoImages.slice(0, 5); // Logos 1-5
    } else if (currentLogoSet === 1) {
      return logoImages.slice(5, 10); // Logos 6-10
    } else {
      return logoImages.slice(10, 15); // Logos 11-15
    }
  };

  // Determine which cards should show content based on activeSuccessStory
  const getCardVisibility = (index) => {
    if (activeSuccessStory === 0) {
      // Show first two cards, hide last two
      return index < 2;
    } else {
      // Show last two cards, hide first two
      return index >= 2;
    }
  };

  return (
    <section className="techGroup-testimonials-section" id="techGroup-testimonialsSection">
      <div className="techGroup-testimonialSection-container">
        {/* Header */}
        <div className={`techGroup-testimonialSection-header ${isVisible ? 'techGroup-animate-fade-in' : ''}`}>
            <span className="techGroup-benefits-main-badge">Clients Love</span>
          <h2 className="techGroup-testimonials-title">What Clients Says</h2>
          <p className="techGroup-testimonials-subtitle">
           ENGLORAY is trusted by clients, valued by customers, empowering students, and supported by a strong team
          </p>
          <h4 className='techGroup-testimonials-title' style={{fontSize : '2rem'}}>More Success Stories</h4>
        </div>

        {/* Main Testimonials Carousel with Background Image */}
        <div className={`techGroup-testimonials-carousel ${isVisible ? 'techGroup-animate-slide-up' : ''}`}>
          <div 
            className="techGroup-carousel-background"
            style={{
              backgroundImage: `url(${testimonials[activeTestimonial].backgroundImage})`
            }}
          >
            <div className="techGroup-dark-overlay"></div>
            <div className="techGroup-carousel-container">
              <div className="techGroup-testimonial-active-card">
                <div className="techGroup-quote-mark">"</div>
                <div className="techGroup-testimonial-subtitle">
                  {testimonials[activeTestimonial].subtitle}
                </div>
                <p className="techGroup-testimonial-text">
                  {testimonials[activeTestimonial].text}
                </p>
                <div className="techGroup-testimonial-meta">
                  <div className="techGroup-client-info">
                    <h4 className="techGroup-client-name">{testimonials[activeTestimonial].name}</h4>
                    <p className="techGroup-client-position">{testimonials[activeTestimonial].position}</p>
                  </div>
                  <div className="techGroup-project-highlight">
                    <span className="techGroup-project-name">{testimonials[activeTestimonial].project}</span>
                    <span className="techGroup-project-result">{testimonials[activeTestimonial].results}</span>
                  </div>
                </div>
                <div className="techGroup-rating-stars">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className={`techGroup-star ${i < testimonials[activeTestimonial].rating ? 'techGroup-filled' : ''}`}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="techGroup-carousel-controls">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`techGroup-carousel-dot ${activeTestimonial === index ? 'techGroup-active' : ''}`}
                onClick={() => setActiveTestimonial(index)}
              >
                <div className="techGroup-dot-progress"></div>
              </button>
            ))}
          </div>
        </div>

        {/* Trusted By Section - Cohere Style */}
        <div className={`techGroup-trusted-by-section ${isVisible ? 'techGroup-animate-fade-in' : ''}`}>
          <div className="techGroup-trusted-by-header">
            <h3>Trusted by industry leaders and developers worldwide</h3>
            {/* Logo set indicator */}
            <div className="techGroup-logo-set-indicator">
              {[0, 1, 2].map((index) => (
                <div 
                  key={index}
                  className={`techGroup-logo-set-dot ${currentLogoSet === index ? 'techGroup-active' : ''}`}
                  onClick={() => setCurrentLogoSet(index)}
                />
              ))}
            </div>
          </div>
          <div className="techGroup-cohere-logos-container">
            {getCurrentLogos().map((logo, index) => (
              <div 
                key={logo.id}
                className="techGroup-cohere-logo"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {logo.src ? (
                  <img 
                    src={logo.src} 
                    alt={logo.alt || logo.name}
                    className="techGroup-logo-image"
                  />
                ) : (
                  <div className="techGroup-logo-placeholder">
                    {logo.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section with Scroll Animation */}
        <div 
          ref={statsRef} 
          className={`techGroup-stats-section ${statsVisible ? 'techGroup-animate-stats' : ''}`}
        >
          <div className="techGroup-stat-card techGroup-stat-left">
            <div className="techGroup-stat-number">250+</div>
            <div className="techGroup-stat-label">Projects Delivered</div>
          </div>
          <div className="techGroup-stat-card techGroup-stat-right">
            <div className="techGroup-stat-number">98%</div>
            <div className="techGroup-stat-label">Client Satisfaction</div>
          </div>
          <div className="techGroup-stat-card techGroup-stat-left">
            <div className="techGroup-stat-number">25+</div>
            <div className="techGroup-stat-label">Global Partners</div>
          </div>
          <div className="techGroup-stat-card techGroup-stat-right">
            <div className="techGroup-stat-number">24/7</div>
            <div className="techGroup-stat-label">Support Available</div>
          </div>
        </div>

        {/* Benefits for Clients Section */}
        <div className={`techGroup-benefits-section ${isVisible ? 'techGroup-animate-slide-up' : ''}`}>
          <h3>Benefits for Clients</h3>
          <div className="techGroup-benefits-grid">
            {clientBenefits.map((benefit, index) => (
              <div 
                key={benefit.id} 
                className={`techGroup-benefit-card ${getCardVisibility(index) ? 'techGroup-active' : ''}`}
                style={{ 
                  backgroundImage: `url(${benefit.backgroundImage})`
                }}
              >
                <div className="techGroup-benefit-dark-overlay"></div>
                <div className="techGroup-benefit-content">
                  {/* Clean icon without box - just the colored icon */}
                  <div className="techGroup-benefit-icon-clean">
                    <FontAwesomeIcon 
                      icon={benefit.icon} 
                      style={{ 
                        color: benefit.iconColor,
                        fontSize: '3rem', // Increased size since no background
                        marginBottom: '1.5rem'
                      }} 
                    />
                  </div>
                  <h4 className="techGroup-benefit-title">{benefit.title}</h4>
                  <p className="techGroup-benefit-description">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Auto-changing Benefits Indicator */}
          <div className="techGroup-benefits-indicator">
            <div className="techGroup-indicator-dots">
              {[0, 1].map((index) => (
                <div 
                  key={index}
                  className={`techGroup-indicator-dot ${activeSuccessStory === index ? 'techGroup-active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;