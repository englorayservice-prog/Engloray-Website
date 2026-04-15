import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import './About.css';
import { FaCode, FaLightbulb, FaUserGraduate } from "react-icons/fa";
// { faChartColumn, faGraduationCap, faHandshake, faLaptopCode, faPeopleGroup, faStar } import removed

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const floatingIconsRef = useRef(null);

  useLayoutEffect(() => {
    // 1️⃣ ICONS GENERATION REMOVED - CONFIRMED
    // The floating background icons logic has been removed as per request.

    const ctx = gsap.context(() => {
      // 2️⃣ PREMIUM PRESETS
      const revealDefaults = {
        opacity: 0,
        y: 40,
        scale: 0.98,
        filter: "blur(8px)",
        ease: "power3.out",
        duration: 1
      };

      const revealTo = {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)"
      };

      // 3️⃣ PARALLAX ICONS REMOVED

      // 4️⃣ SEQUENTIAL CONTENT REVEAL (Reversible)
      const triggerDefaults = {
        start: "top 85%",
        toggleActions: "play reverse play reverse"
      };

      // -- Header --
      gsap.fromTo('.about-header', revealDefaults, {
        ...revealTo,
        scrollTrigger: { trigger: '.about-header', ...triggerDefaults }
      });

      // -- Description --
      gsap.fromTo('.about-description', revealDefaults, {
        ...revealTo,
        scrollTrigger: { trigger: '.about-description', ...triggerDefaults }
      });



      // -- Visual Items (Grid Stagger) --
      gsap.fromTo('.visual-item', revealDefaults, {
        ...revealTo,
        stagger: 0.05,
        scrollTrigger: { trigger: '.visual-grid', ...triggerDefaults }
      });

      // -- Stats (Stagger + Counter) --
      const statsTimeline = gsap.timeline({
        scrollTrigger: { trigger: '.about-stats', ...triggerDefaults }
      });

      statsTimeline.fromTo('.stat-item', revealDefaults, {
        ...revealTo,
        stagger: 0.15
      });

    }, sectionRef);

    // Safety refresh
    setTimeout(() => ScrollTrigger.refresh(), 100);

    return () => ctx.revert();
  }, []);

  return (
    <div className="about-section" id="about" ref={sectionRef}>
      {/* Floating Icons Container */}
      {/* Floating Icons Container Removed */}

      <div className="about-container">
        <div className="about-header">
          <span className="title-accent">ABOUT ENGLORAY</span>
          <h2 className="about-title">
            Empowering businesses through technology & education
          </h2>
          <p className="about-subtitle">
            Engloray is a dynamic technology and education group that bridges the gap between business innovation and learning excellence through comprehensive digital solutions.
          </p>
          <button className="get-started-btn">
            Get Started
            <span className="btn-icon">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </div>

        <div className="about-content">
          <div className="about-text">
            {/* <p className="about-description">
              Engloray is a <span className="highlight">dynamic technology and education group</span> that
              bridges the gap between business innovation and learning excellence through
              comprehensive digital solutions.
            </p> */}
            <div className="about-visual">
              <div className="about-services-list">
                <span className="service-pill">Discovery & Strategy</span>
                <span className="service-pill">Branding & Identity</span>
                <span className="service-pill">Consultancy</span>
                <span className="service-pill">Ideation & Concepting</span>
                <span className="service-pill">Digital Transformation</span>
                <span className="service-pill">Customer Experience</span>

                <div className="service-stat">
                  <h4>230+</h4>
                  <p>Project Completed</p>
                  <h4>170+</h4>
                  <p>Happy Clients</p>
                  <h4>1.7k</h4>
                  <p>Learners Trained</p>
                  <h4>20+</h4>
                  <p>Industries Served</p>
                </div>
              </div>
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

            <div className="about-features">
              <motion.div
                className="technology-card"
                initial={{ opacity: 0, y: 44, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="feature-card-header">
                  <div className="feature-icon-container">
                    <FaCode />
                  </div>
                  <h3>Enterprise Technology</h3>
                </div>
                <p>
                  Drive innovation with bespoke software engineering and AI-driven transformation.
                  Our enterprise solutions focus on architectural excellence, cloud scalability,
                  and seamless integration of emerging tech into your core operations for
                  unmatched competitive advantage.Empowering your business with future-ready digital ecosystems that evolve with market demands.
                </p>
              </motion.div>

              <motion.div
                className="about-mission-card"
                initial={{ opacity: 0, y: 44, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="feature-card-header">
                  <div className="feature-icon-container">
                    <FaLightbulb />
                  </div>
                  <h3>Empowering Growth</h3>
                </div>
                <p className="about-mission">
                  We combine innovative technology with
                  educational expertise to drive measurable
                  growth and transformation
                </p>
              </motion.div>

              <motion.div
                className="education-card"
                initial={{ opacity: 0, y: 44, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="feature-card-header">
                  <div className="feature-icon-container">
                    <FaUserGraduate />
                  </div>
                  <h3>Learning Platforms</h3>
                </div>
                <p>Comprehensive educational solutions that empower organizations and individuals with future-ready skills.</p>
              </motion.div>
            </div>
          </div>

          {/* <div className="about-visual">
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
          </div> */}
        </div>

        {/* Stats Section - Now with continuous floating animation */}
        {/* <div className="about-stats">
          <div className="stat-item">
            {/* Icon Removed */}
        {/* <h4>230+</h4>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item"> */}
        {/* Icon Removed */}
        {/* <h4>170+</h4>
            <p>Happy Clients</p>
          </div>
          <div className="stat-item"> */}
        {/* <div className="stat-icon">🤝</div> */}
        {/* Icon Removed */}
        {/* <h4>1.7k</h4>
            <p>Learners Trained</p>
          </div>
          <div className="stat-item"> */}
        {/* <div className="stat-icon">⭐</div> */}
        {/* Icon Removed */}
        {/* <h4>20+</h4>
            <p>Industries Served</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;