import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCode, FaLightbulb, FaUserGraduate } from 'react-icons/fa';
import { ExpertiseCarousel } from './ExpertiseCarousel';
import { ServicesOrbit } from '../../../components/ServicesOrbit/ServicesOrbit';

gsap.registerPlugin(ScrollTrigger);

export const About = ({ onOpenApply }) => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const revealDefaults = {
        opacity: 0,
        y: 40,
        scale: 0.98,
        filter: "blur(8px)",
        ease: "power3.out",
        duration: 1
      };

      const revealTo = {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)"
      };

      // Header reveal
      gsap.fromTo('.about-header', revealDefaults, {
        ...revealTo,
        scrollTrigger: { 
          trigger: sectionRef.current, 
          start: "top 95%", 
          toggleActions: "play none none none" 
        }
      });

      // Visual items reveal
      gsap.fromTo('.visual-item', revealDefaults, {
        ...revealTo,
        stagger: 0.02,
        duration: 0.4,
        scrollTrigger: { 
          trigger: '.visual-grid', 
          start: "top 95%", 
          toggleActions: "play none none none" 
        }
      });

      // Counter numbers animate
      const counters = gsap.utils.toArray('.counter-value');
      counters.forEach((c) => {
        const target = parseFloat(c.getAttribute('data-target') || '0');
        const isDecimal = c.getAttribute('data-decimal') === 'true';
        const suffix = c.getAttribute('data-suffix') || '';
        const obj = { val: 0 };

        gsap.to(obj, {
          val: target,
          duration: 2.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.service-stat',
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          onUpdate: () => {
            c.innerText = (isDecimal ? obj.val.toFixed(1) : Math.floor(obj.val)) + suffix;
          }
        });
      });

    }, sectionRef);

    setTimeout(() => ScrollTrigger.refresh(), 100);

    return () => ctx.revert();
  }, []);

  return (
    <div className="py-5 section-light relative z-10" id="about" ref={sectionRef}>
      
      {/* Light Header & Expertise Wrapper */}
      <div className="max-w-5xl mx-auto px-6 mb-2">
        {/* Creative Title for the Expertise Section */}
        <div className="about-header text-left flex flex-col items-start mb-8">
          <span className="text-xs text-[#00FFFF] tracking-widest uppercase font-bold block mb-3 font-aldrich">
            CAPABILITIES // OUR TECH MATRIX
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-5 leading-tight font-hexco">
            EXPLORE OUR <span className="text-brand-sky">DIGITAL ECOSYSTEM</span>
          </h2>
          <p className="text-gray-600 max-w-2xl text-sm sm:text-base leading-relaxed font-poppins">
            We leverage cutting-edge frameworks, robust cloud architectures, and interactive models to bridge the gap between software development pipelines and modern education.
          </p>
        </div>

        {/* Our Expertise Content */}
        <div className="visual-container flex flex-col gap-6 w-full">
          <h4 className="text-lg font-bold relative pb-2 border-b border-gray-100 flex items-center justify-between">
            <span>Our Expertise</span>
            <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-brand-sky shadow-glow-sky"></span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-brand-sky animate-pulse-slow">3D NODE SYNC</span>
          </h4>
          <ExpertiseCarousel />
        </div>
      </div>

      {/* Orbiting Services Section - Full Width, Split Layout */}
      <ServicesOrbit onOpenApply={onOpenApply} />

      {/* Light Cards Features Grid Wrapper */}
      <div className="max-w-5xl mx-auto px-6 pt-2">
        <div className="flex flex-col">
          {/* Cards Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-1">
            
            {/* Tech Card */}
            <div 
              className="group relative bg-slate-50/60 backdrop-blur-md border border-slate-200 shadow-sm rounded-3xl p-6 sm:p-8 flex flex-col gap-5 hover:border-brand-sky/50 hover:bg-white hover:shadow-[0_20px_40px_rgba(14,165,233,0.08)] transition-all duration-500 hover:-translate-y-2 cursor-default"
              style={{
                animation: 'float 6s ease-in-out infinite',
                animationDelay: '0s'
              }}
            >
              {/* Left edge accent strip */}
              <div className="w-[3px] h-10 bg-brand-sky rounded-full absolute left-4 top-8 group-hover:h-14 transition-all duration-500 shadow-glow-sky" />
              
              <div className="flex items-center gap-4 pl-2">
                <div className="w-12 h-12 rounded-2xl bg-brand-sky/5 border border-brand-sky/10 flex items-center justify-center text-brand-sky text-xl group-hover:bg-brand-sky group-hover:text-white group-hover:shadow-glow-sky transition-all duration-500">
                  <FaCode />
                </div>
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-brand-sky transition-colors duration-300">Enterprise Tech</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed pl-2">
                Drive software innovation with custom architectures, microservices, database systems, and secure API structures.
              </p>
            </div>

            {/* Growth Card */}
            <div 
              className="group relative bg-slate-50/60 backdrop-blur-md border border-slate-200 shadow-sm rounded-3xl p-6 sm:p-8 flex flex-col gap-5 hover:border-brand-sky/50 hover:bg-white hover:shadow-[0_20px_40px_rgba(14,165,233,0.08)] transition-all duration-500 hover:-translate-y-2 cursor-default"
              style={{
                animation: 'float 6s ease-in-out infinite',
                animationDelay: '1.2s'
              }}
            >
              {/* Left edge accent strip */}
              <div className="w-[3px] h-10 bg-brand-sky rounded-full absolute left-4 top-8 group-hover:h-14 transition-all duration-500 shadow-glow-sky" />
              
              <div className="flex items-center gap-4 pl-2">
                <div className="w-12 h-12 rounded-2xl bg-brand-sky/5 border border-brand-sky/10 flex items-center justify-center text-brand-sky text-xl group-hover:bg-brand-sky group-hover:text-white group-hover:shadow-glow-sky transition-all duration-500">
                  <FaLightbulb />
                </div>
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-brand-sky transition-colors duration-300">Empowering Growth</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed pl-2">
                We combine industry developer expertise with structured academic syllabi to drive student tech placement growth.
              </p>
            </div>

            {/* Edu Card */}
            <div 
              className="group relative bg-slate-50/60 backdrop-blur-md border border-slate-200 shadow-sm rounded-3xl p-6 sm:p-8 flex flex-col gap-5 hover:border-brand-sky/50 hover:bg-white hover:shadow-[0_20px_40px_rgba(14,165,233,0.08)] transition-all duration-500 hover:-translate-y-2 cursor-default"
              style={{
                animation: 'float 6s ease-in-out infinite',
                animationDelay: '2.4s'
              }}
            >
              {/* Left edge accent strip */}
              <div className="w-[3px] h-10 bg-brand-sky rounded-full absolute left-4 top-8 group-hover:h-14 transition-all duration-500 shadow-glow-sky" />
              
              <div className="flex items-center gap-4 pl-2">
                <div className="w-12 h-12 rounded-2xl bg-brand-sky/5 border border-brand-sky/10 flex items-center justify-center text-brand-sky text-xl group-hover:bg-brand-sky group-hover:text-white group-hover:shadow-glow-sky transition-all duration-500">
                  <FaUserGraduate />
                </div>
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-brand-sky transition-colors duration-300">Learning Platforms</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed pl-2">
                Interactive dashboards, live coding playgrounds, user testing reviews, and mock interview preparations.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
