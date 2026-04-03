import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './RayMartPageThree.css';
import financeStat from '../../../assets/fin stat.png';

// Internal 3D Animated Assets
import crmIcon from '../../../assets/crm_3d_new.png';
import erpIcon from '../../../assets/erp_3d_new.png';
import aiIcon from '../../../assets/ai_3d_new.png';
import jobsIcon from '../../../assets/jobs_3d_new.png';
import careerIcon from '../../../assets/character-illustration.png';

const RayMartPageThree = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [testiIndex, setTestiIndex] = useState(0);
  const navigate = useNavigate();

  // Carousel Refs
  const rowCRMRef = useRef(null);
  const rowERPRef = useRef(null);
  const rowBotRef = useRef(null);
  const rowJobsRef = useRef(null);
  const rowLearnRef = useRef(null);
  const rowSaasRef = useRef(null);
  const rowBsaiRef = useRef(null);

  const scrollRow = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 330; // Card width + gap
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nextProduct = () => {
    setActiveIndex((prev) => (prev + 1) % popularProducts.length);
  };

  const prevProduct = () => {
    setActiveIndex((prev) => (prev - 1 + popularProducts.length) % popularProducts.length);
  };

  const nextTesti = () => {
    setTestiIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTesti = () => {
    setTestiIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Helper to get the 4 products NOT currently active
  const getThumbnailProducts = () => {
    return popularProducts
      .map((p, originalIndex) => ({ ...p, originalIndex }))
      .filter((_, idx) => idx !== activeIndex);
  };

    const scrollToOffers = () => {
      const target = document.getElementById('offers-anchor');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    };

  return (
    <div className="rm3-page-container">
      {/* Hero Section */}
      <section className="rm3-hero-section">
        <div className="rm3-hero-grid">
          {/* Left Content */}
          <div className={`rm3-hero-left ${isVisible ? 'rm3-fade-in' : ''}`}>
            <h1 className="rm3-hero-title">
              All your . <span className="rm3-title-accent">In one app.</span>
            </h1>
            <p className="rm3-hero-description">
              Keep your business account of your balance needs safely
              organized under one roof. Manage money quickly, carry it efficiently,
              whether you're alone or leading a team.
            </p>
            <button className="rm3-discover-btn" onClick={scrollToOffers}>
              Discover our offer
            </button>
            <p className="rm3-hero-subtext">
              Commit in each month, Try free for 30 days with no obligations.
            </p>
          </div>

          <div className={`rm3-hero-right ${isVisible ? 'rm3-slide-up' : ''}`}>
            <div className="rm3-mockup-container">
              <img
                src={financeStat}
                alt="Finance Statistics"
                className="rm3-mockup-img rm3-dash"
              />
            </div>
          </div>
        </div>

        <div className={`rm3-hero-bottom-grid ${isVisible ? 'rm3-fade-in-delayed' : ''}`}>
          <div className="rm3-bottom-card rm3-ai-card">
            <div className="rm3-feature-swapper">
              <div className="rm3-feature-track">
                <div className="rm3-feature-item">
                  <span className="rm3-feature-icon">✦</span>
                  <p className="rm3-feature-text">AI Assistant</p>
                </div>
                <div className="rm3-feature-item">
                  <span className="rm3-feature-icon">◈</span>
                  <p className="rm3-feature-text">Smart Analytics</p>
                </div>
                <div className="rm3-feature-item">
                  <span className="rm3-feature-icon">❂</span>
                  <p className="rm3-feature-text">24/7 Support</p>
                </div>
              </div>
            </div>
            <div className="rm3-card-circles-overlay"></div>
          </div>

          <div className="rm3-bottom-card rm3-mint-card">
            <div className="rm3-counter-swapper">
              <div className="rm3-counter-track">
                <span className="rm3-count-item">+ 500</span>
                <span className="rm3-count-item">10M</span>
                <span className="rm3-count-item">98%</span>
                <span className="rm3-count-item">+ 500</span>
              </div>
            </div>
            <p className="rm3-mint-text">
              Big companies use Razor AI for their services
            </p>
          </div>

          <div className="rm3-bottom-text-container">
            <p className="rm3-bottom-paragraph">
              In the realm of creativity, technology has become a
              powerful ally for artists, writers, designers, and
              creators of all kinds. Artificial intelligent tools
              have emerged as valuable companions, assisting
              virtually routine tasks in high creative processes.
            </p>
          </div>
        </div>
      </section>

      {/* NEW HIGHLIGHTS SECTION (Bento Grid Style) */}
      <section className="rm3-highlights-section">
        <div className="rm3-highlights-container">

          {/* Left: AI Showcase Card */}
          <div className="rm3-hl-card rm3-hl-card-main">
            <div className="rm3-hl-main-img" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop')` }}></div>
            <div className="rm3-hl-badge">
              <span>✦</span> AI Generator
            </div>
          </div>

          {/* Middle: Stats & Text */}
          <div className="rm3-hl-col-mid">
            <div className="rm3-hl-card rm3-hl-card-neon">
              <h2 className="rm3-hl-stat">300+</h2>
              <p className="rm3-hl-label">Projects Solved</p>
            </div>
            <div className="rm3-hl-card rm3-hl-card-purple">
              <p className="rm3-hl-quote">We have the best AI image generator and CRM integration tools on the market.</p>
              <div className="rm3-hl-avatar-group">
                <div className="rm3-hl-mini-avatar"></div>
                <span className="rm3-hl-ava-text">Trust our Process</span>
              </div>
            </div>
          </div>

          {/* Right: Graphic & CTA */}
          <div className="rm3-hl-col-right">
            <div className="rm3-hl-card rm3-hl-card-graphic">
              <div className="rm3-hl-shapes">
                <div className="rm3-shape rm3-shape-x"></div>
                <div className="rm3-shape rm3-shape-plus"></div>
                <div className="rm3-shape rm3-shape-tri"></div>
              </div>
            </div>
            <div className="rm3-hl-card rm3-hl-card-cta">
              <h3 className="rm3-hl-cta-text">Try Free ?</h3>
              <div className="rm3-hl-cta-arrow">→</div>
            </div>
          </div>

        </div>
      </section>

      {/* SALES STATS HIGHLIGHTS SECTION (Grid Style) */}
      <section className="rm3-sales-stats-section">
        <div className="rm3-sales-container">
          <div className="rm3-sales-header">
            <h2 className="rm3-section-title-global">product performance</h2>
          </div>

          <div className="rm3-sales-grid">
            {[
              { id: 1, title: 'CRM Unified Connect', img: crmIcon, stat: '5.2k Users' },
              { id: 2, title: 'ERP Operations Pro', img: erpIcon, stat: '2.8k Sales' },
              { id: 3, title: 'Razor AI Assistant', img: aiIcon, stat: '10k+ Queries' },
              { id: 4, title: 'Hiring Hub Scanner', img: jobsIcon, stat: '1.5k Hires' },
              { id: 5, title: 'Finance Stat Dashboard', img: financeStat, stat: '$1.2M Rev.' },
              { id: 6, title: 'AI Resume Builder', img: careerIcon, stat: '20k Created' }
            ].map((prod) => (
              <div key={prod.id} className="rm3-sales-card">
                <div className="rm3-sales-card-img-box">
                  <img src={prod.img} alt={prod.title} className="rm3-sales-card-img" />
                </div>
                <div className="rm3-sales-card-details">
                  <h4 className="rm3-sales-card-title">{prod.title}</h4>
                  <p className="rm3-sales-card-stat">{prod.stat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products Carousel Section (EXACT MATCH REPLICATION with 3D Images) */}
      <section className="rm3-products-section">
        <h2 className="rm3-section-title-global">our popular products</h2>
        <div className="rm3-carousel-outer">
          <button className="rm3-nav-outer prev" onClick={prevProduct}>‹</button>

          <div className="rm3-exact-red-card">
            {/* Left Column: Big Hero Image (Active Product Only) */}
            <div className="rm3-exact-image-col">
              <img
                src={popularProducts[activeIndex].img}
                alt={popularProducts[activeIndex].title}
                className="rm3-exact-hero-img"
                key={`hero-${activeIndex}`}
                loading="eager"
              />
            </div>

            {/* Right Column: Content + Grid of the OTHER 4 products + Footer */}
            <div className="rm3-exact-content-col">
              <div className="rm3-exact-header">
                <h2 className="rm3-exact-title">{popularProducts[activeIndex].title}</h2>
                <p className="rm3-exact-description">{popularProducts[activeIndex].description}</p>
              </div>

              {/* 2x2 Navigator Grid: Showing the 4 non-active products */}
              <div className="rm3-exact-grid">
                {getThumbnailProducts().map((p) => (
                  <div
                    className="rm3-exact-grid-item"
                    key={p.originalIndex}
                    onClick={() => setActiveIndex(p.originalIndex)}
                  >
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="eager"
                    />
                    <div className="rm3-exact-grid-overlay">
                      <span>{p.title}</span>
                    </div>
                  </div>
                ))}
              </div>



              {/* Tags Row */}
              <div className="rm3-exact-tags">
                {popularProducts[activeIndex].tags.map((tag, tIdx) => (
                  <span key={tIdx} className="rm3-exact-tag">{tag}</span>
                ))}
              </div>

              {/* Footer Row */}
              <div className="rm3-exact-footer">
                <div className="rm3-exact-stats">
                  <div className="rm3-exact-stat-big">{popularProducts[activeIndex].statBig}</div>
                  <div className="rm3-exact-stat-small">{popularProducts[activeIndex].statSmall}</div>
                </div>
                <div className="rm3-exact-promo">
                  {popularProducts[activeIndex].promo}
                </div>
                <button className="rm3-exact-contact-btn">
                  contact us
                </button>
              </div>
            </div>
          </div>

          <button className="rm3-nav-outer next" onClick={nextProduct}>›</button>
        </div>
      </section>


      {/* CRM SECTION (6 Cards) */}
      <section className="rm3-store-section" id="offers-anchor">
        <div className="rm3-store-container">
          <h2 className="rm3-section-title-global" style={{ textAlign: 'center', marginBottom: '30px' }}>our offer for the products</h2>
          <div className="rm3-store-row">
            <div className="rm3-store-row-header">
              <h2 className="rm3-store-row-title">CRM</h2>
              <div className="rm3-carousel-nav">
                <button className="rm3-nav-btn-mini" onClick={() => scrollRow(rowCRMRef, 'left')}>‹</button>
                <button className="rm3-nav-btn-mini" onClick={() => scrollRow(rowCRMRef, 'right')}>›</button>
              </div>
            </div>
            <div className="rm3-app-cards-grid" ref={rowCRMRef}>
              {[
                { title: "Ultimate Sales Hub", desc: "Track leads and close deals faster with our advanced sales pipeline.", img: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=800&auto=format&fit=crop", offer: "Lifetime Access Offer", discount: "50%" },
                { title: "Customer Link Pro", desc: "Build meaningful relationships with integrated contact management.", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop", offer: "Early Bird Special", discount: "60%" },
                { title: "Unified CRM Connect", desc: "Sync your entire organization with a single point of truth for data.", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop", offer: "Flat $20 Off Credits", discount: "70%" },
                { title: "Sales Growth Engine", desc: "Accelerate your revenue with AI-powered marketing automation.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop", offer: "Starter Pack Deal", discount: "45%" },
                { title: "Omnichannel Sync", desc: "Manage chat, email, and social from one unified dashboard.", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop", offer: "Omni-Pack Sync", discount: "30%" },
                { title: "Lead Scoring V2", desc: "Prioritize your top-tier prospects with AI predictive analysis.", img: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=800&auto=format&fit=crop", offer: "Pro Scoring Tier", discount: "25%" }
              ].map((item, idx) => (
                <div key={`crm-${idx}`} className="rm3-app-card" onClick={() => navigate('/raymartPageFour')} style={{ cursor: 'pointer' }}>
                  <div className="rm3-app-card-img" style={{ backgroundImage: `url('${item.img}')` }}></div>
                  <div className="rm3-app-card-body">
                    <h3 className="rm3-app-card-title">{item.title}</h3>
                    <p className="rm3-app-card-desc">{item.desc}</p>
                    <div className="rm3-app-card-footer">
                      <div className="rm3-store-price-group">
                        <span className="rm3-store-discount">{item.discount}</span>
                        <div className="rm3-store-price-details">
                          <span className="rm3-store-offers">{item.offer}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ERP SECTION (7 Cards) */}
      <section className="rm3-store-section">
        <div className="rm3-store-container">
          <div className="rm3-store-row">
            <div className="rm3-store-row-header">
              <h2 className="rm3-store-row-title">ERP</h2>
              <div className="rm3-carousel-nav">
                <button className="rm3-nav-btn-mini" onClick={() => scrollRow(rowERPRef, 'left')}>‹</button>
                <button className="rm3-nav-btn-mini" onClick={() => scrollRow(rowERPRef, 'right')}>›</button>
              </div>
            </div>
            <div className="rm3-app-cards-grid" ref={rowERPRef}>
              {[
                { title: "Financial Intelligence", desc: "Automate your accounting and gain real-time financial insights.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop", offer: "Free Setup Included", discount: "40%" },
                { title: "Supply Chain Master", desc: "Optimize your logistics from procurement to final delivery.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop", offer: "Bundle Deal Available", discount: "30%" },
                { title: "Operations Core 3.0", desc: "Manage resources and manufacturing with industrial precision.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop", offer: "Limited Time Upgrade", discount: "50%" },
                { title: "Enterprise Logic Hub", desc: "Scale globally with seamless multi-currency support.", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop", offer: "Global Expansion Deal", discount: "25%" },
                { title: "Inventory Radar", desc: "Predict stock shortages before they happen with smart IoT.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop", offer: "Asset Guard Plus", discount: "20%" },
                { title: "Fleet Sync Pro", desc: "Real-time delivery tracking and fuel optimization algorithms.", img: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=800&auto=format&fit=crop", offer: "Logistics Bundle", discount: "15%" },
                { title: "HR Connect Core", desc: "Manage payroll and employee lifecycle in a single platform.", img: "https://images.unsplash.com/photo-1521791055366-0772eea2339d?q=80&w=800&auto=format&fit=crop", offer: "HR Starter Pack", discount: "35%" }
              ].map((item, idx) => (
                <div key={`erp-${idx}`} className="rm3-app-card" onClick={() => navigate('/raymartPageFour')} style={{ cursor: 'pointer' }}>
                  <div className="rm3-app-card-img" style={{ backgroundImage: `url('${item.img}')` }}></div>
                  <div className="rm3-app-card-body">
                    <h3 className="rm3-app-card-title">{item.title}</h3>
                    <p className="rm3-app-card-desc">{item.desc}</p>
                    <div className="rm3-app-card-footer">
                      <div className="rm3-store-price-group">
                        <span className="rm3-store-discount">{item.discount}</span>
                        <div className="rm3-store-price-details">
                          <span className="rm3-store-offers">{item.offer}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI CHATBOT SECTION (7 Cards) */}
      <section className="rm3-store-section">
        <div className="rm3-store-container">
          <div className="rm3-store-row">
            <div className="rm3-store-row-header">
              <h2 className="rm3-store-row-title">AI CHATBOT</h2>
              <div className="rm3-carousel-nav">
                <button className="rm3-nav-btn-mini" onClick={() => scrollRow(rowBotRef, 'left')}>‹</button>
                <button className="rm3-nav-btn-mini" onClick={() => scrollRow(rowBotRef, 'right')}>›</button>
              </div>
            </div>
            <div className="rm3-app-cards-grid" ref={rowBotRef}>
              {[
                { title: "Razor AI Assistant", desc: "Deploy hyper-accurate voice and text assistants in minutes.", img: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=800&auto=format&fit=crop", offer: "Double Token Pack", discount: "80%" },
                { title: "Nexus GPT Node", desc: "Connect your enterprise data to a custom LLM pipeline.", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop", offer: "Beta Access Offer", discount: "50%" },
                { title: "Infinite Voice Flow", desc: "Crystal clear AI voice synthesis for global customer support.", img: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&auto=format&fit=crop", offer: "Annual Plan Savings", discount: "25%" },
                { title: "Neural Link Desk", desc: "Automate complex queries with self-learning neural networks.", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop", offer: "Founder Pack Deal", discount: "70%" },
                { title: "Vision Interaction Hub", desc: "AI that can 'see' and respond to images sent by customers.", img: "https://images.unsplash.com/photo-1617791160536-59a861214870?q=80&w=800&auto=format&fit=crop", offer: "Vision Add-on", discount: "60%" },
                { title: "Sentiment Sentinel", desc: "Real-time tone detection to escalate angry users to humans.", img: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=800&auto=format&fit=crop", offer: "Escalation Pro", discount: "40%" },
                { title: "Global Translator X", desc: "Instant bi-directional translation for 100+ native languages.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop", offer: "Global Comm Pack", discount: "30%" }
              ].map((item, idx) => (
                <div key={`bot-${idx}`} className="rm3-app-card" onClick={() => navigate('/raymartPageFour')} style={{ cursor: 'pointer' }}>
                  <div className="rm3-app-card-img" style={{ backgroundImage: `url('${item.img}')` }}></div>
                  <div className="rm3-app-card-body">
                    <h3 className="rm3-app-card-title">{item.title}</h3>
                    <p className="rm3-app-card-desc">{item.desc}</p>
                    <div className="rm3-app-card-footer">
                      <div className="rm3-store-price-group">
                        <span className="rm3-store-discount">{item.discount}</span>
                        <div className="rm3-store-price-details">
                          <span className="rm3-store-offers">{item.offer}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* JOB SEEKER HUB SECTION (6 Cards) */}
      <section className="rm3-store-section">
        <div className="rm3-store-container">
          <div className="rm3-store-row">
            <div className="rm3-store-row-header">
              <h2 className="rm3-store-row-title">JOB SEEKER HUB</h2>
              <div className="rm3-carousel-nav">
                <button className="rm3-nav-btn-mini" onClick={() => scrollRow(rowJobsRef, 'left')}>‹</button>
                <button className="rm3-nav-btn-mini" onClick={() => scrollRow(rowJobsRef, 'right')}>›</button>
              </div>
            </div>
            <div className="rm3-app-cards-grid" ref={rowJobsRef}>
              {[
                { title: "AI Resume Optimizer", desc: "Instantly score and improve your CV for applicant tracking systems.", img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop", offer: "Resume Boost", discount: "15%" },
                { title: "Job Market Scanner", desc: "Discover high-paying roles across multiple boards in one view.", img: "https://images.unsplash.com/photo-1521791136064-7986c2923ea4?q=80&w=800&auto=format&fit=crop", offer: "Market Insight", discount: "20%" },
                { title: "Mock Interview Coach", desc: "Practice with AI-powered video interactions and get feedback.", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop", offer: "Interview Pass", discount: "10%" },
                { title: "Industry Bridge Port", desc: "Network directly with professionals in your target expertise.", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop", offer: "Network Pro", discount: "5%" },
                { title: "Salary Negotiation AI", desc: "Get real-time data on your worth and scripts for the call.", img: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=800&auto=format&fit=crop", offer: "Negotiator Kit", discount: "40%" },
                { title: "Freelance Catalyst", desc: "Optimize your Upwork and Fiverr profiles for top-tier gigs.", img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop", offer: "Gigs Builder", discount: "30%" }
              ].map((item, idx) => (
                <div key={`jobs-${idx}`} className="rm3-app-card" onClick={() => navigate('/raymartPageFour')} style={{ cursor: 'pointer' }}>
                  <div className="rm3-app-card-img" style={{ backgroundImage: `url('${item.img}')` }}></div>
                  <div className="rm3-app-card-body">
                    <h3 className="rm3-app-card-title">{item.title}</h3>
                    <p className="rm3-app-card-desc">{item.desc}</p>
                    <div className="rm3-app-card-footer">
                      <div className="rm3-store-price-group">
                        <span className="rm3-store-discount">{item.discount}</span>
                        <div className="rm3-store-price-details">
                          <span className="rm3-store-offers">{item.offer}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAREER & LEARNING SECTION (5 Cards) */}
      <section className="rm3-store-section">
        <div className="rm3-store-container">
          <div className="rm3-store-row">
            <div className="rm3-store-row-header">
              <h2 className="rm3-store-row-title">CAREER & LEARNING</h2>
              <div className="rm3-carousel-nav">
                <button className="rm3-nav-btn-mini" onClick={() => scrollRow(rowLearnRef, 'left')}>‹</button>
                <button className="rm3-nav-btn-mini" onClick={() => scrollRow(rowLearnRef, 'right')}>›</button>
              </div>
            </div>
            <div className="rm3-app-cards-grid" ref={rowLearnRef}>
              {[
                { title: "Fullstack Web Academy", desc: "Master modern frameworks and deployment for high-end dev roles.", img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop", offer: "Certification Inc.", discount: "25%" },
                { title: "Data Science Masters", desc: "Learn Python and machine learning with industry-level datasets.", img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=800&auto=format&fit=crop", offer: "ML Bonus Pack", discount: "20%" },
                { title: "UX/UI Design Lab", desc: "Bridge the gap between vision and interface with hands-on labs.", img: "https://images.unsplash.com/photo-1581291518066-8e75ff13e7ec?q=80&w=800&auto=format&fit=crop", offer: "UI Designer Pro", discount: "15%" },
                { title: "Executive Leadership", desc: "Develop the strategy and soft skills to lead high-performing teams.", img: "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=800&auto=format&fit=crop", offer: "Mentor Session", discount: "10%" },
                { title: "Growth Marketing Pro", desc: "Scale startups using data-driven hacking and viral engineering.", img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800&auto=format&fit=crop", offer: "Marketer Pack", discount: "50%" }
              ].map((item, idx) => (
                <div key={`learn-${idx}`} className="rm3-app-card" onClick={() => navigate('/raymartPageFour')} style={{ cursor: 'pointer' }}>
                  <div className="rm3-app-card-img" style={{ backgroundImage: `url('${item.img}')` }}></div>
                  <div className="rm3-app-card-body">
                    <h3 className="rm3-app-card-title">{item.title}</h3>
                    <p className="rm3-app-card-desc">{item.desc}</p>
                    <div className="rm3-app-card-footer">
                      <div className="rm3-store-price-group">
                        <span className="rm3-store-discount">{item.discount}</span>
                        <div className="rm3-store-price-details">
                          <span className="rm3-store-offers">{item.offer}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SAAS SECTION (6 Cards) */}
      <section className="rm3-store-section">
        <div className="rm3-store-container">
          <div className="rm3-store-row">
            <div className="rm3-store-row-header">
              <h2 className="rm3-store-row-title">SAAS</h2>
              <div className="rm3-carousel-nav">
                <button className="rm3-nav-btn-mini" onClick={() => scrollRow(rowSaasRef, 'left')}>‹</button>
                <button className="rm3-nav-btn-mini" onClick={() => scrollRow(rowSaasRef, 'right')}>›</button>
              </div>
            </div>
            <div className="rm3-app-cards-grid" ref={rowSaasRef}>
              {[
                { title: "Cloud Ops Manager", desc: "Monitor your entire cloud infrastructure from a single pane of glass.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop", offer: "Enterprise Trial", discount: "20%" },
                { title: "SaaS Billing Pro", desc: "Automate recurring payments and subscription lifecycle management.", img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop", offer: "Free Gateway Setup", discount: "30%" },
                { title: "API Nexus Hub", desc: "Connect and manage microservices with unified API gateways.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop", offer: "Developer Pack", discount: "15%" },
                { title: "User Auth Guard", desc: "Enterprise-grade single sign-on and identity management.", img: "https://images.unsplash.com/photo-1614064641936-e41fa8208453?q=80&w=800&auto=format&fit=crop", offer: "Security Bundle", discount: "40%" },
                { title: "Metric Data Lake", desc: "Store and query massive amounts of product analytics instantly.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop", offer: "Data Starter", discount: "25%" },
                { title: "Tenant Sync DB", desc: "Multi-tenant database orchestration for scaling B2B SaaS.", img: "https://images.unsplash.com/photo-1631624215749-b10b3dd7bca5?q=80&w=800&auto=format&fit=crop", offer: "Scale Plan Deal", discount: "50%" }
              ].map((item, idx) => (
                <div key={`saas-${idx}`} className="rm3-app-card" onClick={() => navigate('/raymartPageFour')} style={{ cursor: 'pointer' }}>
                  <div className="rm3-app-card-img" style={{ backgroundImage: `url('${item.img}')` }}></div>
                  <div className="rm3-app-card-body">
                    <h3 className="rm3-app-card-title">{item.title}</h3>
                    <p className="rm3-app-card-desc">{item.desc}</p>
                    <div className="rm3-app-card-footer">
                      <div className="rm3-store-price-group">
                        <span className="rm3-store-discount">{item.discount}</span>
                        <div className="rm3-store-price-details">
                          <span className="rm3-store-offers">{item.offer}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS SUIT AI SECTION (5 Cards) */}
      <section className="rm3-store-section">
        <div className="rm3-store-container">
          <div className="rm3-store-row">
            <div className="rm3-store-row-header">
              <h2 className="rm3-store-row-title">BUSINESS SUIT AI</h2>
              <div className="rm3-carousel-nav">
                <button className="rm3-nav-btn-mini" onClick={() => scrollRow(rowBsaiRef, 'left')}>‹</button>
                <button className="rm3-nav-btn-mini" onClick={() => scrollRow(rowBsaiRef, 'right')}>›</button>
              </div>
            </div>
            <div className="rm3-app-cards-grid" ref={rowBsaiRef}>
              {[
                { title: "Executive AI Dashboard", desc: "Get real-time AI-generated insights into your company's health.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop", offer: "C-Suite Access", discount: "20%" },
                { title: "Legal Doc Parser", desc: "Instantly review and summarize complex contracts with AI vision.", img: "https://images.unsplash.com/photo-1505664159858-86a8d8e5837a?q=80&w=800&auto=format&fit=crop", offer: "Legal Tech Deal", discount: "35%" },
                { title: "Biz Strategy Copilot", desc: "Simulate market conditions and generate strategic roadmaps.", img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop", offer: "Strategy Session", discount: "15%" },
                { title: "Meeting Synthesizer", desc: "Auto-record, transcribe, and assign action items for all meetings.", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop", offer: "Team Pack Sync", discount: "50%" },
                { title: "Vendor NegotiaBot", desc: "Automate preliminary vendor price negotiations using smart AI.", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop", offer: "Procurement Pro", discount: "40%" }
              ].map((item, idx) => (
                <div key={`bsai-${idx}`} className="rm3-app-card" onClick={() => navigate('/raymartPageFour')} style={{ cursor: 'pointer' }}>
                  <div className="rm3-app-card-img" style={{ backgroundImage: `url('${item.img}')` }}></div>
                  <div className="rm3-app-card-body">
                    <h3 className="rm3-app-card-title">{item.title}</h3>
                    <p className="rm3-app-card-desc">{item.desc}</p>
                    <div className="rm3-app-card-footer">
                      <div className="rm3-store-price-group">
                        <span className="rm3-store-discount">{item.discount}</span>
                        <div className="rm3-store-price-details">
                          <span className="rm3-store-offers">{item.offer}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: REDEFINING CONVERSATIONS (Chat UI) */}
      <section className="rm3-redefine-section">
        <div className="rm3-container">

          {/* Header Row */}
          <div className="rm3-redefine-header">
            <div className="rm3-rh-left">
              <p>Throughout your customer's entire buying journey, Razor AI allows you to delight them at every step of the way, from their first visit to the final purchase.</p>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button className="rm3-rh-btn">Get Started <span>&#8599;</span></button>
              </a>
            </div>
            <div className="rm3-rh-right">
              <h2>
                <span className="rm3-dl-highlight rm3-dl-hl-top">Redefining</span> Conversations <br className="rm3-rh-br" />
                and <span className="rm3-dl-highlight rm3-dl-hl-bot">Enhancing</span> User <br className="rm3-rh-br-mobile" />
                experience
                <span className="rm3-rh-icon-pill">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M2.5 12s3-7 9.5-7 9.5 7 9.5 7-3 7-9.5 7-9.5-7-9.5-7z" /></svg>
                  &#8594;
                </span>
              </h2>
            </div>
          </div>

          {/* Content Row */}
          <div className="rm3-redefine-content">
            {/* Left Tabs */}
            <div className="rm3-rc-tabs">
              <div className="rm3-rtab active" style={{ cursor: 'pointer' }}>
                <h3>Engage</h3>
                <p>Reach out to visitors proactively using personalized chatbot greetings. Turn website visitors into sales opportunities.</p>
              </div>
              <div className="rm3-rtab" style={{ cursor: 'pointer' }}>
                <h3>Nurture</h3>
                <p>Lead customers to a sale through recommended purchases and tailored offerings.</p>
              </div>
              <div className="rm3-rtab" style={{ cursor: 'pointer' }}>
                <h3>Qualify</h3>
                <p>Generate and qualify prospects automatically. Transfer high-intent leads to your sales reps in real-time to shorten the sales cycle.</p>
              </div>
            </div>

            {/* Right Graphic */}
            <div className="rm3-rc-visual">
              <div className="rm3-testi-outer-wrapper">
                <button className="rm3-testi-outer-arrow prev" onClick={prevTesti}>&#8592;</button>

                <div className="rm3-rv-chat-widget">
                  <div className="rm3-rv-chat-header">
                    <div className="rm3-rv-ch-avatar" style={{ background: testimonials[testiIndex].color }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>
                    </div>
                    <div className="rm3-rv-ch-info">
                      <h4>{testimonials[testiIndex].name}</h4>
                      <span>{testimonials[testiIndex].role}</span>
                    </div>
                    <div className="rm3-rv-ch-menu">⋮</div>
                  </div>

                  <div className="rm3-rv-chat-body" style={{ minHeight: '260px' }}>
                    <div className="rm3-rv-cb-title">
                      <div className="rm3-rv-cb-av-small" style={{ background: testimonials[testiIndex].color }}></div>
                      <span className="rm3-rv-cb-name">{testimonials[testiIndex].name}</span>
                    </div>
                    <div className={`rm3-rv-chat-bubble testimonial-fade-in`} key={testiIndex}>
                      {testimonials[testiIndex].text}
                    </div>

                    <div className="rm3-rv-chat-options">
                      <span className="rm3-cv-pill">⭐ Premium Support</span>
                      <span className="rm3-cv-pill">⭐ Seamless UI</span>
                      <span className="rm3-cv-pill">⭐ ROI Boost</span>
                    </div>

                    <div className="rm3-testi-controls">
                      <div className="rm3-testi-dots">
                        {testimonials.map((_, i) => (
                          <div
                            key={i}
                            className={`rm3-testi-dot ${testiIndex === i ? 'active' : ''}`}
                            onClick={() => setTestiIndex(i)}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <button className="rm3-testi-outer-arrow next" onClick={nextTesti}>&#8594;</button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* GLOBAL STORIES / MASONRY REVIEWS SECTION */}
      <section className="rm3-global-reviews-section">
        <div className="rm3-global-container">
          <div className="rm3-global-header">
            <h2 className="rm3-global-title">stories from our community</h2>
            <p className="rm3-global-subtitle">Trusted by 50,000+ companies across 160 countries worldwide.</p>
          </div>

          <div className="rm3-global-bricks">
            {[
              { id: 1, type: 'img', url: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=600&auto=format&fit=crop', stat: '48k+', desc: 'GLOBAL SALES SCALED', span: 'v-2-2', bg: '#111' },
              { id: 2, type: 'img', url: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600&auto=format&fit=crop', stat: '3.8k', desc: 'ACTIVE PROJECTS', span: 'v-4-4' },
              { id: 3, type: 'img', url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop', stat: '1k+', desc: 'CLIENT MATCHUPS', span: 'v-2-2' },
              { id: 4, type: 'img', url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop', stat: '5M+', desc: 'COMMUNITY USERS', span: 'v-2-4' },
              { id: 5, type: 'img', url: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=600&auto=format&fit=crop', stat: '95%', desc: 'USER SATISFACTION', span: 'v-2-2', bg: '#111' },
              { id: 6, type: 'text', text: '“RayMart changed our entire workflow in india. The speed is unmatched.”', span: 'v-4-4', bg: '#7c4dff' },
              { id: 7, type: 'img', url: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=600&auto=format&fit=crop', stat: '160+', desc: 'COUNTRIES SERVED', span: 'v-2-2' },
              { id: 8, type: 'img', url: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=600&auto=format&fit=crop', stat: '1.2M', desc: 'ACTIVE USER BASE', span: 'v-2-2', bg: '#4d70ff' },
              { id: 9, type: 'img', url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop', stat: '250+', desc: 'GLOBAL PARTNERS', span: 'v-2-4' }
            ].map((brick) => (
              <div key={brick.id} className={`rm3-brick ${brick.span}`} style={{ backgroundColor: brick.bg || 'transparent' }}>
                {brick.type === 'img' && (
                  <>
                    <img src={brick.url} alt="Reviewer" className="rm3-brick-img" />
                    <div className="rm3-brick-overlay-wash"></div>
                    {brick.stat && (
                      <div className="rm3-brick-overlay">
                        <h3 className="rm3-brick-overlay-val">{brick.stat}</h3>
                        <p className="rm3-brick-overlay-desc">{brick.desc}</p>
                      </div>
                    )}
                  </>
                )}
                {brick.type === 'text' && (
                  <div className="rm3-brick-quote-box">
                    <p className="rm3-brick-quote">{brick.text}</p>
                    <span className="rm3-brick-author">Engineering Lead @ TechIndia</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL SECTION: STATIC 5-COLUMN PRODUCT GALLERY (like Page Two) */}
      <section className="rm3-gallery-section">
        <div className="rm3-gallery-container">
          <div className="rm3-gallery-grid">
            {categoryTiles.map((cat, idx) => (
              <div key={idx} className="rm3-gallery-tile">
                <div
                  className="rm3-gallery-tile-img"
                  style={{ backgroundImage: `url(${cat.img})` }}
                ></div>
                <div className="rm3-gallery-tile-overlay"></div>
                <div className="rm3-gallery-tile-content">
                  <h3>{cat.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>

  );
};

// POPULAR PRODUCTS DATA (5 Products with high-quality 3D Illustrations)
const popularProducts = [
  {
    title: "CRM",
    description: "Centrally manage all customer interactions and sales pipelines. Our CRM helps you track every lead, opportunity, and deal throughout its lifecycle.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    tags: ["CLIENTS", "PIPELINE", "SALES"],
    statBig: "10K+ Leads",
    statSmall: "92% DEAL SPEED",
    promo: "30 DAY FREE TRIAL",
  },
  {
    title: "ERP",
    description: "Complete Enterprise Resource Planning for every department. Integrated logistics, stock management, and finance control in a single unified dashboard.",
    img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop",
    tags: ["OPERATION", "LOGISTICS", "STOCKS"],
    statBig: "Global Reach",
    statSmall: "99.9% ACCURACY",
    promo: "20% OFF ANNUAL",
  },
  {
    title: "AI CHATBOT",
    description: "Transform your customer support with intelligent conversational agents. We build AI bots that understand context and resolve 80% of support queries automatically.",
    img: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=1200&auto=format&fit=crop",
    tags: ["GPT-4", "NLP", "24/7 HELPDESK"],
    statBig: "80% Auto-res",
    statSmall: "SMART AI BOT",
    promo: "FREE AI SETUP",
  },
  {
    title: "JOB SEEKER HUB",
    description: "The ultimate matching platform for professionals and recruiters. Build your career with AI-driven job suggestions and a streamlined recruitment workflow.",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop",
    tags: ["CAREER", "HIRING", "CV-SYNC"],
    statBig: "50K+ Hired",
    statSmall: "DIRECT MATCH",
    promo: "FREE CV AUDIT",
  },
  {
    title: "LEARNING & CAREER",
    description: "Advance your expertise with our comprehensive learning portal. Courses, certifications, and mentorship programs designed to help you climb the professional ladder.",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    tags: ["SKILLS", "PORTAL", "CERTIFY"],
    statBig: "Master Skills",
    statSmall: "LIFETIME REPLAY",
    promo: "FREE COURSE",
  },
  {
    title: "SAAS",
    description: "Build, deploy, and scale cloud-based applications flawlessly. From billing orchestration to API gateways, streamline your software as a service.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    tags: ["CLOUD", "BILLING", "APIS"],
    statBig: "99.9% Uptime",
    statSmall: "CLOUD NATIVE",
    promo: "FREE DEPLOYMENT",
  },
  {
    title: "BUSINESS SUIT AI",
    description: "Empower your C-Suite with real-time AI analytics, legal document parsing, and automated meeting synthesizers for total corporate efficiency.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    tags: ["ENTERPRISE", "LEGAL", "ANALYTICS"],
    statBig: "3X ROI",
    statSmall: "AUTO-MANAGED",
    promo: "ENTERPRISE TRIAL",
  }
];

const testimonials = [
  {
    name: "Sarah L.",
    role: "Chief Strategy Officer",
    text: "The Razor AI platform has completely revolutionized how we handle incoming leads. Proactive chat flow is a total game-changer!",
    color: "#4e54c8"
  },
  {
    name: "Michael R.",
    role: "Product Manager",
    text: "Integration was incredibly smooth. We set up our entire support workflow in less than a day. AI accuracy is impressive.",
    color: "#11998e"
  },
  {
    name: "Elena G.",
    role: "Support Lead",
    text: "Our team is finally able to focus on complex queries while the AI handles the routine ones flawlessly. Beautiful UI!",
    color: "#f85032"
  }
];

const categoryTiles = [
  { title: "CRM", img: crmIcon },
  { title: "ERP", img: erpIcon },
  { title: "AI CHATBOT", img: aiIcon },
  { title: "JOB SEEKER", img: jobsIcon },
  { title: "CAREER & LEARNING", img: careerIcon }
];

export default RayMartPageThree;
