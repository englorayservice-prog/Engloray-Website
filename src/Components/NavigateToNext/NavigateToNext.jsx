import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavigateToNext.css';

// Import your images
import eLearningImage from '../../assets/eLearning.png';
import eCommerceImage from '../../assets/eCommerce.jpg';

const NavigateToNext = () => {
  const navigate = useNavigate();
  const cardRefs = useRef([]);
  const sectionRef = useRef(null);

  const handleElearningClick = () => {
    navigate('/elearning');
  };

  const handleEcommerceClick = () => {
    navigate('/ecommerce');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            // Remove the class when element leaves viewport to re-animate on scroll up
            entry.target.classList.remove('in-view');
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of element is visible
        rootMargin: '0px 0px -10% 0px' // Trigger a bit earlier
      }
    );

    // Observe all cards
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  // Add ref to each card
  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <div className="services-section" ref={sectionRef}>
      <div className="services-container">
        <div className="services-grid">
          {/* E-Learning Card */}
          <div 
            className="service-card" 
            onClick={handleElearningClick}
            ref={addToRefs}
          >
            <div className="card-image">
              <img src={eLearningImage} alt="E-Learning Platform" />
              <div className="card-overlay">
                <div className="card-text">E-Learning Platform</div>
              </div>
            </div>
          </div>

          {/* E-Commerce Card */}
          <div 
            className="service-card" 
            onClick={handleEcommerceClick}
            ref={addToRefs}
          >
            <div className="card-image">
              <img src={eCommerceImage} alt="E-Commerce Solution" />
              <div className="card-overlay">
                <div className="card-text">E-Commerce Solution</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigateToNext;