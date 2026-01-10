import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
      clickable: true
    },
    {
      id: 2,
      title: "E-Learning",
      image: eLearningImage,
      path: '/tech-learning',
      description: "Transformative Online Education Experiences",
      clickable: true
    },
    {
      id: 3,
      title: "Upcoming Course",
      image: fullStackImage,
      description: "Java Full Stack Development - Coming Soon",
      clickable: false,
      overlayText: "COMING SOON"
    }
  ];

  const handleCardClick = (service) => {
    if (service.clickable) {
      navigate(service.path);
    }
    // If not clickable, do nothing
  };

  const nextCard = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
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

  return (
    <div className="compact-carousel-section" ref={sectionRef}>
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
                  className={`compact-service-card ${
                    position === 0 ? 'active' : 
                    position === 1 ? 'next' :
                    'hidden'
                  } ${!service.clickable ? 'non-clickable' : ''}`}
                  onClick={() => handleCardClick(service)}
                  ref={addToRefs}
                  style={{ cursor: service.clickable ? 'pointer' : 'default' }}
                >
                  <div className="compact-card-image">
                    <img src={service.image} alt={service.title} />
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
    </div>
  );
};

export default OtherSectionCarousel;