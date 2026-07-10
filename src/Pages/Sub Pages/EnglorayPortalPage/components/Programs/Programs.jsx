import React from 'react';
import {
  FaPalette, FaJava, FaLaptopCode, FaPaintBrush, FaBullhorn,
  FaHandshake, FaChalkboardTeacher, FaBriefcase
} from 'react-icons/fa';
import { ProgramCard } from './ProgramCard';

// Import background videos for courses
import digitalMarketingVideo from '../../assets/testimonials/Digital marketing .mp4';
import drawingVideo from '../../assets/testimonials/Drawing .mp4';
import graphicDesignVideo from '../../assets/testimonials/Graphic design .mp4';
import fullStackJavaVideo from '../../assets/testimonials/Full stack java.mp4';
import uiUxDesignVideo from '../../assets/testimonials/UI-UX design .mp4';

// Import background videos for internships
import uiUxDesignerVideo from '../../assets/testimonials/UI-UX designer.mp4';
import trainingMentorVideo from '../../assets/testimonials/Training mentor .mp4';
import salesExecutiveVideo from '../../assets/testimonials/Sales exctive.mp4';
import softwareDeveloperVideo from '../../assets/testimonials/Software developer.mp4';
import businessDeveloperVideo from '../../assets/testimonials/business developer.mp4';
import graphicDesignerVideo from '../../assets/testimonials/Graphic desiner .mp4';
import webDeveloperVideo from '../../assets/testimonials/Web developer .mp4';

const courses = [
  {
    name: "Graphic Designing",
    icon: <FaPalette />,
    color: "#a855f7",
    image: "/images/testimonials/cartoon_female_1.png",
    video: graphicDesignVideo,
    duration: "6 Weeks",
    badge: "Popular",
    tools: "Photoshop, Illustrator, Canva"
  },
  {
    name: "Full Stack Java",
    icon: <FaJava />,
    color: "#0ea5e9",
    image: "/images/testimonials/cartoon_male_1.png",
    video: fullStackJavaVideo,
    duration: "12 Weeks",
    badge: "Best Seller",
    tools: "Java SE/EE, Spring Boot, MySQL"
  },
  {
    name: "UI/UX Design",
    icon: <FaLaptopCode />,
    color: "#ec4899",
    image: "/images/testimonials/cartoon_female_2.png",
    video: uiUxDesignVideo,
    duration: "8 Weeks",
    badge: "Hot",
    tools: "Figma, User Flows, Prototyping"
  },
  {
    name: "Drawing",
    icon: <FaPaintBrush />,
    color: "#fbbf24",
    image: "/images/testimonials/cartoon_male_2.png",
    video: drawingVideo,
    duration: "4 Weeks",
    badge: "Creative",
    tools: "Sketching, Anatomy, Color Theory"
  },
  {
    name: "Digital Marketing",
    icon: <FaBullhorn />,
    color: "#10b981",
    image: "/images/testimonials/cartoon_female_3.png",
    video: digitalMarketingVideo,
    duration: "6 Weeks",
    badge: "Trending",
    tools: "SEO, Google Analytics, Ads"
  }
];

const internships = [
  {
    name: "Graphic Designing",
    icon: <FaPalette />,
    color: "#a855f7",
    image: "/images/testimonials/female_avatar.png",
    video: graphicDesignerVideo,
    duration: "3 Months",
    badge: "Paid",
    tools: "Brand Design, Vector, Mockups"
  },
  {
    name: "Website Development",
    icon: <FaLaptopCode />,
    color: "#1d4ed8",
    image: "/images/testimonials/male_avatar.png",
    video: webDeveloperVideo,
    duration: "3 Months",
    badge: "Paid",
    tools: "HTML5, CSS3, React.js, Git"
  },
  {
    name: "UI/UX Research",
    icon: <FaLaptopCode />,
    color: "#ec4899",
    image: "/images/testimonials/cartoon_female_1.png",
    video: uiUxDesignerVideo,
    duration: "3 Months",
    badge: "Paid",
    tools: "A/B Testing, User Personas, Figma"
  },
  {
    name: "Software Development",
    icon: <FaLaptopCode />,
    color: "#0ea5e9",
    image: "/images/testimonials/cartoon_male_3.png",
    video: softwareDeveloperVideo,
    duration: "3 Months",
    badge: "Paid",
    tools: "RESTful APIs, SQL, Data Structures"
  },
  {
    name: "Sales Executive",
    icon: <FaHandshake />,
    color: "#fbbf24",
    image: "/images/testimonials/cartoon_female_2.png",
    video: salesExecutiveVideo,
    duration: "2 Months",
    badge: "Paid",
    tools: "CRM Software, Cold Pitch, Lead Gen"
  },
  {
    name: "Training Mentor",
    icon: <FaChalkboardTeacher />,
    color: "#10b981",
    image: "/images/testimonials/cartoon_male_1.png",
    video: trainingMentorVideo,
    duration: "3 Months",
    badge: "Paid",
    tools: "Agile, Slack, QA Code Review"
  },
  {
    name: "Business Development",
    icon: <FaBriefcase />,
    color: "#e30613",
    image: "/images/testimonials/cartoon_female_3.png",
    video: businessDeveloperVideo,
    duration: "2 Months",
    badge: "Paid",
    tools: "Salesforce, Market Research, B2B"
  }
];

export const Programs = ({ onOpenApply }) => {
  return (
    <section className="py-5 section-alt border-b border-gray-100" id="courses">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Courses Carousel - Left to Right */}
        <div className="mb-6">
          <div className="text-center mb-6 section-heading-glow">
            <span className="badge-purple mb-3" style={{ display: 'inline-flex' }}>Our Curriculum</span>
            <h3 className="text-2xl md:text-3xl font-extrabold relative z-10" style={{ color: '#1F2937', letterSpacing: '-0.02em' }}>
              Featured <span style={{ background: 'linear-gradient(135deg,#6C4CF1,#4F46E5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Courses</span>
            </h3>
            <p className="mt-2 text-sm text-gray-500 max-w-lg mx-auto leading-relaxed relative z-10">
              Learn the core skills that power our internship tracks with expert-led training.
            </p>
          </div>
          <div className="marquee overflow-hidden rounded-2xl border p-4" style={{ border: '1px solid #ECEEF5', background: '#FFFFFF', boxShadow: '0 2px 16px rgba(108,76,241,0.04)' }}>
            <div className="marquee-track marquee-left flex gap-3 md:gap-4.5">
              {courses.concat(courses).map((course, idx) => (
                <div key={idx} className="min-w-[190px] md:min-w-[230px] flex-shrink-0">
                  <ProgramCard
                    name={course.name}
                    icon={course.icon}
                    image={course.image}
                    video={course.video}
                    type="Professional Course"
                    accentColor={course.color}
                    duration={course.duration}
                    badgeText={course.badge}
                    tools={course.tools}
                    onClick={onOpenApply}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Internships Carousel - Right to Left */}
        <div>
          <div className="text-center mb-6 section-heading-glow">
            <span className="badge-lime mb-3" style={{ display: 'inline-flex' }}>Internship Roles</span>
            <h3 className="text-2xl md:text-3xl font-extrabold relative z-10" style={{ color: '#1F2937', letterSpacing: '-0.02em' }}>
              Available <span style={{ background: 'linear-gradient(135deg,#84CC16,#65a30d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Internships</span>
            </h3>
            <p className="mt-2 text-sm text-gray-500 max-w-lg mx-auto leading-relaxed relative z-10">
              Apply your skills with role-based internships that mirror real industry workflows.
            </p>
          </div>
          <div className="marquee overflow-hidden rounded-2xl border p-4" style={{ border: '1px solid #ECEEF5', background: '#FFFFFF', boxShadow: '0 2px 16px rgba(108,76,241,0.04)' }}>
            <div className="marquee-track marquee-right flex gap-3 md:gap-4.5">
              {internships.concat(internships).map((internship, idx) => (
                <div key={idx} className="min-w-[190px] md:min-w-[230px] flex-shrink-0">
                  <ProgramCard
                    name={internship.name}
                    icon={internship.icon}
                    image={internship.image}
                    video={internship.video}
                    type="Industry Internship Role"
                    accentColor={internship.color}
                    duration={internship.duration}
                    badgeText={internship.badge}
                    tools={internship.tools}
                    onClick={onOpenApply}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Programs;