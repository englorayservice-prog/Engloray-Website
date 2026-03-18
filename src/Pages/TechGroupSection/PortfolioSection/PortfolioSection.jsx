import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PortfolioSection.css';

// import ai from './../../../assets/ai.png'
import caseLogoOne from '../../../assets/case study images/uiux/pavizham.jpg';
import caseLogoTwo from '../../../assets/case study images/uiux/viaan.jpg';
import caseLogoThree from '../../../assets/case study images/branding/malar.jpg';
import caseLogoFour from '../../../assets/case study images/products/amico.png';
import caseLogoFive from '../../../assets/case study images/websites/say.jpg';
import caseLogosix from '../../../assets/case study images/Application/aara.png';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
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

  const filterDescriptions = {
    'websites': {
      title: 'Web Development Projects',
      description: 'Modern, responsive websites with cutting-edge technologies and optimal user experiences'
    },
    'Products': {
      title: 'Product Design Portfolio',
      description: 'End-to-end product solutions from concept to deployment with user-centric design'
    },
    'branding': {
      title: 'Brand Identity Works',
      description: 'Comprehensive branding solutions that establish strong market presence and recognition'
    },
    'ui-ux': {
      title: 'UI/UX Design Excellence',
      description: 'Intuitive interfaces and seamless user experiences that drive engagement and conversion'
    },
    'Applications': {
      title: 'Application Development',
      description: 'Robust applications with scalable architecture and exceptional performance'
    }
  };

  const portfolioItems = [
    {
      id: 1,
      title: "Viaan Enterprises",
      category: "ui-ux",
      image: caseLogoTwo,
      description: "Complete redesign of a multi-vector marketplace platform focusing on user experience, commercial...",
      year: "2024"
    },
    {
      id: 2,
      title: "Amico",
      category: "Products",
      image: caseLogoFour,
      description: "Consistent brand language across all products, A Consumer based product Company",
      year: "2025"
    },
    {
      id: 3,
      title: "Malar Herbal Tea & spices",
      category: "branding",
      image: caseLogoThree,
      description: "Complete brand identity system for an eco-friendly fashion startup including logo, color...",
      year: "2025"
    },
    {
      id: 4,
      title: "Pavizham Jewellers",
      category: "ui-ux",
      image: caseLogoOne,
      description: "Modern dashboard design for a banking application with real-time analytics, transaction management...",
      year: "2025"
    },
    {
      id: 5,
      title: "Aara Labs",
      category: "Applications",
      image: caseLogosix,
      description: "Platform for Medical collaborative management platform with real-time updates...",
      year: "2025"
    },
    {
      id: 6,
      title: "Say Bridal Makeup Website",
      category: "websites",
      image: caseLogoFive,
      description: "Responsive design for a starred Makeup Studio featuring online reservations, menu...",
      year: "2025"
    }
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

  // Determine if we need to apply special layout for UI/UX category
  const isUiUxLayout = activeFilter === 'ui-ux';
  const gridClassNames = `ps-portfolio-grid ${activeFilter !== 'all' ? 'ps-grid-with-right-content' : ''} ${isUiUxLayout ? 'ps-uiux-layout' : ''}`;

  return (
    <section className="ps-portfolio-section" id="portfolio">
      <div className="ps-portfolio-container">
        {/* Header */}
        <div className={`ps-portfolio-header ${isVisible ? 'ps-animate-fade-in' : ''}`}>
          <span className="ps-benefits-main-badge">Our Created Works</span>
          <h2 className="ps-portfolio-title">Featured Work</h2>
          <p className="ps-portfolio-subtitle">
            Explore projects across various domains
          </p>
          <div className="ps-title-underline"></div>
        </div>

        {/* Filter Buttons */}
        <div className={`ps-portfolio-filters ${isVisible ? 'ps-animate-slide-up' : ''}`}>
          {filters.map((filter, index) => (
            <button
              key={filter.key}
              className={`ps-filter-btn ${activeFilter === filter.key ? 'ps-active' : ''}`}
              onClick={() => handleFilterChange(filter.key)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Main Content Wrapper */}
        <div className={`ps-main-content-wrapper ${activeFilter !== 'all' ? 'ps-with-side-content' : ''}`}>
          
          {/* Portfolio Grid */}
          <div className={gridClassNames}>
            {filteredItems.map((item, index) => (
              <div 
                key={item.id}
                className={`ps-portfolio-card ${isVisible ? 'ps-animate-scale-in' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="ps-card-image-container">
                  <img src={item.image} alt={item.title} className="ps-card-image" />
                  <div className="ps-card-overlay">
                    {/* <button 
                      className="ps-view-case-study"
                      onClick={() => handleViewCaseStudy(item.id)}
                    >
                      View Case Study
                    </button> */}
                  </div>
                </div>
                
                <div className="ps-card-content">
                  <h3 className="ps-card-title">{item.title}</h3>
                  <p className="ps-card-description">{item.description}</p>
                  
                  <div className="ps-card-footer">
                    <span className="ps-card-category">{item.category}</span>
                    <span className="ps-card-year">{item.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side Content - Only shows when filter is not 'all' */}
          {activeFilter !== 'all' && filterDescriptions[activeFilter] && (
            <div className={`ps-right-side-content ${isVisible ? 'ps-animate-fade-in' : ''}`}>
              <div className="ps-right-content-inner">
                <div className="ps-right-title-wrapper">
                  <h3 className="ps-right-title">{filterDescriptions[activeFilter].title}</h3>
                  <div className="ps-right-title-line"></div>
                </div>
                
                <p className="ps-right-description">
                  {filterDescriptions[activeFilter].description}
                </p>
                
                {/* Arrow pointing to button */}
                <div className="ps-right-arrow">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 14L12 9L17 14" stroke="#f23030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="ps-arrow-text">View More</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Load More Button */}
        <div className={`ps-portfolio-cta ${isVisible ? 'ps-animate-fade-in' : ''}`}>
          <button 
            className="ps-load-more-btn"
            onClick={navigateToTechGroupProjects}
          >
            View More Projects
            <span className="ps-btn-arrow">↗</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;