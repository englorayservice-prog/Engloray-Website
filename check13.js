const fs = require('fs');
let path = 'd:\\Engloraywebsite\\Engloray-pro-website\\src\\Pages\\Sub Pages\\DrawingCourse\\DrawingCourse.jsx';
let content = fs.readFileSync(path, 'utf8');
let lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('\u00e2')) {
        let hex = '';
        let line = lines[i].trim();
        for(let j=0; j<line.length; j++) {
            if(line.charCodeAt(j) > 127) {
                hex += '[' + line[j] + '=\\u' + line.charCodeAt(j).toString(16).padStart(4, '0') + '] ';
            }
        }
        console.log('Line ' + i + ': ' + hex);
    }
}
