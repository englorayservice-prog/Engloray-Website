import React, { useState, useEffect, useRef } from 'react';
import './StudentTestimonials.css';
import clipImg from '../../../assets/image7.png';

const StudentTestimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const scrollContainerRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Priya S",
      role: "Graphic Designer",
      course: "Graphic Design",
      rating: 5,
      text: "The hands-on projects and real-world scenarios prepared me perfectly for my current role. I went from beginner to job-ready in just 6 months!",
      avatar: "👩‍💻",
      company: "Freelance Designer",
      outcome: "Hired at MNC immediately",
      duration: "6 months",
      skills: ["Logo Design", "Color Theory", "Typography"]
    },
    {
      id: 2,
      name: "Vignesh R",
      role: "Graphic Designer",
      course: "Graphic Design",
      rating: 5,
      text: "The curriculum was exactly what the industry needs. The projects were challenging but incredibly rewarding. Landed my dream job right after completion.",
      avatar: "👨‍🔬",
      company: "Digital Creative Engineer",
      outcome: "Promoted to Lead Creative Engineer",
      duration: "8 months",
      skills: ["Poster Design", "social media creatives"]
    },
    {
      id: 3,
      name: "Sneha K",
      role: "UI/UX Designer",
      course: "Ui/Ux Design",
      rating: 5,
      text: "The mentorship and portfolio building opportunities were exceptional. I built a strong portfolio that impressed every employer I interviewed with.",
      avatar: "👩‍🎨",
      company: "UI Designer",
      outcome: "Freelance to Full-time",
      duration: "4 months",
      skills: ["User FLow", "Prototyping"]
    },
    {
      id: 4,
      name: "Manoj R",
      role: "UI/UX Designer",
      course: "Ui/Ux Design",
      rating: 5,
      text: "The practical approach to learning complex UI tools made all the difference. I was implementing real solutions from day one on the job.",
      avatar: "👨‍💼",
      company: "UX Intern",
      outcome: "Career Switch Success",
      duration: "4 months",
      skills: ["UX Research", "WireFrames"]
    },
    {
      id: 5,
      name: "Keerthana M",
      role: " UI/UX Designer",
      course: "Ui/Ux + Graphic Designer",
      rating: 5,
      text: "The project-based learning approach helped me build real designs that I could showcase to employers. Got multiple job offers upon completion!",
      avatar: "👩‍💻",
      company: "UI Designer",
      outcome: "3 Job Offers",
      duration: "10 months",
      skills: ["Visual Design", "Figma"]
    },
    {
      id: 6,
      name: "Ashok K",
      role: "Designer",
      course: "Graphic Design + Ui/Ux",
      rating: 5,
      text: "The hands-on labs and real-world security scenarios gave me the confidence to handle complex security challenges in my current role.",
      avatar: "👨‍💻",
      company: "Creative Designer",
      outcome: "Certification + Job Offer",
      duration: "10 months",
      skills: ["Branding", "Ui Design"]
    },
    {
      id: 7,
      name: "Santhiya R",
      role: "Designer",
      course: "Graphic Design + Ui/Ux",
      rating: 5,
      text: "The hands-on labs and real-world security scenarios gave me the confidence to handle complex security challenges in my current role.",
      avatar: "👨‍💻",
      company: "Creative Designer",
      outcome: "Certification + Job Offer",
      duration: "10 months",
      skills: ["Branding", "Ui Design"]
    },
    {
      id: 8,
      name: "Kowsalya R",
      role: "Designer",
      course: "Graphic Design + Ui/Ux",
      rating: 5,
      text: "The hands-on labs and real-world security scenarios gave me the confidence to handle complex security challenges in my current role.",
      avatar: "👨‍💻",
      company: "Creative Designer",
      outcome: "Certification + Job Offer",
      duration: "10 months",
      skills: ["Branding", "Ui Design"]
    }
  ];

  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.student-testimonials-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationFrame;
    let scrollSpeed = 2; // pixels per frame
    let lastTimestamp = 0;

    const scroll = (timestamp) => {
      if (!scrollContainer) return;

      // Smooth scrolling with time delta
      if (lastTimestamp !== 0) {
        const delta = timestamp - lastTimestamp;
        const scrollAmount = (scrollSpeed * delta) / 16; // Normalize to ~60fps

        scrollContainer.scrollLeft += scrollAmount;

        // Reset scroll position when reaching the end of first set
        if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth / 3) * 2) {
          scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;
        }
        // Reset scroll position when reaching the beginning
        else if (scrollContainer.scrollLeft <= 0) {
          scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;
        }
      }

      lastTimestamp = timestamp;
      animationFrame = requestAnimationFrame(scroll);
    };

    // Start infinite scroll
    animationFrame = requestAnimationFrame(scroll);

    // Pause scroll on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationFrame);
    };

    const handleMouseLeave = () => {
      lastTimestamp = 0;
      animationFrame = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const handleCardHover = (cardId) => {
    setActiveCard(cardId);
  };

  const handleCardLeave = () => {
    setActiveCard(null);
  };

  return (
    <section className="student-testimonials-section" id='feedback'>
      <div className="student-container">
        {/* Section Header */}
        <div className="student-section-header">
          <div className="student-badge" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Student Success Stories
          </div>
          <h2 className="student-section-title" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: '600' }}>
            Transformative <span className="student-highlight" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: '600' }}>Learning</span> Experiences
          </h2>
          <p className="student-section-description" style={{ fontFamily: "'Poppins', sans-serif" }}>
            ENGLORAY is trusted by clients, valued by customers, empowering students, and supported by a strong team
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="student-horizontal-scroll" ref={scrollContainerRef}>
          <div className="student-testimonials-track">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className={`student-testimonial-card ${isVisible ? 'student-visible' : ''
                  } ${activeCard === testimonial.id ? 'student-card-active' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => handleCardHover(testimonial.id)}
                onMouseLeave={handleCardLeave}
              >
                {/* Clip PNG */}
                <img src={clipImg} alt="clip" className="student-card-clip" />

                {/* Animated Background Elements */}
                <div className="student-card-bg-animation"></div>
                <div className="student-card-floating-elements">
                  <div className="student-floating-circle student-circle-1"></div>
                  <div className="student-floating-circle student-circle-2"></div>
                  <div className="student-floating-circle student-circle-3"></div>
                </div>

                {/* Card Header */}
                <div className="student-card-header">
                  <div className="student-avatar-badge">
                    <div className="student-avatar">
                      {testimonial.avatar}
                    </div>
                    <div className="student-verified">
                      <i className="fas fa-check-circle"></i> Verified Graduate
                    </div>
                  </div>
                  <div className="student-basic-info">
                    <h3 className="student-name">{testimonial.name}</h3>
                    <p className="student-role">{testimonial.role}</p>
                    <p className="student-company">{testimonial.company}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="student-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="student-star">⭐</span>
                  ))}
                  <span className="student-rating-text">Excellent</span>
                </div>

                {/* Testimonial Text */}
                <blockquote className="student-testimonial-text">
                  "{testimonial.text}"
                </blockquote>

                {/* Course Info */}
                <div className="student-course-info">
                  <div className="student-course-badge">
                    <i className="fas fa-book"></i>
                    {testimonial.course}
                  </div>
                  <div className="student-duration">
                    <i className="fas fa-clock"></i>
                    {testimonial.duration}
                  </div>
                </div>

                {/* Skills Learned */}
                <div className="student-skills">
                  <div className="student-skills-label">Skills Mastered:</div>
                  <div className="student-skills-list">
                    {testimonial.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="student-skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Success Outcome */}
                <div className="student-outcome">
                  <div className="student-outcome-badge">
                    <i className="fas fa-trophy"></i>
                    {testimonial.outcome}
                  </div>
                </div>

                {/* Hover Effect Layer */}
                <div className="student-card-hover"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials;