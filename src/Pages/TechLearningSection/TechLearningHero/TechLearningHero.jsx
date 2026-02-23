import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './TechLearningHero.css';
import bgVideo from "../../../assets/video1.mp4";




const TechLearningHero = () => {
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const bottomCardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('tech-animate-in');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (leftCardRef.current) observer.observe(leftCardRef.current);
    if (rightCardRef.current) observer.observe(rightCardRef.current);
    if (bottomCardRef.current) observer.observe(bottomCardRef.current);

    return () => observer.disconnect();
  }, []);

  const whatsappNumber = '6381759909';
  const whatsappMessage =
    "Hi! I'd like to book a demo for your courses. Can you please provide more information?";
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="tech-hero-wrapper">

      {/* Glowing Brain Image */}
      {/* <div className="tech-brain-icon">
        <img src={brainImg} alt="Brain" />
      </div> */}

      {/* Top Right Image */}
      {/* <div className="tech-top-right-container">
        <img
          src={require("../../../assets/image6.jpeg")}
          alt="Top Right Visual"
          className="tech-top-right-image"
        />
      </div> */}


      {/* BACKGROUND VIDEO */}
      <video
        className="tech-background-video"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Gradient Blurs */}
      {/* <div className="tech-gradient tech-gradient-blue"></div> */}
      <div className="tech-gradient tech-gradient-purple"></div>

      {/* Floating small labels */}
      <div className="tech-floating tech-floating-think">Think</div>
      <div className="tech-floating tech-floating-inspire">Inspire</div>
      <div className="tech-floating tech-floating-grow">Grow</div>


      {/* Top Badge */}
      <div className="tech-top-badge">
        ⭐ Top Rated Product
      </div>

      {/* Avatars */}
      <div className="tech-avatars">
        <img src="https://i.pravatar.cc/40?img=1" alt="User" />
        <img src="https://i.pravatar.cc/40?img=2" alt="User" />
        <img src="https://i.pravatar.cc/40?img=3" alt="User" />
        <img src="https://i.pravatar.cc/40?img=4" alt="User" />
        <img src="https://i.pravatar.cc/40?img=5" alt="User" />
        <img src="https://i.pravatar.cc/40?img=6" alt="User" />
      </div>

      {/* Heading */}
      <h1 className="tech-hero-title">
        AI Powered learning and <br />career upskiling platform
      </h1>

      {/* Sub Row */}
      <div className="tech-sub-row">
        <span>Increase Career Skills</span>
        <div className="tech-toggle"></div>

        <div className="tech-icons">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/perplexity.svg" alt="Perplexity" />
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googlebard.svg" alt="Gemini" />
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/meta.svg" alt="Meta AI" />

        </div>

      </div>

      {/* Buttons */}
      <div className="tech-cta-wrapper">
        <Link to="/allCoursesPage" className="tech-cta-btn">
          GET STARTED
          <span className="tech-arrow-circle">→</span>
        </Link>

        <a
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
          className="tech-cta-btn tech-secondary-btn"
        >
          Book a Demo
          <span className="tech-arrow-circle">→</span>
        </a>
      </div>

      {/* Left Card */}
      <div ref={leftCardRef} className="tech-card tech-left-card">
        <h4>What You Get</h4>
        <ul>
          <li className="tech-active">✔ Industry-Relevant Skills</li>
          <li>✔ Hands-on Real Projects</li>
          <li>✔ Expert Mentorship</li>
          <li>✔ Career Growth Support</li>
        </ul>
      </div>

      {/* Right Top Card */}
      <div ref={rightCardRef} className="tech-card tech-invoice-card">
        <h4>10K+ & 98%</h4>
        <p>Students & Success Rate</p>
      </div>

      {/* Right Bottom Card */}
      <div ref={bottomCardRef} className="tech-card tech-client-card">
        <p><strong>500+</strong> • Projects </p>
        <p>Excited for the next steps.</p>
      </div>

      {/* Curve */}
      <svg className="tech-curve-line" viewBox="0 0 410 250">
        <path
          d="M130 65 C 120 200, 280 80, 280 220"
          stroke="#4f46e5"
          strokeWidth="2.7"
          fill="transparent"
          strokeLinecap="round"
        />
        <circle cx="130" cy="60" r="5" fill="#4f46e5" />
        <circle cx="280" cy="220" r="5" fill="#4f46e5" />
      </svg>

    </div>
  );
};

export default TechLearningHero;
