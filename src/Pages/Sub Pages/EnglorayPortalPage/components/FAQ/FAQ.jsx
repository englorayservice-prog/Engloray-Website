import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaRobot,
  FaUserAstronaut,
  FaThumbsUp,
  FaThumbsDown,
  FaFire
} from 'react-icons/fa';

/* ----------------------------------------------------------------------- */
/*  Journey-based categories                                                */
/* ----------------------------------------------------------------------- */

const journeyCategories = [
  { id: 'before-joining', label: 'Before Joining' },
  { id: 'learning', label: 'Learning Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'mentorship', label: 'Mentorship' },
  { id: 'internship', label: 'Internship' },
  { id: 'placements', label: 'Placements' }
];

/* ----------------------------------------------------------------------- */
/*  FAQ data — same {question, answer} shape as before, regrouped along     */
/*  the student journey, with metadata for the new experience               */
/* ----------------------------------------------------------------------- */

const faqData = {
  'before-joining': [
    {
      question: 'What is Engloray?',
      answer:
        'Engloray is a premium technology and learning group. We design real software for corporate clients while running elite training pathways that prepare learners for core technical careers.',
      askedBy: '2.1k+',
      highlights: ['premium technology and learning group', 'elite training pathways']
    },
    {
      question: 'What is the admissions process like?',
      answer:
        'Admissions run through a three-stage pipeline: an online application, a profile evaluation and shortlist, and a short technical alignment call with a mentor to sync your goals.',
      askedBy: '1.4k+',
      highlights: ['three-stage pipeline', 'technical alignment call']
    },
    {
      question: 'Are there age or education restrictions?',
      answer:
        'Not at all. College students, fresh graduates, and working professionals switching domains are all welcome to enroll.',
      askedBy: '860+',
      highlights: ['all welcome']
    },
    {
      question: 'When do new cohorts start?',
      answer:
        'New cohorts begin on a rolling monthly basis. Batch sizes stay small so every candidate gets direct reviews from senior mentors.',
      askedBy: '990+',
      highlights: ['rolling monthly basis', 'direct reviews']
    },
    {
      question: 'Is there an enrollment fee?',
      answer:
        'Cohort fee sheets, sandbox access, and course details are shared during your final alignment call with a learning coordinator.',
      askedBy: '1.1k+',
      highlights: ['final alignment call']
    }
  ],
  learning: [
    {
      question: 'Do I need prior coding experience?',
      answer:
        'No prior experience is required. Every track — Graphic Design, UI/UX, Full-Stack Java, and more — starts with beginner-friendly foundations before moving into practical work.',
      askedBy: '3.2k+',
      highlights: ['no prior experience', 'beginner-friendly foundations']
    },
    {
      question: 'Is the format online, offline, or hybrid?',
      answer:
        'Learning is fully hybrid. Live classes and interactive material happen online, while cohort standups, labs, and reviews happen at our physical gateways.',
      askedBy: '1.8k+',
      highlights: ['fully hybrid']
    },
    {
      question: 'What if I miss a live session?',
      answer:
        'Every lecture and review is recorded and indexed on your cohort dashboard, so you can catch up and clear blockers with your mentor directly.',
      askedBy: '740+',
      highlights: ['recorded and indexed']
    },
    {
      question: 'Do I keep access after the course ends?',
      answer:
        'Yes — lifetime access to templates, code sandboxes, lecture recordings, and the developer community comes with every enrollment.',
      askedBy: '1.5k+',
      highlights: ['lifetime access']
    },
    {
      question: 'What tools will I actually learn?',
      answer:
        'Depending on your track: Figma, Git and GitHub, Express.js, React, PostgreSQL, Docker, and Java Spring Boot, among other production tools.',
      askedBy: '2.0k+',
      highlights: ['production tools']
    }
  ],
  projects: [
    {
      question: 'Will I build real projects, not just exercises?',
      answer:
        'Yes. Every track runs production-style sprints — real briefs, real deadlines, and real code review, not toy assignments.',
      askedBy: '1.6k+',
      highlights: ['production-style sprints', 'real code review']
    },
    {
      question: 'Do these projects go into my portfolio?',
      answer:
        'Every shipped project is packaged for your portfolio, with mentor sign-off so it holds up in interviews.',
      askedBy: '1.2k+',
      highlights: ['packaged for your portfolio']
    },
    {
      question: 'Are projects solo or team-based?',
      answer:
        'Both. Early sprints are solo to build fundamentals, later sprints run in small teams to mirror real engineering workflows.',
      askedBy: '640+',
      highlights: ['small teams', 'real engineering workflows']
    },
    {
      question: 'How is my project work reviewed?',
      answer:
        'Mentors run line-by-line code audits after each sprint, flagging architecture issues before they become habits.',
      askedBy: '910+',
      highlights: ['line-by-line code audits']
    }
  ],
  mentorship: [
    {
      question: 'Do I get a dedicated mentor?',
      answer:
        'Every learner is paired with a senior industry mentor for the full duration of their track, not a rotating help desk.',
      askedBy: '1.9k+',
      highlights: ['senior industry mentor']
    },
    {
      question: 'How often are code reviews?',
      answer:
        'Weekly, at minimum — with async feedback available any time you push a commit worth reviewing.',
      askedBy: '1.1k+',
      highlights: ['Weekly', 'async feedback']
    },
    {
      question: 'Can I ask questions outside class hours?',
      answer:
        'Yes. Direct mentor channels stay open for unlimited doubt-clearing, so you are never stuck waiting for the next class.',
      askedBy: '2.4k+',
      highlights: ['unlimited doubt-clearing']
    },
    {
      question: "What if I'm stuck for days on one concept?",
      answer:
        'That is exactly what mentors are for — book a focused session and walk through it together until it clicks.',
      askedBy: '780+',
      highlights: ['focused session']
    }
  ],
  internship: [
    {
      question: 'Are the internships paid?',
      answer:
        'Yes. Role-based tracks include a base stipend plus performance incentives, with details shared at your final interview stage.',
      askedBy: '2.6k+',
      highlights: ['base stipend', 'performance incentives']
    },
    {
      question: 'Are hours flexible for university students?',
      answer:
        'Fully flexible. Tasks and meetings are coordinated around your classes, exams, and university projects.',
      askedBy: '1.3k+',
      highlights: ['Fully flexible']
    }
  ],
  placements: [
    {
      question: 'What placement support do you provide?',
      answer:
        'End-to-end support: resume audits, LinkedIn optimization, mock technical and HR interviews, and referrals into our partner network.',
      askedBy: '2.2k+',
      highlights: ['End-to-end support', 'partner network']
    },
    {
      question: 'Do I get a certificate?',
      answer:
        'Every course and internship ends with a verified, shareable digital certificate detailing your real project work.',
      askedBy: '1.7k+',
      highlights: ['verified, shareable digital certificate']
    },
    {
      question: 'How do I earn a full-time offer (PPO)?',
      answer:
        'Interns who consistently hit sprint goals and show growth get nominated for Pre-Placement Offers at Engloray or our client firms.',
      askedBy: '1.0k+',
      highlights: ['Pre-Placement Offers']
    }
  ]
};

/* ----------------------------------------------------------------------- */
/*  Helpers                                                                  */
/* ----------------------------------------------------------------------- */

const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const renderHighlighted = (text, highlights = []) => {
  if (!highlights.length) return text;
  const pattern = highlights.map(escapeRegExp).join('|');
  const regex = new RegExp(`(${pattern})`, 'gi');
  const parts = text.split(regex);
  return parts.map((part, i) =>
    highlights.some((h) => h.toLowerCase() === part.toLowerCase()) ? (
      <mark className="faq-keyword" key={i}>
        {part}
      </mark>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
};

const splitSentences = (text) => text.match(/[^.]+[.!?]*/g)?.map((s) => s.trim()).filter(Boolean) || [text];

const flatIndex = (catId, idx) => `${catId}::${idx}`;

/* ----------------------------------------------------------------------- */
/*  Magnetic category button                                                */
/* ----------------------------------------------------------------------- */

const MagneticButton = ({ children, onClick, active }) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    setPos({ x: relX * 0.22, y: relY * 0.3 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      onClick={onClick}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 10 }}
      className={`faq-category-btn ${active ? 'active' : ''}`}
    >
      {children}
    </motion.button>
  );
};

/* ----------------------------------------------------------------------- */
/*  Floating background particles                                           */
/* ----------------------------------------------------------------------- */

const Particles = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        left: Math.round((i * 137.5) % 100),
        top: Math.round((i * 71.3) % 100),
        size: 3 + (i % 4),
        duration: 8 + (i % 6),
        delay: (i % 5) * 0.7
      })),
    []
  );

  return (
    <div className="faq-particles" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="faq-particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`
          }}
        />
      ))}
    </div>
  );
};

/* ----------------------------------------------------------------------- */
/*  Main component                                                          */
/* ----------------------------------------------------------------------- */

export const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('before-joining');
  const [selected, setSelected] = useState(null); // { catId, idx }
  const [typing, setTyping] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const panelRef = useRef(null);
  const typingTimer = useRef(null);

  /* Drive the typing -> reveal sequence whenever a question is selected */
  useEffect(() => {
    if (!selected) return;
    clearTimeout(typingTimer.current);
    setTyping(true);
    setRevealed(false);
    setFeedback(null);

    typingTimer.current = setTimeout(() => {
      setTyping(false);
      setRevealed(true);
    }, 900);

    const scrollTimer = setTimeout(() => {
      panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 120);

    return () => {
      clearTimeout(typingTimer.current);
      clearTimeout(scrollTimer);
    };
  }, [selected]);

  const handleSelect = (catId, idx) => {
    setSelected({ catId, idx });
  };

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
  };

  const visibleBubbles = faqData[activeCategory].map((item, idx) => ({ catId: activeCategory, idx, ...item }));

  const currentQuestion = selected ? faqData[selected.catId][selected.idx] : null;

  const followUps = useMemo(() => {
    if (!selected) return [];
    return faqData[selected.catId]
      .map((item, idx) => ({ ...item, catId: selected.catId, idx }))
      .filter((item) => item.idx !== selected.idx)
      .slice(0, 2);
  }, [selected]);

  /* Keep a valid selection whenever the visible list changes (category swap) */
  useEffect(() => {
    const list = visibleBubbles;
    if (!list.length) {
      setSelected(null);
      return;
    }
    const stillVisible = selected && list.some((it) => it.catId === selected.catId && it.idx === selected.idx);
    if (!stillVisible) {
      setSelected({ catId: list[0].catId, idx: list[0].idx });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory]);

  return (
    <section className="faq-section" id="faq">
      <style>{`
        .faq-section {
          position: relative;
          padding: 36px 20px;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
          overflow: hidden;
        }

        .faq-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .faq-particle {
          position: absolute;
          border-radius: 9999px;
          background: rgba(14, 165, 233, 0.25);
          animation-name: faqFloat;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        @keyframes faqFloat {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.35; }
          50% { transform: translateY(-22px) translateX(10px); opacity: 0.9; }
        }

        .faq-container {
          max-width: 980px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* ── Header ── */
        .faq-header { text-align: center; margin-bottom: 24px; }
        .faq-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #0ea5e9;
          margin-bottom: 10px;
          font-family: 'Aldrich', monospace;
        }
        .faq-title {
          font-size: clamp(22px, 3vw, 32px);
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 12px;
          font-family: 'HEXCO', sans-serif;
          letter-spacing: 0.02em;
        }
        .faq-subtitle {
          font-size: 13.5px;
          color: #64748b;
          max-width: 460px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* ── Category nav ── */
        .faq-categories {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 26px;
        }
        .faq-category-btn {
          padding: 8px 16px;
          font-size: 11px;
          font-weight: 700;
          border-radius: 9999px;
          cursor: pointer;
          border: 1px solid rgba(15, 23, 42, 0.08);
          font-family: 'Aldrich', monospace;
          text-transform: uppercase;
          outline: none;
          background: #ffffff;
          color: #64748b;
          transition: background 0.25s, color 0.25s, border-color 0.25s, box-shadow 0.25s;
        }
        .faq-category-btn.active {
          background: #0ea5e9;
          color: #ffffff;
          border-color: #0ea5e9;
          box-shadow: 0 4px 14px rgba(14, 165, 233, 0.3);
        }
        .faq-category-btn:not(.active):hover {
          color: #0f172a;
          border-color: rgba(14, 165, 233, 0.45);
          box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.08);
        }

        /* ── Two-column layout: questions left, answer right ── */
        .faq-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
          gap: 22px;
          align-items: start;
        }
        @media (max-width: 760px) {
          .faq-layout {
            grid-template-columns: 1fr;
          }
        }

        /* ── Question list (left) ── */
        .faq-question-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .faq-question-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          width: 100%;
          text-align: left;
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-left: 3px solid transparent;
          border-radius: 10px;
          padding: 11px 14px;
          cursor: pointer;
          font-family: inherit;
        }
        .faq-question-item:hover {
          border-color: rgba(14, 165, 233, 0.35);
        }
        .faq-question-item.selected {
          border-left-color: #0ea5e9;
          border-color: rgba(14, 165, 233, 0.35);
          background: rgba(14, 165, 233, 0.05);
        }
        .faq-question-text {
          font-size: 12.5px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.4;
        }
        .faq-question-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 9px;
          font-weight: 700;
          color: #f97316;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .faq-empty-state {
          font-size: 12.5px;
          color: #94a3b8;
          padding: 16px;
          text-align: center;
          background: #ffffff;
          border: 1px dashed #e2e8f0;
          border-radius: 10px;
        }

        /* ── Answer box (right, compact + sticky) ── */
        .faq-answer-col {
          position: sticky;
          top: 16px;
        }
        .assistant-panel-glow {
          border-radius: 18px;
          padding: 2px;
          background: linear-gradient(120deg, #0ea5e9, #22c55e, #38bdf8, #0ea5e9);
          background-size: 300% 300%;
          animation: faqGradientShift 7s ease infinite;
        }
        @keyframes faqGradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .assistant-panel-inner {
          background: #ffffff;
          border-radius: 16px;
          padding: 16px 16px 14px;
          max-height: 420px;
          overflow-y: auto;
        }

        .chat-row { display: flex; gap: 8px; margin-bottom: 10px; }
        .chat-avatar {
          width: 26px;
          height: 26px;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          color: #ffffff;
          flex-shrink: 0;
        }
        .chat-avatar.student { background: #94a3b8; }
        .chat-avatar.assistant { background: #0ea5e9; position: relative; }
        .chat-avatar.assistant::after {
          content: '';
          position: absolute;
          bottom: -1px;
          right: -1px;
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background: #22c55e;
          border: 2px solid #ffffff;
        }

        .chat-bubble-text {
          font-size: 12.5px;
          line-height: 1.55;
          color: #0f172a;
          background: #f1f5f9;
          border-radius: 4px 12px 12px 12px;
          padding: 8px 12px;
        }
        .chat-bubble-text.assistant {
          background: rgba(14, 165, 233, 0.05);
          border: 1px solid rgba(14, 165, 233, 0.15);
          border-radius: 4px 12px 12px 12px;
          color: #0f172a;
        }

        .faq-keyword {
          background: rgba(34, 197, 94, 0.18);
          color: #15803d;
          padding: 0 3px;
          border-radius: 4px;
          font-weight: 700;
        }

        .faq-typing-dots { display: inline-flex; gap: 3px; }
        .faq-typing-dots span {
          width: 5px; height: 5px; border-radius: 9999px;
          background: #0ea5e9; opacity: 0.4;
          animation: faqTypingBounce 1s ease-in-out infinite;
        }
        .faq-typing-dots span:nth-child(2) { animation-delay: 0.15s; }
        .faq-typing-dots span:nth-child(3) { animation-delay: 0.3s; }
        @keyframes faqTypingBounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-3px); opacity: 1; }
        }

        .faq-popularity {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 10px;
          font-weight: 700;
          color: #f97316;
          margin-bottom: 6px;
        }

        .faq-followup-title {
          font-size: 9.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #94a3b8;
          margin: 12px 0 6px;
        }
        .faq-followup-list { display: flex; flex-direction: column; gap: 5px; }
        .faq-followup-item {
          text-align: left;
          font-size: 11.5px;
          font-weight: 600;
          color: #0ea5e9;
          background: rgba(14, 165, 233, 0.05);
          border: 1px solid rgba(14, 165, 233, 0.15);
          border-radius: 9px;
          padding: 7px 10px;
          cursor: pointer;
          font-family: inherit;
        }

        .faq-feedback {
          margin-top: 12px;
          padding-top: 10px;
          border-top: 1px dashed #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
        }
        .faq-feedback-label { font-size: 11px; color: #64748b; font-weight: 600; }
        .faq-feedback-btns { display: flex; gap: 8px; }
        .faq-feedback-btn {
          width: 28px; height: 28px;
          border-radius: 9999px;
          border: 1px solid rgba(15, 23, 42, 0.1);
          background: #ffffff;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          font-size: 10.5px;
          color: #64748b;
        }
        .faq-feedback-btn.up.active { background: #22c55e; border-color: #22c55e; color: #fff; }
        .faq-feedback-btn.down.active { background: #ef4444; border-color: #ef4444; color: #fff; }
        .faq-feedback-thanks { font-size: 11px; font-weight: 700; color: #22c55e; }
      `}</style>

      <Particles />

      <div className="faq-container">
        {/* Header */}
        <motion.div
          className="faq-header"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <span className="faq-eyebrow">
            <FaRobot /> AI GUIDANCE CENTER
          </span>
          <h2 className="faq-title">Questions Every Student Asks Before Joining</h2>
        </motion.div>

        {/* Category navigation */}
          <motion.div
            className="faq-categories"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            {journeyCategories.map((cat) => (
              <MagneticButton
                key={cat.id}
                active={activeCategory === cat.id}
                onClick={() => handleCategoryChange(cat.id)}
              >
                {cat.label}
              </MagneticButton>
            ))}
          </motion.div>

        {/* Question (left) + Answer (right) layout */}
        <div className="faq-layout">
          {/* Question list */}
          <div className="faq-question-list">
            <AnimatePresence mode="popLayout">
              {visibleBubbles.length === 0 && (
                <motion.div
                  key="empty"
                  className="faq-empty-state"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  No questions available right now.
                </motion.div>
              )}
              {visibleBubbles.map((item, i) => {
                const isSelected = selected && selected.catId === item.catId && selected.idx === item.idx;
                return (
                  <motion.button
                    key={flatIndex(item.catId, item.idx)}
                    layout
                    className={`faq-question-item ${isSelected ? 'selected' : ''}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.03 }}
                    onClick={() => handleSelect(item.catId, item.idx)}
                  >
                    <span className="faq-question-text">{item.question}</span>
                    <span className="faq-question-badge">
                      <FaFire /> {item.askedBy}
                    </span>
                  </motion.button>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Compact answer box */}
          <div className="faq-answer-col" ref={panelRef}>
            <AnimatePresence mode="wait">
              {currentQuestion && (
                <motion.div
                  key={flatIndex(selected.catId, selected.idx)}
                  className="assistant-panel-glow"
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="assistant-panel-inner">
                    {/* Student question */}
                    <div className="chat-row">
                      <div className="chat-avatar student">
                        <FaUserAstronaut />
                      </div>
                      <div className="chat-bubble-text">{currentQuestion.question}</div>
                    </div>

                    {/* Assistant response */}
                    <div className="chat-row">
                      <div className="chat-avatar assistant">
                        <FaRobot />
                      </div>
                      <div style={{ flex: 1 }}>
                        {typing && (
                          <div className="chat-bubble-text assistant">
                            <span className="faq-typing-dots">
                              <span /><span /><span />
                            </span>
                          </div>
                        )}

                        {revealed && (
                          <div className="chat-bubble-text assistant">
                            <span className="faq-popularity">
                              <FaFire /> Asked by {currentQuestion.askedBy} students
                            </span>
                            <motion.div
                              initial="hidden"
                              animate="show"
                              variants={{
                                hidden: {},
                                show: { transition: { staggerChildren: 0.1 } }
                              }}
                            >
                              {splitSentences(currentQuestion.answer).map((sentence, i) => (
                                <motion.p
                                  key={i}
                                  variants={{
                                    hidden: { opacity: 0, y: 5 },
                                    show: { opacity: 1, y: 0 }
                                  }}
                                  transition={{ duration: 0.25 }}
                                  style={{ margin: i === 0 ? 0 : '4px 0 0' }}
                                >
                                  {renderHighlighted(sentence, currentQuestion.highlights)}
                                </motion.p>
                              ))}
                            </motion.div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Students also asked */}
                    {revealed && followUps.length > 0 && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
                        <div className="faq-followup-title">Students also asked</div>
                        <div className="faq-followup-list">
                          {followUps.map((fu) => (
                            <button
                              key={flatIndex(fu.catId, fu.idx)}
                              className="faq-followup-item"
                              onClick={() => handleSelect(fu.catId, fu.idx)}
                            >
                              {fu.question}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Feedback */}
                    {revealed && (
                      <motion.div
                        className="faq-feedback"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.35 }}
                      >
                        <span className="faq-feedback-label">Was this helpful?</span>
                        {feedback ? (
                          <motion.span
                            className="faq-feedback-thanks"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                          >
                            Thanks for your feedback!
                          </motion.span>
                        ) : (
                          <div className="faq-feedback-btns">
                            <motion.button
                              whileTap={{ scale: 0.85 }}
                              whileHover={{ scale: 1.08 }}
                              className="faq-feedback-btn up"
                              onClick={() => setFeedback('up')}
                            >
                              <FaThumbsUp />
                            </motion.button>
                            <motion.button
                              whileTap={{ scale: 0.85 }}
                              whileHover={{ scale: 1.08 }}
                              className="faq-feedback-btn down"
                              onClick={() => setFeedback('down')}
                            >
                              <FaThumbsDown />
                            </motion.button>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;