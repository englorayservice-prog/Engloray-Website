import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './RayMartNavbar.css';

// Import your logo - replace with your actual logo path
import logo from '../../assets/logo 01.png'; // Update this path to your actual logo

const RaymartNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Navigation items
    const navItems = [
        { name: 'Home', path: '/raymartPage', id: 'home' },
        { name: 'Services', path: '/raymartPageTwo', id: 'services' },
        { name: 'Products', path: '/raymartPageThree', id: 'products' },
        { name: 'Contact', path: '/contactPage', id: 'contact' }
    ];

    // Update active link based on current path
    useEffect(() => {
        const currentPath = location.pathname;
        const activeItem = navItems.find(item => item.path === currentPath);
        if (activeItem) {
            setActiveLink(activeItem.name);
        }
    }, [location.pathname]);

    const handleNavClick = (itemName) => {
        setActiveLink(itemName);
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`raymart-navbar ${isScrolled ? 'raymart-navbar-scrolled' : ''}`}>
            <div className="raymart-navbar-container">
                {/* Logo */}
                <div className="raymart-navbar-logo">
                    <Link to="/" onClick={() => handleNavClick('Home')}>
                        <img src={logo} alt="Raymart Logo" />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="raymart-navbar-menu">
                    {navItems.map((item) => (
                        <li key={item.name} className="raymart-navbar-item">
                            <Link
                                to={item.path}
                                className={`raymart-navbar-link ${activeLink === item.name ? 'raymart-navbar-link-active' : ''}`}
                                onClick={() => handleNavClick(item.name)}
                            >
                                <span className="raymart-navbar-link-text">{item.name}</span>
                                <span className="raymart-navbar-link-underline"></span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className={`raymart-navbar-hamburger ${isMobileMenuOpen ? 'raymart-hamburger-active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="raymart-hamburger-line"></span>
                    <span className="raymart-hamburger-line"></span>
                    <span className="raymart-hamburger-line"></span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`raymart-mobile-overlay ${isMobileMenuOpen ? 'raymart-mobile-overlay-active' : ''}`}>
                <div className="raymart-mobile-menu">
                    <button
                        className="raymart-mobile-close"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        ✕
                    </button>
                    <ul className="raymart-mobile-menu-list">
                        {navItems.map((item) => (
                            <li key={item.name} className="raymart-mobile-menu-item">
                                <Link
                                    to={item.path}
                                    className={`raymart-mobile-menu-link ${activeLink === item.name ? 'raymart-mobile-link-active' : ''}`}
                                    onClick={() => handleNavClick(item.name)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default RaymartNavbar;