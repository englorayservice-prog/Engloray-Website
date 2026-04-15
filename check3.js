const fs = require('fs');
let content = fs.readFileSync('d:\\Engloraywebsite\\Engloray-pro-website\\src\\Pages\\Sub Pages\\DrawingCourse\\DrawingCourse.jsx', 'utf8');
let lines = content.split('\n');
let index = lines.findIndex(l => l.includes('arrow-capsule'));
if(index !== -1) {
    console.log(lines.slice(index - 2, index + 3).join('\n'));
} else {
    console.log('Not found');
}
