import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPalette, faDesktop, faMobileAlt, faCogs, faChartLine, faArrowUp, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ServicesSection.css';
import serviceimage from "../../../assets/services_comprehensive.png";

library.add(faPalette, faDesktop, faMobileAlt, faCogs, faChartLine, faArrowUp, faArrowRight);

const services = [
  { id: 1,  title: 'BRANDING & IDENTITY DESIGN',  shortDescription: 'Create a memorable brand that resonates with your audience and leaves a lasting impression. We build cohesive visual identities, comprehensive brand guidelines, and unique design systems that establish trust.', route: '/brandingIdentityPage' },
  { id: 2,  title: 'DEVELOPMENT SERVICES',         shortDescription: 'Custom software solutions and applications engineered to your specific requirements. We focus on scalable backend architectures, robust security protocols, and seamless performance to power modern operations.', route: '/softwareDevelopmentPage' },
  { id: 3,  title: 'WEBSITE DEVELOPMENT',          shortDescription: 'Develop highly intuitive, responsive, and high-performance websites optimized perfectly for all modern devices. We prioritize loading speeds, accessibility, and aesthetics to deliver digital experiences.', route: '/websiteDevelopmentPage' },
  { id: 4,  title: 'E-COMMERCE DEVELOPMENT',       shortDescription: 'Architect powerful online stores equipped with seamless payment gateways and expert inventory management. We empower your expanding business through tailored features designed to maximize online sales volume.', route: '/ecommerceDevelopmentPage' },
  { id: 5,  title: 'APP DEVELOPMENT',              shortDescription: 'Engineer fluid, cutting-edge mobile applications for iOS and Android ecosystems. From native codebases to versatile cross-platform frameworks, we deliver highly engaging, polished cross-platform mobile experiences.', route: '/appDevelopmentPage' },
  { id: 6,  title: 'GRAPHIC DESIGN',               shortDescription: "Deliver visually stunning graphic designs that beautifully communicate your brand's unique message. We expertly translate your core values into striking digital marketing materials and captivating layout designs.", route: '/graphicDesignPage' },
  { id: 7,  title: 'UI/UX DESIGN',                 shortDescription: 'Craft deeply user-centered designs ensuring seamless and highly intuitive digital experiences across all platforms. We conduct rigorous user flow analytics and design optimization to guarantee maximum usability.', route: '/uiuxDesignPage' },
  { id: 8,  title: 'SOFTWARE & TECH SOLUTION',     shortDescription: 'Deploy comprehensive technology infrastructure solutions to drive your entire business forward. We effectively bridge the gap between complex legacy operations and modern digital efficiency through expert IT strategy.', route: '/softwareSolutionPage' },
  { id: 9,  title: 'DATA ANALYTICS',               shortDescription: 'Leverage extensive data analytics to make informed decisions and stimulate sustainable organizational growth. We transform complex metrics into highly actionable visualizations that continuously reveal opportunities.', route: '/dataAnalyticsPage' },
  { id: 10, title: 'AI SERVICES',                  shortDescription: 'Integrate sophisticated artificial intelligence systems to autonomously optimize complex workflows and business processes. Our bespoke machine learning models deeply empower your team to work significantly smarter.', route: '/aiServicesPage' },
  { id: 11, title: 'CRM SERVICES',                 shortDescription: 'Govern customer relationships effectively utilizing advanced, fully customized CRM integrations. We intelligently streamline your communication channels and manage pipelines to enhance personalized client engagements.', route: '/crmServicesPage' },
  { id: 12, title: 'SAAS SERVICES',                shortDescription: 'Implement highly scalable, secure cloud-based SaaS solutions designed exclusively for modern businesses. We completely architect sophisticated subscription platforms ensuring continuous value and seamless experiences.', route: '/saasPage' },
];

/* ─── Individual card: fades in when it enters the viewport ─── */
const ServiceCard = ({ service, index }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className={`ss-stat-card ss-card-${index + 1}`}
      onClick={() => navigate(service.route)}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.05 }}
      transition={{
        duration: 0.55,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="ss-title-row">
        <h4 className="ss-stat-title">{service.title}</h4>
        <FontAwesomeIcon icon="arrow-right" className="ss-arrow-icon" />
      </div>
      <p className="ss-stat-desc">{service.shortDescription}</p>
    </motion.div>
  );
};

/* ─── Section ─── */
const ServicesSection = () => {
  return (
    <section className="ss-section" id="serviceSection">
      <div className="ss-container">
        <div className="ss-master-grid">

          {/* ── Headline ── */}
          <motion.div
            className="ss-col-headline"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="ss-eyebrow">Expert Solutions</span>
            <h2 className="ss-headline">Our Services</h2>
            <p className="ss-subheadline">
              Comprehensive digital solutions to transform your business and drive
              sustainable growth in a competitive landscape.
            </p>
          </motion.div>

          {/* ── Feature Image ── */}
          <motion.div
            className="ss-col-feature"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="ss-feature-card">
              <img src={serviceimage} alt="Our Services" className="ss-feature-img" />
              <div className="ss-feature-overlay">
                <span className="ss-feature-label">Innovative tech</span>
              </div>
            </div>
          </motion.div>

          {/* ── Service Cards ── */}
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;