import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaRocket, FaPlay, FaStar, FaGraduationCap, FaBriefcase,
  FaCode, FaLaptopCode, FaCheckCircle, FaAward, FaUsers, FaArrowRight, FaClock, FaCertificate, FaBuilding
} from 'react-icons/fa';
import howItWorksVideo from '../../assets/Video.mp4';

// Import local student feedback avatars
import std1 from '../../assets/Feed back std/Std 1.avif';
import std2 from '../../assets/Feed back std/Std 2.jpg';
import std3 from '../../assets/Feed back std/Std 3.jpg';
import std4 from '../../assets/Feed back std/Std 4.jpg';
import std5 from '../../assets/Feed back std/Std 5.jpg';
import std6 from '../../assets/Feed back std/Std 6.jpg';

const alumniAvatars = [std1, std2, std3, std4, std5];

const pillBadges = [
  { icon: <FaCode />, label: 'Live Coding' },
  { icon: <FaBriefcase />, label: 'Internships' },
  { icon: <FaAward />, label: 'Certification' },
  { icon: <FaUsers />, label: '1-on-1 Mentors' },
];

const stats = [
  { value: '2,400+', label: 'Students' },
  { value: '96%', label: 'Placement' },
  { value: '150+', label: 'Partners' },
];

const recentPlacements = [
  "Aman Sharma placed at Zoho • 8.5 LPA",
  "Priya Patel placed at Freshworks",
  "Karan Malhotra placed at TCS • 6.5 LPA",
  "Sneha Reddy placed at Soliton • 5.5 LPA",
  "Nithin Rao placed at Hexaware • 5.8 LPA",
  "Deepika Ramanujam matching interviews..."
];

/* ── Animated Counter ────────────────────────────────────────────── */
const AnimatedCounter = ({ value }) => {
  const [display, setDisplay] = useState('0');
  useEffect(() => {
    const num = parseInt(value.replace(/\D/g, ''));
    const suffix = value.replace(/[\d,]/g, '');
    let start = 0;
    const steps = 50;
    const timer = setInterval(() => {
      start += Math.ceil(num / steps);
      if (start >= num) { start = num; clearInterval(timer); }
      setDisplay(start.toLocaleString() + suffix);
    }, 30);
    return () => clearInterval(timer);
  }, [value]);
  return <span>{display}</span>;
};

/* ── Main Hero Component ─────────────────────────────────────────── */
export const Hero = ({ onOpenApply }) => {
  const [videoOpen, setVideoOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(1); // Default active interactive step: 1: Learning, 2: Internship, 3: Placed
  const [tickerIndex, setTickerIndex] = useState(0);

  // Auto-switch placement ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % recentPlacements.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: 'auto',
        background: '#FFFFFF',
        overflow: 'hidden',
        paddingTop: '80px',
        paddingBottom: '20px',
      }}
    >
      {/* Background mesh gradient */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        background: `
          radial-gradient(ellipse 60% 50% at 80% 20%, rgba(108,76,241,0.07) 0%, transparent 70%),
          radial-gradient(ellipse 40% 40% at 20% 80%, rgba(132,204,22,0.05) 0%, transparent 60%),
          radial-gradient(ellipse 50% 60% at 50% 0%, rgba(79,70,229,0.04) 0%, transparent 60%)
        `,
      }} />

      {/* Dot grid pattern */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: 'radial-gradient(circle, rgba(108,76,241,0.04) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
      }} />

      {/* Main grid — anchored so it stays within 100vh */}
      <div
        style={{
          position: 'relative', zIndex: 1,
          maxWidth: '95%', margin: '0 auto',
          width: '100%',
          minWidth: 0,
          padding: '10px 24px 10px',
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1.15fr) minmax(0,0.85fr)',
          gap: '36px',
          alignItems: 'center',
          height: 'auto',
        }}
        className="hero-grid"
      >
        {/* ── LEFT COLUMN ─────────────────────────────────────── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="badge-lime" style={{ display: 'inline-flex' }}>
              <FaGraduationCap />
              Tamilnadu's #1 Student Career Platform
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <h1 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.9rem, 4.2vw, 3.1rem)',
              lineHeight: 1.1,
              color: '#1F2937',
              margin: 0,
            }}>
              Learn.{' '}
              <span style={{
                background: 'linear-gradient(135deg, #6C4CF1 0%, #4F46E5 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Build.</span>
              <br />
              Get{' '}
              <span style={{
                background: 'linear-gradient(135deg, #84CC16 0%, #65a30d 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Hired.</span>
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{
              fontSize: '0.92rem',
              color: '#4B5563',
              lineHeight: 1.6,
              margin: 0,
              maxWidth: '450px',
            }}
          >
            Transform your career with hands-on training, real internships,
            industry projects and 1-on-1 mentorship — designed to get you placed.
          </motion.p>

          {/* Pill badges row ── compact 4 items */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.22 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}
          >
            {pillBadges.map((b, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.22 + i * 0.05 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '5px',
                  background: '#F7F8FC', color: '#4B5563',
                  border: '1px solid #ECEEF5', borderRadius: '100px',
                  padding: '5px 12px', fontSize: '0.74rem', fontWeight: 600,
                }}
              >
                <span style={{ color: '#6C4CF1', fontSize: '0.65rem' }}>{b.icon}</span>
                {b.label}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <button
              onClick={onOpenApply}
              className="btn-purple"
              style={{ padding: '11px 26px', fontSize: '0.88rem' }}
            >
              <FaRocket style={{ fontSize: '0.78rem' }} />
              Start Your Journey
            </button>
            <button
              onClick={() => setVideoOpen(true)}
              className="btn-outline-purple"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '10px 20px' }}
            >
              <span style={{
                width: '24px', height: '24px', borderRadius: '50%',
                background: 'rgba(108,76,241,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <FaPlay style={{ fontSize: '0.5rem', marginLeft: '2px', color: '#6C4CF1' }} />
              </span>
              How It Works
            </button>
          </motion.div>

          {/* Social proof + stats in one compact row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              display: 'flex', alignItems: 'center', gap: '20px',
              paddingTop: '10px', borderTop: '1px solid #ECEEF5',
              flexWrap: 'wrap',
            }}
          >
            {/* Avatars + rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ display: 'flex' }}>
                {alumniAvatars.map((imgSrc, i) => (
                  <img
                    key={i} src={imgSrc} alt={`Alumni student feedback ${i + 1}`}
                    style={{
                      width: '30px', height: '30px', borderRadius: '50%',
                      border: '2px solid #fff', objectFit: 'cover',
                      marginLeft: i > 0 ? '-8px' : 0,
                      boxShadow: '0 1px 6px rgba(0,0,0,0.1)',
                    }}
                  />
                ))}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                  {[1, 2, 3, 4, 5].map(s => (
                    <FaStar key={s} style={{ color: '#F59E0B', fontSize: '0.65rem' }} />
                  ))}
                  <span style={{ fontWeight: 700, fontSize: '0.78rem', color: '#1F2937', marginLeft: '3px' }}>4.9</span>
                </div>
                <div style={{ fontSize: '0.68rem', color: '#6B7280' }}>2,400+ students</div>
              </div>
            </div>

            {/* Divider */}
            <div style={{ width: '1px', height: '36px', background: '#ECEEF5' }} />

            {/* Stats */}
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{
                  fontWeight: 800, fontSize: '1.1rem',
                  background: 'linear-gradient(135deg, #6C4CF1, #4F46E5)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  <AnimatedCounter value={s.value} />
                </div>
                <div style={{ fontSize: '0.65rem', color: '#6B7280', fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN: Interactive Student Placement Hub Simulator ─────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          className="hero-right-col"
        >
          {/* Dashboard Hub Window */}
          <div style={{
            background: '#FFFFFF',
            border: '1.5px solid #ECEEF5',
            borderRadius: '24px',
            boxShadow: '0 20px 48px rgba(108,76,241,0.06), 0 4px 12px rgba(0,0,0,0.01)',
            overflow: 'hidden',
            width: '100%',
            maxWidth: '410px',
            position: 'relative',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}>
            {/* Unified Header & Profile Row (Highly Compact) */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid #ECEEF5',
              paddingBottom: '10px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #6C4CF1, #4F46E5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontSize: '0.8rem',
                  flexShrink: 0
                }}>
                  <FaGraduationCap />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <h4 style={{ margin: 0, fontSize: '0.78rem', fontWeight: 800, color: '#1F2937' }}>
                    Our Career Portal
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.64rem', color: '#6B7280', fontWeight: 600 }}>
                    Active Learning Tracker
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{
                  width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#10B981',
                  display: 'inline-block', animation: 'pulse-slow 1.2s ease-in-out infinite'
                }} />
                <span style={{ fontSize: '0.6rem', color: '#047857', fontWeight: 800, textTransform: 'uppercase', background: '#ECFDF5', padding: '2px 6px', borderRadius: '100px' }}>
                  92% Ready
                </span>
              </div>
            </div>

            {/* Interactive Timeline Tabs (Connected Node Flow) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', position: 'relative', textAlign: 'left' }}>

              {/* Connecting line helper */}
              <div style={{
                position: 'absolute',
                left: '20px',
                top: '25px',
                bottom: '25px',
                width: '2px',
                background: 'linear-gradient(to bottom, #84CC16 0%, #6C4CF1 50%, #ECEEF5 100%)',
                zIndex: 0
              }} />

              {[
                {
                  id: 1,
                  phase: 'Phase 01',
                  title: 'Deep Tech Training',
                  status: 'Completed',
                  color: '#84CC16',
                  bgColor: 'rgba(132, 204, 22, 0.06)',
                  icon: <FaCode style={{ fontSize: '0.65rem' }} />
                },
                {
                  id: 2,
                  phase: 'Phase 02',
                  title: 'Interactive Internship',
                  status: 'In Progress',
                  color: '#6C4CF1',
                  bgColor: 'rgba(108, 76, 241, 0.06)',
                  icon: <FaLaptopCode style={{ fontSize: '0.65rem' }} />
                },
                {
                  id: 3,
                  phase: 'Phase 03',
                  title: 'Corporate Referral',
                  status: 'Direct Pool',
                  color: '#F59E0B',
                  bgColor: 'rgba(245, 158, 11, 0.06)',
                  icon: <FaRocket style={{ fontSize: '0.65rem' }} />
                }
              ].map((step) => {
                const isSelected = activeStep === step.id;
                return (
                  <motion.div
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    whileHover={{ scale: 1.015 }}
                    style={{
                      display: 'flex',
                      gap: '10px',
                      alignItems: 'center',
                      background: isSelected ? '#FFFFFF' : '#F9FAFB',
                      border: isSelected ? `2px solid ${step.color}` : '1.5px solid #F1F5F9',
                      borderRadius: '12px',
                      padding: '8px 12px',
                      cursor: 'pointer',
                      zIndex: 1,
                      position: 'relative',
                      boxShadow: isSelected ? `0 6px 16px ${step.color}08` : 'none',
                      transition: 'border 0.2s ease, background 0.2s ease'
                    }}
                  >
                    {/* Node circle */}
                    <div style={{
                      width: '22px', height: '22px', borderRadius: '50%',
                      background: step.bgColor, color: step.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {step.icon}
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.58rem', fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase' }}>
                        {step.phase}
                      </div>
                      <div style={{ fontSize: '0.76rem', fontWeight: 800, color: '#1F2937' }}>
                        {step.title}
                      </div>
                    </div>

                    <span style={{
                      fontSize: '0.55rem', fontWeight: 800, color: step.color,
                      padding: '1px 6px', borderRadius: '4px', background: step.bgColor
                    }}>
                      {step.status}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Simulated Live Output Screen based on Active Step */}
            <div style={{
              background: '#070D19',
              borderRadius: '12px',
              padding: '10px 12px',
              textAlign: 'left',
              fontFamily: 'monospace',
              fontSize: '0.7rem',
              lineHeight: 1.5,
              color: '#ECEEF5',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '90px',
              border: '1px solid rgba(255,255,255,0.05)',
            }}>
              {/* Header inside screen */}
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '4px', marginBottom: '6px' }}>
                <span style={{ color: '#6C4CF1', fontSize: '0.58rem', fontWeight: 'bold' }}>WORKSPACE_OUTPUT.log</span>
                <span style={{ color: '#84CC16', fontSize: '0.58rem' }}>● RUNNING</span>
              </div>

              <AnimatePresence mode="wait">
                {activeStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <div style={{ color: '#84CC16' }}>$ npm run compile --prod</div>
                    <div style={{ color: '#9CA3AF' }}>[info] Indexing Java modules...</div>
                    <div style={{ color: '#38BDF8' }}>✓ Build successful. 120 test cases cleared. [1.4s]</div>
                  </motion.div>
                )}

                {activeStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <div style={{ color: '#6C4CF1' }}>$ engloray-internship --get-active</div>
                    <div style={{ color: '#9CA3AF' }}>[active] Module: API integration</div>
                    <div style={{ color: '#F43F5E' }}>✦ Deployed interactive build to staging environment</div>
                  </motion.div>
                )}

                {activeStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <div style={{ color: '#F59E0B' }}>$ placement-engine --check-referrals</div>
                    <div style={{ color: '#9CA3AF' }}>[Zoho] Full Stack Java Engineer · Match rate: 94%</div>
                    <div style={{ color: '#10B981', fontWeight: 'bold' }}>🎉 Offer Confirmed! Direct Referral generated.</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Background decorative rings */}
          <div style={{
            position: 'absolute', width: '340px', height: '340px',
            border: '1.5px solid rgba(108,76,241,0.06)', borderRadius: '50%',
            top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
            pointerEvents: 'none', zIndex: 0,
            animation: 'floatGentle 8s ease-in-out infinite',
          }} />
          <div style={{
            position: 'absolute', width: '430px', height: '430px',
            border: '1px solid rgba(132,204,22,0.04)', borderRadius: '50%',
            top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
            pointerEvents: 'none', zIndex: 0,
          }} />
        </motion.div>
      </div>

      {/* ── Video Modal ────────────────────────────────────────── */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setVideoOpen(false)}
            style={{
              position: 'fixed', inset: 0, zIndex: 9999,
              background: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(10px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '20px',
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={e => e.stopPropagation()}
              style={{
                background: '#070D19',
                borderRadius: '24px',
                border: '1px solid #ECEEF5',
                padding: '16px',
                maxWidth: '720px',
                width: '100%',
                boxShadow: '0 30px 60px rgba(15, 23, 42, 0.3)',
                position: 'relative',
              }}
            >
              {/* Close Button Icon */}
              <button
                onClick={() => setVideoOpen(false)}
                style={{
                  position: 'absolute',
                  top: '-16px',
                  right: '-16px',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  border: '1px solid #ECEEF5',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: '#4B5563',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  zIndex: 20,
                }}
              >
                &times;
              </button>

              {/* Video Player */}
              <div style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: '#000000',
                aspectRatio: '16/9',
                width: '100%',
              }}>
                <video
                  src={howItWorksVideo}
                  controls
                  autoPlay
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
            padding: 76px 20px 20px !important;
            height: auto !important;
          }
          .hero-right-col { display: none !important; }
        }
        @media (max-width: 900px) and (min-width: 769px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
