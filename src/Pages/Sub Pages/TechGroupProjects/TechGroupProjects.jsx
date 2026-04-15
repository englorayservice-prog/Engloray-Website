import React, { useState, useRef, useEffect } from 'react';

//uiux
import projectLogoOne from '../../../assets/case study images/uiux/pavizham.jpg';
import projectLogoTwo from '../../../assets/case study images/uiux/viaan.jpg';
import projectLogoThree from '../../../assets/case study images/uiux/gym life.png';

//applications
import projectLogoFour from '../../../assets/case study images/Application/aara.png';
import projectLogoFive from '../../../assets/case study images/Application/pavizham.jpg';
import projectLogoSix from '../../../assets/case study images/Application/orthopetic clinic.png';

//websites
import projectLogoSeven from '../../../assets/case study images/websites/say.jpg';
import projectLogoEight from '../../../assets/case study images/websites/Divya makeovers.jpg';
import projectLogoNine from '../../../assets/case study images/websites/green park school.png';

//product
import projectLogoTen from '../../../assets/case study images/products/amico.png';
import projectLogoEleven from '../../../assets/case study images/products/brandex.png';
import projectLogoTwelve from '../../../assets/case study images/products/maax life.png';
import projectLogoThireteen from '../../../assets/case study images/products/sr Foods.jpg';
import projectLogoFourteen from '../../../assets/case study images/products/studio makeup.png';
import projectLogoFifteen from '../../../assets/case study images/products/tamil natrals.png';

//
import projectLogoSixteen from '../../../assets/case study images/branding/amoura.png';
import projectLogoSeventeen from '../../../assets/case study images/branding/ecec.png';
import projectLogoEightteen from '../../../assets/case study images/branding/malar.jpg';
import projectLogoNineteen from '../../../assets/case study images/branding/Nestoria.jpg';

import './TechGroupProjects.css';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import Navbar from '../../../Components/Navbar/Navbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import TSPFF from '../../../Pages/Sub Pages/TechGroupSubPagefooter/TSPFFooter'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple, faCheck, faPercentage, faUsers } from '@fortawesome/free-solid-svg-icons';

const TechGroupProjects = () => {
  // All portfolio items by category
  const projectsByCategory = {
    'development': [
      {
        id: 5,
        title: "Amico",
        category: "development",
        image: projectLogoTen,
        description: "Food Product labels with premium color psychology.",
        year: "2025",
        client: "Consumer Product",
        technologies: ["Next.js", "PostgreSQL", "GraphQL"],
        status: "completed"
      },
      {
        id: 8,
        title: "Brandex",
        category: "development",
        image: projectLogoEleven,
        description: "Market Ready Label System with improved color balance.",
        year: "2023",
        client: "FMCG products",
        technologies: ["React native", "Three.js", "Node.js"],
        status: "completed"
      },
      {
        id: 9,
        title: "Maax Life",
        category: "development",
        image: projectLogoTwelve,
        description: "Premium label layouts with typography improved.",
        year: "2024",
        client: "health & wellness",
        technologies: ["Django", "PostgreSQL", "WebSocket"],
        status: "completed"
      },
      {
        id: 12,
        title: "SR Foods",
        category: "development",
        image: projectLogoThireteen,
        description: "Food Friendly visual design with attractive labels.",
        year: "2024",
        client: "Food products",
        technologies: ["Python", "TensorFlow", "Label Design"],
        status: "completed"
      },
      {
        id: 18,
        title: "Studio Makeup",
        category: "development",
        image: projectLogoFourteen,
        description: "Modern Cosmetics label with brand tone.",
        year: "2024",
        client: "Cosmetics & bridal",
        technologies: ["Vue.js", "Python", "Typescript"],
        status: "completed"
      },
      {
        id: 24,
        title: "Tamil Naturals",
        category: "development",
        image: projectLogoFifteen,
        description: "Authentic and traditional labels for packing.",
        year: "2025",
        client: "Naturals products",
        technologies: ["Solidity", "Web3.js", "Node.js"],
        status: "completed"
      }
    ],
    'branding': [
      {
        id: 3,
        title: "Amoura",
        category: "branding",
        image: projectLogoSixteen,
        description: "Complete brand identity for eco-friendly fashion Jewellery.",
        year: "2024",
        client: "Amoura Jewellery",
        technologies: ["Adobe Creative Suite", "Brand Guidelines"],
        status: "completed"
      },
      {
        id: 19,
        title: "ECEC",
        category: "branding",
        image: projectLogoSeventeen,
        description: "Complete brand launch package for tech startup and marketing.",
        year: "2025",
        client: "Ecec Skill School",
        technologies: ["Logo Design", "Brand Strategy", "Marketing"],
        status: "in-progress"
      },
      {
        id: 20,
        title: "Malar Herbs",
        category: "branding",
        image: projectLogoEightteen,
        description: "Complete rebranding of established chain with new identity and packaging.",
        year: "2025",
        client: "Herbal products",
        technologies: ["Packaging Design", "Menu Design", "Interior Branding"],
        status: "completed"
      },
      {
        id: 25,
        title: "Nestoria",
        category: "branding",
        image: projectLogoNineteen,
        description: "Vibrant brand identity for with app icon design & logo.",
        year: "2024",
        client: "Logo & branding",
        technologies: ["After Effects", "Illustrator", "Motion Design"],
        status: "completed"
      }
    ],
    'ui-ux': [
      {
        id: 1,
        title: "Pavizham",
        category: "ui-ux",
        image: projectLogoOne,
        description: "Complete redesign of a multi-vector marketplace platform focusing on user experience, commercial conversion optimization.",
        year: "2025",
        client: "Pavizham Jewellery",
        technologies: ["UI Design", "Branding", "Label Design"],
        status: "completed"
      },
      {
        id: 4,
        title: "Viaan",
        category: "ui-ux",
        image: projectLogoTwo,
        description: "Modern dashboard design application with real-time analytics and transaction management.",
        year: "2024",
        client: "Viaan Enterprises",
        technologies: ["Label Design", "Figma", "Ux design"],
        status: "completed"
      },
      {
        id: 13,
        title: "Gym Life",
        category: "ui-ux",
        image: projectLogoThree,
        description: "Intuitive slot booking application with seamless ui/ux integration.",
        year: "2024",
        client: "Gym Life",
        technologies: ["Figma", "Adobe XD", "Prototyping"],
        status: "completed"
      }
    ],
    'mobile-apps': [
      {
        id: 2,
        title: "Aara Labs",
        category: "mobile-apps",
        image: projectLogoFour,
        description: "iOS and Android app for appointment booking & tracking.",
        year: "2025",
        client: "Aara Labs",
        technologies: ["React Native", "Firebase", "TensorFlow"],
        status: "completed"
      },
      {
        id: 7,
        title: "Pavizham",
        category: "mobile-apps",
        image: projectLogoFive,
        description: "Precise Mobile app for Jewellery Shop with new UI",
        year: "2025",
        client: "Pavizham Jewellery",
        technologies: ["Flutter", "Firebase", "WebRTC"],
        status: "completed"
      },
      {
        id: 10,
        title: "Orthopedic Clinic",
        category: "mobile-apps",
        image: projectLogoSix,
        description: "New Appointment System having enhanced facilities.",
        year: "2023",
        client: "QuickBite Delivery",
        technologies: ["React Native", "Stripe API", "Google Maps"],
        status: "completed"
      }
    ],
    'web-design': [
      {
        id: 6,
        title: "Say Bridal",
        category: "web-design",
        image: projectLogoSeven,
        description: "Responsive design for Bridals with online reservations.",
        year: "2025",
        client: "Cosmetics & bridal",
        technologies: ["WordPress", "GSAP", "Three.js"],
        status: "completed"
      },
      {
        id: 11,
        title: "Divya MakeOvers",
        category: "web-design",
        image: projectLogoEight,
        description: "Makeover Designed UI with responsive designs for studios.",
        year: "2024",
        client: "Makeovers",
        technologies: ["Angular", "MongoDB", "Stripe"],
        status: "completed"
      },
      {
        id: 17,
        title: "Green park School",
        category: "web-design",
        image: projectLogoNine,
        description: "Modern e-learning platform with course management and interactive learning tools.",
        year: "2025",
        client: "website for School",
        technologies: ["React", "GraphQL", "Video Streaming"],
        status: "completed"
      }
    ]
  };

  // State management
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedCategories, setExpandedCategories] = useState({
    'development': false,
    'branding': false,
    'ui-ux': false,
    'mobile-apps': false,
    'web-design': false
  });
  
  // Scroll animation states
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  // Refs for scroll containers
  const scrollRefs = {
    'development': useRef(null),
    'branding': useRef(null),
    'ui-ux': useRef(null),
    'mobile-apps': useRef(null),
    'web-design': useRef(null)
  };

  const mainContainerRef = useRef(null);

  // Categories with display names
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'development', name: 'Development' },
    { id: 'branding', name: 'Branding' },
    { id: 'ui-ux', name: 'UI/UX Design' },
    { id: 'mobile-apps', name: 'Mobile Apps' },
    { id: 'web-design', name: 'Web Design' }
  ];

  // Initialize page
  useEffect(() => {
    setIsPageLoaded(false);
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 300);

    // Add scroll event listener
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setScrollProgress(progress);
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Background colors for alternating sections
  const getSectionBgClass = (index) => {
    return index % 2 === 0 ? 'tap-section-light' : 'tap-section-dark';
  };

  // Filter projects based on search
  const filterProjectsBySearch = (projects) => {
    if (!searchQuery) return projects;
    
    return projects.filter(project => 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(tech => 
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };

  // Get projects for each category
  const getCategoryProjects = (categoryId) => {
    const projects = projectsByCategory[categoryId] || [];
    return filterProjectsBySearch(projects);
  };

  // Get visible projects for a category
  const getVisibleProjects = (categoryId) => {
    const allProjects = getCategoryProjects(categoryId);
    const isExpanded = expandedCategories[categoryId];
    return isExpanded ? allProjects : allProjects.slice(0, 4);
  };

  // Toggle category expansion
  const toggleCategoryExpansion = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle category selection
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    if (categoryId !== 'all') {
      setTimeout(() => {
        const element = document.getElementById(`category-${categoryId}`);
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  // Clear all filters
  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setExpandedCategories({
      'development': false,
      'branding': false,
      'ui-ux': false,
      'mobile-apps': false,
      'web-design': false
    });
  };

  // Scroll horizontally
  const handleScroll = (categoryId, direction) => {
    const container = scrollRefs[categoryId].current;
    if (container) {
      const scrollAmount = 400;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Calculate statistics
  const calculateStatistics = () => {
    let totalProjects = 0;
    let completedProjects = 0;
    let inProgressProjects = 0;
    const clients = new Set();

    Object.values(projectsByCategory).forEach(categoryProjects => {
      categoryProjects.forEach(project => {
        totalProjects++;
        if (project.status === 'completed') completedProjects++;
        if (project.status === 'in-progress') inProgressProjects++;
        clients.add(project.client);
      });
    });

    return {
      totalProjects,
      completedProjects,
      inProgressProjects,
      totalClients: clients.size
    };
  };

  const stats = calculateStatistics();

  // Get sorted category IDs by project count
  const getSortedCategoryIds = () => {
    return Object.keys(projectsByCategory).sort((a, b) => {
      return projectsByCategory[b].length - projectsByCategory[a].length;
    });
  };

  // Header animation based on scroll
  const headerClass = isScrolled ? 'tap-header-enhanced scrolled' : 'tap-header-enhanced';

  return (
    <>
      {/* Progress Scroll Indicator */}
      <div className="tap-scroll-progress">
        <div 
          className="tap-scroll-progress-bar" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Loading overlay */}
      {!isPageLoaded && (
        <div className="tap-loader-overlay">
          <div className="tap-loader-spinner"></div>
          <div className="tap-loader-text">Loading Portfolio...</div>
        </div>
      )}
      <TopNavBar/>
      <Navbar/>
      
      {/* Main Container */}
      <div 
        className="tap-container-enhanced" 
        ref={mainContainerRef}
        style={{ 
          opacity: isPageLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      >
        {/* Enhanced Header Section with Scroll Animation */}
        <section className={headerClass}>
          <div className="tap-header-content">
            <h1 className="tap-main-title-enhanced">
              Tech Group Projects Portfolio
            </h1>
            <p className="tap-subtitle-enhanced">
              Explore our extensive portfolio organized by category. Each section showcases our expertise in different domains.
            </p>
          </div>
          
          {/* Scroll Indicator */}
          <div className="tap-scroll-indicator">
            <span>Scroll to explore</span>
            <div className="tap-scroll-arrow">↓</div>
          </div>
        </section>

        {/* Search and Filter Controls */}
        <section className="tap-controls-section-enhanced tap-section-dark">
          <div className="tap-controls-content">
            <div className="tap-search-container-enhanced">
              <input
                type="text"
                className="tap-search-input-enhanced"
                placeholder="Search projects by name, technology, or client..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button 
                className="tap-clear-btn-enhanced"
                onClick={handleClearFilters}
              >
                <span className="tap-btn-icon">✕</span>
                Clear Filters
              </button>
            </div>

            <div className="tap-category-filters-enhanced">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`tap-category-btn-enhanced ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => handleCategorySelect(category.id)}
                >
                  {category.name}
                  {selectedCategory === category.id && (
                    <span className="tap-category-indicator"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Category Sections */}
        {getSortedCategoryIds().map((categoryId, index) => {
          const visibleProjects = getVisibleProjects(categoryId);
          const allProjects = getCategoryProjects(categoryId);
          
          if (allProjects.length === 0) return null;

          const categoryName = categories.find(c => c.id === categoryId)?.name || categoryId;
          const bgClass = getSectionBgClass(index);

          return (
            <section 
              key={categoryId} 
              id={`category-${categoryId}`}
              className={`tap-category-section-enhanced ${bgClass}`}
            >
              <div className="tap-category-content">
                <div className="tap-category-header-enhanced">
                  <div className="tap-category-title-container">
                    <h2 className="tap-category-title-enhanced">
                      {categoryName}
                    </h2>
                    <span className="tap-category-count-enhanced">
                      {allProjects.length} Projects
                    </span>
                  </div>
                  
                  <div className="tap-header-actions">
                    {allProjects.length > 4 && (
                      <button 
                        className="tap-expand-btn"
                        onClick={() => toggleCategoryExpansion(categoryId)}
                      >
                        <span className="tap-expand-text">
                          {expandedCategories[categoryId] ? 'Show Less' : `Show All (${allProjects.length})`}
                        </span>
                        <span className={`tap-expand-icon ${expandedCategories[categoryId] ? 'expanded' : ''}`}>
                          ▼
                        </span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="tap-horizontal-scroll-container">
                  <button 
                    className={`tap-scroll-btn tap-scroll-left ${visibleProjects.length <= 4 ? 'tap-btn-hidden' : ''}`}
                    onClick={() => handleScroll(categoryId, 'left')}
                    aria-label="Scroll left"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 18l-6-6 6-6"/>
                    </svg>
                  </button>

                  <div 
                    className="tap-projects-horizontal-scroll"
                    ref={scrollRefs[categoryId]}
                  >
                    {visibleProjects.map((project, idx) => (
                      <div 
                        key={project.id} 
                        className="tap-project-card-horizontal"
                        data-aos="fade-up"
                        data-aos-delay={idx * 100}
                      >
                        <div className="tap-card-image-container-horizontal">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="tap-card-image-horizontal"
                            loading="lazy"
                            onLoad={(e) => {
                              e.target.classList.add('loaded');
                            }}
                            onError={(e) => {
                              e.target.src = "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                            }}
                          />
                          <div className="tap-year-badge-horizontal">{project.year}</div>
                        </div>
                        <div className="tap-card-content-horizontal">
                          <div className="tap-card-header-horizontal">
                            <h3 className="tap-project-title-horizontal">{project.title}</h3>
                          </div>
                          
                          <p className="tap-project-description-horizontal">
                            {project.description}
                          </p>

                          <div className="tap-technologies-horizontal">
                            {project.technologies.slice(0, 3).map((tech, techIdx) => (
                              <span key={techIdx} className="tap-tech-tag-horizontal">
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 3 && (
                              <span className="tap-tech-tag-horizontal tap-tech-more-horizontal">
                                +{project.technologies.length - 3}
                              </span>
                            )}
                          </div>

                          <div className="tap-project-details-horizontal">
                            <div className="tap-client-info-horizontal">
                              <span className="tap-client-label-horizontal">Client:</span>
                              <strong>{project.client}</strong>
                            </div>
                            <span className={`tap-status-badge-horizontal ${project.status}`}>
                              {project.status.replace('-', ' ').toUpperCase()}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button 
                    className={`tap-scroll-btn tap-scroll-right ${visibleProjects.length <= 4 ? 'tap-btn-hidden' : ''}`}
                    onClick={() => handleScroll(categoryId, 'right')}
                    aria-label="Scroll right"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                  </button>
                </div>
              </div>
            </section>
          );
        })}

        {/* No Results Message */}
        {Object.values(projectsByCategory).every(
          (categoryProjects, index) => getCategoryProjects(Object.keys(projectsByCategory)[index]).length === 0
        ) && (
          <div className="tap-no-results-enhanced">
            <div className="tap-no-results-content">
              <h3>No projects found</h3>
              <p>Try adjusting your search criteria or select a different category</p>
              <button 
                className="tap-clear-btn-enhanced"
                onClick={handleClearFilters}
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}

        {/* Statistics Section */}
        <section className="tap-stats-section-enhanced tap-section-dark">
          <div className="tap-stats-content">
            <h2 className="tap-stats-title-enhanced">
              Our Project Statistics
            </h2>
            <div className="tap-stats-grid-enhanced">
              <div className="tap-stat-card-floating" data-aos="zoom-in">
                <div className="tap-stat-icon-floating">
                   <div className="card-icon"> <FontAwesomeIcon 
                    icon={faChartSimple} 
                    style={{color: "#dc0909", fontSize: "2rem"}} 
                  /></div>
                </div>
                <div className="tap-stat-value-floating">{stats.totalProjects}+</div>
                <div className="tap-stat-label-floating">Total Projects</div>
              </div>
              <div className="tap-stat-card-floating" data-aos="zoom-in" data-aos-delay="100">
                <div className="tap-stat-icon-floating">
                    <div className="card-icon"> <FontAwesomeIcon 
                    icon={faCheck} 
                    style={{color: "#dc0909", fontSize: "2rem"}} 
                  /></div>
                </div>
                <div className="tap-stat-value-floating">{stats.completedProjects}+</div>
                <div className="tap-stat-label-floating">Completed</div>
              </div>
              <div className="tap-stat-card-floating" data-aos="zoom-in" data-aos-delay="200">
                <div className="tap-stat-icon-floating">
                    <div className="card-icon"> <FontAwesomeIcon 
                    icon={faPercentage} 
                    style={{color: "#dc0909", fontSize: "2rem"}} 
                  /></div>
                </div>
                <div className="tap-stat-value-floating">100%</div>
                <div className="tap-stat-label-floating">Satisfaction</div>
              </div>
              <div className="tap-stat-card-floating" data-aos="zoom-in" data-aos-delay="300">
                <div className="tap-stat-icon-floating">
                    <div className="card-icon"> <FontAwesomeIcon 
                    icon={faUsers} 
                    style={{color: "#dc0909", fontSize: "2rem"}} 
                  /></div>
                </div>
                <div className="tap-stat-value-floating">{stats.totalClients}+</div>
                <div className="tap-stat-label-floating">Happy Clients</div>
              </div>
            </div>
            
            {/* Status Summary */}
            <div className="tap-status-summary">
              <p className="tap-summary-text">
                <span className="tap-summary-highlight">{stats.completedProjects} projects completed</span> • 
                <span className="tap-summary-highlight"> {stats.inProgressProjects} project in progress</span> • 
                <span className="tap-summary-highlight"> {stats.totalClients} happy clients</span>
              </p>
            </div>
          </div>
        </section>
        <TSPFF/>
        <BackToTop/>
      </div>
    </>
  );
};

export default TechGroupProjects;
