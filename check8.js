const fs = require('fs');
let content = fs.readFileSync('d:\\Engloraywebsite\\Engloray-pro-website\\src\\Pages\\Sub Pages\\DrawingCourse\\DrawingCourse.jsx', 'utf8');
let lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('\u2192') || lines[i].includes('arrow-capsule')) {
        console.log('Line ' + i + ': ' + lines[i].trim());
    }
}
