import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './OtherSectionCarousel.css';

// Import your existing images
import eLearningImage from '../../assets/5559881.png';
import techGroupImage from '../../assets/7935511.png';
import fullStackImage from '../../assets/6970537.png';

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
    }
  ];

  const handleCardClick = (service, index) => {
    // Only allow navigation if the card is the active (center) one
    if (index === currentIndex && service.clickable) {
      navigate(service.path);
    }
    // If it's a side card, we do nothing (or we could rotate to it, but user asked to only select in middle)
  };

  const nextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextCard();
    }, 4000); // Change card every 4 seconds

    return () => clearInterval(interval);
  }, []);

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
        {/* <div className="carousel-header">
          <h2>Explore Our Services</h2>
          <p>Discover comprehensive solutions tailored for your success</p>
        </div> */}

        <div className="compact-carousel">
          <div className="compact-carousel-track">
            {services.map((service, index) => {
              const position = (index - currentIndex + services.length) % services.length;

              return (
                <div
                  key={service.id}
                  className={`compact-service-card ${position === 0 ? 'active' :
                    position === 1 ? 'next' :
                      position === services.length - 1 ? 'prev' :
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

        <div className="compact-carousel-controls">
          <button className="carousel-btn prev-btn" onClick={prevCard}>‹</button>
          <button className="carousel-btn next-btn" onClick={nextCard}>›</button>
        </div>

        <div className="compact-carousel-indicators">
          {services.map((_, index) => (
            <button
              key={index}
              className={`compact-indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
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