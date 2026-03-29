import React from 'react';
import './Testimonials.css';

// Import local avatars
import avatar1 from '../../assets/logos/amico-Photoroom.png';
import avatar3 from '../../assets/logos/studio makeup-Photoroom.png';
import logoWooden from '../../assets/logos/wooden street-Photoroom.png';
import logoTamil from '../../assets/logos/tamil natrals-Photoroom.png';
import logoMaax from '../../assets/logos/maax life-Photoroom.png';
import logoNestoria from '../../assets/logos/nestoria-Photoroom.png';

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
    },
    {
      id: 5,
      name: "Wooden Street",
      role: "",
      feedback: "The custom UI layout improved our sales conversion rate significantly and the branding was top notch! Highly recommend the team.",
      avatar: logoWooden
    },
    {
      id: 6,
      name: "Tamil Naturals",
      role: "",
      feedback: "Very clean, natural, and organic look provided by the ENGLORAY team. Extremely satisfied with the modern design approach.",
      avatar: logoTamil
    },
    {
      id: 7,
      name: "Maax Life Fitness",
      role: "",
      feedback: "Our core fitness app has been highly appreciated by our users. Superb mobile app development team delivering reliable performance.",
      avatar: logoMaax
    },
    {
      id: 8,
      name: "Nestoria Architecture",
      role: "",
      feedback: "The architectural portfolio site built for us stands out from the competition. Exactly what we were looking for to capture our aesthetic.",
      avatar: logoNestoria
    }
  ];

  // Duplicate testimonials EXACTLY ONCE for perfectly seamless infinite scroll math
  const allTestimonials = [...testimonials, ...testimonials];

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
                const isEven = index % 2 === 0;
                const isOdd = index % 2 === 1;
                return (
                  <div
                    key={`${testimonial.id}-${index}`}
                    className={`testimonial-card ${isOdd ? 'card-second' : ''
                      }`}
                  >
                    <div className="testimonial-icon">"</div>
                    <div className="testimonial-card-content">
                      <div
                        className={`testimonial-avatar ${isEven ? 'avatar-transparent' : ''
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