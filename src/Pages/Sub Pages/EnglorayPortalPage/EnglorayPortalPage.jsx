import React, { useState, useEffect, useRef } from 'react';
import './EnglorayPortalPage.css';

// Import Assets
import englorayLogo from '../../../assets/3.png';
import cartoonMale1 from '../../../assets/cartoon_male_1.png';
import cartoonMale2 from '../../../assets/cartoon_male_2.png';
import cartoonMale3 from '../../../assets/cartoon_male_3.png';
import cartoonMale4 from '../../../assets/cartoon_male_4.png';
import cartoonFemale1 from '../../../assets/cartoon_female_1.png';
import cartoonFemale2 from '../../../assets/cartoon_female_2.png';
import cartoonFemale3 from '../../../assets/cartoon_female_3.png';
import cartoonFemale4 from '../../../assets/cartoon_female_4.png';

// Import Backgrounds
import mentorBg from '../../../assets/mentor.jpeg';
import corporateBg from '../../../assets/corporate.jpeg';
import eLearningBg from '../../../assets/eLearning.png';
import softwareBg from '../../../assets/Software-Developer.png';
import expertiseBg from '../../../assets/OurExperise&Learning.png';
import experienceBeyondClassroom from '../../../assets/experience_beyond_classroom.png';

export default function EnglorayPortalPage() {


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

  // 5. University Tabs & Carousel
  const [activeRegion, setActiveRegion] = useState('all');
  const uniTrackRef = useRef(null);

  const universityCards = [
    { name: "SMR University", region: "telangana", city: "Hyderabad", status: "admissions-open", badge: "Admissions Open", img: "https://d14qv6cm1t62pm.cloudfront.net/niat/state-icons-telangana.png" },
    { name: "Aurora Deemed University", region: "telangana", city: "Hyderabad", status: "admissions-open", badge: "Admissions Open", img: "https://d14qv6cm1t62pm.cloudfront.net/niat/state-icons-telangana.png" },
    { name: "GMR Institute of Technology", region: "andhra", city: "Vizianagaram", status: "admissions-open", badge: "Admissions Open", img: "https://d14qv6cm1t62pm.cloudfront.net/niat/state-icons-andhra-pradesh.png" },
    { name: "Annamacharya University", region: "andhra", city: "Kadapa", status: "admissions-open", badge: "Admissions Open", img: "https://d14qv6cm1t62pm.cloudfront.net/niat/state-icons-andhra-pradesh.png" },
    { name: "Chalapathi Institute of Technology", region: "andhra", city: "Guntur", status: "admissions-open", badge: "Admissions Open", img: "https://d14qv6cm1t62pm.cloudfront.net/niat/state-icons-andhra-pradesh.png" },
    { name: "Yenepoya University", region: "karnataka", city: "Mangalore", status: "admissions-open", badge: "Admissions Open", img: "https://d14qv6cm1t62pm.cloudfront.net/niat/state-icons-india.png" },
    { name: "Geeta University", region: "haryana", city: "Panipat", status: "admissions-open", badge: "Admissions Open", img: "https://d14qv6cm1t62pm.cloudfront.net/niat/state-icons-haryana.png" },
    { name: "Vivekananda Global University", region: "rajasthan", city: "Jaipur", status: "admissions-open", badge: "Admissions Open", img: "https://d14qv6cm1t62pm.cloudfront.net/niat/state-icons-india.png" },
    { name: "Noida International University", region: "delhi", city: "Delhi Noida", status: "admissions-open", badge: "Admissions Open", img: "https://d14qv6cm1t62pm.cloudfront.net/niat/state-icons-india.png" }
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
    { title: "Industry Ready Certificate", desc: "Recognized by top tech firms as validation of production-ready development capabilities." },
    { title: "AI and Cloud Automation Certs", desc: "Showcases expertise in advanced generative models, workflow pipelines, and systems deployment." },
    { title: "Product Builder Capstone Cert", desc: "Credentials awarded for completing hackathons and launching active revenue-generating applications." }
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
    { name: "Chenna Kiran Kumar", role: "Secured Internship at TechWave", text: "The confidence I gained from real-time practice and Engloray's direct support helped me feel ready while applying and attending interview rounds.", avatar: cartoonFemale4 }
  ];

  const handleTestimonialChange = (index) => {
    setActiveTestimonial(index);
  };

  // 8. FAQ State
  const [faqTab, setFaqTab] = useState('general');
  const [openFaqId, setOpenFaqId] = useState(null);

  const faqs = {
    general: [
      { q: "What is the main focus of the Engloray Portal?", a: "Engloray Portal offers specialized project-based courses, internships, and mentor-guided pathways to help students bridge the gap between academic syllabus and practical corporate expectations." },
      { q: "Is the UGC-recognized degree awarded by Engloray?", a: "No. Engloray is not a university or degree-awarding body. Students receive their standard UGC-recognized/AICTE-approved degree from the enrolled collaborating university upon completing credits, and separately earn their Industry-Ready Certificate from Engloray." },
      { q: "How do workshops fit into the upskilling programs?", a: "Workshops are hands-on sprints integrated into our core courses, allowing students to learn topics like AI Tools, Graphic Design, and UI/UX wireframing in intensive 3-6 hour practical sessions." }
    ],
    eat: [
      { q: "How do workshops fit into the upskilling programs?", a: "Workshops are hands-on sprints integrated into our core courses, allowing students to learn topics like AI Tools, Graphic Design, and UI/UX wireframing in intensive 3-6 hour practical sessions." },
      { q: "Who are the instructors guiding us?", a: "Our instructors are seasoned developers and designers—like Surya (Graphic Design), Priya (UI/UX), Ashwin (AI tools), and Foujaan (Full Stack)—who currently build real production applications." },
      { q: "Can I transition from workshops to a full internship?", a: "Yes, students demonstrating progress and building solid project portfolios during the workshop tracks are directly matched with corporate partners for paid internships." }
    ],
    curriculum: [
      { q: "Will I build real-world applications during upskilling?", a: "Absolutely. The program emphasizes hands-on, project-based learning where students build 50+ real-world applications mimicking platforms like Netflix, Amazon, and WhatsApp, using production-ready cloud architectures." },
      { q: "What specialization tracks are offered?", a: "Specialization tracks include Full-Stack Web Development, Data Science & Analytics, AI Engineering, Cloud Systems, and Creative UI/UX Designing." }
    ],
    placements: [
      { q: "Does Engloray guarantee placements or internships?", a: "We provide comprehensive placement support including direct connections to 2500+ corporate hiring partners, mock interviews, and assessment preparation. While outcomes depend on student effort and performance, over 200+ students have secured internships with stipends from their first year." },
      { q: "What is the typical stipend range for internships?", a: "Students in their first and second years have secured stipend packages with average monthly payouts of ₹20,000, with top performers securing placements up to ₹80 LPA." }
    ]
  };

  // 9. Lead Capture Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    degree: 'B.Tech',
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

      {/* Header Announcement */}
      <header className="header" data-astro-cid-2w66rqv5>
        <div className="header-announcement-container" data-astro-cid-2w66rqv5>
          <div className="nat-banner" data-astro-cid-2w66rqv5>
            <div className="nat-banner-text" data-astro-cid-2w66rqv5>
              Admissions open for Engloray Courses, Internships, & Bootcamps. Next cohort starting next week!
            </div>
            <button className="nat-banner-btn" onClick={scrollToApply} data-astro-cid-2w66rqv5 style={{border:'none', cursor:'pointer'}}>
              Apply Now
            </button>
          </div>
        </div>

        {/* Main Nav */}
        <div className="header-main-container" data-astro-cid-2w66rqv5>
          <div className="header-main" data-astro-cid-2w66rqv5>
            <div className="header-main-content" data-astro-cid-2w66rqv5>
              <div className="header-logo-wrapper" data-astro-cid-2w66rqv5>
                <div className="header-logo" data-astro-cid-2w66rqv5>
                  <img src={englorayLogo} alt="Engloray Logo" className="header-logo-svg" data-astro-cid-2w66rqv5 />
                </div>
              </div>
              <div className="header-apply-container" id="header-apply-container" data-astro-cid-2w66rqv5>
                <button className="fixed-apply-button" onClick={scrollToApply} data-astro-cid-2w66rqv5>
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Root */}
      <main id="astro-root" className="main-container">
        
        {/* HERO SECTION */}
        <section ref={heroRef} className="hero-section" data-astro-cid-dvh7tqhi>
          <div className="hero-background" data-astro-cid-dvh7tqhi>
            <div className="hero-slideshow" data-astro-cid-dvh7tqhi>
              <div className="hero-slide active" style={{ backgroundImage: `url(${mentorBg})` }} data-astro-cid-dvh7tqhi></div>
            </div>
            <div className="hero-overlay" data-astro-cid-dvh7tqhi></div>

            <div className="hero-content" data-astro-cid-dvh7tqhi>
              <div className="hero-info" data-astro-cid-dvh7tqhi>
                <div className="hero-info-content" data-astro-cid-dvh7tqhi>
                  <h2 className="hero-heading" data-astro-cid-dvh7tqhi>
                    <span data-astro-cid-dvh7tqhi>Become an Expert in</span> <br data-astro-cid-dvh7tqhi />
                    <span className="hero-highlight-wrapper" data-astro-cid-dvh7tqhi>
                      <span className="hero-highlight active" data-astro-cid-dvh7tqhi>AI & Machine Learning</span>
                    </span>
                  </h2>
                  <ul className="hero-list" data-astro-cid-dvh7tqhi>
                    <li className="hero-list-item" data-astro-cid-dvh7tqhi>
                      <span className="hero-check" data-astro-cid-dvh7tqhi></span>
                      <span data-astro-cid-dvh7tqhi>Project-Based Learning with Live Cloud & SaaS Deployments</span>
                    </li>
                    <li className="hero-list-item" data-astro-cid-dvh7tqhi>
                      <span className="hero-check" data-astro-cid-dvh7tqhi></span>
                      <span data-astro-cid-dvh7tqhi>Hands-on Sprints & Specialized Certification Workshops</span>
                    </li>
                    <li className="hero-list-item" data-astro-cid-dvh7tqhi>
                      <span className="hero-check" data-astro-cid-dvh7tqhi></span>
                      <span data-astro-cid-dvh7tqhi>Paid Internships & Placements with 2500+ Hiring Partners</span>
                    </li>
                  </ul>

                  <div className="hero-course-details-card" data-astro-cid-dvh7tqhi>
                    <div className="hero-course-details-item" data-astro-cid-dvh7tqhi>
                      <p className="hero-course-details-label" data-astro-cid-dvh7tqhi>Program Mode</p>
                      <p className="hero-course-details-value" data-astro-cid-dvh7tqhi>On-Campus Workshops & Online Sprints</p>
                    </div>
                    <div className="hero-course-details-divider" data-astro-cid-dvh7tqhi>
                      <div className="hero-course-details-divider-line" data-astro-cid-dvh7tqhi></div>
                    </div>
                    <div className="hero-course-details-item" data-astro-cid-dvh7tqhi>
                      <p className="hero-course-details-label" data-astro-cid-dvh7tqhi>Admissions Status</p>
                      <p className="hero-course-details-value" data-astro-cid-dvh7tqhi>
                        <span data-astro-cid-dvh7tqhi>Cohort Commencing Soon</span> (Limited Slots Available)
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
                      <h3 style={{color: '#0056d2', fontSize: '24px', marginBottom: '12px'}}>Registration Successful!</h3>
                      <p style={{color: '#334155', fontSize: '15px', lineHeight: '1.5'}}>
                        Thank you for applying. An admissions counselor will reach out to you within 24 hours to guide you on courses, workshops, and internship tracks.
                      </p>
                      <div style={{marginTop: '24px', fontSize: '32px'}}>🚀</div>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} style={{display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px', background: '#fff', borderRadius: '12px'}}>
                      <h3 style={{fontSize: '20px', fontWeight: '700', color: '#1e293b', margin: '0 0 4px', textAlign: 'center'}}>Apply for Incubation & Internships</h3>
                      <p style={{fontSize: '13px', color: '#64748b', margin: '0 0 8px', textAlign: 'center'}}>Fill details to secure your seat and placement support</p>
                      
                      {formError && <p style={{color: '#ef4444', fontSize: '13px', margin: '0', textAlign: 'center'}}>{formError}</p>}

                      <div className="form-group" style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
                        <label style={{fontSize: '13px', fontWeight: '600', color: '#475569'}}>Full Name *</label>
                        <input type="text" name="name" value={formData.name} onChange={handleFormChange} placeholder="Enter your full name" style={{padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px'}} />
                      </div>

                      <div className="form-group" style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
                        <label style={{fontSize: '13px', fontWeight: '600', color: '#475569'}}>Email Address *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleFormChange} placeholder="Enter your email" style={{padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px'}} />
                      </div>

                      <div className="form-group" style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
                        <label style={{fontSize: '13px', fontWeight: '600', color: '#475569'}}>Mobile Number *</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleFormChange} placeholder="Enter 10 digit number" style={{padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px'}} />
                      </div>

                      <div className="form-group" style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
                        <label style={{fontSize: '13px', fontWeight: '600', color: '#475569'}}>College / School Name *</label>
                        <input type="text" name="college" value={formData.college} onChange={handleFormChange} placeholder="Current institution name" style={{padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px'}} />
                      </div>

                      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px'}}>
                        <div className="form-group" style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
                          <label style={{fontSize: '13px', fontWeight: '600', color: '#475569'}}>Degree</label>
                          <select name="degree" value={formData.degree} onChange={handleFormChange} style={{padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px', background: '#fff'}}>
                            <option>B.Tech</option>
                            <option>B.Sc</option>
                            <option>BCA</option>
                            <option>12th / Inter</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div className="form-group" style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
                          <label style={{fontSize: '13px', fontWeight: '600', color: '#475569'}}>Passing Year</label>
                          <select name="year" value={formData.year} onChange={handleFormChange} style={{padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px', background: '#fff'}}>
                            <option>2025</option>
                            <option>2026</option>
                            <option>2027</option>
                            <option>2028</option>
                            <option>2029</option>
                          </select>
                        </div>
                      </div>

                      <button type="submit" style={{marginTop: '8px', padding: '12px', background: '#0056d2', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '15px', fontWeight: '700', cursor: 'pointer', transition: 'background 0.2s'}}>
                        Register for Incubation Sprints
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
                    Experience Beyond the <span className="journey-highlight" data-astro-cid-moggeisx>Classroom</span>
                  </h2>
                  <div className="journey-features-list" data-astro-cid-moggeisx>
                    <div className="journey-feature" data-astro-cid-moggeisx>
                      <div className="journey-feature-icon" data-astro-cid-moggeisx>
                        {/* Embedded SVG icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none"><path d="M14.2356 29.6161V29.3073C14.2356 29.1551 14.359 29.0316 14.5113 29.0316H18.8908V23.5445L18.4482 23.4557C17.434 23.252 16.5258 22.8198 15.7487 22.1716C14.9796 21.5296 14.4252 20.7179 14.1011 19.7586L13.9896 19.4287L13.6438 19.3876C12.2538 19.2225 11.1134 18.6488 10.1581 17.6347C9.21038 16.6291 8.75 15.4688 8.75 14.087V12.7785C8.75 12.392 8.88692 12.0673 9.16841 11.7855C9.44991 11.504 9.77489 11.3671 10.1611 11.3671H13.7575V9.87291C13.7575 9.25265 14.2601 8.75 14.8804 8.75H23.761C24.3813 8.75 24.884 9.25265 24.884 9.87291V11.3671H28.4803C28.8668 11.3671 29.1915 11.504 29.4733 11.7855C29.7548 12.067 29.8917 12.392 29.8917 12.7782V14.0867C29.8917 15.4685 29.4314 16.6288 28.484 17.634C27.5283 18.6485 26.3882 19.2219 24.9982 19.387L24.6524 19.4281L24.5409 19.758C24.2165 20.7173 23.6621 21.529 22.893 22.171C22.1162 22.8195 21.2077 23.2514 20.1935 23.4551L19.7506 23.5439V29.031H24.1301C24.2824 29.031 24.4058 29.1545 24.4058 29.3067V29.6154C24.4058 29.7677 24.2824 29.8911 24.1301 29.8911H14.511C14.3587 29.8911 14.2353 29.7677 14.2353 29.6154L14.2356 29.6161ZM14.6427 17.9872C14.6427 19.2826 15.1012 20.3978 16.0057 21.302C16.9102 22.2066 18.0255 22.6654 19.3209 22.6654C20.6162 22.6654 21.7315 22.2066 22.636 21.302C23.5405 20.3975 23.999 19.2823 23.999 17.9872V10.1369C23.999 9.84626 23.7632 9.61041 23.4725 9.61041H15.1692C14.8785 9.61041 14.6427 9.84626 14.6427 10.1369V17.9875V17.9872ZM24.884 18.5159L25.5566 18.3643C26.5601 18.1379 27.3978 17.6264 28.0466 16.8432C28.6999 16.0547 29.0313 15.1273 29.0313 14.087V13.0876C29.0313 12.6125 28.6463 12.2272 28.1709 12.2272H24.8837V18.5159H24.884ZM9.6101 14.087C9.6101 15.1273 9.94152 16.0547 10.5949 16.8432C11.2439 17.6261 12.0817 18.1379 13.0848 18.3643L13.7575 18.5159V12.2272H10.45C9.98624 12.2272 9.6101 12.6033 9.6101 13.0671V14.087Z" fill="#0056d2" stroke="#0056d2" stroke-width="0.652475"/></svg>
                      </div>
                      <div className="journey-feature-content" data-astro-cid-moggeisx>
                        <p className="journey-feature-title" data-astro-cid-moggeisx>Win Hackathons & Buildathons</p>
                        <p className="journey-feature-description" data-astro-cid-moggeisx>Sharp team sprints that accelerate actual code execution.</p>
                      </div>
                    </div>

                    <div className="journey-feature" data-astro-cid-moggeisx>
                      <div className="journey-feature-icon" data-astro-cid-moggeisx>
                        <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none"><path d="M8.48828 31.6927V25.4506C8.48828 24.8791 8.6864 24.404 9.09367 23.9975C9.50171 23.5902 9.97795 23.3925 10.5494 23.3925H28.0898C28.6612 23.3925 29.1371 23.5906 29.5451 23.9986C29.9528 24.4063 30.1513 24.8825 30.1513 25.454V31.6931H8.48828V31.6927ZM10.5498 24.2558C10.218 24.2558 9.92308 24.375 9.69716 24.601C9.47085 24.8277 9.35198 25.1225 9.35198 25.4536V30.8294H29.2883V25.4536C29.2883 25.1222 29.1691 24.8276 28.9439 24.6017C28.7172 24.375 28.4224 24.2558 28.0905 24.2558H10.5498ZM14.9197 19.8116C13.1234 19.8116 11.6349 19.1963 10.3692 17.9306C9.10358 16.665 8.48828 15.1761 8.48828 13.3797C8.48828 11.5833 9.10358 10.0952 10.3692 8.82918C11.6352 7.56354 13.1238 6.94824 14.9197 6.94824H23.7194C25.5158 6.94824 27.0043 7.56354 28.27 8.82918C29.5356 10.0948 30.1509 11.5833 30.1509 13.3797C30.1509 15.1761 29.5356 16.6646 28.27 17.9302C27.0043 19.1959 25.5158 19.8112 23.7194 19.8112H14.9197V19.8116ZM14.9197 7.81156C13.3741 7.81156 12.0456 8.35638 10.9708 9.43114C9.89603 10.5059 9.35122 11.8344 9.35122 13.3801C9.35122 14.9258 9.89603 16.2543 10.9708 17.329C12.0456 18.4038 13.3741 18.9486 14.9197 18.9486H23.7194C25.2651 18.9486 26.5936 18.4038 27.6684 17.329C28.7432 16.2543 29.288 14.9258 29.288 13.3801C29.288 11.8344 28.7432 10.5059 27.6684 9.43114C26.5936 8.35638 25.2651 7.81156 23.7194 7.81156H14.9197ZM23.7194 13.9893C23.5328 13.9893 23.4017 13.9379 23.2817 13.8178C23.1617 13.6978 23.1106 13.5668 23.1106 13.3797C23.1106 13.1926 23.1621 13.062 23.2821 12.942C23.4025 12.8216 23.5335 12.7705 23.7202 12.7705C23.9069 12.7705 24.0376 12.8219 24.1576 12.942C24.278 13.0627 24.3294 13.1938 24.3294 13.3805C24.3294 13.5672 24.278 13.6978 24.158 13.8178C24.0376 13.9379 23.9065 13.9893 23.7194 13.9893ZM14.9194 13.9893C14.7327 13.9893 14.6016 13.9379 14.4816 13.8178C14.3616 13.6975 14.3102 13.5664 14.3102 13.3797C14.3102 13.193 14.3616 13.0623 14.4816 12.9423C14.6024 12.8219 14.7334 12.7705 14.9201 12.7705C15.1068 12.7705 15.2375 12.8219 15.3575 12.942C15.4775 13.0623 15.5289 13.1934 15.5289 13.3805C15.5289 13.5675 15.4775 13.6982 15.3575 13.8182C15.2375 13.9382 15.1064 13.9893 14.9194 13.9893Z" fill="#0056d2" stroke="#0056d2" stroke-width="0.681341"/></svg>
                      </div>
                      <div className="journey-feature-content" data-astro-cid-moggeisx>
                        <p className="journey-feature-title" data-astro-cid-moggeisx>Build in Advanced Tech Labs</p>
                        <p className="journey-feature-description" data-astro-cid-moggeisx>Hands-on practice with API architectures, cloud nodes, and active platforms.</p>
                      </div>
                    </div>

                    <div className="journey-feature" data-astro-cid-moggeisx>
                      <div className="journey-feature-icon" data-astro-cid-moggeisx>
                        <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none"><path d="M9.37413 30.118C8.85875 30.118 8.43554 29.9455 8.0804 29.5903C7.72526 29.2352 7.55273 28.812 7.55273 28.2966V14.8695C7.55273 14.3541 7.72526 13.9309 8.0804 13.5757C8.43554 13.2206 8.85851 13.0481 9.37413 13.0481H15.3107V10.3439C15.3107 9.82848 15.4832 9.40527 15.8384 9.05013C16.1935 8.69499 16.6165 8.52246 17.1321 8.52246H21.5083C22.0237 8.52246 22.4469 8.69499 22.802 9.05013C23.1571 9.40527 23.3297 9.82824 23.3297 10.3439V13.0481H29.2665C29.7819 13.0481 30.2051 13.2206 30.5602 13.5757C30.9154 13.9309 31.0879 14.3538 31.0879 14.8695V28.2966C31.0879 28.812 30.9154 29.2352 30.5602 29.5903C30.2051 29.9455 29.7821 30.118 29.2665 30.118H9.37413ZM9.37413 13.9554C9.13623 13.9554 8.91528 14.0508 8.73513 14.2314C8.55547 14.4106 8.46012 14.6316 8.46012 14.8695V28.2966C8.46012 28.5345 8.55547 28.7552 8.73612 28.9356C8.91528 29.1153 9.13623 29.2109 9.37413 29.2109H29.2662C29.5042 29.2109 29.7251 29.1155 29.9052 28.9349C30.0849 28.7557 30.1803 28.5348 30.1803 28.2968V14.8695C30.1803 14.6316 30.0849 14.4106 29.9043 14.2305C29.7251 14.0508 29.5042 13.9554 29.2662 13.9554H9.37413ZM17.1321 9.43009C16.8942 9.43009 16.6732 9.52545 16.4931 9.70609C16.3134 9.88525 16.2178 10.1062 16.2178 10.3441V13.0483H22.4221V10.3441C22.4221 10.1062 22.3267 9.88525 22.1461 9.7051C21.9669 9.52545 21.7459 9.42984 21.508 9.42984H17.1319L17.1321 9.43009Z" fill="#0056d2" stroke="#0056d2" stroke-width="0.722497"/></svg>
                      </div>
                      <div className="journey-feature-content" data-astro-cid-moggeisx>
                        <p className="journey-feature-title" data-astro-cid-moggeisx>Start Early, Grow Faster</p>
                        <p className="journey-feature-description" data-astro-cid-moggeisx>200+ students in collaborating colleges secured paid internships early on.</p>
                      </div>
                    </div>

                    <div className="journey-feature" data-astro-cid-moggeisx>
                      <div className="journey-feature-icon" data-astro-cid-moggeisx>
                        <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none"><path d="M19.3203 32.5699C18.8304 32.5699 18.4124 32.4465 18.0426 32.1929C17.677 31.942 17.4287 31.6232 17.4287 31.2184L17.1512 30.8479H16.3257C15.8632 30.8479 15.475 30.6844 15.1385 30.3479C14.8019 30.0113 14.6385 29.6231 14.6385 29.1607V23.933L14.3692 23.7698C12.9486 22.9089 11.8151 21.7382 11 20.2905C10.1847 18.8426 9.77148 17.2713 9.77148 15.6201C9.77148 14.2907 10.0047 13.0481 10.4647 11.9267C10.9242 10.8066 11.625 9.77056 12.5479 8.8477C13.4708 7.92484 14.5068 7.2238 15.6269 6.7645C16.7483 6.30452 17.9909 6.07129 19.3203 6.07129C20.6497 6.07129 21.8923 6.30452 23.0138 6.7645C24.1339 7.22403 25.1699 7.92484 26.0927 8.8477C27.0156 9.77056 27.7166 10.8066 28.1759 11.9267C28.6359 13.0481 28.8691 14.2907 28.8691 15.6201C28.8691 17.3008 28.4563 18.8793 27.6419 20.3113C26.8269 21.7447 25.6929 22.9084 24.2716 23.7698L24.0024 23.933V29.1607C24.0024 29.6231 23.8389 30.0113 23.5024 30.3479C23.1658 30.6844 22.7776 30.8479 22.3152 30.8479H21.4896L21.357 31.2184C21.2121 31.6232 20.9639 31.9418 20.5981 32.1929C20.2284 32.4465 19.8103 32.5699 19.3203 32.5699ZM15.7664 29.7197H22.8742V27.1962H15.7664V29.7197ZM15.7664 26.9898H22.8742V24.4203H15.7664V26.9898ZM19.6542 18.1416V23.2921H22.7423L22.8572 23.2369C24.2893 22.5475 25.4722 21.5193 26.3729 20.1814C27.2808 18.833 27.741 17.2984 27.741 15.6201C27.741 13.2804 26.9177 11.2708 25.2935 9.64668C23.6694 8.02256 21.6598 7.19921 19.3201 7.19921C16.9804 7.19921 14.9708 8.02256 13.3466 9.64668C11.7228 11.2706 10.8992 13.2804 10.8992 15.6201C10.8992 17.2984 11.3594 18.833 12.2673 20.1814C13.168 21.5193 14.3509 22.5473 15.7829 23.2369L15.8979 23.2921H18.986V18.1416L16.0097 15.1653L16.4748 14.7002L19.3201 17.5454L22.1654 14.7002L22.6305 15.1653L19.6542 18.1416Z" fill="#0056d2" stroke="#0056d2" stroke-width="0.658544"/></svg>
                      </div>
                      <div className="journey-feature-content" data-astro-cid-moggeisx>
                        <p className="journey-feature-title" data-astro-cid-moggeisx>Be a Product Innovator</p>
                        <p className="journey-feature-description" data-astro-cid-moggeisx>Don't stop at textbook assignments. Build applications that actual users interact with.</p>
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
              <h2 className="outcomes-heading" data-astro-cid-ybotxm6t>Delivering <span data-astro-cid-ybotxm6t>Outcomes</span> That Matter</h2>
              <p className="outcomes-subtext" data-astro-cid-ybotxm6t>From hands-on project sprints to active career breakthroughs, here is the impact we create.</p>
            </div>

            <div className="outcomes-carousel-wrapper" data-astro-cid-ybotxm6t>
              <div className="oc-slider-window" data-astro-cid-ybotxm6t style={{overflow:'hidden'}}>
                <div className="outcomes-grid" id="outcomes-grid" data-astro-cid-ybotxm6t>
                  <div className="outcome-card" data-astro-cid-ybotxm6t>
                    <div className="outcome-icon" data-astro-cid-ybotxm6t>
                      <img src="https://d14qv6cm1t62pm.cloudfront.net/niat/outcomes-ai-projects.png" alt="AI Projects" width="36" height="36" data-astro-cid-ybotxm6t />
                    </div>
                    <div className="outcome-number" data-astro-cid-ybotxm6t>1200+</div>
                    <div className="outcome-divider" data-astro-cid-ybotxm6t></div>
                    <div className="outcome-label" data-astro-cid-ybotxm6t>Production-Grade Projects Built</div>
                  </div>

                  <div className="outcome-card" data-astro-cid-ybotxm6t>
                    <div className="outcome-icon" data-astro-cid-ybotxm6t>
                      <img src="https://d14qv6cm1t62pm.cloudfront.net/niat/outcomes-startups.png" alt="Startups" width="36" height="36" data-astro-cid-ybotxm6t />
                    </div>
                    <div className="outcome-number" data-astro-cid-ybotxm6t>20+</div>
                    <div className="outcome-divider" data-astro-cid-ybotxm6t></div>
                    <div className="outcome-label" data-astro-cid-ybotxm6t>SaaS Startups Launched</div>
                  </div>

                  <div className="outcome-card" data-astro-cid-ybotxm6t>
                    <div className="outcome-icon" data-astro-cid-ybotxm6t>
                      <img src="https://d14qv6cm1t62pm.cloudfront.net/niat/outcomes-internships.png" alt="Internships" width="36" height="36" data-astro-cid-ybotxm6t />
                    </div>
                    <div className="outcome-number" data-astro-cid-ybotxm6t>200+</div>
                    <div className="outcome-divider" data-astro-cid-ybotxm6t></div>
                    <div className="outcome-label" data-astro-cid-ybotxm6t>Students Secured Internships with Stipends</div>
                  </div>

                  <div className="outcome-card" data-astro-cid-ybotxm6t>
                    <div className="outcome-icon" data-astro-cid-ybotxm6t>
                      <img src="https://d14qv6cm1t62pm.cloudfront.net/niat/outcomes-companies.png" alt="Companies" width="36" height="36" data-astro-cid-ybotxm6t />
                    </div>
                    <div className="outcome-number" data-astro-cid-ybotxm6t>2500+</div>
                    <div className="outcome-divider" data-astro-cid-ybotxm6t></div>
                    <div className="outcome-label" data-astro-cid-ybotxm6t>Hiring Partners in Corporate Network</div>
                  </div>
                </div>
              </div>
            </div>
            <p className="outcomes-disclaimer" data-astro-cid-ybotxm6t>
              <strong>Disclaimer:</strong> Outcomes are cumulative across cohorts and include placements, internships, and corporate hackathon sponsorships.
            </p>
          </div>
        </section>

        {/* THRIVING AT PORTAL SECTION */}
        <section className="sa-section" data-astro-cid-nbqiasj5>
          <div className="sa-inner" data-astro-cid-nbqiasj5>
            <div className="sa-header" data-astro-cid-nbqiasj5>
              <h2 className="sa-heading" data-astro-cid-nbqiasj5>Our Students & Interns Are <span data-astro-cid-nbqiasj5>Thriving at Engloray</span></h2>
            </div>

            <div className="sa-card1" data-astro-cid-nbqiasj5>
              <div className="sa-card1-vector" data-astro-cid-nbqiasj5>
                <img src="https://d14qv6cm1t62pm.cloudfront.net/niat/Vector-bg-internships.png" alt="" aria-hidden="true" data-astro-cid-nbqiasj5 />
                <img src="https://d14qv6cm1t62pm.cloudfront.net/niat/Vector-bg-internships.png" alt="" aria-hidden="true" data-astro-cid-nbqiasj5 />
                <img src="https://d14qv6cm1t62pm.cloudfront.net/niat/Vector-bg-internships.png" alt="" aria-hidden="true" data-astro-cid-nbqiasj5 />
              </div>
              <div className="sa-card1-left" data-astro-cid-nbqiasj5>
                <h3 className="sa-card1-title" data-astro-cid-nbqiasj5>200+ Englorayians Secured Internships<br data-astro-cid-nbqiasj5 />With Stipends</h3>
                <div className="sa-logos-wrap" data-astro-cid-nbqiasj5>
                  <div className="sa-logos-track" data-astro-cid-nbqiasj5>
                    {["cwtgpZPqB4JzdocknTpzOV4I.png", "8cCqYdMwpx8aaY4SIZxS05stI.png", "48b7iyaRO9KUnKrh0m2mDaa4m3A.png", "Hvaw7M8YBg3IQEEtKrs7g4ZoiTE.png", "fk7WvMj3CJpuRw31lrG49CUd1A.png", "InLMJ2X9q1AQdDE0jMXzYdD07ug.png", "DEqXpQqUOIo9qD95xXpackmeN6I.png"].map((logo, i) => (
                      <img key={i} src={`https://framerusercontent.com/images/${logo}`} alt="company logo" className="sa-logo-img" loading="lazy" data-astro-cid-nbqiasj5 />
                    ))}
                  </div>
                </div>
              </div>
              <div className="sa-card1-right" data-astro-cid-nbqiasj5>
                <img src="https://d14qv6cm1t62pm.cloudfront.net/niat/achivement-group-one.png" alt="Portal students" className="sa-students-img" data-astro-cid-nbqiasj5 />
              </div>
            </div>

            <div className="sa-bottom-grid" data-astro-cid-nbqiasj5>
              <div className="sa-card-bizhack" data-astro-cid-nbqiasj5>
                <div className="sa-bizhack-text" data-astro-cid-nbqiasj5>
                  <h3 className="sa-bizhack-title" data-astro-cid-nbqiasj5><span style={{ whiteSpace: "nowrap" }} data-astro-cid-nbqiasj5>22+ Startups Launched</span><br data-astro-cid-nbqiasj5 />by Learners</h3>
                  <p className="sa-bizhack-sub" style={{ whiteSpace: "nowrap" }} data-astro-cid-nbqiasj5>8 already generating active revenue!</p>
                </div>
                <div className="sa-bizhack-right" data-astro-cid-nbqiasj5>
                  <img src="https://d14qv6cm1t62pm.cloudfront.net/niat/Vector-sachin-bg.png" alt="" aria-hidden="true" className="sa-bizhack-vector" data-astro-cid-nbqiasj5 />
                  <img src="https://d14qv6cm1t62pm.cloudfront.net/niat/sachin-bg-achivements.png" alt="Winner photo" className="sa-bizhack-photo" data-astro-cid-nbqiasj5 />
                </div>
              </div>
              <div className="sa-card-openai" data-astro-cid-nbqiasj5>
                <div className="sa-openai-content" data-astro-cid-nbqiasj5>
                  <p className="sa-openai-title" data-astro-cid-nbqiasj5><span style={{ whiteSpace: "nowrap" }} data-astro-cid-nbqiasj5>OpenAI Academy × Buildathon</span><br data-astro-cid-nbqiasj5 /><span style={{ whiteSpace: "nowrap" }} data-astro-cid-nbqiasj5>Grand Finale Competition,</span></p>
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
                Our Upskilling Programs Offered at <span className="au-highlight" data-astro-cid-6ffk7ym5>30+ Collaborating Institutions</span>
              </h2>
            </div>

            <div className="au-tabs-wrap" data-astro-cid-6ffk7ym5>
              <div className="au-tabs" id="au-tabs" role="tablist" data-astro-cid-6ffk7ym5>
                {[
                  { id: 'all', label: 'All', icon: "https://d14qv6cm1t62pm.cloudfront.net/niat/state-icons-india.png" },
                  { id: 'telangana', label: 'Telangana', icon: "https://d14qv6cm1t62pm.cloudfront.net/niat/state-icons-telangana.png" },
                  { id: 'andhra', label: 'Andhra Pradesh', icon: "https://d14qv6cm1t62pm.cloudfront.net/niat/state-icons-andhra-pradesh.png" },
                  { id: 'haryana', label: 'Haryana', icon: "https://d14qv6cm1t62pm.cloudfront.net/niat/state-icons-haryana.png" }
                ].map((tab) => (
                  <button key={tab.id} type="button" role="tab" className={`au-tab ${activeRegion === tab.id ? 'is-active' : ''}`} onClick={() => setActiveRegion(tab.id)} aria-selected={activeRegion === tab.id} data-astro-cid-6ffk7ym5>
                    <span className="au-tab-icon" data-astro-cid-6ffk7ym5>
                      <img src={tab.icon} alt={tab.label} data-astro-cid-6ffk7ym5 />
                    </span>
                    <span className="au-tab-label" data-astro-cid-6ffk7ym5>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="au-carousel-wrap" data-astro-cid-6ffk7ym5>
              <button type="button" className="au-nav" onClick={() => handleUniScroll('left')} data-astro-cid-6ffk7ym5 aria-label="Previous universities">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              
              <div className="au-track-outer" data-astro-cid-6ffk7ym5>
                <div ref={uniTrackRef} className="au-track" id="au-track" data-astro-cid-6ffk7ym5>
                  {universityCards
                    .filter((card) => activeRegion === 'all' || card.region === activeRegion)
                    .map((card, i) => (
                      <div className="au-card" key={i} data-region={card.region} data-astro-cid-6ffk7ym5>
                        <div className="au-img-wrap" data-astro-cid-6ffk7ym5>
                          <img src={card.img} alt={card.name} className="au-img" data-astro-cid-6ffk7ym5 />
                          <span className={`au-badge ${card.status === 'closed' ? 'au-badge--closed' : ''}`} data-status={card.status} data-astro-cid-6ffk7ym5>
                            {card.badge}
                          </span>
                        </div>
                        <div className="au-card-body" data-astro-cid-6ffk7ym5>
                          <h3 className="au-card-name" data-astro-cid-6ffk7ym5>{card.name}</h3>
                          <p className="au-card-subtitle" data-astro-cid-6ffk7ym5>Collaborating Partner Campus</p>
                          <p className="au-card-city" data-astro-cid-6ffk7ym5>
                            <svg className="au-pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            {card.city}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <button type="button" className="au-nav" onClick={() => handleUniScroll('right')} data-astro-cid-6ffk7ym5 aria-label="Next universities">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>

            <div className="au-cta-wrap" data-astro-cid-6ffk7ym5>
              <button type="button" className="au-cta-btn" onClick={scrollToApply} data-astro-cid-6ffk7ym5>
                Explore Syllabus & Campus Slots
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
                          <img src={mentor.company} alt="company" className="mentor-card-company" data-astro-cid-6pcgkbdw />
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
                          <img src={mentor.company} alt="company" className="mentor-card-company" data-astro-cid-6pcgkbdw />
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
        <section className="niat-advantages-section" data-astro-cid-qvveo2su style={{background:'#fcfcfc', padding:'56px 32px'}}>
          <div style={{maxWidth:'1200px', margin:'0 auto', width:'100%'}}>
            <h2 style={{fontFamily:'Satoshi, sans-serif', fontSize:'36px', fontWeight:'700', textAlign:'center', color:'#1e293b', marginBottom:'40px'}}>
              Why Choose <span style={{color:'#0056d2'}}>Engloray’s</span> Industry-ready Upskilling?
            </h2>
            <div style={{overflowX:'auto', borderRadius:'16px', border:'1px solid #cbd5e1', boxShadow:'0 4px 12px #0000000a'}}>
              <table style={{width:'100%', borderCollapse:'collapse', background:'#fff', minWidth:'600px'}}>
                <thead>
                  <tr style={{background:'#f8fafc', borderBottom:'1px solid #cbd5e1'}}>
                    <th style={{padding:'20px', textAlign:'left', fontSize:'16px', fontWeight:'700', color:'#475569'}}>Upskilling Parameter</th>
                    <th style={{padding:'20px', textAlign:'left', fontSize:'16px', fontWeight:'700', color:'#475569'}}>Traditional Learning</th>
                    <th style={{padding:'20px', textAlign:'left', fontSize:'16px', fontWeight:'700', color:'#0056d2', background:'#e8f0fe'}}>Engloray Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { p: "Curriculum Alignment", t: "Outdated general theoretical topics", e: "Industry-aligned, updated dynamically based on real employer stack reviews" },
                    { p: "Learning Mode", t: "Lecture-heavy classroom discussions", e: "Active sandbox practice, project sprints, buildathons & hackathons" },
                    { p: "Instructor Profile", t: "Syllabus teaching without commercial coding experience", e: "Professors of Practice and Active developers from tech majors" },
                    { p: "Project Portfolio", t: "Academic reports without functional codebase links", e: "50+ production projects deployed with custom domains and live users" },
                    { p: "Placement support", t: "Campus placement cells with general listings", e: "Dedicated career coaching, corporate network of 2500+ tech firms, mock trials" }
                  ].map((row, index) => (
                    <tr key={index} style={{borderBottom:'1px solid #e2e8f0'}}>
                      <td style={{padding:'18px 20px', fontSize:'15px', fontWeight:'700', color:'#1e293b'}}>{row.p}</td>
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
                  <div className="cert-track" style={{ transform: `translateX(-${activeCert * 100}%)`, width: `${certs.length * 100}%`, display: 'flex' }} data-astro-cid-qvveo2su>
                    {certs.map((_, i) => (
                      <img key={i} src="https://d14qv6cm1t62pm.cloudfront.net/niat/experience-beyond-classroom.png" alt="Cert Preview" className="cert-image" style={{ width: '100%' }} data-astro-cid-qvveo2su />
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
                Certifications You Get via <span className="cert-heading-red" data-astro-cid-qvveo2su>Engloray Sprints</span>
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
        <section className="usf-section" data-astro-cid-qvveo2su style={{background:'#0056d2', padding:'64px 32px', color:'#fff', textAlign:'center'}}>
          <div style={{maxWidth:'800px', margin:'0 auto'}}>
            <h2 style={{fontSize:'36px', fontWeight:'700', marginBottom:'16px', color:'#fff'}}>Unlock Your Potential with Project & Mentor-Based Learning</h2>
            <p style={{fontSize:'16px', marginBottom:'32px', color:'#e8f0fe', lineHeight:'1.5'}}>Choose from our high-demand courses, participate in practical workshops, and start earning through paid internships with our hiring network.</p>
            <button className="fixed-apply-button" onClick={scrollToApply} style={{background:'#ffffff', color:'#0056d2', padding:'14px 28px', border:'none', borderRadius:'8px', fontSize:'16px', fontWeight:'700', cursor:'pointer'}}>
              Explore Courses & Internships
            </button>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="testimonials-section" data-astro-cid-zl3frkeu>
          <div className="testimonials-container" data-astro-cid-zl3frkeu>
            <div className="testimonials-wrapper" data-astro-cid-zl3frkeu>
              <h2 className="testimonials-heading" data-astro-cid-zl3frkeu>
                Hear It From <span className="testimonials-highlight" data-astro-cid-zl3frkeu>Englorayians</span>
              </h2>

              <div className="testimonials-carousel-wrap" data-astro-cid-zl3frkeu>
                <div className="carousel" data-astro-cid-zl3frkeu>
                  <div className="carousel__track" data-astro-cid-zl3frkeu style={{justifyContent: 'center'}}>
                    {testimonials.map((t, idx) => {
                      const isActive = idx === activeTestimonial;
                      const isNeighbor = Math.abs(idx - activeTestimonial) === 1;
                      return (
                        <div className="carousel__slide" key={idx} data-active={isActive ? "true" : undefined} data-neighbor={isNeighbor ? "true" : undefined} data-astro-cid-zl3frkeu style={{display: isActive || isNeighbor ? 'block' : 'none'}}>
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
                    })}
                  </div>
                </div>

                <div className="testimonials-mobile-arrows" data-astro-cid-zl3frkeu>
                  <button type="button" className="carousel-btn carousel-btn--prev-mobile" onClick={() => handleTestimonialChange((activeTestimonial - 1 + testimonials.length) % testimonials.length)} data-astro-cid-zl3frkeu>
                    <span>‹</span>
                  </button>
                  <button type="button" className="carousel-btn carousel-btn--next-mobile" onClick={() => handleTestimonialChange((activeTestimonial + 1) % testimonials.length)} data-astro-cid-zl3frkeu>
                    <span>›</span>
                  </button>
                </div>
              </div>

              <div className="testimonials-actions" data-astro-cid-zl3frkeu>
                <div className="testimonials-divider" data-astro-cid-zl3frkeu></div>
                <button type="button" className="button-base button-md button-primary testimonials-button" onClick={scrollToApply} data-astro-cid-f4ytvlcn>
                  Be the Next Success Story
                </button>
                <div className="testimonials-divider" data-astro-cid-zl3frkeu></div>
              </div>
            </div>
          </div>
        </section>

        {/* EAT ASSESSMENT PREPARATION */}
        <section className="np-section" data-astro-cid-qvveo2su style={{background:'#f8fafc', padding:'56px 32px'}}>
          <div style={{maxWidth:'1200px', margin:'0 auto'}}>
            <h2 style={{fontFamily:'Satoshi, sans-serif', fontSize:'36px', fontWeight:'700', textAlign:'center', color:'#1e293b', marginBottom:'48px'}}>
              Our 3 Pillars of Practical Upskilling
            </h2>
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px'}}>
              <div style={{background:'#fff', padding:'32px', borderRadius:'16px', border:'1px solid #e2e8f0'}}>
                <div style={{fontSize:'32px', marginBottom:'16px'}}>💻</div>
                <h3 style={{fontSize:'20px', fontWeight:'700', color:'#1e293b', marginBottom:'12px'}}>Project-Based Learning</h3>
                <p style={{fontSize:'14px', color:'#64748b', lineHeight:'1.5'}}>Build SaaS Platforms: Deploy functional projects with live code repositories, custom domains, and database connections.</p>
              </div>
              <div style={{background:'#fff', padding:'32px', borderRadius:'16px', border:'1px solid #e2e8f0'}}>
                <div style={{fontSize:'32px', marginBottom:'16px'}}>🤝</div>
                <h3 style={{fontSize:'20px', fontWeight:'700', color:'#1e293b', marginBottom:'12px'}}>Mentor & Workshop Guidance</h3>
                <p style={{fontSize:'14px', color:'#64748b', lineHeight:'1.5'}}>Industry Expert Sprints: Participate in specialized workshops led by senior engineers and active design practitioners.</p>
              </div>
              <div style={{background:'#fff', padding:'32px', borderRadius:'16px', border:'1px solid #e2e8f0'}}>
                <div style={{fontSize:'32px', marginBottom:'16px'}}>🏢</div>
                <h3 style={{fontSize:'20px', fontWeight:'700', color:'#1e293b', marginBottom:'12px'}}>Corporate Internships</h3>
                <p style={{fontSize:'14px', color:'#64748b', lineHeight:'1.5'}}>Gain Paid Placements: Work on real-world client deliverables and secure paid internships with corporate teams.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ENROLLMENT PROCESS SECTION */}
        <section className="admission-process-section" data-astro-cid-qvveo2su style={{background:'#fff', padding:'56px 32px'}}>
          <div style={{maxWidth:'1200px', margin:'0 auto'}}>
            <h2 style={{fontFamily:'Satoshi, sans-serif', fontSize:'36px', fontWeight:'700', textAlign:'center', color:'#1e293b', marginBottom:'48px'}}>
              Engloray Portal Enrollment Process
            </h2>
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:'24px', position:'relative'}}>
              {[
                { step: "1", title: "Submit Application Form", desc: "Complete the online lead registration capture in the hero card above." },
                { step: "2", title: "Choose Track & Workshops", desc: "Select your specialized upskilling and interactive workshop track." },
                { step: "3", title: "1:1 Mentorship Session", desc: "Participate in a counseling and goal-alignment review with tech professionals." },
                { step: "4", title: "Confirm Cohort Incubation", desc: "Confirm your cohort seat, join the incubation group, and begin learning!" }
              ].map((item, idx) => (
                <div key={idx} style={{position:'relative', padding:'24px', background:'#f8fafc', borderRadius:'12px', border:'1px solid #e2e8f0'}}>
                  <div style={{width:'36px', height:'36px', background:'#0056d2', color:'#fff', borderRadius:'50%', display:'grid', placeItems:'center', fontSize:'16px', fontWeight:'700', marginBottom:'16px'}}>
                    {item.step}
                  </div>
                  <h3 style={{fontSize:'18px', fontWeight:'700', color:'#1e293b', marginBottom:'8px'}}>{item.title}</h3>
                  <p style={{fontSize:'13px', color:'#64748b', lineHeight: '1.5'}}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL HERO CTA SECTION */}
        <section className="build-it-section" data-astro-cid-qvveo2su style={{background:'#f0f4f9', padding:'64px 32px', textAlign:'center'}}>
          <div style={{maxWidth:'600px', margin:'0 auto'}}>
            <h2 style={{fontFamily:'Satoshi, sans-serif', fontSize:'32px', fontWeight:'700', color:'#1e293b', marginBottom:'16px'}}>Don't just prepare for the future. Build it.</h2>
            <p style={{fontSize:'15px', color:'#475569', marginBottom:'32px', lineHeight:'1.5'}}>Accelerate your academic journey with live cloud pipelines, coding sandboxes, and world-class mentors.</p>
            <button className="button-base button-md button-primary" onClick={scrollToApply} style={{border:'none', cursor:'pointer', padding:'12px 24px', background:'#0056d2', color:'#fff', fontWeight:'700', borderRadius:'6px'}}>
              Apply Now
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
                { id: 'general', label: 'General Queries' },
                { id: 'eat', label: 'Workshops & Mentors' },
                { id: 'curriculum', label: 'Curriculum & Sandboxes' },
                { id: 'placements', label: 'Placements & Stipends' }
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

      {/* FOOTER SECTION */}
      <footer className="footernew" data-astro-cid-pmd2h3wn>
        <div className="footernew__container" data-astro-cid-pmd2h3wn>
          <div className="footernew__top" data-astro-cid-pmd2h3wn>
            <div className="footernew__logo-wrap" data-astro-cid-pmd2h3wn>
              <img src={englorayLogo} alt="Engloray Logo" className="footernew__logo" data-astro-cid-pmd2h3wn />
            </div>
            
            <div className="footernew__col" data-astro-cid-pmd2h3wn>
              <h4 className="footernew__col-heading" data-astro-cid-pmd2h3wn>Quick Links</h4>
              <ul className="footernew__link-list" data-astro-cid-pmd2h3wn>
                <li><a href="/" className="footernew__link" data-astro-cid-pmd2h3wn>Home</a></li>
                <li><a href="/ourStoryPage" className="footernew__link" data-astro-cid-pmd2h3wn>Our Story</a></li>
                <li><a href="/CareersPage" className="footernew__link" data-astro-cid-pmd2h3wn>Careers</a></li>
                <li><a href="/contactPage" className="footernew__link" data-astro-cid-pmd2h3wn>Contact Us</a></li>
              </ul>
            </div>

            <div className="footernew__col footernew__col--wide" data-astro-cid-pmd2h3wn>
              <h4 className="footernew__col-heading" data-astro-cid-pmd2h3wn>Contact Us</h4>
              <p className="footernew__address" data-astro-cid-pmd2h3wn>
                <strong>Engloray Tech</strong> <br />
                Financial District, Nanakramguda, <br />
                Hyderabad, Telangana 500032
              </p>
            </div>
          </div>

          <div className="footernew__divider" data-astro-cid-pmd2h3wn></div>

          <div className="footernew__bottom" data-astro-cid-pmd2h3wn>
            <p className="footernew__subtext" data-astro-cid-pmd2h3wn>© 2026 Engloray. All rights reserved.</p>
            <div className="footernew__legal" data-astro-cid-pmd2h3wn>
              <a href="/privacyPolicyPage" className="footernew__legal-link" data-astro-cid-pmd2h3wn>Privacy Policy</a>
              <a href="/cookiesPolicyPage" className="footernew__legal-link" data-astro-cid-pmd2h3wn>Cookie Policy</a>
              <a href="/termsAndServicesPage" className="footernew__legal-link" data-astro-cid-pmd2h3wn>Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Sticky apply banner for mobile/desktop scroll */}
      {stickyVisible && (
        <div style={{ position: 'fixed', bottom: '16px', left: '50%', transform: 'translateX(-50%)', zIndex: 100, width: '90%', maxWidth: '400px' }}>
          <button onClick={scrollToApply} style={{ width: '100%', padding: '14px 20px', background: '#0056d2', color: '#fff', border: 'none', borderRadius: '100px', fontSize: '15px', fontWeight: '700', boxShadow: '0 8px 30px rgba(0, 86, 210, 0.4)', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            <span>Apply for Incubation Sprints</span>
            <span>→</span>
          </button>
        </div>
      )}
    </div>
  );
}
