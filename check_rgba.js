const { Jimp } = require('jimp');
const path = require('path');

const imgPath = path.join(__dirname, "src", "assets", "images", "applicationportal1person.png");

async function check() {
  const image = await Jimp.read(imgPath);
  const height = image.bitmap.height;
  
  console.log(`Printing RGBA at x = 0 for y from 1400 to 1535:`);
  for (let y = 1400; y < height; y += 5) {
    const idx = y * image.bitmap.width * 4;
    const r = image.bitmap.data[idx];
    const g = image.bitmap.data[idx+1];
    const b = image.bitmap.data[idx+2];
    const a = image.bitmap.data[idx+3];
    console.log(`y=${y}: RGBA(${r}, ${g}, ${b}, ${a})`);
  }
}

check().catch(console.error);
