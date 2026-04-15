const fs = require('fs');
let path = 'd:\\Engloraywebsite\\Engloray-pro-website\\src\\Pages\\Sub Pages\\DrawingCourse\\DrawingCourse.css';
let content = fs.readFileSync(path, 'utf8');
let lines = content.split('\n');
for(let i=0; i<lines.length; i++) {
    if(lines[i].includes('content:') && lines[i].includes('v3-arrow-capsule-straight')) {
        console.log("Found in CSS! Line " + i + ": " + lines[i]);
    }
}
