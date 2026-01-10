
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from '../../assets/18.png'
import SearchBar from '../SearchBar/SearchBar';
import { Helmet } from 'react-helmet';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Scroll detection for navbar show/hide
    useEffect(() => {
        const controlNavbar = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                // Scrolling down and not at top - hide navbar
                setShowNavbar(false);
            } else {
                // Scrolling up - show navbar
                setShowNavbar(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', controlNavbar);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        document.body.classList.toggle('menu-open');
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        document.body.classList.remove('menu-open');
    };

    const handleBackdropClick = (e) => {
        if (e.target.classList.contains('mobile-backdrop')) {
            closeMobileMenu();
        }
    };

    // FIXED: Simple smooth scroll function
    const handleMenuClick = (sectionId) => {
        console.log(`Clicking on: ${sectionId}`); // Debug log
        
        // Close mobile menu first
        closeMobileMenu();
        
        // Small delay to ensure menu is closed
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                console.log(`Found element:`, element); // Debug log
                
                // Calculate position with offset for navbar
                const navbarHeight = 100; // Adjust based on your navbar height
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                
                // Smooth scroll
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            } else {
                console.log(`Element with id ${sectionId} not found`);
                // If element not found, scroll to top
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        }, 100);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isMobileMenuOpen) {
                closeMobileMenu();
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMobileMenuOpen]);

    return (
        <>
           <div>
              
            <Helmet>
                 <title>Engloray Tech</title>
                 <meta name="description" content="Guides visitors across website content using a clear, structured navigation layout." />
                 <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
                 {/* <link rel="canonical" href="https://yourapp.com" /> */}
                  <meta property="og:locale" content="en_US" />
                 <meta property="og:type" content="website" />
                 <meta property="og:title" content="Navbar" />
                 <meta property="og:description" content="Guides visitors across website content using a clear, structured navigation layout." />
                 {/* <meta property="og:url" content="https://yourapp.com" /> */}
            </Helmet>  

              <nav className={`navbar ${showNavbar ? 'navbar-visible' : 'navbar-hidden'}`}>
                <div className="navbar-content">
                    {/* Logo */}
                    <div className="logo">
                        <img src={Logo} alt="ENGLORAY" />
                    </div>

                    {/* Desktop Menu - Aligned to left */}
                    <ul className="desktop-menu">
                        <li>
                            <a
                                className='anchorLink'
                                onClick={() => handleMenuClick('home')}
                            >
                                <p>
                                    Home
                                </p>
                            </a>
                        </li>
                        <li>
                            <a
                                className='anchorLink'
                                onClick={() => handleMenuClick('serviceSection')}
                            >
                                <p>
                                    Service
                                </p>
                            </a>
                        </li>
                        <li>
                            <a
                                className='anchorLink'
                                onClick={() => handleMenuClick('portfolio')}
                            >
                                <p>
                                    Works
                                </p>
                            </a>
                        </li>
                        <li>
                            <a
                                className='anchorLink'
                                onClick={() => handleMenuClick('techGroup-testimonialsSection')}
                            >
                                <p>
                                    Client
                                </p>
                            </a>
                        </li>
                         <li>
                            <a
                                className='anchorLink'
                                onClick={() => handleMenuClick('internship')}
                            >
                                <p>
                                    Internship
                                </p>
                            </a>
                        </li>
                        <li>
                            <a
                                className='anchorLink'
                                onClick={() => handleMenuClick('benefits-cta-main-section')}
                            >
                                <p>
                                    Contact
                                </p>
                            </a>
                        </li>
                    </ul>

                    {/* Get Started Button - Aligned to right */}
                    <div className="nav-actions">
                        <SearchBar/>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="navMobOpen"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Backdrop */}
            <div
                className={`mobile-backdrop ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={handleBackdropClick}
            ></div>

            {/* Mobile Menu - FIXED: Added proper onClick handlers */}
            <ul className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <button className="navMobClose" onClick={closeMobileMenu}>
                    ×
                </button>

                <li>
                    <div
                        className='mobile-menu-link'
                        onClick={() => handleMenuClick('home')}
                    >
                        <p>Home</p>
                    </div>
                </li>
                <li>
                    <div
                        className='mobile-menu-link'
                        onClick={() => handleMenuClick('serviceSection')}
                    >
                        <p>Service</p>
                    </div>
                </li>
                <li>
                    <div
                        className='mobile-menu-link'
                        onClick={() => handleMenuClick('portfolio')}
                    >
                        <p>Works</p>
                    </div>
                </li>
                <li>
                    <div
                        className='mobile-menu-link'
                        onClick={() => handleMenuClick('techGroup-testimonialsSection')}
                    >
                        <p>Client</p>
                    </div>
                </li>
                <li>
                    <div
                        className='mobile-menu-link'
                        onClick={() => handleMenuClick('internship')}
                    >
                        <p>Internship</p>
                    </div>
                </li>
                <li>
                    <div
                        className='mobile-menu-link'
                        onClick={() => handleMenuClick('benefits-cta-main-section')}
                    >
                        <p>Contact</p>
                    </div>
                </li>
                <li className="mobile-search-container">
                    <SearchBar/>
                </li>
            </ul>
           </div>
        </>
    );
};

export default Navbar;