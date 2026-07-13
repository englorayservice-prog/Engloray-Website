import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, animate } from 'framer-motion';
import {
  FiTrendingUp,
  FiCheckCircle,
  FiAlertCircle,
  FiBriefcase,
  FiAward,
  FiCode,
  FiTerminal
} from 'react-icons/fi';

function StaggerItem({ progress, range, index, gap = 0.05, children }) {
  const [start, end] = range;
  const delay = index * gap;
  const opacity = useTransform(progress, [start + delay, end + delay], [0, 1]);
  const x = useTransform(progress, [start + delay, end + delay], [-14, 0]);

  return (
    <motion.li style={{ opacity, x }} className="flex items-center gap-2 sm:gap-3">
      {children}
    </motion.li>
  );
}

function GrowthChart({ progress, variant }) {
  const isAfter = variant === 'after';
  const [selectedKey, setSelectedKey] = React.useState('CODE');

  const scaleVal = useTransform(progress, [0.25, 0.85], [0.15, 1.0]);

  const stats = {
    CODE: { name: 'Coding Fluency', before: '15%', after: '95%', color: '#0ea5e9', desc: 'Clean architecture, deep framework usage, and dry patterns.' },
    SYS: { name: 'System Design', before: '10%', after: '90%', color: '#10b981', desc: 'Microservices, message broker integration, database scaling.' },
    OPS: { name: 'DevOps & Cloud', before: '5%', after: '85%', color: '#6366f1', desc: 'Deploying with Kubernetes, docker containers, CI/CD pipes.' },
    UX: { name: 'UI/UX Design', before: '20%', after: '92%', color: '#db2777', desc: 'Design systems in Figma, interactive prototypes, user validations.' },
    JOBS: { name: 'Placement Ready', before: '10%', after: '98%', color: '#ea580c', desc: 'Passed mock interviews, portfolio checks, and direct placement.' }
  };

  const activeStat = stats[selectedKey];

  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 w-full py-1.5 select-none z-30 relative">
      {/* Radar SVG */}
      <div className="w-28 h-28 sm:w-32 sm:h-32 shrink-0 relative flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full text-slate-400">
          {/* Concentric pentagons */}
          <polygon points="50,10 88,37.6 73.5,82.4 26.5,82.4 12,37.6" fill="none" stroke="currentColor" strokeOpacity="0.08" strokeWidth="0.8" />
          <polygon points="50,20 78.5,40.7 67.6,74.3 32.4,74.3 21.5,40.7" fill="none" stroke="currentColor" strokeOpacity="0.08" strokeWidth="0.8" />
          <polygon points="50,30 69.0,43.8 61.8,66.2 38.2,66.2 31.0,43.8" fill="none" stroke="currentColor" strokeOpacity="0.08" strokeWidth="0.8" />
          <polygon points="50,40 59.5,46.9 55.9,58.1 44.1,58.1 40.5,46.9" fill="none" stroke="currentColor" strokeOpacity="0.08" strokeWidth="0.8" />

          {/* Spokes */}
          <line x1="50" y1="50" x2="50" y2="10" stroke="currentColor" strokeOpacity="0.08" strokeWidth="0.8" />
          <line x1="50" y1="50" x2="88" y2="37.6" stroke="currentColor" strokeOpacity="0.08" strokeWidth="0.8" />
          <line x1="50" y1="50" x2="73.5" y2="82.4" stroke="currentColor" strokeOpacity="0.08" strokeWidth="0.8" />
          <line x1="50" y1="50" x2="26.5" y2="82.4" stroke="currentColor" strokeOpacity="0.08" strokeWidth="0.8" />
          <line x1="50" y1="50" x2="12" y2="37.6" stroke="currentColor" strokeOpacity="0.08" strokeWidth="0.8" />

          {/* Active / Before Polygon */}
          {isAfter ? (
            <motion.polygon
              points="50,12 84.2,38.9 70,77.5 28.4,79.8 12.7,37.9"
              fill={`${activeStat.color}25`}
              stroke={activeStat.color}
              strokeWidth="2.2"
              style={{
                scale: scaleVal,
                transformOrigin: '50px 50px'
              }}
            />
          ) : (
            <polygon
              points="50,44 53.8,48.8 51.2,51.6 45.3,56.5 46.2,48.8"
              fill="rgba(244, 63, 94, 0.2)"
              stroke="#f43f5e"
              strokeWidth="1.8"
              className="animate-pulse"
            />
          )}

          {/* Vertex Nodes for Clicking */}
          {Object.keys(stats).map((key, i) => {
            const angles = [-Math.PI/2, -Math.PI/2 + 72*Math.PI/180, -Math.PI/2 + 144*Math.PI/180, -Math.PI/2 + 216*Math.PI/180, -Math.PI/2 + 288*Math.PI/180];
            const R = 40;
            const x = 50 + R * Math.cos(angles[i]);
            const y = 50 + R * Math.sin(angles[i]);
            const isSel = selectedKey === key;
            const color = isAfter ? stats[key].color : '#f43f5e';

            return (
              <g key={key} className="cursor-pointer" onClick={() => setSelectedKey(key)}>
                <circle
                  cx={x}
                  cy={y}
                  r={isSel ? 4.5 : 3}
                  fill={isSel ? color : '#cbd5e1'}
                  className="transition-all duration-300 hover:scale-125"
                  style={{
                    filter: isSel ? `drop-shadow(0 0 4px ${color})` : undefined
                  }}
                />
              </g>
            );
          })}

          {/* Text Labels on Pentagon Vertices */}
          <text x="50" y="6" textAnchor="middle" className="text-[5.5px] font-mono font-bold fill-slate-500 cursor-pointer" onClick={() => setSelectedKey('CODE')}>CODE</text>
          <text x="91" y="39.5" textAnchor="start" className="text-[5.5px] font-mono font-bold fill-slate-500 cursor-pointer" onClick={() => setSelectedKey('SYS')}>SYS</text>
          <text x="75" y="87" textAnchor="start" className="text-[5.5px] font-mono font-bold fill-slate-500 cursor-pointer" onClick={() => setSelectedKey('OPS')}>OPS</text>
          <text x="25" y="87" textAnchor="end" className="text-[5.5px] font-mono font-bold fill-slate-500 cursor-pointer" onClick={() => setSelectedKey('UX')}>UX</text>
          <text x="9" y="39.5" textAnchor="end" className="text-[5.5px] font-mono font-bold fill-slate-500 cursor-pointer" onClick={() => setSelectedKey('JOBS')}>JOBS</text>
        </svg>
      </div>

      {/* Stats Description Card */}
      <div className="flex-1 flex flex-col justify-center min-h-[96px] text-left">
        {/* Horizontal tabs */}
        <div className="flex flex-wrap gap-1.5 mb-2 border-b border-slate-100 pb-1.5">
          {Object.keys(stats).map((key) => {
            const isSel = selectedKey === key;
            const color = isAfter ? stats[key].color : '#f43f5e';
            return (
              <button
                key={key}
                onClick={() => setSelectedKey(key)}
                className={`text-[8.5px] font-mono font-extrabold tracking-wider px-2 py-0.5 rounded-full border transition-all duration-300 ${
                  isSel
                    ? 'text-white border-transparent'
                    : 'text-slate-400 border-slate-100 hover:text-slate-600 hover:bg-slate-50'
                }`}
                style={{
                  backgroundColor: isSel ? color : undefined,
                  boxShadow: isSel ? `0 2px 8px ${color}40` : undefined
                }}
              >
                {key}
              </button>
            );
          })}
        </div>

        {/* Selected metric values */}
        <div className="flex items-baseline gap-2">
          <span className="text-[11px] sm:text-xs font-black uppercase text-slate-800 tracking-wide font-aldrich">
            {activeStat.name}
          </span>
          <span className="text-xs sm:text-sm font-black font-mono" style={{ color: isAfter ? activeStat.color : '#f43f5e' }}>
            {isAfter ? activeStat.after : activeStat.before}
          </span>
        </div>

        <p className="text-[9.5px] sm:text-[10px] text-slate-400 mt-1 leading-relaxed font-poppins">
          {activeStat.desc}
        </p>
      </div>
    </div>
  );
}

export default function JourneySlider() {
  const containerRef = useRef(null);

  const controlledProgress = useMotionValue(0);
  const [paused, setPaused] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const getLiveProgress = () => {
    if (!containerRef.current) return 0;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollableRange = rect.height - window.innerHeight;
    if (scrollableRange <= 0) return 0;
    return Math.max(0, Math.min(1, -rect.top / scrollableRange));
  };

  // Keep controlledProgress synced to scroll when not paused.
  useEffect(() => {
    const handleScroll = () => {
      if (paused) return;
      controlledProgress.set(getLiveProgress());
    };

    // Initialize progress on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [paused, controlledProgress]);

  // IntersectionObserver: when section is mostly visible, pause and run reveal.
  useEffect(() => {
    const el = containerRef.current;
    if (!el || revealed) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // threshold chosen to trigger when majority of sticky is visible
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3 && !revealed) {
            setPaused(true);
            const current = getLiveProgress();
            controlledProgress.set(current);

            // Respect reduced motion preference
            const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (prefersReduced) {
              setRevealed(true);
              // resume sync immediately
              controlledProgress.set(getLiveProgress());
              setPaused(false);
              return;
            }

            // Animate controlledProgress forward to a value that reveals the "after" state,
            // then resume by syncing back to real scroll position.
            const revealTarget = 0.72; // value that maps to the revealed clip/after texts
            animate(controlledProgress, revealTarget, { duration: 1.3, ease: [0.22, 0.8, 0.2, 1] }).then(() => {
              setRevealed(true);
              // short pause after reveal then resume
              setTimeout(() => {
                const currentNow = getLiveProgress();
                // animate controlledProgress back to live scroll to avoid jump
                animate(controlledProgress, currentNow, { duration: 0.35 }).then(() => {
                  setPaused(false);
                });
              }, 350);
            });
          }
        });
      },
      { threshold: [0.0, 0.25, 0.3, 0.6, 0.9] }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [containerRef, controlledProgress, revealed]);

  const progress = controlledProgress;

  const clipPercentage = useTransform(progress, [0.08, 0.92], [100, 0]);
  const clipPathStyle  = useTransform(clipPercentage, (pct) => `polygon(0 0, ${pct}% 0, ${pct}% 100%, 0 100%)`);
  const barrierOpacity     = useTransform(progress, [0, 0.35, 0.75, 1], [1, 0.9, 0.6, 0.15]);
  const headerOpacity      = useTransform(progress, [0, 0.15, 0.85, 1], [1, 1, 0.8, 0]);
  const headerY            = useTransform(progress, [0, 0.12], [-16, 0]);
  const beforeNumberOpacity= useTransform(progress, [0, 0.08, 0.28], [1, 0.9, 0.3]);
  const afterBarWidth      = useTransform(progress, [0.18, 0.82], ['0%', '99%']);
  const beforeBarWidth     = useTransform(progress, [0, 0.38], ['90%', '8%']);

  const beforeTextOpacity  = useTransform(progress, [0.08, 0.44], [1, 0]);
  const beforeTextY        = useTransform(progress, [0.08, 0.44], [0, -14]);
  const afterTextOpacity   = useTransform(progress, [0.56, 0.92], [0, 1]);
  const afterTextY         = useTransform(progress, [0.56, 0.92], [14, 0]);

  const cardScale = useTransform(progress, [0, 0.07], [0.96, 1]);
  const cardY     = useTransform(progress, [0, 0.07], [10, -28]);

  const blobOneY = useTransform(progress, [0, 1], [-30, 60]);
  const blobTwoY = useTransform(progress, [0, 1], [40, -70]);

  const afterCountRaw  = useTransform(progress, [0.20, 0.82], [0, 99]);
  const afterCountText = useTransform(afterCountRaw, (v) => `${Math.round(v)}%`);

  return (
    <div ref={containerRef} className="relative z-10 h-[150vh] section-light text-brand-navy">
      <style>{`
        .journey-card-custom {
          height: auto !important;
          min-height: 280px !important;
        }
        @media (min-width: 640px) {
          .journey-card-custom {
            min-height: 320px !important;
          }
        }
        @media (min-width: 768px) {
          .journey-card-custom {
            height: 44vh !important;
            min-height: 300px !important;
            max-height: 390px !important;
          }
        }
      `}</style>
      <div className="sticky top-[22vh] z-20 h-[68vh] w-full overflow-hidden flex flex-col justify-between items-center pt-[40px] pb-3 px-3 sm:px-5 md:px-11 select-none">
        <motion.div
          style={{ y: blobOneY }}
          className="absolute top-1/4 left-1/4 w-[220px] sm:w-[500px] h-[220px] sm:h-[500px] bg-brand-sky/5 rounded-full blur-[80px] sm:blur-[140px] pointer-events-none"
        />
        <motion.div
          style={{ y: blobTwoY }}
          className="absolute bottom-1/4 right-1/4 w-[260px] sm:w-[600px] h-[260px] sm:h-[600px] bg-brand-sky/5 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none"
        />

        {/* Ambient floating icons for a bit of student-friendly playfulness */}
        <motion.div
          className="hidden md:block absolute top-[25%] left-[8%] text-brand-sky/20 pointer-events-none"
          animate={{ y: [0, -10, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiCode size={34} />
        </motion.div>
        <motion.div
          className="hidden md:block absolute bottom-[16%] left-[12%] text-brand-sky/15 pointer-events-none"
          animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        >
          <FiTerminal size={28} />
        </motion.div>

          <div className="relative z-30 max-w-2xl mx-auto text-center pointer-events-none">
          <motion.div
            style={{ opacity: headerOpacity, y: headerY }}
            className="space-y-1 sm:space-y-1.5 section-heading-glow"
          >
            <span className="text-[9px] sm:text-xs font-mono tracking-widest text-brand-sky bg-brand-sky/10 px-2 sm:px-3 py-1 rounded-full border border-brand-sky/20 relative z-10">
              Scroll To Explore The Gap
            </span>
            <h2 className="text-lg sm:text-xl md:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-brand-navy to-slate-700 pt-1 sm:pt-1.5 font-hexco uppercase relative z-10">
              The Engloray Standard
            </h2>
          </motion.div>
        </div>

        <motion.div
          style={{ scale: cardScale, y: cardY }}
          className="journey-card-custom relative w-full max-w-6xl mx-auto bg-white rounded-2xl sm:rounded-3xl border border-gray-100 overflow-hidden shadow-xl flex flex-col md:flex-row items-stretch justify-between gap-3 sm:gap-5 p-4 sm:p-5"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-white opacity-90" />

          {/* LEFT COLUMN: Cross-fading, sliding description text */}
          <div className="w-full md:w-1/2 relative min-h-[220px] md:min-h-0 flex items-center z-10">
            {/* BEFORE state text */}
            <motion.div
              style={{ opacity: beforeTextOpacity, y: beforeTextY }}
              className="absolute inset-0 flex flex-col justify-center space-y-1.5 sm:space-y-2 md:space-y-3"
            >
              <span className="inline-flex items-center gap-1.5 text-[9px] sm:text-xs font-mono font-bold tracking-wider text-rose-500 uppercase bg-rose-50 px-2 sm:px-3 py-1 rounded-md border border-rose-100 self-start font-aldrich">
                <FiAlertCircle /> ⚠️ Stuck in Tutorial Hell
              </span>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-rose-600 tracking-tight leading-tight font-hexco uppercase">
                Copy-Pasting Code blindly
              </h3>
              <p className="text-[11px] sm:text-sm text-gray-500 leading-relaxed max-w-md font-poppins">
                Endless scrolling through coding videos but unable to build a project from scratch or crack technical screenings.
              </p>
              <ul className="space-y-1.5 text-[10.5px] sm:text-xs text-gray-600 font-poppins">
                <StaggerItem progress={progress} range={[0.06, 0.2]} index={0}>
                  <div className="flex items-center gap-2 hover:translate-x-1.5 transition-transform duration-300 cursor-pointer">
                    <FiAlertCircle className="text-rose-400 shrink-0" />
                    <span>Locked in tutorial loops with no live system practice</span>
                  </div>
                </StaggerItem>
                <StaggerItem progress={progress} range={[0.06, 0.2]} index={1}>
                  <div className="flex items-center gap-2 hover:translate-x-1.5 transition-transform duration-300 cursor-pointer">
                    <FiAlertCircle className="text-rose-400 shrink-0" />
                    <span>Resumes ignored due to lack of production deployments</span>
                  </div>
                </StaggerItem>
              </ul>
            </motion.div>

            {/* AFTER state text */}
            <motion.div
              style={{ opacity: afterTextOpacity, y: afterTextY }}
              className="absolute inset-0 flex flex-col justify-center space-y-1.5 sm:space-y-2 md:space-y-3"
            >
              <span className="inline-flex items-center gap-1.5 text-[9px] sm:text-xs font-mono font-bold tracking-wider text-brand-sky uppercase bg-brand-sky/10 px-2 sm:px-3 py-1 rounded-md border border-brand-sky/20 self-start">
                <FiAward className="animate-pulse" /> 🚀 The Level-Up Pathway
              </span>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-brand-navy tracking-tight leading-tight font-hexco uppercase">
                Production-Ready Pro
              </h3>
              <p className="text-[11px] sm:text-sm text-gray-600 leading-relaxed max-w-md font-poppins">
                Build real-world microservices, deploy on live clouds, work in developer sprints, and land top-tier tech roles.
              </p>
              <ul className="space-y-1.5 text-[10.5px] sm:text-xs text-gray-700 font-poppins">
                <StaggerItem progress={progress} range={[0.56, 0.78]} index={0}>
                  <div className="flex items-center gap-2 hover:translate-x-1.5 hover:text-brand-sky transition-all duration-300 cursor-pointer">
                    <FiCheckCircle className="text-brand-sky shrink-0" />
                    <span>Deploy scalable systems with container orchestration</span>
                  </div>
                </StaggerItem>
                <StaggerItem progress={progress} range={[0.56, 0.78]} index={1}>
                  <div className="flex items-center gap-2 hover:translate-x-1.5 hover:text-brand-sky transition-all duration-300 cursor-pointer">
                    <FiCheckCircle className="text-brand-sky shrink-0" />
                    <span>Direct referrals, verified resume audits, and mock rounds</span>
                  </div>
                </StaggerItem>
              </ul>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Visual card with clip-path sweep */}
          <div className="w-full md:w-2/5 min-h-[170px] sm:min-h-[200px] md:min-h-0 relative z-10 flex-shrink-0 flex items-center justify-center">

            {/* AFTER Card (base layer) */}
            <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-2.5 sm:p-3 md:p-4 bg-white border border-brand-sky/15 rounded-xl sm:rounded-2xl shadow-md overflow-hidden group">

              <div className="relative z-10 w-full space-y-1.5 sm:space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <motion.div
                      className="text-xl sm:text-3xl md:text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-brand-sky via-sky-400 to-brand-sky leading-none font-aldrich"
                      style={{ opacity: barrierOpacity }}
                    >
                      {afterCountText}
                    </motion.div>
                    <div className="text-[8px] sm:text-xs uppercase tracking-widest text-brand-sky font-mono flex items-center gap-1.5 mt-1 font-aldrich">
                      <FiBriefcase /> IT Industry Eligible
                    </div>
                  </div>
                  <motion.div
                    className="text-white font-mono text-[8px] sm:text-[9px] tracking-widest uppercase bg-brand-sky/80 px-2 py-0.5 rounded-full shadow-sm font-aldrich"
                    animate={{ opacity: [0.85, 1, 0.85] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    PRO // SYNC
                  </motion.div>
                </div>

                <GrowthChart progress={progress} variant="after" />

                <div className="w-full bg-gray-200/50 h-1.5 rounded-full overflow-hidden relative">
                  <motion.div
                    style={{ width: afterBarWidth }}
                    className="h-full bg-gradient-to-r from-brand-sky to-sky-400 shadow-[0_0_12px_rgba(14,165,233,0.3)]"
                  />
                </div>
              </div>
            </div>

            {/* BEFORE Card (clipped overlay) */}
            <motion.div
              style={{ clipPath: clipPathStyle }}
              className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-2.5 sm:p-3 md:p-4 bg-white border border-gray-200 rounded-xl sm:rounded-2xl shadow-md overflow-hidden group z-20"
            >

              <div className="relative z-10 w-full space-y-1.5 sm:space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <motion.div
                      className="text-xl sm:text-3xl md:text-4xl font-black tracking-tighter text-gray-400 leading-none font-aldrich"
                      style={{ opacity: beforeNumberOpacity }}
                      animate={{ x: [0, -1, 1, 0] }}
                      transition={{ duration: 0.35, repeat: Infinity, repeatType: 'mirror', ease: 'linear' }}
                    >
                      0%
                    </motion.div>
                    <div className="text-[8px] sm:text-xs uppercase tracking-widest text-gray-500 font-mono mt-1 font-aldrich">
                      Industry Readiness
                    </div>
                  </div>
                  <div className="text-white font-mono text-[8px] sm:text-[9px] tracking-widest uppercase bg-rose-500/80 px-2 py-0.5 rounded-full shadow-sm font-aldrich">
                    ERR // CHAOS
                  </div>
                </div>

                <GrowthChart progress={progress} variant="before" />

                <div className="w-full bg-gray-200/50 h-1.5 rounded-full overflow-hidden relative">
                  <motion.div
                    style={{ width: beforeBarWidth }}
                    className="h-full bg-gradient-to-r from-rose-400 to-rose-300 shadow-none"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="relative z-30 text-center text-[9px] sm:text-xs font-mono text-gray-500 flex justify-between items-center max-w-6xl w-full mx-auto border-t border-gray-100 pt-2.5 sm:pt-4 pointer-events-none gap-2">
          <span className="hidden sm:inline">[ Legacy State ]</span>
          <span className="animate-bounce flex items-center gap-1.5 sm:gap-2 mx-auto sm:mx-0"><FiTrendingUp /> Scroll down to transform</span>
          <span className="hidden sm:inline">[ Engloray Certified ]</span>
        </div>
      </div>
    </div>
  );
}