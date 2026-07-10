import React from 'react';
import './Programs.css';

// Helper to convert hex colors to rgba for the glowing shadows
const hexToRgba = (hex, alpha = 0.15) => {
  if (!hex) return `rgba(56, 189, 248, ${alpha})`;
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const ProgramCard = ({ 
  name, 
  icon, 
  desc, 
  image,
  video,
  type = 'Professional Course',
  accentColor = '#38bdf8', 
  duration = '6 Weeks',
  badgeText, // e.g. "Popular", "Hot", "Paid"
  tools = 'Tools & Subjects',
  onClick
}) => {
  const accentAlpha = hexToRgba(accentColor, 0.25);
  const isCourse = type === 'Professional Course';

  return (
    <button
      type="button"
      onClick={onClick}
      style={{ 
        '--card-accent': accentColor,
        '--card-accent-alpha': accentAlpha
      }}
      className="program-card group relative flex w-full overflow-hidden rounded-xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50/50 shadow-sm transition-all duration-300 focus:outline-none text-left h-20 md:h-24 py-1.5"
    >
      {/* Left Panel: Course details */}
      <div 
        className="flex-1 px-2.5 md:px-3 flex flex-col justify-start gap-1 md:gap-1.5 relative z-10 bg-transparent min-w-0"
        style={{ paddingRight: video ? '38%' : '32%' }}
      >
        {/* Top section: Category, Icon, Status & Duration Badges */}
        <div className="flex items-center gap-1 flex-wrap">
          <div 
            className="program-icon-wrapper flex h-4.5 w-4.5 flex-shrink-0 items-center justify-center rounded text-[8.5px]"
            style={{ 
              backgroundColor: `${accentColor}15`, 
              color: accentColor, 
              boxShadow: `0 0 0 1px ${accentColor}15`
            }}
          >
            {icon}
          </div>

          <span className="pill-info font-mono shrink-0 text-[6px] py-0.5 px-1 leading-none">
            {duration}
          </span>

          {badgeText && (
            <span className="bg-red-500/10 text-red-600 border border-red-500/20 text-[6px] font-black uppercase tracking-widest px-1 py-0.5 rounded leading-none">
              {badgeText}
            </span>
          )}
        </div>

        {/* Title */}
        <h4 className="text-[9px] md:text-[10px] font-black text-slate-900 leading-none uppercase tracking-wide truncate">
          {name}
        </h4>

        {/* Bottom Section: Tools & Skills (clamped to 1 line for maximum compactness) */}
        <div className="min-w-0">
          <span className="block text-[6px] font-bold text-slate-400 uppercase tracking-widest font-mono leading-none mb-0.5">Tools & Skills</span>
          <span className="block text-[7.5px] md:text-[8px] font-bold text-slate-500 leading-tight font-poppins whitespace-nowrap overflow-hidden text-ellipsis">
            {tools}
          </span>
        </div>
      </div>

      {/* Right Panel: Video cover */}
      {video ? (
        <div 
          className="program-card-media absolute right-0 top-0 bottom-0 w-[35%] h-full overflow-hidden bg-black flex items-center justify-center z-10"
        >
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Glow and light effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      ) : (
        /* Right Panel: Avatar/Image cover (when no video) */
        <div 
          className="program-card-media absolute right-0 top-0 bottom-0 w-[30%] h-full overflow-hidden flex items-center justify-center z-10"
          style={{
            background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}dd 100%)`,
          }}
        >
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          {image && (
            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/80 bg-white/10 backdrop-blur-sm shadow-md flex items-center justify-center relative z-10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <img 
                src={image} 
                alt={name} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      )}
    </button>
  );
};