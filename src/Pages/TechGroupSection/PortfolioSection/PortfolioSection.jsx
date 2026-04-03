import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faChartLine, faRocket, faCloud, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import './PortfolioSection.css';

// import ai from './../../../assets/ai.png'
import caseLogoOne from '../../../assets/case study images/uiux/pavizham.jpg';
import caseLogoTwo from '../../../assets/case study images/uiux/viaan.jpg';
import caseLogoThree from '../../../assets/case study images/branding/malar.jpg';
import caseLogoFour from '../../../assets/case study images/products/amico.png';
import caseLogoFive from '../../../assets/case study images/websites/say.jpg';
import caseLogosix from '../../../assets/case study images/Application/aara.png';
import newGlobe from '../../../assets/newGlobe.png';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'websites', label: 'Websites' },
    { key: 'Products', label: 'Products' },
    { key: 'branding', label: 'Branding' },
    { key: 'ui-ux', label: 'UI/UX' },
    { key: 'Applications', label: 'Applications' }
  ];

  const portfolioItems = [
    { id: 1, title: "Viaan Enterprises", category: "ui-ux", image: caseLogoTwo, description: "Complete redesign of a multi-vector marketplace platform focusing on user experience, commercial...", year: "2024" },
    { id: 2, title: "Amico", category: "Products", image: caseLogoFour, description: "Consistent brand language across all products, A Consumer based product Company", year: "2025" },
    { id: 3, title: "Malar Herbal Tea & spices", category: "branding", image: caseLogoThree, description: "Complete brand identity system for an eco-friendly fashion startup including logo, color...", year: "2025" },
    { id: 4, title: "Pavizham Jewellers", category: "ui-ux", image: caseLogoOne, description: "Modern dashboard design for a banking application with real-time analytics, transaction management...", year: "2025" },
    { id: 5, title: "Aara Labs", category: "Applications", image: caseLogosix, description: "Platform for Medical collaborative management platform with real-time updates...", year: "2025" },
    { id: 6, title: "Say Bridal Makeup Website", category: "websites", image: caseLogoFive, description: "Responsive design for a starred Makeup Studio featuring online reservations, menu...", year: "2025" }
  ];

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  const navigateToTechGroupProjects = () => {
    navigate('/allProjectsPage');
  };

  const handleFilterChange = (filterKey) => {
    setActiveFilter(filterKey);
  };

  // World map markers definition

  return (
    <section className="ps-portfolio-section" id="portfolio">
      {/* <div className="ps-portfolio-container">
        <div className={`ps-portfolio-header ${isVisible ? 'ps-animate-fade-in' : ''}`}>
          <span className="ps-benefits-main-badge">Our Created Works</span>
          <h2 className="ps-portfolio-title">Featured Work</h2>
          <p className="ps-portfolio-subtitle">Explore projects across various domains</p>
          <div className="ps-title-underline"></div>
        </div>

        <div className={`ps-portfolio-filters ${isVisible ? 'ps-animate-slide-up' : ''}`}>
          {filters.map((filter, index) => (
            <button
              key={filter.key}
              className={`ps-filter-btn ${activeFilter === filter.key ? 'ps-active' : ''}`}
              onClick={() => handleFilterChange(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className={`ps-main-content-wrapper ${activeFilter !== 'all' ? 'ps-with-side-content' : ''}`}>
          <div className="ps-portfolio-grid">
            {filteredItems.map(item => (
              <div key={item.id} className="ps-portfolio-card">
                <div className="ps-card-image-container">
                   <img src={item.image} alt={item.title} className="ps-card-image" />
                   <div className="ps-card-overlay"></div>
                </div>
                <div className="ps-card-content">
                  <h3 className="ps-card-title">{item.title}</h3>
                  <p className="ps-card-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ps-portfolio-cta">
          <button className="ps-load-more-btn" onClick={navigateToTechGroupProjects}>
            View More Projects <span className="ps-btn-arrow">↗</span>
          </button>
        </div>
      </div> */}

      {/* GLOBAL PRESENCE - 100% VISIBLE REVOLVING WORLD */}
      <div className="ps-world-map-section">
        <div className="ps-world-map-layout">
          {/* LEFT SIDE: GLOBE */}

          <div className="ps-centered-globe-container">
            <img src={newGlobe} alt="Global Presence" className="ps-center-revolving-globe" />
            <div className="ps-map-overlay-hubs-globe">
              {mapMarkers.map(marker => (
                <div
                  key={marker.id}
                  className="ps-map-marker-pin-globe"
                  style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                  onMouseEnter={() => setHoveredProject(marker.projectId)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="ps-marker-pulse-globe"></div>
                  <div className="ps-marker-point-globe"></div>
                </div>
              ))}
            </div>

            {hoveredProject && (
              <div className="ps-map-globe-floating-card">
                {portfolioItems.filter(p => p.id === hoveredProject).map(project => (
                  <div className="ps-map-hover-card-inner-p" key={project.id}>
                    <div className="ps-map-card-img-box-p">
                      <img src={project.image} alt={project.title} />
                    </div>
                    <div className="ps-map-card-body-p">
                      <span className="ps-map-card-tag-p">{project.category}</span>
                      <h4 className="ps-map-card-name-p">{project.title}</h4>
                      <p className="ps-map-card-year-p">{project.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT SIDE: TEXT CONTENT */}
          <div className="ps-globe-side-content">
            {/* FLOATING ICONS */}
            <div className="ps-floating-icons-container">
              <div className="ps-float-icon icon-1"><FontAwesomeIcon icon={faCode} /></div>
              <div className="ps-float-icon icon-2"><FontAwesomeIcon icon={faChartLine} /></div>
              <div className="ps-float-icon icon-3"><FontAwesomeIcon icon={faRocket} /></div>
              <div className="ps-float-icon icon-4"><FontAwesomeIcon icon={faCloud} /></div>
              <div className="ps-float-icon icon-5"><FontAwesomeIcon icon={faShieldHalved} /></div>
            </div>

            <h2 className="ps-globe-side-title">Our Featured Works</h2>
            <p className="ps-globe-side-desc">
              Discover how we build scalable, high-performance systems for global enterprises.
              Our portfolio highlights continuous innovation, resilient architecture,
              and impactful digital transformations. We take pride in delivering robust
              code, seamless user experiences, and proven business results across all regions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapMarkers = [
  { id: 1, x: 48, y: 25, projectId: 3 },
  { id: 2, x: 65, y: 30, projectId: 2 },
  { id: 3, x: 45, y: 50, projectId: 4 },
  { id: 4, x: 18, y: 72, projectId: 1 },
  { id: 5, x: 75, y: 65, projectId: 5 },
  { id: 6, x: 80, y: 45, projectId: 6 }
];

export default PortfolioSection;