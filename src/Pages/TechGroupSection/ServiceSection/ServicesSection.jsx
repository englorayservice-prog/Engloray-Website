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
  { id: 1,  title: 'BRANDING & IDENTITY DESIGN',  shortDescription: 'Create a memorable brand that safely resonates with audiences. We craft cohesive visual identities and design systems that establish trust.', route: '/brandingIdentityPage' },
  { id: 2,  title: 'DEVELOPMENT SERVICES',         shortDescription: 'Custom software solutions and applications engineered to securely power modern business operations with seamless backend scalability.', route: '/softwareDevelopmentPage' },
  { id: 3,  title: 'WEBSITE DEVELOPMENT',          shortDescription: 'Develop intuitive, high-performance websites optimized for all modern devices, delivering fast and captivating digital user experiences.', route: '/websiteDevelopmentPage' },
  { id: 4,  title: 'E-COMMERCE DEVELOPMENT',       shortDescription: 'Architect powerful online stores with seamless payment integration, designed exactly to maximize and scale your online retail sales.', route: '/ecommerceDevelopmentPage' },
  { id: 5,  title: 'APP DEVELOPMENT',              shortDescription: 'Engineer cutting-edge mobile applications for iOS and Android, delivering highly engaging and flawlessly polished cross-platform experiences.', route: '/appDevelopmentPage' },
  { id: 6,  title: 'GRAPHIC DESIGN',               shortDescription: 'Deliver visually stunning graphic designs that expertly translate your core brand values into striking digital and print marketing materials.', route: '/graphicDesignPage' },
  { id: 7,  title: 'UI/UX DESIGN',                 shortDescription: 'Craft beautifully user-centered designs, ensuring highly intuitive digital experiences through rigorous user flow and interface optimization.', route: '/uiuxDesignPage' },
  { id: 8,  title: 'SOFTWARE & TECH SOLUTION',     shortDescription: 'Deploy comprehensive tech infrastructure perfectly bridging the wide gap between legacy operations and modern digital-first efficiency.', route: '/softwareSolutionPage' },
  { id: 9,  title: 'DATA ANALYTICS',               shortDescription: 'Leverage extensive data analytics to make exactly informed decisions. We transform complex metrics into highly actionable visualizations.', route: '/dataAnalyticsPage' },
  { id: 10, title: 'AI SERVICES',                  shortDescription: 'Integrate sophisticated, secure AI systems to automatically optimize your complex workflows, deeply empowering your team to work smarter.', route: '/aiServicesPage' },
  { id: 11, title: 'CRM SERVICES',                 shortDescription: 'Govern customer relationships efficiently utilizing advanced, fully customized CRM integrations that smoothly streamline communication.', route: '/crmServicesPage' },
  { id: 12, title: 'SAAS SERVICES',                shortDescription: 'Implement highly secure, scalable cloud-based SaaS solutions ensuring continuous subscription value delivery and frictionless functionality.', route: '/saasPage' },
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