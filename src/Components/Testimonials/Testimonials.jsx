import React from 'react';
import './Testimonials.css';

// Import local avatars
import avatar1 from '../../assets/logos/amico-Photoroom.png';
import avatar3 from '../../assets/logos/studio makeup-Photoroom.png';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Amico Food Products",
      role: "",
      feedback: "ENGLORAY transformed our product packaging into a professional, market-ready design. The labels improved shelf visibility and customer confidence. It improves our product Quality",
      avatar: avatar1
    },
    {
      id: 2,
      name: "Arun Kumar",
      role: "",
      feedback: "Learning graphic design from scratch at ENGLORAY helped me start my design career with confidence and practical skills. Their guidance, real-world projects, and supportive environment made learning inspiring and career-focused.",
      avatar: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      id: 3,
      name: "Divya Makeovers",
      role: "",
      feedback: "Our website looks elegant and professional. ENGLORAY understood our brand clearly and helped us get more customer inquiries. Through the elegance change we are attaining more customers,ENGLORAY a truly visionary place to build.",
      avatar: avatar3
    },
    {
      id: 4,
      name: "Sarah Johnson",
      role: "",
      feedback: "The team at ENGLORAY exceeded my expectations with their creative direction and attention to detail. My brand has never looked better and the response from customers has been overwhelmingly positive.",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg"
    }
  ];

  // Duplicate testimonials for infinite scroll effect
  const allTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="Testimonials" className="testimonials-section">
      <div className="testimonials-container">
        {/* Left Side - Content */}
        <div className="testimonials-left">
          <h2 className="testimonials-title">What Our clients<br /> & students Says</h2>
          <p className="testimonials-description">
            Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieux nature day course for common.
          </p>
          {/* <button className="testimonials-button">View More</button> */}
        </div>

        {/* Right Side - Cards Stack with Infinite Scroll */}
        <div className="testimonials-right">
          <div className="testimonials-scroll-container">
            <div className="testimonials-scroll-track">
              {allTestimonials.map((testimonial, index) => {
                const originalIndex = index % 4;
                return (
                  <div
                    key={`${testimonial.id}-${index}`}
                    className={`testimonial-card ${originalIndex === 1 || originalIndex === 3 ? 'card-second' : ''
                      }`}
                  >
                    <div className="testimonial-icon">"</div>
                    <div className="testimonial-card-content">
                      <div
                        className={`testimonial-avatar ${originalIndex === 0 || originalIndex === 2 ? 'avatar-transparent' : ''
                          }`}
                      >
                        <img src={testimonial.avatar} alt={testimonial.name} />
                      </div>
                      <div className="testimonial-text">
                        <div className="testimonial-author">
                          <h4>{testimonial.name}</h4>
                          {testimonial.role && <span>{testimonial.role}</span>}
                        </div>
                        <div className="testimonial-feedback">
                          <p>{testimonial.feedback}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;