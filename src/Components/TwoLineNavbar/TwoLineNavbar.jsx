
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './TwoLineNavbar.css';
import Logo from '../../assets/logo 2.png';
import SearchBar from '../SearchBar/SearchBar';

const TwoLineNavbar = ({ excludeItems = [] }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [activeMobileMenu, setActiveMobileMenu] = useState(null);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const navigate = useNavigate();
    const location = useLocation();
    const navRef = useRef(null);

    // Define menu data with dropdowns only
    const allMenuData = [
        {
            id: 'home',
            title: 'Home',
            route: '/'
        },
        {
            id: 'services',
            title: 'Services',
            dropdown: {
                title: 'Explore Our Services',
                items: [
                    {
                        id: 'branding',
                        name: 'Branding & Design',
                        desc: 'Logo design, brand identity, and visual storytelling',
                        icon: '',
                        route: '/brandingPage'
                    },
                    {
                        id: 'web-dev',
                        name: 'Web & Development',
                        desc: 'Custom websites, e-commerce, and portfolios',
                        icon: '',
                        route: '/developmentPage'
                    },
                    {
                        id: 'digital-marketing',
                        name: 'Digital Marketing',
                        desc: 'SEO, Social Media, PPC, and Content Marketing',
                        icon: '',
                        route: '/marketingPage'
                    },
                    {
                        id: 'erp-crm',
                        name: 'UI / UX Designs',
                        desc: 'Enterprise resource planning and customer relationship management',
                        icon: '',
                        route: '/UiUxPage'
                    },
                    {
                        id: 'ai-solutions',
                        name: 'Mobile Applications',
                        desc: 'Machine Learning, Automation, and AI Integration',
                        icon: '',
                        route: '/mobileApplicationsPage'
                    }
                ]
            }
        },
        {
            id: 'works',
            title: 'Our Works',
            dropdown: {
                title: 'Our Portfolio',
                items: [
                    {
                        id: 'case-studies',
                        name: 'Case Studies',
                        desc: 'Detailed project breakdowns and success stories',
                        icon: '',
                        route: '/worksCaseStudiesPage'
                    },
                    {
                        id: 'client-projects',
                        name: 'Client Projects',
                        desc: 'Our successful collaborations with businesses',
                        icon: '',
                        route: '/worksClientProjectsPage'
                    }
                ]
            }
        },
        {
            id: 'about',
            title: 'About',
            dropdown: {
                title: 'About Us',
                items: [
                    {
                        id: 'our-story',
                        name: 'Our Story',
                        desc: 'Learn about our journey and mission',
                        icon: '',
                        route: '/ourStoryPage'
                    },
                    {
                        id: 'our-team',
                        name: 'Our Team',
                        desc: 'Meet our experts and professionals',
                        icon: '',
                        route: '/ourTeamPage'
                    }
                ]
            }
        },
        {
            id: 'education',
            title: 'Education',
            dropdown: {
                title: 'Learning Programs',
                items: [
                    {
                        id: 'courses',
                        name: 'Courses',
                        desc: 'Structured learning paths and certifications',
                        icon: '',
                        route: '/allCoursesPage'
                    },
                    {
                        id: 'workshops',
                        name: 'Workshops',
                        desc: 'Hands-on training and practical sessions',
                        icon: '',
                        route: '/workshopsPage'
                    }
                ]
            }
        }
    ];

    // Filter menuData based on excludeItems prop
    const menuData = allMenuData.filter(item => !excludeItems.includes(item.id));


    // Function to handle Home button click
    const handleHomeClick = () => {
        if (location.pathname === '/' || location.pathname === '/home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/');
        }
        closeMobileMenu();
    };

    // Function to handle desktop dropdown item click
    const handleDropdownItemClick = (item) => {
        if (item.route) {
            navigate(item.route);
            setActiveMenu(null);
            closeMobileMenu();
        }
    };

    // Function to handle menu item click
    const handleMenuItemClick = (menu, e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }

        if (menu.id === 'home') {
            handleHomeClick();
        } else if (menu.route && !menu.dropdown) {
            navigate(menu.route);
            closeMobileMenu();
        }
        // Items with dropdowns: handled by mouseenter/mouseleave
    };

    // Function to open WhatsApp
    const openWhatsApp = () => {
        const phoneNumber = '916381759909';
        const message = 'Hello! I would like to start a project with ENGLORAY.';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        closeMobileMenu();
    };

    // Function to navigate to footer contact section - FIXED
    const navigateToFooterContact = () => {
        closeMobileMenu();

        // If not on home page, navigate to home first
        if (location.pathname !== '/') {
            navigate('/');

            // Wait for navigation then scroll
            setTimeout(() => {
                scrollToFooter();
            }, 100);
        } else {
            // Already on home page, scroll immediately
            scrollToFooter();
        }
    };

    // Helper function to scroll to footer
    const scrollToFooter = () => {
        setTimeout(() => {
            // Try different possible IDs for footer
            const possibleIds = ['contextfooter', 'footer', 'contactFooter', 'contact'];
            let footerElement = null;

            for (const id of possibleIds) {
                const element = document.getElementById(id);
                if (element) {
                    footerElement = element;
                    break;
                }
            }

            if (footerElement) {
                // Scroll to footer smoothly
                footerElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                // If no footer found, scroll to bottom
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth'
                });
            }
        }, 50);
    };

    // Function to navigate to tech learning page
    const navigateToTechLearning = () => {
        navigate('/allCoursesPage');
        closeMobileMenu();
    };

    // Adjust dropdown positions dynamically
    const adjustDropdownPositions = () => {
        if (typeof window === 'undefined') return;

        const dropdowns = document.querySelectorAll('.tlnbn-mega-dropdown');
        const viewportWidth = window.innerWidth;

        dropdowns.forEach((dropdown) => {
            if (!dropdown.parentElement) return;

            const parentRect = dropdown.parentElement.getBoundingClientRect();
            const dropdownWidth = dropdown.offsetWidth;

            const navItem = dropdown.parentElement;
            const isFirst = navItem.classList.contains('tlnbn-first-item');
            const isLast = navItem.classList.contains('tlnbn-last-item');

            if (isFirst) {
                dropdown.style.left = '0';
                dropdown.style.right = 'auto';
                dropdown.style.transform = 'none';
            } else if (isLast) {
                dropdown.style.left = 'auto';
                dropdown.style.right = '0';
                dropdown.style.transform = 'none';
            } else {
                const centeredLeft = parentRect.left + (parentRect.width / 2) - (dropdownWidth / 2);
                const centeredRight = centeredLeft + dropdownWidth;

                if (centeredLeft < 10) {
                    dropdown.style.left = '10px';
                    dropdown.style.right = 'auto';
                    dropdown.style.transform = 'none';
                } else if (centeredRight > viewportWidth - 10) {
                    dropdown.style.left = 'auto';
                    dropdown.style.right = '10px';
                    dropdown.style.transform = 'none';
                } else {
                    dropdown.style.left = '50%';
                    dropdown.style.right = 'auto';
                    dropdown.style.transform = 'translateX(-50%)';
                }
            }
        });
    };

    useEffect(() => {
        const controlNavbar = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', controlNavbar);

        window.addEventListener('resize', adjustDropdownPositions);
        adjustDropdownPositions();

        return () => {
            window.removeEventListener('scroll', controlNavbar);
            window.removeEventListener('resize', adjustDropdownPositions);
        };
    }, [lastScrollY]);

    // Handle hash changes
    useEffect(() => {
        if (location.pathname === '/' && location.hash) {
            const timer = setTimeout(() => {
                const id = location.hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    const navbarHeight = navRef.current ? navRef.current.offsetHeight : 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [location]);

    useEffect(() => {
        if (activeMenu) {
            setTimeout(adjustDropdownPositions, 10);
        }
    }, [activeMenu]);

    const toggleMobileMenu = () => {
        const newState = !isMobileMenuOpen;
        setIsMobileMenuOpen(newState);

        if (newState) {
            document.body.classList.add('tlnbn-menu-open');
        } else {
            document.body.classList.remove('tlnbn-menu-open');
            setActiveMobileMenu(null);
        }
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setActiveMenu(null);
        setActiveMobileMenu(null);
        document.body.classList.remove('tlnbn-menu-open');
    };

    const handleMenuHover = (menuId) => {
        setActiveMenu(menuId);
    };

    const handleMenuLeave = () => {
        setActiveMenu(null);
    };

    const toggleMobileDropdown = (menuId) => {
        setActiveMobileMenu(activeMobileMenu === menuId ? null : menuId);
    };

    // Handle mobile menu item click
    const handleMobileMenuItemClick = (menu) => {
        if (menu.id === 'home') {
            handleHomeClick();
        } else if (menu.route && !menu.dropdown) {
            navigate(menu.route);
            closeMobileMenu();
        } else if (menu.dropdown) {
            toggleMobileDropdown(menu.id);
        }
    };

    // Handle mobile dropdown item click
    const handleMobileDropdownItemClick = (item) => {
        if (item.route) {
            navigate(item.route);
            closeMobileMenu();
        }
    };

    return (
        <>
            <div>
                <Helmet>
                    <title>Engloray</title>
                    <meta name="description" content="Organizes navigation into two rows for cleaner, more structured browsing." />
                    <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
                    {/* <link rel="canonical" href="https://yourapp.com" /> */}
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="TwoLineNavbar" />
                    <meta property="og:description" content="Organizes navigation into two rows for cleaner, more structured browsing." />
                    {/* <meta property="og:url" content="https://yourapp.com" /> */}
                </Helmet>
                <div
                    className={`tlnbn-navbar-main-container ${showNavbar ? 'tlnbn-navbar-visible' : 'tlnbn-navbar-hidden'}`}
                    ref={navRef}
                >
                    {/* First Line */}
                    <nav className="tlnbn-navbar-first-line">
                        <div className="tlnbn-nav-first-content">
                            {/* Logo - Center */}
                            <div className="tlnbn-logo" onClick={handleHomeClick}>
                                <img src={Logo} alt="ENGLORAY" />
                            </div>

                            {/* Action Buttons - Center (near logo) */}
                            <div className="tlnbn-action-buttons">
                                <button
                                    className="tlnbn-btn tlnbn-start-project"
                                    onClick={openWhatsApp}
                                >
                                    Start a Project
                                </button>
                                <button
                                    className="tlnbn-btn tlnbn-get-started"
                                    onClick={navigateToFooterContact}
                                >
                                    Get Started
                                </button>
                                <button
                                    className="tlnbn-btn tlnbn-join-now"
                                    onClick={navigateToTechLearning}
                                >
                                    Join Now
                                </button>
                            </div>

                            {/* Subscribe Button - Right */}


                            {/* Mobile Toggle */}
                            <button
                                className="tlnbn-mobile-toggle"
                                onClick={toggleMobileMenu}
                                aria-label="Toggle menu"
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </nav>

                    {/* Second Line - Desktop Only */}
                    <nav className="tlnbn-navbar-second-line tlnbn-desktop-only">
                        <div className="tlnbn-nav-second-content">
                            <div className="tlnbn-search-container-wrapper">
                                <SearchBar />
                            </div>

                            {/* Desktop Navigation Menu */}
                            <ul className="tlnbn-desktop-menu">
                                {menuData.map((menu, index) => (
                                    <li
                                        key={menu.id}
                                        className={`tlnbn-nav-item ${activeMenu === menu.id ? 'tlnbn-active' : ''} ${index === 0 ? 'tlnbn-first-item' : index === menuData.length - 1 ? 'tlnbn-last-item' : ''
                                            }`}
                                        onMouseEnter={() => handleMenuHover(menu.id)}
                                        onMouseLeave={handleMenuLeave}
                                    >
                                        <div
                                            className="tlnbn-nav-link"
                                            onClick={(e) => handleMenuItemClick(menu, e)}
                                            role="button"
                                            tabIndex={0}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter' || e.key === ' ') {
                                                    e.preventDefault();
                                                    handleMenuItemClick(menu, e);
                                                }
                                            }}
                                        >
                                            {menu.title}
                                            {menu.dropdown && <span className="tlnbn-arrow">⌄</span>}
                                        </div>

                                        {menu.dropdown && (
                                            <div className={`tlnbn-mega-dropdown ${activeMenu === menu.id ? 'tlnbn-visible' : ''}`}>
                                                <div className="tlnbn-dropdown-content">
                                                    <h3>{menu.dropdown.title}</h3>
                                                    <div className="tlnbn-dropdown-grid">
                                                        {menu.dropdown.items.map((item, index) => (
                                                            <div
                                                                key={item.id || index}
                                                                className="tlnbn-dropdown-item"
                                                                onClick={() => handleDropdownItemClick(item)}
                                                                role="button"
                                                                tabIndex={0}
                                                                onKeyDown={(e) => {
                                                                    if (e.key === 'Enter' || e.key === ' ') {
                                                                        handleDropdownItemClick(item);
                                                                    }
                                                                }}
                                                            >
                                                                <div className="tlnbn-item-icon">{item.icon}</div>
                                                                <div className="tlnbn-item-text">
                                                                    <div className="tlnbn-item-title">{item.name}</div>
                                                                    <div className="tlnbn-item-desc">{item.desc}</div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </li>
                                ))}
                                <div className="tlnbn-nav-subscribe-container">
                                    <button
                                        className="tlnbn-subscribe-btn"
                                        onClick={navigateToFooterContact}
                                    >
                                        Contact
                                    </button>
                                </div>
                            </ul>
                        </div>
                    </nav>
                </div>

                {/* Mobile Menu WITH SEARCH BAR */}
                <div className={`tlnbn-mobile-menu-overlay ${isMobileMenuOpen ? 'tlnbn-active' : ''}`} onClick={closeMobileMenu}>
                    <div className="tlnbn-mobile-menu" onClick={(e) => e.stopPropagation()}>
                        {/* Mobile Menu Header - JUST CLOSE BUTTON */}
                        <div className="tlnbn-mobile-menu-header">
                            <button className="tlnbn-close-btn" onClick={closeMobileMenu} aria-label="Close menu">
                                ×
                            </button>
                        </div>

                        {/* Mobile Menu Content WITH SEARCH BAR AT THE TOP */}
                        <div className="tlnbn-mobile-menu-content">
                            {/* Search Bar at the top */}
                            <div className="tlnbn-mobile-search-wrapper" style={{
                                padding: '15px 20px',
                                background: '#f8fafc',
                                borderBottom: '1px solid #e2e8f0',
                                width: '100%',
                                display: 'block',
                                boxSizing: 'border-box'
                            }}>
                                <div style={{ width: '100%', display: 'block' }}>
                                    <SearchBar mobile={true} />
                                </div>
                            </div>

                            {/* Mobile Navigation Links */}
                            <div className="tlnbn-mobile-nav-items">
                                {menuData.map((menu) => (
                                    <div key={menu.id} className={`tlnbn-mobile-nav-item ${activeMobileMenu === menu.id ? 'tlnbn-active' : ''}`}>
                                        <div
                                            className="tlnbn-mobile-nav-link"
                                            onClick={() => handleMobileMenuItemClick(menu)}
                                            role="button"
                                            tabIndex={0}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter' || e.key === ' ') {
                                                    handleMobileMenuItemClick(menu);
                                                }
                                            }}
                                        >
                                            <span>{menu.title}</span>
                                            {menu.dropdown && (
                                                <span className="tlnbn-arrow">{activeMobileMenu === menu.id ? '⌃' : '⌄'}</span>
                                            )}
                                        </div>
                                        {menu.dropdown && (
                                            <div className={`tlnbn-mobile-dropdown ${activeMobileMenu === menu.id ? 'tlnbn-visible' : ''}`}>
                                                {menu.dropdown.items.map((item, index) => (
                                                    <div
                                                        key={item.id || index}
                                                        className="tlnbn-mobile-dropdown-item"
                                                        onClick={() => handleMobileDropdownItemClick(item)}
                                                        role="button"
                                                        tabIndex={0}
                                                        onKeyDown={(e) => {
                                                            if (e.key === 'Enter' || e.key === ' ') {
                                                                handleMobileDropdownItemClick(item);
                                                            }
                                                        }}
                                                    >
                                                        <span className="tlnbn-mobile-icon">{item.icon}</span>
                                                        <div className="tlnbn-mobile-item-text">
                                                            <div className="tlnbn-mobile-item-title">{item.name}</div>
                                                            <div className="tlnbn-mobile-item-desc">{item.desc}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Mobile Action Buttons */}
                            <div className="tlnbn-mobile-actions">
                                <button
                                    className="tlnbn-btn tlnbn-start-project"
                                    onClick={openWhatsApp}
                                >
                                    Start a Project
                                </button>
                                <button
                                    className="tlnbn-btn tlnbn-get-started"
                                    onClick={navigateToFooterContact}
                                >
                                    Get Started
                                </button>
                                <button
                                    className="tlnbn-btn tlnbn-join-now"
                                    onClick={navigateToTechLearning}
                                >
                                    Join Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TwoLineNavbar;