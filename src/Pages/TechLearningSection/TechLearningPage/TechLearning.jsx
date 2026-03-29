import React from 'react';
import './TechLearning.css';


import TechLearningHero from '../TechLearningHero/TechLearningHero';
import TechLearningHighlights from '../TechLearningHighlights/TechLearningHighlights';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import NavigationBar from '../NavigationBar/NavigationBar';
import Courses from '../Courses/Courses';
import LearningExperience from '../LearningExperience/LearningExperience';
import StudentTestimonials from '../StudentTestimonials/StudentTestimonials';
import LearningFeatures from '../LearningFeatures/LearningFeatures';
import LearningFooter from '../LearningFooter/LearningFooter';
import BackToTop from '../../../Components/BackToTop/BackToTop';

const TechLearning = () => {
    return (
        <div className="tech-learning-page">
            <TopNavBar />
            <NavigationBar />
            <TechLearningHero />
            <TechLearningHighlights />
            <Courses />
            <LearningExperience />
            <StudentTestimonials />
            <LearningFeatures />
            <LearningFooter />
            <BackToTop />
        </div>
    );
};

export default TechLearning;