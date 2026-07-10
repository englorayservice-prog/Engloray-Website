import React from 'react';
import { motion } from 'framer-motion';

export const MentorCard = ({
  name,
  domain,
  image,
  desc,
  icon,
  color
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="flex-shrink-0 w-[300px] sm:w-[340px] md:w-[380px] p-3 sm:p-4 rounded-2xl bg-white border border-gray-100 shadow-sm flex flex-row gap-3 sm:gap-4 scroll-snap-align-start transition-colors duration-300 hover:border-brand-sky/20 hover:bg-slate-50/50 hover:shadow-md"
    >
      <div className="relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full rounded-full object-cover border-2 border-gray-100 shadow-sm"
        />
        <span
          className="absolute bottom-0 right-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-white border-2 border-white text-[10px] sm:text-xs shadow-md"
          style={{ backgroundColor: color }}
        >
          {icon}
        </span>
      </div>
      <div className="flex flex-col gap-1 sm:gap-1.5 text-left flex-1 min-w-0">
        <h3 className="text-sm sm:text-base font-bold text-brand-navy leading-tight truncate">{name}</h3>
        <span
          className="inline-block text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border self-start"
          style={{ borderColor: `${color}40`, color: color }}
        >
          {domain}
        </span>
        <p className="text-[10px] sm:text-xs text-gray-600 leading-relaxed font-body line-clamp-2">
          {desc}
        </p>
      </div>
    </motion.div>
  );
};

export default MentorCard;