import React, { useState, useEffect, useRef } from 'react';
import './Ourcore.css';
import coreVideo from './assets/OurCoreValuebg.mp4';
import logoImg from './assets/logo 2.png';
import { motion } from 'motion/react';
import { Bot, Sparkles, Brain, Target, Palette, Layout, GraduationCap, Layers, Cloud, Settings, Star, TrendingUp, BookOpen, Box, ArrowUpRight, Activity, Lightbulb, FlaskConical } from 'lucide-react';

// Layout Configuration
const CANVAS_WIDTH = 1400;
const CANVAS_HEIGHT = 800;
const CENTER_Y = CANVAS_HEIGHT / 2;
// Column Positions
const COL_1_X = 100; // Robot Source
const COL_2_X = 270; // Left Nodes (Inputs)
const COL_3_X = 700; // Center Dashboard
const COL_4_X = 1100; // Right Nodes (Outputs)
const DASHBOARD_WIDTH = 380;
const DASHBOARD_HEIGHT = 310;

// Data Structure
const leftNodes = [
  { id: 'l1', label: "Brand Strategy", icon: Sparkles, color: "bg-purple-100 text-purple-600" },
  { id: 'l2', label: "ERP", icon: Brain, color: "bg-pink-100 text-pink-600" },
  { id: 'l3', label: "CRM", icon: Target, color: "bg-red-100 text-red-600" },
  { id: 'l4', label: "Visual Identity", icon: Palette, color: "bg-orange-100 text-orange-600" },
  { id: 'l5', label: "UI/UX Design", icon: Layout, color: "bg-yellow-100 text-yellow-600" },
  { id: 'l6', label: "E-Learning Systems", icon: GraduationCap, color: "bg-green-100 text-green-600" },
  { id: 'l7', label: "Full Stack Dev", icon: Layers, color: "bg-teal-100 text-teal-600" },
  { id: 'l8', label: "Cloud Infra", icon: Cloud, color: "bg-cyan-100 text-cyan-600" },
  { id: 'l9', label: "Automation Tools", icon: Settings, color: "bg-blue-100 text-blue-600" },
];

const rightNodes = [
  { id: 'r1', label: "Smart Brand Experiences", icon: Star, color: "bg-indigo-600" },
  { id: 'r2', label: "AI Business Solutions", icon: TrendingUp, color: "bg-violet-600" },
  { id: 'r3', label: "Creative Strategy", icon: Lightbulb, color: "bg-orange-600" },
  { id: 'r4', label: "Personalized Learning", icon: BookOpen, color: "bg-fuchsia-600" },
  { id: 'r5', label: "Innovation Labs", icon: FlaskConical, color: "bg-emerald-600" },
  { id: 'r6', label: "Scalable Digital Products", icon: Box, color: "bg-rose-600" },
];

const App = () => {
  const [scale, setScale] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const scaleFactor = Math.min(1, width / CANVAS_WIDTH);
        setScale(scaleFactor);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const forceVideoPlay = (el) => {
    if (el) {
      el.defaultMuted = true;
      el.muted = true;
      el.play().catch(err => {
        console.error("Core values video autoplay failed:", err);
      });
    }
  };

  return (
    <div className="our-core-main-wrapper min-h-screen relative flex flex-col items-center justify-center overflow-hidden w-full">
      {/* Background Video */}
      <video
        ref={forceVideoPlay}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 z-0 scale-110"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.9
        }}
      >
        <source src={coreVideo} type="video/mp4" />
      </video>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full flex flex-col items-center p-4">
        {/* Header Section */}
        <div className="section-header core-values-header">
          <h2>OUR CORE VALUES</h2>
        </div>

        {/* Visualization Container */}
        <div
          ref={containerRef}
          className="relative rounded-xl overflow-hidden"
          style={{
            width: '100%',
            maxWidth: `${CANVAS_WIDTH}px`,
            aspectRatio: '16/9',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div style={{
            width: `${CANVAS_WIDTH}px`,
            height: `${CANVAS_HEIGHT}px`,
            transform: `scale(${scale})`,
            transformOrigin: 'center center',
            position: 'relative',
            flexShrink: 0
          }}>
            <AnimationContainer isMobile={scale < 0.9} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;

function AnimationContainer({ isMobile }) {
  const inView = (target) => ({ animate: target });

  return (<div className="w-full h-full relative font-sans text-slate-800">
    {/* SVG Layer */}
    <svg viewBox={`0 0 ${CANVAS_WIDTH} ${CANVAS_HEIGHT}`} className="absolute inset-0 w-full h-full pointer-events-none z-10" xmlns="http://www.w3.org/2000/svg">

      {/* PHASE 1: Robot -> Left Nodes (Green Curved Lines) */}
      {leftNodes.map((node, i) => {
        const spacing = 55;
        const startY = CENTER_Y - ((leftNodes.length - 1) * spacing) / 2;
        const y = startY + i * spacing;
        return (
          <ConnectionLine
            key={`p1-${i}`}
            startX={COL_1_X + 40}
            startY={CENTER_Y}
            endX={COL_2_X - 10}
            endY={y}
            type="solid"
            color="#22C55E"
            trackColor="rgba(34, 197, 94, 0.4)"
            delay={0.2}
            duration={1.0}
            curvature={0.35}
            isMobile={isMobile}
          />
        );
      })}

      {/* PHASE 2: Left Nodes -> Dashboard (Green Curved Lines) */}
      {leftNodes.map((node, i) => {
        const spacing = 55;
        const startY = CENTER_Y - ((leftNodes.length - 1) * spacing) / 2;
        const y = startY + i * spacing;
        return (
          <ConnectionLine
            key={`p2-${i}`}
            startX={COL_2_X + 170}
            startY={y}
            endX={COL_3_X - DASHBOARD_WIDTH / 2 + 10}
            endY={CENTER_Y}
            type="solid"
            color="#22C55E"
            trackColor="rgba(34, 197, 94, 0.4)"
            delay={0.8 + (i * 0.05)}
            duration={0.8}
            curvature={0.35}
            isMobile={isMobile}
          />
        );
      })}

      {/* PHASE 3: Dashboard -> Right Nodes (White Curved Lines) */}
      {rightNodes.map((node, i) => {
        const spacing = 80;
        const startY = CENTER_Y - ((rightNodes.length - 1) * spacing) / 2;
        const y = startY + i * spacing;
        return (
          <ConnectionLine
            key={`p3-${i}`}
            startX={COL_3_X + DASHBOARD_WIDTH / 2 - 10}
            startY={CENTER_Y}
            endX={COL_4_X - 10}
            endY={y}
            type="solid"
            color="#FFFFFF"
            trackColor="rgba(255, 255, 255, 0.5)"
            delay={1.5 + (i * 0.08)}
            duration={1.0}
            curvature={0.4}
            isMobile={isMobile}
          />
        );
      })}
    </svg>


    {/* Content Layer */}
    <div className="absolute inset-0 z-20">

      {/* Source: Robot / ENGLORAY Icon */}
      <div className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center flex-col gap-3" style={{ left: COL_1_X - 40 }}>
        <motion.div
          className="w-20 h-20 rounded-2xl bg-slate-900 shadow-2xl flex items-center justify-center z-20 relative border border-slate-700"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Bot className="w-10 h-10 text-green-400" />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center shadow-md">
            <Sparkles className="w-3 h-3 text-white" />
          </div>
        </motion.div>
        <motion.span
          className="text-xs font-bold uppercase tracking-wider text-white bg-slate-900/80 px-2 py-0.5 rounded-full border border-slate-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          ENGLORAY
        </motion.span>
      </div>

      {/* Left Nodes (Inputs) */}
      {leftNodes.map((node, i) => {
        const spacing = 55;
        const startY = CENTER_Y - ((leftNodes.length - 1) * spacing) / 2;
        const y = startY + i * spacing;
        return (
          <motion.div
            key={`ln-${i}`}
            className="absolute flex items-center gap-3 p-2 pr-4 bg-white rounded-xl border border-gray-100 shadow-md z-20 w-[170px]"
            style={{ left: COL_2_X, top: y - 20 }}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 + (i * 0.05), duration: 0.4 }}
          >
            <div className={`w-8 h-8 rounded-lg ${node.color} flex items-center justify-center shrink-0 shadow-sm`}>
              <node.icon className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-slate-700 leading-tight">
              {node.label}
            </span>
          </motion.div>
        );
      })}

      {/* Center Dashboard Card */}
      <motion.div
        className="absolute bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-30 flex flex-col"
        style={{
          width: DASHBOARD_WIDTH,
          height: DASHBOARD_HEIGHT,
          left: COL_3_X - DASHBOARD_WIDTH / 2,
          top: CENTER_Y - DASHBOARD_HEIGHT / 2
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* Dashboard Header */}
        <div className="h-12 border-b border-gray-100 flex items-center px-4 justify-between bg-slate-50/90 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-slate-900 flex items-center justify-center shrink-0 shadow-sm">
              <Activity className="w-3.5 h-3.5 text-green-400" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-xs font-bold text-slate-900 leading-tight" style={{ fontSize: '13px', margin: 0 }}>AI-Driven</h2>
              <span className="text-[10px] text-slate-500 font-medium leading-tight" style={{ fontSize: '10px' }}>Creative Innovation</span>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-gray-400 shrink-0" />
        </div>

        {/* Dashboard Body */}
        <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, textAlign: 'center', gap: '10px' }}>
          {/* Logo Section – ENGLORAY red arc + wordmark */}
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src={logoImg}
              alt="Engloray Logo"
              style={{
                height: '72px',
                width: 'auto',
                maxWidth: '260px',
                objectFit: 'contain',
                display: 'block',
                flexShrink: 0
              }}
            />
          </div>

          {/* Text Description */}
          <motion.p
            style={{ fontSize: '11.5px', lineHeight: '1.55', color: '#475569', fontWeight: 500, margin: 0, padding: '0 8px' }}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            At <span style={{ color: '#0f172a', fontWeight: 700 }}>Engloray</span>, we transform complexity into
            <span style={{ color: '#16a34a', fontWeight: 700 }}> scalable innovation</span>. Our AI-powered ecosystem
            bridges the gap between creative vision and technical excellence.
          </motion.p>
        </div>
      </motion.div>

      {/* Right Nodes (Outputs) */}
      {rightNodes.map((node, i) => {
        const spacing = 80;
        const startY = CENTER_Y - ((rightNodes.length - 1) * spacing) / 2;
        const y = startY + i * spacing;
        return (
          <motion.div
            key={`rn-${i}`}
            className="absolute flex items-center gap-4 bg-white p-3 pr-6 rounded-xl border border-gray-100 shadow-md z-20 w-[280px]"
            style={{ left: COL_4_X, top: y - 24 }}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.0 + (i * 0.08), duration: 0.4 }}
          >
            <div className={`w-10 h-10 rounded-full ${node.color} flex items-center justify-center shrink-0 shadow-md`}>
              <node.icon className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-bold text-slate-800 leading-tight">
              {node.label}
            </span>
          </motion.div>
        );
      })}

    </div>
  </div>);
}

function ConnectionLine({ startX, startY, endX, endY, delay, duration, type = "solid", curvature = 0.5, isMobile, color = "#22C55E", trackColor = "rgba(34, 197, 94, 0.4)" }) {
  const dist = endX - startX;
  const cp1x = startX + dist * curvature;
  const cp1y = startY;
  const cp2x = endX - dist * curvature;
  const cp2y = endY;
  const pathData = `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`;

  return (<>
    {/* Background Track */}
    <motion.path
      d={pathData}
      fill="none"
      stroke={trackColor}
      strokeWidth="2.5"
      strokeDasharray={type === 'dotted' ? "6,6" : undefined}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.4 }}
    />

    {/* Active Line */}
    <motion.path
      d={pathData}
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeDasharray={type === 'dotted' ? "4,8" : undefined}
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration, delay, ease: "easeInOut" }}
    />
  </>);
}

