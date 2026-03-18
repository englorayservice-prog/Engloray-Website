import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPalette, faDesktop, faMobileAlt, faCogs, faChartLine, faArrowUp, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './ServicesSection.css';

library.add(faPalette, faDesktop, faMobileAlt, faCogs, faChartLine, faArrowUp, faArrowRight);

const ServicesSection = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleCardClick = (service) => navigate(service.route);

  const services = [
    {
      id: 1,
      title: "BRANDING & IDENTITY DESIGN",
      shortDescription: "Create memorable brand that resonate with your audience",
      fullDescription: "We craft logos and color palettes that tell your unique story and resonate with your target audience.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
      duration: "2-4 weeks",
      projects: "50+",
      icon: faPalette,
      route: "/brandingIdentityPage"
    },
    {
      id: 2,
      title: "WEBSITE & UI/UX DESIGN",
      shortDescription: "User-centered designs that provide seamless experiences",
      fullDescription: "Create intuitive interfaces that convert visitors into customers with seamless user experiences.",
      features: ["UI/UX Layout", "Responsive", "Wireframes", "Prototyping"],
      duration: "3-6 weeks",
      projects: "80+",
      icon: faDesktop,
      route: "/uiuxDesignPage"
    },
    {
      id: 3,
      title: "SOFTWARE & APP DEVELOPMENT",
      shortDescription: "Custom software solutions and mobile applications",
      fullDescription: "Build scalable and efficient software solutions tailored to your specific business requirements to propel your success in the digital era. Our custom-built applications are designed to enhance performance, streamline operations, and support long-term business growth.",
      features: ["Web Apps", "Mobile Apps", "Custom Tools", "API Integ."],
      duration: "4-12 weeks",
      projects: "120+",
      icon: faMobileAlt,
      route: "/softwareDevelopmentPage"
    },
    {
      id: 4,
      title: "ERP & CRM SOLUTIONS",
      shortDescription: "Streamline your business operations with integrated systems",
      fullDescription: "Implement integrated enterprise systems to optimize your business processes and customer relationships.",
      features: ["ERP Setup", "CRM Config", "Automation", "Analytics"],
      duration: "6-8 weeks",
      projects: "35+",
      icon: faCogs,
      route: "/erpSolutionsPage"
    },
    {
      id: 5,
      title: "DIGITAL MARKETING",
      shortDescription: "Data-driven marketing strategies to boost your online presence",
      fullDescription: "Drive growth with targeted marketing strategies that reach the right audience at the right time.",
      features: ["SEO Opt.", "Social Media", "Content", "PPC Ads"],
      duration: "Ongoing",
      projects: "45+",
      icon: faChartLine,
      route: "/digitalMarketingServicePage"
    }
  ];

  return (
    <section className={`ss-section ${isVisible ? 'ss-visible' : ''}`} id="serviceSection">
      <div className="ss-container">

        {/* ── MASTER GRID ── */}
        <div className="ss-master-grid">

          {/* ── COLUMN A: Headline ── */}
          <div className="ss-col-headline">
            <span className="ss-eyebrow">Our Services</span>
            <h2 className="ss-headline">Our Services</h2>
            <p className="ss-subheadline">
              Comprehensive solutions to transform your business and drive growth
            </p>
          </div>

          {/* ── COLUMN B: Feature Image Card ── */}
          <div className="ss-col-feature">
            <div className="ss-feature-card">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                alt="Services Feature"
                className="ss-feature-img"
              />
              <div className="ss-feature-overlay">
                <span className="ss-feature-label">For Business</span>
              </div>
            </div>
          </div>

          {/* ── STATS ROW: Small stat cards + Tall Content Card + Accent pair ── */}

          {/* Stat 1 — row 2, col 1 */}
          <div className="ss-stat-card ss-card-s1" onClick={() => handleCardClick(services[0])}>
            <div className="ss-title-row">
              <h4 className="ss-stat-title">{services[0].title}</h4>
              <FontAwesomeIcon icon="arrow-right" className="ss-arrow-icon" />
            </div>
            <p className="ss-stat-desc">{services[0].shortDescription}</p>
          </div>

          {/* Stat 2 — row 2, col 2 */}
          <div className="ss-stat-card ss-card-s2" onClick={() => handleCardClick(services[1])}>
            <div className="ss-title-row">
              <h4 className="ss-stat-title">{services[1].title}</h4>
              <FontAwesomeIcon icon="arrow-right" className="ss-arrow-icon" />
            </div>
            <p className="ss-stat-desc">{services[1].shortDescription}</p>
          </div>

          {/* Tall Content Card — rows 2-3, col 3 (spans 2 rows) */}
          <div className="ss-stat-card ss-card-tall ss-card-tall-s3" onClick={() => handleCardClick(services[2])}>
            <div className="ss-title-row">
              <h4 className="ss-stat-title">{services[2].title}</h4>
              <FontAwesomeIcon icon="arrow-right" className="ss-arrow-icon" />
            </div>
            <p className="ss-stat-desc ss-stat-desc--tall">{services[2].fullDescription}</p>
          </div>

          {/* Accent card 1 — row 2, col 4 (decorative stat) */}
          <div className="ss-stat-card ss-card-accent ss-card-a1">
            <div className="ss-title-row">
              <h4 className="ss-stat-title ss-stat-title--white">Completion rate</h4>
              <FontAwesomeIcon icon="arrow-right" className="ss-arrow-icon ss-arrow-icon--white" />
            </div>
            <p className="ss-stat-desc ss-stat-desc--white">For online services with AI guidance</p>
          </div>

          {/* Stat 3 — row 3, col 1 */}
          <div className="ss-stat-card ss-card-s4" onClick={() => handleCardClick(services[3])}>
            <div className="ss-title-row">
              <h4 className="ss-stat-title">{services[3].title}</h4>
              <FontAwesomeIcon icon="arrow-right" className="ss-arrow-icon" />
            </div>
            <p className="ss-stat-desc">{services[3].shortDescription}</p>
          </div>

          {/* Stat 4 — row 3, col 2 */}
          <div className="ss-stat-card ss-card-s5" onClick={() => handleCardClick(services[4])}>
            <div className="ss-title-row">
              <h4 className="ss-stat-title">{services[4].title}</h4>
              <FontAwesomeIcon icon="arrow-right" className="ss-arrow-icon" />
            </div>
            <p className="ss-stat-desc">{services[4].shortDescription}</p>
          </div>

          {/* Accent card 2 — row 3, col 4 (decorative stat) */}
          <div className="ss-stat-card ss-card-accent ss-card-a2">
            <div className="ss-title-row">
              <h4 className="ss-stat-title ss-stat-title--white">Faster completion</h4>
              <FontAwesomeIcon icon="arrow-right" className="ss-arrow-icon ss-arrow-icon--white" />
            </div>
            <p className="ss-stat-desc ss-stat-desc--white">Of government transactions with AI assisted navigation</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;