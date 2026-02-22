import React from 'react';
import { Link } from 'react-router-dom';
import './TechLearningHero.css';

const TechLearningHero = () => {
  // WhatsApp booking URL
  const whatsappNumber = '6381759909'; // Replace with your number
  const whatsappMessage = "Hi! I'd like to book a demo for your courses. Can you please provide more information?";
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="tech-hero-section" id="home">
      <div className="tech-hero-container">

        {/* Left Column: Content */}
        <div className="tech-hero-left">
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

        {/* Right Column: Image & Floating Elements */}
        <div className="tech-hero-right">
          <div className="tech-hero-image-wrapper">
            {/* Placeholder image since generation failed - using a high quality Unsplash student image */}
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Happy Student Learning"
              className="tech-student-img"
            />
          </div>

          {/* Floating Badges */}
          <div className="tech-floating-badge badge-top-right">
            <div className="tech-badge-icon">
              <i className="fas fa-user-graduate"></i>
            </div>
            <div className="tech-badge-text">
              <h4>10K+</h4>
              <p>Active Students</p>
            </div>
          </div>

          <div className="tech-floating-badge badge-bottom-left">
            <div className="tech-badge-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="tech-badge-text">
              <h4>4.9</h4>
              <p>Course Rating</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechLearningHero;