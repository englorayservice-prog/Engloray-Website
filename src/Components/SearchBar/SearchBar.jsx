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
        // Home Page
        { id: 'home', title: 'Home', content: 'Digital solutions and education excellence.', keywords: ['home', 'engloray', 'main'], path: '/', type: 'page', section: 'home' },
        
        // Services Pages
        { id: 'branding', title: 'Branding & Designing', content: 'Professional branding and creative design services.', keywords: ['branding', 'design', 'creative', 'identity'], path: '/brandingPage', type: 'service', section: 'main' },
        { id: 'development', title: 'App & Web Development', content: 'Custom software, web, and mobile app development.', keywords: ['web', 'app', 'development', 'software', 'coding'], path: '/developmentPage', type: 'service', section: 'main' },
        { id: 'marketing', title: 'Digital Marketing', content: 'Results-driven digital marketing and SEO strategies.', keywords: ['marketing', 'seo', 'social media', 'ads', 'digital'], path: '/marketingPage', type: 'service', section: 'main' },
        { id: 'uiux', title: 'UI/UX Design', content: 'User-centered design for seamless digital experiences.', keywords: ['ui', 'ux', 'design', 'interface', 'user experience'], path: '/UiUxPage', type: 'service', section: 'main' },
        { id: 'mobileApps', title: 'Mobile Applications', content: 'High-performance mobile apps for iOS and Android.', keywords: ['mobile', 'apps', 'android', 'ios', 'applications'], path: '/mobileApplicationsPage', type: 'service', section: 'main' },
        { id: 'saas', title: 'SaaS Development', content: 'Scalable Software as a Service solutions.', keywords: ['saas', 'cloud', 'software', 'business'], path: '/saasPage', type: 'service', section: 'main' },
        
        // Specialized Services
        { id: 'brandingIdentity', title: 'Branding & Identity', content: 'Unique brand identities and logo designs.', keywords: ['logo', 'identity', 'branding'], path: '/brandingIdentityPage', type: 'service', section: 'main' },
        { id: 'uiuxDesign', title: 'UI/UX Design Services', content: 'Advanced UI/UX research and design.', keywords: ['research', 'uiux', 'design'], path: '/uiuxDesignPage', type: 'service', section: 'main' },
        { id: 'softwareDev', title: 'Software Development', content: 'Custom software engineering and development.', keywords: ['software', 'engineering', 'dev'], path: '/softwareDevelopmentPage', type: 'service', section: 'main' },
        { id: 'erpSolutions', title: 'ERP Solutions', content: 'Enterprise Resource Planning systems.', keywords: ['erp', 'enterprise', 'management'], path: '/erpSolutionsPage', type: 'service', section: 'main' },
        { id: 'crmServices', title: 'CRM Services', content: 'Customer Relationship Management solutions.', keywords: ['crm', 'customer', 'sales'], path: '/crmServicesPage', type: 'service', section: 'main' },
        { id: 'digitalMarketingService', title: 'Marketing Services', content: 'Extended digital marketing offerings.', keywords: ['marketing', 'social', 'seo'], path: '/digitalMarketingServicePage', type: 'service', section: 'main' },
        { id: 'aiServices', title: 'AI Services', content: 'Artificial Intelligence and Machine Learning solutions.', keywords: ['ai', 'ml', 'intelligence', 'automation'], path: '/aiServicesPage', type: 'service', section: 'service', section: 'main' },
        { id: 'dataAnalytics', title: 'Data Analytics', content: 'Data-driven insights for business growth.', keywords: ['data', 'analytics', 'bi', 'insights'], path: '/dataAnalyticsPage', type: 'service', section: 'main' },

        // Courses & Learning
        { id: 'allCourses', title: 'All Courses', content: 'Browse our complete catalog of professional courses.', keywords: ['learning', 'courses', 'education', 'classes'], path: '/allCoursesPage', type: 'course', section: 'main' },
        { id: 'graphicsCourse', title: 'Graphics Design Course', content: 'Master professional graphic design tools and techniques.', keywords: ['graphics', 'course', 'photoshop', 'illustrator'], path: '/graphicsDesignCoursePage', type: 'course', section: 'main' },
        { id: 'uiuxCourse', title: 'UI/UX Design Course', content: 'Comprehensive training in UI/UX design and prototyping.', keywords: ['uiux', 'figma', 'design', 'course'], path: '/uiuxDesignCoursePage', type: 'course', section: 'main' },
        { id: 'javaFullStack', title: 'Java Full Stack Course', content: 'End-to-end web development with Java and modern frameworks.', keywords: ['java', 'fullstack', 'backend', 'web', 'course'], path: '/javaFullStackCourseCoursePage', type: 'course', section: 'main' },
        { id: 'drawingCourse', title: 'Drawing Course', content: 'Artistic training and foundational drawing skills.', keywords: ['drawing', 'art', 'creative', 'course'], path: '/drawingCoursePage', type: 'course', section: 'main' },
        { id: 'digitalMarketingCourse', title: 'Digital Marketing Course', content: 'Learn SEO, SEM, and social media marketing.', keywords: ['marketing', 'seo', 'course', 'digital'], path: '/digitalMarketingCoursePage', type: 'course', section: 'main' },
        { id: 'mentorship', title: 'Mentorship Learning', content: 'One-on-one professional guidance and mentorship.', keywords: ['mentor', 'learning', 'guidance'], path: '/mentorshipLearningPage', type: 'course', section: 'main' },
        { id: 'projectBased', title: 'Project Based Learning', content: 'Learn by building real-world projects.', keywords: ['projects', 'hands-on', 'learning'], path: '/projectBasedLearningPage', type: 'course', section: 'main' },
        { id: 'workshops', title: 'Workshops', content: 'Intensive short-term professional workshops.', keywords: ['workshops', 'training', 'session'], path: '/workshopsPage', type: 'course', section: 'main' },

        // Tech Group & Projects
        { id: 'techGroup', title: 'Tech Group', content: 'Our innovation and technology collective.', keywords: ['tech', 'group', 'innovation'], path: '/tech-group', type: 'page', section: 'main' },
        { id: 'allProjects', title: 'All Projects', content: 'Portfolio of our technology and creative projects.', keywords: ['projects', 'portfolio', 'work'], path: '/allProjectsPage', type: 'page', section: 'main' },
        { id: 'caseStudies', title: 'Case Studies', content: 'Detailed analysis of our successful projects.', keywords: ['cases', 'studies', 'portfolio'], path: '/worksCaseStudiesPage', type: 'page', section: 'main' },
        { id: 'clientProjects', title: 'Client Projects', content: 'Work delivered for our global clients.', keywords: ['clients', 'work', 'projects'], path: '/worksClientProjectsPage', type: 'page', section: 'main' },
        { id: 'showcase', title: 'Engloray Showcase', content: 'Exhibition of our best work and innovations.', keywords: ['showcase', 'display', 'work'], path: '/showcase', type: 'page', section: 'main' },

        // Internships
        { id: 'allPrograms', title: 'Internship Programs', content: 'Professional internship opportunities in various domains.', keywords: ['internship', 'career', 'hiring', 'trainee'], path: '/allProgramsPage', type: 'internship', section: 'main' },
        { id: 'graphicsIntern', title: 'Graphics Designer Internship', content: 'Junior roles for aspiring graphic designers.', keywords: ['graphics', 'intern', 'design'], path: '/GraphicDesignerInternPage', type: 'internship', section: 'main' },
        { id: 'webDevIntern', title: 'Web Developer Internship', content: 'Practical training for future web developers.', keywords: ['web', 'dev', 'intern', 'coding'], path: '/websiteDeveloperInternPage', type: 'internship', section: 'main' },
        { id: 'uiuxIntern', title: 'UI/UX Designer Internship', content: 'Internship roles in product design and UI/UX.', keywords: ['uiux', 'intern', 'design'], path: '/uiuxDesignerInternPage', type: 'internship', section: 'main' },
        { id: 'softwareIntern', title: 'Software Developer Internship', content: 'Software engineering internship opportunities.', keywords: ['software', 'intern', 'dev'], path: '/SoftwareDeveloperInternPage', type: 'internship', section: 'main' },
        { id: 'salesIntern', title: 'Sales Executive Internship', content: 'Career start in business and sales.', keywords: ['sales', 'intern', 'business'], path: '/salesExecutiveInternPage', type: 'internship', section: 'main' },
        { id: 'businessDevIntern', title: 'Business Development Internship', content: 'Internal roles in business growth and strategy.', keywords: ['business', 'dev', 'intern', 'strategy'], path: '/businessDevelopmentInternPage', type: 'internship', section: 'main' },
        { id: 'trainingMentorIntern', title: 'Training Mentor Internship', content: 'Educational roles for training and mentorship.', keywords: ['mentor', 'trainer', 'intern', 'education'], path: '/trainingMentorInternPage', type: 'internship', section: 'main' },

        // Company
        { id: 'ourStory', title: 'Our Story', content: 'The history and vision of Engloray.', keywords: ['story', 'about', 'history', 'vision'], path: '/ourStoryPage', type: 'page', section: 'main' },
        { id: 'ourTeam', title: 'Our Team', content: 'Meet the professionals behind Engloray.', keywords: ['team', 'people', 'staff', 'experts'], path: '/ourTeamPage', type: 'page', section: 'main' },
        { id: 'careers', title: 'Careers', content: 'Join our team and grow professionally.', keywords: ['jobs', 'careers', 'hiring', 'work'], path: '/CareersPage', type: 'page', section: 'main' },
        { id: 'contact', title: 'Contact Us', content: 'Get in touch for inquiries and support.', keywords: ['contact', 'email', 'phone', 'reach'], path: '/contactPage', type: 'page', section: 'main' },
        { id: 'corporateTraining', title: 'Corporate Training', content: 'Tailored training solutions for businesses.', keywords: ['corporate', 'training', 'business', 'upskill'], path: '/corporateTraining', type: 'service', section: 'main' },

        // Products & Specialized Pages
        { id: 'aiProduct', title: 'AI Products', content: 'Innovative AI-powered software products.', keywords: ['ai', 'products', 'software'], path: '/aiProductPage', type: 'page', section: 'main' },
        { id: 'aiChatbot', title: 'AI Chatbott', content: 'Intelligent conversational AI solutions.', keywords: ['chatbot', 'ai', 'conversation'], path: '/aiChatbotPage', type: 'page', section: 'main' },
        { id: 'businessSuite', title: 'Business Suite AI', content: 'Comprehensive AI tools for business management.', keywords: ['suite', 'ai', 'business'], path: '/businessSuiteAiPage', type: 'page', section: 'main' },
        { id: 'crmPage', title: 'CRM Platform', content: 'Efficient customer relationship management tool.', keywords: ['crm', 'platform', 'tool'], path: '/crmPage', type: 'page', section: 'main' },
        { id: 'erpPage', title: 'ERP Platform', content: 'Advanced enterprise resource planning tool.', keywords: ['erp', 'platform', 'tool'], path: '/erpPage', type: 'page', section: 'main' },
        { id: 'raymart', title: 'Raymart', content: 'Our specialized e-commerce and retail solution.', keywords: ['raymart', 'retail', 'ecommerce'], path: '/raymartPage', type: 'page', section: 'main' },
        { id: 'jobSeeker', title: 'Job Seeker Portal', content: 'Tools and resources for job hunting.', keywords: ['jobs', 'seeker', 'career'], path: '/jobSeekerPage', type: 'page', section: 'main' },

        // Policies
        { id: 'privacy', title: 'Privacy Policy', content: 'How we handle your data and privacy.', keywords: ['privacy', 'data', 'terms'], path: '/privacyPolicyPage', type: 'page', section: 'main' },
        { id: 'cookies', title: 'Cookie Policy', content: 'Information about how we use cookies.', keywords: ['cookies', 'tracking'], path: '/cookiesPolicyPage', type: 'page', section: 'main' },
        { id: 'terms', title: 'Terms & Services', content: 'User agreement and terms of use.', keywords: ['terms', 'legal', 'agreement'], path: '/termsAndServicesPage', type: 'page', section: 'main' }
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
                    if (keyword.toLowerCase().includes(lowercaseQuery)) {
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

    // Handle search result click
    const handleResultClick = (result) => {
        if (!result) return;
        
        console.log('Navigating to:', result.path);
        
        // Navigate to target page
        navigate(result.path);
        
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
        
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
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

    // Function to get icon based on type (replaces emojis)
    const getResultIcon = (type) => {
        switch(type) {
            case 'course':
                return (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                    </svg>
                );
            case 'service':
                return (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                    </svg>
                );
            case 'internship':
                return (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                );
            default:
                return (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                    </svg>
                );
        }
    };

    return (
        <div 
            className={`search-container ${mobile ? 'mobile' : 'desktop'}`} 
            ref={searchRef}
        >
            <div className="search-input-wrapper">
                <input
                    type="text"
                    className="search-input"
                    placeholder={mobile ? "Search website..." : "Search courses, services, pages..."}
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
                                                {getResultIcon(result.type)}
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
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="no-results">
                                    <div className="no-results-icon">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                        </svg>
                                    </div>
                                    <div className="no-results-text">
                                        <div>No results found for "{searchQuery}"</div>
                                        <small>Try different keywords or check spelling</small>
                                    </div>
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
                                    onClick={() => handleResultClick(websiteContent.find(c => c.id === 'allCourses'))}
                                >
                                    <span>All Courses</span>
                                </button>
                                <button 
                                    className="quick-link"
                                    onClick={() => handleResultClick(websiteContent.find(c => c.id === 'branding'))}
                                >
                                    <span>Our Services</span>
                                </button>
                                <button 
                                    className="quick-link"
                                    onClick={() => handleResultClick(websiteContent.find(c => c.id === 'contact'))}
                                >
                                    <span>Contact Us</span>
                                </button>
                                <button 
                                    className="quick-link"
                                    onClick={() => handleResultClick(websiteContent.find(c => c.id === 'allProjects'))}
                                >
                                    <span>Projects</span>
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