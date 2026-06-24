const { Jimp } = require('jimp');
const path = require('path');

const imgPath = path.join(__dirname, "src", "assets", "images", "applicationportal1person.png");

async function check() {
  const image = await Jimp.read(imgPath);
  const width = image.bitmap.width;
  const height = image.bitmap.height;
  
  console.log(`Dimensions: ${width}x${height}`);
  
  // The table is at the bottom (y around 1400 to 1536).
  // Let's find the first non-transparent pixel in this row range starting from x = 0.
  // In the processed image, background is transparent (alpha = 0).
  for (let y = height - 100; y < height - 10; y += 10) {
    let firstSolidX = -1;
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const alpha = image.bitmap.data[idx + 3];
      if (alpha > 0) {
        firstSolidX = x;
        break;
      }
    }
    console.log(`Row y=${y}: first solid pixel at x=${firstSolidX}`);
  }
}

check().catch(console.error);
