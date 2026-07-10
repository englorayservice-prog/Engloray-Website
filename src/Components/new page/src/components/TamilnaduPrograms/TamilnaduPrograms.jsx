import { useState, useRef, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  animate,
} from 'framer-motion';
import {
  FaChalkboardTeacher,
  FaLaptopCode,
  FaRocket,
  FaCertificate,
  FaHandshake,
  FaTimes,
  FaArrowRight,
  FaMapMarkerAlt,
  FaCity,
  FaMountain,
  FaWater,
  FaLeaf,
  FaIndustry,
  FaUniversity,
  FaStar,
  FaGem,
  FaTree,
  FaAnchor,
  FaLandmark,
  FaGlobe,
} from 'react-icons/fa';

/* ----------------------------------------------------------------------- */
/*  District data                                                            */
/* ----------------------------------------------------------------------- */

export const districts = [
  { id: 'CHE', name: 'Chennai',       icon: FaCity },
  { id: 'COI', name: 'Coimbatore',    icon: FaIndustry },
  { id: 'MAD', name: 'Madurai',       icon: FaLandmark },
  { id: 'TRI', name: 'Tiruchirappalli', icon: FaUniversity },
  { id: 'SAL', name: 'Salem',         icon: FaMountain },
  { id: 'TIR', name: 'Tirunelveli',   icon: FaWater },
  { id: 'VEL', name: 'Vellore',       icon: FaStar },
  { id: 'ERC', name: 'Erode',         icon: FaLeaf },
  { id: 'THA', name: 'Thanjavur',     icon: FaGem },
  { id: 'DIN', name: 'Dindigul',      icon: FaTree },
  { id: 'KAN', name: 'Kanchipuram',   icon: FaMapMarkerAlt },
  { id: 'NAG', name: 'Nagapattinam',  icon: FaAnchor },
  { id: 'KUM', name: 'Kumbakonam',    icon: FaGlobe },
];

export const districtDetails = {
  CHE: { stats: { workshops: 18, hackathons: 12, camps: 8, seminars: 20 } },
  COI: { stats: { workshops: 14, hackathons: 9,  camps: 6, seminars: 16 } },
  MAD: { stats: { workshops: 12, hackathons: 7,  camps: 5, seminars: 14 } },
  TRI: { stats: { workshops: 10, hackathons: 6,  camps: 4, seminars: 12 } },
  SAL: { stats: { workshops: 9,  hackathons: 5,  camps: 4, seminars: 10 } },
  TIR: { stats: { workshops: 8,  hackathons: 4,  camps: 3, seminars: 9  } },
  VEL: { stats: { workshops: 8,  hackathons: 5,  camps: 3, seminars: 8  } },
  ERC: { stats: { workshops: 7,  hackathons: 4,  camps: 3, seminars: 8  } },
  THA: { stats: { workshops: 7,  hackathons: 4,  camps: 3, seminars: 7  } },
  DIN: { stats: { workshops: 6,  hackathons: 3,  camps: 2, seminars: 6  } },
  KAN: { stats: { workshops: 6,  hackathons: 3,  camps: 2, seminars: 6  } },
  NAG: { stats: { workshops: 5,  hackathons: 3,  camps: 2, seminars: 5  } },
  KUM: { stats: { workshops: 5,  hackathons: 2,  camps: 2, seminars: 5  } },
};

const StudentAvatar = ({ color = '#0ea5e9' }) => (
  <div 
    className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden shrink-0"
    style={{
      background: `linear-gradient(135deg, ${color}20 0%, ${color}40 100%)`,
      border: `2px solid ${color}35`,
    }}
  >
    <svg className="w-8 h-8 opacity-90" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M7 11.5v4c0 1.5 2.2 2.5 5 2.5s5-1 5-2.5v-4" />
      <path d="M22 10v6" />
    </svg>
    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
  </div>
);

const studentProfiles = {
  CHE: {
    name: "Preethi Ramasamy",
    avatarColor: "#8b5cf6",
    program: "Full Stack Java & Cloud Integration",
    skills: "Java SE/EE, Spring Boot, AWS Services, MySQL Databases, Git",
    project: "Student Portal (Live Client Platform)",
    internship: "Software Dev Intern (Paid, 3 Months)",
    mentor: "Siddharth (Senior Architect at Infosys)",
    cert: "Full Stack Developer Certificate",
    placement: "Software Engineer at Zoho",
    salary: "8.5 LPA"
  },
  COI: {
    name: "Arun Kumar",
    avatarColor: "#10b981",
    program: "UI/UX Design & Frontend Development",
    skills: "Figma, User Research, HTML5/CSS3, React.js",
    project: "E-Commerce Re-design (Real Brand)",
    internship: "Product Design Intern (Paid, 3 Months)",
    mentor: "Nisha (Lead UI Designer at Freshworks)",
    cert: "Advanced UX Practitioner Certificate",
    placement: "Frontend Engineer at Kovai.co",
    salary: "7.0 LPA"
  },
  MAD: {
    name: "Vigneshwaran S.",
    avatarColor: "#f59e0b",
    program: "Mobile App Development & Architecture",
    skills: "Flutter, Dart, Firebase SDK, REST APIs, State Management",
    project: "Transit App (Madurai City Prototype)",
    internship: "Mobile Developer Intern (Paid, 3 Months)",
    mentor: "Kathir (Engineering Head at Zoho)",
    cert: "Associate Android Engineer Certificate",
    placement: "Flutter Developer at Soliton",
    salary: "6.8 LPA"
  },
  TRI: {
    name: "Meera Joy",
    avatarColor: "#0ea5e9",
    program: "Full Stack Web Technologies",
    skills: "React, Node.js, Express Framework, MongoDB, Git",
    project: "SaaS Dashboard for HR Analytics",
    internship: "Full Stack Intern (Paid, 3 Months)",
    mentor: "Deepak (Staff Engineer at Google)",
    cert: "Certified Web Engineer (Engloray)",
    placement: "Associate Developer at TCS",
    salary: "6.5 LPA"
  },
  SAL: {
    name: "Karthikeyan R.",
    avatarColor: "#f43f5e",
    program: "Cloud Infrastructure & DevOps",
    skills: "Docker Containers, Kubernetes Clusters, AWS Pipelines, Jenkins, Bash",
    project: "CI/CD Pipeline Automation (Production)",
    internship: "DevOps Intern (Paid, 3 Months)",
    mentor: "Amudha (Cloud Consultant at Cognizant)",
    cert: "AWS Certified Practitioner (Associate)",
    placement: "DevOps Engineer at HCL",
    salary: "7.5 LPA"
  },
  TIR: {
    name: "Divya Dharshini",
    avatarColor: "#8b5cf6",
    program: "Data Science & Machine Learning",
    skills: "Python, Pandas, Scikit-Learn, SQL Queries, Tableau",
    project: "Predictive Analytics for Customer Churn",
    internship: "Data Analyst Intern (Paid, 2 Months)",
    mentor: "Ramesh (Data Scientist at Tiger Analytics)",
    cert: "Data Analyst Specialist (Engloray)",
    placement: "Data Analyst at LatentView",
    salary: "6.2 LPA"
  },
  VEL: {
    name: "Sanjay G.",
    avatarColor: "#10b981",
    program: "Frontend Technologies & UI Systems",
    skills: "React, TailwindCSS, ES6 JavaScript, Framer Motion Dynamics",
    project: "Marketing Landing Pages (Vellore Startup)",
    internship: "Frontend Intern (Paid, 3 Months)",
    mentor: "Preetha (Lead UX Dev at Freshworks)",
    cert: "Frontend Developer Specialist Certificate",
    placement: "Frontend Developer at Hexaware",
    salary: "5.8 LPA"
  },
  ERC: {
    name: "Priyanka K.",
    avatarColor: "#f59e0b",
    program: "Graphic Designing & Digital Media",
    skills: "Photoshop, Illustrator Vector Designing, InDesign, Canva",
    project: "Complete Re-branding for Agri-Business",
    internship: "Graphic Designer Intern (Paid, 3 Months)",
    mentor: "Bala (Creative Director at Ogilvy)",
    cert: "Digital Visual Designer (Engloray)",
    placement: "UI Designer at Aspire Systems",
    salary: "5.5 LPA"
  },
  THA: {
    name: "Kavin Raj",
    avatarColor: "#0ea5e9",
    program: "Python Backend & AI Applications",
    skills: "Python Programming, Django, FastAPI Web Service, OpenCV, SQLite",
    project: "AI Smart Attendance System (Face Rec)",
    internship: "Backend Intern (Paid, 3 Months)",
    mentor: "Vijay (AI Engineer at Accenture)",
    cert: "Backend & AI Specialist Certificate",
    placement: "AI Developer at Soliton",
    salary: "7.2 LPA"
  },
  DIN: {
    name: "Abishek M.",
    avatarColor: "#f43f5e",
    program: "Business Development & Tech Sales",
    skills: "Salesforce CRM, Business Metrics, Pitch Strategies, Market Research",
    project: "Market Expansion Strategy (Local SMEs)",
    internship: "BD Associate Intern (Paid, 2 Months)",
    mentor: "Mani (BD Director at Byju's)",
    cert: "Business Associate Certificate",
    placement: "BD Representative at Zoho",
    salary: "6.0 LPA"
  },
  KAN: {
    name: "Sandhya N.",
    avatarColor: "#8b5cf6",
    program: "QA Testing & Automation Engineering",
    skills: "Selenium Suite, Java Core, Jest Testing, Cypress E2E, API Verification",
    project: "E-Commerce Automation Testing Suite",
    internship: "QA Engineer Intern (Paid, 3 Months)",
    mentor: "Devi (QA Manager at Tech Mahindra)",
    cert: "Certified QA Test Engineer (Engloray)",
    placement: "Test Engineer at Cognizant",
    salary: "5.6 LPA"
  },
  NAG: {
    name: "Rajesh A.",
    avatarColor: "#10b981",
    program: "System Operations & Cyber Security",
    skills: "Linux System Ops, Network Security, Bash Automations, Wireshark",
    project: "Secure Network Audit (Enterprise)",
    internship: "SysOps Intern (Paid, 3 Months)",
    mentor: "Kumar (Security Lead at Wipro)",
    cert: "System Security Associate Certificate",
    placement: "SysOps Engineer at Infosys",
    salary: "5.2 LPA"
  },
  KUM: {
    name: "Archana M.",
    avatarColor: "#f59e0b",
    program: "UI Engineering & Custom Interactions",
    skills: "HTML5 APIs, Canvas Graphics, WebGL Layers, Tailwind CSS, JS ES6",
    project: "Interactive Math Visualizer (EdTech)",
    internship: "UI Developer Intern (Paid, 3 Months)",
    mentor: "Prakash (Senior UI Dev at Tech Mahindra)",
    cert: "Creative Front End Developer (Engloray)",
    placement: "Frontend Engineer at Hexaware",
    salary: "6.0 LPA"
  }
};

// Per-district student outreach / enrollment content
const districtOutreach = {
  CHE: {
    tagline: 'Metropolitan Tech Hub',
    headline: 'Connecting Chennai\'s Brightest Minds to Industry',
    focus: 'Top engineering colleges & IT corridors targeted for Java, Cloud & Full Stack programs.',
    enrollmentTarget: 320,
    placedSoFar: 280,
    outreachChannels: ['Campus Drives', 'LinkedIn Outreach', 'College Fests'],
    highlight: 'Engloray partners with 14+ Chennai colleges for direct placement pipelines.',
    accentColor: '#8b5cf6',
  },
  COI: {
    tagline: 'The Manchester of South India',
    headline: 'Empowering Coimbatore\'s Industrial Generation',
    focus: 'UI/UX, Frontend & Marketing programs targeting PSG, Amrita and engineering clusters.',
    enrollmentTarget: 210,
    placedSoFar: 175,
    outreachChannels: ['Industry Tie-Ups', 'Webinars', 'Walk-In Camps'],
    highlight: 'Coimbatore students receive priority referral to Kovai.co and local startups.',
    accentColor: '#10b981',
  },
  MAD: {
    tagline: 'Temple City Meets Tech City',
    headline: 'Unlocking Madurai\'s Digital Potential',
    focus: 'Mobile development & Python programs targeting students near Madurai Kamaraj University.',
    enrollmentTarget: 180,
    placedSoFar: 145,
    outreachChannels: ['Seminars', 'College Partnerships', 'Social Media Campaigns'],
    highlight: 'Free orientation workshops conducted monthly across Madurai city colleges.',
    accentColor: '#f59e0b',
  },
  TRI: {
    tagline: 'Rock Fort City Rising',
    headline: 'Building the Next Wave of Trichy Techies',
    focus: 'Full Stack Web & DevOps programs targeting NIT, Bharathidasan and Anna University zones.',
    enrollmentTarget: 160,
    placedSoFar: 128,
    outreachChannels: ['NIT Campus Drives', 'Placement Fairs', 'Department Talks'],
    highlight: 'SASTRA & NIT Trichy alumni mentor enrolled students through the full program.',
    accentColor: '#0ea5e9',
  },
  SAL: {
    tagline: 'Steel City to Tech City',
    headline: 'Shaping Salem\'s Cloud & DevOps Talent',
    focus: 'Cloud infrastructure & DevOps programs for students in Salem industrial belt colleges.',
    enrollmentTarget: 130,
    placedSoFar: 100,
    outreachChannels: ['Campus Visits', 'Referral Networks', 'Online Cohorts'],
    highlight: 'Salem students get first access to paid cloud internships at HCL & Cognizant.',
    accentColor: '#f43f5e',
  },
  TIR: {
    tagline: 'Pearl City of South Tamil Nadu',
    headline: 'Grooming Tirunelveli\'s Data Science Leaders',
    focus: 'Python, ML & Data Analytics programs for students near Manonmaniam Sundaranar University.',
    enrollmentTarget: 115,
    placedSoFar: 88,
    outreachChannels: ['University Tie-Ups', 'Free Demo Days', 'Regional Hackathons'],
    highlight: 'Tirunelveli students enjoy region-specific scholarship seats every cohort.',
    accentColor: '#8b5cf6',
  },
  VEL: {
    tagline: 'Fort City of Innovation',
    headline: 'Launching Vellore\'s Frontend Engineers',
    focus: 'React, UI Systems & Digital Marketing for students near VIT and Vellore Institute clusters.',
    enrollmentTarget: 140,
    placedSoFar: 110,
    outreachChannels: ['VIT Tie-Ups', 'Instagram Campaigns', 'Student Ambassador Program'],
    highlight: 'VIT students can fast-track enrollment via the Engloray Student Ambassador network.',
    accentColor: '#10b981',
  },
  ERC: {
    tagline: 'Textile City Goes Digital',
    headline: 'Creative Careers for Erode\'s Design Talent',
    focus: 'Graphic Design, Branding & Digital Media programs reaching students across Erode region.',
    enrollmentTarget: 100,
    placedSoFar: 78,
    outreachChannels: ['Design Workshops', 'Textile Industry Tie-Ups', 'Local Media'],
    highlight: 'Erode students receive portfolio design mentoring from Ogilvy & JWT professionals.',
    accentColor: '#f59e0b',
  },
  THA: {
    tagline: 'Granary of Knowledge',
    headline: 'AI & Python Pathways in Thanjavur',
    focus: 'Python, AI & Backend programs for students from SASTRA, TU and the Kaveri belt colleges.',
    enrollmentTarget: 110,
    placedSoFar: 85,
    outreachChannels: ['SASTRA Campus Drives', 'Social Outreach', 'Walk-In Seminars'],
    highlight: 'AI-track students from Thanjavur receive priority placement at Accenture AI labs.',
    accentColor: '#0ea5e9',
  },
  DIN: {
    tagline: 'Lock City Unlocking Careers',
    headline: 'Business & Tech Talent from Dindigul',
    focus: 'BD, Tech Sales & Salesforce programs for MBA & commerce graduates in Dindigul district.',
    enrollmentTarget: 90,
    placedSoFar: 68,
    outreachChannels: ['MBA Networks', 'Commerce Department Tie-Ups', 'Roadshows'],
    highlight: 'Dindigul BD-track graduates get direct referrals to Zoho & BYJU\'s sales teams.',
    accentColor: '#f43f5e',
  },
  KAN: {
    tagline: 'Temple Town Tech Movement',
    headline: 'Quality Engineers from Kanchipuram',
    focus: 'QA Testing, Automation & Java programs near Kanchipuram and Chennai suburban colleges.',
    enrollmentTarget: 120,
    placedSoFar: 92,
    outreachChannels: ['Suburban Campus Drives', 'Chennai Metro Outreach', 'Alumni Referrals'],
    highlight: 'Kanchipuram QA-track students get mentored by Tech Mahindra test engineers.',
    accentColor: '#8b5cf6',
  },
  NAG: {
    tagline: 'Coastal District, Global Ambitions',
    headline: 'SysOps & Security Careers from Nagapattinam',
    focus: 'Linux, Cyber Security & System Ops for engineering students in coastal Tamil Nadu.',
    enrollmentTarget: 80,
    placedSoFar: 58,
    outreachChannels: ['Coastal District Camps', 'University Outreach', 'Online Info Sessions'],
    highlight: 'Nagapattinam students receive free cybersecurity toolkit & lab access on enrollment.',
    accentColor: '#10b981',
  },
  KUM: {
    tagline: 'City of Temples & Talent',
    headline: 'Creative Frontend Builders from Kumbakonam',
    focus: 'Advanced UI Engineering & Interactive Web programs for students near Thanjavur-Kumbakonam belt.',
    enrollmentTarget: 95,
    placedSoFar: 72,
    outreachChannels: ['Town Hall Sessions', 'College Partnerships', 'YouTube Campaigns'],
    highlight: 'Kumbakonam students get live portfolio reviews by Tech Mahindra senior engineers.',
    accentColor: '#f59e0b',
  },
};

const marqueeItems = [
  '13 Districts',
  'Campus Enrollment Drives',
  'College Partnerships',
  'Scholarship Seats',
  'Industry Referrals',
  'Regional Mentors',
];

/* ----------------------------------------------------------------------- */
/*  Reusable motion primitives                                              */
/* ----------------------------------------------------------------------- */

// Cursor-attraction wrapper — the element gently follows the pointer.
const Magnetic = ({ children, as: Component = motion.div, className = '', strength = 0.25, ...rest }) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    setPos({ x: relX * strength, y: relY * strength });
  };

  return (
    <Component
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 12 }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
};

// Cursor-tracked radial glow, imperative (no re-render) for smooth 60fps feel.
const Spotlight = ({ children, className = '', color = '14, 165, 233' }) => {
  const ref = useRef(null);
  const handleMove = (e) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
    node.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
  };
  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`spotlight-card relative ${className}`}
      style={{ '--spot-color': color }}
    >
      <div className="spotlight-glow" />
      {children}
    </div>
  );
};

// Words rise up into place, one after another — used for headings.
const SplitHeading = ({ text, delay = 0, className = '' }) => (
  <span className={`inline-flex flex-wrap justify-center ${className}`}>
    {text.split(' ').map((word, i) => (
      <span key={i} className="mr-[0.3em] inline-block overflow-hidden py-1">
        <motion.span
          className="inline-block"
          initial={{ y: '110%', rotate: 6 }}
          animate={{ y: '0%', rotate: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: delay + i * 0.05 }}
        >
          {word}
        </motion.span>
      </span>
    ))}
  </span>
);

// Slow, seamless scrolling belt of value props.
const Marquee = ({ items }) => (
  <div className="tn-marquee-mask mt-5 overflow-hidden">
    <div className="tn-marquee-track flex w-max gap-8">
      {[...items, ...items].map((item, i) => (
        <span
          key={i}
          className="flex items-center gap-2 whitespace-nowrap text-[11px] font-bold uppercase tracking-widest text-slate-400"
        >
          <span className="h-1 w-1 rounded-full bg-sky-400" />
          {item}
        </span>
      ))}
    </div>
  </div>
);

// Animated numeric counter with a brief settle-in flash.
const Counter = ({ value, suffix = '', duration = 1.2 }) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return undefined;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        node.textContent = `${Math.round(latest).toLocaleString()}${suffix}`;
      }
    });
    return () => controls.stop();
  }, [value, suffix, duration]);

  return (
    <motion.span
      ref={nodeRef}
      initial={{ opacity: 0.4, filter: 'blur(4px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: duration * 0.6 }}
    >
      0{suffix}
    </motion.span>
  );
};

// Per-step entrance variants.
const stepVariants = {
  left: { hidden: { opacity: 0, x: -80, rotate: -3 }, show: { opacity: 1, x: 0, rotate: 0 } },
  right: { hidden: { opacity: 0, x: 80, rotate: 3 }, show: { opacity: 1, x: 0, rotate: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.6 }, show: { opacity: 1, scale: 1 } },
  lift: { hidden: { opacity: 0, y: 36 }, show: { opacity: 1, y: 0 } },
  spring: { hidden: { opacity: 0, scale: 0.7, y: 24 }, show: { opacity: 1, scale: 1, y: 0 } }
};

const computeMetrics = (stats) => {
  const programs = stats.workshops + stats.hackathons + stats.camps + stats.seminars;
  const studentsTrained = Math.round(
    stats.workshops * 42 + stats.camps * 38 + stats.hackathons * 65 + stats.seminars * 50
  );
  const placementPercentage = Math.min(96, 72 + Math.round(programs * 0.7));
  return { programs, studentsTrained, placementPercentage };
};

export const TamilnaduPrograms = ({ onOpenApply }) => {
  const [activeId, setActiveId] = useState(null);
  const sectionRef = useRef(null);

  // Scroll-linked parallax for the background blobs.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const blobY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const blobRotate = useTransform(scrollYProgress, [0, 1], [0, 25]);

  // 3D tilt for the sticky district card, following the cursor.
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(useTransform(tiltY, [-60, 60], [10, -10]), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useTransform(tiltX, [-60, 60], [-10, 10]), { stiffness: 180, damping: 18 });
  const handleTiltMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    tiltX.set(e.clientX - rect.left - rect.width / 2);
    tiltY.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleTiltLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  const selectableDistricts = districts.filter((d) => d.id !== 'ALL');
  const activeDistrict = activeId ? districts.find((d) => d.id === activeId) : null;
  const ActiveIcon = activeDistrict ? activeDistrict.icon : null;
  const activeData = activeId ? districtDetails[activeId] : null;
  const metrics = activeData ? computeMetrics(activeData.stats) : null;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b border-slate-200/60 bg-slate-50 py-4 sm:py-6"
      id="tamilnadu-reach"
    >
      <style>{`
        @keyframes tnGlowPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(14, 165, 233, 0.35), 0 20px 45px -20px rgba(15, 23, 42, 0.35); }
          50% { box-shadow: 0 0 0 8px rgba(14, 165, 233, 0), 0 25px 55px -18px rgba(15, 23, 42, 0.4); }
        }
        .tn-glow-border { animation: tnGlowPulse 3.2s ease-in-out infinite; }

        .spotlight-card { --spot-x: 50%; --spot-y: 50%; }
        .spotlight-glow {
          position: absolute;
          inset: 0;
          opacity: 0;
          pointer-events: none;
          border-radius: inherit;
          transition: opacity 0.35s ease;
          background: radial-gradient(280px circle at var(--spot-x) var(--spot-y), rgba(var(--spot-color), 0.16), transparent 70%);
        }
        .spotlight-card:hover .spotlight-glow { opacity: 1; }

        .tn-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.4;
          pointer-events: none;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        .tn-blob-a {
          top: -70px; left: -60px; width: 260px; height: 260px;
          background: radial-gradient(circle, #38bdf8, transparent 70%);
          animation-name: tnBlobFloatA; animation-duration: 17s;
        }
        .tn-blob-b {
          bottom: -90px; right: -50px; width: 320px; height: 320px;
          background: radial-gradient(circle, #f87171, transparent 70%);
          animation-name: tnBlobFloatB; animation-duration: 21s;
        }
        .tn-blob-c {
          top: 35%; left: 48%; width: 200px; height: 200px;
          background: radial-gradient(circle, #4ade80, transparent 70%);
          animation-name: tnBlobFloatA; animation-duration: 25s;
        }
        @keyframes tnBlobFloatA {
          0%, 100% { transform: translate(0, 0) scale(1); border-radius: 50%; }
          33% { transform: translate(30px, -25px) scale(1.15); border-radius: 60% 40% 55% 45%; }
          66% { transform: translate(-25px, 20px) scale(0.9); border-radius: 40% 60% 45% 55%; }
        }
        @keyframes tnBlobFloatB {
          0%, 100% { transform: translate(0, 0) scale(1); border-radius: 50%; }
          33% { transform: translate(-30px, 20px) scale(0.9); border-radius: 55% 45% 40% 60%; }
          66% { transform: translate(25px, -20px) scale(1.1); border-radius: 45% 55% 60% 40%; }
        }

        .tn-marquee-mask {
          -webkit-mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
          mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
        }
        .tn-marquee-track { animation: tnMarquee 24s linear infinite; }
        .tn-marquee-mask:hover .tn-marquee-track { animation-play-state: paused; }
        @keyframes tnMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      {/* Scroll-linked floating background blobs */}
      <motion.div className="pointer-events-none absolute inset-0" style={{ y: blobY, rotate: blobRotate }}>
        <span className="tn-blob tn-blob-a" />
        <span className="tn-blob tn-blob-b" />
        <span className="tn-blob tn-blob-c" />
      </motion.div>

      {/* Decorative grid pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-[0.25]" />

      {/* Background subtly dims once a district is selected */}
      <AnimatePresence>
        {activeId && (
          <motion.div
            key="dim"
            className="pointer-events-none absolute inset-0 bg-slate-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.035 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading — doubles as the empty-state prompt when nothing is selected */}
        <div className="mb-5 text-center">
          <motion.span
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-3 block font-heading text-xs font-bold uppercase tracking-widest text-sky-600"
          >
            ACADEMIC REACH
          </motion.span>
          <AnimatePresence mode="wait">
            {!activeId ? (
              <motion.div key="heading-default" exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.3 }}>
                <h2 className="mb-3 flex flex-wrap items-center justify-center gap-x-2 text-xl font-extrabold leading-tight text-slate-900 md:text-3xl">
                  <SplitHeading text="Upskilling Programs" />
                  <motion.span
                    className="inline-block text-sky-500"
                    initial={{ y: '110%', rotate: -6 }}
                    animate={{ y: '0%', rotate: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                  >
                    All Over Tamil Nadu
                  </motion.span>
                </h2>
                <Marquee items={marqueeItems} />
              </motion.div>
            ) : (
              <motion.div
                key="heading-active"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="mb-2 flex flex-wrap items-center justify-center gap-x-2 text-xl font-extrabold leading-tight text-slate-900 md:text-3xl">
                  <SplitHeading text="Your Career Journey in" />
                  <motion.span
                    className="inline-block text-sky-500"
                    initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 14, delay: 0.35 }}
                  >
                    {activeDistrict?.name}
                  </motion.span>
                </h2>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Unified selection view via single AnimatePresence with mode="wait" to prevent layout snap/glitch */}
        <AnimatePresence mode="wait">
          {!activeId ? (
            <motion.div
              key="grid"
              style={{ perspective: 900 }}
              className="flex flex-wrap justify-center gap-2 sm:gap-2.5"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
            >
              {selectableDistricts.map((district, i) => {
                const Icon = district.icon;
                return (
                  <Magnetic
                    as={motion.button}
                    key={district.id}
                    onClick={() => setActiveId(district.id)}
                    strength={0.18}
                    initial={{ opacity: 0, rotateX: -45, y: 15 }}
                    whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex min-w-[95px] flex-col items-center justify-center gap-1.5 rounded-2xl border border-slate-200 bg-white px-2.5 py-3 text-center shadow-sm transition-shadow hover:border-sky-300 hover:shadow-md"
                  >
                    <motion.span
                      className="text-xl text-amber-900/70 transition-colors group-hover:text-sky-500"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 12, delay: i * 0.02 }}
                    >
                      <Icon />
                    </motion.span>
                    <span className="text-[10px] font-bold uppercase tracking-wide text-slate-700">
                      {district.name}
                    </span>
                  </Magnetic>
                );
              })}
            </motion.div>
          ) : (
            activeData && metrics && (
              <motion.div
                key="two-col"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22 }}
                className="grid grid-cols-1 gap-4 lg:grid-cols-[28%_1fr] lg:gap-5 text-left"
              >
                {/* LEFT: sticky, tilting district profile card */}
                <motion.div
                  onMouseMove={handleTiltMove}
                  onMouseLeave={handleTiltLeave}
                  style={{ rotateX, rotateY, transformPerspective: 900 }}
                  className="tn-glow-border relative self-start lg:sticky lg:top-24"
                >
                  <Spotlight className="rounded-3xl border border-white/60 bg-white/70 p-4 sm:p-5 shadow-lg backdrop-blur-md">
                    <button
                      onClick={() => setActiveId(null)}
                      className="absolute right-3.5 top-3.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-600 border-none cursor-pointer"
                      aria-label="Choose a different district"
                    >
                      <FaTimes className="text-[10px]" />
                    </button>

                    <motion.div
                      className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-sky-700 text-xl text-white shadow-md"
                      initial={{ scale: 0.6, rotate: -20, opacity: 0 }}
                      animate={{ scale: 1, rotate: 0, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 14, delay: 0.08 }}
                      whileHover={{ rotate: 10, scale: 1.05 }}
                    >
                      {ActiveIcon && <ActiveIcon />}
                    </motion.div>

                    <h3 className="mb-3 text-base font-extrabold leading-tight text-slate-900">
                      {activeDistrict?.name}
                    </h3>

                    <div className="mb-4 grid grid-cols-3 gap-1.5">
                      {[
                        { value: metrics.studentsTrained, suffix: '+', label: 'Students' },
                        { value: metrics.programs, suffix: '+', label: 'Programs' },
                        { value: metrics.placementPercentage, suffix: '%', label: 'Placement' }
                      ].map((stat, i) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15 + i * 0.08, duration: 0.3 }}
                          whileHover={{ y: -1 }}
                          className="rounded-xl border border-slate-100 bg-white/80 p-2 sm:p-2.5 text-center transition-shadow hover:shadow-md"
                        >
                          <div className="text-sm sm:text-base font-extrabold text-slate-900">
                            <Counter value={stat.value} suffix={stat.suffix} />
                          </div>
                          <div className="mt-0.5 text-[8.5px] font-bold uppercase tracking-wide text-slate-400">
                            {stat.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <Magnetic
                      as={motion.button}
                      strength={0.12}
                      onClick={onOpenApply}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, type: 'spring', stiffness: 300, damping: 12 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative flex w-full items-center justify-center gap-1.5 overflow-hidden rounded-xl bg-gradient-to-r from-red-700 to-red-800 px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md shadow-red-900/10 transition-shadow hover:shadow-lg border-none cursor-pointer"
                    >
                      <span className="absolute inset-0 origin-left scale-x-0 bg-white/15 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                      <span className="relative">Apply Now</span>
                      <FaArrowRight className="relative transition-transform duration-300 group-hover:translate-x-1" />
                    </Magnetic>
                  </Spotlight>
                </motion.div>

                {/* RIGHT: District Enrollment Drive Panel — bento layout so the whole detail view fits one screen */}
                {(() => {
                  const outreach = districtOutreach[activeId];
                  const student = studentProfiles[activeId];
                  if (!outreach) return null;
                  const fillPct = Math.round((outreach.placedSoFar / outreach.enrollmentTarget) * 100);
                  return (
                    <div className="flex flex-col gap-2.5 w-full">

                      {/* Hero tagline + headline */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35 }}
                        className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm"
                      >
                        <span
                          className="mb-1.5 inline-block rounded-full px-2.5 py-0.5 text-[9px] font-black uppercase tracking-widest text-white"
                          style={{ background: outreach.accentColor }}
                        >
                          {outreach.tagline}
                        </span>
                        <h3 className="text-sm font-extrabold leading-snug text-slate-900 mb-1">{outreach.headline}</h3>
                        <p className="text-[11px] text-slate-500 leading-relaxed">{outreach.focus}</p>
                      </motion.div>

                      {/* Bento row: Enrollment Progress + Alumni Success Story */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">

                        {/* Enrollment Progress */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.35, delay: 0.08 }}
                          className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm"
                        >
                          <div className="mb-2 flex items-center justify-between">
                            <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Enrollment Progress</span>
                            <span className="text-[10px] font-black" style={{ color: outreach.accentColor }}>{fillPct}%</span>
                          </div>
                          <div className="mb-3 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                            <motion.div
                              className="h-full rounded-full"
                              style={{ background: outreach.accentColor }}
                              initial={{ width: 0 }}
                              animate={{ width: `${fillPct}%` }}
                              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="rounded-xl border border-slate-100 bg-slate-50 p-2 text-center">
                              <div className="text-sm font-extrabold text-slate-900">{outreach.placedSoFar}</div>
                              <div className="mt-0.5 text-[8px] font-bold uppercase tracking-wide text-slate-400">Enrolled</div>
                            </div>
                            <div className="rounded-xl border border-slate-100 bg-slate-50 p-2 text-center">
                              <div className="text-sm font-extrabold" style={{ color: outreach.accentColor }}>{outreach.enrollmentTarget}</div>
                              <div className="mt-0.5 text-[8px] font-bold uppercase tracking-wide text-slate-400">Target Seats</div>
                            </div>
                          </div>
                        </motion.div>

                        {/* Alumni Success Story — real outcome proof, replaces the old college-name list */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.35, delay: 0.14 }}
                          className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm"
                        >
                          <p className="mb-2 text-[9px] font-black uppercase tracking-widest text-slate-400">Alumni Success Story</p>
                          {student && (
                            <div className="flex items-start gap-2.5">
                              <StudentAvatar color={student.avatarColor} />
                              <div className="min-w-0 flex-1">
                                <p className="truncate text-[12.5px] font-extrabold text-slate-900">{student.name}</p>
                                <p className="truncate text-[9.5px] font-semibold text-slate-500">{student.program}</p>
                                <div className="mt-1.5 flex flex-wrap items-center gap-1">
                                  <span
                                    className="rounded-full px-2 py-0.5 text-[8.5px] font-black text-white"
                                    style={{ background: student.avatarColor }}
                                  >
                                    {student.placement}
                                  </span>
                                  <span className="text-[9px] font-black text-emerald-600">₹{student.salary}</span>
                                </div>
                              </div>
                            </div>
                          )}
                        </motion.div>

                      </div>

                      {/* Outreach channels + highlight */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.20 }}
                        className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm"
                      >
                        <p className="mb-2 text-[9px] font-black uppercase tracking-widest text-slate-400">Outreach Methods</p>
                        <div className="mb-3 flex flex-wrap gap-1.5">
                          {outreach.outreachChannels.map((ch) => (
                            <span key={ch} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[9.5px] font-bold text-slate-600">
                              {ch}
                            </span>
                          ))}
                        </div>
                        <div
                          className="rounded-xl p-2.5 text-[10.5px] font-semibold leading-snug"
                          style={{ background: outreach.accentColor + '12', color: outreach.accentColor, borderLeft: `3px solid ${outreach.accentColor}` }}
                        >
                          ★ {outreach.highlight}
                        </div>
                      </motion.div>

                    </div>
                  );
                })()}

              </motion.div>
            )
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TamilnaduPrograms;