import React, { useLayoutEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './DoubleMarquees.css';
import buyerImage from '../../assets/bg1.jpeg';
import characterIllustration from '../../assets/character-illustration.png';
import expertiseBg from '../../assets/OurExperise&Learning.png';

gsap.registerPlugin(ScrollTrigger);

const DoubleMarquees = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const shapesRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const techTrackRef = useRef(null);
  const learningTrackRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Force fully visible on all devices
      gsap.set(containerRef.current, {
        opacity: 1,
        scale: 1,
        filter: "none"
      });

      // 2️⃣ REFLECTION SWEEP
      gsap.to('.reflection-overlay', {
        x: '200%',
        duration: 6,
        repeat: -1,
        ease: "none",
        delay: 1
      });

      // 3️⃣ ITEM SHIMMER (Subtle continuous flow)
      gsap.to('.item-shimmer', {
        x: '200%',
        duration: 3,
        repeat: -1,
        ease: "sine.inOut",
        stagger: {
          each: 0.2,
          from: "random"
        }
      });

      // 4️⃣ GLOW PULSE (Maintained)
      gsap.to('.item-glow', {
        opacity: 0.6,
        scale: 1.3,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.1,
          from: "random"
        }
      });

      // 5️⃣ 3D TILT DASHBOARD EFFECT (Desktop Only)
      if (window.innerWidth > 768) {
        containerRef.current.addEventListener('mousemove', (e) => {
          const rect = containerRef.current.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          // Calculate slight rotation (max 3-5 degrees)
          const rotateX = ((y - centerY) / centerY) * -3;
          const rotateY = ((x - centerX) / centerX) * 3;

          gsap.to(containerRef.current, {
            rotationX: rotateX,
            rotationY: rotateY,
            scale: 1.01,
            duration: 0.5,
            ease: "power3.out",
            overwrite: "auto"
          });

          // Parallax for inner elements
          gsap.to(shapesRef.current, { x: rotateY * 15, y: -rotateX * 15, duration: 0.5 });
          gsap.to(titleRef.current, { x: rotateY * 5, y: -rotateX * 5, duration: 0.5 });
        });

        // Reset on leave
        containerRef.current.addEventListener('mouseleave', () => {
          gsap.to(containerRef.current, {
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            overwrite: "auto"
          });
          gsap.to([shapesRef.current, titleRef.current], { x: 0, y: 0, duration: 0.8 });
        });
      }

      // 6️⃣ MARQUEE LOOP
      // Replaced the GSAP logic completely!
      // The tracks are now animated entirely via pure CSS exactly like 'marquee-text'.

      // Scroll speed modifier removed to keep a constant, slow pace


    }, containerRef);
    return () => ctx.revert();
  }, []);

  const techServices = [
    "Graphic Design & Branding", "FullStack Development", "Ui/Ux Design", "Saas", "CRM", "ERP",
    "AI Creative Intelligence", "Website Development", "Software Development",
    "Digital Marketing"

  ];

  const eLearningSubjects = [
    "Graphic Designer", "Ui/Ux Designer", "FullStack Developer", "AI Developer", "Website Developer", "Software Developer", "Digital Marketer"
  ];

  // Tripling content to ensure safety for large screens + ease of loop
  const techLoop = [...techServices, ...techServices, ...techServices, ...techServices, ...techServices, ...techServices, ...techServices, ...techServices, ...techServices, ...techServices];
  const learningLoop = [...eLearningSubjects, ...eLearningSubjects, ...eLearningSubjects, ...eLearningSubjects, ...eLearningSubjects, ...eLearningSubjects, ...eLearningSubjects, ...eLearningSubjects, ...eLearningSubjects, ...eLearningSubjects];

  return (
    <div
      ref={containerRef}
      className="dual-marquee-container"
    >
      {/* Background Image Layer - Separated for Glass Effect */}
      <div
        className="background-image-layer"
        style={{
          backgroundImage: `url(${buyerImage})`
        }}
      ></div>

      {/* Glass Overlay Layer - Controls the blur behind content */}
      <div className="glass-overlay"></div>

      {/* Animated Background Elements */}
      <div className="reflection-overlay"></div>
      <div className="floating-shapes" ref={shapesRef}>
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      {/* Particle Effects */}
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
        <div className="main-title-container" ref={titleRef}>
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
          <div
            className="marquee-title-item tech-title"
            onClick={() => navigate('/tech-group')}
            style={{ cursor: 'pointer' }}
          >
            <h3>Tech Group Services</h3>
            <div className="title-badge">
              <span>40+ Services and Products</span>
            </div>
          </div>
          <div
            className="marquee-title-item tech-learning-title"
            onClick={() => navigate('/tech-learning')}
            style={{ cursor: 'pointer' }}
          >
            <h3>E-Learning UpSkills</h3>
            <div className="title-badge">
              <span>7+ Courses</span>
            </div>
          </div>
        </div>

        {/* Character & Marquees Container */}
        <div
          className="character-marquee-section"
        >

          {/* Character Illustration */}
          {/* <div className="character-container">
            <img src={characterIllustration} alt="Character Illustration" className="floating-character" />
          </div> */}

          {/* Angled Marquees */}
          <div className="angled-marquee-wrapper">
            {/* Tech Services Marquee (Top - Blue) */}
            <div className="marquee-content tech-content">
              {/* <div className="marquee-gradient-left"></div>
              <div className="marquee-gradient-right"></div> */}
              <div className="marquee-track tech-track" ref={techTrackRef}>
                {techLoop.map((service, index) => (
                  <div key={index} className="marquee-item tech-item">
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* E-Learning Marquee (Bottom - Yellow/Green) */}
            <div className="marquee-content learning-content">
              {/* <div className="marquee-gradient-left"></div>
              <div className="marquee-gradient-right"></div> */}
              <div className="marquee-track learning-track" ref={learningTrackRef}>
                {learningLoop.map((subject, index) => (
                  <div key={index} className="marquee-item learning-item">
                    <span>{subject}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default DoubleMarquees;