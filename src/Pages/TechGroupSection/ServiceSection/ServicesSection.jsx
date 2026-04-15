import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPalette, faDesktop, faMobileAlt, faCogs, faChartLine, faArrowUp, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ServicesSection.css';
import serviceimage from "../../../assets/services_header.png";

library.add(faPalette, faDesktop, faMobileAlt, faCogs, faChartLine, faArrowUp, faArrowRight);

const services = [
  { id: 1,  title: 'BRANDING & IDENTITY DESIGN',  shortDescription: 'Create a memorable brand that resonates with your audience and leaves a lasting impression.',          route: '/brandingIdentityPage'     },
  { id: 2,  title: 'DEVELOPMENT SERVICES',         shortDescription: 'Custom software solutions and mobile applications tailored to your specific business needs.',         route: '/softwareDevelopmentPage'  },
  { id: 3,  title: 'WEBSITE DEVELOPMENT',          shortDescription: 'Create intuitive, responsive, and high-performance websites optimized for all modern devices.',        route: '/websiteDevelopmentPage'   },
  { id: 4,  title: 'E-COMMERCE DEVELOPMENT',       shortDescription: 'Build powerful online stores with seamless payment integration and expert inventory management.',      route: '/ecommerceDevelopmentPage' },
  { id: 5,  title: 'APP DEVELOPMENT',              shortDescription: 'Develop cutting-edge mobile applications for iOS and Android platforms.',                              route: '/appDevelopmentPage'       },
  { id: 6,  title: 'GRAPHIC DESIGN',               shortDescription: "Visually stunning designs that communicate your brand's unique message.",                              route: '/graphicDesignPage'        },
  { id: 7,  title: 'UI/UX DESIGN',                 shortDescription: 'User-centered designs that provide seamless and intuitive digital experiences.',                       route: '/uiuxDesignPage'           },
  { id: 8,  title: 'SOFTWARE & TECH SOLUTION',     shortDescription: 'Comprehensive technology solutions to drive your business forward in the digital age.',                route: '/softwareSolutionPage'     },
  { id: 9,  title: 'DATA ANALYTICS',               shortDescription: 'Leverage data insights to make informed business decisions and drive growth.',                         route: '/dataAnalyticsPage'        },
  { id: 10, title: 'AI SERVICES',                  shortDescription: 'Integrate artificial intelligence to automate and optimize your business processes.',                  route: '/aiServicesPage'           },
  { id: 11, title: 'CRM SERVICES',                 shortDescription: 'Manage customer relationships with advanced and customized CRM systems.',                              route: '/crmServicesPage'          },
  { id: 12, title: 'SAAS SERVICES',                shortDescription: 'Scalable cloud-based software solutions for modern and agile businesses.',                             route: '/saasPage'                 },
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