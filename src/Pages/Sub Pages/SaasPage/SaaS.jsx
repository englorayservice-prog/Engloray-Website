import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faBuilding,
  faRobot,
  faBriefcase,
  faGraduationCap,
  faArrowRight,
  faBullseye,
  faChartLine,
  faComments,
  faMagnifyingGlass,
  faListCheck,
  faCalendarCheck,
  faDisplay,
  faCloud,
  faShieldHalved,
  faChartPie,
  faBolt,
  faArrowTrendUp,
  faHeadset,
  faPuzzlePiece,
  faLock,
  faStar,
  faThumbsUp,
  faMicrochip,
  faNetworkWired,
  faUpRightAndDownLeftFromCenter,
  faMicroscope,
  faServer,
  faDatabase,
  faLink,
  faBrain,
  faKey
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import './SaaS.css';
import crm3d from '../../../assets/crm_3d_new.png';
import erp3d from '../../../assets/erp_3d_new.png';
import ai3d from '../../../assets/ai_3d_new.png';
import jobs3d from '../../../assets/jobs_3d_new.png';
import learning3d from '../../../assets/learning_3d.png';
//import saas3dShape from '../../../assets/saas_3d_shape.png';
import saasFeaturedBuilding from '../../../assets/saas_featured_building.png';
import microsoftLogo from '../../../assets/microsoft.png';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar'
import TopNavbar from '../../../Components/TopNavbar/TopNavbar'
import SubFooterOne from '../../../Pages/Sub Pages/subFooterOne/NewFooter1'

const StatItem = ({ value, label, suffix = "", itemClass = "crm-stat-item" }) => {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;

      let totalMiliseconds = 2000;
      let incrementTime = (totalMiliseconds / end) > 10 ? (totalMiliseconds / end) : 10;

      let timer = setInterval(() => {
        start += 1;
        setDisplayValue(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className={itemClass}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {displayValue}{suffix}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {label}
      </motion.p>
    </div>
  );
};

const TypingText = ({ text, className = "typing-description", tag: Tag = "p" }) => {
  const [displayedText, setDisplayedText] = useState('');
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (!entry.isIntersecting) {
          setDisplayedText('');
          indexRef.current = 0;
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let animationFrame;
    let lastTime = 0;
    const speed = 40; // ms per character

    const animate = (time) => {
      if (!lastTime) lastTime = time;
      const delta = time - lastTime;

      if (isVisible && delta > speed && indexRef.current < text.length) {
        setDisplayedText(text.slice(0, indexRef.current + 1));
        indexRef.current++;
        lastTime = time;
      }

      if (indexRef.current < text.length && isVisible) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    if (isVisible) {
      animationFrame = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, text]);

  return <Tag ref={elementRef} className={className} style={{ willChange: 'contents' }}>{displayedText}</Tag>;
};

// Memoized background graphics to prevent re-renders on scroll
const BackgroundGraphics = React.memo(() => (
  <div className="saas-hero-bg-graphics" style={{ pointerEvents: 'none' }}>
    <div className="saas-bg-icon path-icon-1">⚡</div>
    <div className="saas-bg-icon path-icon-2">💡</div>
    <div className="saas-bg-icon path-icon-3">🛠️</div>
    <div className="saas-bg-icon path-icon-4">🎯</div>
    <div className="saas-bg-icon path-icon-5">📱</div>
  </div>
));

const SaaS = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible'); // Optional: removes class when scrolled away
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    const items = document.querySelectorAll('.connected-product-item, .our-products-nav-section, .anim-on-scroll');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <TopNavbar />
      <TwoLineNavbar />
      <div className="saas-container">
        <header className="saas-v2-hero-wrapper" id="saas-hero">
          <div className="saas-v2-master-card">
            {/* Main Dark Content Area */}
            <div className="saas-v2-dark-block">
              <div className="saas-v2-hero-main">
                {/* Left Side: Text and Search */}
                <div className="saas-v2-hero-body">
                  <h1 className="saas-v2-hero-title anim-on-scroll">
                    Optimize Your <span>Future Enterprise</span>
                  </h1>
                  <p className="saas-v2-hero-subtitle anim-on-scroll delay-1">
                    Unlock unprecedented efficiency and accelerate digital transformation with our next-generation business automation and advanced cloud orchestration platforms.
                    Designed to streamline complex workflows, our solutions empower your workforce with intelligent process automation, seamless data Integrations
                    Leverage our secure, scalable infrastructure spanning 25+ Global Server Zones to ensure high availability, reduced latency, and unmatched performance.
                  </p>

                  {/* Action Row: Search Bar and Contact Button in a straight line */}
                  <div className="saas-v2-hero-actions anim-on-scroll delay-2">
                    <div className="saas-v2-search-panel">
                      <div className="saas-v2-search-group">
                        <div className="saas-v2-field">
                          <label>Service Type</label>
                          <div className="saas-v2-select-wrap">
                            <span>Managed Cloud</span>
                            <FontAwesomeIcon icon={faArrowRight} className="fa-rotate-90" />
                          </div>
                        </div>
                      </div>
                      <div className="saas-v2-divider"></div>
                      <div className="saas-v2-search-group">
                        <div className="saas-v2-field">
                          <label>Resource Tier</label>
                          <div className="saas-v2-select-wrap">
                            <span>Enterprise Pro</span>
                            <FontAwesomeIcon icon={faArrowRight} className="fa-rotate-90" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <button className="saas-v2-contact-btn-shiny">
                      Contact Us
                      <div className="saas-v2-shiny-sweep"></div>
                    </button>
                  </div>
                </div>

                {/* Right Side: Productivity Card moved to Hero Top Right */}
                {/* <div className="saas-v2-productivity-card anim-on-scroll delay-5 hero-top-right">
                  <div className="saas-v2-prod-icon"><FontAwesomeIcon icon={faChartLine} /></div>
                  <div className="saas-v2-prod-info">
                    <span className="saas-v2-prod-val">85%</span>
                    <span className="saas-v2-prod-label">Efficiency Boost</span>
                  </div>
                </div> */}

                {/* Right Side: Dual Auto-Scrolling Card Columns for visual depth */}
                <div className="saas-v2-dynamic-visual anim-on-scroll delay-4">
                  {/* Column 1: Scrolling Up */}
                  <div className="saas-v2-scroll-col col-main">
                    <div className="saas-v2-scroll-track">
                      {[
                        { icon: faChartPie, title: 'Scalable Infra', desc: 'Global edge nodes', bg: '#dcfce7' },
                        { icon: faShieldHalved, title: 'Secure SOC2', desc: 'Military grade', bg: '#fef9c3' },
                        { icon: faBolt, title: 'Fast Deploy', desc: 'CI/CD pipeline', bg: '#fef08a' },
                        { icon: faRobot, title: 'AI Engine', desc: 'Neural workflows', bg: '#ddd6fe' },
                        { icon: faNetworkWired, title: 'Smart Routing', desc: 'Optimized traffic', bg: '#bae6fd' },
                        { icon: faUpRightAndDownLeftFromCenter, title: 'Auto Scaling', desc: 'Dynamic resources', bg: '#fbcfe8' },
                        { icon: faMicroscope, title: '24/7 Monitor', desc: 'Deep health checks', bg: '#dcfce7' },
                        { icon: faServer, title: 'Load Balancing', desc: 'High availability', bg: '#fef9c3' }
                      ].map((card, idx) => (
                        <div className="saas-v2-glass-strip-card" key={idx}>
                          <div className="saas-v2-strip-icon" style={{ background: card.bg }}><FontAwesomeIcon icon={card.icon} /></div>
                          <div className="saas-v2-strip-text">
                            <h4>{card.title}</h4>
                            <p>{card.desc}</p>
                          </div>
                        </div>
                      ))}
                      {/* Duplicate for seamless loop */}
                      {[
                        { icon: faChartPie, title: 'Scalable Infra', desc: 'Global edge nodes', bg: '#dcfce7' },
                        { icon: faShieldHalved, title: 'Secure SOC2', desc: 'Military grade', bg: '#fef9c3' },
                        { icon: faBolt, title: 'Fast Deploy', desc: 'CI/CD pipeline', bg: '#fef08a' },
                        { icon: faRobot, title: 'AI Engine', desc: 'Neural workflows', bg: '#ddd6fe' },
                        { icon: faNetworkWired, title: 'Smart Routing', desc: 'Optimized traffic', bg: '#bae6fd' },
                        { icon: faUpRightAndDownLeftFromCenter, title: 'Auto Scaling', desc: 'Dynamic resources', bg: '#fbcfe8' },
                        { icon: faMicroscope, title: '24/7 Monitor', desc: 'Deep health checks', bg: '#dcfce7' },
                        { icon: faServer, title: 'Load Balancing', desc: 'High availability', bg: '#fef9c3' }
                      ].map((card, idx) => (
                        <div className="saas-v2-glass-strip-card" key={`dup-${idx}`}>
                          <div className="saas-v2-strip-icon" style={{ background: card.bg }}><FontAwesomeIcon icon={card.icon} /></div>
                          <div className="saas-v2-strip-text">
                            <h4>{card.title}</h4>
                            <p>{card.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 2: Scrolling Down */}
                  <div className="saas-v2-scroll-col col-right-desktop-only">
                    <div className="saas-v2-scroll-track reverse">
                      {[
                        { icon: faCloud, title: 'Cloud Sync', desc: 'Data bridge', bg: '#bae6fd' },
                        { icon: faPuzzlePiece, title: 'API Nexus', desc: 'Modular', bg: '#fbcfe8' },
                        { icon: faChartLine, title: 'Auto Analytics', desc: 'AI Insights', bg: '#dcfce7' },
                        { icon: faMicrochip, title: 'Edge Compute', desc: 'Low Latency', bg: '#fef9c3' },
                        { icon: faDatabase, title: 'Data Lake', desc: 'Elastic storage', bg: '#fef08a' },
                        { icon: faLink, title: 'Smart Hooks', desc: 'Real-time events', bg: '#ddd6fe' },
                        { icon: faBrain, title: 'Neural Mesh', desc: 'Distributed AI', bg: '#bae6fd' },
                        { icon: faKey, title: 'Crypto Shield', desc: 'Advanced encryption', bg: '#fbcfe8' }
                      ].map((card, idx) => (
                        <div className="saas-v2-glass-strip-card" key={idx}>
                          <div className="saas-v2-strip-icon" style={{ background: card.bg }}><FontAwesomeIcon icon={card.icon} /></div>
                          <div className="saas-v2-strip-text">
                            <h4>{card.title}</h4>
                            <p>{card.desc}</p>
                          </div>
                        </div>
                      ))}
                      {/* Duplicate for seamless loop */}
                      {[
                        { icon: faCloud, title: 'Cloud Sync', desc: 'Data bridge', bg: '#bae6fd' },
                        { icon: faPuzzlePiece, title: 'API Nexus', desc: 'Modular', bg: '#fbcfe8' },
                        { icon: faChartLine, title: 'Auto Analytics', desc: 'AI Insights', bg: '#dcfce7' },
                        { icon: faMicrochip, title: 'Edge Compute', desc: 'Low Latency', bg: '#fef9c3' },
                        { icon: faDatabase, title: 'Data Lake', desc: 'Elastic storage', bg: '#fef08a' },
                        { icon: faLink, title: 'Smart Hooks', desc: 'Real-time events', bg: '#ddd6fe' },
                        { icon: faBrain, title: 'Neural Mesh', desc: 'Distributed AI', bg: '#bae6fd' },
                        { icon: faKey, title: 'Crypto Shield', desc: 'Advanced encryption', bg: '#fbcfe8' }
                      ].map((card, idx) => (
                        <div className="saas-v2-glass-strip-card" key={`dup-${idx}`}>
                          <div className="saas-v2-strip-icon" style={{ background: card.bg }}><FontAwesomeIcon icon={card.icon} /></div>
                          <div className="saas-v2-strip-text">
                            <h4>{card.title}</h4>
                            <p>{card.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Image with Blur/Overlay */}
              <div className="saas-v2-hero-bg-image">
                <img src={saasFeaturedBuilding} alt="Building Background" />
                <div className="saas-v2-bg-gradient"></div>
              </div>
            </div>

            {/* White Footer */}
            <div className="saas-v2-white-footer">
              <div className="saas-v2-footer-header anim-on-scroll">
                <div className="saas-v2-live-status-pill">
                  <div className="saas-v2-pulse-dot"></div>
                  <span>Live Status: <strong>500+ Global Edge Nodes</strong></span>
                </div>
                <h2 className="saas-v2-footer-title">THE INFRASTRUCTURE POWERING <br /><span>GLOBAL EFFICIENCY</span></h2>
                <p className="saas-v2-footer-subtitle">
                  Our proprietary global network backbone leverages advanced software-defined networking (SDN) and edge computing to ensure lightning-fast connectivity,
                  ultra-low latency, and enterprise-grade reliability at every scale, anywhere in the world.
                </p>
              </div>

              <div className="saas-v2-middle-stats anim-on-scroll delay-5">
                <div className="saas-v2-m-stat">
                  <strong>Global Reach</strong>
                  <p>
                    Connecting over 10,000+ global enterprises across 150+ countries with localized edge nodes for maximum performance and regional data sovereignty.
                    Our expansive network ensures that your data travels the shortest possible distance, reducing latency and improving user experience worldwide.
                  </p>
                </div>
                <div className="saas-v2-m-divider"></div>
                <div className="saas-v2-m-stat">
                  <strong>Enterprise Grade</strong>
                  <p>
                    Highest-tier security protocols with end-to-end encryption, SOC2 compliance, and multi-layer threat detection systems.
                    We provide a fortress-like environment for your most sensitive data, utilizing real-time monitoring and automated incident response to keep your operations secure 24/7.
                  </p>
                </div>
                <div className="saas-v2-m-divider"></div>
                <div className="saas-v2-m-stat">
                  <strong>Expert Support</strong>
                  <p>
                    Unmatched 24/7 dedicated technical assistance from elite engineers ready to optimize your infrastructure at any moment.
                    From initial migration to complex troubleshooting, our team acts as an extension of your own, ensuring your mission-critical systems never skip a beat.
                  </p>
                </div>
              </div>

              <div className="saas-v2-footer-content">
                <div className="saas-v2-bottom-badge anim-on-scroll delay-5">
                  <div className="saas-v2-spot-details">
                    <span className="saas-v2-spot-loc"><FontAwesomeIcon icon={faChartLine} style={{ marginRight: '10px' }} /> <strong>Real-time Analytics Hub:</strong> Monitoring 2.5B+ requests daily</span>
                    <div className="saas-v2-spot-price">
                      <strong>99.99% Uptime SLA</strong>
                      <button className="saas-v2-spot-btn">Explore Live Metrics</button>
                    </div>
                  </div>
                </div>

                <div className="saas-v2-partner-logos anim-on-scroll delay-5">
                  <div className="saas-v2-logo-box">
                    <div className="saas-v2-logo-icon" style={{ color: '#6366f1' }}><FontAwesomeIcon icon={faCloud} /></div>
                    <span>Crm Solutions</span>
                  </div>
                  <div className="saas-v2-logo-box">
                    <div className="saas-v2-logo-icon" style={{ color: '#10b981' }}><FontAwesomeIcon icon={faShieldHalved} /></div>
                    <span>ERP Software</span>
                  </div>
                  <div className="saas-v2-logo-box">
                    <div className="saas-v2-logo-icon" style={{ color: '#f59e0b' }}><FontAwesomeIcon icon={faChartPie} /></div>
                    <span>Chatbot AI</span>
                  </div>
                  <div className="saas-v2-logo-box">
                    <div className="saas-v2-logo-icon" style={{ color: '#ec4899' }}><FontAwesomeIcon icon={faBriefcase} /></div>
                    <span>Job seeker hub</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* SaaS AI Workforce / Stats Section */}
        <section className="saas-stats-modern-section" id="results">
          <div className="saas-container stats-modern-grid">

            <div className="stats-modern-left">
              <span className="tiny-badge-new anim-on-scroll">FROM INBOX TO INVOICE • STATISTICS</span>
              <h2 className="stats-modern-title anim-on-scroll delay-1">
                AI Workforce.<br />
                Built for <span>Freight Teams.</span>
              </h2>
              <p className="stats-modern-desc anim-on-scroll delay-2">
                Our intelligent SaaS solutions read, write and act across TMS, email
                and chat so your ops staff don't have to. Experience a unified interface
                where AI automates complex logistics workflows, ensures 100% data
                accuracy, and empowers your team to focus on high-level strategy
                instead of repetitive administrative tasks.
              </p>

              <a href="#!" className="stats-modern-btn anim-on-scroll delay-3">BOOK A DEMO NOW</a>
            </div>

            <div className="stats-modern-right">
                <div className="saas-v3-portal-wrap">
                  {/* Layered Background Rings */}
                  <div className="portal-ring ring-outer"></div>
                  <div className="portal-ring ring-middle"></div>
                  <div className="portal-ring ring-inner"></div>

                  {/* Central Core Node */}
                  <div className="portal-core">
                    <div className="core-pulse"></div>
                    <div className="core-inner">
                      <FontAwesomeIcon icon={faBrain} />
                    </div>
                  </div>

                  {/* Floating Stat Cards */}
                  <div className="portal-stat-card s-card-1 anim-on-scroll">
                    <div className="s-card-glow"></div>
                    <div className="s-card-content">
                      <span className="s-val">100%</span>
                      <span className="s-label">Accuracy Rate</span>
                    </div>
                  </div>

                  <div className="portal-stat-card s-card-2 anim-on-scroll delay-1">
                    <div className="s-card-glow"></div>
                    <div className="s-card-content">
                      <span className="s-val">120x</span>
                      <span className="s-label">Efficiency ROI</span>
                    </div>
                  </div>

                  <div className="portal-stat-card s-card-3 anim-on-scroll delay-2">
                    <div className="s-card-glow"></div>
                    <div className="s-card-content">
                      <span className="s-val">10x</span>
                      <span className="s-label">Cost Reduction</span>
                    </div>
                  </div>

                  {/* Left Side Card */}
                  <div className="portal-stat-card s-card-4 anim-on-scroll delay-3">
                    <div className="s-card-glow"></div>
                    <div className="s-card-content">
                      <span className="s-val">99.9%</span>
                      <span className="s-label">Uptime SLA</span>
                    </div>
                  </div>
                </div>
            </div>

          </div>
        </section>


        {/* SaaS Benefits Section */}


        {/*new our products single cards */}

        {/* ─── NEW OUR PRODUCTS SHOWCASE ─── */}
        <section className="saas-products-showcase" id="our-products">
          <div className="saas-container">
            <div className="section-header anim-on-scroll">
              <h2 className="section-title">Our Unified <span>Products</span></h2>
              <p className="section-subtitle">Discover our specialized platforms designed to scale every aspect of your enterprise.</p>
            </div>
          </div>

          <div className="showcase-grid">
            {[
              { num: '01', cat: 'Management', title: 'Unified CRM Solutions', img: crm3d, link: '/CrmPage' },
              { num: '02', cat: 'Infrastructure', title: 'Empowering ERP Systems', img: erp3d, link: '/ErpPage ' },
              { num: '03', cat: 'Support', title: 'AI Chatbot Intelligence', img: ai3d, link: '/AiChatbotPage' },
              { num: '04', cat: 'Recruitment', title: 'Job Seeker Hub', img: jobs3d, link: '/JobSeekerPage' },
              { num: '05', cat: 'Education', title: 'Career & Learning', img: learning3d, link: '/LearningPage' }
            ].map((product, idx) => (
              <Link key={idx} to={product.link} className="showcase-item anim-on-scroll" style={{ transitionDelay: `${idx * 0.15}s` }}>
                <img src={product.img} alt={product.title} className="showcase-bg-img" />
                <div className="showcase-num">{product.num}</div>
                <div className="showcase-content">
                  <span className="product-cat-tag">{product.cat}</span>
                  <div className="showcase-footer">
                    <div className="product-title-wrap">
                      <h3 className="product-main-title">{product.title}</h3>
                    </div>
                    <div className="nav-arrow-btn">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="saas-core-benefits-section">
          <div className="section-header anim-on-scroll">
            <h2 className="saasb-section-title">Our Core <span>Benefits</span></h2>
            <p className="saasb-section-sub-subtitle">Empowering your business with high-performance tools, automated workflows, and intelligent insights.</p>
          </div>


          <div className="saasb-hero-container">

            {/* LEFT CONTENT */}
            <div className="saasb-hero-left">
              <h1>
                Build smarter workflows <br />
                and scale faster <br />
                with confidence
              </h1>

              <p>
                Streamline your operations from top to bottom, automate repetitive manual tasks, and gain powerful real-time digital
                insights—all from a single, unified SaaS platform designed specifically for long-term global growth.
                Focus on what matters while our AI-driven software handles the complexity behind the scenes.
              </p>
              <div className="saasb-features">
                <span>Core capabilities</span>
                <div className="saasb-feature-icons">
                  <div className="saasb-f-icon saasb-green">Speed</div>
                  <div className="saasb-f-icon saasb-yellow">Scale</div>
                  <div className="saasb-f-icon saasb-purple">Insights</div>
                  <div className="saasb-f-icon saasb-blue">Security</div>
                  <div className="saasb-f-icon saasb-orange">Automation</div>
                </div>
              </div>
            </div>

            {/* RIGHT VISUAL (No Lines, using Icons) */}
            <div className="saasb-hero-right">

              <div className="saasb-card saasb-c1">
                <div className="saasb-card-icon"><FontAwesomeIcon icon={faChartPie} /></div>
                <h4>Analytics</h4>
                <p>Track user behavior in real-time</p>
              </div>

              <div className="saasb-card saasb-c2">
                <div className="saasb-card-icon"><FontAwesomeIcon icon={faRobot} /></div>
                <h4>Automation</h4>
                <p>Automate workflows effortlessly</p>
              </div>

              <div className="saasb-card saasb-c3">
                <div className="saasb-card-icon"><FontAwesomeIcon icon={faCloud} /></div>
                <h4>Cloud Sync</h4>
                <p>Access data anywhere instantly</p>
              </div>

              <div className="saasb-card saasb-center">
                <div className="saasb-hub-ring">
                  <div className="saasb-hub-icon"><FontAwesomeIcon icon={faBullseye} /></div>
                </div>
                <h4>All-in-One</h4>
                <p>Manage everything in one place</p>
              </div>

              <div className="saasb-card saasb-c4">
                <div className="saasb-card-icon"><FontAwesomeIcon icon={faShieldHalved} /></div>
                <h4>Security</h4>
                <p>Enterprise-grade protection</p>
              </div>

              <div className="saasb-card saasb-c5">
                <div className="saasb-card-icon"><FontAwesomeIcon icon={faChartLine} /></div>
                <h4>Insights</h4>
                <p>Make smarter business decisions</p>
              </div>

              <div className="saasb-card saasb-c6">
                <div className="saasb-card-icon"><FontAwesomeIcon icon={faPuzzlePiece} /></div>
                <h4>Integrations</h4>
                <p>Connect with your favorite tools</p>
              </div>

              <div className="saasb-card saasb-bottom">
                <div className="saasb-card-icon"><FontAwesomeIcon icon={faArrowTrendUp} /></div>
                <h4>Scalability</h4>
                <p>Grow without limits</p>
              </div>

              {/* FLOATING ICONS */}
              {/* <div className="saasb-float-icon saasb-icon-top"><FontAwesomeIcon icon={faLock} /></div>
      <div className="saasb-float-icon saasb-icon-left"><FontAwesomeIcon icon={faStar} /></div>
      <div className="saasb-float-icon saasb-icon-right"><FontAwesomeIcon icon={faThumbsUp} /></div> */}

            </div>
          </div>
        </section>

        {/* ─── MODERN SaaS ROADMAP (V3) ─── */}
        <section className="saas-roadmap-v3" id="roadmap">
          <div className="roadmap-v3-container">

            <div className="roadmap-v3-side-title anim-on-scroll">
              <h2>ROADMAP<br /><span>2023</span></h2>
            </div>

            <div className="roadmap-v3-main-visual">
              <div className="roadmap-v3-path-svg-wrap">
                <svg viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M0 320C200 320 400 320 600 200C800 80 1000 80 1200 80" stroke="url(#roadmap_glow)" strokeWidth="20" strokeLinecap="round" style={{ filter: 'blur(20px)', opacity: 0.6 }} />
                  <path d="M0 320C200 320 400 320 600 200C800 80 1000 80 1200 80" stroke="url(#roadmap_gradient)" strokeWidth="8" strokeLinecap="round" />
                  {/* The Running Glow Light Effect */}
                  <path className="roadmap-path-runner" d="M0 320C200 320 400 320 600 200C800 80 1000 80 1200 80" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="roadmap_gradient" x1="0" y1="320" x2="1200" y2="80" gradientUnits="userSpaceOnUse"><stop stopColor="#f472b6" /><stop offset="0.5" stopColor="#a855f7" /><stop offset="1" stopColor="#3b82f6" /></linearGradient>
                    <linearGradient id="roadmap_glow" x1="0" y1="320" x2="1200" y2="80" gradientUnits="userSpaceOnUse"><stop stopColor="#f472b6" /><stop offset="0.5" stopColor="#a855f7" /><stop offset="1" stopColor="#3b82f6" /></linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="roadmap-v3-interaction-layer">
                <div className="roadmap-v3-year-pill start anim-on-scroll">2023</div>

                {/* Q1: Top Card */}
                <div className="roadmap-v3-node-item q1-pos anim-on-scroll delay-1">
                  <div className="roadmap-v3-dot"></div>
                  <div className="roadmap-v3-node-content top-card-wrap">
                    <div className="roadmap-v3-card glass-card">
                      <div className="card-q">Q1</div>
                      <ul className="card-list">
                        <li><strong>Product Vision:</strong> Define long-term strategy.</li>
                        <li><strong>Business Goals:</strong> Set clear, measurable goals.</li>
                      </ul>
                    </div>
                    <div className="v-connector"></div>
                  </div>
                </div>

                {/* Q2: Bottom Card */}
                <div className="roadmap-v3-node-item q2-pos anim-on-scroll delay-2">
                  <div className="roadmap-v3-dot"></div>
                  <div className="roadmap-v3-node-content bottom-card-wrap">
                    <div className="v-connector"></div>
                    <div className="roadmap-v3-card glass-card">
                      <div className="card-q">Q2</div>
                      <ul className="card-list">
                        <li><strong>Feedback:</strong> Gather stakeholders insights.</li>
                        <li><strong>Identify Features:</strong> Determine needed outcomes.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Q3: Top Card */}
                <div className="roadmap-v3-node-item q3-pos anim-on-scroll delay-3">
                  <div className="roadmap-v3-dot"></div>
                  <div className="roadmap-v3-node-content top-card-wrap">
                    <div className="roadmap-v3-card glass-card">
                      <div className="card-q">Q3</div>
                      <ul className="card-list">
                        <li><strong>Prioritize:</strong> Impact and feasibility ranking.</li>
                        <li><strong>Allocate:</strong> timelines and resources setup.</li>
                      </ul>
                    </div>
                    <div className="v-connector"></div>
                  </div>
                </div>

                {/* Q4: Bottom Card */}
                <div className="roadmap-v3-node-item q4-pos anim-on-scroll delay-4">
                  <div className="roadmap-v3-dot"></div>
                  <div className="roadmap-v3-node-content bottom-card-wrap">
                    <div className="v-connector"></div>
                    <div className="roadmap-v3-card glass-card">
                      <div className="card-q">Q4</div>
                      <ul className="card-list">
                        <li><strong>Information:</strong> Best way to present roadmap.</li>
                        <li>Launch & Stakeholders Showcase.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="roadmap-v3-year-pill end anim-on-scroll delay-5">2026</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <SubFooterOne />
    </>
  );
};

export default SaaS;
