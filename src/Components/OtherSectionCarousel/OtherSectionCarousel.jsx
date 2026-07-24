import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './OtherSectionCarousel.css';
// Import your existing images
import eLearningImage from '../../assets/5559881.png';
import techGroupImage from '../../assets/7935511.png';
import fullStackImage from '../../assets/6970537.png';

const AUTOPLAY_DELAY = 4000;

const OtherSectionCarousel = () => {
  const navigate = useNavigate();
  const cardRefs = useRef([]);
  const sectionRef = useRef(null);
  const autoplayRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      id: 1,
      title: "Tech Group",
      image: techGroupImage,
      path: '/features',
      description: "Advanced Technology Solutions for Modern Businesses",
      clickable: true,
      imgScale: 1.05,
      imgHoverScale: 1.15,
      imgFit: 'contain',
      cardHeight: '360px'
    },
    {
      id: 2,
      title: "E-Learning",
      image: eLearningImage,
      path: '/tech-learning',
      description: "Transformative Online Education Experiences",
      clickable: true,
      imgScale: 1.05,
      imgHoverScale: 1.15,
      imgFit: 'contain'
    },
    {
      id: 3,
      title: "AI-Powered Branding",
      image: fullStackImage,
      description: "Transform your brand with intelligent design, automation, and data-driven creativity powered by AI.",
      clickable: false,
      overlayText: "COMING SOON",
      imgScale: 1.03,
      imgHoverScale: 1.1,
      imgFit: 'contain'
    }
  ];

  const total = services.length;

  const nextCard = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    console.error(">>> NEXT BUTTON CLICKED! Previous index:", currentIndex);
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevCard = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    console.error(">>> PREV BUTTON CLICKED! Previous index:", currentIndex);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const goToIndex = (index) => {
    console.error(">>> GO TO INDEX CLICKED:", index);
    setCurrentIndex(index);
  };

  const handleCardClick = (service, index) => {
    console.error(">>> CARD CLICKED:", service.title, "index:", index, "active:", index === currentIndex);
    if (index === currentIndex && service.clickable) {
      navigate(service.path);
    }
  };

  // Simple clean autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, [total]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  const marqueeText = "Brand Strategy ✦ Identity Systems ✦ Logo Design ✦ UI/UX Excellence ✦ Growth Marketing ✦ Digital Campaigns ✦ Creative Execution ✦ Performance Branding ✦ Experience Design ✦ Market Differentiation ✦ Conversion Optimization ✦ Social Branding ✦ Scalable Growth ✦";

  return (
    <motion.div
      className="compact-carousel-section"
      ref={sectionRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="compact-carousel-container">
        <div className="compact-carousel">
          <div className="compact-carousel-track">
            {services.map((service, index) => {
              const position = (index - currentIndex + total) % total;

              return (
                <div
                  key={service.id}
                  className={`compact-service-card ${
                    position === 0 ? 'active' :
                    position === 1 ? 'next' :
                    position === total - 1 ? 'prev' :
                    'hidden'
                  } ${!service.clickable ? 'non-clickable' : ''}`}
                  onClick={() => handleCardClick(service, index)}
                  ref={addToRefs}
                  style={{
                    cursor: (service.clickable && index === currentIndex) ? 'pointer' : 'default',
                    '--img-scale': service.imgScale || 1,
                    '--img-hover-scale': service.imgHoverScale || 1.1,
                    '--card-height': service.cardHeight || '380px'
                  }}
                >
                  <div className="compact-card-image">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="zoom-image"
                      style={{ objectFit: service.imgFit || 'contain' }}
                    />
                    {!service.clickable && (
                      <div className="coming-soon-overlay">
                        <div className="coming-soon-badge">COMING SOON</div>
                      </div>
                    )}
                    <div className="compact-card-overlay">
                      <div className="compact-card-content">
                        <div className="compact-card-text">
                          <h3>{service.title}</h3>
                          <p>{service.description}</p>
                        </div>
                        {service.clickable ? (
                          <div className="compact-card-cta">
                            <span className="cta-button">Learn More</span>
                          </div>
                        ) : (
                          <div className="compact-card-cta">
                            <span className="coming-soon-button">Notify Me</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="compact-carousel-bottom-nav">
          <button
            type="button"
            className="carousel-bottom-btn prev-btn"
            onClick={(e) => {
              console.error(">>> PREV BUTTON CLICKED IN UI");
              prevCard(e);
            }}
            aria-label="Previous service"
          >
            ‹
          </button>

          <div className="compact-carousel-indicators" role="tablist" aria-label="Select service">
            {services.map((service, index) => (
              <button
                key={service.id}
                type="button"
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Show ${service.title}`}
                className={`compact-indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToIndex(index)}
              />
            ))}
          </div>

          <button
            type="button"
            className="carousel-bottom-btn next-btn"
            onClick={(e) => {
              console.error(">>> NEXT BUTTON CLICKED IN UI");
              nextCard(e);
            }}
            aria-label="Next service"
          >
            ›
          </button>
        </div>
      </div>

      {/* Scrolling Text Marquee */}
      <div className="scrolling-marquee-container">
        <div className="scrolling-marquee-track">
          <span className="marquee-text">{marqueeText}</span>
          <span className="marquee-text">{marqueeText}</span>
          <span className="marquee-text">{marqueeText}</span>
          <span className="marquee-text">{marqueeText}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default OtherSectionCarousel;