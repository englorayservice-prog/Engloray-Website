import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import { FaGraduationCap, FaArrowRight } from 'react-icons/fa';
import './ServicesOrbit.css';

const careersData = [
  {
    id: 'ai-engineer',
    title: 'Future AI Engineer',
    emoji: '👨‍💻',
    desc: 'Build intelligent neural systems & automated agents.',
    duration: '6 Months',
    timeline: '6-Month Pathway',
    level: 'Beginner to Adv.',
    internship: 'Paid Internship',
    placement: 'Interview Pool',
    salary: '₹6–12 LPA',
    color: '#5B5FEF', // Primary Blue/Indigo
    colorAlpha: 'rgba(91, 95, 239, 0.12)',
    skills: ['Deep Learning', 'PyTorch & Python', 'LLMs & Agents', 'NLP Pipelines'],
    companies: ['Google', 'Microsoft', 'NVIDIA', 'OpenAI']
  },
  {
    id: 'software-engineer',
    title: 'Future Software Engineer',
    emoji: '💻',
    desc: 'Master systems scale, databases & backend logic.',
    duration: '6 Months',
    timeline: '6-Month Pathway',
    level: 'Beginner to Adv.',
    internship: 'Paid Internship',
    placement: 'Interview Pool',
    salary: '₹5–10 LPA',
    color: '#00C2FF', // Accent Cyan/Blue
    colorAlpha: 'rgba(0, 194, 255, 0.12)',
    skills: ['System Design', 'React & Node.js', 'Databases & APIs', 'Docker & CI/CD'],
    companies: ['Amazon', 'Meta', 'Netflix', 'Uber']
  },
  {
    id: 'ui-ux-designer',
    title: 'Future UI/UX Designer',
    emoji: '🎨',
    desc: 'Design high-fidelity systems & products in Figma.',
    duration: '4 Months',
    timeline: '4-Month Pathway',
    level: 'Beginner to Adv.',
    internship: 'Design Intern',
    placement: 'Interview Pool',
    salary: '₹4–8 LPA',
    color: '#7C3AED', // Secondary Purple
    colorAlpha: 'rgba(124, 58, 237, 0.12)',
    skills: ['Figma Prototyping', 'Design Systems', 'User Research', 'UI Handoffs'],
    companies: ['Apple', 'Airbnb', 'Figma', 'Stripe']
  },
  {
    id: 'data-scientist',
    title: 'Future Data Scientist',
    emoji: '📊',
    desc: 'Analyze datasets & train predictive machine learning models.',
    duration: '6 Months',
    timeline: '6-Month Pathway',
    level: 'Beginner to Adv.',
    internship: 'Data Intern',
    placement: 'Interview Pool',
    salary: '₹6–14 LPA',
    color: '#10B981', // Success Green
    colorAlpha: 'rgba(16, 185, 129, 0.12)',
    skills: ['Predictive ML', 'Pandas & SQL', 'Data Visualizations', 'Statistics'],
    companies: ['Snowflake', 'Intel', 'Palantir', 'IBM']
  },
  {
    id: 'cloud-engineer',
    title: 'Future Cloud Engineer',
    emoji: '☁️',
    desc: 'Design scalable architectures and CI/CD pipelines.',
    duration: '5 Months',
    timeline: '5-Month Pathway',
    level: 'Beginner to Adv.',
    internship: 'Cloud Intern',
    placement: 'Interview Pool',
    salary: '₹5–11 LPA',
    color: '#6366F1', // Indigo
    colorAlpha: 'rgba(99, 102, 241, 0.12)',
    skills: ['AWS Deployments', 'Docker & K8s', 'IaC Terraform', 'Security & VPC'],
    companies: ['AWS', 'Azure', 'HashiCorp', 'RedHat']
  },
  {
    id: 'mobile-developer',
    title: 'Future Mobile Dev',
    emoji: '📱',
    desc: 'Build high-performing React Native & Flutter applications.',
    duration: '5 Months',
    timeline: '5-Month Pathway',
    level: 'Beginner to Adv.',
    internship: 'Mobile Intern',
    placement: 'Interview Pool',
    salary: '₹4.5–9 LPA',
    color: '#f59e0b', // Amber
    colorAlpha: 'rgba(245, 158, 11, 0.12)',
    skills: ['React Native', 'Flutter & Dart', 'App Store Deploy', 'State Management'],
    companies: ['Uber', 'Spotify', 'Coinbase', 'Shopify']
  },
  {
    id: 'business-analyst',
    title: 'Future Biz Analyst',
    emoji: '📈',
    desc: 'Leverage PowerBI & SQL to drive corporate growth strategy.',
    duration: '4 Months',
    timeline: '4-Month Pathway',
    level: 'Beginner to Adv.',
    internship: 'Business Intern',
    placement: 'Interview Pool',
    salary: '₹4–8 LPA',
    color: '#ec4899', // Pink
    colorAlpha: 'rgba(236, 72, 153, 0.12)',
    skills: ['PowerBI Dashboards', 'SQL Analytics', 'Excel Modeling', 'KPI Audits'],
    companies: ['Deloitte', 'McKinsey', 'KPMG', 'EY']
  },
  {
    id: 'digital-marketer',
    title: 'Future Growth Marketer',
    emoji: '📣',
    desc: 'Drive user acquisition with SEO, performance ads & PPC.',
    duration: '3 Months',
    timeline: '3-Month Pathway',
    level: 'Beginner to Adv.',
    internship: 'Marketing Intern',
    placement: 'Interview Pool',
    salary: '₹3–6 LPA',
    color: '#10b981', // Success Green
    colorAlpha: 'rgba(16, 185, 129, 0.12)',
    skills: ['Google Ads & PPC', 'SEO Auditing', 'Content Marketing', 'Analytics Tooling'],
    companies: ['HubSpot', 'Salesforce', 'Meta', 'TikTok']
  },
  {
    id: 'graphic-designer',
    title: 'Future Graphic Designer',
    emoji: '🖌️',
    desc: 'Craft corporate brand identities and media creatives.',
    duration: '3 Months',
    timeline: '3-Month Pathway',
    level: 'Beginner to Adv.',
    internship: 'Creative Intern',
    placement: 'Interview Pool',
    salary: '₹3–6 LPA',
    color: '#8b5cf6', // Violet
    colorAlpha: 'rgba(139, 92, 246, 0.12)',
    skills: ['Photoshop & Illustrator', 'Branding Kits', 'Media Layouts', 'Typography'],
    companies: ['Adobe', 'Canva', 'Pinterest', 'Figma']
  },
  {
    id: 'product-engineer',
    title: 'Future Product Engineer',
    emoji: '⚙️',
    desc: 'Own the lifecycle from product strategy to final deploy.',
    duration: '6 Months',
    timeline: '6-Month Pathway',
    level: 'Beginner to Adv.',
    internship: 'Product Intern',
    placement: 'Interview Pool',
    salary: '₹6–12 LPA',
    color: '#14b8a6', // Teal
    colorAlpha: 'rgba(20, 184, 166, 0.12)',
    skills: ['Product Strategy', 'Agile & Scrum', 'User Experience', 'Prototyping'],
    companies: ['Atlassian', 'Jira', 'Linear', 'Asana']
  },
  {
    id: 'sales-executive',
    title: 'Future Sales Lead',
    emoji: '🤝',
    desc: 'Master tech client acquisition & CRM strategic sales.',
    duration: '3 Months',
    timeline: '3-Month Pathway',
    level: 'Beginner to Adv.',
    internship: 'Sales Intern',
    placement: 'Interview Pool',
    salary: '₹3.5–7 LPA',
    color: '#ef4444', // Red
    colorAlpha: 'rgba(239, 68, 68, 0.12)',
    skills: ['CRM & Salesforce', 'Tech Sales Pitching', 'Deal Negotiations', 'Lead Funnels'],
    companies: ['Salesforce', 'ZoomInfo', 'Gartner', 'Oracle']
  },
  {
    id: 'training-mentor',
    title: 'Future Mentor Lead',
    emoji: '👩‍🏫',
    desc: 'Learn developer training & lead student bootcamps.',
    duration: '4 Months',
    timeline: '4-Month Pathway',
    level: 'Beginner to Adv.',
    internship: 'Mentor Intern',
    placement: 'Interview Pool',
    salary: '₹4–8 LPA',
    color: '#6366f1', // Indigo
    colorAlpha: 'rgba(99, 102, 241, 0.12)',
    skills: ['Bootcamp Tutoring', 'Agile Mentorship', 'Curriculum Design', 'Public Speaking'],
    companies: ['Coursera', 'Udemy', 'Udacity', 'Pluralsight']
  }
];

const getRoadmapStep1 = (id) => {
  switch (id) {
    case 'ai-engineer': return 'Learn Python, PyTorch & Deep Learning models.';
    case 'software-engineer': return 'Master Core Java, algorithms & DB schemas.';
    case 'ui-ux-designer': return 'Study design systems, user research & Figma wireframes.';
    case 'data-scientist': return 'Data analytics, Pandas, SQL & ML algorithms.';
    case 'cloud-engineer': return 'AWS fundamentals, VPC, IAM & Security Groups.';
    case 'mobile-developer': return 'React Native state management, iOS/Android UI & Flutter.';
    case 'business-analyst': return 'Data analytics, SQL, PowerBI dashboards.';
    case 'digital-marketer': return 'Google Ads, SEO analytics & traffic pipelines.';
    case 'graphic-designer': return 'Adobe Photoshop, branding styles & creative layouts.';
    case 'product-engineer': return 'Agile methodologies, user journeys & design handoffs.';
    case 'sales-executive': return 'CRM workflows, client pitches & pipeline scaling.';
    case 'training-mentor': return 'Agile tutoring, bootcamp guidance & team leading.';
    default: return 'Core foundations, toolsets & domain theory.';
  }
};

const getRoadmapStep2 = (id) => {
  switch (id) {
    case 'ai-engineer': return 'Build conversational agents & custom neural models.';
    case 'software-engineer': return 'Build robust microservices & scaled API routes.';
    case 'ui-ux-designer': return 'Build high-fidelity prototypes & responsive dashboard kits.';
    case 'data-scientist': return 'Build predictive models & data viz dashboards.';
    case 'cloud-engineer': return 'Deploy container pipelines & CI/CD workflow automation.';
    case 'mobile-developer': return 'Publish cross-platform apps to Play Store / App Store.';
    case 'business-analyst': return 'Create interactive metric charts & KPI reports.';
    case 'digital-marketer': return 'Run high-converting live ad campaigns & SEO audits.';
    case 'graphic-designer': return 'Compile standard creative portfolio kits & branding assets.';
    case 'product-engineer': return 'Direct product sprints & user testing feedback rounds.';
    case 'sales-executive': return 'Close enterprise business deals & manage CRM accounts.';
    case 'training-mentor': return 'Direct team sessions & evaluate final project designs.';
    default: return 'Deploy dynamic industry projects with mentorship.';
  }
};

// Background floating bubbles coordinates
const backgroundParticles = [
  { id: 1, size: 24, x: 12, y: 80, duration: 18, delay: -2 },
  { id: 2, size: 16, x: 85, y: 15, duration: 22, delay: -5 },
  { id: 3, size: 32, x: 75, y: 70, duration: 25, delay: -1 },
  { id: 4, size: 12, x: 25, y: 30, duration: 16, delay: -8 },
  { id: 5, size: 20, x: 45, y: 85, duration: 20, delay: -12 },
  { id: 6, size: 28, x: 90, y: 60, duration: 24, delay: -3 },
];

export const ServicesOrbit = ({ onOpenApply }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [roadmapService, setRoadmapService] = useState(null);
  const [spacing, setSpacing] = useState(200);

  const containerRef = useRef(null);
  const dragX = useMotionValue(0);

  // Responsive spacing calculation
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSpacing(88);
      } else if (width < 1024) {
        setSpacing(140);
      } else {
        setSpacing(190);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Keyboard navigation (Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Auto-scroll every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % careersData.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + careersData.length) % careersData.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % careersData.length);
  };

  const activeColor = careersData[activeIndex].color;

  // Stagger variants for the active card reveal
  const containerVariants = {
    active: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05
      }
    },
    inactive: {}
  };

  const iconVariants = {
    active: {
      scale: 1,
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 150, damping: 12 }
    },
    inactive: {
      scale: 0.9,
      y: -5,
      opacity: 0.9
    }
  };

  const badgeVariants = {
    active: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 120, damping: 14 }
    },
    inactive: {
      opacity: 0,
      y: -8
    }
  };

  const chipVariants = {
    active: {
      scale: 1,
      opacity: 1,
      transition: { type: 'spring', stiffness: 140, damping: 12 }
    },
    inactive: {
      scale: 0.8,
      opacity: 0
    }
  };

  const ctaVariants = {
    active: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 120, damping: 14 }
    },
    inactive: {
      opacity: 0.8,
      y: 8
    }
  };

  // Infinite looping 3-card structure from careersData
  const total = careersData.length;
  const prevIdx = (activeIndex - 1 + total) % total;
  const centerIdx = activeIndex;
  const nextIdx = (activeIndex + 1) % total;

  const visibleCards = [
    { index: prevIdx, offset: -1 },
    { index: centerIdx, offset: 0 },
    { index: nextIdx, offset: 1 }
  ];

  return (
    <section
      className="relative z-10 w-full py-8 md:py-10 overflow-hidden bg-[#F8FAFC] text-[#111827]"
      style={{ borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}
      id="services"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          className="absolute -top-40 -left-40 w-[450px] h-[450px] rounded-full opacity-10 filter blur-[100px]"
          style={{ background: activeColor }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-8 filter blur-[120px]"
          style={{ background: '#7C3AED' }}
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 30, -50, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-[350px] h-[350px] rounded-full opacity-6 filter blur-[90px]"
          style={{ background: activeColor }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, 20, -40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(17,24,39,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(17,24,39,0.015)_1px,transparent_1px)] bg-[size:28px_28px] opacity-70 z-0 pointer-events-none" />

      {/* Floating blurred background bubbles */}
      {backgroundParticles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#EEF4FF] pointer-events-none z-0"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -250, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0.15, 0.45, 0.15]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear"
          }}
        />
      ))}

      {/* Layered Orbit Rings centered behind cards */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden select-none">
        <div className="w-[450px] h-[450px] rounded-full border border-[#5B5FEF]/8 absolute opacity-50 scale-75 md:scale-100" />
        <div
          className="w-[650px] h-[650px] rounded-full border border-[#7C3AED]/8 absolute opacity-45 scale-75 md:scale-100 animate-spin-slow"
          style={{ borderStyle: 'dashed' }}
        />
        <div className="w-[850px] h-[850px] rounded-full border border-[#00C2FF]/5 absolute opacity-20 scale-75 md:scale-100" />
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-4 max-w-2xl mx-auto flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-bold mb-2 text-[#7C3AED] bg-[#EEF4FF] border border-[#5B5FEF]/15 px-3 py-1 rounded-full mx-auto font-aldrich"
          >
            <FaGraduationCap className="text-[10px] sm:text-xs" /> CHOOSE YOUR FUTURE
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center font-hexco text-2xl md:text-4xl font-extrabold mb-2"
            style={{
              background: 'linear-gradient(135deg, #5B5FEF, #7C3AED)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '0.04em',
            }}
          >
            Who Do You Want to Become?
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-650 max-w-xl mx-auto font-poppins leading-relaxed text-center"
          >
            Select a pathway below to visualize your personalized study roadmap and placement outcome.
          </motion.p>
        </div>

        {/* 3D Carousel Stage */}
        <div
          ref={containerRef}
          className="w-full relative select-none flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Arrow navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 z-40 w-11 h-11 rounded-full bg-[#FFFFFF]/90 border border-[#E5E7EB] text-[#111827] flex items-center justify-center shadow-md hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all cursor-pointer font-bold hidden sm:flex"
            aria-label="Previous Career"
          >
            ◀
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 z-40 w-11 h-11 rounded-full bg-[#FFFFFF]/90 border border-[#E5E7EB] text-[#111827] flex items-center justify-center shadow-md hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all cursor-pointer font-bold hidden sm:flex"
            aria-label="Next Career"
          >
            ▶
          </button>

          {/* Interactive 3D drag/swipe viewport */}
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.5}
            style={{
              x: dragX,
            }}
            onDragStart={() => setIsPaused(true)}
            onDragEnd={(e, info) => {
              const swipeThreshold = 50;
              const velocity = info.velocity.x;
              const offset = info.offset.x;

              if (offset < -swipeThreshold || velocity < -350) {
                handleNext();
              } else if (offset > swipeThreshold || velocity > 350) {
                handlePrev();
              }
              setIsPaused(false);
            }}
            className="relative w-full h-[300px] md:h-[365px] flex items-center justify-center cursor-grab active:cursor-grabbing"
          >
            {/* Active Floating Particles rising around the active center card */}
            {visibleCards.map(({ index, offset }) => {
              const career = careersData[index];
              const isCenter = offset === 0;

              return isCenter && (
                <React.Fragment key={`particles-${career.id}`}>
                  <motion.div
                    className="absolute w-2 h-2 rounded-full opacity-60 filter blur-[1px] pointer-events-none"
                    style={{ background: career.color, left: 'calc(50% - 130px)', top: '40%' }}
                    animate={{ y: [-15, -120], x: [0, -35], opacity: [0, 0.9, 0] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "easeOut" }}
                  />
                  <motion.div
                    className="absolute w-1.5 h-1.5 rounded-full opacity-40 filter blur-[1px] pointer-events-none"
                    style={{ background: career.color, left: 'calc(50% + 110px)', top: '65%' }}
                    animate={{ y: [-10, -95], x: [0, 25], opacity: [0, 0.8, 0] }}
                    transition={{ duration: 2.7, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
                  />
                  <motion.div
                    className="absolute w-2.5 h-2.5 rounded-full opacity-50 filter blur-[1.5px] pointer-events-none"
                    style={{ background: career.color, left: 'calc(50% - 80px)', top: '75%' }}
                    animate={{ y: [0, -90], x: [0, 20], opacity: [0, 0.7, 0] }}
                    transition={{ duration: 3.8, repeat: Infinity, ease: "easeOut", delay: 1.2 }}
                  />
                  <motion.div
                    className="absolute w-2 h-2 rounded-full opacity-40 filter blur-[1px] pointer-events-none"
                    style={{ background: career.color, left: 'calc(50% + 90px)', top: '35%' }}
                    animate={{ y: [-25, -115], x: [0, -20], opacity: [0, 0.9, 0] }}
                    transition={{ duration: 3.0, repeat: Infinity, ease: "easeOut", delay: 1.8 }}
                  />
                </React.Fragment>
              );
            })}

            {/* Cards Rendering */}
            {visibleCards.map(({ index, offset }) => {
              const career = careersData[index];
              const isCenter = offset === 0;
              const isLeft = offset === -1;
              const isRight = offset === 1;
              const isHovered = hoveredIndex === index;

              return (
                <motion.div
                  key={career.id}
                  className="absolute w-[200px] h-[280px] sm:w-[225px] sm:h-[310px] md:w-[245px] md:h-[340px]"
                  style={{
                    zIndex: isCenter ? 30 : 10,
                    transformOrigin: isLeft ? 'bottom right' : isRight ? 'bottom left' : 'bottom center',
                  }}
                  animate={{
                    x: offset * spacing,
                    y: isCenter ? -10 : 22,
                    scale: isCenter ? 1 : 0.93,
                    rotateZ: isCenter ? 0 : (isLeft ? -9 : 9),
                    opacity: isCenter ? 1 : 0.9,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 18,
                    mass: 0.8,
                  }}
                  onClick={() => {
                    if (!isCenter) {
                      setActiveIndex(index);
                    }
                  }}
                >
                  {/* Premium Glassmorphic Card Container */}
                  <motion.div
                    variants={containerVariants}
                    animate={isCenter ? "active" : "inactive"}
                    className={`w-full h-full p-3 md:p-4 pb-4 flex flex-col justify-between relative overflow-hidden rounded-[16px] md:rounded-[20px] border transition-all duration-300 select-text ${isCenter ? 'animate-border-glow border-[#E5E7EB]' : 'border-[#E5E7EB]/40'
                      }`}
                    style={{
                      background: isCenter
                        ? `linear-gradient(135deg, #FFFFFF 0%, #FFFFFF 50%, ${career.color}10 100%)`
                        : `linear-gradient(135deg, #FFFFFF 0%, ${career.color}08 100%)`,
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      borderColor: isCenter ? `${career.color}40` : `${career.color}25`,
                      boxShadow: isCenter
                        ? (isHovered
                          ? `0 25px 50px rgba(91, 95, 239, 0.08), 0 0 25px ${career.color}22`
                          : `0 12px 30px rgba(91, 95, 239, 0.04), 0 0 15px ${career.color}12`)
                        : `0 14px 28px rgba(15, 23, 42, 0.08)`
                    }}
                    animate={{
                      y: isCenter ? (isHovered ? -10 : [0, -6, 0]) : [0, -4, 0],
                    }}
                    transition={{
                      y: isCenter && isHovered
                        ? { type: 'spring', stiffness: 300, damping: 20 }
                        : { repeat: Infinity, repeatType: 'reverse', duration: 4, ease: 'easeInOut', delay: index * 0.5 }
                    }}
                    onMouseEnter={() => {
                      if (isCenter) setHoveredIndex(index);
                    }}
                    onMouseLeave={() => {
                      setHoveredIndex(null);
                    }}
                  >
                    {/* Glass sweeping light reflections */}
                    <div className="absolute inset-0 pointer-events-none card-reflection animate-reflection z-0" />

                    {/* Blueprint grid pattern background inside card */}
                    <div
                      className="absolute inset-0 bg-[linear-gradient(rgba(17,24,39,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(17,24,39,0.008)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40 z-0"
                    />

                    {/* Ambient Radial Glow inside active card */}
                    {isCenter && (
                      <div
                        className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-0"
                        style={{
                          background: `radial-gradient(130px circle at 50% 50%, ${career.color}10, transparent 70%)`
                        }}
                      />
                    )}

                    {/* Card Content Wrapper */}
                    <div className="flex flex-col h-full justify-between items-center text-center relative z-10">

                      <div className="flex flex-col items-center w-full">
                        {/* Top Badge Bar (Timeline & Level) */}
                        <div className="w-full flex justify-between items-center gap-1">
                          <span className="text-[9px] font-bold text-slate-600 bg-[#F8FAFC] border border-[#E5E7EB] px-2 py-0.5 rounded-full font-aldrich">{career.timeline}</span>
                          <span className="text-[9px] font-bold text-[#5B5FEF] bg-[#EEF4FF] border border-[#5B5FEF]/15 px-2 py-0.5 rounded-full font-aldrich">{career.level}</span>
                        </div>

                        {/* Floating Icon / Emoji Container */}
                        <motion.div variants={iconVariants} className="mt-2 flex flex-col items-center">
                          <div
                            className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-white border border-[#E5E7EB] shadow-sm text-lg transition-transform duration-300 hover:scale-105"
                            style={{
                              boxShadow: isCenter ? `0 0 12px ${career.color}15` : 'none'
                            }}
                          >
                            {career.emoji}
                          </div>

                          {/* Title */}
                          <h3 className="text-xs md:text-sm font-black text-[#111827] font-hexco tracking-normal leading-tight mt-2 px-1 max-w-[180px] truncate uppercase">
                            {career.title.replace('Future ', '')}
                          </h3>
                        </motion.div>

                        {/* Salary and Support Badges */}
                        <motion.div variants={badgeVariants} className="w-full mt-2 flex flex-col gap-1 items-center">
                          <div className="flex items-center gap-1.5 bg-[#10B981]/8 border border-[#10B981]/20 px-2.5 py-1 rounded-full text-[#10B981] shadow-sm font-aldrich">
                            <span className="text-[7.5px] font-extrabold uppercase tracking-wider">Salary Potential:</span>
                            <span className="text-[9.5px] font-black">{career.salary}</span>
                          </div>
                          <div className="flex gap-1 mt-1 justify-center">
                            <span className="text-[8px] font-extrabold uppercase tracking-wide text-[#5B5FEF] bg-[#EEF4FF] border border-[#5B5FEF]/15 px-2 py-0.5 rounded-md font-aldrich">{career.internship}</span>
                            <span className="text-[8px] font-extrabold uppercase tracking-wide text-[#7C3AED] bg-[#7C3AED]/8 border border-[#7C3AED]/15 px-2 py-0.5 rounded-md font-aldrich">{career.placement}</span>
                          </div>
                        </motion.div>

                        {/* Skill Chips Grid */}
                        <div className="w-full mt-2.5">
                          <span className="text-[8px] uppercase tracking-widest text-slate-400 font-extrabold font-aldrich block text-center mb-1">Key Target Skills</span>
                          <div className="grid grid-cols-2 gap-1 px-1">
                            {career.skills.map((skill, sIdx) => (
                              <motion.span
                                key={sIdx}
                                variants={chipVariants}
                                className="text-[9px] md:text-[10px] font-semibold text-slate-700 bg-white border border-[#E5E7EB] px-1.5 py-0.5 rounded-md font-poppins text-center shadow-[0_1px_2px_rgba(0,0,0,0.01)] whitespace-nowrap truncate"
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Recruiter Logostrip & Explore button */}
                      <motion.div variants={ctaVariants} className="w-full flex flex-col items-center">
                        <div className="w-full border-t border-[#E5E7EB] pt-1.5 mb-1.5">
                          <span className="text-[7px] uppercase tracking-widest text-slate-400 font-extrabold font-aldrich block text-center mb-0.5">Top Recruiters</span>
                          <div className="flex gap-1 justify-center items-center font-aldrich text-[8.5px] font-bold text-slate-600">
                            {career.companies.slice(0, 3).join(' • ')}
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setRoadmapService(career);
                          }}
                          className="w-[94%] text-center py-2.5 rounded-full text-[9.5px] md:text-[10px] font-black uppercase tracking-[0.15em] border transition-all cursor-pointer shadow-sm mt-1 hover:scale-[1.03] active:scale-[0.97] font-hexco"
                          style={{
                            borderColor: isCenter ? career.color : '#E5E7EB',
                            color: isCenter ? '#FFFFFF' : '#111827',
                            background: isCenter ? career.color : '#FFFFFF',
                            boxShadow: isCenter ? `0 5px 15px ${career.color}20` : 'none',
                          }}
                        >
                          Explore Roadmap
                        </button>
                      </motion.div>
                    </div>

                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Pagination Indicators / Dots */}
        <div className="flex items-center justify-center gap-1 mt-3 z-30 select-none">
          {careersData.map((_, dotIdx) => (
            <button
              key={`dot-${dotIdx}`}
              onClick={() => setActiveIndex(dotIdx)}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer border-none"
              style={{
                backgroundColor: dotIdx === activeIndex ? careersData[activeIndex].color : '#E5E7EB',
                width: dotIdx === activeIndex ? 18 : 6,
                boxShadow: dotIdx === activeIndex ? `0 0 10px ${careersData[activeIndex].color}40` : 'none',
              }}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Animated Career Roadmap Map Modal */}
      <AnimatePresence>
        {roadmapService && (
          <div className="roadmap-modal-backdrop">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="roadmap-modal"
              style={{
                borderColor: roadmapService.color,
                background: '#FFFFFF',
                color: '#111827'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setRoadmapService(null)}
                className="roadmap-close-btn"
                style={{ background: '#F8FAFC', border: '1px solid #E5E7EB', color: '#4B5563' }}
              >
                ✕ Close Map
              </button>

              {/* Title Header */}
              <div className="roadmap-header">
                <span className="roadmap-badge" style={{ color: roadmapService.color, borderColor: `${roadmapService.color}40` }}>
                  Career Blueprint
                </span>
                <h3 className="text-[#111827]">{roadmapService.title} Roadmap</h3>
                <p className="text-slate-600">Verify your step-by-step career milestones from baseline skills to company onboarding.</p>
              </div>

              {/* Roadmap Flow Nodes - Left to Right */}
              <div className="roadmap-flow">
                {/* Node 1: Learn */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="roadmap-node"
                  style={{ background: '#F8FAFC', border: '1px solid #E5E7EB' }}
                >
                  <div className="node-number" style={{ background: '#FFFFFF', color: '#111827', border: '1px solid #E5E7EB' }}>1</div>
                  <h4 className="text-[#111827]">Foundations</h4>
                  <p className="text-slate-600">{getRoadmapStep1(roadmapService.id)}</p>
                  <span className="node-time" style={{ color: roadmapService.color }}>Weeks 1-4</span>
                </motion.div>

                {/* Connector line 1 */}
                <div className="roadmap-connector" style={{ background: '#E2E8F0' }}>
                  <div className="connector-pulse" style={{ background: roadmapService.color }} />
                </div>

                {/* Node 2: Build */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="roadmap-node"
                  style={{ background: '#F8FAFC', border: '1px solid #E5E7EB' }}
                >
                  <div className="node-number" style={{ background: '#FFFFFF', color: '#111827', border: '1px solid #E5E7EB' }}>2</div>
                  <h4 className="text-[#111827]">Live Build</h4>
                  <p className="text-slate-600">{getRoadmapStep2(roadmapService.id)}</p>
                  <span className="node-time" style={{ color: roadmapService.color }}>Weeks 5-8</span>
                </motion.div>

                {/* Connector line 2 */}
                <div className="roadmap-connector" style={{ background: '#E2E8F0' }}>
                  <div className="connector-pulse" style={{ background: roadmapService.color }} />
                </div>

                {/* Node 3: Hire */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="roadmap-node"
                  style={{ background: '#F8FAFC', border: '1px solid #E5E7EB' }}
                >
                  <div className="node-number" style={{ background: roadmapService.color, color: '#FFFFFF' }}>3</div>
                  <h4 className="text-[#111827]">Placement</h4>
                  <p className="text-slate-600">Direct Entry into Shortlisting Pool</p>
                  <span className="node-time" style={{ color: roadmapService.color }}>Weeks 9-12</span>
                </motion.div>
              </div>

              {/* Bottom Apply shortlisting CTA */}
              <div className="roadmap-footer">
                <button
                  onClick={() => {
                    setRoadmapService(null);
                    onOpenApply(); // Open the admission shortlisting apply modal!
                  }}
                  className="roadmap-apply-btn"
                  style={{
                    background: `linear-gradient(135deg, ${roadmapService.color} 0%, ${roadmapService.color}dd 100%)`,
                    boxShadow: `0 4px 18px ${roadmapService.color}40`
                  }}
                >
                  Apply for Placement Shortlist <FaArrowRight />
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default ServicesOrbit;