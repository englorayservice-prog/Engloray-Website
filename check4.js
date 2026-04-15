const fs = require('fs');
let content = fs.readFileSync('d:\\Engloraywebsite\\Engloray-pro-website\\src\\Pages\\Sub Pages\\DrawingCourse\\DrawingCourse.css', 'binary');
if (content.includes('\u00e2')) {
    console.log('Contains garbled characters (?) !');
} else {
    console.log('Clean');
}
