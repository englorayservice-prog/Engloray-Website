import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStore, faRobot, faWandMagicSparkles, faBriefcase,
  faPhone, faLocationDot, faEnvelope, faClock, faShieldHalved, faTruckFast
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF, faXTwitter, faInstagram, faYoutube, faPaypal
} from '@fortawesome/free-brands-svg-icons';
import paymentImg from '../../assets/payment.png';
import './RayMartFooter.css';

const RayMartFooter = () => {
  const navigate = useNavigate();
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [showAboutStore, setShowAboutStore] = useState(false);

  return (
    <>
      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer className="rm-footer">
        {/* Top strip accent */}
        <div className="rm-footer-accent" />

        {/* Main 5-column grid */}
        <div className="rm-footer-main">

          {/* Col 1 – Brand */}
          <div className="rm-footer-brand-col">
            <h4 className="rm-footer-brand">RAYMART — 1ST TECH ONLINE MARKET</h4>
            <p className="rm-footer-hotline-label">CUSTOMER CARE · 24/7</p>

            <div className="rm-footer-contact-list" style={{ display: 'flex', flexDirection: 'column', gap: '11px', margin: '14px 0 20px' }}>
              <a href="tel:+916381769909" className="rm-footer-contact-row" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', textDecoration: 'none', color: '#334155' }}>
                <FontAwesomeIcon icon={faPhone} style={{ fontSize: '0.85rem', marginTop: '3px', color: '#ff6b6b', width: '14px' }} />
                <span style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>6381769909 &nbsp;/&nbsp; 6369945920</span>
              </a>
              <a href="mailto:support@raymart.in" className="rm-footer-contact-row" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', textDecoration: 'none', color: '#334155' }}>
                <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '0.85rem', marginTop: '3px', color: '#ff6b6b', width: '14px' }} />
                <span style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>support@raymart.in</span>
              </a>
              <div className="rm-footer-contact-row" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#334155' }}>
                <FontAwesomeIcon icon={faLocationDot} style={{ fontSize: '0.85rem', marginTop: '3px', color: '#ff6b6b', width: '14px' }} />
                <span style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Raymart Fulfilment Hub, Near Fenner,<br />Madurai, Tamil Nadu 625009</span>
              </div>
              <div className="rm-footer-contact-row" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#334155' }}>
                <FontAwesomeIcon icon={faClock} style={{ fontSize: '0.85rem', marginTop: '3px', color: '#ff6b6b', width: '14px' }} />
                <span style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Mon – Sat, 9:00 AM – 9:00 PM IST</span>
              </div>
            </div>

            <div className="rm-footer-trust-badges" style={{ display: 'flex', gap: '18px', margin: '4px 0 20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FontAwesomeIcon icon={faShieldHalved} style={{ fontSize: '0.85rem', color: '#0f172a' }} />
                <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>Secure Payments</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FontAwesomeIcon icon={faTruckFast} style={{ fontSize: '0.85rem', color: '#0f172a' }} />
                <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>Pan-India Delivery</span>
              </div>
            </div>

            <div className="rm-footer-socials" style={{ margin: '24px 0', display: 'flex', gap: '20px', alignItems: 'center' }}>
              <a href="https://x.com/engloraytech" target="_blank" rel="noopener noreferrer" style={{ transition: 'transform 0.2s ease', display: 'inline-flex' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                <FontAwesomeIcon icon={faXTwitter} style={{ color: '#000000', fontSize: '1.8rem', cursor: 'pointer' }} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61583616114977" target="_blank" rel="noopener noreferrer" style={{ transition: 'transform 0.2s ease', display: 'inline-flex' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                <FontAwesomeIcon icon={faFacebookF} style={{ color: '#1877F2', fontSize: '1.8rem', cursor: 'pointer' }} />
              </a>
              <a href="https://www.instagram.com/engloray/" target="_blank" rel="noopener noreferrer" style={{ transition: 'transform 0.2s ease', display: 'inline-flex' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                <FontAwesomeIcon icon={faInstagram} style={{ color: '#E1306C', fontSize: '1.8rem', cursor: 'pointer' }} />
              </a>
              <a href="https://www.youtube.com/@engloray" target="_blank" rel="noopener noreferrer" style={{ transition: 'transform 0.2s ease', display: 'inline-flex' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                <FontAwesomeIcon icon={faYoutube} style={{ color: '#FF0000', fontSize: '1.8rem', cursor: 'pointer' }} />
              </a>
              <a href="https://www.paypal.com" target="_blank" rel="noopener noreferrer" style={{ transition: 'transform 0.2s ease', display: 'inline-flex' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                <FontAwesomeIcon icon={faPaypal} style={{ color: '#003087', fontSize: '1.8rem', cursor: 'pointer' }} />
              </a>
            </div>
          </div>

          {/* Col 2 – Services */}
          <div className="rm-footer-col">
            <h5 className="rm-footer-col-title">SERVICES</h5>
            {[
              { name: 'Branding & Identity', path: '/brandingIdentityPage' },
              { name: 'UI/UX Design', path: '/uiuxDesignPage' },
              { name: 'Website Development', path: '/websiteDevelopmentPage' },
              { name: 'App Development', path: '/appDevelopmentPage' },
              { name: 'Advertising', path: null }
            ].map(item => (
              <p
                key={item.name}
                className="rm-footer-link"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  if (item.path) {
                    navigate(item.path);
                  } else {
                    setShowComingSoon(true);
                  }
                }}
              >
                {item.name}
              </p>
            ))}

            <h5 className="rm-footer-col-title" style={{ marginTop: '28px' }}>PRODUCTS</h5>
            {[
              { name: 'AI Products', path: '/aiProductPage' },
              { name: 'SaaS Tools', path: '/saasPage' },
              { name: 'Office Software', path: null }
            ].map(item => (
              <p
                key={item.name}
                className="rm-footer-link"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  if (item.path) {
                    navigate(item.path);
                  } else {
                    setShowComingSoon(true);
                  }
                }}
              >
                {item.name}
              </p>
            ))}
          </div>

          {/* Col 3 – Company */}
          <div className="rm-footer-col">
            <h5 className="rm-footer-col-title">COMPANY</h5>
            {[
              { name: 'About Store', action: 'about' },
              { name: 'Contact', path: '/contactPage' },
              { name: 'Career', path: '/CareersPage' },
              { name: 'Blog', path: null },
              { name: 'Sitemap', path: null },
              { name: 'Store Locations', path: null }
            ].map(item => (
              <p
                key={item.name}
                className="rm-footer-link"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  if (item.action === 'about') {
                    setShowAboutStore(true);
                  } else if (item.path) {
                    navigate(item.path);
                  } else {
                    setShowComingSoon(true);
                  }
                }}
              >
                {item.name}
              </p>
            ))}
          </div>

          {/* Col 4 – Help Center */}
          <div className="rm-footer-col">
            <h5 className="rm-footer-col-title">HELP CENTER</h5>
            {[
              { name: 'Customer Service', path: '/contactPage' },
              { name: 'Policy', path: '/privacyPolicyPage' },
              { name: 'Terms & Conditions', path: '/termsAndServicesPage' },
              { name: 'Track Order', path: null },
              { name: 'FAQs', path: '/raymartPageFour' },
              { name: 'My Account', path: null },
              { name: 'Product Support', path: null }
            ].map(item => (
              <p
                key={item.name}
                className="rm-footer-link"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  if (item.path) {
                    navigate(item.path);
                  } else {
                    setShowComingSoon(true);
                  }
                }}
              >
                {item.name}
              </p>
            ))}
          </div>

          {/* Col 5 – Partner */}
          <div className="rm-footer-col">
            <h5 className="rm-footer-col-title">PARTNER</h5>
            {[
              { name: 'Become Seller', path: null, ext: 'https://wa.me/916381769909' },
              { name: 'All Seller', path: null },
              { name: 'Advertise', path: null },
              { name: 'Partnerships', path: null, ext: 'https://wa.me/916381769909' }
            ].map(item => (
              <p
                key={item.name}
                className="rm-footer-link"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  if (item.ext) {
                    window.open(item.ext, '_blank');
                  } else if (item.path) {
                    navigate(item.path);
                  } else {
                    setShowComingSoon(true);
                  }
                }}
              >
                {item.name}
              </p>
            ))}
          </div>
        </div>

        {/* Newsletter bar */}
        <div className="rm-footer-newsletter" style={{
          display: 'grid',
          gridTemplateColumns: '2fr 4.4fr',
          gap: '40px',
          padding: '10px 72px 48px',
          borderTop: '1px solid #f1f5f9',
          alignItems: 'flex-start'
        }}>
          <div className="rm-footer-lang-row" style={{ display: 'flex', gap: '10px' }}>
            <button className="rm-footer-lang-btn">USD ▾</button>
            <button className="rm-footer-lang-btn">🇺🇸 Eng ▾</button>
          </div>

          <div className="rm-footer-newsletter-content" style={{ textAlign: 'left' }}>
            <p className="rm-footer-newsletter-label" style={{ margin: '0 0 20px', fontWeight: '800', textTransform: 'uppercase', textAlign: 'left' }}>
              SUBSCRIBE &amp; GET <span className="rm-footer-newsletter-highlight">10% OFF</span> FOR YOUR FIRST ORDER
            </p>
            <div className="rm-footer-newsletter-form" style={{ maxWidth: '100%', marginBottom: '12px', display: 'flex' }}>
              <input type="email" placeholder="Enter your email address" className="rm-footer-email-input" style={{ textAlign: 'left' }} />
              <button className="rm-footer-subscribe-btn">SUBSCRIBE</button>
            </div>
            <p className="rm-footer-newsletter-note" style={{ textAlign: 'left', fontSize: '0.75rem' }}>
              By subscribing, you're agreed to our <a href="#" onClick={(e) => { e.preventDefault(); navigate('/privacyPolicyPage'); }} className="rm-footer-policy-link" style={{ cursor: 'pointer' }}>Policy</a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="rm-footer-bottom" style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>© 2026 Raymart. All Rights Reserved.</span>
          <div className="rm-footer-payments" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={paymentImg} alt="Payment Methods" className="rm-payment-img" style={{ height: '24px', width: 'auto', transform: 'scale(5)', objectFit: 'contain' }} />
          </div>
          <a href="#" className="rm-footer-mobile-app">Mobile App</a>
        </div>
      </footer>

      {/* Coming Soon Modal */}
      {showComingSoon && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          zIndex: 99999, fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          <div style={{
            background: '#ffffff', borderRadius: '28px', padding: '44px 36px',
            textAlign: 'center', boxShadow: '0 24px 64px rgba(0, 0, 0, 0.4)',
            maxWidth: '420px', width: '90%', border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px'
          }}>
            <FontAwesomeIcon icon={faStore} style={{ fontSize: '4rem', color: '#0f172a', marginBottom: '10px' }} />
            <h3 style={{ fontSize: '1.9rem', fontWeight: '800', color: '#0f172a', margin: '0', letterSpacing: '-0.025em' }}>Coming Soon!</h3>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.6', margin: '0 0 16px' }}>
              We are crafting something amazing. This feature will be live in our upcoming update!
            </p>
            <button
              onClick={() => setShowComingSoon(false)}
              style={{
                background: '#000000', color: '#ffffff', border: 'none',
                padding: '14px 40px', borderRadius: '50px', fontWeight: '700',
                fontSize: '1rem', cursor: 'pointer', boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
                transition: 'all 0.2s ease', width: '100%'
              }}
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      {/* About Store Modal */}
      {showAboutStore && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          zIndex: 99999, fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          <div style={{
            background: '#ffffff', borderRadius: '28px', padding: '40px 36px',
            boxShadow: '0 24px 64px rgba(0, 0, 0, 0.4)', maxWidth: '480px', width: '90%',
            border: '1px solid rgba(255,255,255,0.1)', display: 'flex',
            flexDirection: 'column', alignItems: 'center', gap: '16px'
          }}>
            <FontAwesomeIcon icon={faStore} style={{ fontSize: '4.2rem', color: '#0f172a', marginBottom: '10px' }} />
            <h3 style={{ fontSize: '1.9rem', fontWeight: '800', color: '#0f172a', margin: '0', letterSpacing: '-0.025em' }}>About Raymart Store</h3>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.6', textAlign: 'center', margin: '0 0 10px' }}>
              <strong>Raymart</strong> is the ultimate, next-generation <strong>1st Tech Online Marketplace</strong> powered by Engloray.
            </p>
            <div style={{
              width: '100%', textAlign: 'left', background: '#f8fafc',
              borderRadius: '16px', padding: '20px', display: 'flex',
              flexDirection: 'column', gap: '12px', boxSizing: 'border-box'
            }}>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faStore} style={{ color: '#0f172a', width: '20px', fontSize: '1.1rem' }} />
                <span style={{ fontSize: '0.95rem', color: '#334155' }}><strong>E-Commerce Solutions:</strong> High-converting stores built for retail.</span>
              </div>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faRobot} style={{ color: '#0f172a', width: '20px', fontSize: '1.1rem' }} />
                <span style={{ fontSize: '0.95rem', color: '#334155' }}><strong>AI Assistants:</strong> Automation to boost conversions.</span>
              </div>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faWandMagicSparkles} style={{ color: '#0f172a', width: '20px', fontSize: '1.1rem' }} />
                <span style={{ fontSize: '0.95rem', color: '#334155' }}><strong>Branding Design:</strong> Fast identity packages under 48 hours.</span>
              </div>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faBriefcase} style={{ color: '#0f172a', width: '20px', fontSize: '1.1rem' }} />
                <span style={{ fontSize: '0.95rem', color: '#334155' }}><strong>ERP & CRM:</strong> Unified analytics and streamline operations.</span>
              </div>
            </div>
            <button
              onClick={() => setShowAboutStore(false)}
              style={{
                background: '#000000', color: '#ffffff', border: 'none',
                padding: '14px 40px', borderRadius: '50px', fontWeight: '700',
                fontSize: '1rem', cursor: 'pointer', boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
                transition: 'all 0.2s ease', width: '100%', marginTop: '8px'
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default RayMartFooter;