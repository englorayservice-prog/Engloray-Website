
import React, { useState, useEffect, useRef } from 'react';
import logo from '../../../assets/3.png';
import SearchBar from '../../../Components/SearchBar/SearchBar';
import { Helmet } from 'react-helmet';
import './NavigationBar.css';

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const exploreRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if we're on a sub-page or the homepage
  const isHomePage = window.location.pathname === '/';
  const isLearningHomePage = window.location.pathname === '/tech-learning';

  // Updated navItems with proper navigation logic
  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Courses', href: '#courses', id: 'courses' },
    { name: 'Programs', href: '#programs', id: 'programs' },
    { name: 'Feedback', href: '#feedback', id: 'feedback' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  // Updated explore sections
  const exploreSections = [
    { name: 'Graphic Design', href: '/graphicsDesignCoursePage' },
    { name: 'Ui/Ux Course', href: '/uiuxDesignCoursePage' },
    { name: 'Mentor Learning', href: '/mentorshipLearningPage' },
    { name: 'Project Learning', href: '/projectBasedLearningPage' },
    { name: 'Careers', href: '/CareersPage' },
    { name: 'Workshops', href: '/workshopsPage' }
  ];

  // Function to scroll to section with retry logic
  const scrollToSection = (sectionId, retryCount = 0) => {
    const element = document.getElementById(sectionId);
    
    if (element) {
      const navbarHeight = 120; // Adjust based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update active link
      const item = navItems.find(item => item.id === sectionId);
      if (item) {
        setActiveLink(item.name);
      }
      return true;
    } else if (retryCount < 3) {
      // Retry after a delay if element not found
      setTimeout(() => {
        scrollToSection(sectionId, retryCount + 1);
      }, 300);
      return false;
    }
    return false;
  };

  // Function to handle navigation
  const handleNavigation = (itemName, itemId) => {
    // Close menus
    setIsMobileMenuOpen(false);
    setIsExploreOpen(false);
    
    // Check if we're on a sub-page
    if (!isHomePage && !isLearningHomePage) {
      // If on sub-page, navigate to homepage first with hash
      window.location.href = `/tech-learning#${itemId}`;
    } else {
      // If already on homepage, scroll to section
      // preventDefault();
      scrollToSection(itemId);
    }
  };

  // Function to handle explore section navigation
  const handleExploreNavigation = (href, name) => {
    setActiveLink(name);
    setIsMobileMenuOpen(false);
    setIsExploreOpen(false);
    // Navigate to the explore page
    window.location.href = href;
  };

  // Function to handle logo click
  const handleLogoClick = () => {
    if (!isHomePage && !isLearningHomePage) {
      // If on sub-page, navigate to learning homepage
      window.location.href = '/tech-learning';
    } else {
      // If already on homepage, scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setActiveLink('Home');
    }
  };

  const toggleExplore = () => {
    setIsExploreOpen(!isExploreOpen);
  };

  // Handle hash in URL when page loads
  useEffect(() => {
    const handleHashChange = () => {
      if (isLearningHomePage || isHomePage) {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
          // Small delay to ensure page is fully loaded
          setTimeout(() => {
            scrollToSection(hash);
          }, 500);
        }
      }
    };

    // Check on initial load
    handleHashChange();

    // Also check when hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [isLearningHomePage, isHomePage]);

  return (
    <>
      <div>
        <Helmet>
            <title>Engloray Learning</title>
            <meta name="description" content="Displays key links allowing users to navigate through website pages easily" />
            <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
            {/* <link rel="canonical" href="https://yourapp.com" /> */}
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="NavigationBar" />
            <meta property="og:description" content="Displays key links allowing users to navigate through website pages easily." />
            {/* <meta property="og:url" content="https://yourapp.com" /> */}
         </Helmet>
      </div>

      {/* Initial Position (Below Top Navbar) */}
      <nav className={`learning-main-nav learning-nav-initial ${isScrolled ? 'learning-nav-hidden' : ''}`}>
        <div className="learning-nav-container">
          {/* Logo - More left padding */}
          <div className="learning-nav-logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            <div className="learning-logo-wrapper">
              <img src={logo} alt="ENGLORAY" className="learning-logo-initial" />
            </div>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="learning-nav-menu">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={isHomePage || isLearningHomePage ? item.href : `/tech-learning${item.href}`}
                className={`learning-nav-link ${activeLink === item.name ? 'learning-nav-active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.name, item.id);
                }}
              >
                <span className="learning-link-text">{item.name}</span>
              </a>
            ))}
            
            {/* Explore Dropdown Button - HOVER ONLY */}
            <div className="learning-explore-container" ref={exploreRef}>
              <button 
                className="learning-explore-btn"
                aria-label="Explore sections"
              >
                <span className="learning-explore-text">Explore</span>
                <span className="learning-explore-icon">▾</span>
              </button>
              
              {/* Explore Dropdown Menu - Shows on hover */}
              <div className="learning-explore-dropdown">
                <div className="learning-explore-grid">
                  {exploreSections.map((section) => (
                    <a
                      key={section.name}
                      href={section.href}
                      className="learning-explore-item"
                      onClick={(e) => {
                        e.preventDefault();
                        handleExploreNavigation(section.href, section.name);
                      }}
                    >
                      <span className="learning-explore-item-title">{section.name}</span>
                      <span className="learning-explore-item-arrow">→</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Search Bar - Moved further Right with more margin */}
          <div className="learning-nav-search">
            <SearchBar />
          </div>
        </div>
      </nav>

      {/* Fixed Position (Appears on Scroll) */}
      <nav className={`learning-main-nav learning-nav-fixed ${isScrolled ? 'learning-nav-visible' : ''}`}>
        <div className="learning-nav-container">
          {/* Logo - More left padding */}
          <div className="learning-nav-logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            <img src={logo} alt="ENGLORAY" className="learning-logo-fixed" />
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="learning-nav-menu">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={isHomePage || isLearningHomePage ? item.href : `/tech-learning${item.href}`}
                className={`learning-nav-link ${activeLink === item.name ? 'learning-nav-active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.name, item.id);
                }}
              >
                <span className="learning-link-text">{item.name}</span>
                <div className="learning-link-underline"></div>
              </a>
            ))}
            
            {/* Explore Dropdown Button - HOVER ONLY */}
            <div className="learning-explore-container" ref={exploreRef}>
              <button 
                className="learning-explore-btn"
                aria-label="Explore sections"
              >
                <span className="learning-explore-text">Explore</span>
                <span className="learning-explore-icon">▾</span>
              </button>
              
              {/* Explore Dropdown Menu - Shows on hover */}
              <div className="learning-explore-dropdown">
                <div className="learning-explore-grid">
                  {exploreSections.map((section) => (
                    <a
                      key={section.name}
                      href={section.href}
                      className="learning-explore-item"
                      onClick={(e) => {
                        e.preventDefault();
                        handleExploreNavigation(section.href, section.name);
                      }}
                    >
                      <span className="learning-explore-item-title">{section.name}</span>
                      <span className="learning-explore-item-arrow">→</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Search Bar - Moved further Right with more margin */}
          <div className="learning-nav-search">
            <SearchBar />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`learning-nav-hamburger ${isMobileMenuOpen ? 'learning-hamburger-active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="learning-hamburger-box">
              <span className="learning-hamburger-line"></span>
              <span className="learning-hamburger-line"></span>
              <span className="learning-hamburger-line"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`learning-mobile-overlay ${isMobileMenuOpen ? 'learning-overlay-active' : ''}`}>
        <div className="learning-mobile-content">
          <div className="learning-mobile-header">
            <button 
              className="learning-mobile-close"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ✕
            </button>
          </div>
          
          {/* Mobile Search Bar */}
          <div className="learning-mobile-search">
            <SearchBar />
          </div>
          
          <div className="learning-mobile-links">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={isHomePage || isLearningHomePage ? item.href : `/tech-learning${item.href}`}
                className={`learning-mobile-link ${activeLink === item.name ? 'learning-mobile-active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.name, item.id);
                }}
              >
                <span className="learning-mobile-text">{item.name}</span>
              </a>
            ))}
            
            {/* Mobile Explore Button */}
            <div className="learning-mobile-explore">
              <button 
                className="learning-mobile-explore-btn"
                onClick={() => {
                  setIsExploreOpen(!isExploreOpen);
                }}
              >
                <span>Explore Sections</span>
                <span className="learning-mobile-explore-icon">{isExploreOpen ? '▴' : '▾'}</span>
              </button>
              
              {/* Mobile Explore Dropdown */}
              {isExploreOpen && (
                <div className="learning-mobile-explore-dropdown">
                  {exploreSections.map((section) => (
                    <a
                      key={section.name}
                      href={section.href}
                      className="learning-mobile-explore-item"
                      onClick={(e) => {
                        e.preventDefault();
                        handleExploreNavigation(section.href, section.name);
                      }}
                    >
                      <span className="learning-mobile-explore-title">{section.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;