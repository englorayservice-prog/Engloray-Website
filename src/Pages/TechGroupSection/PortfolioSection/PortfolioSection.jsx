import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faChartLine, faRocket, faCloud, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import './PortfolioSection.css';

// import ai from './../../../assets/ai.png'
import caseLogoOne from '../../../assets/case study images/uiux/pavizham.jpg';
import caseLogoTwo from '../../../assets/case study images/uiux/viaan.jpg';
import caseLogoThree from '../../../assets/case study images/branding/malar.jpg';
import caseLogoFour from '../../../assets/case study images/products/amico.png';
import caseLogoFive from '../../../assets/case study images/websites/say.jpg';
import caseLogosix from '../../../assets/case study images/Application/aara.png';
import newGlobe from '../../../assets/newGlobe.png';
import manjariLogo from '../../../assets/logos/manjari-Photoroom.png';
import brandexLogo from '../../../assets/case study images/products/brandex.png';
import maaxLifeLogo from '../../../assets/case study images/products/maax life.png';

const PortfolioSection = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredProject, setHoveredProject] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const filters = [
        { key: 'all', label: 'All Projects' },
        { key: 'websites', label: 'Websites' },
        { key: 'Products', label: 'Products' },
        { key: 'branding', label: 'Branding' },
        { key: 'ui-ux', label: 'UI/UX' },
        { key: 'Applications', label: 'Applications' }
    ];

    const portfolioItems = [
        { id: 1, title: "Viaan Enterprises", category: "ui-ux", image: caseLogoTwo, description: "Complete redesign of a multi-vector marketplace platform focusing on user experience, commercial...", year: "2024" },
        { id: 2, title: "Amico", category: "Products", image: caseLogoFour, description: "Consistent brand language across all products, A Consumer based product Company", year: "2025" },
        { id: 3, title: "Malar Herbal Tea & spices", category: "branding", image: caseLogoThree, description: "Complete brand identity system for an eco-friendly fashion startup including logo, color...", year: "2025" },
        { id: 4, title: "Pavizham Jewellers", category: "ui-ux", image: caseLogoOne, description: "Modern dashboard design for a banking application with real-time analytics, transaction management...", year: "2025" },
        { id: 5, title: "Aara Labs", category: "Applications", image: caseLogosix, description: "Platform for Medical collaborative management platform with real-time updates...", year: "2025" },
        { id: 6, title: "Say Bridal Makeup Website", category: "websites", image: caseLogoFive, description: "Responsive design for a starred Makeup Studio featuring online reservations, menu...", year: "2025" },
        { id: 7, title: "Manjari", category: "branding", image: manjariLogo, description: "Elegant brand identity design...", year: "2024" },
        { id: 8, title: "Brandex", category: "Products", image: brandexLogo, description: "Product showcase and branding...", year: "2025" },
        { id: 9, title: "Maax Life", category: "Products", image: maaxLifeLogo, description: "Consumer product lifecycle management...", year: "2024" }
    ];

    const filteredItems = activeFilter === 'all'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeFilter);

    const navigateToTechGroupProjects = () => {
        navigate('/allProjectsPage');
    };

    const handleFilterChange = (filterKey) => {
        setActiveFilter(filterKey);
    };

    // World map markers definition

    return (
        <section className="ps-portfolio-section" id="portfolio">
            {/* <div className="ps-portfolio-container">
        <div className={`ps-portfolio-header ${isVisible ? 'ps-animate-fade-in' : ''}`}>
          <span className="ps-benefits-main-badge">Our Created Works</span>
          <h2 className="ps-portfolio-title">Featured Work</h2>
          <p className="ps-portfolio-subtitle">Explore projects across various domains</p>
          <div className="ps-title-underline"></div>
        </div>

        <div className={`ps-portfolio-filters ${isVisible ? 'ps-animate-slide-up' : ''}`}>
          {filters.map((filter, index) => (
            <button
              key={filter.key}
              className={`ps-filter-btn ${activeFilter === filter.key ? 'ps-active' : ''}`}
              onClick={() => handleFilterChange(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className={`ps-main-content-wrapper ${activeFilter !== 'all' ? 'ps-with-side-content' : ''}`}>
          <div className="ps-portfolio-grid">
            {filteredItems.map(item => (
              <div key={item.id} className="ps-portfolio-card">
                <div className="ps-card-image-container">
                   <img src={item.image} alt={item.title} className="ps-card-image" />
                   <div className="ps-card-overlay"></div>
                </div>
                <div className="ps-card-content">
                  <h3 className="ps-card-title">{item.title}</h3>
                  <p className="ps-card-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ps-portfolio-cta">
          <button className="ps-load-more-btn" onClick={navigateToTechGroupProjects}>
            View More Projects <span className="ps-btn-arrow">↗</span>
          </button>
        </div>
      </div> */}

            {/* NEW INTERACTIVE CONSTELLATION SECTION (SLACK STYLE) */}
            <div className="ps-constellation-section">
                <div className="ps-constellation-container">

                    {/* Header Area */}
                    <div className="ps-constellation-header">
                        <motion.h2
                            className="ps-constellation-title"
                            initial={{ opacity: 0, y: 36 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        >
                            Our Featured Work
                        </motion.h2>
                        <motion.p
                            className="ps-constellation-subtitle"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        >
                            Explore the brands and projects we've brought to life — from identity design to full-scale digital products.
                        </motion.p>
                    </div>

                    {/* Floating Constellation Elements */}
                    <div className="ps-constellation-nodes">

                        {/* Helper for Brand Nodes with Hover Cards */}
                        {(() => {
                            const renderBrandNode = (id, nodeClass, floatClass) => {
                                const item = portfolioItems.find(i => i.id === id);
                                if (!item) return null;
                                return (
                                    <div className={`ps-node ${nodeClass} ${floatClass}`} key={id}>
                                        <div className="ps-logo-box">
                                            <img src={item.image} alt={item.title} />
                                            <span className="ps-brand-name">{item.title}</span>
                                        </div>

                                        {/* Interactive Hover Card */}
                                        <div className="ps-hover-card-popup">
                                            <div className="ps-hc-top">
                                                <img src={item.image} className="ps-hc-bg" alt={item.title} />
                                            </div>
                                            <div className="ps-hc-bottom">
                                                <span className="ps-hc-category">{item.category}</span>
                                                <h4 className="ps-hc-title">{item.title}</h4>
                                                <span className="ps-hc-year">{item.year}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            };

                            return (
                                <>
                                    {/* Row 1: Top brands */}
                                    {renderBrandNode(4, "node-1", "ps-float-slow")}   {/* Pavizham */}

                                    {/* Tag: #web-dev */}
                                    <div className="ps-node node-tag-1 ps-float-fast">
                                        <span className="ps-tag-pill theme-purple">#web-dev</span>
                                    </div>

                                    {renderBrandNode(1, "node-2", "ps-float-medium")} {/* Viaan */}
                                    {renderBrandNode(3, "node-3", "ps-float-fast")}   {/* Malar */}

                                    {/* Tag: #branding */}
                                    <div className="ps-node node-tag-3 ps-float-medium">
                                        <span className="ps-tag-pill theme-green">#branding</span>
                                    </div>

                                    {renderBrandNode(2, "node-4", "ps-float-medium")} {/* Amico */}

                                    {/* Row 2: Middle brands */}
                                    {renderBrandNode(5, "node-6", "ps-float-slow")}   {/* Aara */}

                                    {/* Tag: #ui-ux */}
                                    <div className="ps-node node-tag-2 ps-float-medium">
                                        <span className="ps-tag-pill theme-blue">#ui-ux</span>
                                    </div>

                                    {renderBrandNode(6, "node-5", "ps-float-slow")}   {/* Say */}

                                    {/* Row 3: Bottom brands */}
                                    {renderBrandNode(7, "node-7", "ps-float-medium")} {/* Manjari */}
                                    {renderBrandNode(8, "node-8", "ps-float-fast")}   {/* Brandex */}

                                    {/* Node 9: Maax Life */}
                                    {renderBrandNode(9, "node-9", "ps-float-slow")}

                                    {/* Tag: #products */}
                                    <div className="ps-node node-tag-4 ps-float-fast">
                                        <span className="ps-tag-pill theme-purple">#products</span>
                                    </div>

                                    {/* Tag: #app-dev (Below message bubble) */}
                                    <div className="ps-node node-tag-5 ps-float-medium">
                                        <span className="ps-tag-pill theme-green">#app-dev</span>
                                    </div>

                                    {/* Tag: #marketing (Near Malar/Brandex) */}
                                    <div className="ps-node node-tag-6 ps-float-slow">
                                        <span className="ps-tag-pill theme-blue">#marketing</span>
                                    </div>

                                    {/* Tag: #strategy (Right of Say) */}
                                    <div className="ps-node node-tag-7 ps-float-fast">
                                        <span className="ps-tag-pill theme-purple">#strategy</span>
                                    </div>

                                    {/* Tag: #innovation (Below Roadmap) */}
                                    <div className="ps-node node-tag-8 ps-float-medium">
                                        <span className="ps-tag-pill theme-blue">#innovation</span>
                                    </div>

                                    {/* Tag: #brand-identity (Above Amico) */}
                                    <div className="ps-node node-tag-9 ps-float-slow">
                                        <span className="ps-tag-pill theme-purple">#brand-identity</span>
                                    </div>

                                    {/* Tag: #makeup-studio (Right side down near Say) */}
                                    <div className="ps-node node-tag-10 ps-float-fast">
                                        <span className="ps-tag-pill theme-green">#makeup-studio</span>
                                    </div>
                                </>
                            );
                        })()}

                        {/* SVG Connecting Lines — loop through ALL brand node centers */}
                        <svg className="ps-constellation-lines" viewBox="0 0 1200 700" preserveAspectRatio="none">
                            {/* Pavizham(167,90) → Viaan(587,139) */}
                            <path d="M167,90 C300,60 450,100 587,139" />
                            {/* Viaan(587,139) → Malar(947,76) */}
                            <path d="M587,139 C700,120 830,60 947,76" />
                            {/* Malar(947,76) → Brandex(1100,209) */}
                            <path d="M947,76 C1000,100 1060,150 1100,209" />
                            {/* Brandex(1100,209) → Say(983,461) */}
                            <path d="M1100,209 C1110,300 1040,400 983,461" />
                            {/* Say(983,461) → Amico(671,370) */}
                            <path d="M983,461 C900,440 760,390 671,370" />
                            {/* Amico(671,370) → Maax Life(587,587) */}
                            <path d="M671,370 C660,440 610,520 587,587" />
                            {/* Maax Life(587,587) → Manjari(191,531) */}
                            <path d="M587,587 C460,580 310,560 191,531" />
                            {/* Manjari(191,531) → Aara(263,279) */}
                            <path d="M191,531 C200,450 230,350 263,279" />
                            {/* Aara(263,279) → back to Pavizham(167,90) */}
                            <path d="M263,279 C240,210 200,150 167,90" />
                        </svg>

                    </div>
                </div>
            </div>
        </section>
    );
};

const mapMarkers = [
    { id: 1, x: 48, y: 25, projectId: 3 },
    { id: 2, x: 65, y: 30, projectId: 2 },
    { id: 3, x: 45, y: 50, projectId: 4 },
    { id: 4, x: 18, y: 72, projectId: 1 },
    { id: 5, x: 75, y: 65, projectId: 5 },
    { id: 6, x: 80, y: 45, projectId: 6 }
];

export default PortfolioSection;