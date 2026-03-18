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
  faDisplay
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import './SaaS.css';
import crm3d from '../../../assets/crm_3d.jpg';
import erp3d from '../../../assets/erp_3d.jpg';
import ai3d from '../../../assets/ai_3d.jpg';
import jobs3d from '../../../assets/jobs_3d.jpg';
import learning3d from '../../../assets/learning_3d.jpg';
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
  const [index, setIndex] = useState(0);
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (!entry.isIntersecting) {
          setDisplayedText('');
          setIndex(0);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 60); // Slower, more readable typing speed
      return () => clearTimeout(timeout);
    }
  }, [isVisible, index, text]);

  return <Tag ref={elementRef} className={className}>{displayedText}</Tag>;
};

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

    const items = document.querySelectorAll('.connected-product-item, .our-products-nav-section');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <TopNavbar />
      <TwoLineNavbar />
      <div className="saas-container">
        <header className="saas-header-section">
          <div className="floating-card fc-1">
            <h4>DESIGN SYSTEM</h4>
            <p>Pro components ready to use.</p>
          </div>
          <div className="floating-card fc-2">
            <h4>PROJECT TIMELINE</h4>
            <p>98% tasks completed this week.</p>
          </div>
          <div className="floating-card fc-3">
            <div className="analytics-dots">
              <span className="dot dot-1"></span>
              <span className="dot dot-2"></span>
            </div>
            <h4>TEAM ANALYTICS</h4>
            <p>12+ active members tonight.</p>
          </div>
          <div className="floating-card fc-4">
            <h4>CLOUD SECURITY</h4>
            <p>End-to-end encryption enabled.</p>
          </div>

          <main className="saas-hero">
            <div className="saas-badge">
              <img src="https://ui-avatars.com/api/?name=JS&background=random" alt="User" style={{ width: '24px', borderRadius: '50%' }} />
              <span>Join 3k+ Members</span>
              <a href="#!" className="join-btn">Join Waitlist</a>
            </div>

            <h1 className="saas-title">
              <TypingText
                text="Discover SaaS, Your Project Management Companion"
                tag="span"
                className="typing-title"
              />
            </h1>

            <p className="saas-subtitle">
              Explore our powerful SaaS mobile app for convenient project management,
              collaboration, and productivity anytime, anywhere.
            </p>

            <div className="saas-actions">
              <a href="#!" className="btn-primary">Download Now</a>
              <a href="#!" className="btn-secondary">Contact Us</a>
            </div>

            {/* Mockups */}
            <div className="saas-mockups-container">
              <div className="mockup-item mockup-side">
                <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&auto=format&fit=crop" alt="App Screen 1" />
              </div>
              <div className="mockup-item mockup-center">
                <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&auto=format&fit=crop" alt="App Screen 2" />
              </div>
              <div className="mockup-item mockup-side">
                <img src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=500&auto=format&fit=crop" alt="App Screen 3" />
              </div>
            </div>
          </main>
        </header>


        {/*new our products single cards */}

        {/* NEW CRM SOLUTIONS SECTION ADDED HERE */}
        <section className="crm-solutions-section">
          <div className="crm-hero-container">
            {/* Main Hero Section with Background */}
            <div className="crm-hero-main">
              {/* Background Image as absolute element */}
              <img
                src={crm3d}
                alt="CRM Dashboard"
                className="crm-hero-bg-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                loading="eager"
              />
              <div className="crm-hero-overlay"></div>

              <div className="crm-hero-content">
                <div className="crm-content-center">
                  <motion.span
                    className="crm-badge"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    #1 CRM
                  </motion.span>

                  <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                  >
                    UNIFIED<br />CRM SOLUTIONS
                  </motion.h1>

                  <motion.p
                    className="crm-description"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', marginTop: '20px', maxWidth: '850px', marginInline: 'auto' }}
                  >
                    Manage your entire sales pipeline and customer lifecycle in one unified platform. <br />
                    Scale your business with our data-driven relationship management tools.
                  </motion.p>
                </div>

                <div className="crm-hero-actions crm-hero-links">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Link
                      to="/crmPage"
                      className="visit-btn"
                    >
                      Visit <FontAwesomeIcon icon={faArrowRight} className="btn-arrow" />
                    </Link>
                  </motion.div>
                </div>
              </div>

              {/* Removed the floating preview card per user request */}

              {/* Soft border curve connector */}
              <span className="cutout-curve-horizontal"></span>
            </div>

            {/* Stats Section in the gap */}
            <div className="crm-stats-container">
              <StatItem value="6" suffix=" k" label="The company's users acorss" />
              <StatItem value="3" suffix="+" label="Projects completed till now" />
              <StatItem value="99" suffix="%" label="totally satisfied customers" />
            </div>
          </div>
        </section>

        {/* NEW ERP SOLUTIONS SECTION */}
        <section className="erp-solutions-section">
          <div className="erp-hero-container">
            {/* Main Hero Section with Background */}
            <div className="erp-hero-main">
              {/* Background Image as absolute element */}
              <img
                src={erp3d}
                alt="ERP Management"
                className="erp-hero-bg-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                loading="eager"
              />
              <div className="erp-hero-overlay"></div>

              <div className="erp-hero-content">
                <div className="erp-content-center">
                  <motion.span
                    className="erp-badge"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    #2 Smart Campus Management
                  </motion.span>

                  <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                  >
                    EMPOWERING <br />ERP's
                  </motion.h1>

                  <motion.p
                    className="erp-description"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', marginTop: '20px', maxWidth: '850px', marginInline: 'auto' }}
                  >
                    The ultimate digital infrastructure for modern schools and universities. <br />
                    Streamline administration, academics, and communication in a single portal.
                  </motion.p>
                </div>

                <div className="erp-hero-actions erp-hero-links">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Link
                      to="/erpSolutionsPage"
                      className="visit-btn"
                    >
                      Visit <FontAwesomeIcon icon={faArrowRight} className="btn-arrow" />
                    </Link>
                  </motion.div>
                </div>
              </div>

              {/* Soft border curve connector - top left */}
              <span className="erp-cutout-curve-horizontal"></span>
            </div>

            {/* Stats Section in the gap (Top Left) */}
            <div className="erp-stats-container">
              <StatItem value="5" suffix="K+" label="Students active across all network campuses" itemClass="erp-stat-item" />
              <StatItem value="12" suffix="+" label="Institutes using our platform globally" itemClass="erp-stat-item" />
              <StatItem value="99" suffix="%" label="Uptime guarantee & seamless data integration" itemClass="erp-stat-item" />
            </div>
          </div>
        </section>

        {/* NEW AI CHATBOT SOLUTIONS SECTION (Mirrors CRM Layout: Links Left, Stats Bottom-Right) */}
        <section className="ai-solutions-section">
          <div className="ai-hero-container">
            <div className="ai-hero-main">
              <img
                src={ai3d}
                alt="AI Support"
                className="ai-hero-bg-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
              <div className="ai-hero-overlay"></div>

              <div className="ai-hero-content">
                <div className="ai-content-center">
                  <motion.span
                    className="ai-badge"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    #3 Intelligent Bot
                  </motion.span>

                  <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                  >
                    AI Chatbot <br /> SUPPORT
                  </motion.h1>

                  <motion.p
                    className="ai-description"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', marginTop: '20px', maxWidth: '850px', marginInline: 'auto' }}
                  >
                    Revolutionize support with our autonomous AI chatbot using intent-based deep learning. <br />
                    Deliver instant, accurate answers across all languages to your global customer base.
                  </motion.p>
                </div>

                <div className="ai-hero-actions ai-hero-links">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Link
                      to="/developmentPage"
                      className="visit-btn"
                    >
                      Visit <FontAwesomeIcon icon={faArrowRight} className="btn-arrow" />
                    </Link>
                  </motion.div>
                </div>
              </div>

              <span className="ai-cutout-curve-horizontal"></span>
            </div>

            <div className="ai-stats-container">
              <StatItem value="100" suffix="k+" label="User interactions handled this year" itemClass="ai-stat-item" />
              <StatItem value="95" suffix="%" label="Average accuracy in intent detection" itemClass="ai-stat-item" />
              <StatItem value="24" suffix="/7" label="Instant support available worldwide" itemClass="ai-stat-item" />
            </div>
          </div>
        </section>

        {/* NEW JOB SEEKER SOLUTIONS SECTION (Mirrors ERP Layout: Links Right, Stats Top-Left) */}
        <section className="job-solutions-section">
          <div className="job-hero-container">
            <div className="job-hero-main">
              <img
                src={jobs3d}
                alt="Talent Acquisition"
                className="job-hero-bg-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
              <div className="job-hero-overlay"></div>

              <div className="job-hero-content">
                <div className="job-content-center">
                  <motion.span
                    className="job-badge"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    #4 Career Partner
                  </motion.span>

                  <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                  >
                    Job <br /> Seeker HUB
                  </motion.h1>

                  <motion.p
                    className="job-description"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', marginTop: '20px', maxWidth: '850px', marginInline: 'auto' }}
                  >
                    Smart matching algorithms that bridge the gap between top talent and global opportunities. <br />
                    Transform your recruitment process with our immersive end-to-end career suite.
                  </motion.p>
                </div>

                <div className="job-hero-actions job-hero-links">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Link
                      to="/CareersPage"
                      className="visit-btn"
                    >
                      Visit <FontAwesomeIcon icon={faArrowRight} className="btn-arrow" />
                    </Link>
                  </motion.div>
                </div>
              </div>

              <span className="job-cutout-curve-horizontal"></span>
            </div>

            <div className="job-stats-container">
              <StatItem value="5" suffix="K+" label="Active candidates looking for roles" itemClass="job-stat-item" />
              <StatItem value="50" suffix="+" label="Global enterprises hiring through us" itemClass="job-stat-item" />
              <StatItem value="150" suffix="+" label="Industry sectors covered and supported" itemClass="job-stat-item" />
            </div>
          </div>
        </section>

        {/* NEW LEARNING & CAREER GROWTH SECTION (Mirrors CRM Layout: Links Left, Stats Bottom-Right) */}
        <section className="learn-solutions-section">
          <div className="learn-hero-container">
            <div className="learn-hero-main">
              <img
                src={learning3d}
                alt="Learning & Career"
                className="learn-hero-bg-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
              <div className="learn-hero-overlay"></div>

              <div className="learn-hero-content">
                <div className="learn-content-center">
                  <motion.span
                    className="learn-badge"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    #5 Learning & Carrer
                  </motion.span>

                  <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                  >
                    LEARNING & <br /> CAREER GROWTH
                  </motion.h1>

                  <motion.p
                    className="learn-description"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', marginTop: '20px', maxWidth: '850px', marginInline: 'auto' }}
                  >
                    Master new skills with our personalized learning paths and career guidance. <br />
                    Unlock your potential with industry-standard certifications and expert mentorship.
                  </motion.p>
                </div>

                <div className="learn-hero-actions learn-hero-links">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Link
                      to="/allCoursesPage"
                      className="visit-btn"
                    >
                      Visit <FontAwesomeIcon icon={faArrowRight} className="btn-arrow" />
                    </Link>
                  </motion.div>
                </div>
              </div>

              <span className="learn-cutout-curve-horizontal"></span>
            </div>

            <div className="learn-stats-container">
              <StatItem value="13" suffix="+" label="Expert-led courses for skills development" itemClass="learn-stat-item" />
              <StatItem value="5" suffix="K+" label="Students empowered through our platform" itemClass="learn-stat-item" />
              <StatItem value="90" suffix="%" label="Success rate in career placement support" itemClass="learn-stat-item" />
            </div>
          </div>
        </section>

        {/* SaaS Roadmap Section */}
        <section className="saas-roadmap-section">
          <div className="saas-roadmap-inner">
            <span className="tiny-badge" style={{ marginBottom: '16px', display: 'inline-block' }}>Our Journey</span>
            <h2 className="section-title" style={{ marginBottom: '64px' }}>SaaS <span>Roadmap</span></h2>

            <div className="srm-timeline">
              {/* Central Vertical Connecting Line */}
              <div className="srm-timeline-line"></div>

              {[
                { num: 1, color: '#4a90e2', title: 'Product Vision', desc: 'Define the long-term vision and strategy for your product.', icon: faBullseye, bg: '#dbeafe' },
                { num: 2, color: '#22c55e', title: 'Business Goals', desc: "Set clear, measurable goals for the roadmap's duration.", icon: faChartLine, bg: '#dcfce7' },
                { num: 3, color: '#84cc16', title: 'Collect Feedback', desc: 'Gather insights and feature requests from users and stakeholders.', icon: faComments, bg: '#ecfccb' },
                { num: 4, color: '#06b6d4', title: 'Identify Features', desc: 'Determine the features needed to achieve your desired outcomes.', icon: faMagnifyingGlass, bg: '#cffafe' },
                { num: 5, color: '#eab308', title: 'Prioritize Features', desc: 'Rank features based on their impact and feasibility.', icon: faListCheck, bg: '#fef9c3' },
                { num: 6, color: '#f97316', title: 'Allocate Resources', desc: 'Assign resources and set timelines for feature development.', icon: faCalendarCheck, bg: '#ffedd5' },
                { num: 7, color: '#ef4444', title: 'Display Information', desc: 'Choose the best way to present the roadmap to stakeholders.', icon: faDisplay, bg: '#fee2e2' },
              ].map((step, i) => {
                // Alternate sides: even index = left side, odd index = right side
                const isEven = i % 2 === 0;

                return (
                  <div
                    className={`srm-timeline-row ${isEven ? 'srm-row-left' : 'srm-row-right'}`}
                    key={i}
                    style={{ '--step-color': step.color, '--step-delay': `${i * 0.15}s` }}
                  >

                    {/* The content card */}
                    <div className="srm-tcard">
                      <span className="srm-tcard-num" style={{ color: step.color }}>Step 0{step.num}</span>
                      <h4 className="srm-tcard-title">{step.title}</h4>
                      <p className="srm-tcard-desc">{step.desc}</p>
                      {/* Glowing arrow pointing to center node */}
                      <div className="srm-tcard-arrow"></div>
                    </div>

                    {/* Central Node with Icon */}
                    <div className="srm-tnode">
                      <div className="srm-tnode-inner" style={{ background: step.color }}>
                        <FontAwesomeIcon icon={step.icon} style={{ color: '#fff', fontSize: '1.2rem' }} />
                      </div>
                    </div>

                    {/* Empty spacer for flex alignment */}
                    <div className="srm-tspacer"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SaaS;
