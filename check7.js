const fs = require('fs');
let content = fs.readFileSync('d:\\Engloraywebsite\\Engloray-pro-website\\src\\Pages\\Sub Pages\\JavaFullStackCourse\\JavaFullStackCourse.css', 'utf8');
let index = content.indexOf('v3-arrow-capsule-straight::after');
if (index !== -1) {
    console.log(content.substring(index, index + 200));
} else {
    let index2 = content.indexOf('v3-arrow-capsule-straight');
    console.log(content.substring(index2, index2 + 500));
}
