// import React, { useState, useEffect, useRef } from 'react';
// import './ServicesSection.css';

// const ServicesSection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [hoveredService, setHoveredService] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const scrollContainerRef = useRef(null);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 300);
//     return () => clearTimeout(timer);
//   }, []);

//   // Auto-scroll effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (hoveredService === null) { // Only auto-scroll when no card is hovered
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
//       }
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [hoveredService]);

//   useEffect(() => {
//     if (scrollContainerRef.current) {
//       const cardWidth = 320; // card width + gap
//       scrollContainerRef.current.scrollTo({
//         left: currentIndex * cardWidth,
//         behavior: 'smooth'
//       });
//     }
//   }, [currentIndex]);

//   const services = [
//     {
//       id: 1,
//       title: "BRANDING & IDENTITY DESIGN",
//       shortDescription: "Create memorable brand that resonate with your audience",
//       fullDescription: "We craft logos and color palettes that tell your unique story and resonate with your target audience.",
//       features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
//       duration: "2-4 weeks",
//       projects: "50+ completed",
//       logo: "🎨"
//     },
//     {
//       id: 2,
//       title: "WEBSITE & UI/UX DESIGN",
//       shortDescription: "User-centered designs that provide seamless experiences",
//       fullDescription: "Create intuitive interfaces that convert visitors into customers with seamless user experiences.",
//       features: ["UI/UX Design", "Responsive Design", "Wireframing", "Prototyping"],
//       duration: "3-6 weeks",
//       projects: "80+ completed",
//       logo: "💻"
//     },
//     {
//       id: 3,
//       title: "SOFTWARE & APP DEVELOPMENT",
//       shortDescription: "Custom software solutions and mobile applications",
//       fullDescription: "Build scalable and efficient software solutions tailored to your specific business requirements.",
//       features: ["Web Applications", "Mobile Apps", "Custom Software", "API Integration"],
//       duration: "4-12 weeks",
//       projects: "120+ completed",
//       logo: "📱"
//     },
//     {
//       id: 4,
//       title: "ERP & CRM SOLUTIONS",
//       shortDescription: "Streamline your business operations with integrated systems",
//       fullDescription: "Implement integrated enterprise systems to optimize your business processes and customer relationships.",
//       features: ["ERP Implementation", "CRM Setup", "Business Automation", "Data Analytics"],
//       duration: "6-8 weeks",
//       projects: "35+ completed",
//       logo: "⚙️"
//     },
//     {
//       id: 5,
//       title: "DIGITAL MARKETING",
//       shortDescription: "Data-driven marketing strategies to boost your online presence",
//       fullDescription: "Drive growth with targeted marketing strategies that reach the right audience at the right time.",
//       features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "PPC Campaigns"],
//       duration: "Ongoing",
//       projects: "90+ completed",
//       logo: "📈"
//     }
//   ];

//   return (
//     <section className="services-section" id="serviceSection">
//       <div className="services-container">
//         {/* Header */}
//         <div className={`services-header ${isVisible ? 'animate-fade-in' : ''}`}>
//           <h2 className="serviceSection-title">Our Services</h2>
//           <p className="serviceSection-subtitle">
//             Comprehensive solutions to transform your business and drive growth
//           </p>
//           <div className="title-underline"></div>
//         </div>

//         {/* Main Red Container */}
//         <div className="services-main-container">
//           {/* Scrollable Row of Service Cards */}
//           <div 
//             className="services-cards-scroll"
//             ref={scrollContainerRef}
//           >
//             {services.map((service, index) => (
//               <div 
//                 key={service.id}
//                 className={`service-card ${isVisible ? 'animate-slide-up' : ''} ${hoveredService === service.id ? 'hovered' : ''}`}
//                 style={{ animationDelay: `${index * 0.1}s` }}
//                 onMouseEnter={() => setHoveredService(service.id)}
//                 onMouseLeave={() => setHoveredService(null)}
//               >
//                 {/* Card Front (Default View) */}
//                 <div className="service-card-front">
//                   <div className="service-card-header">
//                     <div className="service-logo">{service.logo}</div>
//                     <div className="service-category">Service</div>
//                   </div>
                  
//                   <h3 className="service-card-title">{service.title}</h3>
                  
//                   <div className="service-card-meta">
//                     <p className="service-short-desc">{service.shortDescription}</p>
//                     <div className="service-features-preview">
//                       {service.features.slice(0, 2).map((feature, idx) => (
//                         <span key={idx} className="feature-preview">✓ {feature}</span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Card Back (Hover View) - Compact Version */}
//                 <div className="service-card-back">
//                   <div className="service-card-back-content">
//                     <h3 className="service-card-title-small">{service.title}</h3>
                    
//                     <p className="service-full-description">{service.fullDescription}</p>
                    
//                     <div className="service-details-compact">
//                       <div className="detail-item-compact">
//                         <span>Duration: {service.duration}</span>
//                       </div>
//                       <div className="detail-item-compact">
//                         <span>Projects: {service.projects}</span>
//                       </div>
//                     </div>

//                     <div className="service-features-compact">
//                       <div className="features-grid">
//                         {service.features.map((feature, featureIndex) => (
//                           <div key={featureIndex} className="feature-item">
//                             ✓ {feature}
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;


import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPalette, faDesktop, faMobileAlt, faCogs, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './ServicesSection.css';

// Add icons to the library
library.add(faPalette, faDesktop, faMobileAlt, faCogs, faChartLine);

const ServicesSection = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (hoveredService === null) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [hoveredService]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const cardWidth = 320;
      scrollContainerRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const handleCardClick = (service) => {
    navigate(service.route);
  };

  // Service data with icon objects and colors
  const services = [
    {
      id: 1,
      title: "BRANDING & IDENTITY DESIGN",
      shortDescription: "Create memorable brand that resonate with your audience",
      fullDescription: "We craft logos and color palettes that tell your unique story and resonate with your target audience.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
      duration: "2-4 weeks",
      projects: "50+ completed",
      icon: faPalette,
      iconColor: '#FF4757', // Red
      route: "/brandingIdentityPage"
    },
    {
      id: 2,
      title: "WEBSITE & UI/UX DESIGN",
      shortDescription: "User-centered designs that provide seamless experiences",
      fullDescription: "Create intuitive interfaces that convert visitors into customers with seamless user experiences.",
      features: ["UI/UX Design", "Responsive Design", "Wireframing", "Prototyping"],
      duration: "3-6 weeks",
      projects: "80+ completed",
      icon: faDesktop,
      iconColor: '#2ED573', // Green
      route: "/uiuxDesignPage"
    },
    {
      id: 3,
      title: "SOFTWARE & APP DEVELOPMENT",
      shortDescription: "Custom software solutions and mobile applications",
      fullDescription: "Build scalable and efficient software solutions tailored to your specific business requirements.",
      features: ["Web Applications", "Mobile Apps", "Custom Software", "API Integration"],
      duration: "4-12 weeks",
      projects: "120+ completed",
      icon: faMobileAlt,
      iconColor: '#1E90FF', // Blue
      route: "/softwareDevelopmentPage"
    },
    {
      id: 4,
      title: "ERP & CRM SOLUTIONS",
      shortDescription: "Streamline your business operations with integrated systems",
      fullDescription: "Implement integrated enterprise systems to optimize your business processes and customer relationships.",
      features: ["ERP Implementation", "CRM Setup", "Business Automation", "Data Analytics"],
      duration: "6-8 weeks",
      projects: "35+ completed",
      icon: faCogs,
      iconColor: '#FFA502', // Orange
      route: "/erpSolutionsPage"
    },
    {
      id: 5,
      title: "DIGITAL MARKETING",
      shortDescription: "Data-driven marketing strategies to boost your online presence",
      fullDescription: "Drive growth with targeted marketing strategies that reach the right audience at the right time.",
      features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "PPC Campaigns"],
      duration: "Ongoing",
      projects: "90+ completed",
      icon: faChartLine,
      iconColor: '#9C88FF', // Purple
      route: "/digitalMarketingServicePage"
    }
  ];

  const handleMouseDown = (e) => {
  isDragging.current = true;
  startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
  scrollLeft.current = scrollContainerRef.current.scrollLeft;
};

const handleMouseLeave = () => {
  isDragging.current = false;
};

const handleMouseUp = () => {
  isDragging.current = false;
};

const handleMouseMove = (e) => {
  if (!isDragging.current) return;

  e.preventDefault();
  const x = e.pageX - scrollContainerRef.current.offsetLeft;
  const walk = (x - startX.current) * 1.5; // scroll speed
  scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
};


  return (
    <section className="services-section" id="serviceSection">
      <div className="services-container">
        <div className={`services-header ${isVisible ? 'animate-fade-in' : ''}`}>
          <h2 className="serviceSection-title">Our Services</h2>
          <p className="serviceSection-subtitle">
            Comprehensive solutions to transform your business and drive growth
          </p>
          <div className="title-underline"></div>
        </div>

        <div className="services-main-container">
  <div
    className="services-cards-scroll"
    ref={scrollContainerRef}
    onMouseDown={handleMouseDown}
    onMouseLeave={handleMouseLeave}
    onMouseUp={handleMouseUp}
    onMouseMove={handleMouseMove}
  >

            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`service-card ${isVisible ? 'animate-slide-up' : ''} ${hoveredService === service.id ? 'hovered' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                onClick={() => handleCardClick(service)}
              >
                <div className="service-card-front">
                  <div className="service-card-header">
                    <div className="service-logo-container">
                      <div className="service-logo-icon-wrapper">
                        <FontAwesomeIcon 
                          icon={service.icon} 
                          className="service-fa-icon"
                          style={{ 
                            color: service.iconColor,
                            fontSize: '2.5rem'
                          }}
                        />
                      </div>
                      <div className="service-category">Service</div>
                    </div>
                  </div>
                  
                  <h3 className="service-card-title">{service.title}</h3>
                  
                  <div className="service-card-meta">
                    <p className="service-short-desc">{service.shortDescription}</p>
                    <div className="service-features-preview">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="feature-preview">✓ {feature}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="service-card-back">
                  <div className="service-card-back-content">
                    <h3 className="service-card-title-small">{service.title}</h3>
                    
                    <p className="service-full-description">{service.fullDescription}</p>
                    
                    <div className="service-details-compact">
                      <div className="detail-item-compact">
                        <span>Duration: {service.duration}</span>
                      </div>
                      <div className="detail-item-compact">
                        <span>Projects: {service.projects}</span>
                      </div>
                    </div>

                    <div className="service-features-compact">
                      <div className="features-grid">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="feature-item">
                            ✓ {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;