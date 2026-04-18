import React, { useState, useEffect, useRef } from 'react';
import logo from '../../../assets/3.png';
import SearchBar from '../../../Components/SearchBar/SearchBar';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faBook,
  faGraduationCap,
  faCommentDots,
  faPhone,
  faChevronDown,
  faChevronUp
} from '@fortawesome/free-solid-svg-icons';
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

  // Updated navItems with proper navigation logic and icons
  const navItems = [
    { name: 'Home', href: '#home', id: 'home', icon: faHome },
    { name: 'Courses', href: '#courses', id: 'courses', icon: faBook },
    { name: 'Programs', href: '#programs', id: 'programs', icon: faGraduationCap },
    { name: 'Feedback', href: '#feedback', id: 'feedback', icon: faCommentDots },
    { name: 'Contact', href: '#contact', id: 'contact', icon: faPhone }
  ];

  // Updated explore sections
  const exploreSections = [
    { name: 'Graphic Design', href: '/graphicsDesignCoursePage' },
    { name: 'Ui/Ux Course', href: '/uiuxDesignCoursePage' },
    { name: 'Mentor Learning', href: '/mentorshipLearningPage' },
    { name: 'Project Learning', href: '/projectBasedLearningPage' },
    { name: 'Careers', href: '/CareersPage' },
    { name: 'Workshops', href: '/workshopsPage' },
    { name: 'Corporatetraining', href: '/corporateTraining' }
  ];

  // Function to scroll to section with retry logic
  const scrollToSection = (sectionId, retryCount = 0) => {
    const element = document.getElementById(sectionId);

    if (element) {
      const navbarHeight = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      const item = navItems.find(item => item.id === sectionId);
      if (item) {
        setActiveLink(item.name);
      }
      return true;
    } else if (retryCount < 3) {
      setTimeout(() => {
        scrollToSection(sectionId, retryCount + 1);
      }, 300);
      return false;
    }
    return false;
  };

  // Function to handle navigation
  const handleNavigation = (itemName, itemId) => {
    setIsMobileMenuOpen(false);
    setIsExploreOpen(false);

    if (!isHomePage && !isLearningHomePage) {
      window.location.href = `/tech-learning#${itemId}`;
    } else {
      scrollToSection(itemId);
    }
  };

  // Function to handle explore section navigation
  const handleExploreNavigation = (href, name) => {
    setActiveLink(name);
    setIsMobileMenuOpen(false);
    setIsExploreOpen(false);
    window.location.href = href;
  };

  // Function to handle logo click
  const handleLogoClick = () => {
    if (!isHomePage && !isLearningHomePage) {
      window.location.href = '/tech-learning';
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setActiveLink('Home');
    }
  };

  // Handle hash in URL when page loads
  useEffect(() => {
    const handleHashChange = () => {
      if (isLearningHomePage || isHomePage) {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
          setTimeout(() => {
            scrollToSection(hash);
          }, 500);
        }
      }
    };

    handleHashChange();
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
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="NavigationBar" />
          <meta property="og:description" content="Displays key links allowing users to navigate through website pages easily." />
        </Helmet>
      </div>

      {/* Initial Position (Below Top Navbar) */}
      <nav className={`learning-main-nav learning-nav-initial ${isScrolled ? 'learning-nav-hidden' : ''}`}>
        <div className="learning-nav-container">
          <div className="learning-nav-logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            <div className="learning-logo-wrapper">
              <img src={logo} alt="ENGLORAY" className="learning-logo-initial" />
            </div>
          </div>

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
                <FontAwesomeIcon icon={item.icon} className="learning-nav-icon" />
                <span className="learning-link-text">{item.name}</span>
              </a>
            ))}

            <div className="learning-explore-container" ref={exploreRef}>
              <button className="learning-explore-btn" aria-label="Explore sections">
                <span className="learning-explore-text">Explore</span>
                <FontAwesomeIcon icon={faChevronDown} className="learning-explore-icon" />
              </button>

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

          <div className="learning-nav-search">
            <SearchBar />
          </div>
        </div>
      </nav>

      {/* Fixed Position (Appears on Scroll) */}
      <nav className={`learning-main-nav learning-nav-fixed ${isScrolled ? 'learning-nav-visible' : ''}`}>
        <div className="learning-nav-container">
          <div className="learning-nav-logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            <img src={logo} alt="ENGLORAY" className="learning-logo-fixed" />
          </div>

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
                <FontAwesomeIcon icon={item.icon} className="learning-nav-icon" />
                <span className="learning-link-text">{item.name}</span>
                <div className="learning-link-underline"></div>
              </a>
            ))}

            <div className="learning-explore-container" ref={exploreRef}>
              <button className="learning-explore-btn" aria-label="Explore sections">
                <span className="learning-explore-text">Explore</span>
                <FontAwesomeIcon icon={faChevronDown} className="learning-explore-icon" />
              </button>

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

          <div className="learning-nav-search">
            <SearchBar />
          </div>

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
            <button className="learning-mobile-close" onClick={() => setIsMobileMenuOpen(false)}>
              ✕
            </button>
          </div>

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
                <FontAwesomeIcon icon={item.icon} className="learning-mobile-icon" />
                <span className="learning-mobile-text">{item.name}</span>
              </a>
            ))}

            <div className="learning-mobile-explore">
              <button className="learning-mobile-explore-btn" onClick={() => setIsExploreOpen(!isExploreOpen)}>
                <span>Explore Sections</span>
                <FontAwesomeIcon icon={isExploreOpen ? faChevronUp : faChevronDown} className="learning-mobile-explore-icon" />
              </button>

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