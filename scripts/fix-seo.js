/**
 * Fix Script — Repair misplaced SEO injections
 * 
 * Some files had their SEOHead/SchemaMarkup injected after `return ()` inside
 * useEffect cleanup functions instead of the component's actual return.
 * This script removes the misplaced tags and re-injects them correctly.
 */

const fs = require('fs');

const files = [
  ['d:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/JavaFullStackCourse/JavaFullStackCourse.jsx', '/javaFullStackCourseCoursePage'],
  ['d:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/MainCoursesPage/MainCoursesPage.jsx', '/allCoursesPage'],
  ['d:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/OurTeamPage/OurTeamPage.jsx', '/ourTeamPage'],
  ['d:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/SalesExecutiveInternPage/SalesExecutiveInternPage.jsx', '/salesExecutiveInternPage'],
  ['d:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/SoftwareDeveloperInternPage/SoftwareDeveloperInterPage.jsx', '/SoftwareDeveloperInternPage'],
  ['d:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/TrainingMentorInternPage/TrainingMentorInternPage.jsx', '/trainingMentorInternPage'],
  ['d:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/UiuxDesignCourse/UiUxDesignCourse.jsx', '/uiuxDesignCoursePage'],
  ['d:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/UiuxDesignerInternPage/UiuxDesignerInternPage.jsx', '/uiuxDesignerInternPage'],
  ['d:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/WebstieDeveloperInternPage/WebsiteDeveloperInternPage.jsx', '/websiteDeveloperInternPage'],
  ['d:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/DrawingCourse/DrawingCourse.jsx', '/drawingCoursePage'],
];

let fixed = 0;
let failed = 0;

files.forEach(([fp, route]) => {
  try {
    let content = fs.readFileSync(fp, 'utf-8');
    const lines = content.split('\n');
    
    // Step 1: Remove ALL existing SEOHead and SchemaMarkup lines
    const filtered = lines.filter(line => {
      const trimmed = line.trim();
      return !trimmed.startsWith('<SEOHead ') && !trimmed.startsWith('<SchemaMarkup ');
    });
    
    // Step 2: Find the component's return statement (the one that returns JSX)
    // It's the LAST "return (" that is followed by a JSX tag
    let componentReturnIdx = -1;
    for (let i = filtered.length - 1; i >= 0; i--) {
      const trimmed = filtered[i].trim();
      if (trimmed === 'return (' || trimmed.startsWith('return (')) {
        // Check if next non-empty line starts with < (JSX)
        for (let j = i + 1; j < filtered.length; j++) {
          const nextTrimmed = filtered[j].trim();
          if (nextTrimmed.length > 0) {
            if (nextTrimmed.startsWith('<')) {
              componentReturnIdx = i;
            }
            break;
          }
        }
        if (componentReturnIdx !== -1) break;
      }
    }
    
    if (componentReturnIdx === -1) {
      console.log('  SKIP: ' + fp.split('/').pop() + ' (no JSX return found)');
      failed++;
      return;
    }
    
    // Step 3: Find the first JSX tag after the return
    let firstTagIdx = -1;
    for (let j = componentReturnIdx + 1; j < filtered.length; j++) {
      if (filtered[j].trim().startsWith('<')) {
        firstTagIdx = j;
        break;
      }
    }
    
    if (firstTagIdx === -1) {
      console.log('  SKIP: ' + fp.split('/').pop() + ' (no tag after return)');
      failed++;
      return;
    }
    
    // Step 4: Find the closing > of the first tag
    let tagLine = filtered[firstTagIdx];
    const closeIdx = tagLine.indexOf('>');
    
    if (closeIdx === -1) {
      // Tag spans multiple lines, find >
      for (let j = firstTagIdx + 1; j < filtered.length; j++) {
        const ci = filtered[j].indexOf('>');
        if (ci !== -1) {
          // Insert after this line
          const seoLines = [
            '            <SEOHead pageKey="' + route + '" />',
            '            <SchemaMarkup pageKey="' + route + '" />'
          ];
          filtered.splice(j + 1, 0, ...seoLines);
          break;
        }
      }
    } else {
      // Tag closes on same line — insert after closing >
      const before = tagLine.substring(0, closeIdx + 1);
      const after = tagLine.substring(closeIdx + 1);
      
      const seoLines = [
        before,
        '            <SEOHead pageKey="' + route + '" />',
        '            <SchemaMarkup pageKey="' + route + '" />' + after
      ];
      
      filtered.splice(firstTagIdx, 1, ...seoLines);
    }
    
    fs.writeFileSync(fp, filtered.join('\n'), 'utf-8');
    console.log('  FIXED: ' + fp.split('/').pop());
    fixed++;
    
  } catch (err) {
    console.log('  ERROR: ' + fp.split('/').pop() + ' — ' + err.message);
    failed++;
  }
});

console.log('\n========================================');
console.log('  Fixed: ' + fixed + ', Failed: ' + failed);
console.log('========================================');
