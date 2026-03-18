import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeLowVision, faBullseye, faLightbulb, faPalette, faShieldHalved, faChartLine, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import './VisionMission.css';

gsap.registerPlugin(ScrollTrigger);

const VisionMission = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const visionCardRef = useRef(null);
  const missionCardRef = useRef(null);
  const valuesRef = useRef(null);
  const valueItemsRef = useRef([]);

  const addToValueItemsRef = (el) => {
    if (el && !valueItemsRef.current.includes(el)) {
      valueItemsRef.current.push(el);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header Animation (Fade up on scroll - NO PINNING)
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 2. Vision Card (From Left with Rotation)
      gsap.fromTo(visionCardRef.current,
        { x: -150, rotationY: -15, opacity: 0 },
        {
          x: 0,
          rotationY: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: visionCardRef.current,
            start: "top 75%",
            end: "top 40%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 3. Mission Card (From Right with Rotation)
      gsap.fromTo(missionCardRef.current,
        { x: 150, rotationY: 15, opacity: 0, scale: 0.95 },
        {
          x: 0,
          rotationY: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: missionCardRef.current,
            start: "top 75%",
            end: "top 40%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 4. Core Values Section Header (Fade in on scroll)
      gsap.fromTo(valuesRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 5. Core Values Cards (Staggered fade-in on scroll)
      gsap.fromTo(valueItemsRef.current,
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 70%",
            end: "top 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // --- LAYERED MAGNETIC HOVER EFFECT (Desktop Only) ---
      if (window.innerWidth > 768) {
        const cards = gsap.utils.toArray('.vm-card, .value-item');

        cards.forEach(card => {
          // Select inner elements for layered depth
          const icon = card.querySelector('.card-icon') || card.querySelector('.value-icon');
          const title = card.querySelector('h3') || card.querySelector('h4');
          const content = card.querySelector('.card-content') || card.querySelector('.value-back p') || card.querySelector('.bullet-list');

          card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            // Calculate mouse position relative to card center
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Normalized values (-1 to 1)
            const normX = (x - centerX) / centerX;
            const normY = (y - centerY) / centerY;

            // 1. Card Tilt
            const rotateX = normY * -10; // Max 10deg
            const rotateY = normX * 10;

            gsap.to(card, {
              rotationX: rotateX,
              rotationY: rotateY,
              scale: 1.03,
              duration: 0.3,
              ease: "power3.out",
              overwrite: "auto"
            });

            // 2. Inner Elements Parallax (Varying intensities)
            if (icon) {
              gsap.to(icon, {
                x: normX * 20, // Max 20px
                y: normY * 20,
                duration: 0.3,
                ease: "power3.out"
              });
            }

            if (title) {
              gsap.to(title, {
                x: normX * 12, // Max 12px
                y: normY * 12,
                duration: 0.3,
                ease: "power3.out"
              });
            }

            if (content) {
              gsap.to(content, {
                x: normX * 8, // Max 8px
                y: normY * 8,
                duration: 0.3,
                ease: "power3.out"
              });
            }
          });

          card.addEventListener('mouseleave', () => {
            // Reset Card
            gsap.to(card, {
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              duration: 0.5,
              ease: "power3.out",
              overwrite: "auto"
            });

            // Reset Inner Elements
            if (icon) gsap.to(icon, { x: 0, y: 0, duration: 0.5, ease: "power3.out" });
            if (title) gsap.to(title, { x: 0, y: 0, duration: 0.5, ease: "power3.out" });
            if (content) gsap.to(content, { x: 0, y: 0, duration: 0.5, ease: "power3.out" });
          });
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="vision-mission" className="vision-mission-section" ref={sectionRef}>
      <div className="vision-mission-container">

        {/* Header */}
        <div className="section-header mission-vision-header" ref={headerRef}>
          <h2>OUR MISSION & VISION</h2>
          <p>Driving innovation and education to create meaningful impact</p>
        </div>

        {/* Vision & Mission Cards in Single Row with Flip Animation */}
        <div className="cards-row">
          {/* Vision Card */}
          <div className="vm-card vision-card" ref={visionCardRef}>
            {/* Front Side */}
            <div className="card-front">
              <div>
                <div className="card-header">
                  <div className="card-icon"> <FontAwesomeIcon
                    icon={faEyeLowVision}
                    style={{ color: "#1760de", fontSize: "2rem" }}
                  />
                  </div>
                  <h3>Our Vision</h3>
                </div>
                <div className="card-content">
                  <ul className="bullet-list">
                    <li>To be the leading innovator in technology solutions that transform businesses</li>
                    <li>Creating a future where technology and education work hand in hand</li>
                    <li>To establish a world-class ecosystem where creativity meets technology</li>
                    <li>Empowering every individual and organization to achieve their full potential</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Back Side */}
            <div className="card-back">
              <div className="back-content">
                <div className="back-text-icon">VISION</div>
                <h4>Our Vision</h4>
                <p>We envision a future where technology seamlessly integrates with human potential, creating unprecedented opportunities for growth, innovation, and positive global impact.</p>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="vm-card mission-card" ref={missionCardRef}>
            {/* Front Side */}
            <div className="card-front">
              <div>
                <div className="card-header">
                  <div className="card-icon"> <FontAwesomeIcon
                    icon={faBullseye}
                    style={{ color: "#dc0909", fontSize: "2rem" }}
                  /></div>
                  <h3>Our Mission</h3>
                </div>
                <div className="card-content">
                  <ul className="bullet-list">
                    <li>To deliver exceptional technology services and educational programs</li>
                    <li>Providing comprehensive digital solutions through Engloray Tech Group</li>
                    <li>To consistently exceed client expectations through innovative solutions</li>
                    <li>Creating transformative learning experiences for successful careers</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Back Side */}
            <div className="card-back">
              <div className="back-content">
                <div className="back-text-icon">MISSION</div>
                <h4>Our Mission</h4>
                <p>We are committed to empowering individuals and businesses through cutting-edge technology solutions and transformative education that drives real-world success.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values - ALL 5 CARDS */}
        {/* <div className="values-section" ref={valuesRef}>
          <h3>Our Core Values</h3>
          <div className="values-grid">
            {/* Innovation Card */}
        {/* <div className="value-item" ref={addToValueItemsRef}>
              <div className="value-inner">
                <div className="value-front">
                  <div className="value-icon"> <FontAwesomeIcon
                    icon={faLightbulb}
                    style={{ color: "#a4a91fff", fontSize: "2rem" }}
                  /></div>
                  <h4 style={{ fontFamily: 'Aldrich', fontWeight: 100 }}>Innovation</h4>
                </div>
                <div className="value-back">
                  <p>Pushing boundaries and embracing new technologies to create groundbreaking solutions.</p>
                </div>
              </div>
            </div>

            {/* Creativity Card */}
        {/* <div className="value-item" ref={addToValueItemsRef}>
              <div className="value-inner">
                <div className="value-front">
                  <div className="value-icon"> <FontAwesomeIcon
                    icon={faPalette}
                    style={{ color: "#d99a1cff", fontSize: "2rem" }}
                  /></div>
                  <h4 style={{ fontFamily: 'Aldrich', fontWeight: 100 }}>Creativity</h4>
                </div>
                <div className="value-back">
                  <p>Thinking differently and designing solutions that inspire and engage users.</p>
                </div>
              </div>
            </div>

            {/* Integrity Card */}
        {/* <div className="value-item" ref={addToValueItemsRef}>
              <div className="value-inner">
                <div className="value-front">
                  <div className="value-icon"> <FontAwesomeIcon
                    icon={faShieldHalved}
                    style={{ color: "#1760de", fontSize: "2rem" }}
                  /></div>
                  <h4 style={{ fontFamily: 'Aldrich', fontWeight: 100 }}>Integrity</h4>
                </div>
                <div className="value-back">
                  <p>Building trust through transparency, honesty, and ethical business practices.</p>
                </div>
              </div>
            </div>

            {/* Growth Card */}
        {/* <div className="value-item" ref={addToValueItemsRef}>
              <div className="value-inner">
                <div className="value-front">
                  <div className="value-icon"> <FontAwesomeIcon
                    icon={faChartLine}
                    style={{ color: "#5f8bd8ff", fontSize: "2rem" }}
                  /></div>
                  <h4 style={{ fontFamily: 'Aldrich', fontWeight: 100 }}>Growth</h4>
                </div>
                <div className="value-back">
                  <p>Continuous improvement and expansion for our clients, students, and team members.</p>
                </div>
              </div>
            </div>

            {/* Education Card */}
        {/* <div className="value-item" ref={addToValueItemsRef}>
              <div className="value-inner">
                <div className="value-front">
                  <div className="value-icon"> <FontAwesomeIcon
                    icon={faGraduationCap}
                    style={{ color: "#1760de", fontSize: "2rem" }}
                  /></div>
                  <h4 style={{ fontFamily: 'Aldrich', fontWeight: 100 }}>Education</h4>
                </div>
                <div className="value-back">
                  <p>Empowering through knowledge sharing, skill development, and accessible learning.</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

      </div>
    </section>
  );
};

export default VisionMission;