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
  faRocket,
  faHeadset,
  faPuzzlePiece,
  faLock,
  faStar,
  faThumbsUp
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
// import saas3dShape from '../../../assets/saas_3d_shape.png';
import saasFeaturedBuilding from '../../../assets/saas_featured_building.png';
import microsoftLogo from '../../../assets/microsoft.png';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar'
import TopNavbar from '../../../Components/TopNavbar/TopNavbar'
import Footer from '../../../Components/Footer/Footer'

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
    <div className="saas-bg-icon path-icon-1">🚀</div>
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
                    Next-gen business automation & cloud orchestration <br />
                    Across 25+ Global Server Zones
                  </p>

                  {/* Search Bar (Matches Reference Image Layout) */}
                  <div className="saas-v2-search-panel anim-on-scroll delay-2">
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

                  <div className="saas-v2-quick-links anim-on-scroll delay-3">
                    <button className="saas-v2-contact-btn-shiny">
                      Contact Us
                      <div className="saas-v2-shiny-sweep"></div>
                    </button>
                  </div>
                </div>

                {/* Right Side: Dual Auto-Scrolling Card Columns over Background */}
                <div className="saas-v2-dynamic-visual">
                  <div className="saas-v2-scroll-col col-left">
                    <div className="saas-v2-scroll-track">
                      {[1, 2, 3].map((_, i) => (
                        <React.Fragment key={i}>
                          <div className="saas-v2-glass-strip-card">
                            <div className="saas-v2-strip-icon" style={{ background: '#dcfce7' }}><FontAwesomeIcon icon={faChartPie} /></div>
                            <div className="saas-v2-strip-text">
                              <h4>Scalable Infra</h4>
                              <p>Global edge nodes</p>
                            </div>
                          </div>
                          <div className="saas-v2-glass-strip-card">
                            <div className="saas-v2-strip-icon" style={{ background: '#fef9c3' }}><FontAwesomeIcon icon={faShieldHalved} /></div>
                            <div className="saas-v2-strip-text">
                              <h4>Secure SOC2</h4>
                              <p>Military grade</p>
                            </div>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  <div className="saas-v2-scroll-col col-right">
                    <div className="saas-v2-scroll-track reverse">
                      {[1, 2, 3].map((_, i) => (
                        <React.Fragment key={i}>
                          <div className="saas-v2-glass-strip-card">
                            <div className="saas-v2-strip-icon" style={{ background: '#dbeafe' }}><FontAwesomeIcon icon={faRobot} /></div>
                            <div className="saas-v2-strip-text">
                              <h4>AI Engine</h4>
                              <p>Neural workflows</p>
                            </div>
                          </div>
                          <div className="saas-v2-glass-strip-card">
                            <div className="saas-v2-strip-icon" style={{ background: '#ffedd5' }}><FontAwesomeIcon icon={faRocket} /></div>
                            <div className="saas-v2-strip-text">
                              <h4>Fast Deploy</h4>
                              <p>CI/CD pipeline</p>
                            </div>
                          </div>
                        </React.Fragment>
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

              {/* Floating text like in reference */}
              <div className="saas-v2-contact-float anim-on-scroll delay-4">
                Give us a call <strong>1-888-498-9240</strong> and <br />
                we can set you up, or <span>check our pricing plans</span>
              </div>
            </div>

            {/* White Footer */}
            <div className="saas-v2-white-footer">
              <div className="saas-v2-footer-content">
                {/* SaaS Metrics Badge (Bottom Left) */}
                <div className="saas-v2-bottom-badge anim-on-scroll delay-5">
                  <div className="saas-v2-spot-details">
                    <span className="saas-v2-spot-loc"><FontAwesomeIcon icon={faChartLine} style={{ marginRight: '8px' }} /> Real-time Analytics Hub</span>
                    <div className="saas-v2-spot-price">
                      <strong>99.9% Uptime</strong>
                      <button className="saas-v2-spot-btn">Explore Metrics</button>
                    </div>
                  </div>
                </div>

                {/* SaaS Product Names (Bottom Right) */}
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
                    <div className="saas-v2-logo-icon" style={{ color: '#ec4899' }}><FontAwesomeIcon icon={faRocket} /></div>
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
                and chat so your ops staff don't have to.
              </p>

              <a href="#!" className="stats-modern-btn anim-on-scroll delay-3">CONTACT US</a>
            </div>

            <div className="stats-modern-right">
              <div className="stats-visual-container">
                {/* Circular Path Animation */}
                <div className="stats-circular-path-wrap">
                  <div className="stats-main-arc"></div>
                  <div className="stats-rotating-orbit">
                    <div className="orbit-item icon-1">
                      <div className="orbit-icon-inner" style={{ background: '#ffffff', color: '#EA4335' }}><FontAwesomeIcon icon={faCloud} /></div>
                    </div>
                    <div className="orbit-item icon-2">
                      <div className="orbit-icon-inner" style={{ background: '#ffffff', color: '#4A154B' }}><FontAwesomeIcon icon={faComments} /></div>
                    </div>
                    <div className="orbit-item icon-3">
                      <div className="orbit-icon-inner" style={{ background: '#2b3a55', color: '#ffffff' }}><FontAwesomeIcon icon={faRobot} /></div>
                    </div>
                    <div className="orbit-item icon-4">
                      <div className="orbit-icon-inner" style={{ background: '#ffffff', color: '#000000' }}><FontAwesomeIcon icon={faRocket} /></div>
                    </div>
                  </div>
                </div>

                {/* Stats List */}
                <div className="stats-modern-values">
                  <div className="sm-stat-item anim-on-scroll">
                    <h4>100%</h4>
                    <p>Response rate</p>
                  </div>
                  <div className="sm-stat-item anim-on-scroll delay-1">
                    <h4>120x</h4>
                    <p>ROI</p>
                  </div>
                  <div className="sm-stat-item anim-on-scroll delay-2">
                    <h4>10x</h4>
                    <p>Cost reduction</p>
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
              { num: '01', cat: 'Management', title: 'Unified CRM Solutions', img: crm3d, link: '/crmPage' },
              { num: '02', cat: 'Infrastructure', title: 'Empowering ERP Systems', img: erp3d, link: '/erpPage' },
              { num: '03', cat: 'Support', title: 'AI Chatbot Intelligence', img: ai3d, link: '/aiChatbotPage' },
              { num: '04', cat: 'Recruitment', title: 'Job Seeker Hub', img: jobs3d, link: '/jobSeekerPage' },
              { num: '05', cat: 'Education', title: 'Career & Learning', img: learning3d, link: '/learningPage' }
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

        <section className="saasb-hero">
          <div className="saas-container">
            <div className="section-header anim-on-scroll">
              <h2 className="section-title">Our Core <span>Benefits</span></h2>
              <p className="section-subtitle">Empowering your business with high-performance tools, automated workflows, and intelligent insights.</p>
            </div>
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
                Streamline your operations, automate repetitive tasks, and gain real-time
                insights—all from a single powerful SaaS platform designed for growth.
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
                <div className="saasb-card-icon"><FontAwesomeIcon icon={faRocket} /></div>
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
              <h2>ROADMAP<br /><span>2025</span></h2>
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
                <div className="roadmap-v3-year-pill start anim-on-scroll">2025</div>

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
      <Footer />
    </>
  );
};

export default SaaS;
