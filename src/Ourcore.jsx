import React, { useState, useEffect, useRef } from 'react';
import './Ourcore.css';
import coreVideo from './assets/OurCoreValuebg.mp4';
import img01 from './assets/01.png';
import { motion } from 'motion/react';
import { Bot, Sparkles, Brain, Target, Palette, Layout, GraduationCap, Layers, Cloud, Settings, Star, TrendingUp, BookOpen, Box, CheckCircle, ArrowUpRight, Activity, Lightbulb, FlaskConical } from 'lucide-react';
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
const DASHBOARD_HEIGHT = 240;
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

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden w-full">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 scale-110"
        style={{
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          opacity: 0.9
        }}
        src={coreVideo}
      />

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
            transform: `scale(${scale * 1.05}) translate(${-20 / scale}px, 0)`,
            transformOrigin: 'center center',
            position: 'relative',
            flexShrink: 0
          }}>
            <AnimationContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;

function AnimationContainer() {
  return (<div className="w-full h-full relative font-sans text-slate-800">
    {/* SVG Layer */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">

      {/* PHASE 1: Robot -> Left Nodes (Dotted) */}
      {leftNodes.map((node, i) => {
        // Calculate Y positions dynamically
        const spacing = 55;
        const startY = CENTER_Y - ((leftNodes.length - 1) * spacing) / 2;
        const y = startY + i * spacing;
        return (<ConnectionLine key={`p1-${i}`} startX={COL_1_X + 40} startY={CENTER_Y} endX={COL_2_X - 10} endY={y} type="dotted" delay={0.2} duration={1.0} curvature={0.3} />);
      })}

      {/* PHASE 2: Left Nodes -> Dashboard (Dotted) */}
      {leftNodes.map((node, i) => {
        const spacing = 55;
        const startY = CENTER_Y - ((leftNodes.length - 1) * spacing) / 2;
        const y = startY + i * spacing;
        return (<ConnectionLine key={`p2-${i}`} startX={COL_2_X + 160} // Right edge of Left Node container (approx)
          startY={y} endX={COL_3_X - DASHBOARD_WIDTH / 2 + 10} endY={CENTER_Y} type="dotted" delay={1.5 + (i * 0.1)} duration={0.8} curvature={0.4} />);
      })}

      {/* PHASE 3: Dashboard -> Right Nodes (Solid) */}
      {rightNodes.map((node, i) => {
        const spacing = 80;
        const startY = CENTER_Y - ((rightNodes.length - 1) * spacing) / 2;
        const y = startY + i * spacing;
        return (<ConnectionLine key={`p3-${i}`} startX={COL_3_X + DASHBOARD_WIDTH / 2 - 10} startY={CENTER_Y} endX={COL_4_X - 20} endY={y} type="solid" delay={3.5 + (i * 0.1)} duration={1.0} curvature={0.4} />);
      })}
    </svg>


    {/* Content Layer */}
    <div className="absolute inset-0 z-20">

      {/* Source: Robot */}
      <div className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center flex-col gap-3" style={{ left: COL_1_X - 40 }}>
        <motion.div className="w-20 h-20 rounded-2xl bg-slate-900 shadow-2xl flex items-center justify-center z-20 relative" initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <Bot className="w-10 h-10 text-green-400" />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-white" />
          </div>
        </motion.div>
        <motion.span className="text-xs font-bold uppercase tracking-wider text-white" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
          AI Source
        </motion.span>
      </div>

      {/* Left Nodes (Inputs) */}
      {leftNodes.map((node, i) => {
        const spacing = 55;
        const startY = CENTER_Y - ((leftNodes.length - 1) * spacing) / 2;
        const y = startY + i * spacing;
        return (<motion.div key={`ln-${i}`} className="absolute flex items-center gap-3 p-2 pr-4 bg-white rounded-lg border border-gray-100 shadow-sm z-20 w-[170px]" style={{ left: COL_2_X, top: y - 20 }} initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 + (i * 0.05), duration: 0.4 }}>
          <div className={`w-8 h-8 rounded-md ${node.color} flex items-center justify-center shrink-0`}>
            <node.icon className="w-4 h-4" />
          </div>
          <span className="text-xs font-semibold text-slate-700 leading-tight">
            {node.label}
          </span>
        </motion.div>);
      })}

      {/* Center Dashboard */}
      {/* Center Dashboard */}
      <motion.div className="absolute bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-30" style={{
        width: DASHBOARD_WIDTH,
        height: DASHBOARD_HEIGHT,
        left: COL_3_X - DASHBOARD_WIDTH / 2,
        top: CENTER_Y - DASHBOARD_HEIGHT / 2
      }} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}>
        {/* Dashboard Header */}
        <div className="h-14 border-b border-gray-100 flex items-center px-5 justify-between bg-slate-50/80">
          <div className="flex items-center gap-3 pl-1">
            <div className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center shrink-0">
              <Activity className="w-4 h-4 text-green-400" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-sm font-bold text-slate-900 leading-none" style={{ fontSize: '14px' }}>AI-Driven</h2>
              <span className="text-[10px] text-slate-500 font-medium leading-none" style={{ marginTop: '-15px', fontSize: '10px' }}>Creative Innovation</span>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-gray-400 shrink-0" />
        </div>

        {/* Dashboard Body */}
        <div className="p-5 grid grid-cols-2 gap-6" style={{ marginTop: '-25px', marginBottom: '-25px' }}>
          <div className="col-span-2 flex items-center gap-3 bg-white border border-white rounded-xl p-0 overflow-hidden h-16">
            <img src={img01} alt="Efficiency Graph" className="w-full h-full object-cover" style={{ transform: 'scale(0.7) translateY(-20px)' }} />
          </div>

          <div className="space-y-3 flex flex-col justify-end">
            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
              <motion.div className="h-full bg-slate-800 rounded-full" initial={{ width: 0 }} whileInView={{ width: "85%" }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 1 }} />
            </div>
            <div className="h-1.5 w-2/3 bg-gray-100 rounded-full overflow-hidden">
              <motion.div className="h-full bg-slate-400 rounded-full" initial={{ width: 0 }} whileInView={{ width: "60%" }} viewport={{ once: true }} transition={{ delay: 0.7, duration: 1 }} />
            </div>
          </div>

          <div className="flex items-end justify-between h-12">
            {[40, 70, 50, 90, 65].map((h, i) => (<motion.div key={i} className="w-1.5 bg-green-500/80 rounded-t-sm" initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }} transition={{ delay: 0.8 + (i * 0.1), duration: 0.5 }} />))}
          </div>
        </div>
      </motion.div>

      {/* Right Nodes (Outputs) */}
      {rightNodes.map((node, i) => {
        const spacing = 85;
        const startY = CENTER_Y - ((rightNodes.length - 1) * spacing) / 2;
        const y = startY + i * spacing;
        return (<motion.div key={`rn-${i}`} className="absolute flex items-center gap-4 bg-white p-3 pr-6 rounded-xl border border-gray-100 shadow-md z-20 w-[280px]" style={{ left: COL_4_X, top: y - 24 }} initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.2 + (i * 0.1), duration: 0.4 }}>
          <div className={`w-10 h-10 rounded-full ${node.color} flex items-center justify-center shrink-0 shadow-sm`}>
            <node.icon className="w-5 h-5 text-white" />
          </div>
          <span className="text-sm font-bold text-slate-800 leading-tight">
            {node.label}
          </span>
        </motion.div>);
      })}

    </div>
  </div>);
}
function ConnectionLine({ startX, startY, endX, endY, delay, duration, type = "solid", curvature = 0.5 }) {
  const dist = endX - startX;
  const cp1x = startX + dist * curvature;
  const cp1y = startY;
  const cp2x = endX - dist * curvature;
  const cp2y = endY;
  const pathData = `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`;
  return (<>
    {/* Background Track */}
    <motion.path d={pathData} fill="transparent" stroke="#F3F4F6" // gray-100 very light
      strokeWidth="2" strokeDasharray={type === 'dotted' ? "6,6" : "none"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} />

    {/* Active Line */}
    <motion.path d={pathData} fill="transparent" stroke="#22C55E" // green-500
      strokeWidth="2" strokeDasharray={type === 'dotted' ? "4,8" : "none"} strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{
        duration: duration,
        delay: delay,
        ease: "easeInOut"
      }} />
  </>);
}
