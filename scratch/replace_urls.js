const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '..', 'public', 'portal-tailwind.css');
const destPath = path.join(__dirname, '..', 'src', 'Pages', 'Sub Pages', 'EnglorayPortalPage', 'portal-tailwind.css');

if (!fs.existsSync(srcPath)) {
  console.error('Source file not found at:', srcPath);
  process.exit(1);
}

let content = fs.readFileSync(srcPath, 'utf8');

// Replace relative urls like url(./Matimo...) with absolute urls like url(/Matimo...)
// Webpack's CSS loader ignores absolute URLs, preventing compilation/resolution failures for hashed asset files.
const updatedContent = content.replace(/url\(\.\/([^)]+)\)/g, (match, p1) => {
  console.log(`Replacing relative URL: ${match} -> url(/${p1})`);
  return `url(/${p1})`;
});

fs.writeFileSync(destPath, updatedContent, 'utf8');
console.log('Successfully processed and copied portal-tailwind.css to src folder!');
