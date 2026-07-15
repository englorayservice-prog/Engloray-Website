/**
 * Comprehensive SEO Fix Script v2
 * 
 * Handles ALL remaining issues:
 * 1. Files where SEO tags were placed in wrong location (inside data objects)
 * 2. Files where SEO tags cause "Adjacent JSX elements" errors
 * 3. Files that still had the original injection untouched
 */

const fs = require('fs');

const allFiles = [
  // Files with misplaced/broken injections (need remove + re-inject)
  ['d:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/DrawingCourse/DrawingCourse.jsx', '/drawingCoursePage'],
  ['d:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/JavaFullStackCourse/JavaFullStackCourse.jsx', '/javaFullStackCourseCoursePage'],
  ['d:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/MainCoursesPage/MainCoursesPage.jsx', '/allCoursesPage'],
  ['d:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/OurTeamPage/OurTeamPage.jsx', '/ourTeamPage'],
  ['d:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/UiuxDesignCourse/UiUxDesignCourse.jsx', '/uiuxDesignCoursePage'],
  // Files with Adjacent JSX errors (first-time fixes)
  ['d:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/BusinessDevelopmentInternPage/BusinessDevelopmentInternPage.jsx', '/businessDevelopmentInternPage'],
  ['d:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/DigitalMarketingCourse/DigitalMarketingCourse.jsx', '/digitalMarketingCoursePage'],
  ['d:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/EnglorayPortalPage/EnglorayPortalPage.jsx', '/admissionPortal'],
  ['d:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/GraphicDesignCourse/GraphicDesignCourse.jsx', '/graphicsDesignCoursePage'],
  // These intern pages too
  ['d:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/SalesExecutiveInternPage/SalesExecutiveInternPage.jsx', '/salesExecutiveInternPage'],
  ['d:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/SoftwareDeveloperInternPage/SoftwareDeveloperInterPage.jsx', '/SoftwareDeveloperInternPage'],
  ['d:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/TrainingMentorInternPage/TrainingMentorInternPage.jsx', '/trainingMentorInternPage'],
  ['d:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/UiuxDesignerInternPage/UiuxDesignerInternPage.jsx', '/uiuxDesignerInternPage'],
  ['d:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/WebstieDeveloperInternPage/WebsiteDeveloperInternPage.jsx', '/websiteDeveloperInternPage'],
];

let fixed = 0;
let failed = 0;

allFiles.forEach(([fp, route]) => {
  try {
    let content = fs.readFileSync(fp, 'utf-8');
    const lines = content.split('\n');
    const fname = fp.split('/').pop();
    
    // Step 1: Remove ALL existing SEOHead and SchemaMarkup lines from JSX
    const filtered = lines.filter(line => {
      const trimmed = line.trim();
      return !trimmed.startsWith('<SEOHead ') && !trimmed.startsWith('<SchemaMarkup ');
    });
    
    // Step 2: Find the component's JSX return — the one with JSX tags after it
    // We search from END to find the main component return, not nested returns
    let componentReturnIdx = -1;
    for (let i = filtered.length - 1; i >= 0; i--) {
      const trimmed = filtered[i].trim();
      if (trimmed === 'return (' || trimmed.startsWith('return (')) {
        // Verify next non-empty line starts with < (JSX)
        for (let j = i + 1; j < filtered.length; j++) {
          const next = filtered[j].trim();
          if (next.length > 0) {
            if (next.startsWith('<')) {
              componentReturnIdx = i;
            }
            break;
          }
        }
        if (componentReturnIdx !== -1) break;
      }
    }
    
    if (componentReturnIdx === -1) {
      console.log('  SKIP: ' + fname + ' (no JSX return)');
      failed++;
      return;
    }
    
    // Step 3: Find the first opening tag after return
    let firstTagIdx = -1;
    for (let j = componentReturnIdx + 1; j < filtered.length; j++) {
      if (filtered[j].trim().startsWith('<')) {
        firstTagIdx = j;
        break;
      }
    }
    
    if (firstTagIdx === -1) {
      console.log('  SKIP: ' + fname + ' (no tag after return)');
      failed++;
      return;
    }
    
    // Step 4: Find the closing > of this first tag (it might be on same or next lines)
    let insertAfterIdx = -1;
    for (let j = firstTagIdx; j < filtered.length; j++) {
      if (filtered[j].includes('>')) {
        insertAfterIdx = j;
        break;
      }
    }
    
    if (insertAfterIdx === -1) {
      console.log('  SKIP: ' + fname + ' (no closing >)');
      failed++;
      return;
    }
    
    // Step 5: Get indent from the line below the tag for consistent formatting
    let indent = '            '; // default 12 spaces
    if (insertAfterIdx + 1 < filtered.length) {
      const nextLine = filtered[insertAfterIdx + 1];
      const match = nextLine.match(/^(\s+)/);
      if (match) indent = match[1];
    }
    
    // Step 6: Insert SEO tags after the closing >
    const seoLines = [
      indent + '<SEOHead pageKey="' + route + '" />',
      indent + '<SchemaMarkup pageKey="' + route + '" />'
    ];
    
    filtered.splice(insertAfterIdx + 1, 0, ...seoLines);
    
    fs.writeFileSync(fp, filtered.join('\n'), 'utf-8');
    console.log('  FIXED: ' + fname);
    fixed++;
    
  } catch (err) {
    console.log('  ERROR: ' + fp.split('/').pop() + ' — ' + err.message);
    failed++;
  }
});

console.log('\n========================================');
console.log('  Fixed: ' + fixed + ', Failed: ' + failed);
console.log('========================================');
