const fs = require('fs');
let content = fs.readFileSync('d:\\Engloraywebsite\\Engloray-pro-website\\src\\Pages\\Sub Pages\\DrawingCourse\\DrawingCourse.css', 'utf8');
let lines = content.split('\n');
let index = lines.findIndex(l => l.includes('v3-arrow-capsule-straight'));
if(index !== -1) {
    console.log(lines.slice(index, index + 25).join('\n'));
} else {
    console.log('Not found');
}
