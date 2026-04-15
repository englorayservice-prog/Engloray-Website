const fs = require('fs');
let content = fs.readFileSync('d:\\Engloraywebsite\\Engloray-pro-website\\src\\Pages\\Sub Pages\\DrawingCourse\\DrawingCourse.jsx', 'binary');
let lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('\u00e2')) {
        console.log('Line ' + i + ': ' + lines[i].trim());
    }
}
