import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRocket,
  faStar,
  faGlobe,
  faBullseye,
  faPalette,
  faDesktop,
  faPaintBrush,
  faChartBar,
  faMobileAlt,
  faGraduationCap,
  faCode,
  faTools,
  faComments,
  faFolderOpen,
  faNetworkWired,
  faSeedling,
  faBrain,
  faBriefcase,
  faChevronLeft,
  faChevronRight,
  faCloud,
  faDatabase,
  faFileAlt,
  faHeart,
  faSuitcase,
  faDiamond,
  faEye
} from '@fortawesome/free-solid-svg-icons';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import './OurStoryPage.css';
import WhiteFooter from '../../../Components/WhiteFooter/WhiteFooter';
import BackToTop from '../../../Components/BackToTop/BackToTop';

// import { motion } from 'framer-motion';
import engloray_story_visual from '../../../assets/engloray_story_visual_1774975212945.png';
import journeyStarting from '../../../assets/journey_starting.png';


import journeyGrowth from '../../../assets/journey_growth.png';
import journeyPresent from '../../../assets/journey_present.png';
import { motion, AnimatePresence } from 'framer-motion';

import useEmblaCarousel from 'embla-carousel-react';

import valueInnovation from '../../../assets/value_innovation.png';
import valueExcellence from '../../../assets/value_excellence.png';
import valueIntegrity from '../../../assets/value_integrity.png';
import valueCollaboration from '../../../assets/value_collaboration.png';
import valueGrowth from '../../../assets/ai_3d_new.png';

// ============================================================
//  CTA SPOTLIGHT SECTION — pivoting spotlight (tip fixed, base swings)
// ============================================================
const CtaSpotlightSection = ({ handleWhatsAppClick, handlePortfolioClick }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="osp-cta-modern">
      <div className="osp-cta-bg-noise"></div>
      <div className="osp-cta-glow-orb"></div>

      <div className="osp-container">
        <div className="osp-cta-grid">
          {/* Left Side: Content */}
          <motion.div
            className="osp-cta-content-modern"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.span className="osp-cta-tag" variants={itemVariants}>READY FOR IMPACT?</motion.span>

            <motion.h2 className="osp-cta-title-modern" variants={itemVariants}>
              Ready to Create<br />
              <span className="osp-cta-title-glow">Your Legacy?</span>
            </motion.h2>

            <motion.p className="osp-cta-desc-modern" variants={itemVariants}>
              Join 100+ satisfied clients who've transformed their brand and digital presence with our creative solutions.
              From innovative strategy to world-class execution, we are your strategic partners in building the future.
            </motion.p>

            <motion.div className="osp-cta-badges" variants={itemVariants}>
              <div className="osp-cta-badge">
                <span className="osp-badge-dot pulse"></span>
                <span>200+ Projects Done</span>
              </div>
              <div className="osp-cta-badge">
                <span className="osp-badge-dot"></span>
                <span>15+ Industries</span>
              </div>
              <div className="osp-cta-badge">
                <span className="osp-badge-dot"></span>
                <span>95% Client Retention</span>
              </div>
            </motion.div>

            <motion.div className="osp-cta-actions-modern" variants={itemVariants}>
              <button
                className="osp-cta-btn-pill osp-cta-btn-primary"
                onClick={handleWhatsAppClick}
                style={{ '--hover-bg': '#28a745' }}
              >
                Contact Us <span className="osp-cta-btn-icon">→</span>
              </button>
              <button
                className="osp-cta-btn-pill osp-cta-btn-secondary"
                onClick={handlePortfolioClick}
              >
                View Our Works
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side: Programmatic Animatable Constellation */}
          <motion.div
            className="osp-cta-visual-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="osp-cta-constellation-wrap">
              <svg viewBox="0 0 400 400" className="osp-cta-constellation-svg">
                {/* Constellation Lines - Green */}
                <motion.path
                  d="M100,50 L200,100 L300,50 L350,200 L250,350 L100,380 L50,250 L100,50"
                  stroke="rgba(45, 212, 191, 0.4)"
                  strokeWidth="1.2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 4, ease: "easeInOut" }}
                />
                <motion.path
                  d="M200,100 L250,250 L350,200"
                  stroke="rgba(45, 212, 191, 0.3)"
                  strokeWidth="0.8"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 3, delay: 0.5 }}
                />
                <motion.path
                  d="M50,250 L200,200 L250,350"
                  stroke="rgba(45, 212, 191, 0.2)"
                  strokeWidth="0.8"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 4, delay: 1 }}
                />
                <motion.path
                  d="M100,380 L200,200 L300,50"
                  stroke="rgba(45, 212, 191, 0.2)"
                  strokeWidth="0.8"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 5, delay: 1.5 }}
                />
                <motion.path
                  d="M50,250 L150,150 L200,100"
                  stroke="rgba(45, 212, 191, 0.15)"
                  strokeWidth="0.6"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 3, delay: 2 }}
                />

                {/* Stars/Nodes - Green */}
                {[
                  { x: 100, y: 50 },
                  { x: 200, y: 100 },
                  { x: 300, y: 50 },
                  { x: 350, y: 200 },
                  { x: 250, y: 350 },
                  { x: 100, y: 380 },
                  { x: 50, y: 250 },
                  { x: 200, y: 200 },
                  { x: 150, y: 150 },
                  { x: 250, y: 250 },
                  { x: 50, y: 50 },
                  { x: 350, y: 350 }
                ].map((star, idx) => (
                  <g key={idx}>
                    <motion.circle
                      cx={star.x}
                      cy={star.y}
                      r={idx % 2 === 0 ? "2.5" : "1.8"}
                      fill="#2dd4bf"
                      animate={{
                        opacity: [0.3, 1, 0.3],
                        scale: [1, 1.4, 1],
                      }}
                      transition={{
                        duration: 4 + idx,
                        repeat: Infinity,
                        delay: idx * 0.3
                      }}
                    />
                    <motion.circle
                      cx={star.x}
                      cy={star.y}
                      r={idx % 2 === 0 ? "10" : "6"}
                      fill="rgba(45, 212, 191, 0.15)"
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.15, 0, 0.15],
                      }}
                      transition={{
                        duration: 4 + idx,
                        repeat: Infinity,
                        delay: idx * 0.3
                      }}
                    />
                  </g>
                ))}
              </svg>

              {/* Floating Star Particles */}
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`osp-cta-spark osp-spark-${i % 6}`}
                  animate={{
                    opacity: [0, 0.6, 0],
                    scale: [0, 1, 0],
                    x: [0, (i % 2 === 0 ? 50 : -50), 0],
                    y: [0, -100, 0]
                  }}
                  transition={{
                    duration: 5 + i,
                    repeat: Infinity,
                    delay: i * 0.8
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const OurStoryPage = () => {
  const navigate = useNavigate();

  // Data Constants - MOVED UP TO FIX INITIALIZATION ERRORS
  const projectFields = [
    { title: "Branding", icon: faPalette, suitIcon: faHeart, description: "Strategic visual identity and brand story.", color: "#ff385c" },
    { title: "Web Design", icon: faDesktop, suitIcon: faCloud, description: "High-performance responsive web products.", color: "#ff0000" },
    { title: "UI/UX Design", icon: faPaintBrush, suitIcon: faDiamond, description: "Intuitive and seamless user experiences.", color: "#2d3a8c" },
    { title: "Digital Marketing", icon: faChartBar, suitIcon: faGlobe, description: "Data-driven growth and SEO mastery.", color: "#0052ff" },
    { title: "Mobile Apps", icon: faMobileAlt, suitIcon: faRocket, description: "Native and cross-platform app solutions.", color: "#0061ff" },
    { title: "E-Learning", icon: faGraduationCap, suitIcon: faStar, description: "Scalable interactive training systems.", color: "#f3ba2f" },
    { title: "Software", icon: faCode, suitIcon: faCode, description: "Custom enterprise software architecture.", color: "#635bff" },
    { title: "Consulting", icon: faTools, suitIcon: faBullseye, description: "Strategic tech roadmap guidance.", color: "#0769ad" }
  ];

  const journeyImages = [journeyStarting, journeyGrowth, journeyPresent];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', skipSnaps: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [vmSwapped, setVmSwapped] = useState(false);


  // Card Deck Expertise state
  const [deckOrder, setDeckOrder] = useState([0, 1, 2, 3, 4, 5, 6, 7]);

  const handleCardSwap = () => {
    setDeckOrder((prev) => {
      const newOrder = [...prev];
      const topCard = newOrder.shift();
      newOrder.push(topCard);
      return newOrder;
    });
  };

  const activeExpertise = projectFields[deckOrder[0]];

  // Auto-cycling images for Journey section
  const [journeyImgIndex, setJourneyImgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setJourneyImgIndex((prev) => (prev + 1) % journeyImages.length);
    }, 5000); // 5 seconds
    return () => clearInterval(timer);
  }, [journeyImages.length]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const whatsappNumber = "6381759909";
  const whatsappMessage = "Hello! I'm interested in starting a project with ENGLORAY.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  // Handle Portfolio click
  const handlePortfolioClick = () => {
    navigate('/worksClientProjectsPage'); // Adjust route as needed
  };

  // Combined Timeline data with alternating left-right layout
  const timelineData = [
    {
      quarter: "Phase 1",
      year: "2023",
      title: "The Beginning",
      description: "ENGLORAY began as a creative design and branding studio, focused on helping local businesses and startups build their visual identity.",
      projects: ["Logo Design", "Branding System", "Product & label Design"],
      color: "#FF6B6B",
      side: "left"
    },
    {
      quarter: "Phase 2",
      year: "2024",
      title: "Growth & Digital Entry",
      description: "As client requirements evolved, ENGLORAY expanded into website design and UI/UX, marking the transition into digital platforms.",
      projects: ["Websites", "UI/UX Designs", "Branding for Digital Platforms"],
      color: "#4ECDC4",
      side: "right"
    },
    {
      quarter: "Phase 3",
      year: "2024",
      title: "Ecosystem Expansion",
      description: "To serve both businesses and learners, ENGLORAY launched two divisions: Tech Group & Learning Generations",
      projects: ["Tech Group: Corporate websites", "Branding + Digital Integrations", "Learning Generations: Graphic Design Course", "UI/UX Design Course"],
      color: "#45B7D1",
      side: "left"
    },
    {
      quarter: "Phase 4",
      year: "2025",
      title: "Full Service Delivery",
      description: "By 2025, ENGLORAY delivered end-to-end solutions covering branding, technology, and growth.",
      projects: ["Mobile Applications", "Digital Promotions & Ads", "Software & System Solutions"],
      color: "#96CEB4",
      side: "right"
    },
    {
      quarter: "Phase 5",
      year: "2025",
      title: "The Present",
      description: "A Trusted Creative, Tech & Learning Partner.",
      projects: ["ENGLORAY TECH GROUP → Business & Technology", "ENGLORAY LEARNING GENERATION → Education & Skills"],
      color: "#c59b13ff",
      side: "left"
    },
    {
      quarter: "Phase 6",
      year: "2026",
      title: "The Future",
      description: "ENGLORAY's future roadmap focuses on growth, innovation, and international expansion.",
      projects: ["International client projects and global clients", "AI-assisted branding and design systems", "Global learning programs and certifications", "Advanced learning programs with global reach", "Scalable platforms and SaaS products"],
      color: "#DDA0DD",
      side: "right"
    }
  ];

  // Core Values
  const coreValues = [
    {
      title: "Innovation",
      description: "Pushing boundaries in tech solutions",
      image: valueInnovation,
      color: "#FF6B6B"
    },
    {
      title: "Excellence",
      description: "Delivering world-class digital solutions",
      image: valueExcellence,
      color: "#4ECDC4"
    },
    {
      title: "Integrity",
      description: "Transparent and ethical in all operations",
      image: valueIntegrity,
      color: "#45B7D1"
    },
    {
      title: "Collaboration",
      description: "Building strong client partnerships",
      image: valueCollaboration,
      color: "#96CEB4"
    },
    {
      title: "Growth",
      description: "Continuous evolution and adaptation",
      image: valueGrowth,
      color: "#FFEAA7"
    }
  ];

  // Vision & Mission - REVISED FOR ARTISTIC LAYOUT
  const visionMissionContent = {
    vision: {
      title: "Our Vision",
      text: "At ENGLORAY, we envision a world where creativity fuels innovation and propels businesses toward remarkable success. We strive to be the catalyst that sparks imagination and drives impactful transformation, crafting experiences that resonate and inspire."
    },
    mission: {
      title: "Our Mission",
      text: "Our mission is to empower businesses to unlock their full potential through the transformative power of creativity. By blending compelling storytelling, cutting-edge design, and innovative strategies, we deliver tailored solutions that elevate brands, captivate audiences, and foster sustainable growth."
    }
  };

  // ... (Moved up) ...


  // Animated floating particles
  useEffect(() => {
    const particles = document.querySelectorAll('.osp-particle');
    particles.forEach((particle, index) => {
      particle.style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  return (
    <div className="osp-page">
      <TopNavBar />
      <TwoLineNavbar />

      {/* Redesigned NFT-style Header */}
      <header className="osp-hero-section">
        <div className="osp-hero-container">
          <div className="osp-hero-grid">
            {/* Left Content */}
            <div className="osp-hero-content-left">
              <motion.h1
                className="osp-hero-main-title"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
              >
                Crafting the <br />
                <span>Engloray Legacy</span>
              </motion.h1>
              <motion.p
                className="osp-hero-description"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                A story of passion, precision, and the relentless pursuit of digital excellence.
                From creative roots to the global tech group we are today.
                Beyond just code and color, we build digital experiences that drive value and foster true human connection.
                Our mission continues to evolve, but our core commitment to your success remains unchanged.
              </motion.p>

              <motion.div
                className="osp-hero-actions"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <button
                  className="osp-btn-discover"
                  onClick={() => document.getElementById('vision-journey')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Discover
                </button>
                <button className="osp-btn-create" onClick={handleWhatsAppClick}>Contact</button>
                <div className="osp-watch-video">
                  <FontAwesomeIcon icon={faRocket} />
                  <span>Start a Journey</span>
                </div>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                className="osp-hero-stats-row"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="osp-stat-card">
                  <h3>200+</h3>
                  <p>Projects</p>
                </div>
                <div className="osp-stat-card">
                  <h3>15+</h3>
                  <p>Industries</p>
                </div>
                <div className="osp-stat-card">
                  <h3>2+</h3>
                  <p>Years</p>
                </div>
              </motion.div>
            </div>

            {/* Right Image Content */}
            <motion.div
              className="osp-hero-visual-right"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="osp-nft-card">
                <div className="osp-nft-image-wrap">
                  <img src={engloray_story_visual} alt="Our Story Chronicles Visual" />
                </div>
                <div className="osp-nft-card-footer">
                  <div className="osp-nft-info">
                    <p>Founded in:</p>
                    <h4>JAN 2023</h4>
                    <button className="osp-place-bid" onClick={handleWhatsAppClick}>Connect Now</button>
                  </div>
                  <div className="osp-nft-bid">
                    <p>Client Retention</p>
                    <h4>95% Score</h4>
                    <button className="osp-purchase" onClick={handlePortfolioClick}>Our Works</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Product Marquee */}
        <div className="osp-product-marquee">
          <div className="osp-marquee-track">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="osp-marquee-item">UNIFIED CRM SOLUTIONS</div>
                <div className="osp-marquee-icon"><FontAwesomeIcon icon={faRocket} /></div>
                <div className="osp-marquee-item">EMPOWERING ERP SYSTEMS</div>
                <div className="osp-marquee-icon"><FontAwesomeIcon icon={faStar} /></div>
                <div className="osp-marquee-item">AI CHATBOT INTELLIGENCE</div>
                <div className="osp-marquee-icon"><FontAwesomeIcon icon={faBrain} /></div>
                <div className="osp-marquee-item">JOB SEEKER HUB</div>
                <div className="osp-marquee-icon"><FontAwesomeIcon icon={faBriefcase} /></div>
                <div className="osp-marquee-item">CAREER & LEARNING</div>
                <div className="osp-marquee-icon"><FontAwesomeIcon icon={faGraduationCap} /></div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="osp-main-content">
        {/* Our Journey / About Section - REPLACED WITH NEW DESIGN */}
        <section className="osp-section osp-journey-redesign" id="vision-journey">
          {/* Background Floating Elements */}
          <div className="osp-journey-background-elements">
            {[faRocket, faStar, faGlobe, faDatabase, faPalette, faCode, faBullseye, faSeedling].map((icon, idx) => (
              <motion.div
                key={idx}
                className={`osp-bg-floating-icon osp-icon-${idx}`}
                animate={{
                  y: [0, -30, 0],
                  x: [0, 15, 0],
                  opacity: [0.15, 0.4, 0.15],
                  scale: [0.9, 1.1, 0.9]
                }}
                transition={{
                  duration: 6 + idx,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.7
                }}
              >
                <FontAwesomeIcon icon={icon} />
              </motion.div>
            ))}
          </div>

          <div className="osp-container">
            {/* Upper Row: Image and About Text */}
            <div className="osp-journey-upper">
              <motion.div
                className="osp-journey-img-box"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
              >
                <div className="osp-journey-images-stack">
                  {journeyImages.map((img, idx) => (
                    <motion.div
                      key={idx}
                      className="osp-journey-stacked-image"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: journeyImgIndex === idx ? 1 : 0
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    >
                      <img src={img} alt={`Journey Phase ${idx + 1}`} className="osp-journey-main-photo" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <div className="osp-journey-text-box">
                <motion.span
                  className="osp-about-label"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8 }}
                >
                  About Us
                </motion.span>
                <motion.h2
                  className="osp-about-main-title"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  We Always Make<br />The Best
                </motion.h2>
                <motion.p
                  className="osp-about-para"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  ENGLORAY represents the pinnacle of digital craftsmanship. Through years of dedicated innovation and strategic design, we've helped countless businesses navigate the complex landscape of technology and creativity to achieve remarkable success. Our commitment to excellence is the foundation of every partnership we build.
                </motion.p>
                <motion.button
                  className="osp-pill-btn"
                  onClick={handleWhatsAppClick}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Ready to Create
                </motion.button>
              </div>
            </div>

            {/* Lower Row: Skills and Stats */}
            <div className="osp-journey-lower">
              {/* Left: Skills Progress */}
              <div className="osp-skills-side">
                <motion.h3
                  className="osp-skills-title"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8 }}
                >
                  Our Skills
                </motion.h3>
                <motion.p
                  className="osp-skills-desc"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  Expertise in design, tech, and branding for tailored solutions.
                </motion.p>

                <div className="osp-progress-bars">
                  {[
                    { label: "Branding", val: "95%" },
                    { label: "Designing", val: "80%" },
                    { label: "Marketing", val: "77%" }
                  ].map((skill, idx) => (
                    <motion.div
                      key={idx}
                      className="osp-progress-item"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.8, delay: 0.2 + (idx * 0.1) }}
                    >
                      <div className="osp-progress-label">
                        <span>{skill.label}</span>
                        <span>{skill.val}</span>
                      </div>
                      <div className="osp-progress-track">
                        <motion.div
                          className="osp-progress-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.val }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right: Stats Grid */}
              <div className="osp-stats-side">
                <div className="osp-grid-stats-box">
                  {[
                    { num: "20+", sub: "Years Of Experience" },
                    { num: "1,000+", sub: "Project Done" },
                    { num: "300+", sub: "Satisfied Client" },
                    { num: "64", sub: "Certified Award" }
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      className="osp-stat-item"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.8, delay: (idx * 0.1) }}
                    >
                      <span className="osp-stat-num">{stat.num}</span>
                      <span className="osp-stat-sub">{stat.sub}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HIGH-FIDELITY VISION MISSION SCANNER (3-Column Center Hub) */}
        <section className="osp-vm-scanner-section" id="vision-mission-unified">
          <div className="osp-container osp-vm-scanner-container">
            <div className="osp-vm-scanner-grid">
              
              {/* Left Column: Vision - Synced binary visibility (Shown when Radar is Right) */}
              <motion.div 
                className="osp-vm-column osp-vm-left"
                animate={{
                  opacity: [1, 1, 0, 0, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  times: [0, 0.499, 0.5, 0.999, 1],
                  ease: "linear"
                }}
              >
                <div className="osp-vm-content-box">
                  <span className="osp-vm-label" style={{ color: '#30b0e4' }}>2020 — ESTABLISHED</span>
                  <h2 className="osp-vm-title">VISION</h2>
                  <p className="osp-vm-description">
                    {visionMissionContent.vision.text}
                  </p>
                </div>
              </motion.div>

              {/* Center Column: Controlled Rotating Hub */}
              <div className="osp-vm-hub-column">
                <div className="osp-eclipse-container">
                  <motion.div 
                    className="osp-eclipse-graphic blue-theme"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    {/* The Integrated Shadow (Joined to the circle) */}
                    <div className="osp-eclipse-beam blue"></div>
                    
                    <div className="osp-eclipse-core blue"></div>
                    <div className="osp-eclipse-glow blue"></div>
                    
                    {/* Pulsing Radar Rings */}
                    <motion.div 
                      className="osp-radar-ring"
                      animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                    ></motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Right Column: Mission - Synced binary visibility (Shown when Radar is Left) */}
              <motion.div 
                className="osp-vm-column osp-vm-right"
                animate={{
                  opacity: [0, 0, 1, 1, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  times: [0, 0.499, 0.5, 0.999, 1],
                  ease: "linear"
                }}
              >
                <div className="osp-vm-content-box"  style={{ color: '#fff' }}>
                  <span className="osp-vm-label" style={{ color: '#30b0e4' }}>2026 — FUTURE</span>
                  <h2 className="osp-vm-title">MISSION</h2>
                  <p className="osp-vm-description">
                    {visionMissionContent.mission.text}
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ROADMAP 2025 SECTION - REDESIGNED PER REFERENCE */}
        <section className="osp-roadmap-section">
          <div className="osp-container">
            <div className="osp-roadmap-card">
              {/* Floating Embers Background */}
              <div className="osp-roadmap-embers">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className={`osp-ember osp-ember-${i % 5}`}></div>
                ))}
              </div>
              <div className="osp-roadmap-header">
                <div className="osp-roadmap-title-box">
                  <h2 className="osp-roadmap-main-title">ROADMAP</h2>
                  <h3 className="osp-roadmap-year">ENGLORAY</h3>
                </div>

              </div>

              <div className="osp-roadmap-timeline">
                <div className="osp-roadmap-vertical-line"></div>

                {[
                  { stage: "PHASE 01", title: "THE BEGINNING", desc: "ENGLORAY began as a creative studio focused on helping local businesses build their visual identity and brand systems." },
                  { stage: "PHASE 02", title: "GROWTH & DIGITAL", desc: "Expanding into website design and UI/UX, marking our transition into high-performance digital platforms and ecosystems." },
                  { stage: "PHASE 03", title: "ECOSYSTEM EXPANSION", desc: "Launched Tech Group & Learning Generations divisions to serve both enterprises and skill-seekers globally." },
                  { stage: "PHASE 04", title: "FULL SERVICE", desc: "Delivering end-to-end solutions covering mobile applications, digital promotions, and advanced software solutions." },
                  { stage: "PHASE 05", title: "THE PRESENT", desc: "A trusted global partner for business technology and education, driving innovation across multiple industries." },
                  { stage: "PHASE 06", title: "THE FUTURE", desc: "Scaling international reach with AI-assisted design systems, SaaS products, and global certification programs." }
                ].map((item, idx) => (
                  <div key={idx} className="osp-roadmap-item">
                    <div className="osp-roadmap-q-side">
                      <span className="osp-roadmap-q">{item.stage}</span>
                    </div>

                    <div className="osp-roadmap-center">
                      <div className="osp-roadmap-node">
                        <div className="osp-node-inner"></div>
                        <div className="osp-node-pulse"></div>
                      </div>
                      <div className="osp-roadmap-connect-line"></div>
                    </div>

                    <div className="osp-roadmap-content-side">
                      <h5 className="osp-roadmap-item-title">{item.title}</h5>
                      <p className="osp-roadmap-item-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="osp-roadmap-footer">
                {/* <span className="osp-roadmap-url">WWW.ENGLORAY.COM</span> */}
              </div>
            </div>
          </div>
        </section>        {/* How We Grow Section */}
        <section className="osp-how-we-grow-section">
          <div className="osp-container">
            <motion.div
              className="osp-how-header centered"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="osp-how-main-title">HOW WE GROW</h2>
              <div className="osp-how-underline"></div>
            </motion.div>

            <div className="osp-how-visual-container">
              {/* Central Hub */}
              <div className="osp-how-hub-wrapper">
                <motion.div
                  className="osp-how-hub"
                  animate={{
                    boxShadow: ["0 0 20px rgba(255, 60, 60, 0.4)", "0 0 40px rgba(255, 60, 60, 0.7)", "0 0 20px rgba(255, 60, 60, 0.4)"]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="osp-how-hub-inner">
                    <FontAwesomeIcon icon={faBrain} />
                  </div>
                </motion.div>

                {/* Connecting Lines SVG */}
                <svg className="osp-how-lines-svg" viewBox="0 0 800 500">
                  {/* Top Left */}
                  <motion.path
                    d="M400,250 C300,250 200,200 150,100"
                    className="osp-how-path"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                  />
                  {/* Top Right */}
                  <motion.path
                    d="M400,250 C500,250 600,200 650,100"
                    className="osp-how-path"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.4 }}
                  />
                  {/* Bottom Left */}
                  <motion.path
                    d="M400,250 C300,250 200,300 150,400"
                    className="osp-how-path"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.6 }}
                  />
                  {/* Bottom Right */}
                  <motion.path
                    d="M400,250 C500,250 600,300 650,400"
                    className="osp-how-path"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                  />
                </svg>
              </div>

              {/* Corner Content Nodes */}
              <div className="osp-how-nodes">
                <motion.div className="osp-how-node top-left" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                  <div className="osp-node-icon"><FontAwesomeIcon icon={faBriefcase} /></div>
                  <h3>Strategic Vision</h3>
                  <p>Mapping out the high-level roadmap for exponential growth and long-term brand success.</p>
                </motion.div>

                <motion.div className="osp-how-node top-right" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                  <div className="osp-node-icon"><FontAwesomeIcon icon={faChartBar} /></div>
                  <h3>Data Analytics</h3>
                  <p>Utilizing advanced market insights and performance data to drive scaling decisions.</p>
                </motion.div>

                <motion.div className="osp-how-node bottom-left" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
                  <div className="osp-node-icon"><FontAwesomeIcon icon={faPalette} /></div>
                  <h3>Creative Design</h3>
                  <p>Breaking boundaries with world-class user experiences and modern brand identity.</p>
                </motion.div>

                <motion.div className="osp-how-node bottom-right" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}>
                  <div className="osp-node-icon"><FontAwesomeIcon icon={faRocket} /></div>
                  <h3>Tech Innovation</h3>
                  <p>Building robust, scalable architectures that grow seamlessly with your digital needs.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section - Carousel Implementation */}
        <section className="osp-section osp-values-section">
          <div className="osp-container">
            <div className="osp-values-header-row">
              <div className="osp-values-pill">
                Core Values : <span className="osp-btn-arrow-icon">↘</span>
              </div>
              <div className="osp-carousel-controls">
                <button className="osp-nav-arrow" onClick={scrollPrev}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <div className="osp-nav-dots">
                  {coreValues.map((_, index) => (
                    <span
                      key={index}
                      className={`osp-nav-dot ${index === (selectedIndex % coreValues.length) ? 'active' : ''}`}
                    ></span>
                  ))}
                </div>
                <button className="osp-nav-arrow" onClick={scrollNext}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>

            <div className="osp-values-embla" ref={emblaRef}>
              <div className="osp-values-embla-container">
                {[...coreValues, ...coreValues, ...coreValues].map((value, index) => (
                  <div
                    key={index}
                    className="osp-value-card-slide"
                  >
                    <motion.div
                      className="osp-value-card"
                      style={{ '--card-color': value.color }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="osp-value-card-inner">
                        <div className="osp-value-card-media">
                          <img
                            src={value.image}
                            alt={value.title}
                            className="osp-value-card-img"
                          />
                        </div>
                        <div className="osp-value-card-info">
                          <h3 className="osp-hexco-text">{value.title}</h3>
                          <p>{value.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action — Spotlight Stage */}
        <CtaSpotlightSection
          handleWhatsAppClick={handleWhatsAppClick}
          handlePortfolioClick={handlePortfolioClick}
        />
      </main>
      <WhiteFooter />
      <BackToTop />
    </div>
  );
};

export default OurStoryPage;
