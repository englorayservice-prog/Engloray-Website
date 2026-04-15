const fs = require('fs');
let path = 'd:\\Engloraywebsite\\Engloray-pro-website\\src\\Pages\\Sub Pages\\JavaFullStackCourse\\JavaFullStackCourse.css';
let content = fs.readFileSync(path, 'utf8');
let lines = content.split('\n');
for(let i=0; i<lines.length; i++) {
    if(lines[i].includes('arrow-capsule')) {
        console.log("Line " + i + ": " + lines[i]);
    }
}
