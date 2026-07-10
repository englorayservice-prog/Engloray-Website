import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './Pages/TechGroupSection/AboutSection/About';
import AchievedStudents from './components/AchievedStudents/AchievedStudents';
import JourneySlider from './components/Journey/JourneySlider';
import Programs from './components/Programs/Programs';
import ProjectLearning from './components/ProjectLearning/ProjectLearning';
import MentorSupport from './components/MentorSupport/MentorSupport';
import TamilnaduPrograms from './components/TamilnaduPrograms/TamilnaduPrograms';
import Careerguidance from './components/Careerguidance/Careerguidance';
import Mentors from './components/Mentors/Mentors';
import InternshipsInteractive from './components/InternshipsInteractive/InternshipsInteractive';
import EnrollmentProcess from './components/EnrollmentProcess/EnrollmentProcess';
import Testimonials from './components/Testimonials/Testimonials';
import CTA from './components/CTA/CTA';
// import Partners from './components/Partners/Partners';
import Certifications from "./components/Certifications/Certifications";
import FAQ from "./components/FAQ/FAQ";
import Footer from './components/Footer/Footer';
import ApplyModal from './components/ApplyModal/ApplyModal';
import './App.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for Scroll-To-Top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="app-container">
        <Navbar onOpenApply={() => setIsModalOpen(true)} />
        <Hero onOpenApply={() => setIsModalOpen(true)} />
        <Programs onOpenApply={() => setIsModalOpen(true)} />
        <TamilnaduPrograms onOpenApply={() => setIsModalOpen(true)} />
        <ProjectLearning onOpenApply={() => setIsModalOpen(true)} />
        <Careerguidance onOpenApply={() => setIsModalOpen(true)} />
        <Mentors />
        <MentorSupport onOpenApply={() => setIsModalOpen(true)} />
        <InternshipsInteractive onOpenApply={() => setIsModalOpen(true)} />
        {/* Journey parallax wrapper — sticky z-index:20 sits on top of the content
            pulled up behind it. The -100vh margin on the inner wrapper eliminates
            the dead scroll gap after the sticky releases. */}
        <div style={{ position: 'relative' }}>
          <JourneySlider />
          {/* Pull everything below JourneySlider up by 150vh (= 250vh − 100vh)
              to cancel the sticky dead-space, while z-index keeps it hidden
              behind the active sticky panel */}
          <div style={{ position: 'relative', zIndex: 1, marginTop: '-150vh' }}>
            <EnrollmentProcess />
            <AchievedStudents />
            <Testimonials />
            {/* <Partners /> */}
            <Certifications />
            <About onOpenApply={() => setIsModalOpen(true)} />
            <FAQ />
            {/* Interactive CTA section placed after FAQ */}
            <CTA onOpenApply={() => setIsModalOpen(true)} />
            <Footer />
          </div>
        </div>
        <ApplyModal isOpen={isModalOpen} onClose={() => { setIsModalOpen(false); setSelectedDistrict(''); }} defaultDistrict={selectedDistrict} />

        {/* Scroll-To-Top Floating Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-[999] w-12 h-12 rounded-full text-white flex items-center justify-center border-none cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #6C4CF1, #4F46E5)', boxShadow: '0 4px 20px rgba(108,76,241,0.4)' }}
            aria-label="Scroll to top"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </button>
        )}
      </div>
    </>
  );
};

export default App;
