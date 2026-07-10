import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  FaUsers,
  FaCheck,
  FaBug,
  FaLightbulb,
  FaCode,
  FaRoute,
  FaComments,
  FaFileAlt,
  FaBriefcase,
  FaLayerGroup,
  FaCompass
} from 'react-icons/fa';
import './MentorSupport.css';

/* ----------------------------------------------------------------------- */
/*  Static content                                                          */
/* ----------------------------------------------------------------------- */

const benefits = [
  { title: 'Weekly Code Reviews', icon: <FaCode /> },
  { title: 'Unlimited Doubt Support', icon: <FaComments /> },
  { title: 'Personalized Roadmaps', icon: <FaRoute /> },
  { title: 'Mock Interviews', icon: <FaUsers /> },
  { title: 'Resume Reviews', icon: <FaFileAlt /> },
  { title: 'Portfolio Feedback', icon: <FaLayerGroup /> },
  { title: 'Career Guidance', icon: <FaCompass /> }
];

const studentQuestion = "My array state updates on push, but the UI won't re-render...";
const mentorReply = "Classic mutation issue — you're pushing directly into state. Copy the array first:";

const diffLines = [
  { type: 'del', text: '- const list = items;' },
  { type: 'del', text: '- list.push(newItem);' },
  { type: 'del', text: '- setItems(list);' },
  { type: 'add', text: '+ setItems([...items, newItem]);' }
];

const floatNotes = [
  { id: 'n1', label: 'Review Completed', icon: <FaCheck /> },
  { id: 'n2', label: 'Skill Unlocked', icon: <FaLightbulb /> },
  { id: 'n3', label: 'Portfolio Improved', icon: <FaBriefcase /> }
];

/* ----------------------------------------------------------------------- */
/*  Timing map (ms) — drives the whole simulation loop                      */
/* ----------------------------------------------------------------------- */

const T = {
  studentTypingStart: 400,
  studentTypingDur: 1100,
  mentorTypingStart: 1900,
  mentorTypingDur: 1300,
  mentorTextIn: 3300,
  diffStart: 3900,
  diffLineGap: 550,
  scanStart: 6300,
  scanDur: 1400,
  notesStart: 6600,
  noteGap: 500,
  meterStart: 7600,
  meterDur: 1400,
  holdComplete: 9600,
  reset: 10600
};

const LOOP_LENGTH = 11400;

/* ----------------------------------------------------------------------- */
/*  Sub-component: the animated simulation card                             */
/* ----------------------------------------------------------------------- */

const TypingDots = () => (
  <span className="typing-dots" aria-label="typing">
    <span />
    <span />
    <span />
  </span>
);

const MentorSimCard = () => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.4 });
  const [cycle, setCycle] = useState(0);
  const [stage, setStage] = useState({
    studentTyping: false,
    studentMsg: false,
    mentorTyping: false,
    mentorMsg: false,
    diffCount: 0,
    scanning: false,
    notes: [],
    meter: 6
  });

  useEffect(() => {
    if (!isInView) return;

    const timers = [];
    const reset = () =>
      setStage({
        studentTyping: false,
        studentMsg: false,
        mentorTyping: false,
        mentorMsg: false,
        diffCount: 0,
        scanning: false,
        notes: [],
        meter: 6
      });

    reset();

    timers.push(setTimeout(() => setStage((s) => ({ ...s, studentTyping: true })), T.studentTypingStart));
    timers.push(
      setTimeout(
        () => setStage((s) => ({ ...s, studentTyping: false, studentMsg: true })),
        T.studentTypingStart + T.studentTypingDur
      )
    );
    timers.push(setTimeout(() => setStage((s) => ({ ...s, mentorTyping: true })), T.mentorTypingStart));
    timers.push(
      setTimeout(
        () => setStage((s) => ({ ...s, mentorTyping: false, mentorMsg: true })),
        T.mentorTypingStart + T.mentorTypingDur
      )
    );

    diffLines.forEach((_, i) => {
      timers.push(
        setTimeout(() => setStage((s) => ({ ...s, diffCount: i + 1 })), T.diffStart + i * T.diffLineGap)
      );
    });

    timers.push(setTimeout(() => setStage((s) => ({ ...s, scanning: true })), T.scanStart));
    timers.push(setTimeout(() => setStage((s) => ({ ...s, scanning: false })), T.scanStart + T.scanDur));

    floatNotes.forEach((note, i) => {
      const showAt = T.notesStart + i * T.noteGap;
      timers.push(setTimeout(() => setStage((s) => ({ ...s, notes: [...s.notes, note.id] })), showAt));
    });

    timers.push(setTimeout(() => setStage((s) => ({ ...s, meter: 92 })), T.meterStart));

    timers.push(setTimeout(() => setCycle((c) => c + 1), T.reset));

    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, cycle]);

  return (
    <div className="chat-simulator-card w-full max-w-[380px] sm:max-w-[440px]" ref={cardRef}>
      {/* Header */}
      <div className="chat-header justify-between">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-brand-sky flex items-center justify-center text-white text-xs sm:text-sm font-bold mentor-avatar-pulse">
            M
          </div>
          <div className="text-left">
            <div className="text-[11px] sm:text-xs font-bold text-slate-800">Engloray Mentor Node</div>
            <div className="text-[8.5px] sm:text-[9px] text-[#22c55e] font-semibold flex items-center gap-1">
              Online • Live Session
            </div>
          </div>
        </div>
        <div className="confidence-meter">
          <span className="confidence-label">Confidence</span>
          <div className="confidence-track">
            <motion.div
              className="confidence-fill"
              animate={{ width: `${stage.meter}%` }}
              transition={{ duration: T.meterDur / 1000, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="chat-body relative">
        {/* Floating success notifications */}
        <div className="float-note-layer">
          <AnimatePresence>
            {floatNotes
              .filter((n) => stage.notes.includes(n.id))
              .map((n, idx) => (
                <motion.div
                  key={n.id}
                  className="float-note"
                  style={{ top: `${idx * 26}px` }}
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: -8, scale: 1 }}
                  exit={{ opacity: 0, y: -26 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="float-note-icon">{n.icon}</span>
                  {n.label}
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {/* Student message */}
        <AnimatePresence>
          {stage.studentTyping && (
            <motion.div
              className="bubble-student flex items-center gap-2 self-start"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <span className="text-[9px] font-bold text-slate-400 uppercase flex items-center gap-1">
                <FaBug /> Student
              </span>
              <TypingDots />
            </motion.div>
          )}
          {stage.studentMsg && (
            <motion.div
              className="bubble-student flex flex-col gap-1.5 self-start"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-[9px] font-bold text-slate-400 uppercase flex items-center gap-1">
                <FaBug /> Student
              </span>
              <p>{studentQuestion}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mentor message */}
        <AnimatePresence>
          {stage.mentorTyping && (
            <motion.div
              className="bubble-mentor flex items-center gap-2 self-end"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <span className="text-[9px] font-bold text-brand-sky uppercase flex items-center gap-1">
                <FaLightbulb /> Mentor
              </span>
              <TypingDots />
            </motion.div>
          )}
          {stage.mentorMsg && (
            <motion.div
              className="bubble-mentor flex flex-col gap-2 self-end"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <span className="text-[9px] font-bold text-brand-sky uppercase flex items-center gap-1">
                <FaLightbulb /> Mentor
              </span>
              <p>{mentorReply}</p>

              {/* Animated diff block */}
              <div className="diff-container text-left leading-normal font-mono relative">
                {stage.scanning && <div className="scan-line" />}
                {diffLines.slice(0, stage.diffCount).map((line, i) => (
                  <motion.span
                    key={i}
                    className={`diff-line ${line.type === 'del' ? 'diff-del' : 'diff-add'}`}
                    initial={{ opacity: 0, x: line.type === 'del' ? -6 : 6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {line.text}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

/* ----------------------------------------------------------------------- */
/*  Left column benefit chip                                                */
/* ----------------------------------------------------------------------- */

const benefitVariants = {
  hidden: { opacity: 0, y: 12 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: i * 0.06 }
  })
};

/* ----------------------------------------------------------------------- */
/*  Main export                                                             */
/* ----------------------------------------------------------------------- */

const floatingSymbols = [
  { text: '🎓 Graduated', top: '15%', left: '8%', size: '12px', delay: '0s' },
  { text: '🚀 Project Shipped', top: '78%', left: '38%', size: '11px', delay: '2s' },
  { text: '💼 Hired', top: '22%', left: '88%', size: '12px', delay: '1s' },
  { text: '🌟 Skill Up', top: '82%', left: '85%', size: '11px', delay: '3s' },
  { text: '🤝 Mentor Node', top: '48%', left: '6%', size: '11px', delay: '4s' },
  { text: '📈 Placement', top: '68%', left: '10%', size: '11px', delay: '1.5s' },
];

export const MentorSupport = ({ onOpenApply }) => {
  return (
    <section
      className="relative z-10 w-full py-5 bg-white overflow-hidden text-slate-800 border-b border-slate-200/60 mentor-support-section"
      id="mentor-support"
    >
      {/* Blueprint grid overlay */}
      <div className="mentor-grid-overlay" />

      {/* Floating radial glow backdrops */}
      <div className="mentor-glow-1" />
      <div className="mentor-glow-2" />

      {/* Floating Code Particles */}
      {floatingSymbols.map((sym, i) => (
        <span
          key={i}
          className="mentor-floating-symbol"
          style={{
            top: sym.top,
            left: sym.left,
            fontSize: sym.size,
            animationDelay: sym.delay,
          }}
        >
          {sym.text}
        </span>
      ))}

      <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
          {/* LEFT COLUMN */}
          <motion.div
            className="lg:col-span-6 flex flex-col justify-center text-left order-2 lg:order-1"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-sky flex items-center justify-center text-white text-base sm:text-lg mb-3 sm:mb-4 shadow-glow-sky">
              <FaUsers />
            </div>

            <span className="text-[10px] sm:text-xs text-brand-sky tracking-widest uppercase font-bold block mb-2 font-aldrich">
              MILESTONE // GUIDED GROWTH
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3 sm:mb-4 font-hexco uppercase tracking-wide text-slate-800">
              LEARN DIRECTLY FROM INDUSTRY MENTORS.
            </h2>

            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 font-poppins">
              Never stay stuck. Get personal guidance, line-by-line code reviews, and mock interview prep from active industry experts.
            </p>

            {/* Compact outcome chips */}
            <div className="flex flex-wrap gap-2 mb-6 sm:mb-7">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  className="benefit-chip"
                  custom={i}
                  variants={benefitVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.6 }}
                  whileHover={{ y: -2, scale: 1.03 }}
                >
                  <span className="benefit-chip-icon">{b.icon}</span>
                  <span>{b.title}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={onOpenApply}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="self-center lg:self-start text-xs font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-slate-900 hover:bg-brand-sky text-white hover:text-white shadow-md hover:shadow-glow-sky transition-colors border-none cursor-pointer mt-2"
            >
              Connect with Mentor
            </motion.button>
          </motion.div>

          {/* RIGHT COLUMN — live simulation */}
          <motion.div
            className="lg:col-span-6 flex flex-col gap-4 order-1 lg:order-2 items-center justify-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <MentorSimCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MentorSupport;