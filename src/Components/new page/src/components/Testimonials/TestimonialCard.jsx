import React from 'react';
import { FaStar, FaQuoteRight } from 'react-icons/fa';


export const TestimonialCard = ({
  name,
  role,
  text,
  outcome,
  avatar
}) => {
  return (
    <div 
      className="flex-shrink-0 w-[245px] md:w-[270px] p-4 rounded-xl bg-white border border-gray-100 shadow-sm flex flex-col gap-3 text-left transition-all duration-300 hover:border-brand-purple/20 hover:shadow-md" style={{ transition: 'all 0.25s ease' }}
    >
      <div className="flex justify-between items-start w-full">
        <div className="flex items-center gap-3">
          <img 
            src={avatar} 
            alt={name} 
            loading="lazy"
            className="w-10 h-10 rounded-full object-cover border border-gray-100" 
          />
          <div className="flex flex-col">
            <h4 className="text-sm font-bold text-brand-navy leading-tight">{name}</h4>
            <span className="text-[10px] font-semibold" style={{ color: '#6C4CF1' }}>{role}</span>
          </div>
        </div>
        <span className="text-lg" style={{ color: 'rgba(108,76,241,0.2)' }}>
          <FaQuoteRight />
        </span>
      </div>
      <p className="text-xs text-gray-600 leading-relaxed font-body italic">
        "{text}"
      </p>
      <div className="inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md mt-1 font-mono self-start">
        {outcome}
      </div>
    </div>
  );
};
