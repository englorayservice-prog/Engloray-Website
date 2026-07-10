import React, { useState, useEffect } from 'react';
import studentsImage from '../../assets/Students image.png';
import { FaBriefcase, FaGraduationCap, FaHandshake, FaUserCheck } from 'react-icons/fa';

// Import the new user-uploaded logos from src/assets/logos
import logo1 from '../../assets/logos/Screenshot 2026-06-30 162202.png';
import logo2 from '../../assets/logos/Screenshot 2026-06-30 162220.png';
import logo3 from '../../assets/logos/Screenshot 2026-06-30 162228.png';
import logo4 from '../../assets/logos/Screenshot 2026-06-30 162241.png';
import logo5 from '../../assets/logos/Screenshot 2026-06-30 162248.png';

const partnerLogos = [
  { name: 'Hiring Partner 1', src: logo1 },
  { name: 'Hiring Partner 2', src: logo2 },
  { name: 'Hiring Partner 3', src: logo3 },
  { name: 'Hiring Partner 4', src: logo4 },
  { name: 'Hiring Partner 5', src: logo5 }
];

export const AchievedStudents = () => {
  const [placementCount, setPlacementCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const target = 200;
    const duration = 1400;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setPlacementCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    const frame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  // Duplicate three times for a smooth, endless marquee trail
  const doubleLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <section className="bg-white border-b border-gray-100 w-full overflow-hidden pt-4 pb-2" id="achieved-students">
      <style>{`
        @keyframes studentMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .student-marquee-wrapper {
          overflow: hidden;
          position: relative;
          width: 100%;
        }
        .student-marquee-wrapper::before,
        .student-marquee-wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80px;
          z-index: 2;
          pointer-events: none;
        }
        .student-marquee-wrapper::before {
          left: 0;
          background: linear-gradient(to right, #ffffff, transparent);
        }
        .student-marquee-wrapper::after {
          right: 0;
          background: linear-gradient(to left, #ffffff, transparent);
        }
        .student-marquee-track {
          display: flex;
          width: max-content;
          gap: 16px;
          animation: studentMarquee 20s linear infinite;
        }
        .student-logo-card {
          flex-shrink: 0;
          width: 100px;
          height: 48px;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px 10px;
          overflow: hidden;
        }
        .student-logo-img {
          max-width: 100%;
          max-height: 38px;
          object-fit: contain;
          filter: grayscale(100%);
          opacity: 0.65;
          transition: filter 0.25s, opacity 0.25s, transform 0.25s;
        }
        .placement-counter {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .placement-counter::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          background: radial-gradient(circle at 50% 40%, rgba(108, 76, 241, 0.25), transparent 55%);
          opacity: 0.55;
          filter: blur(10px);
          animation: placementGlow 2.2s ease-in-out infinite;
          z-index: -1;
        }
        @keyframes placementGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.02); }
        }
        .student-logo-card:hover .student-logo-img {
          filter: grayscale(0%);
          opacity: 1;
          transform: scale(1.03);
        }
      `}</style>

      {/* CENTERED HEADING */}
      <div className="text-center mb-4 px-4 sm:px-6 relative z-10">
        <span className="badge-purple mb-2" style={{ display: 'inline-flex' }}>
          PLACEMENT MILESTONES
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Students Who Achieved in <span className="gradient-text-purple">Engloray</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] opacity-[0.12] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center relative z-10 mb-3">

          {/* LEFT COLUMN: Counter & Key Info (7/12 width) */}
          <div className="lg:col-span-7 flex flex-col justify-start items-center lg:items-start text-center lg:text-left gap-5">

            {/* Placements Counter */}
            <div className="flex items-center gap-5 bg-white/40 p-4 rounded-2xl border border-slate-200/30 w-full sm:w-auto shadow-[0_0_25px_rgba(14,165,233,0.08)] ring-1 ring-sky-200/40">
              <span className="placement-counter text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-indigo font-mono tracking-tight">
                {placementCount >= 200 ? '200+' : placementCount}
              </span>
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-slate-800 block uppercase tracking-wider">
                  Students Placed
                </span>
                <span className="text-[10px] font-semibold text-slate-500 block">
                  & Secured Stipend-Backed Internships
                </span>
              </div>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
              We connect developers and designers directly with modern corporate partners, facilitating placement drives, interview prep, and live workspace integrations.
            </p>

            {/* Key Features Grid */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-xl">
              <div className="flex items-center gap-3 bg-white/60 p-3 rounded-xl border border-slate-200/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <FaUserCheck className="text-emerald-500 text-base" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wide leading-tight">50+ Partners</span>
                  <span className="text-[9px] font-semibold text-slate-500 mt-0.5">Hiring Networks</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/60 p-3 rounded-xl border border-slate-200/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center flex-shrink-0">
                  <FaHandshake className="text-sky-500 text-base" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wide leading-tight">Stipend Support</span>
                  <span className="text-[9px] font-semibold text-slate-500 mt-0.5">Backed Internships</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/60 p-3 rounded-xl border border-slate-200/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <FaBriefcase className="text-amber-500 text-base" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wide leading-tight">Direct Drives</span>
                  <span className="text-[9px] font-semibold text-slate-500 mt-0.5">Placement Events</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/60 p-3 rounded-xl border border-slate-200/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
                  <FaGraduationCap className="text-indigo-500 text-base" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wide leading-tight">Hands-On Tech</span>
                  <span className="text-[9px] font-semibold text-slate-500 mt-0.5">Practical Syllabus</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Image Card & Small Scrolling Logo Marquee (5/12 width) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center gap-5 w-full">
            {/* Student image styled as a card */}
            <img
              src={studentsImage}
              alt="Students Who Achieved"
              className="w-full max-w-md sm:max-w-lg h-auto object-contain rounded-2xl shadow-lg border border-slate-200 select-none transition-all duration-500 hover:scale-[1.02] hover:shadow-xl"
            />

            {/* LOGO MARQUEE: Scrolls in a small area below the image */}
            <div className="w-full max-w-md sm:max-w-lg">
              <div className="student-marquee-wrapper bg-slate-100/50 p-2 rounded-xl border border-slate-200/60 shadow-inner">
                <div className="student-marquee-track">
                  {doubleLogos.map((logo, idx) => (
                     <div key={idx} className="student-logo-card">
                      <img 
                        src={logo.src} 
                        alt={logo.name} 
                        title={logo.name} 
                        className="student-logo-img"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AchievedStudents;
