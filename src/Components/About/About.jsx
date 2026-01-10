import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './About.css';
import { faChartBar, faChartColumn, faGraduationCap, faHandshake, faLaptop, faLaptopCode, faPeopleGroup, faStar } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const floatingIconsRef = useRef(null);

  useEffect(() => {
    // All 5 icons
    const icons = ['🚀', '💻', '🎓', '📊', '🌟'];
    const container = floatingIconsRef.current;
    
    if (!container) return;

    // Clear any existing icons first
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    icons.forEach((icon, index) => {
      const iconElement = document.createElement('div');
      iconElement.className = 'floating-icon';
      iconElement.textContent = icon;
      iconElement.id = `icon-${index}`; // Add ID for debugging
      
      // Strategic positions
      const positions = [
        { left: '5%', top: '10%' },
        { left: '90%', top: '20%' },
        { left: '10%', top: '85%' },
        { left: '85%', top: '80%' },
        { left: '50%', top: '40%' }
      ];
      
      iconElement.style.left = positions[index].left;
      iconElement.style.top = positions[index].top;
      
      // Fix: Make sure animation names match CSS
      const animation = index % 2 === 0 ? 'floatDiagonalVerySlow' : 'floatDiagonalReverseVerySlow';
      const duration = 40 + (index * 3);
      const delay = index * 5;
      
      iconElement.style.animation = `${animation} ${duration}s infinite linear ${delay}s`;
      iconElement.style.animationName = animation; // Explicitly set animation-name
      
      // Colors
      const colors = ['#3b82f6', '#2563eb', '#1d4ed8', '#3b82f6', '#2563eb'];
      iconElement.style.color = colors[index];
      iconElement.style.opacity = '0.18';
      
      // Debug: Add border to see if element is created
      // iconElement.style.border = '1px solid red';
      
      container.appendChild(iconElement);
    });

    // Verify icons are created
    console.log(`Created ${icons.length} floating icons`);

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <div className="about-section" id="about">
      {/* Floating Icons Container */}
      <div className="floating-icons-container" ref={floatingIconsRef}></div>
      
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">
             <span className="title-accent">ABOUT</span>
          </h2>
          <p className="about-subtitle">
            Bridging technology and education for sustainable business growth
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              Engloray is a <span className="highlight">dynamic technology and education group</span> that 
              bridges the gap between business innovation and learning excellence through 
              comprehensive digital solutions.
            </p>
            
            <div className="about-features">
              <div className="feature-card technology-card">
                <div className="feature-card-header">
                  <div className="feature-icon-container">
                    <FontAwesomeIcon 
                        icon={faLaptopCode} 
                        style={{color: "#000000ff", fontSize: "2rem"}} 
                    /> 
                  </div>
                  <h3>Enterprise Technology</h3>
                </div>
                <p>Advanced digital solutions and transformation tools designed for modern business challenges and scalability.</p>
              </div>
              
              <div className="feature-card education-card">
                <div className="feature-card-header">
                  <div className="feature-icon-container">
                    <FontAwesomeIcon 
                        icon={faGraduationCap} 
                        style={{color: "#de1717ff", fontSize: "2rem"}} 
                    />
                  </div>
                  <h3>Learning Platforms</h3>
                </div>
                <p>Comprehensive educational solutions that empower organizations and individuals with future-ready skills.</p>
              </div>
            </div>
            
            <div className="mission-statement">
              <p className="about-mission">
                We combine <span className="mission-highlight">innovative technology</span> with 
                <span className="mission-highlight"> educational expertise</span> to drive measurable 
                <span className="mission-highlight"> growth and transformation</span> for businesses and learners worldwide.
              </p>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="visual-container">
              <h4 className="visual-title">Our Expertise</h4>
              <div className="visual-grid">
                <div className="visual-item">
                  <span>Digital Innovation</span>
                </div>
                <div className="visual-item">
                  <span>Learning Solutions</span>
                </div>
                <div className="visual-item">
                  <span>Business Growth</span>
                </div>
                <div className="visual-item">
                  <span>Technology Stack</span>
                </div>
                <div className="visual-item">
                  <span>Customer-Centric Approach</span>
                </div>
                <div className="visual-item">
                  <span>Quality & Security</span>
                </div>
                <div className="visual-item">
                  <span>Automation & Workflow Optimization</span>
                </div>
                <div className="visual-item">
                  <span>Support & Continuous Improvement</span>
                </div>
                <div className="visual-item">
                  <span>Digital Transformation Strategy</span>
                </div>
                <div className="visual-item">
                  <span>IT Consulting & Tech Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section - Now with continuous floating animation */}
        <div className="about-stats">
          <div className="stat-item">
            <div className="stat-icon">
               <FontAwesomeIcon 
                        icon={faChartColumn} 
                        style={{color: "#de1717ff", fontSize: "2rem"}} 
                    />
            </div>
            <h4>230+</h4>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
               <FontAwesomeIcon 
                        icon={faPeopleGroup} 
                        style={{color: "#820580ff", fontSize: "2rem"}} 
                    />
            </div>
            <h4>170+</h4>
            <p>Happy Clients</p>
          </div>
          <div className="stat-item">
            {/* <div className="stat-icon">🤝</div> */}
            <div className="stat-icon">
               <FontAwesomeIcon 
                        icon={faHandshake} 
                        style={{color: "#cbd123ff", fontSize: "2rem"}} 
                    />
            </div>
            <h4>1.7k</h4>
            <p>Learners Trained</p>
          </div>
          <div className="stat-item">
            {/* <div className="stat-icon">⭐</div> */}
            <div className="stat-icon">
               <FontAwesomeIcon 
                        icon={faStar} 
                        style={{color: "#8fde17ff", fontSize: "2rem"}} 
                    />
            </div>
            <h4>20+</h4>
            <p>Industries Served</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;