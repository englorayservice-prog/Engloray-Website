import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaCheckCircle, FaAward, FaLock } from 'react-icons/fa';

import digitalMarketingImg from '../../assets/new-folder/Digital-Marketing.png';
import graphicDesignerImg from '../../assets/new-folder/Graphic-Designer.png';
import uiUxImg from '../../assets/new-folder/Ui-Ux.png';
import illustrationImg from '../../assets/new-folder/drawing.png';
import javaImg from '../../assets/new-folder/java certifcate.jpeg';

const certificationsData = [
  {
    id: 1,
    title: 'Digital Marketing',
    subtitle: 'Industry-Recognised Certification',
    image: digitalMarketingImg,
    benefits: [
      'SEO, social media and ad-campaign skills',
      'Recognized by marketing teams and agencies',
      'Portfolio-ready campaign case studies'
    ]
  },
  {
    id: 2,
    title: 'Graphic Designer',
    subtitle: 'Creative Design Certification',
    image: graphicDesignerImg,
    benefits: [
      'Mastery of design tools and visual systems',
      'Branding and layout project experience',
      'Verified design portfolio for job applications'
    ]
  },
  {
    id: 3,
    title: 'UI/UX Design',
    subtitle: 'Product Design Certification',
    image: uiUxImg,
    benefits: [
      'Wireframing, prototyping and user research',
      'Recognized by product and tech companies',
      'Case-study portfolio of real app designs'
    ]
  },
  {
    id: 4,
    title: 'Illustration & Drawing',
    subtitle: 'Creative Arts Certification',
    image: illustrationImg,
    benefits: [
      'Hand-drawn and digital illustration skills',
      'Concept art and visual storytelling practice',
      'Showcase-ready illustration portfolio'
    ]
  },
  {
    id: 5,
    title: 'Java Programming',
    subtitle: 'Core Development Certification',
    image: javaImg,
    benefits: [
      'Strong foundation in Java and OOP concepts',
      'Valid for software developer job roles',
      'Hands-on coding projects and assessments'
    ]
  }
];

const SLIDE_DURATION = 5000;

export const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [autoPlay, setAutoPlay] = useState(true);
  const resumeTimer = useRef(null);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % certificationsData.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [autoPlay, currentIndex]);

  const pauseThenResume = () => {
    setAutoPlay(false);
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setAutoPlay(true), SLIDE_DURATION);
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + certificationsData.length) % certificationsData.length);
    pauseThenResume();
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % certificationsData.length);
    pauseThenResume();
  };

  const currentCert = certificationsData[currentIndex];

  // Pure opacity fade — simple dissolve reveal
  const fadeVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const contentVariants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 28 : -28 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -28 : 28 })
  };

  return (
    <section className="relative py-6 bg-[#071133] border-b border-slate-700 overflow-hidden" id="certifications">

      <style>{`
        @keyframes cert-shimmer {
          0%   { transform: translateX(-120%) rotate(8deg); }
          100% { transform: translateX(220%)  rotate(8deg); }
        }
        @keyframes cert-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes lock-pulse {
          0%, 100% { transform: scale(1);    opacity: 0.85; }
          50%       { transform: scale(1.15); opacity: 1;    }
        }

        /* Shimmer sweep on the outer card border */
        .cert-card-wrap::after {
          content: '';
          position: absolute;
          top: -50%; left: 0;
          width: 30%; height: 200%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.12), transparent);
          animation: cert-shimmer 3.6s ease-in-out infinite;
          pointer-events: none;
          border-radius: inherit;
        }
        .cert-badge-float {
          animation: cert-float 3s ease-in-out infinite;
        }

        /* Main lock overlay — always visible with blur */
        .cert-lock-overlay {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          background: rgba(7, 17, 51, 0.55);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          z-index: 10;
          opacity: 1;
          transition: opacity 0.35s ease, backdrop-filter 0.35s ease, background 0.35s ease;
        }

        /* Show overlay on hover of parent card */
        .cert-card-wrap:hover .cert-lock-overlay {
          opacity: 1;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          background: rgba(7, 17, 51, 0.55);
        }

        /* Lock icon — no circle, just the icon itself */
        .cert-lock-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          animation: lock-pulse 2.2s ease-in-out infinite;
        }

        /* Nav arrow buttons */
        .cert-nav-btn {
          width: 40px; height: 40px;
          border-radius: 50%;
          border: 2px solid rgba(100,116,139,0.6);
          background: rgba(7,17,51,0.7);
          color: #cbd5e1;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: border-color 0.25s, color 0.25s, transform 0.2s, background 0.25s;
          flex-shrink: 0;
        }
        .cert-nav-btn:hover {
          border-color: #67e8f9;
          color: #67e8f9;
          background: rgba(103,232,249,0.08);
          transform: scale(1.1);
        }
      `}</style>

      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-6">

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="text-center mb-10">
          <span className="text-[11px] text-sky-300 tracking-widest uppercase font-bold block mb-2">
            Credentials &amp; Recognition
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3 text-white">
            <span className="text-white">Certifications</span>
            <span className="text-cyan-300"> You Get</span>
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed max-w-2xl mx-auto">
            Earn prestigious, industry-recognized certifications across every track you complete
          </p>
        </div>

        {/* ── Two-column layout ───────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT — Certificate card (always blurred + lock icon) with nav arrows */}
          <div className="flex items-center gap-3 justify-center">

            {/* Prev arrow */}
            <button className="cert-nav-btn" onClick={goToPrev} aria-label="Previous certificate">
              <FaChevronLeft />
            </button>

            {/* Certificate card */}
            <div className="relative flex-1 max-w-sm">

              {/* Floating award badge */}
              <div className="cert-badge-float absolute -top-3 -right-3 z-20 w-11 h-11 rounded-full bg-amber-400 flex items-center justify-center shadow-lg shadow-amber-400/30">
                <FaAward className="text-[#071133] text-lg" />
              </div>

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`cert-${currentCert.id}`}
                  custom={direction}
                  variants={fadeVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: 'easeInOut' }}
                  className="cert-card-wrap relative bg-slate-900 rounded-2xl border-4 border-slate-700 shadow-2xl shadow-cyan-400/10 p-2 w-full aspect-[7/5] overflow-hidden"
                >
                  {/* Certificate image underneath the blur */}
                  <div className="w-full h-full bg-white rounded-xl overflow-hidden">
                    <img
                      src={currentCert.image}
                      alt={`${currentCert.title} certificate`}
                      className="w-full h-full object-contain"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>

                  {/* ── Blur + Lock overlay — always visible ── */}
                  <div className="cert-lock-overlay">
                    <div className="cert-lock-icon">
                      <FaLock className="text-cyan-300 text-xl" />
                    </div>
                    <p className="text-xs font-bold text-cyan-200 tracking-widest uppercase opacity-90">
                      Complete to Unlock
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dot indicators below the card */}
              <div className="flex justify-center gap-2 mt-4">
                {certificationsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > currentIndex ? 1 : -1);
                      setCurrentIndex(idx);
                      pauseThenResume();
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? 'bg-cyan-400 w-6'
                        : 'bg-slate-600 w-1.5 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to certificate ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Next arrow */}
            <button className="cert-nav-btn" onClick={goToNext} aria-label="Next certificate">
              <FaChevronRight />
            </button>

          </div>

          {/* RIGHT — Title, subtitle & benefits (animated) */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`content-${currentCert.id}`}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  {currentCert.title}
                </h3>
                <p className="text-sm text-cyan-300 font-semibold">
                  {currentCert.subtitle}
                </p>
              </div>

              <div className="space-y-3">
                {currentCert.benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + idx * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl border border-slate-700 bg-slate-950/90 hover:bg-slate-900 hover:border-cyan-400/40 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-cyan-500/15 flex items-center justify-center text-cyan-300">
                      <FaCheckCircle className="text-xs" />
                    </div>
                    <p className="text-sm font-semibold text-slate-100">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};

export default Certifications;