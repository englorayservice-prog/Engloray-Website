const fs = require('fs');
let path = 'd:\\Engloraywebsite\\Engloray-pro-website\\src\\Pages\\Sub Pages\\DrawingCourse\\DrawingCourse.jsx';
let content = fs.readFileSync(path, 'utf8');
let lines = content.split('\n');

let index = lines.findIndex(l => l.includes('arrow-capsule'));
if (index !== -1) {
    let line = lines[index].trim();
    console.log("Line: " + line);
    let hex = '';
    for(let j=0; j<line.length; j++) {
        if(line.charCodeAt(j) > 127) {
            hex += "\\u" + line.charCodeAt(j).toString(16).padStart(4, '0');
        }
    }
    console.log("Hex: " + hex);
}
