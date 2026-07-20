import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaRocket } from 'react-icons/fa';

export const Navbar = ({ onOpenApply }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredSection, setHoveredSection] = useState(null);

  const menuItems = [
    { label: 'Home',        id: 'home' },
    { label: 'Programs',    id: 'courses' },
    { label: 'Instructors', id: 'mentors' },
    { label: 'Reviews',     id: 'testimonials' },
    { label: 'Contact',     id: 'cta' },
  ];

  const handleScrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <header
      className="absolute top-0 left-0 w-full z-[100] transition-all duration-300"
      style={{
        background: 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid #ECEEF5',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-[68px]">

        {/* Logo */}
        <button
          onClick={() => handleScrollTo('home')}
          className="flex items-center bg-transparent border-none cursor-pointer"
          style={{ padding: 0 }}
        >
          <img
            src="/01.png"
            alt="Engloray"
            className="h-15 w-20 object-contain"
            style={{ display: 'block' }}
          />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            const isHovered = hoveredSection === item.id;
            const isHighlighted = isHovered || (!hoveredSection && isActive);

            return (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  color: isHighlighted ? '#6C4CF1' : '#4B5563',
                  background: isHighlighted ? 'rgba(108, 76, 241, 0.08)' : 'transparent',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '100px',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease, color 0.15s ease',
                }}
                onMouseEnter={() => setHoveredSection(item.id)}
                onMouseLeave={() => setHoveredSection(null)}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenApply}
            className="btn-purple"
            style={{ padding: '10px 22px', fontSize: '0.85rem' }}
          >
            <FaRocket style={{ fontSize: '0.75rem' }} />
            Apply Now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden border-none cursor-pointer rounded-xl p-2 transition-colors"
          style={{
            background: mobileOpen ? 'rgba(108, 76, 241, 0.1)' : 'transparent',
            color: '#1F2937',
          }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              top: '76px',
              left: '16px',
              right: '16px',
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(20px)',
              border: '1px solid #ECEEF5',
              borderRadius: '20px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              boxShadow: '0 20px 60px rgba(108, 76, 241, 0.12)',
              zIndex: 99,
            }}
          >
            {menuItems.map((item, idx) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => handleScrollTo(item.id)}
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: '1rem',
                  color: '#1F2937',
                  background: 'transparent',
                  border: 'none',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(108, 76, 241, 0.07)';
                  e.currentTarget.style.color = '#6C4CF1';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#1F2937';
                }}
              >
                {item.label}
              </motion.button>
            ))}
            <div style={{ height: '1px', background: '#ECEEF5', margin: '8px 0' }} />
            <button
              onClick={() => { setMobileOpen(false); onOpenApply(); }}
              className="btn-purple"
              style={{ width: '100%', padding: '13px 24px', marginTop: '4px' }}
            >
              <FaRocket style={{ fontSize: '0.8rem' }} />
              Apply Now — It's Free
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
