import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaJava, FaLaptopCode, FaPalette, FaBullhorn, FaPaintBrush } from 'react-icons/fa';
import { MentorCard } from './MentorCard';

import mentor1 from '../../assets/Mentors/Mentor 1.webp';
import mentor2 from '../../assets/Mentors/mentor 2.webp';
import mentor3 from '../../assets/Mentors/Mentor 3.webp';
import mentor4 from '../../assets/Mentors/mentor 4.webp';
import mentor5 from '../../assets/Mentors/mentor 5.jpg';
import mentor6 from '../../assets/Mentors/mentor 6.jpg';
import mentor7 from '../../assets/Mentors/mentor 7.jpg';

const mentorsData = [
  {
    name: "Dr. Priya Subramaniam",
    domain: "Full Stack Java",
    image: mentor1,
    desc: "Former Senior Architect at Zoho. Loves explaining complex microservice architectures with simple, interactive diagrams.",
    icon: <FaJava />,
    color: "#0ea5e9"
  },
  {
    name: "Aravind Krishnan",
    domain: "UI/UX Design",
    image: mentor3,
    desc: "Lead UI Designer with 10+ years of product design experience at Freshworks. Passionate about user-centric responsive design journeys.",
    icon: <FaLaptopCode />,
    color: "#0ea5e9"
  },
  {
    name: "Kavitha Rajan",
    domain: "Graphic Designing",
    image: mentor4,
    desc: "Award-winning brand designer. Believes visual storytelling is the soul of brand identity and digital presence.",
    icon: <FaPalette />,
    color: "#0ea5e9"
  },
  {
    name: "Sathish Kumar",
    domain: "Digital Marketing",
    image: mentor7,
    desc: "Growth Hacker who scaled Tamil Nadu startups to multi-crore revenue. Expert in paid advertising, SEO strategy, and funnel optimization.",
    icon: <FaBullhorn />,
    color: "#0ea5e9"
  },
  {
    name: "Prof. Murugesan",
    domain: "Drawing",
    image: mentor2,
    desc: "Fine Arts faculty from Madurai with a passion for digital drawing, landscape perspective, and high-fidelity anatomical sketches.",
    icon: <FaPaintBrush />,
    color: "#0ea5e9"
  },
  {
    name: "Karthik Rajan",
    domain: "Full Stack Java",
    image: mentor6,
    desc: "Enterprise developer specializing in Spring Framework, high-performance database designs, and secure microservices at Infosys.",
    icon: <FaJava />,
    color: "#0ea5e9"
  },
  {
    name: "Deepa Selvam",
    domain: "UI/UX Design",
    image: mentor5,
    desc: "Figma Master who believes good UX is invisible. Passionate about responsive UI assets and clean interfaces.",
    icon: <FaLaptopCode />,
    color: "#0ea5e9"
  }
];

export const Mentors = () => {
  const doubleData = [...mentorsData, ...mentorsData];

  return (
    <section className="py-5 bg-white border-b border-gray-100 overflow-hidden" id="mentors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">

        <div className="text-center mb-6 sm:mb-10 section-heading-glow">
          <span className="badge-purple mb-2" style={{ display: 'inline-flex' }}>
            INSTRUCTORS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 relative z-10" style={{ color: '#1F2937', letterSpacing: '-0.02em' }}>Meet Our <span className="gradient-text-purple">Mentors</span></h2>
          <p className="text-gray-600 max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed relative z-10">
            Gain direct tech industry blueprints from software engineers, architects, and product leads.
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative w-full">
          <div 
            className="relative w-full overflow-hidden py-4"
            style={{
              maskImage: 'linear-gradient(to right, transparent, white 15%, white 85%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, white 15%, white 85%, transparent)'
            }}
          >
            <div className="flex gap-3 sm:gap-4 md:gap-6 w-max animate-scroll-loop hover:[animation-play-state:paused]">
              {doubleData.map((mentor, idx) => (
                <motion.div
                  key={`${mentor.name}-${idx}`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.3, delay: (idx % 4) * 0.06 }}
                >
                  <MentorCard
                    name={mentor.name}
                    domain={mentor.domain}
                    image={mentor.image}
                    desc={mentor.desc}
                    icon={mentor.icon}
                    color={mentor.color}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Mentors;