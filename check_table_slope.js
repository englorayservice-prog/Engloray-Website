const { Jimp } = require('jimp');
const path = require('path');
const fs = require('fs');

const imgPath = path.join(__dirname, "src", "assets", "images", "applicationportal1person.png.bak");

async function check() {
  const image = await Jimp.read(imgPath);
  const width = image.bitmap.width;
  const height = image.bitmap.height;
  
  // Trace table top edge from x = 0 to x = 1200
  // Background removal first to make sure we only find the table edge
  // Helper to check if close to white
  function isCloseToWhite(r, g, b, threshold = 70) {
    const dist = Math.sqrt(
      Math.pow(255 - r, 2) +
      Math.pow(255 - g, 2) +
      Math.pow(255 - b, 2)
    );
    return dist < threshold;
  }
  
  // Set white pixels transparent for testing the edge
  for (let y = 1200; y < height; y++) {
    for (let x = 0; x < 1300; x++) {
      const idx = (y * width + x) * 4;
      const r = image.bitmap.data[idx];
      const g = image.bitmap.data[idx+1];
      const b = image.bitmap.data[idx+2];
      if (isCloseToWhite(r, g, b, 70)) {
        image.bitmap.data[idx+3] = 0;
      }
    }
  }

  console.log("Tracing table top edge:");
  for (let x = 0; x <= 1200; x += 100) {
    let tableTopY = -1;
    for (let y = 1200; y < height; y++) {
      const idx = (y * width + x) * 4;
      const alpha = image.bitmap.data[idx + 3];
      if (alpha > 0) {
        tableTopY = y;
        break;
      }
    }
    console.log(`x = ${x}: tableTopY = ${tableTopY}`);
  }
}

check().catch(console.error);
