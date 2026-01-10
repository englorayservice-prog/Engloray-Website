import React, { useEffect, useState, useRef } from 'react';
import './DoubleMarquees.css';
import buyerImage from '../../assets/bg1.jpeg';

const DoubleMarquees = () => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  const techServices = [
    "Graphic Designer", "Ui/Ux Designer", "Website Developer", "Software Developer"
  ];

  const eLearningSubjects = [
    "Graphic Design & Branding", "Ui/Ux Design", "Digital Marketing",
    "FullStack Development", "AI Creative Intelligence", "Website Development"
  ];

 
  const handleMouseMove = (e) => {
    const el = containerRef.current;

    // 🧱 FULL GUARD — prevents ALL crashes
    if (!el || typeof el.style === 'undefined') return;

    const x = (e.clientX / window.innerWidth) * 5 - 2.5;
    const y = (e.clientY / window.innerHeight) * 5 - 2.5;

    el.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
  };



  return (
    <div 
    ref={containerRef}
    onMouseMove={handleMouseMove}
      className="dual-marquee-container"
      style={{
        backgroundImage: `url(${buyerImage})`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Elements */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      {/* Particle Effects - RESTORED */}
      <div className="particles">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="particle" style={{
            '--delay': `${i * 0.2}s`,
            '--x': `${Math.random() * 100}px`,
            '--duration': `${15 + Math.random() * 10}s`,
            '--size': `${2 + Math.random() * 2}px`,
            left: `${Math.random() * 100}%`
          }}></div>
        ))}
      </div>

      {/* Content */}
      <div className="marquee-wrapper">
        {/* Main Title */}
        <div className="main-title-container">
          <div className="main-title">
            <h2 className="title-text">Our Expertise & Learning</h2>
            <div className="title-underline">
              <div className="underline-animation"></div>
            </div>
            <p className="title-subtitle">
              Discover our comprehensive services and extensive e-learning curriculum
            </p>
          </div>
        </div>

        {/* Static Titles Section */}
        <div className="marquee-titles">
          <div className="marquee-title-item tech-title">
            <div className="title-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7L12 3L4 7L12 11L20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.5 4.5V9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 11V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 21L4 17V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 17V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 17L12 21L4 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.5 9.5L12 12.5L5.5 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Tech Group Services</h3>
            <div className="title-badge">
              <span>{techServices.length}+ Internships</span>
            </div>
          </div>
          <div className="marquee-title-item tech-learning-title">
            <div className="title-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>E-Learning Subjects</h3>
            <div className="title-badge">
              <span>{eLearningSubjects.length}+ Courses</span>
            </div>
          </div>
        </div>

        {/* Scrolling Content Section */}
        <div className="marquee-content-wrapper">
          {/* Tech Services - Scrolls left to right - RED THEME */}
          <div className="marquee-content tech-content">
            <div className="marquee-gradient-left"></div>
            <div className="marquee-gradient-right"></div>
            <div className="marquee-track tech-track">
              {techServices.concat(techServices).map((service, index) => (
                <div key={index} className="marquee-item tech-item">
                  <div className="item-icon"></div>
                  <span>{service}</span>
                  <div className="item-glow"></div>
                </div>
              ))}
            </div>
          </div>

          {/* E-Learning - Scrolls right to left - BLUE THEME */}
          <div className="marquee-content learning-content">
            <div className="marquee-gradient-left"></div>
            <div className="marquee-gradient-right"></div>
            <div className="marquee-track learning-track">
              {eLearningSubjects.concat(eLearningSubjects).map((subject, index) => (
                <div key={index} className="marquee-item learning-item">
                  <div className="item-icon"></div>
                  <span>{subject}</span>
                  <div className="item-glow"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default DoubleMarquees;