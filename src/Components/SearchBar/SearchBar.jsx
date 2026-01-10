import React, { useState, useEffect, useRef, useCallback } from 'react';
import './SearchBar.css';
import { useNavigate, useLocation } from 'react-router-dom';

const SearchBar = ({ mobile = false }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [recentSearches, setRecentSearches] = useState([]);
    const searchRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    // Load recent searches from localStorage
    useEffect(() => {
        const savedSearches = localStorage.getItem('recentSearches');
        if (savedSearches) {
            setRecentSearches(JSON.parse(savedSearches));
        }
    }, []);

    // Check for section to scroll to on page load (when navigation happens)
    useEffect(() => {
        if (location.state && location.state.scrollToSection) {
            setTimeout(() => {
                scrollToSection(location.state.scrollToSection);
                // Clear the state to prevent re-scrolling on refresh
                navigate(location.pathname, { replace: true, state: {} });
            }, 500); // Wait for page to load
        }
    }, [location, navigate]);

    // Save recent searches to localStorage
    const saveToRecentSearches = useCallback((query) => {
        if (!query.trim()) return;
        
        const updatedSearches = [
            query.toLowerCase(),
            ...recentSearches.filter(s => s.toLowerCase() !== query.toLowerCase())
        ].slice(0, 5); // Keep only 5 most recent
        
        setRecentSearches(updatedSearches);
        localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
    }, [recentSearches]);

    // Comprehensive website content with proper page paths and section IDs
    const websiteContent = [
        // Home Page Sections
        { 
            id: 'home', 
            title: 'Home', 
            content: 'Welcome to ENGLORAY - Digital solutions and education.',
            keywords: ['home', 'welcome', 'engloray'],
            path: '/',
            type: 'page',
            section: 'home',
            page: 'home'
        },
        { 
            id: 'services-home', 
            title: 'Our Services', 
            content: 'Comprehensive digital services including web development, mobile apps, UI/UX design, and branding.',
            keywords: ['services', 'web development', 'mobile apps', 'design'],
            path: '/',
            type: 'section',
            section: 'serviceSection',
            page: 'home'
        },
        
        // Services Pages with specific sections
        { 
            id: 'branding-service', 
            title: 'Branding & Identity Design', 
            content: 'Create memorable brands that resonate with your audience.',
            keywords: ['branding', 'logo', 'identity', 'design', 'brand'],
            path: '/brandingIdentityPage',
            type: 'service',
            section: 'branding-main', // Specific section on the page
            page: 'branding'
        },
        { 
            id: 'uiux-service', 
            title: 'Website & UI/UX Design', 
            content: 'User-centered designs that provide seamless experiences.',
            keywords: ['ui/ux', 'website', 'design', 'user interface', 'user experience'],
            path: '/uiuxDesignPage',
            type: 'service',
            section: 'uiux-main', // Specific section on the page
            page: 'uiux'
        },
        { 
            id: 'software-service', 
            title: 'Software & App Development', 
            content: 'Build scalable and efficient software solutions.',
            keywords: ['software', 'app', 'development', 'mobile', 'web'],
            path: '/softwareDevelopmentPage',
            type: 'service',
            section: 'software-main', // Specific section on the page
            page: 'software'
        },
        { 
            id: 'erp-service', 
            title: 'ERP & CRM Solutions', 
            content: 'Streamline your business operations with integrated systems.',
            keywords: ['erp', 'crm', 'solutions', 'business', 'operations'],
            path: '/erpSolutionsPage',
            type: 'service',
            section: 'erp-main', // Specific section on the page
            page: 'erp'
        },
        { 
            id: 'marketing-service', 
            title: 'Digital Marketing', 
            content: 'Data-driven marketing strategies to boost your online presence.',
            keywords: ['digital marketing', 'seo', 'social media', 'marketing'],
            path: '/digitalMarketingServicePage',
            type: 'service',
            section: 'marketing-main', // Specific section on the page
            page: 'marketing'
        },
        
        // Course Pages with specific sections
        { 
            id: 'graphics-course', 
            title: 'Graphics Design Course', 
            content: 'Learn professional graphics design, logo creation, and brand identity development.',
            keywords: ['graphics course', 'design course', 'logo design'],
            path: '/graphicsDesignCoursePage',
            type: 'course',
            section: 'course-hero', // Main section of course page
            page: 'graphics-course'
        },
        { 
            id: 'uiux-course', 
            title: 'UI/UX Design Mastery', 
            content: 'Master User Interface and Experience design.',
            keywords: ['ui/ux course', 'figma', 'design system'],
            path: '/uiuxDesignCoursePage',
            type: 'course',
            section: 'course-hero',
            page: 'uiux-course'
        },
        { 
            id: 'fullstack-course', 
            title: 'Full Stack Development', 
            content: 'Complete web development course.',
            keywords: ['fullstack', 'development', 'java'],
            path: '/javaFullStackCourseCoursePage',
            type: 'course',
            section: 'course-hero',
            page: 'fullstack-course'
        },
        { 
            id: 'courses', 
            title: 'Courses Home Page', 
            content: 'Learn Courses for creative Contents.',
            keywords: ['learning', 'course', 'courses'],
            path: '/allCoursesPage',
            type: 'course',
            section: 'course-hero',
            page: 'all courses page'
        },
        { 
            id: 'marketing-course', 
            title: 'Digital Marketing Course', 
            content: 'Master digital marketing strategies.',
            keywords: ['marketing course', 'digital marketing', 'seo'],
            path: '/digitalMarketingServicePage',
            type: 'course',
            section: 'course-hero',
            page: 'marketing-course'
        },
        { 
            id: 'web-dev-course', 
            title: 'Website Development Course', 
            content: 'Professional website development training.',
            keywords: ['website course', 'web development'],
            path: '/websiteDeveloperInternPage',
            type: 'course',
            section: 'course-hero',
            page: 'webdev-course'
        },
        
        // Other Pages
        { 
            id: 'about', 
            title: 'About Us', 
            content: 'Learn about our company, mission, and values.',
            keywords: ['about', 'company', 'mission'],
            path: '/about',
            type: 'page',
            section: 'about-hero',
            page: 'about'
        },
        { 
            id: 'portfolio', 
            title: 'Portfolio', 
            content: 'View our completed projects.',
            keywords: ['portfolio', 'projects', 'work'],
            path: '/worksCaseStudiesPage',
            type: 'page',
            section: 'portfolio-hero',
            page: 'portfolio'
        },
        { 
            id: 'projects', 
            title: 'All Projects', 
            content: 'Explore our technology projects.',
            keywords: ['projects', 'tech', 'development'],
            path: '/allProjectsPage',
            type: 'page',
            section: 'projects-main',
            page: 'projects'
        },
        { 
            id: 'contact', 
            title: 'Contact Us', 
            content: 'Get in touch with our team.',
            keywords: ['contact', 'support', 'help'],
            path: '/',
            type: 'section',
            section: 'benefits-cta-main-section',
            page: 'home'
        },
        { 
            id: 'internship', 
            title: 'Internship', 
            content: 'Join our internship program.',
            keywords: ['internship', 'training', 'career'],
            path: '/allProgramsPage',
            type: 'section',
            section: 'internship',
            page: 'home'
        }
    ];

    // Fuzzy search function
    const performSearch = useCallback((query) => {
        if (!query.trim()) {
            setSearchResults([]);
            setShowResults(false);
            return;
        }

        setIsSearching(true);
        const lowercaseQuery = query.toLowerCase().trim();

        const results = websiteContent
            .map(item => {
                let score = 0;
                
                if (item.title.toLowerCase().includes(lowercaseQuery)) {
                    score += 100;
                }
                
                if (item.content.toLowerCase().includes(lowercaseQuery)) {
                    score += 50;
                }
                
                item.keywords.forEach(keyword => {
                    if (keyword.includes(lowercaseQuery)) {
                        score += 30;
                    }
                });
                
                const titleWords = item.title.toLowerCase().split(' ');
                titleWords.forEach(word => {
                    if (word.startsWith(lowercaseQuery)) {
                        score += 20;
                    } else if (word.includes(lowercaseQuery)) {
                        score += 10;
                    }
                });
                
                if (item.title.toLowerCase() === lowercaseQuery) {
                    score += 200;
                }
                
                return { ...item, score };
            })
            .filter(item => item.score > 0)
            .sort((a, b) => b.score - a.score)
            .slice(0, 10);

        if (results.length > 0) {
            saveToRecentSearches(query);
        }

        setSearchResults(results);
        setShowResults(true);
        setIsSearching(false);
    }, [saveToRecentSearches]);

    // Debounced search
    useEffect(() => {
        const timer = setTimeout(() => {
            performSearch(searchQuery);
        }, 300);

        return () => clearTimeout(timer);
    }, [searchQuery, performSearch]);

    // Handle search input change
    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        
        if (!query.trim()) {
            setShowResults(true);
        }
    };

    // Handle search result click - FIXED navigation with section
    const handleResultClick = (result) => {
        console.log('Navigating to:', result.path, 'Section:', result.section);
        
        // Check if we're already on the target page
        const isSamePage = location.pathname === result.path;
        
        if (!isSamePage) {
            // Navigate to new page with section info in state
            navigate(result.path, { 
                state: { 
                    scrollToSection: result.section,
                    fromSearch: true 
                } 
            });
        } else {
            // We're already on the page, just scroll to section
            scrollToSection(result.section);
        }
        
        // Close search and clear input
        setShowResults(false);
        setSearchQuery('');
        
        // Close mobile menu if on mobile
        if (mobile) {
            const navMobOpen = document.querySelector('.navMobOpen');
            if (navMobOpen) {
                navMobOpen.click();
            }
        }
    };

    // Enhanced scroll to section function
    const scrollToSection = (sectionId) => {
        if (!sectionId) return;
        
        console.log('Attempting to scroll to section:', sectionId);
        
        // Helper function to try different element selectors
        const trySelectors = (id) => {
            const selectors = [
                `#${id}`,
                `.${id}`,
                `[id*="${id}"]`,
                `[class*="${id}"]`,
                `section[id*="${id}"]`,
                `div[id*="${id}"]`
            ];
            
            for (const selector of selectors) {
                const element = document.querySelector(selector);
                if (element) {
                    console.log('Found element with selector:', selector);
                    return element;
                }
            }
            return null;
        };
        
        // Try the original sectionId first
        let element = trySelectors(sectionId);
        
        // If not found, try common variations
        if (!element) {
            const variations = [
                sectionId,
                sectionId.replace(/-/g, ''),
                sectionId.replace(/-main$/, ''),
                `main-${sectionId}`,
                `${sectionId}-section`,
                `section-${sectionId}`
            ];
            
            for (const variation of variations) {
                element = trySelectors(variation);
                if (element) break;
            }
        }
        
        if (element) {
            const headerOffset = 80; // Adjust based on your header height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            // Add a visual highlight to the section
            element.style.boxShadow = '0 0 0 4px rgba(66, 153, 225, 0.5)';
            element.style.transition = 'box-shadow 0.3s ease';
            
            setTimeout(() => {
                element.style.boxShadow = '';
            }, 1500);
        } else {
            console.warn('Section not found:', sectionId);
            // Fallback: scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // Handle recent search click
    const handleRecentSearchClick = (searchTerm) => {
        setSearchQuery(searchTerm);
        performSearch(searchTerm);
    };

    // Clear recent searches
    const clearRecentSearches = () => {
        setRecentSearches([]);
        localStorage.removeItem('recentSearches');
    };

    // Clear search
    const handleClearSearch = () => {
        setSearchQuery('');
        setSearchResults([]);
        setShowResults(false);
    };

    // Close search results when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowResults(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Keyboard shortcuts
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                const input = searchRef.current?.querySelector('.search-input');
                if (input) {
                    input.focus();
                }
            }
            
            if (e.key === 'Escape') {
                if (searchQuery) {
                    handleClearSearch();
                } else {
                    setShowResults(false);
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [searchQuery]);

    // Focus input when mobile menu opens
    useEffect(() => {
        if (mobile && searchRef.current) {
            const input = searchRef.current.querySelector('.search-input');
            if (input) {
                setTimeout(() => input.focus(), 100);
            }
        }
    }, [mobile]);

    return (
        <div 
            className={`search-container ${mobile ? 'mobile' : 'desktop'}`} 
            ref={searchRef}
        >
            <div className="search-input-wrapper">
                <input
                    type="text"
                    className="search-input"
                    placeholder={mobile ? "Search everything..." : "Search courses, services, pages..."}
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onFocus={() => setShowResults(true)}
                />
                
                {searchQuery && (
                    <button 
                        className="search-clear-btn"
                        onClick={handleClearSearch}
                        aria-label="Clear search"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2"/>
                            <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2"/>
                        </svg>
                    </button>
                )}
                
                <div className="search-icon">
                    {isSearching ? (
                        <div className="search-spinner"></div>
                    ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <circle cx="11" cy="11" r="8" strokeWidth="2"/>
                            <path d="m21 21-4.35-4.35" strokeWidth="2"/>
                        </svg>
                    )}
                </div>
            </div>

            {showResults && (
                <div className="search-results">
                    {!searchQuery.trim() && recentSearches.length > 0 && (
                        <div className="search-section">
                            <div className="section-header">
                                <span>Recent Searches</span>
                                <button 
                                    className="clear-recent-btn"
                                    onClick={clearRecentSearches}
                                    aria-label="Clear recent searches"
                                >
                                    Clear all
                                </button>
                            </div>
                            <div className="recent-searches">
                                {recentSearches.map((search, index) => (
                                    <button
                                        key={index}
                                        className="recent-search-item"
                                        onClick={() => handleRecentSearchClick(search)}
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <circle cx="11" cy="11" r="8" strokeWidth="1.5"/>
                                            <path d="m21 21-4.35-4.35" strokeWidth="1.5"/>
                                        </svg>
                                        <span>{search}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {searchQuery.trim() && (
                        <>
                            <div className="search-results-header">
                                <span>
                                    {isSearching ? 'Searching...' : 
                                     searchResults.length > 0 ? 
                                     `${searchResults.length} result${searchResults.length !== 1 ? 's' : ''} found` : 
                                     'No results found'}
                                </span>
                                {searchResults.length > 0 && (
                                    <span className="search-query">for "{searchQuery}"</span>
                                )}
                            </div>
                            
                            {searchResults.length > 0 ? (
                                <div className="results-list">
                                    {searchResults.map((result) => (
                                        <div
                                            key={result.id}
                                            className="search-result-item"
                                            onClick={() => handleResultClick(result)}
                                        >
                                            <div className="result-icon">
                                                {result.type === 'course' ? '📚' :
                                                 result.type === 'service' ? '🛠️' :
                                                 result.type === 'page' ? '📄' : '📍'}
                                            </div>
                                            <div className="result-content">
                                                <div className="result-title">
                                                    {result.title}
                                                    <span className="result-type">{result.type}</span>
                                                </div>
                                                <div className="result-desc">{result.content}</div>
                                                <div className="result-meta">
                                                    <span className="result-path">
                                                        {result.path === '/' ? 'Home Page' : result.path}
                                                    </span>
                                                    <span className="result-section">
                                                        {result.section.replace(/-/g, ' ')}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="no-results">
                                    <div className="no-results-icon">🔍</div>
                                    <div className="no-results-text">
                                        <div>No results found for "{searchQuery}"</div>
                                        <small>Try different keywords or check spelling</small>
                                    </div>
                                    {recentSearches.length > 0 && (
                                        <div className="suggestions">
                                            <p>Try one of your recent searches:</p>
                                            <div className="suggestion-tags">
                                                {recentSearches.slice(0, 3).map((search, idx) => (
                                                    <button
                                                        key={idx}
                                                        className="suggestion-tag"
                                                        onClick={() => handleRecentSearchClick(search)}
                                                    >
                                                        {search}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </>
                    )}

                    {!searchQuery.trim() && (
                        <div className="search-section">
                            <div className="section-header">
                                <span>Quick Links</span>
                            </div>
                            <div className="quick-links">
                                <button 
                                    className="quick-link"
                                    onClick={() => handleResultClick(websiteContent.find(c => c.id === 'graphics-course'))}
                                >
                                    <span>🎯</span>
                                    <span>All Courses</span>
                                </button>
                                <button 
                                    className="quick-link"
                                    onClick={() => handleResultClick(websiteContent.find(c => c.id === 'branding-service'))}
                                >
                                    <span>🛠️</span>
                                    <span>Our Services</span>
                                </button>
                                <button 
                                    className="quick-link"
                                    onClick={() => handleResultClick(websiteContent.find(c => c.id === 'contact'))}
                                >
                                    <span>📞</span>
                                    <span>Contact Us</span>
                                </button>
                                <button 
                                    className="quick-link"
                                    onClick={() => handleResultClick(websiteContent.find(c => c.id === 'portfolio'))}
                                >
                                    <span>📁</span>
                                    <span>Portfolio</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchBar;