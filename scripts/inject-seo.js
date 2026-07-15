/**
 * SEO Injection Script — Engloray
 * 
 * Automatically injects SEOHead and SchemaMarkup components into page components.
 * Also fixes react-helmet → react-helmet-async imports.
 * 
 * Run: node scripts/inject-seo.js
 */

const fs = require('fs');
const path = require('path');

// Map of route -> actual file path (from App.js imports)
const routeToFile = {
  '/brandingPage': 'Pages/Sub Pages/TechBrandingAndDesigning/BrandingAndDesigning.jsx',
  '/brandingIdentityPage': 'Pages/Sub Pages/BrandingAndIdentity/BrandingAndIdentity.jsx',
  '/graphicDesignPage': 'Pages/Sub Pages/GraphicDesignPage/GraphicDesignPage.jsx',
  '/UiUxPage': 'Pages/Sub Pages/UiUxPage/UiUxPage.jsx',
  '/uiuxDesignPage': 'Pages/Sub Pages/UiuxDesign/UiuxDesign.jsx',
  '/developmentPage': 'Pages/Sub Pages/WebAndAppDevelopment/AppWebDev.jsx',
  '/websiteDevelopmentPage': 'Pages/Sub Pages/WebsiteDevelopment/WebsiteDevelopment.jsx',
  '/appDevelopmentPage': 'Pages/Sub Pages/AppDevelopment/AppDevelopment.jsx',
  '/mobileApplicationsPage': 'Pages/Sub Pages/MobileApplications/MobileApplications.jsx',
  '/softwareDevelopmentPage': 'Pages/Sub Pages/SoftwareAppDev/SoftwareAppDev.jsx',
  '/softwareSolutionPage': 'Pages/Sub Pages/SoftwareTechSolution/SoftwareTechSolution.jsx',
  '/aiServicesPage': 'Pages/Sub Pages/AIServicesPage/AIServicesPage.jsx',
  '/aiProductPage': 'Pages/Sub Pages/Ai-Products/MobileApplications.jsx',
  '/aiChatbotPage': 'Pages/Sub Pages/AiChatbotPage/AiChatbotPage.jsx',
  '/businessSuiteAiPage': 'Pages/Sub Pages/BusinessSuiteAI/BusinessSuiteAI.jsx',
  '/marketingPage': 'Pages/Sub Pages/DigitalMarketing/DigitalMarketing.jsx',
  '/digitalMarketingServicePage': 'Pages/Sub Pages/DigitalMarketingService/DigitalMarketingService.jsx',
  '/erpSolutionsPage': 'Pages/Sub Pages/ErpSolutions/ErpSolutions.jsx',
  '/erpPage': 'Pages/Sub Pages/ErpPage/ErpPage.jsx',
  '/crmServicesPage': 'Pages/Sub Pages/CrmServices/CrmServices.jsx',
  '/crmPage': 'Pages/Sub Pages/CrmPage/CrmPage.jsx',
  '/saasPage': 'Pages/Sub Pages/SaasPage/SaaS.jsx',
  '/ecommerceDevelopmentPage': 'Pages/Sub Pages/ECommerceDevelopment/ECommerceDevelopment.jsx',
  '/dataAnalyticsPage': 'Pages/Sub Pages/DataAnalytics/DataAnalytics.jsx',
  '/dataanalyticsbusiness': 'Pages/Sub Pages/DataAnalyticsBusiness/DataAnalyticsBusiness.jsx',
  '/allCoursesPage': 'Pages/Sub Pages/MainCoursesPage/MainCoursesPage.jsx',
  '/uiuxDesignCoursePage': 'Pages/Sub Pages/UiuxDesignCourse/UiUxDesignCourse.jsx',
  '/graphicsDesignCoursePage': 'Pages/Sub Pages/GraphicDesignCourse/GraphicDesignCourse.jsx',
  '/javaFullStackCourseCoursePage': 'Pages/Sub Pages/JavaFullStackCourse/JavaFullStackCourse.jsx',
  '/drawingCoursePage': 'Pages/Sub Pages/DrawingCourse/DrawingCourse.jsx',
  '/digitalMarketingCoursePage': 'Pages/Sub Pages/DigitalMarketingCourse/DigitalMarketingCourse.jsx',
  '/corporateTraining': 'Pages/Sub Pages/CorporateTraining/CorporateTraining.jsx',
  '/mentorshipLearningPage': 'Pages/Sub Pages/MentorshipLearning/MentorshipLearning.jsx',
  '/projectBasedLearningPage': 'Pages/Sub Pages/ProjectBasedLearning/ProjectBasedLearning.jsx',
  '/workshopsPage': 'Pages/Sub Pages/WorkshopsPage/WorkshopsPage.jsx',
  '/allProgramsPage': 'Pages/Sub Pages/AllProgramsPage/AllProgramsPage.jsx',
  '/GraphicDesignerInternPage': 'Pages/Sub Pages/GraphicDesignerInternPage/GraphicDesignerInterPage.jsx',
  '/websiteDeveloperInternPage': 'Pages/Sub Pages/WebstieDeveloperInternPage/WebsiteDeveloperInternPage.jsx',
  '/uiuxDesignerInternPage': 'Pages/Sub Pages/UiuxDesignerInternPage/UiuxDesignerInternPage.jsx',
  '/SoftwareDeveloperInternPage': 'Pages/Sub Pages/SoftwareDeveloperInternPage/SoftwareDeveloperInterPage.jsx',
  '/salesExecutiveInternPage': 'Pages/Sub Pages/SalesExecutiveInternPage/SalesExecutiveInternPage.jsx',
  '/businessDevelopmentInternPage': 'Pages/Sub Pages/BusinessDevelopmentInternPage/BusinessDevelopmentInternPage.jsx',
  '/trainingMentorInternPage': 'Pages/Sub Pages/TrainingMentorInternPage/TrainingMentorInternPage.jsx',
  '/raymartPage': 'Pages/Sub Pages/RaymartPage/RaymartPage.jsx',
  '/raymartPageTwo': 'Pages/Sub Pages/RayMartPageTwo/RayMartPageTwo.jsx',
  '/raymartPageThree': 'Pages/Sub Pages/RayMartPageThree/RayMartPageThree.jsx',
  '/raymartPageFour': 'Pages/Sub Pages/FaqRaymart/FaqRaymart.jsx',
  '/jobSeekerPage': 'Pages/Sub Pages/JobSeekerPage/JobSeekerPage.jsx',
  '/learningPage': 'Pages/Sub Pages/LearningPage/LearningPage.jsx',
  '/ourStoryPage': 'Pages/Sub Pages/OurStoryPage/OurStoryPage.jsx',
  '/ourTeamPage': 'Pages/Sub Pages/OurTeamPage/OurTeamPage.jsx',
  '/contactPage': 'Pages/Sub Pages/ContactPage/ContactPage.jsx',
  '/CareersPage': 'Pages/Sub Pages/CareersPage/CareersPage.jsx',
  '/worksCaseStudiesPage': 'Pages/Sub Pages/WorksCaseStudies/WorksCaseStudies.jsx',
  '/worksClientProjectsPage': 'Pages/Sub Pages/WorksClientProjects/WorksClientProjects.jsx',
  '/allProjectsPage': 'Pages/Sub Pages/TechGroupProjects/TechGroupProjects.jsx',
  '/showcase': 'Pages/Sub Pages/EnglorayShowcase/EnglorayShowcase.jsx',
  '/privacyPolicyPage': 'Pages/Sub Pages/PrivacyPolicy/PrivacyPolicy.jsx',
  '/cookiesPolicyPage': 'Pages/Sub Pages/CookiePolicy/CookiePolicy.jsx',
  '/termsAndServicesPage': 'Pages/Sub Pages/TermsAndServices/TermsAndServices.jsx',
  '/tech-group': 'Pages/TechGroupSection/TechGroupPage/TechGroup.jsx',
  '/tech-learning': 'Pages/TechLearningSection/TechLearningPage/TechLearning.jsx',
  '/admissionPortal': 'Pages/Sub Pages/EnglorayPortalPage/EnglorayPortalPage.jsx',
  '/StatsAndBenefitsPage': 'Pages/Sub Pages/StatsAndBenefits/StatsAndBenefits.jsx',
};

const srcDir = path.join(__dirname, '..', 'src');

function getRelativeImportPath(filePath) {
  const fileDir = path.dirname(filePath);
  const seoDir = path.join(srcDir, 'seo');
  let relative = path.relative(fileDir, seoDir).replace(/\\/g, '/');
  if (!relative.startsWith('.')) relative = './' + relative;
  return relative;
}

function processFile(route, relativeFilePath) {
  const fullPath = path.join(srcDir, relativeFilePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`  SKIP: ${relativeFilePath} (file not found)`);
    return { status: 'skip', reason: 'not found' };
  }

  let content = fs.readFileSync(fullPath, 'utf-8');
  
  // Check if SEOHead is already injected
  if (content.includes('SEOHead')) {
    console.log(`  ALREADY: ${relativeFilePath}`);
    return { status: 'already' };
  }

  const importPath = getRelativeImportPath(fullPath);
  const seoHeadImport = `import SEOHead from '${importPath}/SEOHead';`;
  const schemaImport = `import SchemaMarkup from '${importPath}/SchemaMarkup';`;

  // Fix react-helmet to react-helmet-async
  let helmetFixed = false;
  if (content.includes("from 'react-helmet'") && !content.includes("from 'react-helmet-async'")) {
    content = content.replace(/from\s+'react-helmet'/g, "from 'react-helmet-async'");
    helmetFixed = true;
  }
  if (content.includes('from "react-helmet"') && !content.includes('from "react-helmet-async"')) {
    content = content.replace(/from\s+"react-helmet"/g, 'from "react-helmet-async"');
    helmetFixed = true;
  }

  // Find the last import line to add our imports after it
  const lines = content.split('\n');
  let lastImportIndex = -1;
  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (trimmed.startsWith('import ') && (trimmed.includes(' from ') || trimmed.includes("from '"))) {
      lastImportIndex = i;
    }
  }

  if (lastImportIndex === -1) {
    console.log(`  SKIP: ${relativeFilePath} (no imports found)`);
    return { status: 'skip', reason: 'no imports' };
  }

  // Add imports after last import
  lines.splice(lastImportIndex + 1, 0, seoHeadImport, schemaImport);
  content = lines.join('\n');

  // Now inject the components into the JSX return
  const seoJsx = `\n            <SEOHead pageKey="${route}" />\n            <SchemaMarkup pageKey="${route}" />`;
  
  // Find "return (" and then the first > after an opening tag
  let injected = false;
  const returnIndex = content.indexOf('return (');
  if (returnIndex !== -1) {
    const afterReturn = content.substring(returnIndex);
    // Match the first JSX tag opening after return (
    const tagMatch = afterReturn.match(/<[A-Za-z][^>]*>/);
    if (tagMatch) {
      const tagEndPos = returnIndex + afterReturn.indexOf(tagMatch[0]) + tagMatch[0].length;
      content = content.substring(0, tagEndPos) + seoJsx + content.substring(tagEndPos);
      injected = true;
    }
  }

  if (!injected) {
    // Try "return(" without space
    const returnIndex2 = content.indexOf('return(');
    if (returnIndex2 !== -1) {
      const afterReturn = content.substring(returnIndex2);
      const tagMatch = afterReturn.match(/<[A-Za-z][^>]*>/);
      if (tagMatch) {
        const tagEndPos = returnIndex2 + afterReturn.indexOf(tagMatch[0]) + tagMatch[0].length;
        content = content.substring(0, tagEndPos) + seoJsx + content.substring(tagEndPos);
        injected = true;
      }
    }
  }

  if (!injected) {
    console.log(`  MANUAL: ${relativeFilePath} (imports added, JSX not injected)`);
    fs.writeFileSync(fullPath, content, 'utf-8');
    return { status: 'partial', reason: 'imports only' };
  }

  fs.writeFileSync(fullPath, content, 'utf-8');
  const details = [];
  if (helmetFixed) details.push('helmet-async fixed');
  console.log(`  DONE: ${relativeFilePath}${details.length ? ` (${details.join(', ')})` : ''}`);
  return { status: 'done' };
}

// Main execution
console.log('========================================');
console.log('  Engloray SEO Injection Script');
console.log('========================================\n');

const results = { done: 0, already: 0, skip: 0, partial: 0, error: 0 };

for (const [route, filePath] of Object.entries(routeToFile)) {
  try {
    const result = processFile(route, filePath);
    results[result.status]++;
  } catch (err) {
    console.log(`  ERROR: ${filePath} - ${err.message}`);
    results.error++;
  }
}

console.log('\n========================================');
console.log(`  Results:`);
console.log(`  Done:    ${results.done}`);
console.log(`  Already: ${results.already}`);
console.log(`  Skip:    ${results.skip}`);
console.log(`  Partial: ${results.partial}`);
console.log(`  Error:   ${results.error}`);
console.log('========================================');
