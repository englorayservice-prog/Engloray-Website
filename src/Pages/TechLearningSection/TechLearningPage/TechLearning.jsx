import React from 'react';
import './TechLearning.css';


import TechLearningHero from '../TechLearningHero/TechLearningHero';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import NavigationBar from '../NavigationBar/NavigationBar';
import Courses from '../Courses/Courses';
import LearningExperience from '../LearningExperience/LearningExperience';
import StudentTestimonials from '../StudentTestimonials/StudentTestimonials';
import LearningFeatures from '../LearningFeatures/LearningFeatures';
import TechCta from '../TechCta/TechCta';
import SubFooterTwo from '../../../Pages/Sub Pages/subFooterTwo/NewFooter'

import BackToTop from '../../../Components/BackToTop/BackToTop';

const TechLearning = () => {
    return (
        <div className="tech-learning-page">
            <TopNavBar />
            <NavigationBar />
            <TechLearningHero />
            <Courses />
            <LearningExperience />
            <StudentTestimonials />
            <LearningFeatures />
            <TechCta />
            <SubFooterTwo />
            <BackToTop />
        </div>
    );
};



export default TechLearning;