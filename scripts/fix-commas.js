/**
 * Fix missing commas in data objects
 * 
 * The original SEO injection ate trailing commas from icon properties.
 * When fix scripts removed the SEO tags, the commas were lost.
 * This restores them.
 */

const fs = require('fs');

const fixes = [
  { file: 'd:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/DrawingCourse/DrawingCourse.jsx', line: 194 },
  { file: 'd:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/JavaFullStackCourse/JavaFullStackCourse.jsx', line: 195 },
  { file: 'd:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/MainCoursesPage/MainCoursesPage.jsx', line: 136 },
  { file: 'd:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/OurTeamPage/OurTeamPage.jsx', line: 101 },
  { file: 'd:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/UiuxDesignCourse/UiUxDesignCourse.jsx', line: 206 },
  { file: 'd:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/DigitalMarketingCourse/DigitalMarketingCourse.jsx', line: 189 },
  { file: 'd:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/GraphicDesignCourse/GraphicDesignCourse.jsx', line: 170 },
];

let fixed = 0;

fixes.forEach(({ file, line: approxLine }) => {
  const fname = file.split('/').pop();
  try {
    const content = fs.readFileSync(file, 'utf-8');
    const lines = content.split('\n');
    
    // Search around the approximate line for the pattern
    const searchStart = Math.max(0, approxLine - 5);
    const searchEnd = Math.min(lines.length - 1, approxLine + 5);
    
    let foundAndFixed = false;
    
    for (let i = searchStart; i <= searchEnd; i++) {
      const line = lines[i];
      const trimmed = line.trimEnd();
      
      // Look for lines ending with /> but missing comma, inside an object literal
      // Pattern: icon: <FontAwesomeIcon ... /> (no comma, and next line has a property)
      if (trimmed.endsWith('/>') && !trimmed.endsWith('/>,') && line.includes('icon')) {
        // Check if next non-empty line suggests this is inside an object (has a property)
        const nextLine = (i + 1 < lines.length) ? lines[i + 1].trim() : '';
        if (nextLine.match(/^(points|color|tags|bgColor|iconColor|status|features|students|route|duration|level|projects|completion|image)\b/)) {
          lines[i] = trimmed + ',';
          foundAndFixed = true;
          console.log('  FIXED: ' + fname + ' (line ' + (i + 1) + '): added missing comma');
          break;
        }
      }
    }
    
    if (!foundAndFixed) {
      // Broader search: find ANY line with icon: <.../>  missing comma before a property line
      for (let i = 0; i < lines.length; i++) {
        const trimmed = lines[i].trimEnd();
        if (trimmed.endsWith('/>') && !trimmed.endsWith('/>,') && lines[i].includes('icon:')) {
          const nextLine = (i + 1 < lines.length) ? lines[i + 1].trim() : '';
          if (nextLine && !nextLine.startsWith('//') && !nextLine.startsWith('<') && !nextLine.startsWith('}') && !nextLine.startsWith(']') && nextLine.length > 0) {
            lines[i] = trimmed + ',';
            foundAndFixed = true;
            console.log('  FIXED: ' + fname + ' (line ' + (i + 1) + '): added missing comma (broad search)');
            break;
          }
        }
      }
    }
    
    if (foundAndFixed) {
      fs.writeFileSync(file, lines.join('\n'), 'utf-8');
      fixed++;
    } else {
      console.log('  NOTFOUND: ' + fname + ' — could not locate missing comma');
    }
    
  } catch (err) {
    console.log('  ERROR: ' + fname + ' — ' + err.message);
  }
});

console.log('\nFixed: ' + fixed + ' / ' + fixes.length);
