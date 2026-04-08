import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './RayMartPageTwo.css';
import finstat from '../../../assets/hello admin.jpeg';

const howWeWorkSlides = [
  {
    title: "HOW WE WORK",
    desc: "We start by diving deep into your business goals, analyzing the market, and creating a customized strategic roadmap.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1500"
  },
  {
    title: "DESIGN & BUILD",
    desc: "Our expert team crafts engaging interfaces and engineers scalable, high-performance solutions tailored to your needs.",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1500"
  },
  {
    title: "TEST & LAUNCH",
    desc: "After rigorous testing, we flawlessly launch your product and provide continuous optimization to scale your growth.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1500"
  },
  {
    title: "SUPPORT & EVOLVE",
    desc: "We provide 24/7 proactive technical support and continuous platform evolution to guarantee your long-term digital success.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1500"
  }
];

const testimonials = [
  {
    name: "Sarah L.",
    role: "Chief Strategy Officer",
    text: "The Razor AI platform has completely revolutionized how we handle incoming leads. Engaging our visitors with a proactive chat flow has been a total game-changer. We've seen a 3x increase in lead qualification quality!",
    color: "#4e54c8"
  },
  {
    name: "Michael R.",
    role: "Product Manager",
    text: "Integration was incredibly smooth. We managed to set up our entire support workflow in less than a day. The AI accuracy is impressive and reduced our tickets by 40%.",
    color: "#11998e"
  },
  {
    name: "Elena G.",
    role: "Support Lead",
    text: "Our team is finally able to focus on complex queries while the AI handles the routine ones flawlessly. High quality, high speed, and beautiful UI.",
    color: "#f85032"
  }
];

const productCategories = [
  { title: "Cloud CRM", img: "/assets/3d/CRM.png" },
  { title: "AI Chatbots", img: "/assets/3d/Chatbots.png" },
  { title: "Big Data", img: "/assets/3d/BigData.png" },
  { title: "E-Commerce", img: "/assets/3d/Ecommerce.png" },
  { title: "Analytics", img: "/assets/3d/Analytics.png" }
];

const RayMartPageTwo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [howWeWorkSlide, setHowWeWorkSlide] = useState(0);
  const [testiIndex, setTestiIndex] = useState(0);
  const navigate = useNavigate();

  // Carousel Refs
  const rowBrandingRef = useRef(null);
  const rowDevRef = useRef(null);
  const rowWebsiteRef = useRef(null);
  const rowEcomRef = useRef(null);
  const rowAppRef = useRef(null);
  const rowGraphicRef = useRef(null);
  const rowUiUxRef = useRef(null);
  const rowSoftwareRef = useRef(null);
  const rowDataRef = useRef(null);
  const rowAIRef = useRef(null);
  const rowCRMRef = useRef(null);
  const rowSaasRef = useRef(null);

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
    const testiInterval = setInterval(() => {
      setTestiIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000); // Slower cycle
    return () => clearInterval(testiInterval);
  }, []);

  const prevTesti = () => {
    setTestiIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextTesti = () => {
    setTestiIndex((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setHowWeWorkSlide((prev) => (prev + 1) % howWeWorkSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setHowWeWorkSlide((prev) => (prev + 1) % howWeWorkSlides.length);
  };

  const openWhatsApp = () => {
    const serviceName = services[activeIndex]?.title || "service";
    const message = `Hello, I'm interested in your ${serviceName} service on RayMart. Can I get more details?`;
    const url = `https://wa.me/918110034566?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <section className="rm-hero-section" id="raymart-hero-root">
        <div className="rm-hero-container">

          {/* TOP LEFT: STAT CARD (Customer Satisfaction) */}
          <div className="rm-card rm-stat-card-left">
            <h4 className="rm-rating-title">Customer Satisfaction</h4>
            <div className="rm-rating-score">98%</div>
            <div className="rm-rating-bars">
              <div className="rm-bar-row">
                <span className="rm-star-label">Response</span>
                <div className="rm-bar-track"><div className="rm-bar-fill" style={{ width: '95%', backgroundColor: '#34d399' }}></div></div>
              </div>
              <div className="rm-bar-row">
                <span className="rm-star-label">Accuracy</span>
                <div className="rm-bar-track"><div className="rm-bar-fill" style={{ width: '92%', backgroundColor: '#34d399' }}></div></div>
              </div>
              <div className="rm-bar-row">
                <span className="rm-star-label">Speed</span>
                <div className="rm-bar-track"><div className="rm-bar-fill" style={{ width: '88%', backgroundColor: '#fbbf24' }}></div></div>
              </div>
              <div className="rm-bar-row">
                <span className="rm-star-label">Reliability</span>
                <div className="rm-bar-track"><div className="rm-bar-fill" style={{ width: '96%', backgroundColor: '#84c0ff' }}></div></div>
              </div>
            </div>
          </div>

          {/* Left Content Area (Text) - Left Aligned as requested */}
          <div className="rm-hero-content">
            <h1 className="rm-hero-title">
              <div className="rm-line">The Ultimate AI</div>
              <div className="rm-line">
                customer<span className="rm-dl-highlight rm-dl-hl-top">service</span>
              </div>
              <div className="rm-line">
                <span className="rm-dl-highlight rm-dl-hl-bottom">companion</span>
                <div className="rm-toggle-switch">
                  <div className="rm-toggle-knob">
                    <span className="rm-knob-icon">✦</span>
                  </div>
                  <div className="rm-toggle-curves">
                    <span className="rm-curve"></span>
                    <span className="rm-curve"></span>
                  </div>
                </div>
              </div>
            </h1>
            <p className="rm-hero-description">
              Embrace AI chatbot technology in a GPT-4 supported communication tool to help your customers, empower your team, and reduce your workload.
            </p>
          </div>

          {/* Top Right: Rating Card */}
          <div className="rm-card rm-rating-card">
            <h4 className="rm-rating-title">Rating breakdown</h4>
            <div className="rm-rating-score">4.2</div>
            <div className="rm-rating-bars">
              {[5, 4, 3, 2, 1].map((star) => (
                <div className="rm-bar-row" key={star}>
                  <span className="rm-star-label">{star} stars</span>
                  <div className="rm-bar-track">
                    <div
                      className="rm-bar-fill"
                      style={{
                        width: star === 5 ? '85%' :
                          star === 4 ? '15%' :
                            star === 3 ? '60%' :
                              star === 2 ? '10%' : '25%'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Cards Wrapper */}
          <div className="rm-bottom-cards-container">
            {/* Bottom Left: Chart Card */}
            <div className="rm-card rm-chart-card">
              <div className="rm-chart-header">
                <span className="rm-chart-title">User statistics</span>
                <span className="rm-chart-dots">•••</span>
              </div>
              <div className="rm-chart-body">
                <img
                  // src="https://i.giphy.com/3o7TKMGpxVfG6C0XyE.gif"
                  src={finstat}
                  alt="Statistics Animation"
                  className="rm-graph-gif"
                />
                <div className="rm-chart-x-labels">
                  <span>May 1</span>
                  <span>10</span>
                  <span>20</span>
                  <span>30</span>
                </div>
                <div className="rm-chart-legend">
                  <span className="rm-leg-item"><span className="rm-dot blue"></span> <span className="rm-leg-text">2025</span></span>
                  {/* <span className="rm-leg-item"><span className="rm-dot green"></span> <span className="rm-leg-text">2022</span></span> */}
                  <span className="rm-leg-item"><span className="rm-dot orange"></span> <span className="rm-leg-text">2024</span></span>
                </div>
              </div>
            </div>

            {/* Bottom Center: Counter Card */}
            <div className="rm-card rm-counter-card">
              <div className="rm-counter-content">
                <div className="rm-counter-swapper">
                  <div className="rm-counter-track">
                    <span className="rm-count-item">+ 500</span>
                    <span className="rm-count-item">10M</span>
                    <span className="rm-count-item">98%</span>
                  </div>
                </div>
                <p className="rm-counter-text">Big companies use Razor AI for their services.</p>
              </div>
            </div>

            {/* Bottom Right: Dynamic Feature Card */}
            <div className="rm-card rm-feature-card">
              <div className="rm-feature-content">
                <div className="rm-feature-swapper">
                  <div className="rm-feature-track">
                    <div className="rm-feature-item">
                      <span className="rm-feature-icon">✦</span>
                      <p className="rm-feature-text">AI Assistant</p>
                    </div>
                    <div className="rm-feature-item">
                      <span className="rm-feature-icon">◈</span>
                      <p className="rm-feature-text">Smart Analytics</p>
                    </div>
                    <div className="rm-feature-item">
                      <span className="rm-feature-icon">❂</span>
                      <p className="rm-feature-text">24/7 Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* POPULAR SERVICES SECTION */}
      <section className="rm-services-section">
        <h2 className="rm-services-title">our popular service</h2>

        <div className="rm-carousel-container">
          <button className="rm-nav-btn prev" onClick={() => setActiveIndex(prev => (prev === 0 ? services.length - 1 : prev - 1))}>
            ‹
          </button>

          <div className="rm-service-card-wrapper">
            {/* SINGLE CARD STRUCTURE THAT SWAPS CONTENT */}
            <div className="rm-service-main-card">
              <div className="rm-service-image-side">
                <img
                  src={services[activeIndex].heroImage}
                  alt={services[activeIndex].title}
                  className="rm-service-hero-img active"
                  key={activeIndex} /* Key triggers re-run of CSS animation on image */
                />
              </div>

              <div className="rm-service-content-side">
                <div className="rm-service-header">
                  <h3 className="rm-service-title-text">{services[activeIndex].title}</h3>
                  <p className="rm-service-desc">{services[activeIndex].description}</p>
                </div>

                <div className="rm-service-previews-grid">
                  {/* GALLERY: SHOWS THE OTHER 4 SERVICES */}
                  {services
                    .filter((_, idx) => idx !== activeIndex)
                    .map((s, sIdx) => {
                      // Find real index in original services array
                      const realIndex = services.findIndex(item => item.title === s.title);
                      return (
                        <div
                          key={sIdx}
                          className="rm-preview-box"
                          onClick={() => setActiveIndex(realIndex)}
                        >
                          <img src={s.heroImage} alt={s.title} />
                        </div>
                      );
                    })
                  }
                </div>

                <div className="rm-service-footer">
                  <div className="rm-tags-row">
                    {services[activeIndex].tags.map((tag, tIdx) => (
                      <span key={tIdx} className="rm-service-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="rm-action-row">
                    <div className="rm-stats-group">
                      <div className="rm-service-stat">{services[activeIndex].stats[0]}</div>
                      <div className="rm-service-stat secondary">{services[activeIndex].stats[1]}</div>
                    </div>
                    <div className="rm-service-mini-offer">
                      {services[activeIndex].offer}
                    </div>
                    <button className="rm-reach-btn" onClick={openWhatsApp}>contact us</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="rm-nav-btn next" onClick={() => setActiveIndex(prev => (prev === services.length - 1 ? 0 : prev + 1))}>
            ›
          </button>

          <div className="rm-pagination-dots">
            {services.map((_, idx) => (
              <span
                key={idx}
                className={`rm-dot ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: HOW WE WORK & STATS */}
      <section className="rm-how-we-work-section">
        <div className="rm-hww-container">
          {/* Header Row */}
          <div className="rm-hww-header">
            <h2 className="rm-hww-title">Provide the best service with out of the box ideas</h2>
            <p className="rm-hww-desc">
              We are a passionate team dedicated to helping businesses succeed in the digital world. With years of experience and a deep understanding of the online landscape, we stay at the forefront of industry trends.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="rm-hww-grid">
            {/* LEFT STAT CARD */}
            <div className="rm-hww-stat-card">
              <div className="rm-hww-stat-number">19+</div>
              <div className="rm-hww-stat-subtitle">Project finish with superbly</div>

              <div className="rm-hww-avatars">
                <div className="rm-hww-stat-group">
                  <div className="rm-hww-avatar">15K</div>
                  <span className="rm-hww-avatar-label">Users</span>
                </div>
                <div className="rm-hww-stat-group">
                  <div className="rm-hww-avatar">98%</div>
                  <span className="rm-hww-avatar-label">Success</span>
                </div>
                <div className="rm-hww-stat-group">
                  <div className="rm-hww-avatar">24/7</div>
                  <span className="rm-hww-avatar-label">Support</span>
                </div>
                <div className="rm-hww-stat-group">
                  <div className="rm-hww-avatar">50+</div>
                  <span className="rm-hww-avatar-label">Experts</span>
                </div>
                <div className="rm-hww-plus">+</div>
              </div>

              {/* Decorative Curve Background */}
              <div className="rm-hww-card-bg-glow"></div>
            </div>

            {/* RIGHT "HOW WE WORK" CARD WRAPPER */}
            <div className="rm-hww-work-wrapper">
              <div className="rm-hww-work-card">
                {howWeWorkSlides.map((slide, i) => (
                  <div
                    key={i}
                    className={`rm-hww-slide-img ${howWeWorkSlide === i ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.img})` }}
                  />
                ))}

                <div className="rm-hww-slide-overlay"></div>

                <div className="rm-hww-work-content">
                  <h3 className="rm-hww-work-title">{howWeWorkSlides[howWeWorkSlide].title}</h3>
                  <p className="rm-hww-work-desc">{howWeWorkSlides[howWeWorkSlide].desc}</p>
                </div>
              </div>
              {/* Next Arrow Button - Moved outside so the card can be masked underneath it */}
              <div className="rm-hww-play-container">
                <div className="rm-hww-play-btn" onClick={nextSlide}>
                  <span className="rm-play-icon" style={{ marginLeft: 0 }}>&#8594;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFERS FOR OUR SERVICE SECTION (Horizontal Carousel Style) */}
      <section className="rm-designs-section-ref">
        <div className="rm-designs-container-ref">
          <h2 className="rm-offers-title-main">offers for  our service </h2>      {/* 1. BRANDING & IDENTITY */}
          <div className="rm-designs-row">
            <div className="rm-designs-row-header">
              <h2 className="rm-designs-row-title">branding & identity</h2>
              <div className="rm-carousel-nav">
                <button className="rm-nav-btn-mini" onClick={() => scrollRow(rowBrandingRef, 'left')}>‹</button>
                <button className="rm-nav-btn-mini" onClick={() => scrollRow(rowBrandingRef, 'right')}>›</button>
              </div>
            </div>
            <div className="rm-designs-cards-wrapper-four" ref={rowBrandingRef}>
              {[
                { title: "Brand Strategy", img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200", desc: "Long-term planning to develop a successful brand identity.", disc: "20%", offer: "IDENTITY COMBO" },
                { title: "Brand Naming", img: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=1200", desc: "Crafting memorable names that resonate with your audience.", disc: "15%", offer: "NAMING PRO" },
                { title: "Logo Design", img: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?auto=format&fit=crop&q=80&w=1200", desc: "Iconic symbols designed to endure for decades.", disc: "40%", offer: "LOGO MASTER PACK" },
                { title: "Brand Identity Design", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200", desc: "Complete visual identity including typography and palettes.", disc: "50%", offer: "STORYTELLER DEAL" },
                { title: "Brand Guidelines", img: "https://images.unsplash.com/photo-1493421415414-972138aa0d41?auto=format&fit=crop&q=80&w=1200", desc: "Master manual for consistent cross-channel storytelling.", disc: "33%", offer: "STYLE GUIDE PRO" },
                { title: "Business Assets", img: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=1200", desc: "Professional stationery and marketing collateral.", disc: "25%", offer: "ASSET BUNDLE" },
                { title: "Social Media Branding", img: "https://images.unsplash.com/photo-1611162617263-4ec3060a058e?auto=format&fit=crop&q=80&w=1200", desc: "Complete visual kit for social media platforms.", disc: "28%", offer: "SOCIAL BUNDLE" },
                { title: "Rebranding Services", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200", desc: "Refresh and modernize your existing brand identity.", disc: "45%", offer: "REFRESH PACK" }
              ].map((item, idx) => (
                <div className="rm-app-card" key={idx} onClick={() => navigate('/raymartPageFour', { state: { id: "branding-identity" } })} style={{ cursor: 'pointer' }}>
                  <div className="rm-app-card-img" style={{ backgroundImage: `url('${item.img}')` }}></div>
                  <div className="rm-app-card-body">
                    <h3 className="rm-app-card-title">{item.title}</h3>
                    <p className="rm-app-card-desc">{item.desc}</p>
                    <div className="rm-card-offer-footer">
                      <div className="rm-card-badge-box">{item.disc}</div>
                      <div className="rm-card-label-box">{item.offer}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>



          {/* 2. DEVELOPMENT SERVICES */}
          <div className="rm-designs-row" style={{ marginTop: '40px' }}>
            <div className="rm-designs-row-header">
              <h2 className="rm-designs-row-title">development services</h2>
              <div className="rm-carousel-nav">
                <button className="rm-nav-btn-mini" onClick={() => scrollRow(rowDevRef, 'left')}>‹</button>
                <button className="rm-nav-btn-mini" onClick={() => scrollRow(rowDevRef, 'right')}>›</button>
              </div>
            </div>
            <div className="rm-designs-cards-wrapper-four" ref={rowDevRef}>
              {[
                { title: "Website Development", img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200", desc: "Professional web development across all platforms.", disc: "15%", offer: "WEB ENGINE" },
                { title: "E-Commerce Development", img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1200", desc: "Robust and secure online shopping experiences.", disc: "25%", offer: "SHOP PRO" },
                { title: "Mobile App Development", img: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=1200", desc: "Native and hybrid mobile app solutions.", disc: "40%", offer: "MOBILITY PACK" },
                { title: "Custom Web Application", img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1200", desc: "Tailored web apps for business needs.", disc: "10%", offer: "CUSTOM CORE" },
                { title: "Backend Development", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200", desc: "Scalable and reliable server architecture.", disc: "35%", offer: "LOGIC SHIELD" },
                { title: "Database Management", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200", desc: "Efficient and optimized database systems.", disc: "20%", offer: "DATA GUARD" },
                { title: "API & Integrations", img: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=1200", desc: "Seamless third-party and custom API connections.", disc: "30%", offer: "SYNC HUB" },
                { title: "Optimization & Deployment", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200", desc: "Ensuring high performance and perfect deployment.", disc: "50%", offer: "PRO LAUNCH" }
              ].map((item, idx) => (
                <div className="rm-app-card" key={idx} onClick={() => navigate('/raymartPageFour', { state: { id: "development-services" } })} style={{ cursor: 'pointer' }}>
                  <div className="rm-app-card-img" style={{ backgroundImage: `url('${item.img}')` }}></div>
                  <div className="rm-app-card-body">
                    <h3 className="rm-app-card-title">{item.title}</h3>
                    <p className="rm-app-card-desc">{item.desc}</p>
                    <div className="rm-card-offer-footer">
                      <div className="rm-card-badge-box">{item.disc}</div>
                      <div className="rm-card-label-box">{item.offer}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. WEBSITE DEVELOPMENT */}
          <div className="rm-designs-row" style={{ marginTop: '40px' }}>
            <div className="rm-designs-row-header">
              <h2 className="rm-designs-row-title">website development</h2>
              <div className="rm-carousel-nav">
                <button className="rm-nav-btn-mini" onClick={() => scrollRow(rowWebsiteRef, 'left')}>‹</button>
                <button className="rm-nav-btn-mini" onClick={() => scrollRow(rowWebsiteRef, 'right')}>›</button>
              </div>
            </div>
            <div className="rm-designs-cards-wrapper-four" ref={rowWebsiteRef}>
              {[
                { title: "Business Website", img: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&q=80&w=1200", desc: "Professional websites to establish your business online.", disc: "20%", offer: "BIZ STARTER" },
                { title: "Corporate Website", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200", desc: "Scaleable corporate portals for enterprise visibility.", disc: "30%", offer: "CORP PRESTIGE" },
                { title: "Portfolio Website", img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200", desc: "Showcase your work with creative portfolios.", disc: "42%", offer: "CREATIVE HUB" },
                { title: "Landing Page Design", img: "https://images.unsplash.com/photo-1522542550221-31fd19705268?auto=format&fit=crop&q=80&w=1200", desc: "High-conversion landing pages for marketing.", disc: "50%", offer: "CONVERT PRO" },
                { title: "Custom Development", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200", desc: "Web development tailored to your exact requirements.", disc: "15%", offer: "BESPOKE WEB" },
                { title: "Responsive Design", img: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80&w=1200", desc: "Ensuring site look perfect on all devices.", disc: "25%", offer: "MOBILE FOCUS" },
                { title: "SEO Structure", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200", desc: "Search-optimized architecture for growth.", disc: "33%", offer: "SEO BOOSTER" },
                { title: "Website Redesign", img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=1200", desc: "Modernize your outdated site with current tech.", disc: "40%", offer: "REVAMP KIT" }
              ].map((item, idx) => (
                <div className="rm-app-card" key={idx} onClick={() => navigate('/raymartPageFour', { state: { id: "website-development" } })} style={{ cursor: 'pointer' }}>
                  <div className="rm-app-card-img" style={{ backgroundImage: `url('${item.img}')` }}></div>
                  <div className="rm-app-card-body">
                    <h3 className="rm-app-card-title">{item.title}</h3>
                    <p className="rm-app-card-desc">{item.desc}</p>
                    <div className="rm-card-offer-footer">
                      <div className="rm-card-badge-box">{item.disc}</div>
                      <div className="rm-card-label-box">{item.offer}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. E-COMMERCE DEVELOPMENT */}
          <div className="rm-designs-row" style={{ marginTop: '40px' }}>
            <div className="rm-designs-row-header">
              <h2 className="rm-designs-row-title">e-commerce development</h2>
              <div className="rm-carousel-nav">
                <button className="rm-nav-btn-mini" onClick={() => scrollRow(rowEcomRef, 'left')}>‹</button>
                <button className="rm-nav-btn-mini" onClick={() => scrollRow(rowEcomRef, 'right')}>›</button>
              </div>
            </div>
            <div className="rm-designs-cards-wrapper-four" ref={rowEcomRef}>
              {[
                { title: "Online Store Dev", img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1200", desc: "Complete end-to-end online storefront solutions.", disc: "30%", offer: "RETAIL READY" },
                { title: "Shopify / WooCommerce", img: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=1200", desc: "Expert platform customization and store setup.", disc: "20%", offer: "PLATFORM PRO" },
                { title: "Custom E-Commerce", img: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1200", desc: "Unique shopping experiences built from scratch.", disc: "40%", offer: "UNIQUE STORE" },
                { title: "Product Management", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200", desc: "Intuitive systems for inventory and catalogs.", disc: "15%", offer: "INVENTORY HUB" },
                { title: "Cart & Checkout", img: "https://images.unsplash.com/photo-1591084728795-1149f32d9866?auto=format&fit=crop&q=80&w=1200", desc: "Seamless and secure paths to purchase.", disc: "25%", offer: "CHECKOUT PRO" },
                { title: "Order Management", img: "https://images.unsplash.com/photo-1512418490979-92798ccc13fb?auto=format&fit=crop&q=80&w=1200", desc: "Streamlined order tracking and fulfillment.", disc: "35%", offer: "ORDER SHIELD" },
                { title: "Mobile E-Commerce", img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1200", desc: "Optimizing the journey for mobile users.", disc: "45%", offer: "M-COMMERCE" }
              ].map((item, idx) => (
                <div className="rm-app-card" key={idx} onClick={() => navigate('/raymartPageFour', { state: { id: "ecommerce-development" } })} style={{ cursor: 'pointer' }}>
                  <div className="rm-app-card-img" style={{ backgroundImage: `url('${item.img}')` }}></div>
                  <div className="rm-app-card-body">
                    <h3 className="rm-app-card-title">{item.title}</h3>
                    <p className="rm-app-card-desc">{item.desc}</p>
                    <div className="rm-card-offer-footer">
                      <div className="rm-card-badge-box">{item.disc}</div>
                      <div className="rm-card-label-box">{item.offer}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. APP DEVELOPMENT */}
          <div className="rm-designs-row" style={{ marginTop: '40px' }}>
            <div className="rm-designs-row-header">
              <h2 className="rm-designs-row-title">app development</h2>
              <div className="rm-carousel-nav">
                <button className="rm-nav-btn-mini" onClick={() => scrollRow(rowAppRef, 'left')}>‹</button>
                <button className="rm-nav-btn-mini" onClick={() => scrollRow(rowAppRef, 'right')}>›</button>
              </div>
            </div>
            <div className="rm-designs-cards-wrapper-four" ref={rowAppRef}>
              {[
                { title: "Business App Solution", img: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&q=80&w=1200", desc: "Apps designed for core business challenges.", disc: "20%", offer: "BIZ APP KIT" },
                { title: "E-Commerce App", img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=1200", desc: "Mobile shopping platforms for your brand.", disc: "30%", offer: "SHOP APP PRO" },
                { title: "Startup Launch Kit", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200", desc: "MVP development for rapid growth.", disc: "50%", offer: "LAUNCH BUNDLE" },
                { title: "Custom App Dev", img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1200", desc: "Tailored mobile features for specific needs.", disc: "25%", offer: "BESPOKE MOBILE" },
                { title: "Android App Dev", img: "https://images.unsplash.com/photo-1607252682822-d1be8e932abb?auto=format&fit=crop&q=80&w=1200", desc: "High-performance apps for Android.", disc: "33%", offer: "DROID MASTER" },
                { title: "iOS App Dev", img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=1200", desc: "Premium iPhone and iPad app experiences.", disc: "33%", offer: "APPLE CORE" }
              ].map((item, idx) => (
                <div className="rm-app-card" key={idx} onClick={() => navigate('/raymartPageFour', { state: { id: "app-development" } })} style={{ cursor: 'pointer' }}>
                  <div className="rm-app-card-img" style={{ backgroundImage: `url('${item.img}')` }}></div>
                  <div className="rm-app-card-body">
                    <h3 className="rm-app-card-title">{item.title}</h3>
                    <p className="rm-app-card-desc">{item.desc}</p>
                    <div className="rm-card-offer-footer">
                      <div className="rm-card-badge-box">{item.disc}</div>
                      <div className="rm-card-label-box">{item.offer}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6. GRAPHIC DESIGN */}
          <div className="rm-designs-row" style={{ marginTop: '40px' }}>
            <div className="rm-designs-row-header">
              <h2 className="rm-designs-row-title">graphic design</h2>
              <div className="rm-carousel-nav">
                <button className="rm-nav-btn-mini" onClick={() => scrollRow(rowGraphicRef, 'left')}>‹</button>
                <button className="rm-nav-btn-mini" onClick={() => scrollRow(rowGraphicRef, 'right')}>›</button>
              </div>
            </div>
            <div className="rm-designs-cards-wrapper-four" ref={rowGraphicRef}>
              {[
                { title: "Social Media Pack", img: "https://images.unsplash.com/photo-1611162617263-4ec3060a058e?auto=format&fit=crop&q=80&w=1200", desc: "Engaging visuals for social platforms.", disc: "25%", offer: "SOCIAL CONTENT" },
                { title: "Business Branding Kit", img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200", desc: "Unified visual foundation for business.", disc: "40%", offer: "BIZ BRAND" },
                { title: "Marketing Design", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200", desc: "Creative solutions for campaigns.", disc: "20%", offer: "MARKET PRO" },
                { title: "Advertisement Creative", img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200", desc: "High-impact designs for digital ads.", disc: "35%", offer: "AD MASTER" },
                { title: "Logo & Identity", img: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?auto=format&fit=crop&q=80&w=1200", desc: "Perfect logos to build your brand vision.", disc: "50%", offer: "ID PACK" },
                { title: "Corporate Design", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200", desc: "Clean designs for corporate use.", disc: "30%", offer: "CORP KIT" },
                { title: "Print Design Solution", img: "https://images.unsplash.com/photo-1509010144287-db2c14032d84?auto=format&fit=crop&q=80&w=1200", desc: "High-quality designs for offline marketing.", disc: "15%", offer: "PRINT PRO" }
              ].map((item, idx) => (
                <div className="rm-app-card" key={idx} onClick={() => navigate('/raymartPageFour', { state: { id: "graphic-design" } })} style={{ cursor: 'pointer' }}>
                  <div className="rm-app-card-img" style={{ backgroundImage: `url('${item.img}')` }}></div>
                  <div className="rm-app-card-body">
                    <h3 className="rm-app-card-title">{item.title}</h3>
                    <p className="rm-app-card-desc">{item.desc}</p>
                    <div className="rm-card-offer-footer">
                      <div className="rm-card-badge-box">{item.disc}</div>
                      <div className="rm-card-label-box">{item.offer}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 7. UI/UX DESIGN */}
          <div className="rm-designs-row" style={{ marginTop: '40px' }}>
            <div className="rm-designs-row-header">
              <h2 className="rm-designs-row-title">ui/ux design</h2>
              <div className="rm-carousel-nav">
                <button className="rm-nav-btn-mini" onClick={() => scrollRow(rowUiUxRef, 'left')}>‹</button>
                <button className="rm-nav-btn-mini" onClick={() => scrollRow(rowUiUxRef, 'right')}>›</button>
              </div>
            </div>
            <div className="rm-designs-cards-wrapper-four" ref={rowUiUxRef}>
              {[
                { title: "Website UI/UX", img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200", desc: "Engaging and user-centric web interfaces.", disc: "30%", offer: "UI EXPERT" },
                { title: "Mobile UI/UX", img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1200", desc: "Seamless navigation for your mobile users.", disc: "40%", offer: "MOB DESIGN" },
                { title: "Dashboard Design", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200", desc: "Intuitive dashboards for complex data visualization.", disc: "20%", offer: "DASHBOARD PRO" },
                { title: "Product UI/UX", img: "https://images.unsplash.com/photo-1522542550221-31fd19705268?auto=format&fit=crop&q=80&w=1200", desc: "End-to-end user journeys for digital products.", disc: "50%", offer: "UX MASTER" }
              ].map((item, idx) => (
                <div className="rm-app-card" key={idx} onClick={() => navigate('/raymartPageFour', { state: { id: "ui-ux-design" } })} style={{ cursor: 'pointer' }}>
                  <div className="rm-app-card-img" style={{ backgroundImage: `url('${item.img}')` }}></div>
                  <div className="rm-app-card-body">
                    <h3 className="rm-app-card-title">{item.title}</h3>
                    <p className="rm-app-card-desc">{item.desc}</p>
                    <div className="rm-card-offer-footer">
                      <div className="rm-card-badge-box">{item.disc}</div>
                      <div className="rm-card-label-box">{item.offer}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 8. SOFTWARE & TECH SOLUTIONS */}
          <div className="rm-designs-row" style={{ marginTop: '40px' }}>
            <div className="rm-designs-row-header">
              <h2 className="rm-designs-row-title">software & tech solutions</h2>
              <div className="rm-carousel-nav">
                <button className="rm-nav-btn-mini" onClick={() => scrollRow(rowSoftwareRef, 'left')}>‹</button>
                <button className="rm-nav-btn-mini" onClick={() => scrollRow(rowSoftwareRef, 'right')}>›</button>
              </div>
            </div>
            <div className="rm-designs-cards-wrapper-four" ref={rowSoftwareRef}>
              {[
                { title: "Custom Software", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200", desc: "Bespoke software solutions for enterprise.", disc: "10%", offer: "SOFT CORE" },
                { title: "Enterprise Solutions", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200", desc: "Scaleable tech stacks for large organizations.", disc: "25%", offer: "ENT TECH" },
                { title: "ERP & Management", img: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=1200", desc: "Integrated systems for resource planning.", disc: "30%", offer: "ERP MASTER" },
                { title: "Legacy Migration", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200", desc: "Seamless modernization of existing legacy systems.", disc: "40%", offer: "SHIFT PRO" },
                { title: "IT Consulting", img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1200", desc: "Expert advice on technology strategy.", disc: "15%", offer: "TECH GUIDE" },
                { title: "Tech Maintenance", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200", desc: "Ongoing support and updates for your tech.", disc: "50%", offer: "CARE PACK" }
              ].map((item, idx) => (
                <div className="rm-app-card" key={idx} onClick={() => navigate('/raymartPageFour', { state: { id: "software-tech-solutions" } })} style={{ cursor: 'pointer' }}>
                  <div className="rm-app-card-img" style={{ backgroundImage: `url('${item.img}')` }}></div>
                  <div className="rm-app-card-body">
                    <h3 className="rm-app-card-title">{item.title}</h3>
                    <p className="rm-app-card-desc">{item.desc}</p>
                    <div className="rm-card-offer-footer">
                      <div className="rm-card-badge-box">{item.disc}</div>
                      <div className="rm-card-label-box">{item.offer}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 9. DATA ANALYTICS */}
          <div className="rm-designs-row" style={{ marginTop: '40px' }}>
            <div className="rm-designs-row-header">
              <h2 className="rm-designs-row-title">data analytics</h2>
              <div className="rm-carousel-nav">
                <button className="rm-nav-btn-mini" onClick={() => scrollRow(rowDataRef, 'left')}>‹</button>
                <button className="rm-nav-btn-mini" onClick={() => scrollRow(rowDataRef, 'right')}>›</button>
              </div>
            </div>
            <div className="rm-designs-cards-wrapper-four" ref={rowDataRef}>
              {[
                { title: "Business Analytics", img: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=1200", desc: "Insights that drive better business decisions.", disc: "30%", offer: "DATA DRIVE" },
                { title: "Visualization", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200", desc: "Visual representations of your data.", disc: "50%", offer: "VISUAL PRO" },
                { title: "Sales Performance", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200", desc: "Track and optimize your sales ecosystem.", disc: "20%", offer: "SALES MAP" },
                { title: "Customer Insights", img: "https://images.unsplash.com/photo-1518186239717-2e90987c3913?auto=format&fit=crop&q=80&w=1200", desc: "Know your audience through deep data segmentation.", disc: "42%", offer: "USER PULSE" },
                { title: "Marketing Analytics", img: "https://images.unsplash.com/photo-1543286386-713bcd5140ce?auto=format&fit=crop&q=80&w=1200", desc: "Measure the ROI of your marketing spend.", disc: "33%", offer: "AD VALUE" },
                { title: "Predictive AI", img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=1200", desc: "Forecasting the future with smart algorithms.", disc: "25%", offer: "FUTURE MAP" },
                { title: "Reporting Automation", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200", desc: "Automated reports on core business metrics.", disc: "40%", offer: "FLOW REPORT" },
                { title: "Optimization Strategy", img: "https://images.unsplash.com/photo-1504868584819-f8e905b637e6?auto=format&fit=crop&q=80&w=1200", desc: "Strategic plans for data maturity.", disc: "15%", offer: "GROWTH MAP" }
              ].map((item, idx) => (
                <div className="rm-app-card" key={idx} onClick={() => navigate('/raymartPageFour', { state: { id: "data-analytics" } })} style={{ cursor: 'pointer' }}>
                  <div className="rm-app-card-img" style={{ backgroundImage: `url('${item.img}')` }}></div>
                  <div className="rm-app-card-body">
                    <h3 className="rm-app-card-title">{item.title}</h3>
                    <p className="rm-app-card-desc">{item.desc}</p>
                    <div className="rm-card-offer-footer">
                      <div className="rm-card-badge-box">{item.disc}</div>
                      <div className="rm-card-label-box">{item.offer}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 10. AI SERVICES */}
          <div className="rm-designs-row" style={{ marginTop: '40px' }}>
            <div className="rm-designs-row-header">
              <h2 className="rm-designs-row-title">ai services</h2>
              <div className="rm-carousel-nav">
                <button className="rm-nav-btn-mini" onClick={() => scrollRow(rowAIRef, 'left')}>‹</button>
                <button className="rm-nav-btn-mini" onClick={() => scrollRow(rowAIRef, 'right')}>›</button>
              </div>
            </div>
            <div className="rm-designs-cards-wrapper-four" ref={rowAIRef}>
              {[
                { title: "AI Chatbot Solution", img: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=1200", desc: "24/7 smart customer service bots.", disc: "80%", offer: "DOUBLE TOKEN" },
                { title: "AI Automation System", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200", desc: "Intelligent systems to automate manual tasks.", disc: "50%", offer: "BETA ACCESS" },
                { title: "Custom AI Development", img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=1200", desc: "Tailored AI models for unique data challenges.", disc: "25%", offer: "SMART BUILD" },
                { title: "AI-Powered Tools", img: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=1200", desc: "Enhancing productivity with AI tools.", disc: "70%", offer: "TOOL KIT" },
                { title: "Machine Learning", img: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=1200", desc: "High-end ML models for pattern recognition.", disc: "65%", offer: "ML MASTER" },
                { title: "AI Content Generation", img: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=1200", desc: "Scale your creative output with generative AI.", disc: "55%", offer: "CONTENT AI" },
                { title: "AI Intelligence Platform", img: "https://images.unsplash.com/photo-1527430253228-e90371c6a1f9?auto=format&fit=crop&q=80&w=1200", desc: "Unified AI platforms for strategy.", disc: "40%", offer: "CORE AI" }
              ].map((item, idx) => (
                <div className="rm-app-card" key={idx} onClick={() => navigate('/raymartPageFour', { state: { id: "ai-services" } })} style={{ cursor: 'pointer' }}>
                  <div className="rm-app-card-img" style={{ backgroundImage: `url('${item.img}')` }}></div>
                  <div className="rm-app-card-body">
                    <h3 className="rm-app-card-title">{item.title}</h3>
                    <p className="rm-app-card-desc">{item.desc}</p>
                    <div className="rm-card-offer-footer">
                      <div className="rm-card-badge-box">{item.disc}</div>
                      <div className="rm-card-label-box">{item.offer}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 11. CRM SERVICES */}
          <div className="rm-designs-row" style={{ marginTop: '40px' }}>
            <div className="rm-designs-row-header">
              <h2 className="rm-designs-row-title">crm services</h2>
              <div className="rm-carousel-nav">
                <button className="rm-nav-btn-mini" onClick={() => scrollRow(rowCRMRef, 'left')}>‹</button>
                <button className="rm-nav-btn-mini" onClick={() => scrollRow(rowCRMRef, 'right')}>›</button>
              </div>
            </div>
            <div className="rm-designs-cards-wrapper-four" ref={rowCRMRef}>
              {[
                { title: "CRM Implementation", img: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=1200", desc: "Setting up robust CRM systems to manage relations.", disc: "20%", offer: "RELATION SHIP" },
                { title: "Customer Data Platform", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200", desc: "Unified profiles for deep customer understanding.", disc: "30%", offer: "DATA HUB" },
                { title: "Sales Automation", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200", desc: "Automating lead funnels and sales tasks.", disc: "42%", offer: "FUNNEL PRO" },
                { title: "CRM Strategy", img: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=1200", desc: "Expert plans to maximize customer lifetime value.", disc: "50%", offer: "VALUE CORE" },
                { title: "Workflow Automation", img: "https://images.unsplash.com/photo-1518186239717-2e90987c3913?auto=format&fit=crop&q=80&w=1200", desc: "Streamline repetitive tasks within your CRM.", disc: "25%", offer: "FLOW BUILD" },
                { title: "Custom Integration", img: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=1200", desc: "Sync your CRM with other business tools.", disc: "15%", offer: "SYNC PRO" }
              ].map((item, idx) => (
                <div className="rm-app-card" key={idx} onClick={() => navigate('/raymartPageFour', { state: { id: "crm-services" } })} style={{ cursor: 'pointer' }}>
                  <div className="rm-app-card-img" style={{ backgroundImage: `url('${item.img}')` }}></div>
                  <div className="rm-app-card-body">
                    <h3 className="rm-app-card-title">{item.title}</h3>
                    <p className="rm-app-card-desc">{item.desc}</p>
                    <div className="rm-card-offer-footer">
                      <div className="rm-card-badge-box">{item.disc}</div>
                      <div className="rm-card-label-box">{item.offer}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 12. SAAS SERVICES */}
          <div className="rm-designs-row" style={{ marginTop: '40px' }}>
            <div className="rm-designs-row-header">
              <h2 className="rm-designs-row-title">saas service</h2>
              <div className="rm-carousel-nav">
                <button className="rm-nav-btn-mini" onClick={() => scrollRow(rowSaasRef, 'left')}>‹</button>
                <button className="rm-nav-btn-mini" onClick={() => scrollRow(rowSaasRef, 'right')}>›</button>
              </div>
            </div>
            <div className="rm-designs-cards-wrapper-four" ref={rowSaasRef}>
              {[
                { title: "Cloud Launch", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200", desc: "Full-scale cloud deployment for new products.", disc: "20%", offer: "CLOUD READY" },
                { title: "Multi-Tenant", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200", desc: "Build for thousands of users on one platform.", disc: "30%", offer: "SCALE PRO" },
                { title: "Subscription Billing", img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200", desc: "Automate recurrent revenue streams.", disc: "15%", offer: "BILLING HUB" },
                { title: "SaaS Framework", img: "https://images.unsplash.com/photo-1614064641936-e41fa8208453?auto=format&fit=crop&q=80&w=1200", desc: "Perfect interfaces for scaleable software.", disc: "40%", offer: "SaaS STYLE" },
                { title: "Infrastructure", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200", desc: "Reliable foundations for user growth.", disc: "25%", offer: "SKY CORE" },
                { title: "Product Metrics", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200", desc: "Deep analytics for your SaaS product success.", disc: "50%", offer: "VALUE MAP" }
              ].map((item, idx) => (
                <div className="rm-app-card" key={idx} onClick={() => navigate('/raymartPageFour', { state: { id: "saas-services" } })} style={{ cursor: 'pointer' }}>
                  <div className="rm-app-card-img" style={{ backgroundImage: `url('${item.img}')` }}></div>
                  <div className="rm-app-card-body">
                    <h3 className="rm-app-card-title">{item.title}</h3>
                    <p className="rm-app-card-desc">{item.desc}</p>
                    <div className="rm-card-offer-footer">
                      <div className="rm-card-badge-box">{item.disc}</div>
                      <div className="rm-card-label-box">{item.offer}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* MARQUEE SECTION */}
      <div className="rm-marquee-wrapper">
        {/* Scrolling marquee */}
        <div className="rm-marquee-container">
          <div className="rm-marquee-track">
            {[...Array(2)].map((_, i) => (
              <div className="rm-marquee-content" key={i}>
                <span className="rm-marquee-text">Innovate</span>
                <span className="rm-marquee-star">✦</span>
                <span className="rm-marquee-text">Inspire</span>
                <span className="rm-marquee-star">✦</span>
                <span className="rm-marquee-text">Create</span>
                <span className="rm-marquee-star">✦</span>
                <span className="rm-marquee-text">Transform</span>
                <span className="rm-marquee-star">✦</span>
                <span className="rm-marquee-text">Elevate</span>
                <span className="rm-marquee-star">✦</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Line with Center Star */}
        <div className="rm-marquee-bottom-decor">
          <div className="rm-line-left"></div>
          <span className="rm-center-star">✦</span>
          <div className="rm-line-right"></div>
        </div>
      </div>
      {/* DELIVER SECTION */}
      <section className="rm-deliver-section">
        <div className="rm-deliver-container">

          {/* LEFT COLUMN */}
          <div className="rm-deliver-left">
            <h2 className="rm-deliver-title">
              <span className="rm-dl-line">Deliver a high-</span>
              <span className="rm-dl-line">
                quality <span className="rm-dl-highlight rm-dl-hl-top">customer</span>
              </span>
              <span className="rm-dl-line">
                <span className="rm-dl-highlight rm-dl-hl-bottom">experience</span>
                <span className="rm-deliver-arrow-capsule">&#8600;</span>
              </span>
            </h2>
            <p className="rm-deliver-desc">
              Embrace AI chatbot technology in a GPT‑4 supported communication tool to help your customers, empower your team, and reduce your workload.
            </p>

            {/* Integrations Card Layout */}
            <div className="rm-int-card">
              <div className="rm-cut-box-bg">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className={`rm-cut-box rm-cut-box-${i + 1}`}></div>
                ))}
              </div>

              <div className="rm-int-scatter">
                {/* Floating Chips using real logos */}
                <div className="rm-int-chip rm-int-notion">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" alt="Notion" style={{ width: '60%', height: '60%', objectFit: 'contain' }} />
                </div>
                <div className="rm-int-chip rm-int-meet">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Google_Meet_icon_%282020%29.svg" alt="Google Meet" style={{ width: '65%', height: '65%', objectFit: 'contain' }} />
                </div>
                <div className="rm-int-chip rm-int-sprout">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg" alt="Slack" style={{ width: '60%', height: '60%', objectFit: 'contain' }} />
                </div>
                <div className="rm-int-chip rm-int-teams">
                  <img src="https://cdn.worldvectorlogo.com/logos/microsoft-teams-1.svg" alt="Microsoft Teams" style={{ width: '75%', height: '75%', objectFit: 'contain' }} />
                </div>
              </div>

              <div className="rm-int-text-block">
                <p className="rm-deliver-int-caption">Automate your workflow with our integrations</p>
                <p className="rm-deliver-int-sub">Connect Better. Enrich your customer service, sales, marketing, and recruitment flows using our user‑friendly API additions and no‑code integrations.</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — 2 MASONRY COLUMNS */}
          <div className="rm-deliver-right">

            {/* --- INNER LEFT COLUMN --- */}
            <div className="rm-dr-col">
              {/* Card 1: Live Chat + Always Accessible (White) */}
              <div className="rm-dcard rm-dcard-chat-only">
                <div className="rm-chat-header">
                  <div className="rm-chat-user-info">
                    <div className="rm-chat-avatar">JR</div>
                    <div className="rm-chat-meta">
                      <span className="rm-chat-name">James Robinson</span>
                      <span className="rm-chat-status">For Support + Investment</span>
                    </div>
                  </div>
                  <div className="rm-chat-toggle-btn"></div>
                </div>

                <div className="rm-chat-preview">
                  <div className="rm-chat-bubble rm-chat-agent">No worries, we're all clear in a second. Once your sales team goes to the next step, check our Razor Platform GPT help within the app and follow it.</div>
                </div>

                <div className="rm-dcard-footer-text" style={{ marginTop: 'auto' }}>
                  <span className="rm-dcard-tag">Always accessible with our live chat</span>
                  <p className="rm-dcard-sub">In-house Communication with Real-Time Live Chat.</p>
                </div>
              </div>

              {/* Card 2: Centralize (Black) */}
              <div className="rm-dcard rm-dcard-dark">
                <span className="rm-dcard-tag">Centralize Your Communication</span>
                <p className="rm-dcard-sub">Finally respond to chats from all of your channels in one inbox.</p>
                <div className="rm-centralize-icons">
                  <div className="rm-ci rm-ci-wa">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.488-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.052 0C5.495 0 .16 5.333.158 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.332 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                  </div>
                  <div className="rm-ci rm-ci-ig">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.98a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                  </div>
                  <div className="rm-ci rm-ci-tw">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                  </div>
                  <div className="rm-ci rm-ci-ms">
                    <svg viewBox="0 0 23 23" width="22" height="22"><path fill="#f35325" d="M1 1h10v10H1z" /><path fill="#81bc06" d="M12 1h10v10H12z" /><path fill="#05a6f0" d="M1 12h10v10H1z" /><path fill="#ffba08" d="M12 12h10v10H12z" /></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* --- INNER RIGHT COLUMN --- */}
            <div className="rm-dr-col">
              {/* Card 3: AI Boost (White) */}
              <div className="rm-dcard rm-dcard-boost">
                <span className="rm-dcard-big-stat">Boost conversations<br /><b className="rm-stat-green">96%</b> with AI</span>
                <p className="rm-dcard-sub">Our AI-powered chatbots and automation tools are built and are to help.</p>
              </div>

              {/* Card 4: Donut Stat (Lime Green) */}
              <div className="rm-dcard rm-dcard-donut">
                <div className="rm-donut-wrap">
                  <svg viewBox="0 0 100 100" className="rm-donut-svg">
                    <circle cx="50" cy="50" r="38" fill="none" stroke="#e5e7eb" strokeWidth="12" />
                    <circle cx="50" cy="50" r="38" fill="none" stroke="#22c55e" strokeWidth="12"
                      strokeDasharray="80 159" strokeLinecap="round"
                      transform="rotate(-90 50 50)" />
                  </svg>
                  <div className="rm-donut-label">
                    <span className="rm-donut-num">12,5%</span>
                    <span className="rm-donut-caption">CONVERSATION<br />GROWTH</span>
                  </div>
                </div>
                <div className="rm-dcard-footer-info">
                  <span className="rm-dcard-tag">Gain valuable insights from your audience</span>
                  <p className="rm-dcard-sub">Statistics provide valuable insights into how customers interact with Razor AI. Use these deep analytics to continuously refine your automated responses, optimize chat resolution times, and ultimately drive higher customer satisfaction metrics across all your channels.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* REDEFINING EXPERIENCE SECTION */}
      <section className="rm-redefine-section">
        <div className="rm-container">

          {/* Header Row */}
          <div className="rm-redefine-header">
            <div className="rm-rh-left">
              <p>Throughout your customer's entire buying journey, Razor AI allows you to delight them at every step of the way, from their first visit to the final purchase.</p>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button className="rm-rh-btn">Get Started <span>&#8599;</span></button>
              </a>
            </div>
            <div className="rm-rh-right">
              <h2>
                <span className="rm-dl-highlight rm-dl-hl-top">Redefining</span> Conversations <br className="rm-rh-br" />
                and <span className="rm-dl-highlight rm-dl-hl-bot">Enhancing</span> User <br className="rm-rh-br-mobile" />
                experience
                <span className="rm-rh-icon-pill">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M2.5 12s3-7 9.5-7 9.5 7 9.5 7-3 7-9.5 7-9.5-7-9.5-7z" /></svg>
                  &#8594;
                </span>
              </h2>
            </div>
          </div>

          {/* Content Row */}
          <div className="rm-redefine-content">
            {/* Left Tabs */}
            <div className="rm-rc-tabs">
              <div className="rm-rtab active" style={{ cursor: 'pointer' }}>
                <h3>Engage</h3>
                <p>Reach out to visitors proactively using personalized chatbot greetings. Turn website visitors into sales opportunities.</p>
              </div>
              <div className="rm-rtab" style={{ cursor: 'pointer' }}>
                <h3>Nurture</h3>
                <p>Lead customers to a sale through recommended purchases and tailored offerings.</p>
              </div>
              <div className="rm-rtab" style={{ cursor: 'pointer' }}>
                <h3>Qualify</h3>
                <p>Generate and qualify prospects automatically. Transfer high-intent leads to your sales reps in real-time to shorten the sales cycle.</p>
              </div>
            </div>

            {/* Right Graphic */}
            <div className="rm-rc-visual">
              <div className="rm-testi-outer-wrapper">
                <button className="rm-testi-outer-arrow prev" onClick={prevTesti}>&#8592;</button>

                <div className="rm-rv-chat-widget">
                  <div className="rm-rv-chat-header">
                    <div className="rm-rv-ch-avatar" style={{ background: testimonials[testiIndex].color }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>
                    </div>
                    <div className="rm-rv-ch-info">
                      <h4>{testimonials[testiIndex].name}</h4>
                      <span>{testimonials[testiIndex].role}</span>
                    </div>
                    <div className="rm-rv-ch-menu">⋮</div>
                  </div>

                  <div className="rm-rv-chat-body" style={{ minHeight: '260px' }}>
                    <div className="rm-rv-cb-title">
                      <div className="rm-rv-cb-av-small" style={{ background: testimonials[testiIndex].color }}></div>
                      <span className="rm-rv-cb-name">{testimonials[testiIndex].name}</span>
                    </div>
                    <div className="rm-rv-chat-bubble testimonial-fade-in" key={testiIndex}>
                      {testimonials[testiIndex].text}
                    </div>

                    <div className="rm-rv-chat-options">
                      <span className="rm-cv-pill">⭐ Premium Support</span>
                      <span className="rm-cv-pill">⭐ Seamless UI</span>
                      <span className="rm-cv-pill">⭐ ROI Boost</span>
                    </div>

                    <div className="rm-testi-controls">
                      <div className="rm-testi-dots">
                        {testimonials.map((_, i) => (
                          <div
                            key={i}
                            className={`rm-testi-dot ${testiIndex === i ? 'active' : ''}`}
                            onClick={() => setTestiIndex(i)}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <button className="rm-testi-outer-arrow next" onClick={nextTesti}>&#8594;</button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* OUR PRODUCTS GALLERY SECTION (STATIC 5 IN A ROW) */}
      <section className="rm-products-section">
        <div className="rm-products-container">
          <div className="rm-prod-gallery">
            {productCategories.map((cat, idx) => (
              <div key={idx} className="rm-prod-tile">
                <div className="rm-prod-tile-img" style={{ backgroundImage: `url(${cat.img})` }}></div>
                <div className="rm-prod-tile-overlay"></div>
                <div className="rm-prod-tile-content">
                  <h3>{cat.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// SERVICE DATA
const services = [
  {
    title: "branding",
    description: "Craft a unique and powerful identity for your business. We specialize in logo creation, brand guidelines, and high-impact visual strategy.",
    heroImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    tags: ["IDENTITY", "STRATEGY", "LOGOS"],
    stats: ["500+ Brands", "98% Success"],
    offer: "20% OFF TODAY"
  },
  {
    title: "development",
    description: "Turn your complex ideas into high-performance digital products. We develop scalable, clean, and reliable codebases for web and mobile.",
    heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    tags: ["REACT", "BACKEND", "APPS"],
    stats: ["10M+ Users", "99.9% Uptime"],
    offer: "FREE MAINTENANCE"
  },
  {
    title: "website dev",
    description: "Build a stunning online presence with our custom website development. From corporate portals to creative portfolios.",
    heroImage: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=800&q=80",
    tags: ["BUSINESS", "CORPORATE", "SEO"],
    stats: ["1K+ Sites", "SEO Optimized"],
    offer: "SEO AUDIT FREE"
  },
  {
    title: "e-commerce",
    description: "Launch your online store with confidence. We provide end-to-end e-commerce solutions with secure payment integrations.",
    heroImage: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80",
    tags: ["SHOPIFY", "CHECKOUT", "STORE"],
    stats: ["$100M+ GMV", "Secure Pay"],
    offer: "FREE SETUP"
  },
  {
    title: "app dev",
    description: "Innovate on mobile with powerful apps. We create seamless mobile experiences that engage users and drive business value.",
    heroImage: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80",
    tags: ["IOS", "ANDROID", "FLUTTER"],
    stats: ["50+ Apps", "High Retention"],
    offer: "PROTOTYPE DEAL"
  },
  {
    title: "graphic design",
    description: "Visually captivating designs that speak your brand's language. From social media kits to high-end corporate identity.",
    heroImage: "https://images.unsplash.com/photo-1611162617263-4ec3060a058e?auto=format&fit=crop&q=80&w=800",
    tags: ["SOCIAL", "BRAND", "ADS"],
    stats: ["2K+ Projects", "Expert Team"],
    offer: "BRAND KIT BUNDLE"
  },
  {
    title: "ui/ux design",
    description: "User-centric design solutions that prioritize intuitive navigation and aesthetic excellence across all digital touchpoints.",
    heroImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    tags: ["UI", "UX", "RESEARCH"],
    stats: ["300+ Products", "Top Rated"],
    offer: "UI AUDIT PACK"
  },
  {
    title: "software & tech",
    description: "Custom enterprise software and tech solutions built to scale. From ERP systems to legacy platform modernization.",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    tags: ["ERP", "LEGACY", "SOFT"],
    stats: ["100+ Systems", "Scalable"],
    offer: "CONSULTING KIT"
  },
  {
    title: "data analytics",
    description: "Transform raw data into actionable insights. We provide deep data visualization and predictive modeling for strategy.",
    heroImage: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800",
    tags: ["DATA", "BI", "NLP"],
    stats: ["500+ Reports", "Accuracy"],
    offer: "FREE HYPOTHESIS"
  },
  {
    title: "ai products",
    description: "Leverage the power of AI to automate and innovate. Smart chatbots, machine learning, and neural network solutions.",
    heroImage: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800",
    tags: ["LLM", "CHATBOTS", "ML"],
    stats: ["1M+ Tokens", "Smart Bot"],
    offer: "BETA ACCESS"
  },
  {
    title: "crm service",
    description: "Optimize your customer relationship management with our tailored CRM solutions and automated sales funnels.",
    heroImage: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800",
    tags: ["CRM", "SALES", "AUTOMATE"],
    stats: ["50+ CRM Setups", "Loyalty"],
    offer: "FUNNEL SETUP"
  },
  {
    title: "saas service",
    description: "Launch and scale your SaaS products with our expert cloud architecture and multi-tenant billing solutions.",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    tags: ["SAAS", "CLOUD", "BILLING"],
    stats: ["20+ SaaS Launch", "Growth"],
    offer: "SKY LAUNCH KIT"
  }
];

export default RayMartPageTwo;
