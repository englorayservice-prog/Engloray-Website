import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaSearch, FaFileAlt, FaCheckDouble, FaRocket,
  FaLaptopCode, FaComments, FaHandshake
} from 'react-icons/fa';

const coursesSteps = [
  {
    stage: '01',
    title: 'Select Your Track',
    subtitle: 'Browse and select from our industry-vetted specialized upskilling programs (Java, UI/UX, Graphic Design, or Marketing).',
    icon: FaSearch,
    color: '#0ea5e9',
    bgGlow: 'rgba(14, 165, 233, 0.15)'
  },
  {
    stage: '02',
    title: 'Submit Application',
    subtitle: 'Fill out the quick enrollment portal form outlining your academic goals and career objectives.',
    icon: FaFileAlt,
    color: '#3b82f6',
    bgGlow: 'rgba(59, 130, 246, 0.15)'
  },
  {
    stage: '03',
    title: 'Interest Alignment',
    subtitle: 'Connect with our admissions advisor to match your cohort selection with your long-term career interests.',
    icon: FaCheckDouble,
    color: '#8b5cf6',
    bgGlow: 'rgba(139, 92, 246, 0.15)'
  },
  {
    stage: '04',
    title: 'Induction & LMS Access',
    subtitle: 'Unlock your cohort portal dashboard, set up dev workspaces, meet your mentor, and start learning.',
    icon: FaRocket,
    color: '#10b981',
    bgGlow: 'rgba(16, 185, 129, 0.15)'
  }
];

const internshipSteps = [
  {
    stage: '01',
    title: 'Resume Shortlist',
    subtitle: 'Applications are initially screened and shortlisted based on projects, skills, and portfolio profiles.',
    icon: FaFileAlt,
    color: '#ef4444',
    bgGlow: 'rgba(239, 68, 68, 0.15)'
  },
  {
    stage: '02',
    title: 'Aptitude Test',
    subtitle: 'Candidates undergo a logical reasoning and core aptitude assessment (held online or offline).',
    icon: FaLaptopCode,
    color: '#f59e0b',
    bgGlow: 'rgba(245, 158, 11, 0.15)'
  },
  {
    stage: '03',
    title: 'Technical Interaction',
    subtitle: 'A focused discussion to evaluate problem-solving capabilities and technical stack familiarity.',
    icon: FaComments,
    color: '#8b5cf6',
    bgGlow: 'rgba(139, 92, 246, 0.15)'
  },
  {
    stage: '04',
    title: 'HR Interaction',
    subtitle: 'Personal discussion regarding cultural alignment, workspace timelines, and scheduling parameters.',
    icon: FaHandshake,
    color: '#ec4899',
    bgGlow: 'rgba(236, 72, 153, 0.15)'
  },
  {
    stage: '05',
    title: 'Onboarding Process',
    subtitle: 'Orientation briefing, repository keys access configuration, slack setup, and team assignments.',
    icon: FaRocket,
    color: '#06b6d4',
    bgGlow: 'rgba(6, 182, 212, 0.15)'
  }
];

// Stagger the cards in one after another instead of the whole grid fading in at once
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 14, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: 'easeOut' } }
};

export const EnrollmentProcess = () => {
  const [activeTab, setActiveTab] = useState('courses');
  const currentSteps = activeTab === 'courses' ? coursesSteps : internshipSteps;

  return (
    <section className="py-4 bg-white relative overflow-hidden" id="enrollment-process">
      {/* Dynamic Background Accents */}
      <div className="absolute top-1/4 left-0 w-56 h-56 sm:w-72 sm:h-72 bg-sky-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-blue-100 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        <div className="text-center mb-4 section-heading-glow">
          <span className="text-[10px] sm:text-xs text-sky-600 tracking-widest uppercase font-bold block mb-2 font-heading relative z-10">
            ADMISSIONS GUIDE
          </span>
          <h2 className="text-lg sm:text-xl md:text-3xl font-extrabold mb-2 sm:mb-3 text-slate-900 leading-tight relative z-10">
            How to Get Started: <span className="text-sky-500">Enrollment Process</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-medium relative z-10">
            Choose your learning pathway below to explore the distinct application, screening, and onboarding stages.
          </p>
        </div>

        {/* Pathway Interactive Tabs Selector */}
        <div className="flex justify-center mb-4 sm:mb-5 px-2">
          <div className="flex flex-wrap bg-slate-100/80 backdrop-blur-md p-1 rounded-2xl border border-slate-200/50 shadow-sm relative justify-center gap-1">
            <button
              onClick={() => setActiveTab('courses')}
              className={`relative px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-xl font-bold text-[10px] sm:text-xs tracking-wider transition-all duration-300 border-none cursor-pointer z-10 uppercase ${
                activeTab === 'courses' ? 'text-white' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {activeTab === 'courses' && (
                <motion.div
                  layoutId="activeTabBg"
                  className="absolute inset-0 bg-sky-500 rounded-xl -z-10 shadow-md"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              Academic Courses
            </button>
            <button
              onClick={() => setActiveTab('internships')}
              className={`relative px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-xl font-bold text-[10px] sm:text-xs tracking-wider transition-all duration-300 border-none cursor-pointer z-10 uppercase ${
                activeTab === 'internships' ? 'text-white' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {activeTab === 'internships' && (
                <motion.div
                  layoutId="activeTabBg"
                  className="absolute inset-0 bg-sky-500 rounded-xl -z-10 shadow-md"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              Interactive Internship
            </button>
          </div>
        </div>

        {/* Steps Timeline Grid */}
        <div className="relative">
          {/* Horizontal connecting line (Desktop only) */}
          <div className="absolute top-[52px] left-[10%] right-[10%] h-0.5 bg-slate-100 hidden md:block" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
              className={currentSteps.length === 5
                ? "grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 relative z-10"
                : "grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 relative z-10"}
            >
              {currentSteps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={cardVariants}
                    whileHover={{ y: -4 }}
                    className="flex flex-col items-center text-center bg-white border border-slate-200/60 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow duration-300 relative group"
                  >
                    {/* Top Ring Connector (Desktop only) */}
                    <div
                      className="absolute -top-[9px] left-1/2 -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white border-2 items-center justify-center shadow-sm hidden md:flex transition-colors duration-300"
                      style={{ borderColor: step.color }}
                    >
                      <div
                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
                        style={{ backgroundColor: step.color }}
                      />
                    </div>

                    {/* Step Icon with pulsing radium background */}
                    <div
                      className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center text-base sm:text-xl mb-2 sm:mb-3 shadow-sm transition-all duration-300 relative"
                      style={{
                        color: step.color,
                        backgroundColor: step.bgGlow
                      }}
                    >
                      <span
                        className="absolute inset-0 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-110 transition-all duration-500"
                        style={{ border: `2px solid ${step.color}` }}
                      />
                      <IconComponent />
                    </div>

                    {/* Stage Number & Text */}
                    <span
                      className="text-[9px] sm:text-[10px] font-mono font-bold px-1.5 sm:px-2 py-0.5 rounded-md mb-1.5 sm:mb-2 tracking-wide"
                      style={{
                        color: step.color,
                        backgroundColor: step.bgGlow
                      }}
                    >
                      STAGE {step.stage}
                    </span>
                    <h3 className="text-[11px] sm:text-xs font-extrabold text-slate-800 mb-1 sm:mb-1.5 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-[9px] sm:text-[10px] text-slate-500 leading-relaxed font-medium line-clamp-3">
                      {step.subtitle}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default EnrollmentProcess;