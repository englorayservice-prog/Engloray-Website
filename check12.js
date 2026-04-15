const fs = require('fs');
let path = 'd:\\Engloraywebsite\\Engloray-pro-website\\src\\Pages\\Sub Pages\\DrawingCourse\\DrawingCourse.jsx';
let content = fs.readFileSync(path, 'utf8');

// Find all matches of \u00e2 followed by 2 characters
let matches = content.match(/\u00e2../g);
if (matches) {
    let unq = [...new Set(matches)];
    unq.forEach(m => {
        let hex = '';
        for(let i=0; i<m.length; i++) {
            hex += '\\u' + m.charCodeAt(i).toString(16).padStart(4, '0');
        }
        console.log(m + " -> " + hex);
    });
}
