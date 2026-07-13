import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const internshipDetails = [
  {
    id: 0,
    title: "Graphic Designing",
    duration: "3 Months",
    color: "#6C4CF1", // Brand Purple
    videoSrc: "/Graphic Design.mp4",
    icon: (
      <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" stroke="#6C4CF1" strokeWidth="1.5" strokeDasharray="3 3"/>
        <rect x="25" y="30" width="50" height="40" rx="4" fill="rgba(108, 76, 241, 0.05)" stroke="#6C4CF1" strokeWidth="2"/>
        <path d="M35 55L43 47L55 57L65 48L72 54" stroke="#6C4CF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="62" cy="40" r="4" fill="#6C4CF1"/>
      </svg>
    ),
    responsibilities: [
      "Create engaging social visuals & digital layouts.",
      "Design brand vectors and custom Figma assets."
    ],
    eligibility: "Basic Photoshop/Figma knowledge.",
    benefits: "Stipend, verified certificate & PPO path."
  },
  {
    id: 1,
    title: "Website Development",
    duration: "3-6 Months",
    color: "#6C4CF1", // Brand Purple
    videoSrc: "/Web development.mp4",
    icon: (
      <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" stroke="#6C4CF1" strokeWidth="1.5" strokeDasharray="3 3"/>
        <rect x="20" y="25" width="60" height="42" rx="4" fill="rgba(108, 76, 241, 0.05)" stroke="#6C4CF1" strokeWidth="2"/>
        <rect x="40" y="67" width="20" height="8" fill="#6C4CF1"/>
        <line x1="30" y1="75" x2="70" y2="75" stroke="#6C4CF1" strokeWidth="3"/>
        <path d="M30 45L35 40L30 35" stroke="#6C4CF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    responsibilities: [
      "Develop responsive React.js frontend pages.",
      "Connect API endpoints & manage state workflow."
    ],
    eligibility: "HTML, CSS, JavaScript foundations.",
    benefits: "Stipend, career toolkit & PPO offer."
  },
  {
    id: 2,
    title: "UI/UX Design",
    duration: "3 Months",
    color: "#6C4CF1", // Brand Purple
    videoSrc: "/UI-UX.mp4",
    icon: (
      <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" stroke="#6C4CF1" strokeWidth="1.5" strokeDasharray="3 3"/>
        <rect x="22" y="26" width="26" height="48" rx="3" fill="rgba(108, 76, 241, 0.05)" stroke="#6C4CF1" strokeWidth="2"/>
        <rect x="52" y="26" width="26" height="48" rx="3" fill="rgba(108, 76, 241, 0.05)" stroke="#6C4CF1" strokeWidth="2"/>
        <circle cx="35" cy="50" r="6" fill="#6C4CF1"/>
      </svg>
    ),
    responsibilities: [
      "Create user wireframes & clickable prototypes.",
      "Design visual component libraries in Figma."
    ],
    eligibility: "Interest in user experience design.",
    benefits: "Mentor reviews, certification & portfolio build."
  },
  {
    id: 3,
    title: "Software Development",
    duration: "6 Months",
    color: "#6C4CF1", // Brand Purple
    videoSrc: "/Programming and development.mp4",
    icon: (
      <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" stroke="#6C4CF1" strokeWidth="1.5" strokeDasharray="3 3"/>
        <rect x="25" y="25" width="50" height="12" rx="2" fill="rgba(108, 76, 241, 0.1)" stroke="#6C4CF1" strokeWidth="2"/>
        <rect x="25" y="44" width="50" height="12" rx="2" fill="rgba(108, 76, 241, 0.1)" stroke="#6C4CF1" strokeWidth="2"/>
        <rect x="25" y="63" width="50" height="12" rx="2" fill="rgba(108, 76, 241, 0.1)" stroke="#6C4CF1" strokeWidth="2"/>
      </svg>
    ),
    responsibilities: [
      "Write backend API code & databases (SQL).",
      "Deploy containers using Docker & Git pipelines."
    ],
    eligibility: "Basic coding principles (Java/Python).",
    benefits: "Stipend, cloud credits & peer review."
  },
  {
    id: 4,
    title: "Sales Executive",
    duration: "3 Months",
    color: "#6C4CF1", // Brand Purple
    videoSrc: "/Digital Marketing.mp4",
    icon: (
      <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" stroke="#6C4CF1" strokeWidth="1.5" strokeDasharray="3 3"/>
        <path d="M30 40H70V70C70 75.5 50 80 50 80C50 80 30 75.5 30 70V40Z" fill="rgba(108, 76, 241, 0.05)" stroke="#6C4CF1" strokeWidth="2"/>
        <ellipse cx="50" cy="40" rx="20" ry="8" fill="rgba(108, 76, 241, 0.1)" stroke="#6C4CF1" strokeWidth="2"/>
      </svg>
    ),
    responsibilities: [
      "Pitch courses, guide students & close enrollments.",
      "Track communication logs & CRM boards."
    ],
    eligibility: "Polite, active speaking & writing skills.",
    benefits: "Base pay + commissions & sales certificate."
  },
  {
    id: 5,
    title: "Training Mentor",
    duration: "4 Months",
    color: "#6C4CF1", // Brand Purple
    videoSrc: "/AI Tools and future skill.mp4",
    icon: (
      <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" stroke="#6C4CF1" strokeWidth="1.5" strokeDasharray="3 3"/>
        <path d="M30 65C30 55 40 50 50 50C60 50 70 55 70 65V75H30V65Z" fill="rgba(108, 76, 241, 0.05)" stroke="#6C4CF1" strokeWidth="2"/>
        <circle cx="50" cy="35" r="11" fill="rgba(108, 76, 241, 0.1)" stroke="#6C4CF1" strokeWidth="2"/>
      </svg>
    ),
    responsibilities: [
      "Guide junior learners & clear programming doubts.",
      "Review exercises & run Q&A coding labs."
    ],
    eligibility: "Strong JavaScript or Java fundamentals.",
    benefits: "Stipend, teaching credentials & mentor networks."
  },
  {
    id: 6,
    title: "Business Development",
    duration: "3 Months",
    color: "#6C4CF1", // Brand Purple
    videoSrc: "/Businaess development .mp4",
    icon: (
      <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" stroke="#6C4CF1" strokeWidth="1.5" strokeDasharray="3 3"/>
        <rect x="25" y="35" width="50" height="36" rx="4" fill="rgba(108, 76, 241, 0.05)" stroke="#6C4CF1" strokeWidth="2"/>
        <path d="M40 35V28C40 25.8 41.8 24 44 24H56C58.2 24 60 25.8 60 28V35" stroke="#6C4CF1" strokeWidth="2"/>
      </svg>
    ),
    responsibilities: [
      "Form strategic partnerships & research markets.",
      "Co-ordinate webinar pipelines & campus events."
    ],
    eligibility: "Analytical mindset & good organization.",
    benefits: "Stipend, executive mentoring & leadership badge."
  }
];

function roleFor(index, activeIndex, totalCount) {
  if (index === activeIndex) return "center";
  if (index === (activeIndex + 1) % totalCount) return "right";
  if (index === (activeIndex + totalCount - 1) % totalCount) return "left";
  return "back";
}

const cardVariants = {
  center: (width) => ({
    x: "-50%",
    left: "50%",
    scale: width < 480 ? 0.85 : (width < 768 ? 0.95 : 1.05),
    rotateY: 0,
    filter: "blur(0px)",
    opacity: 1,
    zIndex: 20,
  }),
  left: (width) => ({
    x: "-50%",
    left: width < 480 ? "24%" : (width < 768 ? "20%" : "22%"),
    scale: width < 480 ? 0.55 : (width < 768 ? 0.65 : 0.75),
    rotateY: 32,
    filter: "blur(2.5px)",
    opacity: 0.45,
    zIndex: 10,
  }),
  right: (width) => ({
    x: "-50%",
    left: width < 480 ? "76%" : (width < 768 ? "80%" : "78%"),
    scale: width < 480 ? 0.55 : (width < 768 ? 0.65 : 0.75),
    rotateY: -32,
    filter: "blur(2.5px)",
    opacity: 0.45,
    zIndex: 10,
  }),
  back: () => ({
    x: "-50%",
    left: "50%",
    scale: 0.5,
    rotateY: 0,
    filter: "blur(4px)",
    opacity: 0,
    zIndex: 5,
  })
};

const Internship3DCard = ({ role, itemRole, isActive, windowWidth, onClick }) => {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!isActive || windowWidth < 768 || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    const rX = -(mouseY / (height / 2)) * 12;
    const rY = (mouseX / (width / 2)) * 12;
    
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    if (isActive) {
      setIsHovered(true);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      custom={windowWidth}
      variants={cardVariants}
      animate={itemRole}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      className={`absolute w-[115px] sm:w-[135px] md:w-[165px] h-[175px] sm:h-[210px] md:h-[245px] rounded-2xl cursor-pointer select-none`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        className="w-full h-full rounded-2xl relative p-4 flex flex-col justify-between overflow-hidden border"
        animate={{ 
          rotateX: isActive ? rotateX : 0, 
          rotateY: isActive ? rotateY : 0,
          scale: isHovered ? 1.04 : 1
        }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
        style={{
          transformStyle: "preserve-3d",
          backgroundColor: 'rgba(9, 15, 30, 0.85)',
          borderColor: isActive ? '#6C4CF1' : 'rgba(255, 255, 255, 0.05)',
          boxShadow: isActive 
            ? '0 20px 45px rgba(0,0,0,0.55), inset 0 1px 1px rgba(255, 255, 255, 0.08), 0 0 25px rgba(108, 76, 241, 0.15)' 
            : '0 8px 24px rgba(0,0,0,0.45)',
        }}
      >
        {/* Colorful Dynamic Aurora */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none blur-[40px] rounded-2xl transition-all duration-300"
          style={{ 
            background: `radial-gradient(circle at 50% 50%, #6C4CF1 0%, transparent 70%)` 
          }}
        />

        {/* Top: Serial Number / Portal Label */}
        <div className="flex justify-between items-center z-10" style={{ transform: "translateZ(20px)" }}>
          <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">
            ER-0{role.id + 1} / PORTAL
          </span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#6C4CF1', boxShadow: `0 0 6px #6C4CF1` }} />
            <span className="text-[8px] font-mono text-slate-400 font-bold uppercase tracking-wider">
              {isActive ? "ACTIVE" : "READY"}
            </span>
          </div>
        </div>

        {/* Middle: Floating 3D Icon */}
        <div 
          className="flex-1 flex items-center justify-center my-4 relative"
          style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}
        >
          {/* Base Platform Ring */}
          <div 
            className="absolute bottom-2 w-16 h-3 rounded-full opacity-35 blur-[2px]" 
            style={{ 
              background: `radial-gradient(ellipse at center, #6C4CF1 0%, transparent 80%)`,
            }}
          />

          <motion.div
            animate={{ 
              y: isActive ? [-6, 6, -6] : 0,
              rotateY: isActive ? [0, 8, -8, 0] : 0 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4.5, 
              ease: "easeInOut" 
            }}
            className="relative z-10 w-[100px] h-[65px] sm:w-[135px] sm:h-[90px] md:w-[165px] md:h-[105px] flex items-center justify-center"
            style={{ filter: isActive ? 'drop-shadow(0 8px 12px rgba(0,0,0,0.5))' : 'none' }}
          >
            {role.videoSrc ? (
              <div className="w-full h-full rounded-lg overflow-hidden border-[3px] border-slate-800 shadow-2xl relative bg-black flex items-center justify-center">
                <video
                  className="w-full h-full object-cover"
                  src={encodeURI(role.videoSrc)}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />
              </div>
            ) : (
              role.icon
            )}
          </motion.div>
        </div>

        {/* Bottom: Toy Brand label and Title */}
        <div className="flex flex-col gap-1 text-left z-10" style={{ transform: "translateZ(30px)" }}>
          <span 
            className="text-[8px] font-extrabold uppercase tracking-widest font-heading"
            style={{ color: '#6C4CF1' }}
          >
            ENGLORAY INTL
          </span>
          <h4 className="text-[10px] sm:text-xs md:text-sm font-extrabold text-white leading-tight tracking-tight">
            {role.title.toUpperCase()}
          </h4>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const InternshipsInteractive = ({ onOpenApply }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const activeRole = internshipDetails[activeIndex];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-5 bg-[#070D19] border-b border-slate-800 relative overflow-hidden" id="internship-details">
      {/* Dynamic Aurora Glow Behind Section */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[130px] opacity-15 pointer-events-none transition-all duration-700 ease-out"
        style={{
          background: `radial-gradient(circle, #6C4CF1 0%, transparent 65%)`
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-6">
          <span className="text-xs text-brand-purple tracking-widest uppercase font-bold block mb-2 font-heading" style={{ color: '#6C4CF1' }}>
            PORTAL GUIDE
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3 text-white">Explore Interactive Internships</h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          
          {/* 3D Toy-Box Carousel Panel (Left, 7 columns) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center relative w-full h-[250px] sm:h-[290px] md:h-[330px]">
            
            {/* Giant Sliding Ghost Text Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden opacity-5">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={activeIndex}
                  initial={{ opacity: 0, y: 25, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -25, scale: 0.96 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className="font-heading font-black tracking-tighter uppercase whitespace-nowrap text-[50px] xs:text-[70px] sm:text-[100px] md:text-[140px] text-slate-800"
                >
                  {activeRole.title.split(' ')[0]}
                </motion.h3>
              </AnimatePresence>
            </div>

            {/* 3D Viewport Box */}
            <div 
              className="relative w-full h-[175px] sm:h-[210px] md:h-[245px] overflow-visible flex items-center justify-center z-10"
              style={{ perspective: 1200, transformStyle: "preserve-3d" }}
            >
              {internshipDetails.map((role, idx) => {
                const itemRole = roleFor(idx, activeIndex, internshipDetails.length);
                const isActive = activeIndex === idx;

                return (
                  <Internship3DCard
                    key={role.id}
                    role={role}
                    itemRole={itemRole}
                    isActive={isActive}
                    windowWidth={windowWidth}
                    onClick={() => {
                      if (itemRole === 'left') {
                        setActiveIndex((prev) => (prev + internshipDetails.length - 1) % internshipDetails.length);
                      } else if (itemRole === 'right') {
                        setActiveIndex((prev) => (prev + 1) % internshipDetails.length);
                      }
                    }}
                  />
                );
              })}
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-center gap-6 mt-4 z-20 relative">
              <button
                type="button"
                aria-label="Previous internship"
                onClick={() => setActiveIndex((prev) => (prev + internshipDetails.length - 1) % internshipDetails.length)}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white hover:text-brand-purple hover:border-brand-purple hover:bg-brand-purple/10 transition-all duration-200 cursor-pointer focus:outline-none"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
                </svg>
              </button>
              
              <span className="font-mono text-[9px] text-slate-500 tracking-widest uppercase">
                0{activeIndex + 1} / 0{internshipDetails.length}
              </span>

              <button
                type="button"
                aria-label="Next internship"
                onClick={() => setActiveIndex((prev) => (prev + 1) % internshipDetails.length)}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white hover:text-brand-purple hover:border-brand-purple hover:bg-brand-purple/10 transition-all duration-200 cursor-pointer focus:outline-none"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>

          </div>

          {/* Details visual container (Right, 5 columns) */}
          <div className="lg:col-span-5">
            <div 
              className="p-4 md:p-5 min-h-[290px] md:min-h-[310px] flex flex-col justify-center border border-slate-800 bg-slate-900/60 shadow-floating rounded-2xl relative overflow-hidden"
              style={{ borderLeft: `4px solid #6C4CF1`, backdropFilter: 'blur(16px)' }}
            >
              {/* Radial gradient background accent on the detail box */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-15 pointer-events-none rounded-full transition-all duration-500"
                style={{ backgroundColor: '#6C4CF1' }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="flex flex-col gap-3 text-left relative z-10"
                >
                  <div className="flex flex-col gap-1">
                    <span 
                      className="inline-block text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded border self-start font-mono"
                      style={{ borderColor: `rgba(108, 76, 241, 0.3)`, color: '#6C4CF1', backgroundColor: `rgba(108, 76, 241, 0.1)` }}
                    >
                      ROLE DETAILS
                    </span>
                    <h3 className="text-xl md:text-2xl font-extrabold text-white leading-tight tracking-tight">{activeRole.title}</h3>
                    <p className="text-[10px] text-gray-400 font-mono">STIPEND COHORT DURATION: <span className="text-white font-semibold">{activeRole.duration}</span></p>
                  </div>

                  <div className="flex flex-col gap-2.5 border-t border-slate-800 pt-2.5">
                    <div className="flex flex-col gap-1">
                      <h4 className="text-[10px] text-white uppercase tracking-wider font-extrabold font-heading">Key Responsibilities:</h4>
                      <ul className="list-none flex flex-col gap-1 pl-0">
                        {activeRole.responsibilities.map((resp, i) => (
                          <li key={i} className="text-xs text-gray-300 flex items-start gap-2 leading-relaxed">
                            <span style={{ color: '#6C4CF1' }}>→</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col gap-0.5">
                      <h4 className="text-[10px] text-white uppercase tracking-wider font-extrabold font-heading">Eligibility Criteria:</h4>
                      <p className="text-xs text-gray-300 leading-relaxed font-body">{activeRole.eligibility}</p>
                    </div>

                    <div className="flex flex-col gap-0.5">
                      <h4 className="text-[10px] text-white uppercase tracking-wider font-extrabold font-heading">Benefits & Perks:</h4>
                      <p className="text-xs text-gray-300 leading-relaxed font-body">{activeRole.benefits}</p>
                    </div>
                  </div>

                  <div className="mt-1">
                    <button 
                      onClick={onOpenApply}
                      className="text-xs font-bold px-6 py-2.5 rounded-full text-white hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer border-none font-heading shadow-md"
                      style={{ 
                        background: 'linear-gradient(135deg, #6C4CF1 0%, #4F46E5 100%)',
                        boxShadow: '0 4px 15px rgba(108, 76, 241, 0.35)'
                      }}
                    >
                      Apply for {activeRole.title}
                    </button>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default InternshipsInteractive;
