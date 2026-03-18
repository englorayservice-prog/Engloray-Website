// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faRocket,
//   faStar,
//   faHandshake,
//   faUsers,
//   faChartLine,
//   faGlobe,
//   faBullseye,
//   faPalette,
//   faDesktop,
//   faPaintBrush,
//   faChartBar,
//   faMobileAlt,
//   faGraduationCap,
//   faCode,
//   faTools,
//   faChevronDown,
//   faComments,
//   faFolderOpen,
//   faLightbulb,
//   faMedal,
//   faShieldAlt,
//   faNetworkWired,
//   faSeedling
// } from '@fortawesome/free-solid-svg-icons';
// import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
// import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
// import BackToTop from '../../../Components/BackToTop/BackToTop';
// import './OurStoryPage.css';
// import MainPageSubFooter from '../MainPageSubFooter/MainPageSubFooter';

// const OurStoryPage = () => {
//   const navigate = useNavigate();
  
//   // WhatsApp contact number (replace with your actual number)
//   const whatsappNumber = "6381759909"; // Add your WhatsApp number here
//   const whatsappMessage = "Hello! I'm interested in starting a project with ENGLORAY.";
  
//   // Handle WhatsApp click
//   const handleWhatsAppClick = () => {
//     const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
//     window.open(url, '_blank');
//   };
  
//   // Handle Portfolio click
//   const handlePortfolioClick = () => {
//     navigate('/worksClientProjectsPage'); // Adjust route as needed
//   };
  
//   // Combined Timeline data with alternating left-right layout
//   const timelineData = [
//     {
     
//       quarter: "Phase 1",
//       title: "The Beginning",
//       description: "ENGLORAY began as a creative design and branding studio, focused on helping local businesses and startups build their visual identity.",
//       projects: ["Logo Design", "Branding System", "Product & label Design"],
//       color: "#FF6B6B",
//       side: "left"
//     },
//     {
      
//       quarter: "Phase 2",
//       title: "Growth & Digital Entry",
//       description: "As client requirements evolved, ENGLORAY expanded into website design and UI/UX, marking the transition into digital platforms.",
//       projects: ["Websites", "UI/UX Designs", "Branding for Digital Platforms"],
//       color: "#4ECDC4",
//       side: "right"
//     },
//     {
      
//       quarter: "Phase 3",
//       title: "Ecosystem Expansion",
//       description: "To serve both businesses and learners, ENGLORAY launched two divisions: Tech Group & Learning Generations",
//       projects: ["Tech Group: Corporate websites", "Branding + Digital Integrations", "Learning Generations: Graphic Design Course", "UI/UX Design Course"],
//       color: "#45B7D1",
//       side: "left"
//     },
//     {
      
//       quarter: "Phase 4",
//       title: "Full Service Delivery",
//       description: "By 2025, ENGLORAY delivered end-to-end solutions covering branding, technology, and growth.",
//       projects: ["Mobile Applications", "Digital Promotions & Ads", "Software & System Solutions"],
//       color: "#96CEB4",
//       side: "right"
//     },
//     {
      
//       quarter: "Phase 5",
//       title: "The Present",
//       description: "A Trusted Creative, Tech & Learning Partner.",
//       projects: ["ENGLORAY TECH GROUP → Business & Technology", "ENGLORAY LEARNING GENERATION → Education & Skills"],
//       color: "#c59b13ff",
//       side: "left"
//     },
//     {
     
//       quarter: "Phase 6",
//       title: "The Future",
//       description: "ENGLORAY's future roadmap focuses on growth, innovation, and international expansion.",
//       projects: ["International client projects and global clients", "AI-assisted branding and design systems", "Global learning programs and certifications", "Advanced learning programs with global reach", "Scalable platforms and SaaS products"],
//       color: "#DDA0DD",
//       side: "right"
//     }
//   ];

//   // Core Values
//   const coreValues = [
//     {
//       title: "Innovation",
//       description: "Pushing boundaries in tech solutions",
//       icon: faRocket,
//       color: "#FF6B6B"
//     },
//     {
//       title: "Excellence",
//       description: "Delivering world-class digital solutions",
//       icon: faStar,
//       color: "#4ECDC4"
//     },
//     {
//       title: "Integrity",
//       description: "Transparent and ethical in all operations",
//       icon: faShieldAlt,
//       color: "#45B7D1"
//     },
//     {
//       title: "Collaboration",
//       description: "Building strong client partnerships",
//       icon: faNetworkWired,
//       color: "#96CEB4"
//     },
//     {
//       title: "Growth",
//       description: "Continuous evolution and adaptation",
//       icon: faSeedling,
//       color: "#FFEAA7"
//     }
//   ];

//   // Vision & Mission
//   const visionMission = [
//     {
//       type: "vision",
//       title: "Our Vision",
//       description: "To become the most trusted digital transformation partner for enterprises worldwide, creating innovative solutions that drive business growth and technological advancement.",
//       icon: faGlobe,
//       accentColor: "#4ECDC4"
//     },
//     {
//       type: "mission",
//       title: "Our Mission",
//       description: "To empower businesses with cutting-edge digital solutions through expert engineering, innovative thinking, and sustainable technology practices that deliver measurable results.",
//       icon: faBullseye,
//       accentColor: "#FF6B6B"
//     }
//   ];

//   // Project Fields
//   const projectFields = [
//     { title: "Branding", icon: faPalette, count: "50+ Projects", color: "#FF6B6B" },
//     { title: "Web Design", icon: faDesktop, count: "40+ Projects", color: "#4ECDC4" },
//     { title: "UI/UX Design", icon: faPaintBrush, count: "45+ Projects", color: "#45B7D1" },
//     { title: "Digital Marketing", icon: faChartBar, count: "30+ Projects", color: "#96CEB4" },
//     { title: "Mobile Apps", icon: faMobileAlt, count: "25+ Projects", color: "#FFEAA7" },
//     { title: "E-Learning", icon: faGraduationCap, count: "20+ Projects", color: "#DDA0DD" },
//     { title: "Software Solutions", icon: faCode, count: "35+ Projects", color: "#FFB347" },
//     { title: "Consulting", icon: faTools, count: "60+ Projects", color: "#A3E4D7" }
//   ];

//   // Animated floating particles
//   useEffect(() => {
//     const particles = document.querySelectorAll('.osp-particle');
//     particles.forEach((particle, index) => {
//       particle.style.animationDelay = `${index * 0.2}s`;
//     });
//   }, []);

//   return (
//     <div className="osp-page">
//       <TopNavBar />
//       <TwoLineNavbar />
      
//       {/* Animated Header */}
//       <header className="osp-header">
//         <div className="osp-header-background">
//           <div className="osp-particle-container">
//             {[...Array(15)].map((_, i) => (
//               <div key={i} className="osp-particle" style={{
//                 left: `${Math.random() * 100}%`,
//                 animationDelay: `${i * 0.2}s`
//               }}></div>
//             ))}
//           </div>
//           <div className="osp-header-content">
//             <h1 className="osp-title">
//               <span className="osp-title-text">Our Story</span>
//               <span className="osp-title-sub">Journey of Creativity & Innovation</span>
//             </h1>
//             <div className="osp-scroll-indicator">
//               <span className="osp-scroll-text">Scroll to Explore</span>
//               <div className="osp-scroll-arrow">
//                 <FontAwesomeIcon icon={faChevronDown} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="osp-main-content">
//         {/* Story Section */}
//         <section className="osp-section osp-story-section">
//           <div className="osp-container">
//             <div className="osp-section-header">
//               <h2 className="osp-section-title">Our Beginning</h2>
//               <p className="osp-section-subtitle">From startup to creative leader</p>
//             </div>
            
//             <div className="osp-story-content">
//               <div className="osp-story-text">
//                 <div className="osp-story-highlight">
//                   <span className="osp-highlight-icon">
//                     <FontAwesomeIcon icon={faStar} />
//                   </span>
//                   <h3 className="osp-hexco-text">The ENGLORAY Journey</h3>
//                 </div>
//                 <p className="osp-story-paragraph">
//                   Founded in early 2023, ENGLORAY emerged from a shared passion for transforming businesses through creative design and innovative technology. With 2+ years of industry experience, we've evolved from a small creative studio into a trusted partner for businesses seeking digital transformation.
//                 </p>
//                 <p className="osp-story-paragraph">
//                   Our journey began with a simple vision: to make exceptional design and technology accessible and practical for businesses of all sizes. Today, we've successfully delivered <strong>200+ projects</strong> across various industries, helping startups, SMEs, and established companies achieve their creative and digital goals.
//                 </p>
//                 <p className="osp-story-paragraph">
//                   What drives us is our commitment to <strong>creativity, quality, and measurable results</strong>. Every project is an opportunity to push boundaries and create solutions that not only meet but exceed expectations.
//                 </p>
//                 <div className="osp-milestones">
//                   <div className="osp-milestone">
//                     <span className="osp-milestone-number">200+</span>
//                     <span className="osp-milestone-text">Projects</span>
//                   </div>
//                   <div className="osp-milestone">
//                     <span className="osp-milestone-number">2+</span>
//                     <span className="osp-milestone-text">Years</span>
//                   </div>
//                   <div className="osp-milestone">
//                     <span className="osp-milestone-number">95%</span>
//                     <span className="osp-milestone-text">Retention</span>
//                   </div>
//                   <div className="osp-milestone">
//                     <span className="osp-milestone-number">15+</span>
//                     <span className="osp-milestone-text">Industries</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="osp-story-visual">
//                 <div className="osp-visual-container">
//                   <div className="osp-visual-element osp-visual-1"></div>
//                   <div className="osp-visual-element osp-visual-2"></div>
//                   <div className="osp-visual-element osp-visual-3"></div>
//                   <div className="osp-visual-glow"></div>
//                   <div className="osp-year-timeline">
//                     <div className="osp-year-marker osp-year-2023">
//                       <div className="osp-year-dot"></div>
//                       <span className="osp-year-label">2023<br/>Founded</span>
//                     </div>
//                     <div className="osp-year-line"></div>
//                     <div className="osp-year-marker osp-year-2025">
//                       <div className="osp-year-dot"></div>
//                       <span className="osp-year-label">2025<br/>Present</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Vision & Mission Section */}
//         <section className="osp-section osp-vision-mission">
//           <div className="osp-container">
//             <div className="osp-section-header">
//               <h2 className="osp-section-title">Vision & Mission</h2>
//               <p className="osp-section-subtitle">Our guiding principles</p>
//             </div>
            
//             <div className="osp-vision-mission-content">
//               {visionMission.map((item, index) => (
//                 <div key={index} className={`osp-vision-item osp-${item.type}`}>
//                   <div className="osp-vision-icon" style={{ color: item.accentColor }}>
//                     <FontAwesomeIcon icon={item.icon} />
//                   </div>
//                   <div className="osp-vision-content">
//                     <h3 className="osp-hexco-text osp-vision-title">{item.title}</h3>
//                     <p className="osp-vision-description">{item.description}</p>
//                     <div className="osp-vision-features">
//                       {item.type === "vision" ? (
//                         <>
//                           <span className="osp-feature" style={{ '--feature-color': item.accentColor }}>Global Impact</span>
//                           <span className="osp-feature" style={{ '--feature-color': item.accentColor }}>Innovation First</span>
//                           <span className="osp-feature" style={{ '--feature-color': item.accentColor }}>Sustainable Growth</span>
//                         </>
//                       ) : (
//                         <>
//                           <span className="osp-feature" style={{ '--feature-color': item.accentColor }}>Client Success</span>
//                           <span className="osp-feature" style={{ '--feature-color': item.accentColor }}>Creative Excellence</span>
//                           <span className="osp-feature" style={{ '--feature-color': item.accentColor }}>Measurable Results</span>
//                         </>
//                       )}
//                     </div>
//                   </div>
//                   <div className="osp-vision-glow" style={{ backgroundColor: `${item.accentColor}20` }}></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Combined Timeline Section - FIXED */}
//         <section className="osp-section osp-timeline-section">
//           <div className="osp-container">
//             <div className="osp-section-header">
//               <h2 className="osp-section-title">Our Journey</h2>
//               <p className="osp-section-subtitle">Milestones from 2023 to 2025</p>
//             </div>
            
//             <div className="osp-timeline-container">
//               {/* Timeline Center Line */}
//               <div className="osp-timeline-center-line">
//                 <div className="osp-timeline-line"></div>
//                 <div className="osp-timeline-progress"></div>
//               </div>
              
//               {/* Timeline Items */}
//               <div className="osp-timeline-items">
//                 {timelineData.map((item, index) => (
//                   <div 
//                     key={index} 
//                     className={`osp-timeline-item osp-timeline-${item.side}`}
//                     style={{ 
//                       '--item-color': item.color,
//                       '--index': index
//                     }}
//                   >
//                     {/* Timeline Dot - Fixed on vertical line */}
//                     <div className="osp-timeline-dot-wrapper">
//                       <div className="osp-timeline-dot" style={{ backgroundColor: item.color }}>
//                         <div className="osp-dot-inner"></div>
//                       </div>
//                     </div>
                    
//                     {/* Year Indicator - Next to the dot */}
//                     <div className="osp-timeline-year" style={{ color: item.color }}>
//                       {item.year}
//                     </div>
                    
//                     {/* Content Card */}
//                     <div className="osp-timeline-content">
//                       {/* Phase Badge */}
//                       <div className="osp-phase-badge" style={{ backgroundColor: item.color }}>
//                         {item.quarter}
//                       </div>
                      
//                       {/* Content Header */}
//                       <div className="osp-content-header">
//                         <h3 className="osp-hexco-text osp-timeline-title">{item.title}</h3>
//                         <p className="osp-timeline-description">{item.description}</p>
//                       </div>
                      
//                       {/* Projects Section */}
//                       <div className="osp-timeline-focus">
//                         <h4 className="osp-focus-heading">Key Focus</h4>
//                         <ul className="osp-focus-list">
//                           {item.projects.map((project, i) => (
//                             <li key={i} className="osp-focus-item">{project}</li>
//                           ))}
//                         </ul>
//                       </div>
                      
//                       {/* Glow Effect */}
//                       <div className="osp-content-glow" style={{ backgroundColor: `${item.color}20` }}></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
              
//               {/* Timeline Navigation */}
//               <div className="osp-timeline-navigation">
//                 <div className="osp-navigation-dots">
//                   {timelineData.map((_, index) => (
//                     <div 
//                       key={index} 
//                       className="osp-navigation-dot"
//                       style={{ animationDelay: `${index * 0.2}s` }}
//                     ></div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Project Fields Section */}
//         <section className="osp-section osp-projects-section">
//           <div className="osp-container">
//             <div className="osp-section-header">
//               <h2 className="osp-section-title">Our Expertise</h2>
//               <p className="osp-section-subtitle">Areas of specialization</p>
//             </div>
            
//             <div className="osp-projects-grid">
//               {projectFields.map((field, index) => (
//                 <div 
//                   key={index} 
//                   className="osp-project-item"
//                   style={{ '--item-color': field.color }}
//                 >
//                   <div className="osp-project-icon-wrapper">
//                     <div className="osp-project-icon-glow" style={{ backgroundColor: `${field.color}20` }}></div>
//                     <span className="osp-project-icon">
//                       <FontAwesomeIcon icon={field.icon} style={{ color: field.color }} />
//                     </span>
//                   </div>
//                   <div className="osp-project-info">
//                     <h3 className="osp-hexco-text osp-project-title">{field.title}</h3>
//                     <div className="osp-project-stats">
//                       <span className="osp-project-count">{field.count}</span>
//                       <div className="osp-project-bar">
//                         <div 
//                           className="osp-project-fill"
//                           style={{ 
//                             width: `${Math.random() * 70 + 30}%`,
//                             backgroundColor: field.color
//                           }}
//                         ></div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="osp-project-hover">
//                     <span className="osp-project-arrow">→</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Core Values Section */}
//         <section className="osp-section osp-values-section">
//           <div className="osp-container">
//             <div className="osp-section-header">
//               <h2 className="osp-section-title">Core Values</h2>
//               <p className="osp-section-subtitle">What drives us forward</p>
//             </div>
            
//             <div className="osp-values-grid">
//               {coreValues.map((value, index) => (
//                 <div 
//                   key={index} 
//                   className="osp-value-item"
//                   style={{ '--value-color': value.color }}
//                 >
//                   <div className="osp-value-number">0{index + 1}</div>
//                   <div className="osp-value-icon" style={{ color: value.color }}>
//                     <FontAwesomeIcon icon={value.icon} />
//                   </div>
//                   <div className="osp-value-content">
//                     <h3 className="osp-hexco-text osp-value-title">{value.title}</h3>
//                     <p className="osp-value-description">{value.description}</p>
//                   </div>
//                   <div className="osp-value-accent" style={{ backgroundColor: `${value.color}20` }}></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Call to Action */}
//         <section className="osp-section osp-cta-section">
//           <div className="osp-container">
//             <div className="osp-cta-content">
//               <h2 className="osp-section-title osp-cta-title">Ready to Create?</h2>
//               <p className="osp-cta-text">
//                 Join 100+ satisfied clients who've transformed their brand and digital presence with our creative solutions.
//                 Let's build something amazing together.
//               </p>
//               <div className="osp-cta-buttons">
//                 <button 
//                   className="osp-cta-btn osp-primary-btn"
//                      onClick={handleWhatsAppClick}
//                 >
//                   <span className="osp-btn-icon">
//                     <FontAwesomeIcon icon={faComments} />
//                   </span>
//                   <span className="osp-btn-text">Start on WhatsApp</span>
//                   <span className="osp-btn-arrow">→</span>
//                 </button>
//                 <button 
//                   className="osp-cta-btn osp-secondary-btn"
//                   onClick={handlePortfolioClick}
//                 >
//                   <span className="osp-btn-text">View Portfolio</span>
//                   <span className="osp-btn-icon">
//                     <FontAwesomeIcon icon={faFolderOpen} />
//                   </span>
//                 </button>
//               </div>
//               <div className="osp-cta-glow"></div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <MainPageSubFooter />
//       <BackToTop />
//     </div>
//   );
// };

// export default OurStoryPage;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRocket,
  faStar,
  faHandshake,
  faUsers,
  faChartLine,
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
  faChevronDown,
  faComments,
  faFolderOpen,
  faLightbulb,
  faMedal,
  faShieldAlt,
  faNetworkWired,
  faSeedling
} from '@fortawesome/free-solid-svg-icons';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import './OurStoryPage.css';
import MainPageSubFooter from '../MainPageSubFooter/MainPageSubFooter';

const OurStoryPage = () => {
  const navigate = useNavigate();
  
  // WhatsApp contact number (replace with your actual number)
  const whatsappNumber = "6381759909"; // Add your WhatsApp number here
  const whatsappMessage = "Hello! I'm interested in starting a project with ENGLORAY.";
  
  // Handle WhatsApp click
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
      icon: faRocket,
      color: "#FF6B6B"
    },
    {
      title: "Excellence",
      description: "Delivering world-class digital solutions",
      icon: faStar,
      color: "#4ECDC4"
    },
    {
      title: "Integrity",
      description: "Transparent and ethical in all operations",
      icon: faShieldAlt,
      color: "#45B7D1"
    },
    {
      title: "Collaboration",
      description: "Building strong client partnerships",
      icon: faNetworkWired,
      color: "#96CEB4"
    },
    {
      title: "Growth",
      description: "Continuous evolution and adaptation",
      icon: faSeedling,
      color: "#FFEAA7"
    }
  ];

  // Vision & Mission
  const visionMission = [
    {
      type: "vision",
      title: "Our Vision",
      description: "To become the most trusted digital transformation partner for enterprises worldwide, creating innovative solutions that drive business growth and technological advancement.",
      icon: faGlobe,
      accentColor: "#4ECDC4"
    },
    {
      type: "mission",
      title: "Our Mission",
      description: "To empower businesses with cutting-edge digital solutions through expert engineering, innovative thinking, and sustainable technology practices that deliver measurable results.",
      icon: faBullseye,
      accentColor: "#FF6B6B"
    }
  ];

  // Project Fields
  const projectFields = [
    { title: "Branding", icon: faPalette, count: "50+ Projects", color: "#FF6B6B" },
    { title: "Web Design", icon: faDesktop, count: "40+ Projects", color: "#4ECDC4" },
    { title: "UI/UX Design", icon: faPaintBrush, count: "45+ Projects", color: "#45B7D1" },
    { title: "Digital Marketing", icon: faChartBar, count: "30+ Projects", color: "#96CEB4" },
    { title: "Mobile Apps", icon: faMobileAlt, count: "25+ Projects", color: "#FFEAA7" },
    { title: "E-Learning", icon: faGraduationCap, count: "20+ Projects", color: "#DDA0DD" },
    { title: "Software Solutions", icon: faCode, count: "35+ Projects", color: "#FFB347" },
    { title: "Consulting", icon: faTools, count: "60+ Projects", color: "#A3E4D7" }
  ];

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
      
      {/* Animated Header */}
      <header className="osp-header">
        <div className="osp-header-background">
          <div className="osp-particle-container">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="osp-particle" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`
              }}></div>
            ))}
          </div>
          <div className="osp-header-content">
            <h1 className="osp-title">
              <span className="osp-title-text">Our Story</span>
              <span className="osp-title-sub">Journey of Creativity & Innovation</span>
            </h1>
            <div className="osp-scroll-indicator">
              <span className="osp-scroll-text">Scroll to Explore</span>
              <div className="osp-scroll-arrow">
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="osp-main-content">
        {/* Story Section */}
        <section className="osp-section osp-story-section">
          <div className="osp-container">
            <div className="osp-section-header">
              <h2 className="osp-section-title">Our Beginning</h2>
              <p className="osp-section-subtitle">From startup to creative leader</p>
            </div>
            
            <div className="osp-story-content">
              <div className="osp-story-text">
                <div className="osp-story-highlight">
                  <span className="osp-highlight-icon">
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                  <h3 className="osp-hexco-text">The ENGLORAY Journey</h3>
                </div>
                <p className="osp-story-paragraph">
                  Founded in early 2023, ENGLORAY emerged from a shared passion for transforming businesses through creative design and innovative technology. With 2+ years of industry experience, we've evolved from a small creative studio into a trusted partner for businesses seeking digital transformation.
                </p>
                <p className="osp-story-paragraph">
                  Our journey began with a simple vision: to make exceptional design and technology accessible and practical for businesses of all sizes. Today, we've successfully delivered <strong>200+ projects</strong> across various industries, helping startups, SMEs, and established companies achieve their creative and digital goals.
                </p>
                <p className="osp-story-paragraph">
                  What drives us is our commitment to <strong>creativity, quality, and measurable results</strong>. Every project is an opportunity to push boundaries and create solutions that not only meet but exceed expectations.
                </p>
                <div className="osp-milestones">
                  <div className="osp-milestone">
                    <span className="osp-milestone-number">200+</span>
                    <span className="osp-milestone-text">Projects</span>
                  </div>
                  <div className="osp-milestone">
                    <span className="osp-milestone-number">2+</span>
                    <span className="osp-milestone-text">Years</span>
                  </div>
                  <div className="osp-milestone">
                    <span className="osp-milestone-number">95%</span>
                    <span className="osp-milestone-text">Retention</span>
                  </div>
                  <div className="osp-milestone">
                    <span className="osp-milestone-number">15+</span>
                    <span className="osp-milestone-text">Industries</span>
                  </div>
                </div>
              </div>
              <div className="osp-story-visual">
                <div className="osp-visual-container">
                  <div className="osp-visual-element osp-visual-1"></div>
                  <div className="osp-visual-element osp-visual-2"></div>
                  <div className="osp-visual-element osp-visual-3"></div>
                  <div className="osp-visual-glow"></div>
                  <div className="osp-year-timeline">
                    <div className="osp-year-marker osp-year-2023">
                      <div className="osp-year-dot"></div>
                      <span className="osp-year-label">2023<br/>Founded</span>
                    </div>
                    <div className="osp-year-line"></div>
                    <div className="osp-year-marker osp-year-2025">
                      <div className="osp-year-dot"></div>
                      <span className="osp-year-label">2025<br/>Present</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="osp-section osp-vision-mission">
          <div className="osp-container">
            <div className="osp-section-header">
              <h2 className="osp-section-title">Vision & Mission</h2>
              <p className="osp-section-subtitle">Our guiding principles</p>
            </div>
            
            <div className="osp-vision-mission-content">
              {visionMission.map((item, index) => (
                <div key={index} className={`osp-vision-item osp-${item.type}`}>
                  <div className="osp-vision-icon" style={{ color: item.accentColor }}>
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <div className="osp-vision-content">
                    <h3 className="osp-hexco-text osp-vision-title">{item.title}</h3>
                    <p className="osp-vision-description">{item.description}</p>
                    <div className="osp-vision-features">
                      {item.type === "vision" ? (
                        <>
                          <span className="osp-feature" style={{ '--feature-color': item.accentColor }}>Global Impact</span>
                          <span className="osp-feature" style={{ '--feature-color': item.accentColor }}>Innovation First</span>
                          <span className="osp-feature" style={{ '--feature-color': item.accentColor }}>Sustainable Growth</span>
                        </>
                      ) : (
                        <>
                          <span className="osp-feature" style={{ '--feature-color': item.accentColor }}>Client Success</span>
                          <span className="osp-feature" style={{ '--feature-color': item.accentColor }}>Creative Excellence</span>
                          <span className="osp-feature" style={{ '--feature-color': item.accentColor }}>Measurable Results</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="osp-vision-glow" style={{ backgroundColor: `${item.accentColor}20` }}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Combined Timeline Section - UPDATED WITH DOTS ABOVE PHASE */}
        <section className="osp-section osp-timeline-section">
          <div className="osp-container">
            <div className="osp-section-header">
              <h2 className="osp-section-title">Our Journey</h2>
              <p className="osp-section-subtitle">Milestones from 2023 to 2025</p>
            </div>
            
            <div className="osp-timeline-container">
              {/* Timeline Center Line */}
              <div className="osp-timeline-center-line">
                <div className="osp-timeline-line"></div>
                <div className="osp-timeline-progress"></div>
              </div>
              
              {/* Timeline Items */}
              <div className="osp-timeline-items">
                {timelineData.map((item, index) => (
                  <div 
                    key={index} 
                    className={`osp-timeline-item osp-timeline-${item.side}`}
                    style={{ 
                      '--item-color': item.color,
                      '--index': index
                    }}
                  >
                    {/* Year Indicator - Fixed position aligned with timeline dot */}
                    <div className="osp-timeline-year" style={{ color: item.color }}>
                      {item.year}
                    </div>
                    
                    {/* Timeline Dot on the vertical line */}
                    <div className="osp-timeline-dot-wrapper">
                      <div className="osp-timeline-dot" style={{ backgroundColor: item.color }}>
                        <div className="osp-dot-inner"></div>
                      </div>
                    </div>
                    
                    {/* Content Card */}
                    <div className="osp-timeline-content">
                      {/* Dots above phase badge - LIKE IN THE IMAGE */}
                      <div className="osp-phase-dots">
                        <div className="osp-phase-dot" style={{ backgroundColor: item.color }}></div>
                        <div className="osp-phase-dot" style={{ backgroundColor: item.color }}></div>
                        <div className="osp-phase-dot" style={{ backgroundColor: item.color }}></div>
                      </div>
                      
                      {/* Phase Badge */}
                      <div className="osp-phase-badge" style={{ backgroundColor: item.color }}>
                        {item.quarter}
                      </div>
                      
                      {/* Content Header */}
                      <div className="osp-content-header">
                        <h3 className="osp-hexco-text osp-timeline-title">{item.title}</h3>
                        <p className="osp-timeline-description">{item.description}</p>
                      </div>
                      
                      {/* Projects Section */}
                      <div className="osp-timeline-focus">
                        <h4 className="osp-focus-heading">Key Focus</h4>
                        <ul className="osp-focus-list">
                          {item.projects.map((project, i) => (
                            <li key={i} className="osp-focus-item">{project}</li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Glow Effect */}
                      <div className="osp-content-glow" style={{ backgroundColor: `${item.color}20` }}></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Timeline Navigation */}
              <div className="osp-timeline-navigation">
                <div className="osp-navigation-dots">
                  {timelineData.map((_, index) => (
                    <div 
                      key={index} 
                      className="osp-navigation-dot"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Fields Section */}
        <section className="osp-section osp-projects-section">
          <div className="osp-container">
            <div className="osp-section-header">
              <h2 className="osp-section-title">Our Expertise</h2>
              <p className="osp-section-subtitle">Areas of specialization</p>
            </div>
            
            <div className="osp-projects-grid">
              {projectFields.map((field, index) => (
                <div 
                  key={index} 
                  className="osp-project-item"
                  style={{ '--item-color': field.color }}
                >
                  <div className="osp-project-icon-wrapper">
                    <div className="osp-project-icon-glow" style={{ backgroundColor: `${field.color}20` }}></div>
                    <span className="osp-project-icon">
                      <FontAwesomeIcon icon={field.icon} style={{ color: field.color }} />
                    </span>
                  </div>
                  <div className="osp-project-info">
                    <h3 className="osp-hexco-text osp-project-title">{field.title}</h3>
                    <div className="osp-project-stats">
                      <span className="osp-project-count">{field.count}</span>
                      <div className="osp-project-bar">
                        <div 
                          className="osp-project-fill"
                          style={{ 
                            width: `${Math.random() * 70 + 30}%`,
                            backgroundColor: field.color
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="osp-project-hover">
                    <span className="osp-project-arrow">→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="osp-section osp-values-section">
          <div className="osp-container">
            <div className="osp-section-header">
              <h2 className="osp-section-title">Core Values</h2>
              <p className="osp-section-subtitle">What drives us forward</p>
            </div>
            
            <div className="osp-values-grid">
              {coreValues.map((value, index) => (
                <div 
                  key={index} 
                  className="osp-value-item"
                  style={{ '--value-color': value.color }}
                >
                  <div className="osp-value-number">0{index + 1}</div>
                  <div className="osp-value-icon" style={{ color: value.color }}>
                    <FontAwesomeIcon icon={value.icon} />
                  </div>
                  <div className="osp-value-content">
                    <h3 className="osp-hexco-text osp-value-title">{value.title}</h3>
                    <p className="osp-value-description">{value.description}</p>
                  </div>
                  <div className="osp-value-accent" style={{ backgroundColor: `${value.color}20` }}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="osp-section osp-cta-section">
          <div className="osp-container">
            <div className="osp-cta-content">
              <h2 className="osp-section-title osp-cta-title">Ready to Create?</h2>
              <p className="osp-cta-text">
                Join 100+ satisfied clients who've transformed their brand and digital presence with our creative solutions.
                Let's build something amazing together.
              </p>
              <div className="osp-cta-buttons">
                <button 
                  className="osp-cta-btn osp-primary-btn"
                     onClick={handleWhatsAppClick}
                >
                  <span className="osp-btn-icon">
                    <FontAwesomeIcon icon={faComments} />
                  </span>
                  <span className="osp-btn-text">Start on WhatsApp</span>
                  <span className="osp-btn-arrow">→</span>
                </button>
                <button 
                  className="osp-cta-btn osp-secondary-btn"
                  onClick={handlePortfolioClick}
                >
                  <span className="osp-btn-text">View Portfolio</span>
                  <span className="osp-btn-icon">
                    <FontAwesomeIcon icon={faFolderOpen} />
                  </span>
                </button>
              </div>
              <div className="osp-cta-glow"></div>
            </div>
          </div>
        </section>
      </main>
      <MainPageSubFooter />
      <BackToTop />
    </div>
  );
};

export default OurStoryPage;