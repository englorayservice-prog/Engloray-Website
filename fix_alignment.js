const fs = require('fs');

const cssPath = 'd:\\Engloraywebsite\\Engloray-pro-website\\src\\Pages\\Sub Pages\\DrawingCourse\\DrawingCourse.css';
let cssContent = fs.readFileSync(cssPath, 'utf8');

const cssStart = '/* Course Outcomes - Numbered Grid Section */';
const cssEnd = '/* 6-Month Curriculum Slider - UPDATED NO SCROLL VERSION */';

let cssBefore = cssContent.substring(0, cssContent.indexOf(cssStart));
let cssMiddle = cssContent.substring(cssContent.indexOf(cssStart), cssContent.indexOf(cssEnd));
let cssAfter = cssContent.substring(cssContent.indexOf(cssEnd));

// Change dgm to dwg
cssMiddle = cssMiddle.replace(/dgm-/g, 'dwg-');

// Fix the styling for alignment and remove hover
cssMiddle = cssMiddle.replace(/transform:\s*translate\(8px,\s*-55px\);/g, 'transform: none;');
cssMiddle = cssMiddle.replace(/margin-top:\s*0;\s*transform:\s*translateY\(-10px\);/g, 'margin-top: 0; transform: none;');
cssMiddle = cssMiddle.replace(/margin-top:\s*50px;/g, 'margin-top: 0;');
cssMiddle = cssMiddle.replace(/gap:\s*25px;/g, 'gap: 15px;');
cssMiddle = cssMiddle.replace(/transform:\s*scale\(1\.03\);/g, 'transform: none;');
cssMiddle = cssMiddle.replace(/\.dwg-outcome-numbered-card:hover \.dwg-outcome-numbered-icon\s*{\s*transform:\s*scale\(1\.05\);\s*}/g, '');
cssMiddle = cssMiddle.replace(/transform:\s*translateY\(10px\);/g, 'transform: none;');


cssContent = cssBefore + cssMiddle + cssAfter;
fs.writeFileSync(cssPath, cssContent, 'utf8');


const jsxPath = 'd:\\Engloraywebsite\\Engloray-pro-website\\src\\Pages\\Sub Pages\\DrawingCourse\\DrawingCourse.jsx';
let jsxContent = fs.readFileSync(jsxPath, 'utf8');
const jsxStart = '{/* Course Outcomes - Redesigned Numbered Grid */}';
const jsxEnd = '{/* 6-Month Course Breakdown - Vertical Slider Redesign */}';

let jsxBefore = jsxContent.substring(0, jsxContent.indexOf(jsxStart));
let jsxMiddle = jsxContent.substring(jsxContent.indexOf(jsxStart), jsxContent.indexOf(jsxEnd));
let jsxAfter = jsxContent.substring(jsxContent.indexOf(jsxEnd));

jsxMiddle = jsxMiddle.replace(/dgm-/g, 'dwg-');
jsxContent = jsxBefore + jsxMiddle + jsxAfter;
fs.writeFileSync(jsxPath, jsxContent, 'utf8');

console.log('done');
