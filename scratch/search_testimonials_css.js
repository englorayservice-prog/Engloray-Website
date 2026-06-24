const fs = require('fs');

const cssPath = "d:\\Engloraywebsite\\Engloray-pro-website\\src\\Pages\\Sub Pages\\EnglorayPortalPage\\EnglorayPortalPage.css";
const css = fs.readFileSync(cssPath, 'utf8');

const lines = css.split('\n');
lines.forEach((line, index) => {
  if (line.includes('testimonials') || line.includes('carousel') || line.includes('slide')) {
    console.log(`${index + 1}: ${line.trim()}`);
  }
});
