import React, { useState, useEffect, useRef } from 'react';
import { Laptop, Code2, Building2 } from 'lucide-react';
import './EnglorayPortalPage.css';

import TopNavbar from '../../../Components/TopNavbar/TopNavbar';
import NavigationBar from '../../TechLearningSection/NavigationBar/NavigationBar';
import SubFooterTwo from '../subFooterTwo/NewFooter';
import cartoonMale1 from '../../../assets/cartoon_male_1.png';
import cartoonMale2 from '../../../assets/cartoon_male_2.png';
import cartoonMale3 from '../../../assets/cartoon_male_3.png';
import cartoonMale4 from '../../../assets/cartoon_male_4.png';
import cartoonFemale1 from '../../../assets/cartoon_female_1.png';
import cartoonFemale2 from '../../../assets/cartoon_female_2.png';
import cartoonFemale3 from '../../../assets/cartoon_female_3.png';
import cartoonFemale4 from '../../../assets/cartoon_female_4.png';

// Import Backgrounds
import mentorBg from '../../../assets/dev_workshops.png';
import corporateBg from '../../../assets/corp_internships.png';
import eLearningBg from '../../../assets/ai_courses.png';
import softwareBg from '../../../assets/fullstack_sprints.png';
import expertiseBg from '../../../assets/uiux_design_labs.png';
import experienceBeyondClassroom from '../../../assets/experience_beyond_classroom.png';

// Import Program Assets
import programAiSprints from '../../../assets/program_ai_sprints.png';
import programSaasBuild from '../../../assets/program_saas_build.png';
import programUiuxDesign from '../../../assets/program_uiux_design.png';
import programCloudDevops from '../../../assets/program_cloud_devops.png';
import programMobileDev from '../../../assets/program_mobile_dev.png';
import programPlacementPrep from '../../../assets/program_placement_prep.png';

// Import Certificate Assets
import gdCertificate from '../../../assets/GD Certificate.jpeg';
import uiuxCertificate from '../../../assets/UI Certificate.jpeg';
import javaCertificate from '../../../assets/java certifcate.jpeg';

// Import Admission Portal Assets
import admissionPortal1Person from '../../../assets/images/applicationportal1person.png';
import admissionPortal2Person from '../../../assets/images/applicationportal2person.png';
import admissionPortal3Person from '../../../assets/images/applicationportal3personimage.png';

export default function EnglorayPortalPage() {

  // 1. Slideshow State (Hero background)
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(slideInterval);
  }, []);

  // 3. Dynamic Registration Closing Date
  const [closingDate, setClosingDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const daysUntilSaturday = dayOfWeek === 6 ? 7 : (6 - dayOfWeek + 7) % 7 || 7;
    const nextSaturday = new Date(today);
    nextSaturday.setDate(today.getDate() + daysUntilSaturday);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const getOrdinal = (d) => {
      if (d > 3 && d < 21) return 'th';
      switch (d % 10) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default: return "th";
      }
    };
    const day = nextSaturday.getDate();
    setClosingDate(`${months[nextSaturday.getMonth()]} ${day}${getOrdinal(day)} ${nextSaturday.getFullYear()}`);
  }, []);

  // 4. Sticky Apply Button State
  const [stickyVisible, setStickyVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const threshold = window.innerHeight;
        if (rect.bottom > 0 && rect.top < threshold) {
          setStickyVisible(false);
        } else {
          setStickyVisible(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToApply = () => {
    const el = document.getElementById('hero-section-apply');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // 5. Program Tabs & Carousel
  const [activeStatus, setActiveStatus] = useState('all');
  const uniTrackRef = useRef(null);

  const programCards = [
    { 
      name: "Generative AI & LLM Sprints", 
      category: "AI & Machine Learning", 
      status: "conducted", 
      badge: "Conducted", 
      venue: "SMR University, Hyderabad",
      desc: "Hands-on implementation of LLM agents, RAG pipelines, and automated chatbot integrations on cloud infrastructure.",
      img: programAiSprints 
    },
    { 
      name: "Full-Stack SaaS Buildathons", 
      category: "Full-Stack Dev", 
      status: "conducted", 
      badge: "Conducted", 
      venue: "GMRIT, Vizianagaram",
      desc: "Developing and launching production-ready multi-tenant SaaS products from database schema to live deployment.",
      img: programSaasBuild 
    },
    { 
      name: "UI/UX Design Sprints", 
      category: "UI/UX & Design", 
      status: "upcoming", 
      badge: "Upcoming", 
      venue: "Aurora University, Hyderabad",
      desc: "Intensive wireframing, high-fidelity prototypes, interactive user journeys, and component-driven design systems.",
      img: programUiuxDesign 
    },
    { 
      name: "Cloud & DevOps Sprints", 
      category: "Cloud & DevOps", 
      status: "conducted", 
      badge: "Conducted", 
      venue: "Yenepoya University, Mangalore",
      desc: "Setting up CI/CD automation, serverless APIs, Docker containers, and live scaling on AWS/GCP clusters.",
      img: programCloudDevops 
    },
    { 
      name: "Mobile App Development Labs", 
      category: "Mobile Dev", 
      status: "upcoming", 
      badge: "Upcoming", 
      venue: "Geeta University, Panipat",
      desc: "Building native cross-platform mobile apps with responsive layouts, push notifications, and local state management.",
      img: programMobileDev 
    },
    { 
      name: "Placement & DSA Bootcamp", 
      category: "Placement Prep", 
      status: "upcoming", 
      badge: "Upcoming", 
      venue: "Noida International University, Delhi",
      desc: "Comprehensive software engineering mock trials, DSA revision sprints, and direct placement matching drives.",
      img: programPlacementPrep 
    }
  ];

  const handleUniScroll = (direction) => {
    if (uniTrackRef.current) {
      const card = uniTrackRef.current.querySelector('.au-card');
      if (card) {
        const scrollAmount = card.offsetWidth + 20;
        uniTrackRef.current.scrollBy({
          left: direction === 'left' ? -scrollAmount * 2 : scrollAmount * 2,
          behavior: 'smooth'
        });
      }
    }
  };

  // 6. Certificate Slider
  const [activeCert, setActiveCert] = useState(0);
  const certs = [
    { title: "Professional Java FullStack Certification", desc: "Globally recognized certificate accredited by International Tech Council, validating enterprise backend & frontend capabilities.", image: javaCertificate },
    { title: "Professional Graphic Design Certification", desc: "Globally recognized certificate accredited by International Design Council, validating print, brand identity, and layout expertise.", image: gdCertificate },
    { title: "Professional UI/UX Certification", desc: "Globally recognized certificate accredited by International Design Council, validating user research, wireframing, and design systems.", image: uiuxCertificate }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCert((prev) => (prev + 1) % certs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [certs.length]);

  // 7. Student Testimonial Slide
  const [activeTestimonial, setActiveTestimonial] = useState(1);
  const testimonials = [
    { name: "Kambam Shashank", role: "Secured Internship at Karatpay", text: "My learning journey at Engloray has been truly transformative, helping me build a strong foundation in both technical skills and practical problem-solving.", avatar: cartoonMale1 },
    { name: "Dhanwada Srija", role: "Secured Internship at Asylcorp", text: "My confidence during the internship drive came from the constant guidance, practice sessions, and encouragement I received from Engloray mentors.", avatar: cartoonFemale2 },
    { name: "Patil Pranav", role: "Secured Internship at IntelxLabs", text: "The support from my mentors and the confidence I gained through real-world projects made me feel well-prepared during the placement drive.", avatar: cartoonMale3 },
    { name: "Nakirikanti Sai Vivek", role: "Secured Internship at Mage Data", text: "I learned AWS, Angular, Flask, and gained deep practical knowledge of Generative AI, which enhanced my ability to deploy production-level apps.", avatar: cartoonMale4 },
    { name: "Chenna Kiran Kumar", role: "Secured Internship at TechWave", text: "The confidence I gained from real-time practice and Engloray's direct support helped me feel ready while applying and attending interview rounds.", avatar: cartoonFemale4 },
    { name: "Kotrike Avinash Gupta", role: "Secured Internship at Wendor", text: "The constant support from mentors and hands-on learning in web development & DSA boosted my skills and confidence.", avatar: cartoonMale2 },
    { name: "Chitukula Abhishek Reddy", role: "Secured Internship at C-Hub Innovations", text: "Attending Engloray helped me learn skills in a way where I can implement my learnings directly into hands-on practice and got exposure to so many opportunities.", avatar: cartoonMale1 }
  ];

  const handleTestimonialChange = (index) => {
    setActiveTestimonial(index);
  };

  // 8. FAQ State
  const [faqTab, setFaqTab] = useState('general');
  const [openFaqId, setOpenFaqId] = useState(null);

  const faqs = {
    general: [
      { q: "How does Engloray partner with schools and colleges?", a: "We establish a formal academic partnership (MOU) to take over and transform standard campus lab spaces into modern, co-branded Sandbox Coding Labs, running specialized developer and designer programs." },
      { q: "Does the institution need to pay for the lab setup?", a: "We offer flexible partnership models. Engloray manages the deployment of sandbox tools, setup of Cloud coding hubs, and developer mentoring pipelines, ensuring minimal setup friction for college management." },
      { q: "What is the duration of the partnership MOU?", a: "Typically, partnership agreements run for 1 to 3 academic years, allowing us to cover multiple student batches through ongoing workshops, lab iterations, and internship drives." }
    ],
    eat: [
      { q: "What workshops are conducted under this partnership?", a: "We conduct hands-on, intensive developer and design sprints on modern tech stacks: Generative AI tools, UI/UX Wireframing, Full-Stack SaaS building, and Cloud Pipelines." },
      { q: "Who conducts the campus workshops and programs?", a: "Our workshops are run by active software engineers, tech leads, and product designers (e.g., developers from top tech firms), bringing real-world production practices directly to campus labs." },
      { q: "What is the student capacity for the on-campus workshops?", a: "Our lab takeovers support batches of 60 to 120 students per session, ensuring every student gets hands-on coding practice and real-time guidance during building sprints." }
    ],
    curriculum: [
      { q: "How do Engloray programs align with the university syllabus?", a: "We map our practical building modules and workshops directly to the existing AICTE/UGC university curriculum, enabling students to fulfill academic course credits while learning industry-ready skills." },
      { q: "What do students build inside the co-branded Sandbox Labs?", a: "Students build and deploy 50+ real-world applications, cloud-hosted pipelines, and functional SaaS portfolios with custom domains, preparing them for modern job roles." }
    ],
    placements: [
      { q: "How do direct paid internships and placements work?", a: "Through our network of 2500+ corporate hiring partners, we coordinate mock trials, recruitment drives, and match qualified student developers directly with paid internships and full-time placement offers." },
      { q: "How does this benefit the college placement cell?", a: "We work alongside the college placement officer, sharing student portfolio links, real-time performance analytics, and placement metrics to significantly boost the college's overall placement records." }
    ]
  };

  // 9. Lead Capture Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    degree: 'Principal/Director',
    year: '2026'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.college) {
      setFormError('Please fill in all required fields.');
      return;
    }
    setFormError('');
    setFormSubmitted(true);
    // Simulating API submit
    console.log("Portal lead captured:", formData);
  };

  return (
    <div className="body">
      {/* Dynamic Loader */}
      <div className="loader-container hidden" id="loader" data-astro-cid-t34ph5kx>
        <div className="loader-circle" data-astro-cid-t34ph5kx></div>
      </div>

      <TopNavbar />
      <NavigationBar />

      {/* Main Content Root */}
      <main id="astro-root" className="main-container">
        
        {/* HERO SECTION */}
        <section ref={heroRef} className="hero-section" data-astro-cid-dvh7tqhi>
          <div className="hero-background" data-astro-cid-dvh7tqhi>
            <div className="hero-slideshow" data-astro-cid-dvh7tqhi>
              <div className={`hero-slide ${currentSlide === 0 ? 'active' : ''}`} style={{ backgroundImage: `url(${mentorBg})` }} data-astro-cid-dvh7tqhi></div>
              <div className={`hero-slide ${currentSlide === 1 ? 'active' : ''}`} style={{ backgroundImage: `url(${corporateBg})` }} data-astro-cid-dvh7tqhi></div>
              <div className={`hero-slide ${currentSlide === 2 ? 'active' : ''}`} style={{ backgroundImage: `url(${eLearningBg})` }} data-astro-cid-dvh7tqhi></div>
              <div className={`hero-slide ${currentSlide === 3 ? 'active' : ''}`} style={{ backgroundImage: `url(${softwareBg})` }} data-astro-cid-dvh7tqhi></div>
              <div className={`hero-slide ${currentSlide === 4 ? 'active' : ''}`} style={{ backgroundImage: `url(${expertiseBg})` }} data-astro-cid-dvh7tqhi></div>
            </div>
            <div className="hero-overlay" data-astro-cid-dvh7tqhi></div>

            <div className="hero-content" data-astro-cid-dvh7tqhi>
              <div className="hero-info" data-astro-cid-dvh7tqhi>
                <div className="hero-info-content" data-astro-cid-dvh7tqhi>
                  <h2 className="hero-heading" data-astro-cid-dvh7tqhi>
                    <span data-astro-cid-dvh7tqhi>Transforming Campuses into</span> <br data-astro-cid-dvh7tqhi />
                    <span className="hero-highlight-wrapper" data-astro-cid-dvh7tqhi>
                      <span className="hero-highlight active" data-astro-cid-dvh7tqhi style={{ transition: 'all 0.5s ease-in-out' }}>
                        {currentSlide === 0 && "Specialized Developer Workshops"}
                        {currentSlide === 1 && "Paid Corporate Internships"}
                        {currentSlide === 2 && "Hands-on AI & Software Courses"}
                        {currentSlide === 3 && "Full-Stack Coding Sprints"}
                        {currentSlide === 4 && "Creative UI/UX Design Labs"}
                      </span>
                    </span>
                  </h2>
                  <ul className="hero-list" data-astro-cid-dvh7tqhi>
                    <li className="hero-list-item" data-astro-cid-dvh7tqhi>
                      <span className="hero-check" data-astro-cid-dvh7tqhi></span>
                      <span data-astro-cid-dvh7tqhi>Setting up Modern Sandbox Coding Labs on Campus</span>
                    </li>
                    <li className="hero-list-item" data-astro-cid-dvh7tqhi>
                      <span className="hero-check" data-astro-cid-dvh7tqhi></span>
                      <span data-astro-cid-dvh7tqhi>Conducting Intensive Specialized Tech & Design Workshops</span>
                    </li>
                    <li className="hero-list-item" data-astro-cid-dvh7tqhi>
                      <span className="hero-check" data-astro-cid-dvh7tqhi></span>
                      <span data-astro-cid-dvh7tqhi>Direct Paid Internships & Placements from Day One</span>
                    </li>
                  </ul>

                  <div className="hero-course-details-card" data-astro-cid-dvh7tqhi>
                    <div className="hero-course-details-item" data-astro-cid-dvh7tqhi>
                      <p className="hero-course-details-label" data-astro-cid-dvh7tqhi>Partnership Mode</p>
                      <p className="hero-course-details-value" data-astro-cid-dvh7tqhi>On-Campus Incubations & Lab Setups</p>
                    </div>
                    <div className="hero-course-details-divider" data-astro-cid-dvh7tqhi>
                      <div className="hero-course-details-divider-line" data-astro-cid-dvh7tqhi></div>
                    </div>
                    <div className="hero-course-details-item" data-astro-cid-dvh7tqhi>
                      <p className="hero-course-details-label" data-astro-cid-dvh7tqhi>Collaboration Status</p>
                      <p className="hero-course-details-value" data-astro-cid-dvh7tqhi>
                        <span data-astro-cid-dvh7tqhi>Open for Academic Year Partnerships</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lead Capture Form */}
              <div className="hero-form-wrapper" id="hero-section-apply" data-astro-cid-dvh7tqhi>
                <div className="hero-form-card" data-astro-cid-dvh7tqhi>
                  {formSubmitted ? (
                    <div className="form-success-message" style={{padding: '40px 20px', textAlign: 'center', background: '#fff', borderRadius: '12px'}}>
                      <h3 style={{color: '#0056d2', fontSize: '24px', marginBottom: '12px'}}>Inquiry Received!</h3>
                      <p style={{color: '#334155', fontSize: '15px', lineHeight: '1.5'}}>
                        Thank you for contacting us. A partnership representative will reach out to you within 24 hours to schedule a consultation and demo.
                      </p>
                      <div style={{marginTop: '24px', fontSize: '32px'}}>🏫</div>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} style={{display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px', background: '#fff', borderRadius: '12px'}}>
                      <h3 style={{fontSize: '20px', fontWeight: '700', color: '#1e293b', margin: '0 0 4px', textAlign: 'center'}}>Partner with Engloray</h3>
                      <p style={{fontSize: '13px', color: '#64748b', margin: '0 0 8px', textAlign: 'center'}}>Bring specialized developer workshops and coding labs to your campus</p>
                      
                      {formError && <p style={{color: '#ef4444', fontSize: '13px', margin: '0', textAlign: 'center'}}>{formError}</p>}

                      <div className="form-group" style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
                        <label style={{fontSize: '13px', fontWeight: '600', color: '#475569'}}>Your Name *</label>
                        <input type="text" name="name" value={formData.name} onChange={handleFormChange} placeholder="Enter your full name" style={{padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px'}} />
                      </div>

                      <div className="form-group" style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
                        <label style={{fontSize: '13px', fontWeight: '600', color: '#475569'}}>Official Email Address *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleFormChange} placeholder="Enter official email" style={{padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px'}} />
                      </div>

                      <div className="form-group" style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
                        <label style={{fontSize: '13px', fontWeight: '600', color: '#475569'}}>Contact Number *</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleFormChange} placeholder="Enter 10 digit number" style={{padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px'}} />
                      </div>

                      <div className="form-group" style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
                        <label style={{fontSize: '13px', fontWeight: '600', color: '#475569'}}>College / Institution Name *</label>
                        <input type="text" name="college" value={formData.college} onChange={handleFormChange} placeholder="Institution name" style={{padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px'}} />
                      </div>

                      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px'}}>
                        <div className="form-group" style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
                          <label style={{fontSize: '13px', fontWeight: '600', color: '#475569'}}>Designation</label>
                          <select name="degree" value={formData.degree} onChange={handleFormChange} style={{padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px', background: '#fff'}}>
                            <option>Principal/Director</option>
                            <option>HOD</option>
                            <option>Placement Officer</option>
                            <option>Management/Trustee</option>
                            <option>Professor/Teacher</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div className="form-group" style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
                          <label style={{fontSize: '13px', fontWeight: '600', color: '#475569'}}>Partnership Year</label>
                          <select name="year" value={formData.year} onChange={handleFormChange} style={{padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px', background: '#fff'}}>
                            <option>2026</option>
                            <option>2027</option>
                            <option>2028</option>
                          </select>
                        </div>
                      </div>

                      <button type="submit" style={{marginTop: '8px', padding: '12px', background: '#0056d2', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '15px', fontWeight: '700', cursor: 'pointer', transition: 'background 0.2s'}}>
                        Inquire for Campus Partnership
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* JOURNEY SECTION */}
        <section className="journey-section" data-astro-cid-moggeisx>
          <div className="journey-container" data-astro-cid-moggeisx>
            <div className="journey-content" data-astro-cid-moggeisx>
              <div className="journey-grid" data-astro-cid-moggeisx>
                <div className="journey-collage" data-astro-cid-moggeisx>
                  <img src={experienceBeyondClassroom} alt="Experience Beyond Classroom" loading="lazy" className="journey-collage-image" data-astro-cid-moggeisx />
                </div>
                <div className="journey-features" data-astro-cid-moggeisx>
                  <h2 className="journey-heading" data-astro-cid-moggeisx>
                    Integrating Corporate Incubation <span className="journey-highlight" data-astro-cid-moggeisx>Within Campus Walls</span>
                  </h2>
                  <div className="journey-features-list" data-astro-cid-moggeisx>
                    <div className="journey-feature" data-astro-cid-moggeisx>
                      <div className="journey-feature-icon" data-astro-cid-moggeisx>
                        {/* Embedded SVG icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none"><path d="M14.2356 29.6161V29.3073C14.2356 29.1551 14.359 29.0316 14.5113 29.0316H18.8908V23.5445L18.4482 23.4557C17.434 23.252 16.5258 22.8198 15.7487 22.1716C14.9796 21.5296 14.4252 20.7179 14.1011 19.7586L13.9896 19.4287L13.6438 19.3876C12.2538 19.2225 11.1134 18.6488 10.1581 17.6347C9.21038 16.6291 8.75 15.4688 8.75 14.087V12.7785C8.75 12.392 8.88692 12.0673 9.16841 11.7855C9.44991 11.504 9.77489 11.3671 10.1611 11.3671H13.7575V9.87291C13.7575 9.25265 14.2601 8.75 14.8804 8.75H23.761C24.3813 8.75 24.884 9.25265 24.884 9.87291V11.3671H28.4803C28.8668 11.3671 29.1915 11.504 29.4733 11.7855C29.7548 12.067 29.8917 12.392 29.8917 12.7782V14.0867C29.8917 15.4685 29.4314 16.6288 28.484 17.634C27.5283 18.6485 26.3882 19.2219 24.9982 19.387L24.6524 19.4281L24.5409 19.758C24.2165 20.7173 23.6621 21.529 22.893 22.171C22.1162 22.8195 21.2077 23.2514 20.1935 23.4551L19.7506 23.5439V29.031H24.1301C24.2824 29.031 24.4058 29.1545 24.4058 29.3067V29.6154C24.4058 29.7677 24.2824 29.8911 24.1301 29.8911H14.511C14.3587 29.8911 14.2353 29.7677 14.2353 29.6154L14.2356 29.6161ZM14.6427 17.9872C14.6427 19.2826 15.1012 20.3978 16.0057 21.302C16.9102 22.2066 18.0255 22.6654 19.3209 22.6654C20.6162 22.6654 21.7315 22.2066 22.636 21.302C23.5405 20.3975 23.999 19.2823 23.999 17.9872V10.1369C23.999 9.84626 23.7632 9.61041 23.4725 9.61041H15.1692C14.8785 9.61041 14.6427 9.84626 14.6427 10.1369V17.9875V17.9872ZM24.884 18.5159L25.5566 18.3643C26.5601 18.1379 27.3978 17.6264 28.0466 16.8432C28.6999 16.0547 29.0313 14.087V13.0876C29.0313 12.6125 28.6463 12.2272 28.1709 12.2272H24.8837V18.5159H24.884ZM9.6101 14.087C9.6101 15.1273 9.94152 16.0547 10.5949 16.8432C11.2439 17.6261 12.0817 18.1379 13.0848 18.3643L13.7575 18.5159V12.2272H10.45C9.98624 12.2272 9.6101 12.6033 9.6101 13.0671V14.087Z" fill="#0056d2" stroke="#0056d2" stroke-width="0.652475"/></svg>
                      </div>
                      <div className="journey-feature-content" data-astro-cid-moggeisx>
                        <p className="journey-feature-title" data-astro-cid-moggeisx>Syllabus-Aligned Specialized Sprints</p>
                        <p className="journey-feature-description" data-astro-cid-moggeisx>We integrate practical code execution directly into the college curriculum.</p>
                      </div>
                    </div>

                    <div className="journey-feature" data-astro-cid-moggeisx>
                      <div className="journey-feature-icon" data-astro-cid-moggeisx>
                        <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none"><path d="M8.48828 31.6927V25.4506C8.48828 24.8791 8.6864 24.404 9.09367 23.9975C9.50171 23.5902 9.97795 23.3925 10.5494 23.3925H28.0898C28.6612 23.3925 29.1371 23.5906 29.5451 23.9986C29.9528 24.4063 30.1513 24.8825 30.1513 25.454V31.6931H8.48828V31.6927ZM10.5498 24.2558C10.218 24.2558 9.92308 24.375 9.69716 24.601C9.47085 24.8277 9.35198 25.1225 9.35198 25.4536V30.8294H29.2883V25.4536C29.2883 25.1222 29.1691 24.8276 28.9439 24.6017C28.7172 24.375 28.4224 24.2558 28.0905 24.2558H10.5498ZM14.9197 19.8116C13.1234 19.8116 11.6349 19.1963 10.3692 17.9306C9.10358 16.665 8.48828 15.1761 8.48828 13.3797C8.48828 11.5833 9.10358 10.0952 10.3692 8.82918C11.6352 7.56354 13.1238 6.94824 14.9197 6.94824H23.7194C25.5158 6.94824 27.0043 7.56354 28.27 8.82918C29.5356 10.0948 30.1509 11.5833 30.1509 13.3797C30.1509 15.1761 29.5356 16.6646 28.27 17.9302C27.0043 19.1959 25.5158 19.8112 23.7194 19.8112H14.9197V19.8116ZM14.9197 7.81156C13.3741 7.81156 12.0456 8.35638 10.9708 9.43114C9.89603 10.5059 9.35122 11.8344 9.35122 13.3801C9.35122 14.9258 9.89603 16.2543 10.9708 17.329C12.0456 18.4038 13.3741 18.9486 14.9197 18.9486H23.7194C25.2651 18.9486 26.5936 18.4038 27.6684 17.329C28.7432 16.2543 29.288 14.9258 29.288 13.3801C29.288 11.8344 28.7432 10.5059 27.6684 9.43114C26.5936 8.35638 25.2651 7.81156 23.7194 7.81156H14.9197ZM23.7194 13.9893C23.5328 13.9893 23.4017 13.9379 23.2817 13.8178C23.1617 13.6978 23.1106 13.5668 23.1106 13.3797C23.1106 13.1926 23.1621 13.062 23.2821 12.942C23.4025 12.8216 23.5335 12.7705 23.7202 12.7705C23.9069 12.7705 24.0376 12.8219 24.1576 12.942C24.278 13.0627 24.3294 13.1938 24.3294 13.3805C24.3294 13.5672 24.278 13.6978 24.158 13.8178C24.0376 13.9379 23.9065 13.9893 23.7194 13.9893ZM14.9194 13.9893C14.7327 13.9893 14.6016 13.9379 14.4816 13.8178C14.3616 13.6975 14.3102 13.5664 14.3102 13.3797C14.3102 13.193 14.3616 13.0623 14.4816 12.9423C14.6024 12.8219 14.7334 12.7705 14.9201 12.7705C15.1068 12.7705 15.2375 12.8219 15.3575 12.942C15.4775 13.0623 15.5289 13.1934 15.5289 13.3805C15.5289 13.5675 15.4775 13.6982 15.3575 13.8182C15.2375 13.9382 15.1064 13.9893 14.9194 13.9893Z" fill="#0056d2" stroke="#0056d2" stroke-width="0.681341"/></svg>
                      </div>
                      <div className="journey-feature-content" data-astro-cid-moggeisx>
                        <p className="journey-feature-title" data-astro-cid-moggeisx>Setting up Co-branded Labs</p>
                        <p className="journey-feature-description" data-astro-cid-moggeisx>We convert unused campus infrastructure into active sandbox labs and cloud hubs.</p>
                      </div>
                    </div>

                    <div className="journey-feature" data-astro-cid-moggeisx>
                      <div className="journey-feature-icon" data-astro-cid-moggeisx>
                        <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none"><path d="M9.37413 30.118C8.85875 30.118 8.43554 29.9455 8.0804 29.5903C7.72526 29.2352 7.55273 28.812 7.55273 28.2966V14.8695C7.55273 14.3541 7.72526 13.9309 8.0804 13.5757C8.43554 13.2206 8.85851 13.0481 9.37413 13.0481H15.3107V10.3439C15.3107 9.82848 15.4832 9.40527 15.8384 9.05013C16.1935 8.69499 16.6165 8.52246 17.1321 8.52246H21.5083C22.0237 8.52246 22.4469 8.69499 22.802 9.05013C23.1571 9.40527 23.3297 9.82824 23.3297 10.3439V13.0481H29.2665C29.7819 13.0481 30.2051 13.2206 30.5602 13.5757C30.9154 13.9309 31.0879 14.3538 31.0879 14.8695V28.2966C31.0879 28.812 30.9154 29.2352 30.5602 29.5903C30.2051 29.9455 29.7821 30.118 29.2665 30.118H9.37413ZM9.37413 13.9554C9.13623 13.9554 8.91528 14.0508 8.73513 14.2314C8.55547 14.4106 8.46012 14.6316 8.46012 14.8695V28.2966C8.46012 28.5345 8.55547 28.7552 8.73612 28.9356C8.91528 29.1153 9.13623 29.2109 9.37413 29.2109H29.2662C29.5042 29.2109 29.7251 29.1155 29.9052 28.9349C30.0849 28.7557 30.1803 28.5348 30.1803 28.2968V14.8695C30.1803 14.6316 30.0849 14.4106 29.9043 14.2305C29.7251 14.0508 29.5042 13.9554 29.2662 13.9554H9.37413ZM17.1321 9.43009C16.8942 9.43009 16.6732 9.52545 16.4931 9.70609C16.3134 9.88525 16.2178 10.1062 16.2178 10.3441V13.0483H22.4221V10.3441C22.4221 10.1062 22.3267 9.88525 22.1461 9.7051C21.9669 9.52545 21.7459 9.42984 21.508 9.42984H17.1319L17.1321 9.43009Z" fill="#0056d2" stroke="#0056d2" stroke-width="0.722497"/></svg>
                      </div>
                      <div className="journey-feature-content" data-astro-cid-moggeisx>
                        <p className="journey-feature-title" data-astro-cid-moggeisx>Turnkey Placement Ecosystems</p>
                        <p className="journey-feature-description" data-astro-cid-moggeisx>Direct placement and paid internship matchups for students from day one.</p>
                      </div>
                    </div>

                    <div className="journey-feature" data-astro-cid-moggeisx>
                      <div className="journey-feature-icon" data-astro-cid-moggeisx>
                        <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none"><path d="M19.3203 32.5699C18.8304 32.5699 18.4124 32.4465 18.0426 32.1929C17.677 31.942 17.4287 31.6232 17.4287 31.2184L17.1512 30.8479H16.3257C15.8632 30.8479 15.475 30.6844 15.1385 30.3479C14.8019 30.0113 14.6385 29.6231 14.6385 29.1607V23.933L14.3692 23.7698C12.9486 22.9089 11.8151 21.7382 11 20.2905C10.1847 18.8426 9.77148 17.2713 9.77148 15.6201C9.77148 14.2907 10.0047 13.0481 10.4647 11.9267C10.9242 10.8066 11.625 9.77056 12.5479 8.8477C13.4708 7.92484 14.5068 7.2238 15.6269 6.7645C16.7483 6.30452 17.9909 6.07129 19.3203 6.07129C20.6497 6.07129 21.8923 6.30452 23.0138 6.7645C24.1339 7.22403 25.1699 7.92484 26.0927 8.8477C27.0156 9.77056 27.7166 10.8066 28.1759 11.9267C28.6359 13.0481 28.8691 14.2907 28.8691 15.6201C28.8691 17.3008 28.4563 18.8793 27.6419 20.3113C26.8269 21.7447 25.6929 22.9084 24.2716 23.7698L24.0024 23.933V29.1607C24.0024 29.6231 23.8389 30.0113 23.5024 30.3479C23.1658 30.6844 22.7776 30.8479 22.3152 30.8479H21.4896L21.357 31.2184C21.2121 31.6232 20.9639 31.9418 20.5981 32.1929C20.2284 32.4465 19.8103 32.5699 19.3203 32.5699ZM15.7664 29.7197H22.8742V27.1962H15.7664V29.7197ZM15.7664 26.9898H22.8742V24.4203H15.7664V26.9898ZM19.6542 18.1416V23.2921H22.7423L22.8572 23.2369C24.2893 22.5475 25.4722 21.5193 26.3729 20.1814C27.2808 18.833 27.741 17.2984 27.741 15.6201C27.741 13.2804 26.9177 11.2708 25.2935 9.64668C23.6694 8.02256 21.6598 7.19921 19.3201 7.19921C16.9804 7.19921 14.9708 8.02256 13.3466 9.64668C11.7228 11.2706 10.8992 13.2804 10.8992 15.6201C10.8992 17.2984 11.3594 18.833 12.2673 20.1814C13.168 21.5193 14.3509 22.5473 15.7829 23.2369L15.8979 23.2921H18.986V18.1416L16.0097 15.1653L16.4748 14.7002L19.3201 17.5454L22.1654 14.7002L22.6305 15.1653L19.6542 18.1416Z" fill="#0056d2" stroke="#0056d2" stroke-width="0.658544"/></svg>
                      </div>
                      <div className="journey-feature-content" data-astro-cid-moggeisx>
                        <p className="journey-feature-title" data-astro-cid-moggeisx>Structured Hackathons & Sprints</p>
                        <p className="journey-feature-description" data-astro-cid-moggeisx>We handle and execute end-to-end hackathons and buildathons at your campus.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PLACEMENTS SECTION (Marquee) */}
        <section className="placements-section" data-astro-cid-jbbt3xoj>
          <div className="placements-inner" data-astro-cid-jbbt3xoj>
            <h2 className="placements-heading" data-astro-cid-jbbt3xoj>
              <span className="placements-heading-red" data-astro-cid-jbbt3xoj>Top Placements</span> via Engloray support
            </h2>
            <div className="placements-track-wrapper" data-astro-cid-jbbt3xoj>
              <div className="placements-track" data-astro-cid-jbbt3xoj>
                {[
                  { name: "Subhash", role: "SDE", ctc: "80 LPA", avatar: cartoonMale1, logo: "https://framerusercontent.com/images/XOA4KxIZyrIjUG7ChTHplPwjRB0.png" },
                  { name: "Naina", role: "Analyst Data Engineer", ctc: "28 LPA", avatar: cartoonFemale1, logo: "https://framerusercontent.com/images/IljNQhvNUcyJju1RqW0200Tv0g.png" },
                  { name: "Sunil", role: "SDE", ctc: "18 LPA", avatar: cartoonMale2, logo: "https://framerusercontent.com/images/7zUlgrbgI0cn2PfvuNX8eAiiQ.png" },
                  { name: "Sandeep Kumar", role: "Data Scientist", ctc: "12 LPA", avatar: cartoonMale3, logo: "https://framerusercontent.com/images/xq9vw1CA4P3A7NlDH1859UidGbs.png" },
                  { name: "D. Mohith Reddy", role: "SDE 1", ctc: "57 LPA", avatar: cartoonMale4, logo: "https://framerusercontent.com/images/ESMFH1G6X1TX3sQ8P6Q4JdOw.png" },
                  { name: "Ritesh Baviskar", role: "AI Engineer", ctc: "35 LPA", avatar: cartoonMale2, logo: "https://framerusercontent.com/images/IYpW4iM8sAIxHNg5RooJzqUoZY.png" },
                  { name: "Atul", role: "SWE", ctc: "25 LPA", avatar: cartoonMale1, logo: "https://framerusercontent.com/images/ZagxyY5zxtpPAtRvlkv21p02M.png" }
                ].map((student, idx) => (
                  <article className="placement-card" key={idx} data-astro-cid-jbbt3xoj>
                    <div className="placement-photo" data-astro-cid-jbbt3xoj>
                      <img src={student.avatar} alt={student.name} loading="lazy" data-astro-cid-jbbt3xoj />
                      <div className="placement-overlay" data-astro-cid-jbbt3xoj>
                        <p className="placement-name" data-astro-cid-jbbt3xoj>{student.name}</p>
                        <p className="placement-role" data-astro-cid-jbbt3xoj>{student.role}</p>
                        <div className="placement-footer" data-astro-cid-jbbt3xoj>
                          <span className="placement-ctc" data-astro-cid-jbbt3xoj>{student.ctc}</span>
                          <img className="placement-logo" src={student.logo} alt="company logo" loading="lazy" data-astro-cid-jbbt3xoj />
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
                {/* Duplicate track list for infinite marquee animation loop */}
                {[
                  { name: "Subhash", role: "SDE", ctc: "80 LPA", avatar: cartoonMale1, logo: "https://framerusercontent.com/images/XOA4KxIZyrIjUG7ChTHplPwjRB0.png" },
                  { name: "Naina", role: "Analyst Data Engineer", ctc: "28 LPA", avatar: cartoonFemale1, logo: "https://framerusercontent.com/images/IljNQhvNUcyJju1RqW0200Tv0g.png" },
                  { name: "Sunil", role: "SDE", ctc: "18 LPA", avatar: cartoonMale2, logo: "https://framerusercontent.com/images/7zUlgrbgI0cn2PfvuNX8eAiiQ.png" },
                  { name: "Sandeep Kumar", role: "Data Scientist", ctc: "12 LPA", avatar: cartoonMale3, logo: "https://framerusercontent.com/images/xq9vw1CA4P3A7NlDH1859UidGbs.png" },
                  { name: "D. Mohith Reddy", role: "SDE 1", ctc: "57 LPA", avatar: cartoonMale4, logo: "https://framerusercontent.com/images/ESMFH1G6X1TX3sQ8P6Q4JdOw.png" },
                  { name: "Ritesh Baviskar", role: "AI Engineer", ctc: "35 LPA", avatar: cartoonMale2, logo: "https://framerusercontent.com/images/IYpW4iM8sAIxHNg5RooJzqUoZY.png" },
                  { name: "Atul", role: "SWE", ctc: "25 LPA", avatar: cartoonMale1, logo: "https://framerusercontent.com/images/ZagxyY5zxtpPAtRvlkv21p02M.png" }
                ].map((student, idx) => (
                  <article className="placement-card" key={`dup-${idx}`} data-astro-cid-jbbt3xoj>
                    <div className="placement-photo" data-astro-cid-jbbt3xoj>
                      <img src={student.avatar} alt={student.name} loading="lazy" data-astro-cid-jbbt3xoj />
                      <div className="placement-overlay" data-astro-cid-jbbt3xoj>
                        <p className="placement-name" data-astro-cid-jbbt3xoj>{student.name}</p>
                        <p className="placement-role" data-astro-cid-jbbt3xoj>{student.role}</p>
                        <div className="placement-footer" data-astro-cid-jbbt3xoj>
                          <span className="placement-ctc" data-astro-cid-jbbt3xoj>{student.ctc}</span>
                          <img className="placement-logo" src={student.logo} alt="company logo" loading="lazy" data-astro-cid-jbbt3xoj />
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <p className="placements-disclaimer" data-astro-cid-jbbt3xoj>
              <strong>Disclaimer:</strong> Placement outcomes depend on student upskilling progress, active portfolios, and performance in corporate evaluation drives.
            </p>
          </div>
        </section>

        {/* OUTCOMES SECTION (Carousel on mobile, grid on desktop) */}
        <section className="outcomes-section" data-astro-cid-ybotxm6t>
          <div className="outcomes-container" data-astro-cid-ybotxm6t>
            <div className="outcomes-header" data-astro-cid-ybotxm6t>
              <h2 className="outcomes-heading" data-astro-cid-ybotxm6t>Delivering <span data-astro-cid-ybotxm6t>Institutional Impact</span> That Matters</h2>
              <p className="outcomes-subtext" data-astro-cid-ybotxm6t>How our specialized developer workshops and lab takeovers convert standard campuses into active tech hubs.</p>
            </div>

            <div className="outcomes-carousel-wrapper" data-astro-cid-ybotxm6t>
              <div className="oc-slider-window" data-astro-cid-ybotxm6t style={{overflow:'hidden'}}>
                <div className="outcomes-grid" id="outcomes-grid" data-astro-cid-ybotxm6t>
                  <div className="outcome-card" data-astro-cid-ybotxm6t>
                    <div className="outcome-icon" data-astro-cid-ybotxm6t>
                      <img src="https://d14qv6cm1t62pm.cloudfront.net/niat/outcomes-ai-projects.png" alt="Campuses" width="36" height="36" data-astro-cid-ybotxm6t />
                    </div>
                    <div className="outcome-number" data-astro-cid-ybotxm6t>30+</div>
                    <div className="outcome-divider" data-astro-cid-ybotxm6t></div>
                    <div className="outcome-label" data-astro-cid-ybotxm6t>Campuses Transformed Nationwide</div>
                  </div>

                  <div className="outcome-card" data-astro-cid-ybotxm6t>
                    <div className="outcome-icon" data-astro-cid-ybotxm6t>
                      <img src="https://d14qv6cm1t62pm.cloudfront.net/niat/outcomes-startups.png" alt="Students Trained" width="36" height="36" data-astro-cid-ybotxm6t />
                    </div>
                    <div className="outcome-number" data-astro-cid-ybotxm6t>15,000+</div>
                    <div className="outcome-divider" data-astro-cid-ybotxm6t></div>
                    <div className="outcome-label" data-astro-cid-ybotxm6t>Students Trained & Upskilled</div>
                  </div>

                  <div className="outcome-card" data-astro-cid-ybotxm6t>
                    <div className="outcome-icon" data-astro-cid-ybotxm6t>
                      <img src="https://d14qv6cm1t62pm.cloudfront.net/niat/outcomes-internships.png" alt="Workshops" width="36" height="36" data-astro-cid-ybotxm6t />
                    </div>
                    <div className="outcome-number" data-astro-cid-ybotxm6t>500+</div>
                    <div className="outcome-divider" data-astro-cid-ybotxm6t></div>
                    <div className="outcome-label" data-astro-cid-ybotxm6t>Tech Workshops Conducted</div>
                  </div>

                  <div className="outcome-card" data-astro-cid-ybotxm6t>
                    <div className="outcome-icon" data-astro-cid-ybotxm6t>
                      <img src="https://d14qv6cm1t62pm.cloudfront.net/niat/outcomes-companies.png" alt="Hiring Partners" width="36" height="36" data-astro-cid-ybotxm6t />
                    </div>
                    <div className="outcome-number" data-astro-cid-ybotxm6t>2500+</div>
                    <div className="outcome-divider" data-astro-cid-ybotxm6t></div>
                    <div className="outcome-label" data-astro-cid-ybotxm6t>Active Corporate Hiring Partners</div>
                  </div>
                </div>
              </div>
            </div>
            <p className="outcomes-disclaimer" data-astro-cid-ybotxm6t>
              <strong>Disclaimer:</strong> Outcomes are cumulative across partner campus cohorts and represent verified student metrics.
            </p>
          </div>
        </section>

        {/* THRIVING AT PORTAL SECTION */}
        <section className="sa-section" data-astro-cid-nbqiasj5>
          <div className="sa-inner" data-astro-cid-nbqiasj5>
            <div className="sa-header" data-astro-cid-nbqiasj5>
              <h2 className="sa-heading" data-astro-cid-nbqiasj5>Transforming Campus Talent into <span data-astro-cid-nbqiasj5>Industry Professionals</span></h2>
            </div>

            <div className="sa-card1" data-astro-cid-nbqiasj5>
              <div className="sa-card1-vector" data-astro-cid-nbqiasj5>
                <img src="https://d14qv6cm1t62pm.cloudfront.net/niat/Vector-bg-internships.png" alt="" aria-hidden="true" data-astro-cid-nbqiasj5 />
                <img src="https://d14qv6cm1t62pm.cloudfront.net/niat/Vector-bg-internships.png" alt="" aria-hidden="true" data-astro-cid-nbqiasj5 />
                <img src="https://d14qv6cm1t62pm.cloudfront.net/niat/Vector-bg-internships.png" alt="" aria-hidden="true" data-astro-cid-nbqiasj5 />
              </div>
              <div className="sa-card1-left" data-astro-cid-nbqiasj5>
                <h3 className="sa-card1-title" data-astro-cid-nbqiasj5>Empowering Students to Secure<br data-astro-cid-nbqiasj5 />High-Stipend Internships</h3>
                <div className="sa-logos-wrap" data-astro-cid-nbqiasj5>
                  <div className="sa-logos-track" data-astro-cid-nbqiasj5>
                    {["cwtgpZPqB4JzdocknTpzOV4I.png", "8cCqYdMwpx8aaY4SIZxS05stI.png", "48b7iyaRO9KUnKrh0m2mDaa4m3A.png", "Hvaw7M8YBg3IQEEtKrs7g4ZoiTE.png", "fk7WvMj3CJpuRw31lrG49CUd1A.png", "InLMJ2X9q1AQdDE0jMXzYdD07ug.png", "DEqXpQqUOIo9qD95xXpackmeN6I.png"].map((logo, i) => (
                      <img key={i} src={`https://framerusercontent.com/images/${logo}`} alt="company logo" className="sa-logo-img" loading="lazy" data-astro-cid-nbqiasj5 />
                    ))}
                  </div>
                </div>
              </div>
              <div className="sa-card1-right" data-astro-cid-nbqiasj5>
                <img src={admissionPortal3Person} alt="Portal students" className="sa-students-img" data-astro-cid-nbqiasj5 />
              </div>
            </div>

            <div className="sa-bottom-grid" data-astro-cid-nbqiasj5>
              <div className="sa-card-bizhack" data-astro-cid-nbqiasj5>
                <div className="sa-bizhack-text" data-astro-cid-nbqiasj5>
                  <h3 className="sa-bizhack-title" data-astro-cid-nbqiasj5><span style={{ whiteSpace: "nowrap" }} data-astro-cid-nbqiasj5>22+ Tech Startups Deployed</span><br data-astro-cid-nbqiasj5 /><span style={{ whiteSpace: "nowrap" }} data-astro-cid-nbqiasj5>from Sandbox Labs</span></h3>
                  <p className="sa-bizhack-sub" style={{ whiteSpace: "nowrap" }} data-astro-cid-nbqiasj5>8 already generating active revenue!</p>
                </div>
                <div className="sa-bizhack-right" data-astro-cid-nbqiasj5>
                  <img src="https://d14qv6cm1t62pm.cloudfront.net/niat/Vector-sachin-bg.png" alt="" aria-hidden="true" className="sa-bizhack-vector" data-astro-cid-nbqiasj5 />
                  <img src={admissionPortal1Person} alt="Winner photo" className="sa-bizhack-photo" data-astro-cid-nbqiasj5 />
                </div>
              </div>
              <div className="sa-card-openai" data-astro-cid-nbqiasj5 style={{ backgroundImage: `url(${admissionPortal2Person})` }}>
                <div className="sa-openai-content" data-astro-cid-nbqiasj5>
                  <p className="sa-openai-title" data-astro-cid-nbqiasj5><span style={{ whiteSpace: "nowrap" }} data-astro-cid-nbqiasj5>OpenAI Academy × Buildathon</span><br data-astro-cid-nbqiasj5 /><span style={{ whiteSpace: "nowrap" }} data-astro-cid-nbqiasj5>Winning National Sprints,</span></p>
                  <p className="sa-openai-sub" style={{ whiteSpace: "nowrap" }} data-astro-cid-nbqiasj5>Engloray teams walked away with ₹3,50,000 cash prizes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UNIVERSITY COLLABORATIONS SECTION */}
        <section className="au-section" data-astro-cid-6ffk7ym5>
          <div className="au-inner" data-astro-cid-6ffk7ym5>
            <div className="au-header" data-astro-cid-6ffk7ym5>
              <h2 className="au-title" data-astro-cid-6ffk7ym5>
                Campus Programs & <span className="au-highlight" data-astro-cid-6ffk7ym5>Specialized Tech Sprints</span>
              </h2>
            </div>

            <div className="au-tabs-wrap" data-astro-cid-6ffk7ym5>
              <div className="au-tabs" id="au-tabs" role="tablist" data-astro-cid-6ffk7ym5>
                {[
                  { id: 'all', label: 'All Programs' },
                  { id: 'conducted', label: 'Conducted Sprints' },
                  { id: 'upcoming', label: 'Upcoming Sprints' }
                ].map((tab) => (
                  <button key={tab.id} type="button" role="tab" className={`au-tab ${activeStatus === tab.id ? 'is-active' : ''}`} onClick={() => setActiveStatus(tab.id)} aria-selected={activeStatus === tab.id} data-astro-cid-6ffk7ym5 style={{ padding: '12px 24px' }}>
                    <span className="au-tab-label" data-astro-cid-6ffk7ym5 style={{ marginLeft: 0 }}>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="au-carousel-wrap" data-astro-cid-6ffk7ym5>
              <button type="button" className="au-nav" onClick={() => handleUniScroll('left')} data-astro-cid-6ffk7ym5 aria-label="Previous programs">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              
              <div className="au-track-outer" data-astro-cid-6ffk7ym5>
                <div ref={uniTrackRef} className="au-track" id="au-track" data-astro-cid-6ffk7ym5>
                  {programCards
                    .filter((card) => activeStatus === 'all' || card.status === activeStatus)
                    .map((card, i) => (
                      <div className="au-card" key={i} data-region={card.status} data-astro-cid-6ffk7ym5 style={{ height: 'auto', minHeight: '440px' }}>
                        <div className="au-img-wrap" data-astro-cid-6ffk7ym5>
                          <img src={card.img} alt={card.name} className="au-img" data-astro-cid-6ffk7ym5 />
                          <span className={`au-badge ${card.status === 'upcoming' ? 'au-badge--upcoming' : 'au-badge--conducted'}`} data-status={card.status} data-astro-cid-6ffk7ym5>
                            {card.badge}
                          </span>
                        </div>
                        <div className="au-card-body" data-astro-cid-6ffk7ym5 style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '20px' }}>
                          <span className="au-card-category" data-astro-cid-6ffk7ym5 style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: '#0056D2', letterSpacing: '0.5px' }}>
                            {card.category}
                          </span>
                          <h3 className="au-card-name" data-astro-cid-6ffk7ym5 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: '#0f172a', lineHeight: '1.3' }}>
                            {card.name}
                          </h3>
                          <p className="au-card-desc" data-astro-cid-6ffk7ym5 style={{ fontSize: '13px', color: '#475569', lineHeight: '1.5', margin: '4px 0 8px', flexGrow: 1 }}>
                            {card.desc}
                          </p>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontSize: '12px', borderTop: '1px solid #f1f5f9', paddingTop: '8px', marginTop: 'auto' }}>
                            <svg className="au-pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '14px', height: '14px', flexShrink: 0 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            <span style={{ fontWeight: '500' }}>{card.venue}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <button type="button" className="au-nav" onClick={() => handleUniScroll('right')} data-astro-cid-6ffk7ym5 aria-label="Next programs">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>

            <div className="au-cta-wrap" data-astro-cid-6ffk7ym5>
              <button type="button" className="au-cta-btn" onClick={scrollToApply} data-astro-cid-6ffk7ym5>
                Inquire About Hosting Sprints on Your Campus
              </button>
            </div>
          </div>
        </section>

        {/* MENTORS SECTION (Marquee) */}
        <section className="companies-section" data-astro-cid-ypdygpua>
          <div className="companies-section-container" data-astro-cid-ypdygpua>
            <h2 className="companies-section-heading" data-astro-cid-ypdygpua>
              Mentors From <span className="companies-section-highlight" data-astro-cid-ypdygpua>World-Class Tech Companies</span>
            </h2>
            <div className="companies-section-content" data-astro-cid-ypdygpua>
              <div className="marquee" data-astro-cid-ypdygpua>
                <div className="marquee__track marquee__track--rtl" data-astro-cid-ypdygpua>
                  <div className="marquee__group" data-astro-cid-ypdygpua>
                    {[
                      { name: "Rahul Attuluri", role: "Chief Executive Officer", avatar: cartoonMale1, company: "https://framerusercontent.com/images/XOA4KxIZyrIjUG7ChTHplPwjRB0.png" },
                      { name: "Giridhar G.", role: "Advisory Software Engineer", avatar: cartoonMale2, company: "https://framerusercontent.com/images/IYpW4iM8sAIxHNg5RooJzqUoZY.png" },
                      { name: "Architha Nagelli", role: "Senior SDE", avatar: cartoonFemale3, company: "https://framerusercontent.com/images/ZagxyY5zxtpPAtRvlkv21p02M.png" },
                      { name: "Abhinav Reddy", role: "Software Engineer", avatar: cartoonMale3, company: "https://framerusercontent.com/images/7zUlgrbgI0cn2PfvuNX8eAiiQ.png" }
                    ].map((mentor, i) => (
                      <div className="mentor-card" key={i} data-astro-cid-6pcgkbdw>
                        <div className="mentor-card-media" data-astro-cid-6pcgkbdw>
                          <img src={mentor.avatar} alt={mentor.name} className="mentor-card-image" data-astro-cid-6pcgkbdw />
                        </div>
                        <div className="mentor-card-content" data-astro-cid-6pcgkbdw>
                          <h3 className="mentor-card-name" data-astro-cid-6pcgkbdw>{mentor.name}</h3>
                          <p className="mentor-card-subtitle" data-astro-cid-6pcgkbdw>{mentor.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Duplicate marquee group for infinite animation loop */}
                  <div className="marquee__group" data-astro-cid-ypdygpua>
                    {[
                      { name: "Rahul Attuluri", role: "Chief Executive Officer", avatar: cartoonMale1, company: "https://framerusercontent.com/images/XOA4KxIZyrIjUG7ChTHplPwjRB0.png" },
                      { name: "Giridhar G.", role: "Advisory Software Engineer", avatar: cartoonMale2, company: "https://framerusercontent.com/images/IYpW4iM8sAIxHNg5RooJzqUoZY.png" },
                      { name: "Architha Nagelli", role: "Senior SDE", avatar: cartoonFemale3, company: "https://framerusercontent.com/images/ZagxyY5zxtpPAtRvlkv21p02M.png" },
                      { name: "Abhinav Reddy", role: "Software Engineer", avatar: cartoonMale3, company: "https://framerusercontent.com/images/7zUlgrbgI0cn2PfvuNX8eAiiQ.png" }
                    ].map((mentor, i) => (
                      <div className="mentor-card" key={`dup-${i}`} data-astro-cid-6pcgkbdw>
                        <div className="mentor-card-media" data-astro-cid-6pcgkbdw>
                          <img src={mentor.avatar} alt={mentor.name} className="mentor-card-image" data-astro-cid-6pcgkbdw />
                        </div>
                        <div className="mentor-card-content" data-astro-cid-6pcgkbdw>
                          <h3 className="mentor-card-name" data-astro-cid-6pcgkbdw>{mentor.name}</h3>
                          <p className="mentor-card-subtitle" data-astro-cid-6pcgkbdw>{mentor.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HIRING PARTNERS SECTION */}
        <section className="hiring-partners-section" data-astro-cid-ac4rcvdt>
          <div className="hiring-partners-container" data-astro-cid-ac4rcvdt>
            <h2 className="hiring-partners-heading" data-astro-cid-ac4rcvdt>
              <span className="hiring-partners-heading-red" data-astro-cid-ac4rcvdt>2500+ Companies</span> Have Hired from Our Network
            </h2>
            <p className="hiring-partners-subheading" data-astro-cid-ac4rcvdt>On track to onboard 5000+ companies in the next 2 years</p>
            
            <div className="hiring-partners-content" data-astro-cid-ac4rcvdt>
              <div className="marquee marquee--row-a" data-astro-cid-ac4rcvdt>
                <div className="marquee__track marquee__track--rtl" data-astro-cid-ac4rcvdt>
                  <div className="marquee__group" data-astro-cid-ac4rcvdt>
                    {["cwtgpZPqB4JzdocknTpzOV4I.png", "8cCqYdMwpx8aaY4SIZxS05stI.png", "48b7iyaRO9KUnKrh0m2mDaa4m3A.png", "Hvaw7M8YBg3IQEEtKrs7g4ZoiTE.png", "fk7WvMj3CJpuRw31lrG49CUd1A.png", "InLMJ2X9q1AQdDE0jMXzYdD07ug.png", "DEqXpQqUOIo9qD95xXpackmeN6I.png"].map((logo, i) => (
                      <img key={i} src={`https://framerusercontent.com/images/${logo}`} alt="Hiring Partner" className="company-logo" loading="lazy" data-astro-cid-ac4rcvdt />
                    ))}
                  </div>
                  {/* Duplicate marquee group for infinite animation loop */}
                  <div className="marquee__group" data-astro-cid-ac4rcvdt>
                    {["cwtgpZPqB4JzdocknTpzOV4I.png", "8cCqYdMwpx8aaY4SIZxS05stI.png", "48b7iyaRO9KUnKrh0m2mDaa4m3A.png", "Hvaw7M8YBg3IQEEtKrs7g4ZoiTE.png", "fk7WvMj3CJpuRw31lrG49CUd1A.png", "InLMJ2X9q1AQdDE0jMXzYdD07ug.png", "DEqXpQqUOIo9qD95xXpackmeN6I.png"].map((logo, i) => (
                      <img key={`dup-${i}`} src={`https://framerusercontent.com/images/${logo}`} alt="Hiring Partner" className="company-logo" loading="lazy" data-astro-cid-ac4rcvdt />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NIAT PORTAL ADVANTAGES TABLE */}
        <section className="niat-advantages-section" data-astro-cid-qvveo2su style={{background:'#fcfcfc', padding:'28px 32px'}}>
          <div style={{maxWidth:'1200px', margin:'0 auto', width:'100%'}}>
            <h2 style={{fontFamily:'Satoshi, sans-serif', fontSize:'36px', fontWeight:'700', textAlign:'center', color:'#1e293b', marginBottom:'40px'}}>
              Why Colleges Choose the <span style={{color:'#0056d2'}}>Engloray</span> Campus Takeover Model?
            </h2>
            <div style={{overflowX:'auto', borderRadius:'16px', border:'1px solid #cbd5e1', boxShadow:'0 4px 12px #0000000a'}}>
              <table style={{width:'100%', borderCollapse:'collapse', background:'#fff', minWidth:'600px'}}>
                <thead>
                  <tr style={{background:'#f8fafc', borderBottom:'1px solid #cbd5e1'}}>
                    <th style={{padding:'20px', textAlign:'center', fontSize:'16px', fontWeight:'700', color:'#475569', borderRight:'1px solid #cbd5e1'}}>Academic Metric</th>
                    <th style={{padding:'20px', textAlign:'center', fontSize:'16px', fontWeight:'700', color:'#475569'}}>Traditional College Model</th>
                    <th style={{padding:'20px', textAlign:'center', fontSize:'16px', fontWeight:'700', color:'#0056d2', background:'#e8f0fe'}}>Engloray Takeover Model</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { p: "Curriculum Alignment", t: "Theoretical syllabus updated once in 5-10 years", e: "Continuously aligned with active production stacks & AI tools" },
                    { p: "Lab Infrastructure", t: "Standard computing systems with basic local compilers", e: "Co-branded Sandbox Coding Labs with live Cloud Dev accounts" },
                    { p: "Learning Mode", t: "Rote-memorization and manual book exercises", e: "Developer-led workshops, buildathons, & practical hackathons" },
                    { p: "Placement Support", t: "Outdated portal listings and local company visits", e: "Direct matching with 2500+ corporate hiring partners & paid internships" },
                    { p: "Project Output", t: "Theoretical project reports on paper or PDFs", e: "50+ deployed SaaS applications with custom domains & active users" }
                  ].map((row, index) => (
                    <tr key={index} style={{borderBottom:'1px solid #e2e8f0'}}>
                      <td style={{padding:'18px 20px', fontSize:'15px', fontWeight:'700', color:'#1e293b', borderRight:'1px solid #e2e8f0'}}>{row.p}</td>
                      <td style={{padding:'18px 20px', fontSize:'14px', color:'#64748b'}}>{row.t}</td>
                      <td style={{padding:'18px 20px', fontSize:'14px', color:'#1e293b', fontWeight:'600', background:'#f0f4f9'}}>{row.e}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CERTIFICATE TABLET SECTION */}
        <section className="certificate-section" data-astro-cid-qvveo2su>
          <div className="certificate-wrapper" data-astro-cid-qvveo2su>
            <div className="certificate-left" data-astro-cid-qvveo2su>
              <div className="tablet-frame" data-astro-cid-qvveo2su>
                <div className="tablet-screen" data-astro-cid-qvveo2su>
                  <div className="cert-track" style={{ transform: `translateX(-${(activeCert * 100) / certs.length}%)`, width: `${certs.length * 100}%`, display: 'flex' }} data-astro-cid-qvveo2su>
                    {certs.map((cert, i) => (
                      <img key={i} src={cert.image} alt="Cert Preview" className="cert-image" style={{ width: `${100 / certs.length}%` }} data-astro-cid-qvveo2su />
                    ))}
                  </div>
                  <div className="carousel-dots" data-astro-cid-qvveo2su>
                    {certs.map((_, i) => (
                      <span key={i} className={`dot ${i === activeCert ? 'active' : ''}`} onClick={() => setActiveCert(i)} data-astro-cid-qvveo2su></span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="certificate-right" data-astro-cid-qvveo2su>
              <span className="cert-badge" data-astro-cid-qvveo2su>Accredited Certification</span>
              <h2 className="cert-heading" data-astro-cid-qvveo2su>
                Certifications Awarded During <span className="cert-heading-red" data-astro-cid-qvveo2su>Campus Programs</span>
              </h2>
              <ul className="cert-list" data-astro-cid-qvveo2su>
                {certs.map((cert, i) => (
                  <li className="cert-item" key={i} data-astro-cid-qvveo2su>
                    <span className="cert-icon" data-astro-cid-qvveo2su>✓</span>
                    <div className="cert-text-wrap" data-astro-cid-qvveo2su>
                      <h4 className="cert-text" data-astro-cid-qvveo2su>{cert.title}</h4>
                      <p className="cert-subtext" data-astro-cid-qvveo2su>{cert.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SCHOLARSHIP CTA */}
        <section className="usf-section" data-astro-cid-qvveo2su style={{background:'#0056d2', padding:'32px 32px', color:'#fff', textAlign:'center'}}>
          <div style={{maxWidth:'800px', margin:'0 auto'}}>
            <h2 style={{fontSize:'36px', fontWeight:'700', marginBottom:'16px', color:'#fff'}}>Elevate Your College’s Placement Metrics & Tech Infrastructure</h2>
            <p style={{fontSize:'16px', marginBottom:'32px', color:'#e8f0fe', lineHeight:'1.5'}}>Partner with Engloray to establish modern sandbox labs, conduct developer workshops, and secure paid internships for your students.</p>
            <button className="fixed-apply-button" onClick={scrollToApply} style={{background:'#ffffff', color:'#0056d2', padding:'14px 28px', border:'none', borderRadius:'8px', fontSize:'16px', fontWeight:'700', cursor:'pointer'}}>
              Schedule a Lab Demo & Consultation
            </button>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="testimonials-section" data-astro-cid-zl3frkeu>
          <div className="testimonials-container" data-astro-cid-zl3frkeu>
            <div className="testimonials-wrapper" data-astro-cid-zl3frkeu>
              <h2 className="testimonials-heading" data-astro-cid-zl3frkeu>
                Success Stories from <span className="testimonials-highlight" data-astro-cid-zl3frkeu>Partner Campuses</span>
              </h2>

              <div className="testimonials-carousel-wrap" data-astro-cid-zl3frkeu>
                <button type="button" className="carousel-btn carousel-btn--prev testimonials-btn-prev" onClick={() => handleTestimonialChange((activeTestimonial - 1 + testimonials.length) % testimonials.length)} data-astro-cid-zl3frkeu>
                  <span data-astro-cid-zl3frkeu>‹</span>
                </button>

                <div className="carousel" data-astro-cid-zl3frkeu>
                  <div className="carousel__track" data-astro-cid-zl3frkeu style={{justifyContent: 'center'}}>
                    {(() => {
                      const leftIdx = (activeTestimonial - 1 + testimonials.length) % testimonials.length;
                      const activeIdx = activeTestimonial;
                      const rightIdx = (activeTestimonial + 1) % testimonials.length;
                      return [leftIdx, activeIdx, rightIdx].map((idx) => {
                        const t = testimonials[idx];
                        const isActive = idx === activeTestimonial;
                        const isNeighbor = !isActive;
                        return (
                          <div 
                            className="carousel__slide" 
                            key={idx} 
                            data-active={isActive ? "true" : undefined} 
                            data-neighbor={isNeighbor ? "true" : undefined} 
                            data-astro-cid-zl3frkeu 
                            style={{
                              display: 'block', 
                              cursor: isNeighbor ? 'pointer' : 'default'
                            }}
                            onClick={() => {
                              if (isNeighbor) {
                                handleTestimonialChange(idx);
                              }
                            }}
                          >
                            <div className="testimonial-card" data-astro-cid-zl3frkeu>
                              <div className="testimonial-card-header" data-astro-cid-zl3frkeu>
                                <div className="testimonial-avatar" data-astro-cid-zl3frkeu>
                                  <img src={t.avatar} alt={t.name} className="testimonial-avatar-image" data-astro-cid-zl3frkeu />
                                </div>
                                <div className="testimonial-info" data-astro-cid-zl3frkeu>
                                  <h3 className="testimonial-name" data-astro-cid-zl3frkeu>{t.name}</h3>
                                  <p className="testimonial-role" data-astro-cid-zl3frkeu>{t.role}</p>
                                </div>
                              </div>
                              <p className="testimonial-quote" data-astro-cid-zl3frkeu>
                                "{t.text}"
                              </p>
                            </div>
                          </div>
                        );
                      });
                    })()}
                  </div>
                </div>

                <button type="button" className="carousel-btn carousel-btn--next testimonials-btn-next" onClick={() => handleTestimonialChange((activeTestimonial + 1) % testimonials.length)} data-astro-cid-zl3frkeu>
                  <span data-astro-cid-zl3frkeu>›</span>
                </button>

                <div className="testimonials-mobile-arrows" data-astro-cid-zl3frkeu>
                  <button type="button" className="carousel-btn carousel-btn--prev-mobile" onClick={() => handleTestimonialChange((activeTestimonial - 1 + testimonials.length) % testimonials.length)} data-astro-cid-zl3frkeu>
                    <span data-astro-cid-zl3frkeu>‹</span>
                  </button>
                  <button type="button" className="carousel-btn carousel-btn--next-mobile" onClick={() => handleTestimonialChange((activeTestimonial + 1) % testimonials.length)} data-astro-cid-zl3frkeu>
                    <span data-astro-cid-zl3frkeu>›</span>
                  </button>
                </div>
              </div>

              <div className="testimonials-actions" data-astro-cid-zl3frkeu>
                <div className="testimonials-divider" data-astro-cid-zl3frkeu></div>
                <button type="button" className="button-base button-md button-primary testimonials-button" onClick={scrollToApply} data-astro-cid-f4ytvlcn>
                  Bring Engloray to Your College
                </button>
                <div className="testimonials-divider" data-astro-cid-zl3frkeu></div>
              </div>
            </div>
          </div>
        </section>

        {/* EAT ASSESSMENT PREPARATION */}
        <section className="np-section" data-astro-cid-qvveo2su style={{background:'#f8fafc', padding:'28px 32px'}}>
          <div style={{maxWidth:'1200px', margin:'0 auto'}}>
            <h2 style={{fontFamily:'Satoshi, sans-serif', fontSize:'36px', fontWeight:'700', textAlign:'center', color:'#1e293b', marginBottom:'48px'}}>
              Our 3-Step Campus Takeover Model
            </h2>
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px'}}>
              <div style={{background:'#fff', padding:'32px', borderRadius:'16px', border:'1px solid #e2e8f0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                <div style={{ marginBottom: '20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '12px', background: '#e8f0fe', color: '#0056d2' }}>
                  <Laptop size={28} />
                </div>
                <h3 style={{fontSize:'20px', fontWeight:'700', color:'#1e293b', marginBottom:'12px', textAlign:'left'}}>Lab Setup & Integration</h3>
                <p style={{fontSize:'14px', color:'#64748b', lineHeight:'1.5', textAlign:'left'}}>Sandbox Infrastructure: We transform standard college computing facilities into co-branded coding labs with cloud platforms.</p>
              </div>
              <div style={{background:'#fff', padding:'32px', borderRadius:'16px', border:'1px solid #e2e8f0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                <div style={{ marginBottom: '20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '12px', background: '#e8f0fe', color: '#0056d2' }}>
                  <Code2 size={28} />
                </div>
                <h3 style={{fontSize:'20px', fontWeight:'700', color:'#1e293b', marginBottom:'12px', textAlign:'left'}}>Developer-Led Workshops</h3>
                <p style={{fontSize:'14px', color:'#64748b', lineHeight:'1.5', textAlign:'left'}}>Specialized Tech Sprints: We conduct intensive, practical workshops covering AI Tools, Full-Stack Dev, UI/UX, and SaaS building.</p>
              </div>
              <div style={{background:'#fff', padding:'32px', borderRadius:'16px', border:'1px solid #e2e8f0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                <div style={{ marginBottom: '20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '12px', background: '#e8f0fe', color: '#0056d2' }}>
                  <Building2 size={28} />
                </div>
                <h3 style={{fontSize:'20px', fontWeight:'700', color:'#1e293b', marginBottom:'12px', textAlign:'left'}}>Corporate Placement Pipeline</h3>
                <p style={{fontSize:'14px', color:'#64748b', lineHeight:'1.5', textAlign:'left'}}>Direct Career Opportunities: We link upskilled student groups with paid internships and hiring options across our corporate networks.</p>
              </div>
            </div>
          </div>
        </section>



        {/* FINAL HERO CTA SECTION */}
        <section className="build-it-section" data-astro-cid-qvveo2su style={{background:'#f0f4f9', padding:'32px 32px', textAlign:'center'}}>
          <div style={{maxWidth:'600px', margin:'0 auto'}}>
            <h2 style={{fontFamily:'Satoshi, sans-serif', fontSize:'32px', fontWeight:'700', color:'#1e293b', marginBottom:'16px'}}>Ready to Transform Your Campus Tech Ecosystem?</h2>
            <p style={{fontSize:'15px', color:'#475569', marginBottom:'32px', lineHeight:'1.5'}}>Partner with Engloray to bring top-tier developer workshops, co-branded sandbox labs, and direct corporate internships to your college.</p>
            <button className="button-base button-md button-primary" onClick={scrollToApply} style={{border:'none', cursor:'pointer', padding:'12px 24px', background:'#0056d2', color:'#fff', fontWeight:'700', borderRadius:'6px'}}>
              Schedule a Call
            </button>
          </div>
        </section>

        {/* FAQ ACCORDION SECTION */}
        <section className="faqnewsection" data-astro-cid-l47k3pvc>
          <div className="faqnewsection__container" data-astro-cid-l47k3pvc>
            <div className="faqnewsection__heading-wrapper" data-astro-cid-l47k3pvc>
              <h2 className="faqnewsection__heading" data-astro-cid-l47k3pvc>Frequently Asked Questions</h2>
            </div>

            <div className="faqnewsection__tabs" data-astro-cid-l47k3pvc>
              {[
                { id: 'general', label: 'Partnership FAQs' },
                { id: 'eat', label: 'Lab & Workshop Setup' },
                { id: 'curriculum', label: 'Curriculum & Syllabus' },
                { id: 'placements', label: 'Placements & Internships' }
              ].map((tab) => (
                <button key={tab.id} className={`faqnewsection__tab ${faqTab === tab.id ? 'faqnewsection__tab--active' : ''}`} onClick={() => { setFaqTab(tab.id); setOpenFaqId(null); }} data-astro-cid-l47k3pvc>
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="faqnewsection__content" data-astro-cid-l47k3pvc style={{width:'100%', maxWidth:'800px'}}>
              {faqs[faqTab].map((faq, idx) => {
                const isOpen = openFaqId === idx;
                return (
                  <div className={`faqnewsection__item ${isOpen ? 'is-open' : ''}`} key={idx} data-astro-cid-l47k3pvc>
                    <summary className="faqnewsection__summary" onClick={() => setOpenFaqId(isOpen ? null : idx)} data-astro-cid-l47k3pvc>
                      <div className="faqnewsection__question-container" data-astro-cid-l47k3pvc>
                        <h4 className="faqnewsection__q" data-astro-cid-l47k3pvc>{faq.q}</h4>
                      </div>
                      <div className="faqnewsection__icon-container" data-astro-cid-l47k3pvc>
                        <span className="faqnewsection__icon faqnewsection__icon-plus" style={{ opacity: isOpen ? 0 : 1 }} data-astro-cid-l47k3pvc>+</span>
                        <span className="faqnewsection__icon faqnewsection__icon-minus" style={{ opacity: isOpen ? 1 : 0 }} data-astro-cid-l47k3pvc>−</span>
                      </div>
                    </summary>
                    {isOpen && (
                      <div className="faqnewsection__answer" data-astro-cid-l47k3pvc>
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      <SubFooterTwo />

      {/* Floating Sticky apply banner for mobile/desktop scroll */}
      {stickyVisible && (
        <div style={{ position: 'fixed', bottom: '16px', left: '50%', transform: 'translateX(-50%)', zIndex: 100, width: '90%', maxWidth: '400px' }}>
          <button onClick={scrollToApply} style={{ width: '100%', padding: '14px 20px', background: '#0056d2', color: '#fff', border: 'none', borderRadius: '100px', fontSize: '15px', fontWeight: '700', boxShadow: '0 8px 30px rgba(0, 86, 210, 0.4)', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            <span>Inquire for Campus Partnership</span>
            <span>→</span>
          </button>
        </div>
      )}
    </div>
  );
}
