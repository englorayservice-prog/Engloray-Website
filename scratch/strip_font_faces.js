const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'src', 'Pages', 'Sub Pages', 'EnglorayPortalPage', 'portal-tailwind.css');

if (!fs.existsSync(cssPath)) {
  console.error('File not found at:', cssPath);
  process.exit(1);
}

let content = fs.readFileSync(cssPath, 'utf8');

// Find all @font-face blocks in the CSS
const fontFaceRegex = /@font-face\s*\{[^}]+\}/g;
const fontFaces = [];
let match;

while ((match = fontFaceRegex.exec(content)) !== null) {
  fontFaces.push(match[0]);
}

console.log(`Found ${fontFaces.length} @font-face declarations.`);

// Remove @font-face declarations from the CSS content
const cleanedContent = content.replace(fontFaceRegex, '');

// Write the cleaned CSS back
fs.writeFileSync(cssPath, cleanedContent, 'utf8');
console.log('Successfully removed @font-face declarations from portal-tailwind.css');

// Write the extracted @font-face declarations to a js file for easy import/injection
const jsFilePath = path.join(__dirname, '..', 'src', 'Pages', 'Sub Pages', 'EnglorayPortalPage', 'portal-fonts.js');
const jsContent = `// Extracted Font Faces for dynamic HTML injection to bypass Webpack bundling errors
export const fontStyles = \`
${fontFaces.join('\n\n')}
\`;
`;

fs.writeFileSync(jsFilePath, jsContent, 'utf8');
console.log('Successfully wrote font declarations to portal-fonts.js!');
