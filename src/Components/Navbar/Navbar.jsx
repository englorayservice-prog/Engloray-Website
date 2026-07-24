import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from '../../assets/18.png'
import SearchBar from '../SearchBar/SearchBar';
import { Helmet } from 'react-helmet-async';
import { Home, Briefcase, Layers, Users, GraduationCap, Phone } from 'lucide-react';

const menuItems = [
    { id: 'home', label: 'Home', icon: Home, section: 'home' },
    { id: 'service', label: 'Service', icon: Briefcase, section: 'serviceSection' },
    { id: 'works', label: 'Works', icon: Layers, section: 'portfolio' },
    { id: 'client', label: 'Client', icon: Users, section: 'techGroup-testimonialsSection' },
    { id: 'internship', label: 'Internship', icon: GraduationCap, section: 'internship' },
    { id: 'contact', label: 'Contact', icon: Phone, section: 'benefits-cta-main-section' },
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

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

    const handleMenuClick = (sectionId) => {
        closeMobileMenu();

        setTimeout(() => {
            const element = document.getElementById(sectionId);
            const navbarHeight = 100;

            if (element) {
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            } else {
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
            <div className="engloray-navbar">
                <Helmet>
                    <title>Engloray Tech</title>
                    <meta name="description" content="Guides visitors across website content using a clear, structured navigation layout." />
                    <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Navbar" />
                    <meta property="og:description" content="Guides visitors across website content using a clear, structured navigation layout." />
                </Helmet>

                <nav className={`navbar ${showNavbar ? 'navbar-visible' : 'navbar-hidden'}`}>
                    <div className="navbar-content">

                        <div className="logo">
                            <img src={Logo} alt="ENGLORAY" />
                        </div>

                        <ul className="desktop-menu">
                            {menuItems.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <a
                                            className="anchorLink"
                                            onClick={() => handleMenuClick(item.section)}
                                        >
                                            <p>{item.label}</p>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="nav-actions">
                            <SearchBar />
                        </div>

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

                <div
                    className={`mobile-backdrop ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={handleBackdropClick}
                ></div>

                <ul className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <button className="navMobClose" onClick={closeMobileMenu} aria-label="Close menu">
                        ×
                    </button>

                    {menuItems.map((item) => {
                        return (
                            <li key={item.id}>
                                <div
                                    className="mobile-menu-link"
                                    onClick={() => handleMenuClick(item.section)}
                                >
                                    <p>{item.label}</p>
                                </div>
                            </li>
                        );
                    })}

                    <li className="mobile-search-container">
                        <SearchBar />
                    </li>
                </ul>

            </div>
        </>
    );
};

export default Navbar;