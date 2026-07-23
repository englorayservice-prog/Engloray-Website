import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faGraduationCap,
  faUserGraduate,
  faCommentDots,
  faPhone,
  faChevronDown,
  faChevronUp,
  faRocket
} from '@fortawesome/free-solid-svg-icons';
import logo from '../../../../../assets/3.png';
import '../../../../TechLearningSection/NavigationBar/NavigationBar.css';

export const Navbar = ({ onOpenApply }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const exploreRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', id: 'home', icon: faHome },
    { name: 'Programs', id: 'courses', icon: faGraduationCap },
    { name: 'Instructors', id: 'mentors', icon: faUserGraduate },
    { name: 'Reviews', id: 'testimonials', icon: faCommentDots },
    { name: 'Contact', id: 'cta', icon: faPhone },
  ];

  const exploreSections = [
    { name: 'Graphic Design', href: '/graphicsDesignCoursePage' },
    { name: 'Full Stack', href: '/javaFullStackCourseCoursePage' },
    { name: 'UI/UX Design', href: '/uiuxDesignCoursePage' },
    { name: 'Drawing', href: '/drawingCoursePage' },
    { name: 'Digital Marketing', href: '/digitalMarketingCoursePage' },
    { name: 'Mentor Learning', href: '/mentorshipLearningPage' },
    { name: 'Project Learning', href: '/projectBasedLearningPage' },
    { name: 'Careers', href: '/CareersPage' },
    { name: 'Workshops', href: '/workshopsPage' },
    { name: 'Corporate Training', href: '/corporateTraining' }
  ];

  const handleScrollTo = (id) => {
    setIsMobileMenuOpen(false);
    setIsExploreOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  const handleExploreNavigation = (href) => {
    setIsMobileMenuOpen(false);
    setIsExploreOpen(false);
    window.location.href = href;
  };

  return (
    <>
      <header
        className="learning-main-nav learning-nav-initial"
        style={{
          top: 'var(--topnav-height, 33px)',
          zIndex: 995,
          position: 'fixed',
          left: 0,
          right: 0,
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #e5e7eb',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
          fontFamily: "'Inter', sans-serif"
        }}
      >
        <div className="learning-nav-container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: '48px' }}>
          <div className="learning-nav-logo" onClick={() => handleScrollTo('home')} style={{ cursor: 'pointer', marginLeft: '-15px' }}>
            <img src={logo} alt="ENGLORAY" className="learning-logo-initial" style={{ height: '42px' }} />
          </div>

          <div className="learning-nav-menu" style={{ marginRight: 0, gap: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className={`learning-nav-link ${activeSection === item.id ? 'learning-nav-active' : ''}`}
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '0.4rem 0.6rem', fontSize: '0.85rem' }}
              >
                <FontAwesomeIcon icon={item.icon} className="learning-nav-icon" />
                <span className="learning-link-text">{item.name}</span>
              </button>
            ))}

            <div className="learning-explore-container" ref={exploreRef} style={{ marginLeft: '0.25rem' }}>
              <button className="learning-explore-btn" aria-label="Explore sections" style={{ padding: '0.4rem 0.85rem', fontSize: '0.85rem' }}>
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
                        handleExploreNavigation(section.href);
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

          <div style={{ display: 'flex', alignItems: 'center', marginLeft: '12px', flexShrink: 0 }}>
            <button
              onClick={onOpenApply}
              className="btn-purple hover:scale-105 active:scale-95 transition-all duration-200"
              style={{
                padding: '8px 20px',
                fontSize: '0.82rem',
                fontWeight: 600,
                borderRadius: '50px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 14px rgba(108, 76, 241, 0.25)',
              }}
            >
              <FontAwesomeIcon icon={faRocket} style={{ fontSize: '0.72rem' }} />
              Apply Now
            </button>
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
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`learning-mobile-overlay ${isMobileMenuOpen ? 'learning-overlay-active' : ''}`} style={{ top: 'var(--topnav-height, 33px)' }}>
        <div className="learning-mobile-content">
          <button className="learning-mobile-close" onClick={() => setIsMobileMenuOpen(false)}>
            ✕
          </button>

          <div className="learning-mobile-links" style={{ marginTop: '3rem' }}>
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className={`learning-mobile-link ${activeSection === item.id ? 'learning-mobile-active' : ''}`}
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', width: '100%' }}
              >
                <FontAwesomeIcon icon={item.icon} className="learning-mobile-icon" />
                <span className="learning-mobile-text">{item.name}</span>
              </button>
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
                        handleExploreNavigation(section.href);
                      }}
                    >
                      <span className="learning-mobile-explore-title">{section.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => { setIsMobileMenuOpen(false); onOpenApply(); }}
              className="btn-purple"
              style={{ width: '100%', padding: '13px 24px', marginTop: '16px', borderRadius: '50px' }}
            >
              <FontAwesomeIcon icon={faRocket} style={{ marginRight: '8px' }} />
              Apply Now — It's Free
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
