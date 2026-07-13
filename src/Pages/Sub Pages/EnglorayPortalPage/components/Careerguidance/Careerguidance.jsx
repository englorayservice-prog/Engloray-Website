import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBook,
  FaUsers,
  FaChartLine,
  FaBriefcase,
  FaCheckCircle,
  FaBullseye,
  FaArrowRight,
  FaUndo,
  FaCode,
  FaAward,
  FaLaptopCode,
  FaGraduationCap
} from 'react-icons/fa';
import './Careerguidance.css';

/* ── 5 QUESTIONS SYSTEM ─────────────────────────────────── */
const QUESTIONS = [
  {
    id: 1,
    question: "What best describes your current situation?",
    options: [
      { text: "I'm still exploring career paths", values: { clar: 30, tech: 20, conf: 35, cons: 40 } },
      { text: "I know my interests but don't know where to start", values: { clar: 65, tech: 30, conf: 45, cons: 50 } },
      { text: "I have skills but no projects to show", values: { clar: 80, tech: 65, conf: 50, cons: 65 } },
      { text: "I have projects but no internship/work experience", values: { clar: 90, tech: 80, conf: 70, cons: 80 } },
      { text: "I'm ready and preparing for placements", values: { clar: 95, tech: 85, conf: 85, cons: 90 } }
    ]
  },
  {
    id: 2,
    question: "How many domain projects have you completed?",
    options: [
      { text: "None / Just practice code snippets", values: { proj: 10, tech: 20, conf: 25 } },
      { text: "1-2 basic applications", values: { proj: 45, tech: 50, conf: 55 } },
      { text: "3+ complete, deployed projects", values: { proj: 85, tech: 85, conf: 80 } }
    ]
  },
  {
    id: 3,
    question: "Have you done any real-world internships?",
    options: [
      { text: "No industry experience yet", values: { exp: 10, ind: 15 } },
      { text: "Completed self-paced virtual simulation tasks", values: { exp: 50, ind: 50 } },
      { text: "Completed a real company internship", values: { exp: 90, ind: 90 } }
    ]
  },
  {
    id: 4,
    question: "Can you build a functional application alone?",
    options: [
      { text: "No, I struggle without tutorials", values: { tech: 20, conf: 20 } },
      { text: "Yes, simple frontend landing pages", values: { tech: 50, conf: 45 } },
      { text: "Yes, full stack apps with database & APIs", values: { tech: 85, conf: 80 } }
    ]
  },
  {
    id: 5,
    question: "How confident are you in mock interviews?",
    options: [
      { text: "Terrified — I struggle to answer questions", values: { conf: 15, comm: 20 } },
      { text: "I can explain simple logic but fail soft skills", values: { conf: 50, comm: 55 } },
      { text: "Highly confident, ready for placement drives", values: { conf: 90, comm: 90 } }
    ]
  }
];

const SUGGESTIONS = [
  {
    icon: <FaCode />,
    title: "Complete Projects",
    time: "4 Weeks",
    diff: "hard"
  },
  {
    icon: <FaLaptopCode />,
    title: "Learn React/Vite",
    time: "3 Weeks",
    diff: "medium"
  },
  {
    icon: <FaUsers />,
    title: "Improve LinkedIn",
    time: "2 Days",
    diff: "easy"
  }
];

const AXES_LABELS = [
  "Tech Skills",
  "Communication",
  "Confidence",
  "Projects",
  "Experience",
  "Career Clarity",
  "Industry Exp",
  "Consistency"
];

export const Careerguidance = ({ onOpenApply }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState(Array(5).fill(null));
  const sectionRef = useRef(null);
  
  // Radar data states (0-100 values)
  const [radarValues, setRadarValues] = useState({
    tech: 20,
    comm: 20,
    conf: 20,
    proj: 20,
    exp: 20,
    clar: 20,
    ind: 20,
    cons: 20
  });

  const [isCompleted, setIsCompleted] = useState(false);

  // Auto-reset when the section is scrolled out of viewport (up or down)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          handleRetake();
        }
      },
      { threshold: 0.05 } // Trigger when less than 5% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Update dynamic values when option selected
  const handleSelectOption = (optionIndex) => {
    const nextAnswers = [...answers];
    nextAnswers[currentIdx] = optionIndex;
    setAnswers(nextAnswers);

    // Apply scores
    const optionValues = QUESTIONS[currentIdx].options[optionIndex].values;
    setRadarValues(prev => ({
      ...prev,
      ...optionValues
    }));

    // Go to next question or complete
    setTimeout(() => {
      if (currentIdx < 4) {
        setCurrentIdx(prev => prev + 1);
      } else {
        setIsCompleted(true);
      }
    }, 350);
  };

  const handleRetake = () => {
    setAnswers(Array(5).fill(null));
    setRadarValues({
      tech: 20,
      comm: 20,
      conf: 20,
      proj: 20,
      exp: 20,
      clar: 20,
      ind: 20,
      cons: 20
    });
    setCurrentIdx(0);
    setIsCompleted(false);
  };

  // Live calculated overall career readiness score
  const scoreKeys = ['tech', 'comm', 'conf', 'proj', 'exp', 'clar', 'ind', 'cons'];
  const totalScoreSum = scoreKeys.reduce((acc, key) => acc + radarValues[key], 0);
  const careerScore = Math.min(100, Math.round(totalScoreSum / 8));

  // Determine strengths & growth cards
  const confidenceStatus = radarValues.conf >= 60 ? 'strong' : 'weak';
  const projectsStatus = radarValues.proj >= 60 ? 'strong' : 'weak';
  const commsStatus = radarValues.comm >= 60 ? 'strong' : 'weak';
  const learningStatus = radarValues.cons >= 60 ? 'strong' : 'weak';

  // SVG Radar Points calculations
  const calculatePoints = () => {
    const center = 125;
    const maxRadius = 80;
    const keys = ['tech', 'comm', 'conf', 'proj', 'exp', 'clar', 'ind', 'cons'];

    return keys.map((key, i) => {
      const value = radarValues[key];
      const angle = (i * 2 * Math.PI) / 8 - Math.PI / 2;
      const x = center + Math.cos(angle) * (value / 100) * maxRadius;
      const y = center + Math.sin(angle) * (value / 100) * maxRadius;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' ');
  };

  // Progress Bar percentage
  const progressPercent = Math.round(((currentIdx + (answers[currentIdx] !== null ? 1 : 0)) / 5) * 100);

  return (
    <section ref={sectionRef} className="cg-section" id="career-guidance">
      {/* Dynamic Blobs */}
      <div className="cg-blob cg-blob-purple" />
      <div className="cg-blob cg-blob-lime" />

      <div className="cg-container">
        
        {/* Section Header */}
        <div className="cg-header">
          <span className="cg-header-badge">
            <FaBullseye /> Career Compass
          </span>
          <h2>Where Do You Stand Today?</h2>
        </div>

        {/* Desktop Grid Layout */}
        <div className="cg-grid">
          
          {/* LEFT: Card Stack */}
          <div className="cg-card-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIdx}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="cg-question-card"
              >
                <div className="cg-question-top">
                  <div className="cg-question-title-row">
                    <span className="cg-question-num">Milestone Level {currentIdx + 1} of 5</span>
                  </div>
                  <h3 className="cg-question-text">
                    {QUESTIONS[currentIdx].question}
                  </h3>
                </div>

                {/* Options List with Dynamic Skill-Up Badges */}
                <div className="cg-options-stack">
                  {QUESTIONS[currentIdx].options.map((option, idx) => {
                    const isSelected = answers[currentIdx] === idx;
                    
                    // Identify the primary skill metric this option boosts by finding the maximum value
                    const vals = option.values || {};
                    let primaryBoostStr = "";
                    if (Object.keys(vals).length > 0) {
                      const maxKey = Object.keys(vals).reduce((a, b) => vals[a] > vals[b] ? a : b);
                      const maxVal = vals[maxKey];
                      const labelMap = {
                        tech: 'Tech',
                        comm: 'Comm',
                        conf: 'Focus',
                        proj: 'Build',
                        exp: 'XP',
                        clar: 'Clarity',
                        ind: 'Industry',
                        cons: 'Habit'
                      };
                      primaryBoostStr = `+${maxVal} ${labelMap[maxKey] || maxKey}`;
                    }

                    return (
                      <motion.button
                        key={idx}
                        className={`cg-option-btn ${isSelected ? 'selected' : ''}`}
                        onClick={() => handleSelectOption(idx)}
                        whileHover={{ scale: 1.015, x: 4 }}
                        whileTap={{ scale: 0.985 }}
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      >
                        <div className="cg-option-circle">
                          <span className="cg-option-dot" />
                        </div>
                        <span style={{ flex: 1 }}>{option.text}</span>
                        {primaryBoostStr && (
                          <span className="cg-option-xp-badge">
                            {primaryBoostStr}
                          </span>
                        )}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Gamified Level Gauge Progress Bar with Gliding Cap Avatar */}
                <div style={{ marginTop: 'auto', position: 'relative', paddingTop: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.64rem', color: '#94A3B8', fontWeight: 700, marginBottom: '4px', textTransform: 'uppercase' }}>
                    <span>Novice Developer</span>
                    <span>Ready for Direct Pool</span>
                  </div>
                  <div className="cg-progress-bar-container" style={{ position: 'relative', overflow: 'visible' }}>
                    <div 
                      className="cg-progress-bar-fill"
                      style={{ width: `${progressPercent}%`, transition: 'width 0.4s ease' }}
                    />
                    {/* Bouncing graduation cap avatar floating on top of current progress mark */}
                    <motion.div
                      style={{
                        position: 'absolute',
                        left: `calc(${progressPercent}% - 8px)`,
                        top: '-10px',
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #A78BFA, #8B5CF6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        fontSize: '0.65rem',
                        boxShadow: '0 0 8px #A78BFA',
                        zIndex: 10,
                        pointerEvents: 'none'
                      }}
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <FaGraduationCap />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: Live analysis Dashboard with Real-Time Referral Engine */}
          <div className="cg-dashboard">
            
            {/* Top Grid: Radar & Score circle */}
            <div className="cg-dash-top">
              
              {/* Radar chart box */}
              <div className="cg-radar-box">
                <svg viewBox="0 0 250 250" className="cg-radar-svg">
                  <defs>
                    <linearGradient id="cgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#6C4CF1" />
                    </linearGradient>
                  </defs>

                  {/* Grid Rings */}
                  {[0.25, 0.5, 0.75, 1].map((factor, idx) => {
                    const r = 80 * factor;
                    const points = [0, 1, 2, 3, 4, 5, 6, 7].map(i => {
                      const angle = (i * 2 * Math.PI) / 8 - Math.PI / 2;
                      const x = 125 + Math.cos(angle) * r;
                      const y = 125 + Math.sin(angle) * r;
                      return `${x},${y}`;
                    }).join(' ');
                    return (
                      <polygon
                        key={idx}
                        points={points}
                        className="cg-radar-bg-polygon"
                      />
                    );
                  })}

                  {/* Grid Axis lines */}
                  {[0, 1, 2, 3, 4, 5, 6, 7].map(i => {
                    const angle = (i * 2 * Math.PI) / 8 - Math.PI / 2;
                    return (
                      <line
                        key={i}
                        x1={125}
                        y1={125}
                        x2={125 + Math.cos(angle) * 80}
                        y2={125 + Math.sin(angle) * 80}
                        className="cg-radar-grid-line"
                      />
                    );
                  })}

                  {/* Radar Value polygon - Animated smoothly */}
                  <motion.polygon
                    points={calculatePoints()}
                    animate={{ points: calculatePoints() }}
                    transition={{ type: "spring", stiffness: 90, damping: 14 }}
                    className="cg-radar-fill-poly"
                  />

                  {/* Dot anchors - Animated smoothly */}
                  {scoreKeys.map((key, i) => {
                    const value = radarValues[key];
                    const angle = (i * 2 * Math.PI) / 8 - Math.PI / 2;
                    const x = 125 + Math.cos(angle) * (value / 100) * 80;
                    const y = 125 + Math.sin(angle) * (value / 100) * 80;
                    return (
                      <motion.circle
                        key={key}
                        cx={x}
                        cy={y}
                        animate={{ cx: x, cy: y }}
                        transition={{ type: "spring", stiffness: 90, damping: 14 }}
                        r="4"
                        fill="#8B5CF6"
                        className="cg-radar-point-dot"
                      />
                    );
                  })}

                  {/* Axis labels */}
                  {AXES_LABELS.map((label, i) => {
                    const angle = (i * 2 * Math.PI) / 8 - Math.PI / 2;
                    const x = 125 + Math.cos(angle) * 98;
                    const y = 125 + Math.sin(angle) * 98;
                    return (
                      <text
                        key={i}
                        x={x}
                        y={y}
                        className="cg-radar-label-text"
                      >
                        {label}
                      </text>
                    );
                  })}
                </svg>
              </div>

              {/* Career Readiness Circular Score - Animated */}
              <div className="cg-score-box">
                <div className="cg-circle-meter">
                  <svg className="cg-circle-svg" viewBox="0 0 100 100">
                    <circle className="cg-circle-bg" cx="50" cy="50" r="42" />
                    <motion.circle
                      className="cg-circle-fill"
                      cx="50"
                      cy="50"
                      r="42"
                      strokeDasharray="264"
                      animate={{ strokeDashoffset: 264 - (264 * careerScore) / 100 }}
                      transition={{ type: "spring", stiffness: 60, damping: 15 }}
                    />
                  </svg>
                  <div className="cg-circle-content">
                    <span className="cg-circle-num">{careerScore}%</span>
                    <span className="cg-circle-label">Readiness</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Simplified and clean dashboard view */}

          </div>

        </div>

      </div>

      {/* Completion Modal Box - Holographic Referral Ticket Celebration */}
      <AnimatePresence>
        {isCompleted && (
          <div className="cg-modal-backdrop">
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 40 }}
              transition={{ type: 'spring', damping: 22, stiffness: 200 }}
              className="cg-modal"
              style={{
                border: '2px dashed rgba(167, 139, 250, 0.4)',
                background: 'linear-gradient(135deg, #0B0F19 0%, #151A2E 100%)',
                position: 'relative'
              }}
            >
              
              {/* Decorative ticket side notches */}
              <div style={{ position: 'absolute', left: '-12px', top: '50%', transform: 'translateY(-50%)', width: '24px', height: '24px', borderRadius: '50%', background: '#FFFFFF', zIndex: 100 }} />
              <div style={{ position: 'absolute', right: '-12px', top: '50%', transform: 'translateY(-50%)', width: '24px', height: '24px', borderRadius: '50%', background: '#FFFFFF', zIndex: 100 }} />

              {/* Modal top with score circle & head */}
              <div className="cg-modal-top">
                <div className="cg-modal-score-circle">
                  <div className="cg-circle-meter" style={{ width: 90, height: 90 }}>
                    <svg className="cg-circle-svg" viewBox="0 0 100 100">
                      <circle className="cg-circle-bg" cx="50" cy="50" r="42" />
                      <motion.circle
                        className="cg-circle-fill"
                        cx="50"
                        cy="50"
                        r="42"
                        strokeDasharray="264"
                        animate={{ strokeDashoffset: 264 - (264 * careerScore) / 100 }}
                        transition={{ type: "spring", stiffness: 60, damping: 15 }}
                      />
                    </svg>
                    <div className="cg-circle-content">
                      <span className="cg-circle-num" style={{ fontSize: '1.25rem' }}>{careerScore}%</span>
                      <span className="cg-circle-label" style={{ fontSize: '0.5rem' }}>Readiness</span>
                    </div>
                  </div>
                </div>

                <div className="cg-modal-headline-block">
                  <span style={{ fontSize: '0.6rem', color: '#A78BFA', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Referral Pathway Unlocked
                  </span>
                  <h3 style={{ fontSize: '1.2rem', margin: '2px 0 4px' }}>Holographic Placement Ticket</h3>
                  <p style={{ fontSize: '0.78rem', color: '#94A3B8', lineHeight: 1.4 }}>
                    You have strong fundamentals but need more real-world projects and internship simulation before entering placement rounds.
                  </p>
                </div>
              </div>

              {/* Referral Code Barcode design */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '4px 0', padding: '10px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ fontSize: '0.55rem', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Pathway Referral Code</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 900, color: '#C084FC', fontFamily: 'monospace', letterSpacing: '0.15em', marginTop: '3px' }}>
                  REF-ENGLORAY-{100 + Math.round(careerScore * 8)}X
                </span>
              </div>

              {/* Analysis Lists: Strengths vs Growths */}
              <div className="cg-modal-analysis-grid">
                
                {/* Strengths */}
                <div className="cg-modal-list-box strengths">
                  <h4>✓ Verified Milestones</h4>
                  <div className="cg-modal-list">
                    <span className="cg-modal-list-item strength-bullet">
                      ✓ Fast Learner
                    </span>
                    <span className="cg-modal-list-item strength-bullet">
                      ✓ Good Technical Base
                    </span>
                  </div>
                </div>

                {/* Growths */}
                <div className="cg-modal-list-box growth">
                  <h4>• Shortlist Boosters</h4>
                  <div className="cg-modal-list">
                    <span className="cg-modal-list-item growth-bullet">
                      • Internship Work experience
                    </span>
                    <span className="cg-modal-list-item growth-bullet">
                      • Advanced GitHub workflows
                    </span>
                  </div>
                </div>

              </div>

              {/* Personalized Suggestion Cards */}
              <div className="cg-suggestions-section">
                <h4 style={{ fontSize: '0.78rem', fontWeight: 800, color: '#F8FAFC' }}>Suggested Skill Roadmaps</h4>
                <div className="cg-suggestions-grid">
                  {SUGGESTIONS.map((s, idx) => (
                    <motion.div 
                      key={idx} 
                      className="cg-suggestion-card"
                      whileHover={{ scale: 1.03, y: -2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      style={{ padding: '8px 10px', gap: '3px' }}
                    >
                      <div className="cg-suggestion-card-header">
                        <span className="cg-suggestion-icon" style={{ fontSize: '0.9rem' }}>{s.icon}</span>
                        <span className={`cg-suggestion-difficulty ${s.diff}`} style={{ fontSize: '0.55rem', padding: '1px 5px' }}>
                          {s.diff}
                        </span>
                      </div>
                      <h5 style={{ fontSize: '0.76rem', margin: '2px 0 0' }}>{s.title}</h5>
                      <span className="cg-suggestion-duration" style={{ border: 'none', padding: 0, fontSize: '0.62rem' }}>Est: {s.time}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Modal CTA Action roadmap */}
              <div className="cg-modal-actions" style={{ marginTop: '4px' }}>
                <button
                  onClick={() => {
                    setIsCompleted(false);
                    onOpenApply(); // Trigger the admission modal portal opening!
                  }}
                  className="btn-purple animate-pulse"
                  style={{
                    padding: '10px 32px',
                    borderRadius: '100px',
                    fontWeight: 700,
                    fontSize: '0.82rem',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'linear-gradient(135deg, #8B5CF6 0%, #6C4CF1 100%)',
                    border: 'none',
                    color: '#FFFFFF',
                    cursor: 'pointer',
                    boxShadow: '0 4px 18px rgba(108, 76, 241, 0.4)'
                  }}
                >
                  Shortlist My Profile for Direct Pool <FaArrowRight />
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Careerguidance;
