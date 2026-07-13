import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  FaLaptopCode, FaCodeBranch, FaTasks, FaCode, FaEye,
  FaCheckCircle, FaCloudUploadAlt, FaUserGraduate, FaStar, FaGithub,
  FaFileAlt
} from 'react-icons/fa';
import './ProjectLearning.css';

// ─── Project lifecycle stages shown in the left timeline ────────────────────
const lifecycleSteps = [
  { id: 'assigned', label: 'Brief Assigned', sub: 'Real industry brief', icon: FaTasks },
  { id: 'coding', label: 'Guided Development', sub: 'Guided coding', icon: FaCode },
  { id: 'pr', label: 'Review Submission', sub: 'Submit code', icon: FaCodeBranch },
  { id: 'review', label: 'Mentor Review', sub: 'Expert line review', icon: FaEye },
  { id: 'merge', label: 'Quality Verification', sub: 'Verify architecture', icon: FaCheckCircle },
  { id: 'deploy', label: 'Go Live!', sub: 'Production deploy', icon: FaCloudUploadAlt },
  { id: 'portfolio', label: 'Portfolio Unlocked', sub: 'Live credential unlocked', icon: FaUserGraduate }
];

const techStack = ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'];

// Right-column outcome grid — a fixed 2x2 grid of the four core outcomes.
const achievements = [
  { icon: FaCode, title: 'Live Projects', desc: 'Build & ship 3+ live production apps.' },
  { icon: FaEye, title: 'Expert Code Reviews', desc: 'Get line-by-line code audit and reviews.' },
  { icon: FaCloudUploadAlt, title: 'Cloud Deployments', desc: 'Deploy apps to AWS & Docker systems.' },
  { icon: FaFileAlt, title: 'Career Portfolio', desc: 'Graduate with verified linkable credentials.' }
];

// Single-line rotator under the paragraph
const outcomeTicker = [
  'From tutorial exercises → to production code',
  'From individual studies → to team collaborations',
  'From blank resumes → to linkable portfolios',
  'From raw uncertainty → to interview readiness'
];

// ─── One static achievement tile in the 2x2 outcomes grid ──────────────────
function AchievementTile({ icon: Icon, title, desc }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3 }}
      className="pl-achv-tile"
    >
      <div className="pl-achv-icon-row">
        <span className="pl-achv-icon">
          <Icon />
        </span>
        <h4 className="pl-achv-title">
          {title}
        </h4>
      </div>
      <p className="pl-achv-desc">{desc}</p>
    </motion.div>
  );
}

export const ProjectLearning = ({ onOpenApply }) => {
  // Start with active step = 1 (Guided Development) so it matches the reference image configuration on load
  const [activeIndex, setActiveIndex] = useState(1);
  const [autoPlay, setAutoPlay] = useState(true);
  const [tickerIdx, setTickerIdx] = useState(0);

  // Auto-advance the lifecycle timeline, looping back to the start
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % lifecycleSteps.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [autoPlay]);

  // Rotate the "before → after" outcome ticker under the paragraph
  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIdx((prev) => (prev + 1) % outcomeTicker.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleStepClick = (idx) => {
    setAutoPlay(false);
    setActiveIndex(idx);
    setTimeout(() => setAutoPlay(true), 6000);
  };

  const sprintProgress = Math.round(((activeIndex + 1) / lifecycleSteps.length) * 100);
  const isFinalStepActive = activeIndex === lifecycleSteps.length - 1;

  return (
    <section 
      className="relative z-10 w-full py-12 border-b border-white/5 project-learning-section" 
      id="project-learning"
      style={{ backgroundColor: '#070D19' }}
    >
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
      
      <div className="max-w-5xl w-full mx-auto px-4 relative z-10">

        {/* Centered section header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="w-8 h-8 rounded-lg bg-brand-sky flex items-center justify-center text-white text-sm mb-3 shadow-glow-sky">
            <FaLaptopCode />
          </div>
          <span className="text-[10px] text-brand-sky tracking-widest uppercase font-bold block mb-1 font-aldrich">
            MILESTONE // PORTFOLIO ENGINEERING
          </span>
          <h2 className="text-base md:text-lg font-extrabold font-hexco uppercase tracking-wide text-white leading-tight max-w-2xl">
            BUILD PRODUCTION PROJECTS, UNLOCK YOUR PORTFOLIO.
          </h2>
        </div>

        {/* Project lifecycle timeline (left 38%) — dashboard + outcomes (right 62%) */}
        <div className="flex flex-col md:flex-row gap-6 items-start mb-8">

          {/* Interactive lifecycle timeline card */}
          <div className="pl-panel w-full relative md:w-[38%] md:shrink-0">
            <div className="pl-panel-header">
              <div className="dot dot-red" />
              <div className="dot dot-yellow" />
              <div className="dot dot-green" />
              <span className="pl-panel-title">PROJECT LIFECYCLE // LIVE</span>
            </div>

            <div className="pl-timeline">
              {lifecycleSteps.map((step, idx) => {
                const Icon = step.icon;
                const isActive = idx === activeIndex;
                const isComplete = idx < activeIndex;
                const isFinal = idx === lifecycleSteps.length - 1 && isActive;
                return (
                  <button
                    key={step.id}
                    onClick={() => handleStepClick(idx)}
                    className={`pl-step w-full text-left border-none bg-transparent cursor-pointer outline-none ${isActive ? 'is-active' : ''} ${isComplete ? 'is-complete' : ''} ${isFinal ? 'is-final-active' : ''}`}
                  >
                    {idx < lifecycleSteps.length - 1 && <span className="pl-step-connector" />}
                    <span className="pl-step-icon">
                      <Icon />
                    </span>
                    <span className="flex flex-col pt-1">
                      <span className="pl-step-label">{step.label}</span>
                      <span className="pl-step-sub">{step.sub}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Compact live dashboard + outcomes stacked directly below it */}
          <div className="flex flex-col gap-6 w-full md:w-[62%]">

            {/* Live project dashboard */}
            <div className="pl-panel w-full">
              <div className="pl-dash-row-sm">
                <div className="flex items-center gap-1.5">
                  <FaGithub className="text-slate-400 text-xs" />
                  <span className="text-[11px] font-bold text-white font-mono truncate">engloray/student-portal</span>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <span className="pl-live-dot" />
                  <span className="text-[9px] font-mono font-bold text-green-400 uppercase">LIVE</span>
                </div>
              </div>

              <div className="p-4 flex flex-col gap-3.5">
                {/* Sprint progress */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[9.5px] font-mono font-bold text-slate-400 uppercase tracking-widest">SPRINT PROGRESS</span>
                    <span className="text-[9.5px] font-mono font-bold text-brand-sky">{sprintProgress}%</span>
                  </div>
                  <div className="w-full bg-[#1e293b] h-1.5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-brand-sky to-sky-400"
                      animate={{ width: `${sprintProgress}%` }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    />
                  </div>
                </div>

                {/* Stat tiles */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="pl-stat-tile-sm">
                    <div className="pl-stat-label-sm truncate">GRADUATE PORTFOLIOS</div>
                    <div className="pl-stat-value-sm">68+</div>
                  </div>
                  <div className="pl-stat-tile-sm">
                    <div className="pl-stat-label-sm">MENTOR</div>
                    <div className="pl-stat-value-sm flex items-center gap-1">
                      4.9 <FaStar className="text-yellow-400 text-[10px]" />
                    </div>
                  </div>
                  <div className="pl-stat-tile-sm">
                    <div className="pl-stat-label-sm">DEPLOY</div>
                    <div className="pl-stat-value-sm text-green-400">
                      {isFinalStepActive ? 'Shipped' : 'Deployed'}
                    </div>
                  </div>
                </div>

                {/* Tech stack chips */}
                <div className="flex flex-wrap gap-1.5">
                  {techStack.map((tech) => (
                    <span key={tech} className="feature-badge text-[9px] font-mono text-brand-sky px-2.5 py-0.5 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Outcomes: ticker + fixed 2x2 outcomes grid */}
            <div className="flex flex-col gap-3">
              <div className="h-5 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={tickerIdx}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.35 }}
                    className="pl-outcomes-rotator font-poppins text-xs"
                  >
                    {outcomeTicker[tickerIdx]}
                  </motion.span>
                </AnimatePresence>
              </div>

              <div className="relative grid grid-cols-2 gap-3 mb-16">
                {achievements.map((item) => (
                  <AchievementTile key={item.title} icon={item.icon} title={item.title} desc={item.desc} />
                ))}

                {/* Explore Button - Centered horizontally at the bottom of the 2x2 grid */}
                <div className="absolute left-1/2 bottom-[-10] -translate-x-1/2 z-30">
                  <button
                    onClick={onOpenApply}
                    className="font-bold px-6 py-2.5 rounded-full bg-white hover:bg-brand-sky text-slate-900 hover:text-white shadow-xl hover:shadow-glow-sky transition-all hover:scale-105 active:scale-95 border border-slate-800 cursor-pointer text-[10px] sm:text-xs whitespace-nowrap"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Explore the project
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProjectLearning;