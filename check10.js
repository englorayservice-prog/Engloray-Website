const fs = require('fs');
let content = fs.readFileSync('d:\\Engloraywebsite\\Engloray-pro-website\\src\\Pages\\Sub Pages\\JavaFullStackCourse\\JavaFullStackCourse.css');
if (content[0] === 0xEF && content[1] === 0xBB && content[2] === 0xBF) {
    console.log('Has BOM');
} else {
    console.log('No BOM');
}
