import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Tagline from './Components/Tagline/Tagline';
import About from './Components/About/About';
import CoreServices from './Components/CoreSevices/CoreServices';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';
//import Footer from './Pages/Sub Pages/NewFooter/NewFooter';
import MarqueeBrands from './Components/MarqueeBrands/MarqueeBrands';
import VisionMission from './Components/VisionMission/VisionMission';
import Ourcore from './Ourcore';
import TwoLineNavbar from './Components/TwoLineNavbar/TwoLineNavbar';
import DoubleMarquees from './Components/DoubleMarquees/DoubleMarquees';
import OtherSectionCarousel from './Components/OtherSectionCarousel/OtherSectionCarousel';
import TechGroup from './Pages/TechGroupSection/TechGroupPage/TechGroup'
import TopNavBar from './Components/TopNavbar/TopNavbar';
import TechLearning from './Pages/TechLearningSection/TechLearningPage/TechLearning';
import BackToTopArrow from './Components/BackToTop/BackToTop';
import CustomScrollbar from './Components/CustomScrollbar/CustomScrollbar';
import BrandingDesigning from './Pages/Sub Pages/TechBrandingAndDesigning/BrandingAndDesigning';
import AppWebDev from './Pages/Sub Pages/WebAndAppDevelopment/AppWebDev';
import UiUxPage from './Pages/Sub Pages/UiUxPage/UiUxPage';
import DigitalMarketing from './Pages/Sub Pages/DigitalMarketing/DigitalMarketing';
import MobileApplications from './Pages/Sub Pages/MobileApplications/MobileApplications';
import SoftwareAppDev from './Pages/Sub Pages/SoftwareAppDev/SoftwareAppDev';
import ErpSolutions from './Pages/Sub Pages/ErpSolutions/ErpSolutions';
import DigitalMarketingService from './Pages/Sub Pages/DigitalMarketingService/DigitalMarketingService';
import SaaS from './Pages/Sub Pages/SaasPage/SaaS';
import GraphicDesignCourse from './Pages/Sub Pages/GraphicDesignCourse/GraphicDesignCourse';
import BrandingAndIdentiity from './Pages/Sub Pages/BrandingAndIdentity/BrandingAndIdentity';
import UiuxDesignCourse from './Pages/Sub Pages/UiuxDesignCourse/UiUxDesignCourse';
import WorksCaseStudies from './Pages/Sub Pages/WorksCaseStudies/WorksCaseStudies';
import WorksClientProjects from './Pages/Sub Pages/WorksClientProjects/WorksClientProjects';
import MainCoursesPage from './Pages/Sub Pages/MainCoursesPage/MainCoursesPage';
import OurStoryPage from './Pages/Sub Pages/OurStoryPage/OurStoryPage';
import OurTeamPage from './Pages/Sub Pages/OurTeamPage/OurTeamPage';
import WorkshopsPage from './Pages/Sub Pages/WorkshopsPage/WorkshopsPage';
import GraphicDesignerInternPage from './Pages/Sub Pages/GraphicDesignerInternPage/GraphicDesignerInterPage';
import WebsiteDeveloperInterPage from './Pages/Sub Pages/WebstieDeveloperInternPage/WebsiteDeveloperInternPage';
import UiUxDesignerInternPage from './Pages/Sub Pages/UiuxDesignerInternPage/UiuxDesignerInternPage';
import SoftwareDeveloperInternPage from './Pages/Sub Pages/SoftwareDeveloperInternPage/SoftwareDeveloperInterPage';
import CorporateTraining from './Pages/Sub Pages/CorporateTraining/CorporateTraining';
import CareersPage from './Pages/Sub Pages/CareersPage/CareersPage';
import MentorshipLearning from './Pages/Sub Pages/MentorshipLearning/MentorshipLearning';
import PrivacyPolicy from './Pages/Sub Pages/PrivacyPolicy/PrivacyPolicy';
import WebsiteDevelopmentPage from './Pages/Sub Pages/WebsiteDevelopment/WebsiteDevelopment';
import EcommerceDevelopmentPage from './Pages/Sub Pages/ECommerceDevelopment/ECommerceDevelopment';
import GraphicDesignPage from './Pages/Sub Pages/GraphicDesignPage/GraphicDesignPage';
import SoftwareTechSolution from './Pages/Sub Pages/SoftwareTechSolution/SoftwareTechSolution';
import AiServicesPage from './Pages/Sub Pages/AIServicesPage/AIServicesPage';
import CrmServices from './Pages/Sub Pages/CrmServices/CrmServices';
import DataAnalyticsPage from './Pages/Sub Pages/DataAnalytics/DataAnalytics';
import AppDevelopmentPage from './Pages/Sub Pages/AppDevelopment/AppDevelopment';
import SalesExecutiveInternPage from './Pages/Sub Pages/SalesExecutiveInternPage/SalesExecutiveInternPage';
import BusinessDevelopmentInternPage from './Pages/Sub Pages/BusinessDevelopmentInternPage/BusinessDevelopmentInternPage';
import TrainingMentorInternPage from './Pages/Sub Pages/TrainingMentorInternPage/TrainingMentorInternPage';
import AllProgramsPage from './Pages/Sub Pages/AllProgramsPage/AllProgramsPage';
import CookiePolicy from './Pages/Sub Pages/CookiePolicy/CookiePolicy';
import TermsAndServices from './Pages/Sub Pages/TermsAndServices/TermsAndServices';
import ProjectBasedLearning from './Pages/Sub Pages/ProjectBasedLearning/ProjectBasedLearning';
import TechGroupProjects from './Pages/Sub Pages/TechGroupProjects/TechGroupProjects';
import UiuxDesign from './Pages/Sub Pages/UiuxDesign/UiuxDesign';
//import TSPFFooter from './Pages/Sub Pages/TechGroupSubPagefooter/TSPFFooter';
import TSPFFooter from './Pages/Sub Pages/NewFooter/NewFooter';
//import TLSPFFooter from './Pages/Sub Pages/TechLearningSubPageFooter/TLSPFFooter';
import TLSPFFooter from './Pages/Sub Pages/NewFooter/NewFooter';
//import MainPageSubFooter from './Pages/Sub Pages/MainPageSubFooter/MainPageSubFooter';
import MainPageSubFooter from './Pages/Sub Pages/NewFooter/NewFooter';
import JavaFullStackCourse from './Pages/Sub Pages/JavaFullStackCourse/JavaFullStackCourse';
import DrawingCourse from './Pages/Sub Pages/DrawingCourse/DrawingCourse';
import DigitalMarketingCourse from './Pages/Sub Pages/DigitalMarketingCourse/DigitalMarketingCourse';
import BusinessBoost from './Components/BusinessBoost/BusinessBoost';
import RaymartPage from './Pages/Sub Pages/RaymartPage/RaymartPage';
import AiProductPage from './Pages/Sub Pages/Ai-Products/MobileApplications';
import CrmPage from './Pages/Sub Pages/CrmPage/CrmPage';
import ErpPage from './Pages/Sub Pages/ErpPage/ErpPage';
import AiChatbotPage from './Pages/Sub Pages/AiChatbotPage/AiChatbotPage';
import JobSeekerPage from './Pages/Sub Pages/JobSeekerPage/JobSeekerPage';
import LearningPage from './Pages/Sub Pages/LearningPage/LearningPage';
import RayMartPageTwo from './Pages/Sub Pages/RayMartPageTwo/RayMartPageTwo';
import RayMartPageThree from './Pages/Sub Pages/RayMartPageThree/RayMartPageThree';
import RaymartPageFour from './Pages/Sub Pages/FaqRaymart/FaqRaymart';
import ContactPage from './Pages/Sub Pages/ContactPage/ContactPage';
import StatsAndBenefits from './Pages/Sub Pages/StatsAndBenefits/StatsAndBenefits';
import BusinessSuiteAI from './Pages/Sub Pages/BusinessSuiteAI/BusinessSuiteAI';
import EnglorayShowcase from './Pages/Sub Pages/EnglorayShowcase/EnglorayShowcase';



import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <Router>
    <div className="App">
      <CustomScrollbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
          <Route path="/brandingPage" element={<BrandingDesigning />} />
          <Route path="/developmentPage" element={<AppWebDev />} />
          <Route path="/marketingPage" element={<DigitalMarketing />} />
          <Route path="/UiUxPage" element={<UiUxPage />} />
          <Route path="/mobileApplicationsPage" element={<MobileApplications />} />
          <Route path="/saasPage" element={<SaaS />} />
          <Route path="/corporateTraining" element={<CorporateTraining />} />
          <Route path="/CareersPage" element={<CareersPage />} />
          


          <Route path="/brandingIdentityPage" element={<BrandingAndIdentiity />} />
          <Route path="/uiuxDesignPage" element={<UiuxDesign />} />
          <Route path="/softwareDevelopmentPage" element={<SoftwareAppDev />} />
          <Route path="/erpSolutionsPage" element={<ErpSolutions />} />
          <Route path="/digitalMarketingServicePage" element={<DigitalMarketingService />} />
          <Route path="/aiProductPage" element={<AiProductPage />} />
          <Route path="/drawingCoursePage" element={<DrawingCourse />} />
          <Route path="/digitalMarketingCoursePage" element={<DigitalMarketingCourse />} />
          <Route path="/websiteDevelopmentPage" element={<WebsiteDevelopmentPage />} />
          <Route path="/ecommerceDevelopmentPage" element={<EcommerceDevelopmentPage />} />
          <Route path="/appDevelopmentPage" element={<AppDevelopmentPage />} />
          <Route path="/graphicDesignPage" element={<GraphicDesignPage />} />
          <Route path="/softwareSolutionPage" element={<SoftwareTechSolution />} />
          <Route path="/dataAnalyticsPage" element={<DataAnalyticsPage />} />
          <Route path="/aiServicesPage" element={<AiServicesPage />} />
          <Route path="/crmServicesPage" element={<CrmServices />} />
          <Route path="/salesExecutiveInternPage" element={<SalesExecutiveInternPage />} />
          <Route path="/businessDevelopmentInternPage" element={<BusinessDevelopmentInternPage />} />
          <Route path="/trainingMentorInternPage" element={<TrainingMentorInternPage />} />


          <Route path="/graphicsDesignCoursePage" element={<GraphicDesignCourse />} />
          <Route path="/uiuxDesignCoursePage" element={<UiuxDesignCourse />} />
          <Route path="/javaFullStackCourseCoursePage" element={<JavaFullStackCourse />} />



          <Route path="/worksCaseStudiesPage" element={<WorksCaseStudies />} />
          <Route path="/worksClientProjectsPage" element={<WorksClientProjects />} />


          <Route path="/ourStoryPage" element={<OurStoryPage />} />
          <Route path="/ourTeamPage" element={<OurTeamPage />} />



          <Route path="/allCoursesPage" element={<MainCoursesPage  />} />
          <Route path="/workshopsPage" element={<WorkshopsPage  />} />


          <Route path="/allProjectsPage" element={<TechGroupProjects  />} />
          
          
          <Route path="/allProgramsPage" element={<AllProgramsPage  />} />
          <Route path="/GraphicDesignerInternPage" element={<GraphicDesignerInternPage  />} />
          <Route path="/websiteDeveloperInternPage" element={<WebsiteDeveloperInterPage  />} />
          <Route path="/uiuxDesignerInternPage" element={<UiUxDesignerInternPage  />} />
          <Route path="/SoftwareDeveloperInternPage" element={<SoftwareDeveloperInternPage  />} />


          <Route path="/mentorshipLearningPage" element={<MentorshipLearning  />} />
          <Route path="/projectBasedLearningPage" element={<ProjectBasedLearning  />} />


          <Route path="/mainPageSubFooter" element={<MainPageSubFooter/>} />
          <Route path="/techGroupSubPageFooter" element={<TSPFFooter/>} />
          <Route path="/techLearningSubPageFooter" element={<TLSPFFooter/>} />


          <Route path="/privacyPolicyPage" element={<PrivacyPolicy  />} />
          <Route path="/cookiesPolicyPage" element={<CookiePolicy  />} />
          <Route path="/termsAndServicesPage" element={<TermsAndServices  />} />
          <Route path="/raymartPage" element={<RaymartPage />} />
          <Route path="/crmPage" element={<CrmPage />} />
          <Route path="/erpPage" element={<ErpPage />} />
          <Route path="/aiChatbotPage" element={<AiChatbotPage />} />
          <Route path="/jobSeekerPage" element={<JobSeekerPage />} />
          <Route path="/learningPage" element={<LearningPage />} />
          <Route path="/raymartPageTwo" element={<RayMartPageTwo />} />
          <Route path="/raymartPageThree" element={<RayMartPageThree />} />
          <Route path='/raymartPageFour' element={<RaymartPageFour />} />
          <Route path="/contactPage" element={<ContactPage />} />
          <Route path="/businessSuiteAiPage" element={<BusinessSuiteAI />} />
        <Route path="/showcase" element={<EnglorayShowcase />} />
        <Route path="/StatsAndBenefitsPage" element={<StatsAndBenefits />} />



        <Route path="/tech-group" element={
            <>
              <TechGroup />
            </>
          } />

        <Route path='/tech-learning' element = {
          <>
          <TechLearning/>
          </>
        }/>
        </Routes>
          </div>
    </Router>
  );
}

export default App;

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useEffect, useRef } from 'react';
// import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.css';
// import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// import Tagline from './Components/Tagline/Tagline';
// import Services from './Components/NavigateToNext/NavigateToNext';
// import NavigateToNext from './Components/NavigateToNext/NavigateToNext';
// import About from './Components/About/About';
// import CoreServices from './Components/CoreSevices/CoreServices';
// import Testimonials from './Components/Testimonials/Testimaonials';
// import Footer from './Components/Footer/Footer';
// import MarqueeBrands from './Components/MarqueeBrands/MarqueeBrands';
// import VisionMission from './Components/VisionMission/VisionMission';
// import SearchBar from './Components/SearchBar/SearchBar';
// import TwoLineNavbar from './Components/TwoLineNavbar/TwoLineNavbar';
// import DoubleMarquees from './Components/DoubleMarquees/DoubleMarquees';
// import OtherSectionCarousel from './Components/OtherSectionCarousel/OtherSectionCarousel';
// import TechGroup from './Pages/TechGroupSection/TechGroupPage/TechGroup'
// import TopNavBar from './Components/TopNavbar/TopNavbar';
// import TechLearning from './Pages/TechLearningSection/TechLearningPage/TechLearning';
// import BackToTopArrow from './Components/BackToTop/BackToTop';
// import BrandingDesigning from './Pages/Sub Pages/TechBrandingAndDesigning/BrandingAndDesigning';
// import AppWebDev from './Pages/Sub Pages/WebAndAppDevelopment/AppWebDev';
// import UiUxPage from './Pages/Sub Pages/UiUxPage/UiUxPage';
// import DigitalMarketing from './Pages/Sub Pages/DigitalMarketing/DigitalMarketing';
// import MobileApplications from './Pages/Sub Pages/MobileApplications/MobileApplications';
// import SoftwareAppDev from './Pages/Sub Pages/SoftwareAppDev/SoftwareAppDev';
// import ErpSolutions from './Pages/Sub Pages/ErpSolutions/ErpSolutions';
// import DigitalMarketingService from './Pages/Sub Pages/DigitalMarketingService/DigitalMarketingService';
// import SaaS from './Pages/Sub Pages/SaasPage/SaaS';
// import GraphicDesignCourse from './Pages/Sub Pages/GraphicDesignCourse/GraphicDesignCourse';
// import BrandingAndIdentiity from './Pages/Sub Pages/BrandingAndIdentity/BrandingAndIdentity';
// import UiuxDesignCourse from './Pages/Sub Pages/UiuxDesignCourse/UiUxDesignCourse';
// import WorksCaseStudies from './Pages/Sub Pages/WorksCaseStudies/WorksCaseStudies';
// import Courses from './Pages/TechLearningSection/Courses/Courses';
// import WorksClientProjects from './Pages/Sub Pages/WorksClientProjects/WorksClientProjects';
// import AllCoursesPage from './Pages/Sub Pages/MainCoursesPage/MainCoursesPage';
// import MainCoursesPage from './Pages/Sub Pages/MainCoursesPage/MainCoursesPage';
// import OurStoryPage from './Pages/Sub Pages/OurStoryPage/OurStoryPage';
// import OurTeamPage from './Pages/Sub Pages/OurTeamPage/OurTeamPage';
// import WorkshopsPage from './Pages/Sub Pages/WorkshopsPage/WorkshopsPage';
// import GraphicDesignerInternPage from './Pages/Sub Pages/GraphicDesignerInternPage/GraphicDesignerInterPage';
// import WebsiteDeveloperInterPage from './Pages/Sub Pages/WebstieDeveloperInternPage/WebsiteDeveloperInternPage';
// import UiUxDesignerInternPage from './Pages/Sub Pages/UiuxDesignerInternPage/UiuxDesignerInternPage';
// import SoftwareDeveloperInternPage from './Pages/Sub Pages/SoftwareDeveloperInternPage/SoftwareDeveloperInterPage';
// import CorporateTraining from './Pages/Sub Pages/CorporateTraining/CorporateTraining';
// import CareersPage from './Pages/Sub Pages/CareersPage/CareersPage';
// import MentorshipLearning from './Pages/Sub Pages/MentorshipLearning/MentorshipLearning';
// import PrivacyPolicy from './Pages/Sub Pages/PrivacyPolicy/PrivacyPolicy';
// import AllProgramsPage from './Pages/Sub Pages/AllProgramsPage/AllProgramsPage';
// import CookiePolicy from './Pages/Sub Pages/CookiePolicy/CookiePolicy';
// import TermsAndServices from './Pages/Sub Pages/TermsAndServices/TermsAndServices';
// import ProjectBasedLearning from './Pages/Sub Pages/ProjectBasedLearning/ProjectBasedLearning';
// import TechGroupProjects from './Pages/Sub Pages/TechGroupProjects/TechGroupProjects';
// import UiuxDesign from './Pages/Sub Pages/UiuxDesign/UiuxDesign';

// // Create a Locomotive Scroll wrapper component
// const HomePage = () => {
//   useEffect(() => {
//     const locomotiveScroll = new LocomotiveScroll({
//       el: document.querySelector('[data-scroll-container]'),
//       smooth: true,
//       lerp: 0.1, // Smoothness factor
//       multiplier: 0.8, // Scroll speed
//       smartphone: {
//         smooth: false // Disable on mobile for better performance
//       },
//       tablet: {
//         smooth: false
//       }
//     });

//     return () => {
//       locomotiveScroll.destroy();
//     };
//   }, []);

//   return (
//     <>
//       <TopNavBar />
//       <TwoLineNavbar />
//       <div data-scroll-container>
//         <div style={{ paddingTop: '140px' }}>
//           <Tagline />
//         </div>
//         <OtherSectionCarousel />
//         <VisionMission />
//         <DoubleMarquees />
//         <About />
//         <CoreServices />
//         <Testimonials />
//         <MarqueeBrands />
//         <Footer />
//       </div>
//       <BackToTopArrow />
//     </>
//   );
// };
// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path='/' element={<HomePage />} />
          
//           <Route path="/brandingPage" element={<BrandingDesigning />} />
//           <Route path="/developmentPage" element={<AppWebDev />} />
//           <Route path="/marketingPage" element={<DigitalMarketing />} />
//           <Route path="/UiUxPage" element={<UiUxPage />} />
//           <Route path="/mobileApplicationsPage" element={<MobileApplications />} />
          
//           <Route path="/corporateTraining" element={<CorporateTraining />} />
//           <Route path="/CareersPage" element={<CareersPage />} />
          
//           <Route path="/brandingIdentityPage" element={<BrandingAndIdentiity />} />
//           <Route path="/uiuxDesignPage" element={<UiuxDesign />} />
//           <Route path="/softwareDevelopmentPage" element={<SoftwareAppDev />} />
//           <Route path="/erpSolutionsPage" element={<ErpSolutions />} />
//           <Route path="/digitalMarketingServicePage" element={<DigitalMarketingService />} />
          
//           <Route path="/graphicsDesignCoursePage" element={<GraphicDesignCourse />} />
//           <Route path="/uiuxDesignCoursePage" element={<UiuxDesignCourse />} />
          
//           <Route path="/worksCaseStudiesPage" element={<WorksCaseStudies />} />
//           <Route path="/worksClientProjectsPage" element={<WorksClientProjects />} />
          
//           <Route path="/ourStoryPage" element={<OurStoryPage />} />
//           <Route path="/ourTeamPage" element={<OurTeamPage />} />
          
//           <Route path="/allCoursesPage" element={<MainCoursesPage />} />
//           <Route path="/workshopsPage" element={<WorkshopsPage />} />
          
//           <Route path="/allProjectsPage" element={<TechGroupProjects />} />
//           <Route path="/allProgramsPage" element={<AllProgramsPage />} />
          
//           <Route path="/GraphicDesignerInternPage" element={<GraphicDesignerInternPage />} />
//           <Route path="/websiteDeveloperInternPage" element={<WebsiteDeveloperInterPage />} />
//           <Route path="/uiuxDesignerInternPage" element={<UiUxDesignerInternPage />} />
//           <Route path="/SoftwareDeveloperInternPage" element={<SoftwareDeveloperInternPage />} />
          
//           <Route path="/mentorshipLearningPage" element={<MentorshipLearning />} />
//           <Route path="/projectBasedLearningPage" element={<ProjectBasedLearning />} />
          
//           <Route path="/privacyPolicyPage" element={<PrivacyPolicy />} />
//           <Route path="/cookiesPolicyPage" element={<CookiePolicy />} />
//           <Route path="/termsAndServicesPage" element={<TermsAndServices />} />
          
//           <Route path="/tech-group" element={<TechGroup />} />
//           <Route path="/tech-learning" element={<TechLearning />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;