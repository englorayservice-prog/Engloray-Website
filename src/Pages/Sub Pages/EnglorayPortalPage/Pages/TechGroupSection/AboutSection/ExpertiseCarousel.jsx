import React, { useState, useEffect, useRef } from 'react';
import digitalInnovationVideo from '../../../assets/Our exp/Digital Innovation.mp4';
import learningSolutionVideo from '../../../assets/Our exp/Learning solution.mp4';
import businessGrowthVideo from '../../../assets/Our exp/Business Growth.mp4';
import techStackVideo from '../../../assets/Our exp/Tech stack.mp4';
import workflowDesignVideo from '../../../assets/Our exp/Workflow Design.mp4';

const CARD_VIDEOS = [
  digitalInnovationVideo,
  learningSolutionVideo,
  businessGrowthVideo,
  techStackVideo,
  workflowDesignVideo
];

const CARD_DETAILS = [
  { 
    title: 'DIGITAL INNOVATION',
    number: 'NODE // 0192 8847 1030', 
    name: 'TECH INFRASTRUCTURE', 
    cvv: '991',
    desc: 'Strategy & Concepting',
    glowColor: '#0ea5e9' // sky blue
  },
  { 
    title: 'LEARNING SOLUTIONS',
    number: 'NODE // 4154 7831 9904', 
    name: 'EDUCATION PORTALS', 
    cvv: '109',
    desc: 'Mock Coding Dashboards',
    glowColor: '#10b981' // emerald green
  },
  { 
    title: 'BUSINESS GROWTH',
    number: 'NODE // 5457 4120 7733', 
    name: 'STRATEGIC PLACEMENT', 
    cvv: '764',
    desc: 'Enterprise Tech Auditing',
    glowColor: '#f59e0b' // gold amber
  },
  { 
    title: 'TECHNOLOGY STACK',
    number: 'NODE // 4441 5567 1223', 
    name: 'SYSTEM INTEGRITY', 
    cvv: '491',
    desc: 'APIs & Microservices',
    glowColor: '#6366f1' // indigo
  },
  { 
    title: 'WORKFLOW DESIGN',
    number: 'NODE // 5375 8891 2234', 
    name: 'AUTOMATION PIPELINE', 
    cvv: '255',
    desc: 'Optimized Telemetry',
    glowColor: '#ec4899' // violet pink
  }
];

export const ExpertiseCarousel = () => {
  const cardCount = 5;
  const cardsRefs = useRef([]);
  const containerRef = useRef(null);
  const frameId = useRef(0);
  const progress = useRef(0);
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  const [metrics, setMetrics] = useState({
    cardW: 240,
    cardH: 151
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const rx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const ry = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      mouse.current.targetX = Math.max(-1, Math.min(1, rx));
      mouse.current.targetY = Math.max(-1, Math.min(1, ry));
    };

    const handleMouseLeave = () => {
      mouse.current.targetX = 0;
      mouse.current.targetY = 0;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      // Calculate responsive card width, allowing it to scale up to 340px
      const isMobile = w < 640;
      const minCardW = isMobile ? 150 : 210;
      const cardW = Math.min(340, Math.max(minCardW, Math.round(w * (isMobile ? 0.45 : 0.32))));
      const cardH = Math.round(cardW / 1.5925);
      setMetrics({ cardW, cardH });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderLoop = () => {
    progress.current += 0.0055;

    mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.08;
    mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.08;

    const cards = cardsRefs.current;
    if (!containerRef.current) return;
    const w = containerRef.current.clientWidth;
    const { cardW } = metrics;

    const continuousProgress = progress.current;
    const roundedIndex = Math.round(continuousProgress);
    const diffFromRound = continuousProgress - roundedIndex;
    const easedDiff = Math.sign(diffFromRound) * Math.pow(Math.abs(diffFromRound) * 2, 4.2) / 2;
    const virtualActiveIndex = roundedIndex + easedDiff;

    const D = 1350;

    for (let i = 0; i < cardCount; i++) {
      const card = cards[i];
      if (!card) continue;

      let offset = i - virtualActiveIndex;
      const halfCount = cardCount / 2;
      while (offset > halfCount) offset -= cardCount;
      while (offset < -halfCount) offset += cardCount;

      const absOffset = Math.abs(offset);
      const sign = Math.sign(offset);

      if (absOffset > 2.5) {
        card.style.visibility = 'hidden';
        continue;
      } else {
        card.style.visibility = 'visible';
      }

      const isMobile = w < 640;
      const gap = isMobile ? 25 : 60;
      const peekAmount = -100;

      let x = 0;
      let z = 0;
      let rot = 0;

      if (absOffset <= 1) {
        const t = absOffset;
        const easedT = t * t * (3 - 2 * t);
        const targetX = cardW + gap;
        x = sign * (easedT * targetX);
        z = 400 + easedT * (200 - 400);
        rot = easedT * 132;
      } else if (absOffset <= 2) {
        const t = absOffset - 1;
        const easedT = t * t * (3 - 2 * t);

        const xStart = cardW + gap;
        const zStart = 200;
        const rotStart = 132;

        const zEnd = -60;
        const rotEnd = 175;

        const sEnd = D / (D - zEnd);
        const xEnd = (w / 2 - peekAmount) / sEnd - (cardW / 2);

        const currentX = xStart + easedT * (xEnd - xStart);
        x = sign * currentX;

        z = zStart + easedT * (zEnd - zStart);
        rot = rotStart + easedT * (rotEnd - rotStart);
      } else {
        const t = Math.min(absOffset - 2, 1);
        const easedT = t * t * (3 - 2 * t);

        const zStart = -60;
        const rotStart = 175;

        const zEnd3 = -250;
        const rotEnd3 = 195;

        const sEnd2 = D / (D - zStart);
        const xEnd2 = (w / 2 - peekAmount) / sEnd2 - (cardW / 2);

        const sEnd3 = D / (D - zEnd3);
        const xEnd3 = (w / 2 + 100) / sEnd3 + (cardW / 2);

        const currentX = xEnd2 + easedT * (xEnd3 - xEnd2);
        x = sign * currentX;

        z = zStart + easedT * (zEnd3 - zStart);
        rot = rotStart + easedT * (rotEnd3 - rotStart);
      }

      const localCardRotation = -sign * rot;
      const centerFactor = Math.max(0, 1 - absOffset);

      const maxTiltX = 15;
      const maxTiltY = 12;

      const activeTiltX = -mouse.current.y * maxTiltX * centerFactor;
      const activeTiltY = mouse.current.x * maxTiltY * centerFactor;

      const totalRotY = localCardRotation + activeTiltY;
      const totalRotX = activeTiltX;

      card.style.zIndex = Math.round(z).toString();
      card.style.opacity = '1';
      card.style.transform = `translateX(${x.toFixed(2)}px) translateZ(${z.toFixed(2)}px) rotateY(${totalRotY.toFixed(2)}deg) rotateX(${totalRotX.toFixed(2)}deg) rotateZ(-3deg)`;
    }
  };

  useEffect(() => {
    const tick = () => {
      renderLoop();
      frameId.current = requestAnimationFrame(tick);
    };

    frameId.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId.current);
  }, [metrics]);

  const thicknessLayers = [-1.47, -0.73, 0, 0.73, 1.47];

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[440px] bg-black text-white flex items-center justify-center overflow-hidden select-none rounded-2xl shadow-inner border border-white/5 cursor-pointer"
    >
      <div
        className="relative w-full h-full flex items-center justify-center"
        style={{ perspective: '1350px' }}
      >
        <div
          className="absolute"
          style={{
            width: `${metrics.cardW}px`,
            height: `${metrics.cardH}px`,
            transformStyle: 'preserve-3d',
          }}
        >
          {Array.from({ length: cardCount }).map((_, i) => (
            <div
              key={i}
              ref={(el) => { cardsRefs.current[i] = el; }}
              className="absolute inset-0"
              style={{
                width: `${metrics.cardW}px`,
                height: `${metrics.cardH}px`,
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'visible',
              }}
            >
              {thicknessLayers.map((zOffset, layerIdx) => {
                const isFrontFace = layerIdx === thicknessLayers.length - 1;
                const isBackFace = layerIdx === 0;

                const videoSrc = CARD_VIDEOS[i % CARD_VIDEOS.length];
                const baseBgColor = '#0d1117';

                if (!isFrontFace && !isBackFace) {
                  return (
                    <div
                      key={layerIdx}
                      className="absolute inset-0 rounded-[12px] border border-white/10 pointer-events-none overflow-hidden"
                      style={{
                        backgroundColor: '#444',
                        transform: `translateZ(${zOffset}px)`,
                      }}
                    />
                  );
                }

                if (isFrontFace) {
                  const details = CARD_DETAILS[i % cardCount];
                  return (
                    <div
                      key={layerIdx}
                      className="absolute inset-0 rounded-[12px] border border-white/10 pointer-events-none overflow-hidden"
                      style={{
                        backgroundColor: baseBgColor,
                        transform: `translateZ(${zOffset}px)`,
                        backfaceVisibility: 'hidden',
                        boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15)',
                      }}
                    >
                      <video
                        src={videoSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover rounded-[12px]"
                      />

                      {/* Neon Border Highlight */}
                      <div 
                        className="absolute inset-0 rounded-[12px] border-2 pointer-events-none z-20 transition-all duration-300"
                        style={{
                          borderColor: `${details.glowColor}55`,
                          boxShadow: `0 0 20px ${details.glowColor}25, inset 0 0 10px ${details.glowColor}15`
                        }}
                      />

                      <div className="absolute inset-0 p-4 text-white h-full w-full font-sans z-10 bg-black/45 flex flex-col justify-between">
                        {/* Title of the card (Top-Left) */}
                        <div 
                          className="text-[10px] tracking-widest font-black uppercase z-20 font-mono"
                          style={{
                            color: details.glowColor,
                            textShadow: `0 0 8px ${details.glowColor}80`
                          }}
                        >
                          {details.title}
                        </div>
                      </div>
                    </div>
                  );
                }

                if (isBackFace) {
                  const details = CARD_DETAILS[i % CARD_DETAILS.length];
                  return (
                    <div
                      key={layerIdx}
                      className="absolute inset-0 rounded-[12px] border border-white/15 pointer-events-none overflow-hidden"
                      style={{
                        backgroundColor: baseBgColor,
                        transform: `translateZ(${zOffset}px) rotateY(180deg)`,
                        backfaceVisibility: 'hidden',
                        boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15)',
                      }}
                    >
                      <div className="absolute inset-0 pointer-events-none" style={{ filter: 'blur(8px)', transform: 'scale(1.1)' }}>
                        <video
                          src={videoSrc}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>

                      {/* Back Neon Border Highlight */}
                      <div 
                        className="absolute inset-0 rounded-[12px] border-2 pointer-events-none z-20 transition-all duration-300"
                        style={{
                          borderColor: `${details.glowColor}44`,
                          boxShadow: `0 0 15px ${details.glowColor}15`
                        }}
                      />

                      <div className="absolute left-0 right-0 top-3 h-5 bg-black/85" />

                      <div className="absolute left-3 bottom-3 flex flex-col gap-0.5 text-left font-mono text-white z-20">
                        <div className="text-[9px] font-bold tracking-wide">
                          {details.number}
                        </div>
                        <div className="text-[7px] text-white/70 flex items-center gap-1.5">
                          <span className="font-sans uppercase" style={{ color: details.glowColor }}>{details.name}</span>
                          <span className="opacity-40">•</span>
                          <span>{details.desc}</span>
                        </div>
                      </div>
                    </div>
                  );
                }

                return null;
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
