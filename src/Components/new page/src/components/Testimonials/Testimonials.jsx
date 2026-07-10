import React from 'react';
import { TestimonialCard } from './TestimonialCard';

import std1 from '../../assets/Feed back std/Std 1.avif';
import std2 from '../../assets/Feed back std/Std 2.jpg';
import std3 from '../../assets/Feed back std/Std 3.jpg';
import std4 from '../../assets/Feed back std/Std 4.jpg';
import std5 from '../../assets/Feed back std/Std 5.jpg';
import std6 from '../../assets/Feed back std/Std 6.jpg';

const testimonialsData = [
  {
    name: "Aman Sharma",
    role: "Java Backend Engineer",
    text: "Engloray transformed my career! The Full Stack Java course is extremely comprehensive. I landed a backend role within 2 weeks of finishing!",
    outcome: "Hired at Zoho • 8.5 LPA",
    avatar: std2
  },
  {
    name: "Priya Patel",
    role: "Product Designer",
    text: "The UI/UX Design track is amazing. Practicing layout design in Figma and getting feedback from Marcus helped me build a premium portfolio.",
    outcome: "Interned at Freshworks",
    avatar: std3
  },
  {
    name: "Karan Malhotra",
    role: "Frontend Developer",
    text: "Staggered interactive internships gave me real hands-on experience. Software Development internship stipend was a great plus!",
    outcome: "Placed at TCS • 6.5 LPA",
    avatar: std4
  },
  {
    name: "Sneha Reddy",
    role: "Brand Strategist",
    text: "Highly recommend the Graphic Designing course. Mentors are patient and explain complex color theories clearly. I loved drawing again!",
    outcome: "Placed at Soliton • 5.5 LPA",
    avatar: std1
  },
  {
    name: "Kabir Verma",
    role: "Growth Marketer",
    text: "Digital Marketing strategies learned here helped me double my startup's traffic. Instructors are true industry experts.",
    outcome: "Hired at LatentView • 6.0 LPA",
    avatar: std5
  },
  {
    name: "Nithin Rao",
    role: "Software Engineer",
    text: "The mentor reviews and mock interviews were the key to my placement. The support community is incredibly active!",
    outcome: "Placed at Hexaware • 5.8 LPA",
    avatar: std6
  }
];

export const Testimonials = () => {
  const doubleData = [...testimonialsData, ...testimonialsData];

  return (
    <section className="pt-1 pb-4 bg-white border-b border-gray-100" id="testimonials">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="text-center mb-3 section-heading-glow">
          <span className="badge-purple mb-3" style={{ display: 'inline-flex' }}>REVIEWS</span>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 relative z-10" style={{ color: '#1F2937', letterSpacing: '-0.02em' }}>What Our Students <span className="gradient-text-purple">Say</span></h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base leading-relaxed relative z-10">
            Read certified reviews from verified cohort graduates who successfully transitioned to tech teams.
          </p>
        </div>

        {/* Marquee Container */}
        <div 
          className="relative w-full overflow-hidden py-4"
          style={{
            maskImage: 'linear-gradient(to right, transparent, white 15%, white 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, white 15%, white 85%, transparent)'
          }}
        >
          <div className="flex gap-6 w-max animate-scroll-loop hover:[animation-play-state:paused]">
            {doubleData.map((test, idx) => (
              <TestimonialCard 
                key={`${test.name}-${idx}`}
                name={test.name}
                role={test.role}
                text={test.text}
                outcome={test.outcome}
                avatar={test.avatar}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
