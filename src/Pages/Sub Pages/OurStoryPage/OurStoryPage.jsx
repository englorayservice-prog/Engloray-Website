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
  faEye,
  faCompass,
  faArrowRight,
  faFire,
  faWandMagicSparkles
} from '@fortawesome/free-solid-svg-icons';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import './OurStoryPage.css';
import NewFooter from '../NewFooter/NewFooter';
import BackToTop from '../../../Components/BackToTop/BackToTop';
// import Brain3D from '../../../Components/Brain3D/Brain3D';

// import { motion } from 'framer-motion';
import engloray_story_visual from '../../../assets/engloray_legacy_story.png';
import journeyStarting from '../../../assets/journey_starting.png';
import design2 from '../../../assets/design2.jpeg';
import design3 from '../../../assets/design3.jpeg';
import design4 from '../../../assets/design4.jpeg';
import figmaLogo from '../../../assets/figma_logo_v2.png';
import photoshopLogo from '../../../assets/photoshop_logo.png';
import illustratorLogo from '../../../assets/illustrator_logo_v2.png';
import peach_3d_shapes from '../../../assets/peach_3d_shapes.png';
import brainLogo from '../../../assets/brain.png';
import hand_holding_phone from '../../../assets/hand_holding_phone.png';
import cyberpunk_avatar from '../../../assets/cyberpunk_avatar.png';
import designer_avatar_top from '../../../assets/designer_avatar_top.png';
import cartoon_male_1 from '../../../assets/cartoon_male_1.png';
import cartoon_female_1 from '../../../assets/cartoon_female_1.png';
import cartoon_male_2 from '../../../assets/cartoon_male_2.png';

import journeyGrowth from '../../../assets/journey_growth.png';
import journeyPresent from '../../../assets/journey_present.png';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
              Ready to Create <span className="osp-cta-title-glow">Your Legacy?</span>
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
        </div>
      </div>
    </section>
  );
};

// Helper component to render a grid of arrow chevrons
const ArrowGrid = ({ rows = 14, cols = 5 }) => {
  return (
    <div className="osp-arrow-grid" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => {
          // Stagger delays from bottom row to top row to create an upward sweeping wave
          const delay = ((rows - r) * 0.15).toFixed(2);
          return (
            <svg
              key={`${r}-${c}`}
              className="osp-arrow-svg"
              style={{ animationDelay: `${delay}s` }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          );
        })
      )}
    </div>
  );
};

const HowWeGrowSection = React.memo(() => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="osp-how-we-grow-section" ref={ref}>
      <div className="osp-container">
        <motion.div
          className="osp-how-header centered"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
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
              <path
                d="M400,250 C300,250 200,200 150,100"
                className="osp-how-path"
              />
              {/* Top Right */}
              <path
                d="M400,250 C500,250 600,200 650,100"
                className="osp-how-path"
              />
              {/* Bottom Left */}
              <path
                d="M400,250 C300,250 200,300 150,400"
                className="osp-how-path"
              />
              {/* Bottom Right */}
              <path
                d="M400,250 C500,250 600,300 650,400"
                className="osp-how-path"
              />
            </svg>
          </div>

          {/* Corner Content Nodes */}
          <div className="osp-how-nodes">
            <motion.div 
              className="osp-how-node top-left" 
              initial={{ opacity: 0, x: -30 }} 
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }} 
              transition={{ delay: 0.3 }}
            >
              <div className="osp-node-icon"><FontAwesomeIcon icon={faBriefcase} /></div>
              <h3>Strategic Vision</h3>
              <p>Mapping out the high-level roadmap for exponential growth and long-term brand success.</p>
            </motion.div>

            <motion.div 
              className="osp-how-node top-right" 
              initial={{ opacity: 0, x: 30 }} 
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }} 
              transition={{ delay: 0.5 }}
            >
              <div className="osp-node-icon"><FontAwesomeIcon icon={faChartBar} /></div>
              <h3>Data Analytics</h3>
              <p>Utilizing advanced market insights and performance data to drive scaling decisions.</p>
            </motion.div>

            <motion.div 
              className="osp-how-node bottom-left" 
              initial={{ opacity: 0, x: -30 }} 
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }} 
              transition={{ delay: 0.7 }}
            >
              <div className="osp-node-icon"><FontAwesomeIcon icon={faPalette} /></div>
              <h3>Creative Design</h3>
              <p>Breaking boundaries with world-class user experiences and modern brand identity.</p>
            </motion.div>

            <motion.div 
              className="osp-how-node bottom-right" 
              initial={{ opacity: 0, x: 30 }} 
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }} 
              transition={{ delay: 0.9 }}
            >
              <div className="osp-node-icon"><FontAwesomeIcon icon={faRocket} /></div>
              <h3>Tech Innovation</h3>
              <p>Building robust, scalable architectures that grow seamlessly with your digital needs.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

const OurStoryPage = () => {
  const navigate = useNavigate();

  // Mouse position tracking for background parallax effect
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Controlled rotating disc states and ref
  const [isHovered, setIsHovered] = useState(false);
  const [mouseAngle, setMouseAngle] = useState(0);
  const hubRef = useRef(null);

  const handleMouseMoveHub = (e) => {
    if (!hubRef.current) return;
    const rect = hubRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const radians = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    const degrees = radians * (180 / Math.PI) + 90;
    setMouseAngle(degrees);
  };

  const getCardOpacity = (angle, targetAngle) => {
    const norm = (angle % 360 + 360) % 360;
    const dist = Math.abs(norm - targetAngle);
    const diff = Math.min(dist, 360 - dist);
    if (diff >= 70) return 0;
    return 1 - (diff / 70);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      // Calculate offset from center of screen normalized between -15 and 15 pixels
      const x = ((clientX - window.innerWidth / 2) / (window.innerWidth / 2)) * 15;
      const y = ((clientY - window.innerHeight / 2) / (window.innerHeight / 2)) * 15;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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
    <div>
      <TopNavBar />
      <TwoLineNavbar />
      <div className="osp-page">

        {/* Redesigned Bento-Layout Header */}
        <header className="osp-hero-section">
          {/* Decorative background overlay items */}
          <div className="osp-light-noise"></div>
          <div className="osp-dot-matrix"></div>
          <div className="osp-glow-orb orb-red"></div>
          <div className="osp-glow-orb orb-purple"></div>
          <div className="osp-glow-orb orb-blue"></div>

          {/* Interactive Arrow Grids with parallax */}
          <div className="osp-arrow-grid-container left" style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}>
            <ArrowGrid rows={14} cols={5} />
          </div>
          <div className="osp-arrow-grid-container right" style={{ transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)` }}>
            <ArrowGrid rows={14} cols={5} />
          </div>

          {/* Floating Widget Containers */}
          <div className="osp-floating-widgets-container">
            {/* Left Side Widgets Group */}
            <div className="osp-left-widgets-group">
              {/* Left Side vertical scale pill */}
              <div className="osp-vertical-scale-pill osp-left-scale-pill">
                <div className="osp-scale-item active-emoji item-brain">
                  <FontAwesomeIcon icon={faBrain} />
                </div>
                <div className="osp-scale-item item-palette">
                  <FontAwesomeIcon icon={faPalette} />
                </div>
                <div className="osp-scale-item item-code">
                  <FontAwesomeIcon icon={faCode} />
                </div>
                <div className="osp-scale-item item-chart">
                  <FontAwesomeIcon icon={faChartBar} />
                </div>
                <div className="osp-scale-item item-globe">
                  <FontAwesomeIcon icon={faGlobe} />
                </div>
              </div>

              <div className="osp-left-cards-column">
                {/* Tech Group Card */}
                <div className="osp-widget-float float-left-1">
                  <div className="osp-widget-badge">DIVISION</div>
                  <h4 className="osp-widget-title">Tech Group</h4>
                  <p className="osp-widget-desc">Enterprise software & custom web architecture.</p>
                  <div className="osp-widget-meta">
                    <span className="osp-meta-status active"></span>
                    <span>Active Systems</span>
                  </div>
                </div>

                {/* Middle Experience Card */}
                <div className="osp-widget-float float-left-mid">
                  <div className="osp-widget-badge">EXPERIENCE</div>
                  <h4 className="osp-widget-title">3+ Years</h4>
                  <p className="osp-widget-desc">Pioneering creative & digital excellence.</p>
                  <div className="osp-widget-meta">
                    <span className="osp-meta-status active"></span>
                    <span>Est. Jan 2023</span>
                  </div>
                </div>

                {/* Track Record Card */}
                <div className="osp-widget-float float-left-2">
                  <div className="osp-widget-badge">TRACK RECORD</div>
                  <h4 className="osp-widget-title">1,000+ Projects</h4>
                  <p className="osp-widget-desc">Delivered across 15+ global industries.</p>
                  {/* Mini Sparkline Chart */}
                  <div className="osp-sparkline">
                    <div className="osp-spark-bar" style={{ height: '40%' }}></div>
                    <div className="osp-spark-bar" style={{ height: '60%' }}></div>
                    <div className="osp-spark-bar" style={{ height: '50%' }}></div>
                    <div className="osp-spark-bar" style={{ height: '80%' }}></div>
                    <div className="osp-spark-bar" style={{ height: '95%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* New: Activity Capsule Pill on Left (similar to Heart Activity) */}
            <div className="osp-widget-pill float-left-pill">
              <div className="osp-pill-icon"><FontAwesomeIcon icon={faHeart} /></div>
              <div className="osp-pill-text-wrap">
                <span className="osp-pill-title">Brand Quality</span>
                <span className="osp-pill-sub">A Grade Agency</span>
              </div>
            </div>

            {/* Right Side Widgets Group */}
            <div className="osp-right-widgets-group">
              <div className="osp-right-top-row">
                <div className="osp-widget-float float-right-1">
                  <div className="osp-widget-badge">ACADEMY</div>
                  <h4 className="osp-widget-title">Learning Gen</h4>
                  <p className="osp-widget-desc">UI/UX & graphic design courses.</p>
                  <div className="osp-widget-progress-container">
                    <div className="osp-widget-progress-label">
                      <span>Graduation Rate</span>
                      <span>98%</span>
                    </div>
                    <div className="osp-widget-progress-bar">
                      <div className="osp-widget-progress-fill" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="osp-right-stacked-boxes">
                  <div className="osp-mini-square-box box-arrow">
                    <div className="osp-circle-icon-wrap">
                      <span className="osp-arrow-symbol">↗</span>
                    </div>
                  </div>
                  <div className="osp-mini-square-box box-gauge">
                    <div className="osp-gauge-circle">
                      <div className="osp-gauge-fill" style={{ height: '75%' }}></div>
                      <span className="osp-gauge-label">99%</span>
                    </div>
                  </div>
                </div>

                <div className="osp-vertical-scale-pill">
                  <div className="osp-scale-item active-emoji item-brain">
                    <FontAwesomeIcon icon={faBrain} />
                  </div>
                  <div className="osp-scale-item item-palette">
                    <FontAwesomeIcon icon={faPalette} />
                  </div>
                  <div className="osp-scale-item item-code">
                    <FontAwesomeIcon icon={faCode} />
                  </div>
                  <div className="osp-scale-item item-chart">
                    <FontAwesomeIcon icon={faChartBar} />
                  </div>
                  <div className="osp-scale-item item-globe">
                    <FontAwesomeIcon icon={faGlobe} />
                  </div>
                </div>
              </div>

              {/* Bottom Row: Satisfaction (wide card) */}
              <div className="osp-widget-float float-right-2 wide-card">
                <div className="osp-widget-badge">SATISFACTION</div>
                <h4 className="osp-widget-title">95% Retention</h4>
                <p className="osp-widget-desc">Continuous evolution & trusted partnerships.</p>
                <div className="osp-widget-circle-meta">
                  <div className="osp-circle-pulse"></div>
                  <span>Top Rated Agency</span>
                </div>
              </div>

              {/* Bottom Row: Global Impact (wide card) */}
              <div className="osp-widget-float float-right-wide wide-card">
                <div className="osp-widget-badge">GLOBAL IMPACT</div>
                <h4 className="osp-widget-title">15+ Industries</h4>
                <p className="osp-widget-desc">Empowering enterprises worldwide with custom systems.</p>
                <div className="osp-widget-circle-meta">
                  <div className="osp-circle-pulse"></div>
                  <span>Active Globally</span>
                </div>
              </div>
            </div>

            {/* Mobile-only CTA Buttons positioned before bottom card */}
            <div className="osp-hero-centered-actions mobile-only">
              <button className="osp-hero-btn-primary" onClick={handleWhatsAppClick}>
                START PROJECT
              </button>
              <button className="osp-hero-btn-secondary" onClick={handlePortfolioClick}>
                EXPLORE WORKS
              </button>
            </div>

            {/* Bottom Card - Expanded Roadmap/Details */}
            <div className="osp-widget-float float-bottom-1">
              <div className="osp-bottom-widget-row">
                <div className="osp-bottom-widget-col">
                  <span className="osp-bottom-label">FOUNDED</span>
                  <strong className="osp-bottom-val">2023</strong>
                </div>
                <div className="osp-bottom-divider"></div>
                <div className="osp-bottom-widget-col2">
                  <span className="osp-bottom-label">CURRENT ROADMAP</span>
                  <strong className="osp-bottom-val">PHASE 05/06</strong>
                  <span className="osp-bottom-sub">SaaS & AI expansions</span>
                </div>
              </div>
            </div>
          </div>

          <div className="osp-modern-hero-container">
            {/* Center Content */}
            <motion.div
              className="osp-hero-centered-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0 }}
            >
              {/* Header Badge capsule */}
              <div className="osp-hero-badge">
                <span className="osp-badge-square">■</span>
                <span>Building Intelligent Solutions for The Digital Future</span>
              </div>

              {/* Title with Outfit and Playfair Display mix */}
              <h1 className="osp-hero-centered-title">
                ENGLORAY LEGACY<span className="osp-italic-serif">A story of passion, precision, and digital excellence</span>
              </h1>

              {/* CTA Buttons (Desktop) */}
              <div className="osp-hero-centered-actions desktop-only">
                <button className="osp-hero-btn-primary" onClick={handleWhatsAppClick}>
                  START PROJECT
                </button>
                <button className="osp-hero-btn-secondary" onClick={handlePortfolioClick}>
                  EXPLORE WORKS
                </button>
              </div>
            </motion.div>
          </div>

          {/* Bottom Product Marquee */}
          <div className="osp-product-marquee">
            <div className="osp-marquee-track">
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  <div className="osp-marquee-item">UNIFIED CRM SOLUTIONS</div>
                  <div className="osp-marquee-icon"><FontAwesomeIcon icon={faCompass} /></div>
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
          <section 
            className="osp-vm-scanner-section" 
            id="vision-mission-unified"
            ref={hubRef}
            onMouseMove={handleMouseMoveHub}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="osp-container osp-vm-scanner-container">
              <div className="osp-vm-scanner-grid">

                {/* Left Column: Vision - Synced scanning visibility */}
                <div
                  className={`osp-vm-column osp-vm-left ${!isHovered ? 'auto-scan-vision' : ''}`}
                  style={isHovered ? { opacity: getCardOpacity(mouseAngle, 270), transition: 'opacity 0.15s ease-out' } : {}}
                >
                  <div className="osp-vm-content-box">
                    <span className="osp-vm-label" style={{ color: '#30b0e4' }}>2020 — ESTABLISHED</span>
                    <h2 className="osp-vm-title">VISION</h2>
                    <p className="osp-vm-description">
                      {visionMissionContent.vision.text}
                    </p>
                  </div>
                </div>

                {/* Center Column: Controlled Rotating Hub */}
                <div className="osp-vm-hub-column">
                  <div 
                    className="osp-eclipse-container"
                    style={{ cursor: 'pointer' }}
                  >
                    <div
                      className={`osp-eclipse-graphic blue-theme ${!isHovered ? 'auto-rotate' : ''}`}
                      style={isHovered ? { transform: `rotate(${mouseAngle - 40}deg)`, transition: 'transform 0.15s ease-out' } : {}}
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
                    </div>
                  </div>
                </div>

                {/* Right Column: Mission - Synced scanning visibility */}
                <div
                  className={`osp-vm-column osp-vm-right ${!isHovered ? 'auto-scan-mission' : ''}`}
                  style={isHovered ? { opacity: getCardOpacity(mouseAngle, 90), transition: 'opacity 0.15s ease-out' } : {}}
                >
                  <div className="osp-vm-content-box" style={{ color: '#fff' }}>
                    <span className="osp-vm-label" style={{ color: '#30b0e4' }}>2026 — FUTURE</span>
                    <h2 className="osp-vm-title">MISSION</h2>
                    <p className="osp-vm-description">
                      {visionMissionContent.mission.text}
                    </p>
                  </div>
                </div>

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
          <HowWeGrowSection />

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
        <NewFooter />
        <BackToTop />
      </div>
    </div>
  );
};

export default OurStoryPage;
