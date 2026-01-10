import React from 'react';
import HeroSection from '../HeroSection/HeroSection' 
import ServicesSection from '../ServiceSection/ServicesSection';
import PortfolioSection from '../PortfolioSection/PortfolioSection';
import TestimonialsSection from '../TestimonailsSection/TestimonialsSection';
import InternshipProgram from '../InternshipProgram/InternshipProgram';
import BenefitsFooter from '../BenfitsFooter/BenifitsFooter';
import Navbar from '../../../Components/Navbar/Navbar';

import './TechGroup.css';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';

const TechGroup = () => { 
  return (
    <div className="tech-group-page">

      <TopNavBar/>
      <Navbar/>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
     <InternshipProgram />
     <BenefitsFooter/>
     <BackToTop/>
    </div>
  );
};

export default TechGroup;