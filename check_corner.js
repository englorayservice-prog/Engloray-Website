const { Jimp } = require('jimp');
const path = require('path');

const img1_path = path.join(__dirname, "src", "assets", "images", "applicationportal1person.png");
const img2_path = path.join(__dirname, "src", "assets", "images", "applicationportal3personimage.png");

async function inspect(filepath) {
  const image = await Jimp.read(filepath);
  const width = image.bitmap.width;
  const height = image.bitmap.height;
  
  console.log(`\nInspecting ${path.basename(filepath)}`);
  console.log(`Dimensions: ${width}x${height}`);
  
  // Inspect bottom right corner 150x150 region
  let nonWhiteCount = 0;
  for (let y = height - 150; y < height; y++) {
    for (let x = width - 150; x < width; x++) {
      const idx = (width * y + x) * 4;
      const r = image.bitmap.data[idx];
      const g = image.bitmap.data[idx+1];
      const b = image.bitmap.data[idx+2];
      
      if (r < 250 || g < 250 || b < 250) {
        nonWhiteCount++;
      }
    }
  }
  console.log(`Number of non-white pixels in bottom-right 150x150: ${nonWhiteCount}`);
}

async function run() {
  await inspect(img1_path);
  await inspect(img2_path);
}

run().catch(console.error);
