import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoneyBill, faClock, faShieldAlt, faChartLine, faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
// import budgetImage from '../../../assets/image14.png';
// import budgetImage1 from '../../../assets/image16.png';
import statsBgImage from '../../../assets/image21.jfif';
import './TestimonialsSection.css';

import budgetImage from '../../../assets/images/red_bar_chart.png';


// Add icons to the library
library.add(faMoneyBill, faClock, faShieldAlt, faChartLine, faArrowRight);

const testimonials = [
  {
    id: 1,
    name: "Emily C",
    position: "Brandex",
    company: "TechInnovate Inc.",
    text: "Our product packaging now looks market-ready and professional on shelves.",
    subtitle: "label & product Success",
    rating: 5,
    project: "Product & label Design",
    results: "45% increase in operational efficiency",
    backgroundImage: "https://i.pinimg.com/736x/0a/d1/93/0ad19309a59be71b028548801ac38353.jpg"
  },
  {
    id: 2,
    name: "Pavithra S",
    position: "Pavizham Jewellers",
    company: "Global Solutions Ltd.",
    text: "The mobile app simplified our daily operations and customer interactions.",
    subtitle: "Streamlined Mobile Apps",
    rating: 5,
    project: "Mobile App",
    results: "30% reduction in operational costs",
    backgroundImage: "https://i.pinimg.com/736x/fb/5c/24/fb5c245aa5dcf940dc281d0b512ea129.jpg"
  },
  {
    id: 3,
    name: "Malar Herbs",
    position: "Malarvizhi S",
    company: "Creative Minds Agency",
    text: "Promotional creatives helped us increase engagement and walk-ins.",
    subtitle: "Promotion Ads",
    rating: 5,
    project: "Brand Identity & Marketing",
    results: "60% increase in brand recognition",
    backgroundImage: "https://i.pinimg.com/1200x/7a/a1/db/7aa1dbae860dd50acb959ae6a180177f.jpg"
  },
  {
    id: 4,
    name: "Karthikeyan M",
    position: "Gym Life",
    company: "FinTech Solutions",
    text: "The brand looks very professional and trustworthy. Website is easy and informative.",
    subtitle: "Mobile Excellence",
    rating: 5,
    project: "Mobile App Development",
    results: "75% increase in user engagement",
    backgroundImage: "https://i.pinimg.com/1200x/06/a4/22/06a4220eb5c4f337221ccf390c82417e.jpg"
  },
  {
    id: 5,
    name: "DIVYA",
    position: " DIVYA MAKEOVER ",
    company: "Global Solutions Ltd.",
    text: "Our website helped us attract more clients and bookings.",
    subtitle: "WEBSITE Developement ",
    rating: 5,
    project: "WEBSITE Developement ",
    results: "30% reduction in operational costs",
    backgroundImage: "https://i.pinimg.com/1200x/2b/b6/3e/2bb63eb96b47d44977cf2ba77145f127.jpg"
  },
  {
    id: 6,
    name: "PAVIZHAM",
    position: "PAVIZHAM (2025) ",
    company: "Creative Minds Agency",
    text: "Very clean and professional website design.",
    subtitle: "Business / Services ",
    rating: 5,
    project: "WEBSITE Developement",
    results: "60% increase in brand recognition",
    backgroundImage: "https://i.pinimg.com/736x/d1/97/28/d1972816196e5fd237fa24de2ea800ca.jpg"
  },
  {
    id: 7,
    name: "SAY BRIDAL ",
    position: "SAY BRIDAL (2025) ",
    company: "Global Solutions Ltd.",
    text: "Website perfectly matches our bridal brand style.",
    subtitle: "Bridal / Fashion ",
    rating: 5,
    project: "WEBSITE Developement",
    results: "30% reduction in operational costs",
    backgroundImage: "https://i.pinimg.com/736x/6b/24/ba/6b24ba247f92a669d0d9f1f396e167cb.jpg"
  },
  {
    id: 8,
    name: "GREEN PARK SCHOOL",
    position: "GREEN PARK SCHOOL (2025) ",
    company: "Creative Minds Agency",
    text: "Clear and informative website for parents.",
    subtitle: "Education / School ",
    rating: 5,
    project: "WEBSITE Developement",
    results: "60% increase in brand recognition",
    backgroundImage: "https://i.pinimg.com/736x/5b/0a/3b/5b0a3b28176b91223d06a69b0a4b65a9.jpg"
  }
];

// Array of all logo images
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
  { id: 16, src: techLogoOne, alt: "Aara" },
];

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  // const [activeSuccessStory, setActiveSuccessStory] = useState(0);
  const statsRef = useRef(null);

  // Track animation state for each logo position (0-7)
  const [logoAnimationState, setLogoAnimationState] = useState({
    0: { isAnimating: false, phase: 'idle', set: 0 },
    1: { isAnimating: false, phase: 'idle', set: 0 },
    2: { isAnimating: false, phase: 'idle', set: 0 },
    3: { isAnimating: false, phase: 'idle', set: 0 },
    4: { isAnimating: false, phase: 'idle', set: 0 },
    5: { isAnimating: false, phase: 'idle', set: 0 },
    6: { isAnimating: false, phase: 'idle', set: 0 },
    7: { isAnimating: false, phase: 'idle', set: 0 }
  });

  /*
  // Color options for icons
  const iconColors = {
    moneyBill: '#4CAF50',
    clock: '#2196F3',
    shieldAlt: '#FF9800',
    chartLine: '#9C27B0',
    default: '#FFFFFF'
  };
  */

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleNextTestimonial = React.useCallback(() => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, []);

  // Auto slide for testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, [handleNextTestimonial]);

  /*
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSuccessStory((prev) => (prev + 1) % 2);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  */

  // Sequential logo animation
  useEffect(() => {
    let currentLogoIndex = 0;

    const animateNextLogo = () => {
      // Start fade OUT for current logo
      setLogoAnimationState(prev => ({
        ...prev,
        [currentLogoIndex]: { ...prev[currentLogoIndex], isAnimating: true, phase: 'fadeOut' }
      }));

      // After fade out (0.4s), switch to fade in with new set
      setTimeout(() => {
        setLogoAnimationState(prev => {
          const newSet = prev[currentLogoIndex].set === 0 ? 1 : 0;
          return {
            ...prev,
            [currentLogoIndex]: {
              isAnimating: true,
              phase: 'fadeIn',
              set: newSet  // Change to new set immediately
            }
          };
        });

        // After fade in (0.4s), stop animating this logo
        setTimeout(() => {
          setLogoAnimationState(prev => ({
            ...prev,
            [currentLogoIndex]: { ...prev[currentLogoIndex], isAnimating: false, phase: 'idle' }
          }));

          // Move to next logo
          currentLogoIndex = (currentLogoIndex + 1) % 8;

          // Start the next logo animation immediately without delay
          animateNextLogo();

        }, 400); // Fade in duration

      }, 400); // Fade out duration
    };

    // Start the animation cycle
    const timeoutId = setTimeout(animateNextLogo, 2000); // Initial delay

    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array - run once on mount

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // setStatsVisible(true);
          } else {
            // setStatsVisible(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentStatsRef = statsRef.current;
    if (currentStatsRef) {
      observer.observe(currentStatsRef);
    }

    return () => {
      if (currentStatsRef) {
        observer.unobserve(currentStatsRef);
      }
    };
  }, []);

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  /*
  const handlePrevTestimonialOld = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  */



  /*
  // Determine which cards should show content based on activeSuccessStory
  const getCardVisibility = (index) => {
    if (activeSuccessStory === 0) {
      return index < 2;
    } else {
      return index >= 2;
    }
  };
  */

  // Function to get logo class based on id
  const getLogoClass = (id) => {
    // 3 is Pavizham, 10 is Wooden Street
    return [3, 10].includes(id) ? 'techGroup-grid-logo-image-large' : 'techGroup-grid-logo-image';
  };

  // Get logo source based on position layout, and the column's current set
  const getLogoForPosition = (position) => {
    const setNumber = logoAnimationState[position].set;
    const indexInArray = setNumber === 0 ? position : position + 8;
    return logoImages[indexInArray];
  };

  // Get animation class based on logo state
  const getAnimationClass = (position) => {
    const state = logoAnimationState[position];
    if (!state.isAnimating) return '';
    return state.phase === 'fadeOut' ? 'logo-fade-out' : 'logo-fade-in';
  };

  return (
    <section className="techGroup-testimonials-section" id="techGroup-testimonialsSection">
      <div className="techGroup-testimonialSection-container">
        {/* Header */}
        <div className={`techGroup-testimonialSection-header ${isVisible ? 'techGroup-animate-fade-in' : ''}`}>
          <span className="techGroup-benefits-main-badge">Clients Love</span>
          <h2 className="techGroup-testimonials-title">WHAT CLIENTS SAY</h2>
          <p className="techGroup-testimonials-subtitle">
            ENGLORAY is trusted by clients and customers, empowers students, and is strengthened by a dedicated team.
          </p>
          <h4 className='techGroup-testimonials-title' style={{ fontSize: '1.8rem' }}>More Success Stories</h4>
        </div>

        {/* Arrow Controls */}
        <div className="techGroup-stripe-arrows">
          <button onClick={handlePrevTestimonial}>‹</button>
          <button onClick={handleNextTestimonial}>›</button>
        </div>



        {/* STRIPE STYLE CAROUSEL */}
        <div className="techGroup-stripe-carousel-wrapper">
          <div className="techGroup-stripe-carousel">
            {testimonials.map((item, index) => {
              const isActive = index === activeTestimonial;

              return (
                <div
                  key={index}
                  className={`techGroup-stripe-card ${isActive ? 'techGroup-active-card' : ''}`}
                  style={{
                    backgroundImage: `url(${item.backgroundImage})`
                  }}
                >
                  <div className="techGroup-dark-overlay"></div>

                  {isActive && (
                    <div className="techGroup-carousel-container">
                      <div className="techGroup-testimonial-active-card">
                        <div className="techGroup-quote-mark">"</div>
                        <div className="techGroup-testimonial-subtitle">
                          {item.subtitle}
                        </div>
                        <p className="techGroup-testimonial-text">
                          {item.text}
                        </p>
                        <div className="techGroup-testimonial-meta">
                          <div className="techGroup-client-info">
                            <h4 className="techGroup-client-name">
                              {item.name}
                            </h4>
                            <p className="techGroup-client-position">
                              {item.position}
                            </p>
                          </div>
                          <div className="techGroup-project-highlight">
                            <span className="techGroup-project-name">
                              {item.project}
                            </span>
                            <span className="techGroup-project-result">
                              {item.results}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Trusted By Section - Sequential Logo Animation */}
        <div className={`techGroup-trusted-by-section ${isVisible ? 'techGroup-animate-fade-in' : ''}`}>
          <div className="techGroup-trusted-by-header">
            <h3>Trusted by industry leaders and developers worldwide</h3>
          </div>

          <div className="techGroup-grid-logos-container">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((position) => {
              // Get the logo based on logo's current set
              const logo = getLogoForPosition(position);

              // Get animation class for this logo
              const animationClass = getAnimationClass(position);

              return (
                <div key={position} className="techGroup-grid-logo">
                  {logo && (
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className={`${getLogoClass(logo.id)} ${animationClass}`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section - White Background with Transparent Container */}
        <div className="techGroup-stats-wrapper">
          <div className="techGroup-stats-container">
            {/* Background Image inside transparent container */}
            <div
              className="techGroup-stats-bg-image"
              style={{
                backgroundImage: `url(${statsBgImage})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>

            {/* Stats Cards */}
            <div className="techGroup-stats-grid">
              <div className="techGroup-stat-card techGroup-stat-card-one">
                <div className="techGroup-stat-number">250+</div>
                <div className="techGroup-stat-label">PROJECTS DELIVERED</div>
              </div>
              <div className="techGroup-stat-card techGroup-stat-card-two">
                <div className="techGroup-stat-number">98%</div>
                <div className="techGroup-stat-label">CLIENT SATISFACTION</div>
              </div>
              {/* <div className="techGroup-stat-card techGroup-stat-card-three">
                <div className="techGroup-stat-number">25+</div>
                <div className="techGroup-stat-label">GLOBAL<br /> PARTNERS</div>
              </div> */}
              <div className="techGroup-stat-card techGroup-stat-card-four">
                <div className="techGroup-stat-number">24/7</div>
                <div className="techGroup-stat-label">SUPPORT AVAILABLE</div>
              </div>
              {/* New fifth stat card at bottom left */}
              {/* <div className="techGroup-stat-card techGroup-stat-card-five">
                <div className="techGroup-stat-number">15+</div>
                <div className="techGroup-stat-label">INDUSTRY<br /> AWARDS</div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Benefits for Clients Section - UPDATED WITH BADGES INSIDE DESCRIPTION BOXES */}
        <div className={`techGroup-benefits-section ${isVisible ? 'techGroup-animate-slide-up' : ''}`}>
          <div className="techGroup-benefits-slide-grid">

            {/* Card 1 - Branding Plan - With Background Image */}
            <div className="techGroup-slide-card techGroup-card-one"
              style={{
                backgroundImage: 'url(https://i.pinimg.com/1200x/0e/b0/b9/0eb0b9062b54d063c330b66e1b9890e2.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
              <div className="techGroup-card-one-overlay"></div>
              <div className="techGroup-badge techGroup-badge-one">BENEFITS</div>
              <div className="techGroup-card-one-header">Branding <br /> Plan</div>


              {/* Image from assets */}
              {/* <div className="techGroup-card-one-image">
                <img src={budgetImage1} alt="Budget1" className="techGroup-budge1-image" />
              </div> */}

              <div className="techGroup-card-one-footer">
                Engloray builds strong corporate identity through strategic design, consistent messaging, digital presence, and creative storytelling to establish trust and recognition.
              </div>
            </div>

            {/* Card 2 - Agenda - With Background Image and Description */}
            <div className="techGroup-slide-card techGroup-card-two"
              style={{
                backgroundImage: 'url(https://i.pinimg.com/1200x/9b/a7/a6/9ba7a6f8ff3d337564ee1fe7d97c74b1.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>

              <div className="techGroup-card-two-overlay"></div>

              <div className="techGroup-badge techGroup-badge-two">BENEFITS</div>

              <div className="techGroup-card-two-header">Agenda</div>

              {/* New description added below header */}
              <div className="techGroup-card-two-description">
                Engloray agenda outlines strategic planning, branding initiatives, digital development goals, innovation priorities, and collaborative steps guiding sustainable corporate growth.
              </div>

              <div className="techGroup-card-two-tags">

                <span style={{ background: "#f23030", color: "white" }}>Learning</span>

                <span style={{ background: "white", color: "#f23030" }}>App Development</span>

                <span style={{ background: "#f23030", color: "white" }}>Web Development</span>

                <span style={{ background: "white", color: "#f23030" }}>UI/UX</span>

                <span style={{ background: "white", color: "#f23030" }}>Brand Strategy</span>

                <span style={{ background: "#f23030", color: "white" }}>Market Research</span>

                <span style={{ background: "white", color: "#f23030" }}>Visual Identity</span>

                <span style={{ background: "#f23030", color: "white" }}>Product Branding</span>

              </div>

            </div>
            {/* Card 3 - Schedule & Deadlines - With 2x2 Grid on Right Side and Bottom Left Description */}
            <div className="techGroup-slide-card techGroup-card-three">
              <div className="techGroup-badge techGroup-badge-three">BENEFITS</div>
              <div className="techGroup-card-three-header">Quality &<br />Assurance</div>

              {/* Arrow with transparent background */}
              <div className="techGroup-card-three-arrow-section">
                <div className="techGroup-arrow-container">
                  <FontAwesomeIcon icon={faArrowRight} className="techGroup-arrow-icon" />
                </div>
              </div>

              {/* Three-line description at bottom left corner */}
              <div className="techGroup-card-three-bottom-description">
                <div className="techGroup-bottom-description-line">
                  Ensuring reliable, consistent product performance always,
                </div>
                <div className="techGroup-bottom-description-line">
                  Preventing  through  testing,
                </div>
                <div className="techGroup-bottom-description-line">
                  Maintaining standards for dependable customer satisfaction..
                </div>
              </div>

              {/* 2x2 Grid on Right Side with Badges Inside Description Boxes */}
              <div className="techGroup-card-three-grid-container">
                <div className="techGroup-card-three-grid">
                  <div className="techGroup-card-three-grid-item">
                    <div className="techGroup-card-three-box-with-badge">
                      <span className="techGroup-inner-badge">Testing</span>
                      <div className="techGroup-card-three-grid-box">
                        Systematic testing verifies functionality, identifies defects early, and ensures software performs reliably across different environments.
                      </div>
                    </div>
                  </div>
                  <div className="techGroup-card-three-grid-item">
                    <div className="techGroup-card-three-box-with-badge">
                      <span className="techGroup-inner-badge">Standards</span>
                      <div className="techGroup-card-three-grid-box">
                        Defined standards guide development processes, ensuring consistency, reliability, and compliance with industry best practices.
                      </div>
                    </div>
                  </div>
                  <div className="techGroup-card-three-grid-item">
                    <div className="techGroup-card-three-box-with-badge">
                      <span className="techGroup-inner-badge">Monitoring</span>
                      <div className="techGroup-card-three-grid-box">
                        Continuous monitoring tracks system performance, detects anomalies, and maintains stable, reliable operations after deployment.
                      </div>
                    </div>
                  </div>
                  <div className="techGroup-card-three-grid-item">
                    <div className="techGroup-card-three-box-with-badge">
                      <span className="techGroup-inner-badge">Improvement</span>
                      <div className="techGroup-card-three-grid-box">
                        Ongoing improvement analyzes feedback, resolves recurring issues, and strengthens product quality through iterative refinement.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - Budget - With Image and Badges Inside Description Boxes */}
            <div className="techGroup-slide-card techGroup-card-four">
              <div className="techGroup-badge techGroup-badge-four">BENEFITS</div>
              <div className="techGroup-card-four-header">Time Savings</div>

              {/* Image from assets */}
              <div className="techGroup-card-four-image">
                <img src={budgetImage} alt="Budget" className="techGroup-budget-image" />
              </div>

              {/* Three description boxes with badges inside */}
              <div className="techGroup-card-four-layout">
                <div className="techGroup-card-four-boxes">
                  <div className="techGroup-card-four-box-item">
                    <div className="techGroup-card-four-box-with-badge">
                      <span className="techGroup-inner-badge-four">Marketing</span>
                      <div className="techGroup-card-four-box">
                        Marketing connects products with customers through strategy,
                        storytelling, branding, promotion, and data-driven audience engagement.
                      </div>
                    </div>
                  </div>
                  <div className="techGroup-card-four-box-item">
                    <div className="techGroup-card-four-box-with-badge">
                      <span className="techGroup-inner-badge-four">Resources</span>
                      <div className="techGroup-card-four-box">
                        Resources include people, technology, capital, knowledge,
                        and tools organizations use to achieve goals efficiently.
                      </div>
                    </div>
                  </div>
                  <div className="techGroup-card-four-box-item">
                    <div className="techGroup-card-four-box-with-badge">
                      <span className="techGroup-inner-badge-four">ROI</span>
                      <div className="techGroup-card-four-box">
                        RDI focuses on researching ideas, developing solutions,
                        and innovating technologies to create competitive business value.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;