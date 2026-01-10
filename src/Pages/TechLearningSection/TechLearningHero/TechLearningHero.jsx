import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './TechLearningHero.css';

const TechLearningHero = () => {
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (leftCardRef.current) {
      observer.observe(leftCardRef.current);
    }
    if (rightCardRef.current) {
      observer.observe(rightCardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // WhatsApp booking URL
  const whatsappNumber = '6381759909'; // Replace with your number
  const whatsappMessage = "Hi! I'd like to book a demo for your courses. Can you please provide more information?";
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="tech-hero-section" id="home">
      <div className="tech-hero-container">
        
        {/* Left Card */}
        <div 
          ref={leftCardRef}
          className="tech-side-card tech-card-left"
        >
          <div className="tech-card-icon">
            <i className="fas fa-laptop-code"></i>
          </div>
          <div className="tech-card-content">
            <div className="tech-card-title">Hands-on Projects</div>
            <div className="tech-card-desc">Real-world applications and practical experience</div>
          </div>
        </div>

        {/* Center Content */}
        <div className="tech-hero-center-content">
          <div className="tech-hero-badge">
            <i className="fas fa-rocket"></i> Future Ready Education
          </div>
          
          <h1 className="tech-hero-title">
            upskill for your career
          </h1>
          
          <p className="tech-hero-description">
            Professional courses built with real-world experience. Learn by doing with hands-on projects 
            that prepare you for today's tech industry.
          </p>
          
          <div className="tech-hero-cta-group">
            {/* Using Link component for React Router */}
            <Link 
              to="/allCoursesPage" 
              className="tech-btn-primary"
            >
              <i className="fas fa-play-circle"></i> Start Learning
            </Link>
            
            {/* External link to WhatsApp */}
            <a 
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-btn-secondary"
            >
              <i className="fas fa-calendar-alt"></i> Book Demo
            </a>
          </div>
          
          <div className="tech-hero-stats">
            <div className="tech-stat">
              <div className="tech-stat-number">500+</div>
              <div className="tech-stat-label">Projects</div>
            </div>
            
            <div className="tech-stat">
              <div className="tech-stat-number">10K+</div>
              <div className="tech-stat-label">Students</div>
            </div>
            
            <div className="tech-stat">
              <div className="tech-stat-number">98%</div>
              <div className="tech-stat-label">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div 
          ref={rightCardRef}
          className="tech-side-card tech-card-right"
        >
          <div className="tech-card-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <div className="tech-card-content">
            <div className="tech-card-title">Career Ready for future</div>
            <div className="tech-card-desc">Job-focused skills and portfolio building</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechLearningHero;