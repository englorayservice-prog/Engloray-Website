import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './OtherSectionCarousel.css';

// Import your existing images
import eLearningImage from '../../assets/5559881.png';
import techGroupImage from '../../assets/7935511.png';
import fullStackImage from '../../assets/6970537.png';
// Add new image for RayMart (update this path to your actual image)
import rayMartImage from '../../assets/ray mart.png'; // Change this to your actual image path

const OtherSectionCarousel = () => {
  const navigate = useNavigate();
  const cardRefs = useRef([]);
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      id: 1,
      title: "Tech Group",
      image: techGroupImage,
      path: '/tech-group',
      description: "Advanced Technology Solutions for Modern Businesses",
      clickable: true,
      imgScale: 1.05,
      imgHoverScale: 1.15,
      imgFit: 'contain',
      cardHeight: '360px' // Slightly decreased height for this image
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
    },
    {
      id: 4,
      title: "RayMart",
      image: rayMartImage, // Make sure to add your image file
      path: '/raymartPage',
      description: "Your One-Stop Digital Marketplace for Everything",
      clickable: true,
      imgScale: 1.05,
      imgHoverScale: 1.15,
      imgFit: 'contain',
      cardHeight: '380px'
    }
  ];

  const handleCardClick = (e, service, index) => {
    // If the click came from a navigation button or child control, don't trigger card navigation
    if (e && e.target && (e.target.closest('.osc-controls') || e.target.closest('.osc-nav-btn'))) {
      return;
    }

    if (index === currentIndex) {
      if (service.clickable && service.path) {
        navigate(service.path);
      }
    } else {
      setCurrentIndex(index);
    }
  };

  const nextCard = (e) => {
    if (e) {
      if (e.preventDefault) e.preventDefault();
      if (e.stopPropagation) e.stopPropagation();
    }
    setCurrentIndex((prevIndex) =>
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCard = (e) => {
    if (e) {
      if (e.preventDefault) e.preventDefault();
      if (e.stopPropagation) e.stopPropagation();
    }
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  // Auto-rotate carousel - resets timer every time currentIndex changes (manual click or auto tick)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === services.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval);
  }, [currentIndex, services.length]);

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
      className="osc-section"
      id="other-section-carousel"
      ref={sectionRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="osc-container">
        <div className="osc-carousel">
          <div className="osc-track">
            {services.map((service, index) => {
              const position = (index - currentIndex + services.length) % services.length;

              return (
                <div
                  key={service.id}
                  className={`osc-card ${position === 0 ? 'active' :
                    position === 1 ? 'next' :
                      position === services.length - 1 ? 'prev' :
                        'hidden'
                    } ${!service.clickable ? 'non-clickable' : ''}`}
                  onClick={(e) => handleCardClick(e, service, index)}
                  ref={addToRefs}
                  style={{
                    cursor: 'pointer',
                    '--img-scale': service.imgScale || 1,
                    '--img-hover-scale': service.imgHoverScale || 1.1,
                    '--card-height': service.cardHeight || '380px'
                  }}
                >
                  <div className="osc-card-image">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="osc-zoom-image"
                      style={{ objectFit: service.imgFit || 'contain' }}
                    />
                    {!service.clickable && (
                      <div className="osc-coming-soon-overlay">
                        <div className="osc-coming-soon-badge">COMING SOON</div>
                      </div>
                    )}
                    <div className="osc-card-overlay">
                      <div className="osc-card-content">
                        <div className="osc-card-text">
                          <h3>{service.title}</h3>
                          <p>{service.description}</p>
                        </div>
                        {service.clickable ? (
                          <div className="osc-card-cta">
                            <span className="osc-cta-button">Learn More</span>
                          </div>
                        ) : (
                          <div className="osc-card-cta">
                            <span className="osc-coming-soon-button">Notify Me</span>
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

        <div className="osc-indicators">
          {services.map((_, index) => (
            <button
              key={index}
              className={`osc-indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to ${services[index].title} slide`}
              aria-current={index === currentIndex}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows placed AFTER osc-container in DOM order so they always render on top */}
      <div className="osc-controls">
        <button
          type="button"
          className="osc-nav-btn osc-prev-btn"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            prevCard(e);
          }}
          aria-label="Previous service"
        >
          ‹
        </button>
        <button
          type="button"
          className="osc-nav-btn osc-next-btn"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            nextCard(e);
          }}
          aria-label="Next service"
        >
          ›
        </button>
      </div>

      {/* Scrolling Text Marquee */}
      <div className="osc-marquee-container">
        <div className="osc-marquee-track">
          <span className="osc-marquee-text">{marqueeText}</span>
          <span className="osc-marquee-text">{marqueeText}</span>
          <span className="osc-marquee-text">{marqueeText}</span>
          <span className="osc-marquee-text">{marqueeText}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default OtherSectionCarousel;