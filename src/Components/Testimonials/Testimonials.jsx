import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Testimonials.css';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const testimonials = [
    {
      id: 1,
      name: "Amico Food Products",
      role: "Branding & Designing Client.",
      feedback: "ENGLORAY transformed our product packaging into a professional, market-ready design. The labels improved shelf visibility and customer confidence. It improves our product Quality",
      type: "client",
      rating: 5
    },
    {
      id: 2,
      name: "Arun Kumar",
      role: "Graphic Designer Student",
      feedback: "Learning graphic design from scratch at ENGLORAY helped me start my design career confidently. To Build a better Career ENGLORAY is a visionary",
      type: "student",
      rating: 5
    },
    {
      id: 3,
      name: "Divya Makeovers",
      role: "Website & Ui/Ux Client",
      feedback: "Our website looks elegant and professional. ENGLORAY understood our brand clearly and helped us get more customer inquiries. Through the elegance change we are attaining more customers",
      type: "client",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array(rating).fill(0).map((_, i) => (
      <FontAwesomeIcon key={i} icon={faStar} />
    ));
    // return "★".repeat(rating) + "☆".repeat(5 - rating); 
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const cards = cardsRef.current;

      if (!section) return;

      // Initial State: All cards except the first one are hidden/pushed down
      gsap.set(cards, {
        y: 100,
        opacity: 0,
        scale: 0.9,
        // Since we are grid-based now, we don't want them stacked on top (absolute).
        // They are relatively positioned in a grid.
        // We set initial state for animation.
      });

      // Pin the section while cards animate in sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=200%", // Shortened scroll distance
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      });

      // Animate cards in
      cards.forEach((card, index) => {
        tl.to(card, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out"
        }, index * 0.5); // Staggered appearance
      });
    }, sectionRef); // Scope to sectionRef

    return () => ctx.revert(); // Cleanup GSAP context and DOM changes (pin spacers)
  }, []);

  return (
    <section ref={sectionRef} id="Testimonials" className="testimonials-section">
      <div className="testimonials-sticky-container">
        <div className="testimonials-header">
          <h2>What Our Clients & Students Say</h2>
          <p>ENGLORAY is trusted by clients, valued by customers, empowering students, and supported by a strong team</p>
        </div>

        <div className="testimonials-stack-container">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={el => cardsRef.current[index] = el}
              className={`testimonial-card ${testimonial.type}`}
              style={{ zIndex: index + 1 }}
            >
              <div className="testimonial-content">
                <p>"{testimonial.feedback}"</p>
              </div>
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <span>{testimonial.role}</span>
                <div className={`testimonial-badge ${testimonial.type}`}>
                  {testimonial.type === 'client' ? 'Client' : 'Student'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;