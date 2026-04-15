import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Testimonials.css';

// ... (rest of imports unchanged) ...
// Import unique business logos and student avatars
import logoAmico from '../../assets/logos/amico-Photoroom.png';
import logoThulasi from '../../assets/logos/thulasi-Photoroom.png';
import logoWooden from '../../assets/logos/wooden street-Photoroom.png';
import logoTamil from '../../assets/logos/tamil natrals-Photoroom.png';
import logoMaax from '../../assets/logos/maax life-Photoroom.png';
import logoNestoria from '../../assets/logos/nestoria-Photoroom.png';
import logoPavizham from '../../assets/logos/Pavizham-Photoroom.png';
import logoBrandex from '../../assets/logos/brandex-Photoroom.png';
import logoMalar from '../../assets/logos/malar-Photoroom.png';
import logoAara from '../../assets/logos/aara-Photoroom.png';
import logoManjari from '../../assets/logos/manjari-Photoroom.png';
import logoEcec from '../../assets/logos/ecec logo.png';

// Import unique student/client avatars
// Import unique student/client avatars with correct gender alignment
import avatarFemale1 from '../../assets/rev_avatar_1.jfif';
import avatarFemale2 from '../../assets/rev_avatar_2.jfif';
import avatarMale1 from '../../assets/rev_avatar_3.jfif';
import avatarMale2 from '../../assets/rev_avatar_4.jfif';
import avatarMale3 from '../../assets/testimonials/male_avatar.png';
import cartoonMale1 from '../../assets/testimonials/cartoon_male_1.png';
import cartoonFemale1 from '../../assets/testimonials/cartoon_female_1.png';
import cartoonMale2 from '../../assets/testimonials/cartoon_male_2.png';
import cartoonFemale2 from '../../assets/testimonials/cartoon_female_2.png';
import cartoonMale3 from '../../assets/testimonials/cartoon_male_3.png';
import cartoonFemale3 from '../../assets/testimonials/cartoon_female_3.png';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef(null);
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Animate title and description from bottom
      gsap.fromTo(".tmls-testimonials-title, .tmls-testimonials-description",
        {
          y: 80,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".tmls-testimonials-left",
            start: "top 85%",
            toggleActions: "restart none none restart"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const testimonials = [
// ... (rest of the array stays as is)
    {
      id: 1,
      name: "Amico Food Products",
      role: "Client",
      feedback: "ENGLORAY transformed our product packaging into a professional, market-ready design. Their work improved our shelf visibility and customer confidence significantly.",
      avatar: logoAmico
    },
    {
      id: 2,
      name: "Arun Kumar",
      role: "UI/UX Student",
      feedback: "The practical approach at ENGLORAY helped me bridge the gap between theory and industry standards. I landed my first design role weeks after completing the course.",
      avatar: cartoonMale1
    },
    {
      id: 3,
      name: "Thulasi Healthcare",
      role: "Client",
      feedback: "We needed a brand identity that conveyed trust and care. The team delivered a compassionate yet modern visual system that perfectly represents our values.",
      avatar: logoThulasi,
      imgScale: 1.8 // Zoomed in as requested
    },
    {
      id: 4,
      name: "Sarah Johnson",
      role: "Digital Marketing Client",
      feedback: "The creative direction provided by ENGLORAY breathed new life into our campaigns. Our ROI has seen a consistent upward trend since we started collaborating.",
      avatar: cartoonFemale1
    },
    {
      id: 5,
      name: "Wooden Street",
      role: "Client",
      feedback: "The custom UI layout improved our sales conversion rate significantly. Their attention to user flow and aesthetic detail is truly world-class.",
      avatar: logoWooden
    },
    {
      id: 6,
      name: "Tamil Naturals",
      role: "Client",
      feedback: "Very clean, natural, and organic look provided by the ENGLORAY team. They captured our commitment to sustainability in every pixel.",
      avatar: logoTamil,
      imgScale: 3
    },
    {
      id: 7,
      name: "Maax Life Fitness",
      role: "Client",
      feedback: "Our fitness community has grown thanks to the engaging app interface developed by ENGLORAY. The performance and reliability are top-notch.",
      avatar: logoMaax
    },
    {
      id: 8,
      name: "Nestoria Architecture",
      role: "Client",
      feedback: "The architectural portfolio site built for us stands out from the competition. It captures our design aesthetic with precision and elegance.",
      avatar: logoNestoria
    },
    {
      id: 9,
      name: "Pavizham Jewelry",
      role: "Client",
      feedback: "Capturing the heritage of traditional jewelry in a modern digital format was a challenge, but ENGLORAY delivered a masterpiece of branding.",
      avatar: logoPavizham,
      imgScale: 2.5 // Zoomed in as requested
    },
    {
      id: 10,
      name: "Ramesh Kumar",
      role: "Graphic Design Student",
      feedback: "The focus on real-world portfolio building is what makes ENGLORAY unique. I didn't just learn tools; I learned how to think like a professional designer.",
      avatar: cartoonMale2
    },
    {
      id: 11,
      name: "Brandex Agency",
      role: "Client",
      feedback: "Exceptional digital marketing assets. Their ability to translate complex data into engaging visual stories has given us a massive competitive edge.",
      avatar: logoBrandex
    },
    {
      id: 12,
      name: "Ananya Sharma",
      role: "Full Stack Student",
      feedback: "I learned more in 3 months here than I did in a year of self-study. The mentorship and hands-on projects are invaluable for any aspiring developer.",
      avatar: cartoonFemale2
    },
    // {
    //   id: 13,
    //   name: "Malar Florals",
    //   role: "Client",
    //   feedback: "Our floral boutique's online presence is now as beautiful as our arrangements. The new branding captures the elegance and fragrance of our brand.",
    //   avatar: logoMalar
    // },
    {
      id: 14,
      name: "Sanjay Gupta",
      role: "Business Solutions Client",
      feedback: "The ERP integration and dashboard design provided by the technical team have completely streamlined our operations. A truly transformative partnership.",
      avatar: avatarMale3
    },
    {
      id: 15,
      name: "Aara Fashion",
      role: "Client",
      feedback: "Minimalist, chic, and modern—the new fashion identity ENGLORAY created for us has successfully redefined our brand in the premium market space.",
      avatar: logoAara
    },
    {
      id: 16,
      name: "Manjari Florists",
      role: "Client",
      feedback: "Specialized, elegant, and timeless. The design work for our new catalog has exceeded all our expectations.",
      avatar: logoManjari
    },
    {
      id: 17,
      name: "ECEC Institution",
      role: "Client",
      feedback: "A premium educational portal that reflects our academic excellence. The UX for our students is seamless and engaging.",
      avatar: logoEcec
    },
    {
      id: 18,
      name: "Karthik Raja",
      role: "Motion Design Student",
      feedback: "From absolute beginner to creating high-end animations—this course changed my entire career trajectory. Best mentorship out there.",
      avatar: cartoonMale1
    },
    {
      id: 19,
      name: "Priya Das",
      role: "Content Creator",
      feedback: "They helped me build a personal brand that really resonates. My engagement rates have seen a 200% increase since the rebrand.",
      avatar: cartoonFemale3
    },
    {
      id: 20,
      name: "Gowtham Raja",
      role: "Motion Design Student",
      feedback: "The level of detail taught here is extraordinary. I've been able to work with international brands within months of finishing.",
      avatar: cartoonMale3
    }
  ];

  // Use 2 sets for perfect seamless looping
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="tmls-Testimonials" ref={sectionRef} className="tmls-testimonials-section">
      <div className="tmls-testimonials-container">
        {/* Left Side - Content */}
        <div className="tmls-testimonials-left">
          <h2 className="tmls-testimonials-title">What Our clients<br /> & students Says</h2>
          <p className="tmls-testimonials-description">
            Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieux nature day course for common.
          </p>
          {/* <button className="testimonials-button">View More</button> */}
        </div>

        {/* Right Side - Cards Stack with Infinite Scroll */}
        <div className="tmls-testimonials-right">
          <div className="tmls-testimonials-scroll-container">
            <div className="tmls-testimonials-scroll-track">
              {allTestimonials.map((testimonial, index) => {
                const isEven = index % 2 === 0;
                const isOdd = index % 2 === 1;
                return (
                  <div
                    key={`${testimonial.id}-${index}`}
                    className={`tmls-testimonial-card ${isOdd ? 'tmls-card-second' : ''
                      }`}
                  >
                    <div className="tmls-testimonial-icon">"</div>
                    <div className="tmls-testimonial-card-content">
                      <div
                        className={`tmls-testimonial-avatar ${testimonial.role === 'Client' ? 'tmls-avatar-client' : 'tmls-avatar-student'
                          }`}
                      >
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          style={testimonial.imgScale ? { transform: `scale(${testimonial.imgScale})` } : {}}
                        />
                      </div>
                      <div className="tmls-testimonial-text">
                        <div className="tmls-testimonial-author">
                          <h4>{testimonial.name}</h4>
                          {testimonial.role && <span>{testimonial.role}</span>}
                        </div>
                        <div className="tmls-testimonial-feedback">
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