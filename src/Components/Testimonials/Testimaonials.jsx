import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
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
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <section id="Testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 style={{color: 'red'}}>What Our Clients & Students Say</h2>
          <p>ENGLORAY is trusted by clients, valued by customers, empowering students, and supported by a strong team</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={`testimonial-card ${testimonial.type}`}>
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