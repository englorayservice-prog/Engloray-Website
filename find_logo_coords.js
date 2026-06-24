const { Jimp } = require('jimp');
const path = require('path');

const img1_path = path.join(__dirname, "src", "assets", "images", "applicationportal1person.png");
const img2_path = path.join(__dirname, "src", "assets", "images", "applicationportal3personimage.png");

async function findLogo(filepath) {
  const image = await Jimp.read(filepath);
  const width = image.bitmap.width;
  const height = image.bitmap.height;
  
  console.log(`\nAnalyzing ${path.basename(filepath)} (${width}x${height})`);
  
  // The watermark is a star. In the original image before background removal,
  // the area around it might be white, or it might be on the table/clothes.
  // Let's print the colors of pixels in the bottom right 150x150 corner to find
  // where there is a cluster of bright pixels that doesn't match the background/table.
  // Let's find the bounding box of the star.
  // The star is bright white/gray. Let's look for pixels with R,G,B > 220
  // that are NOT part of the white background (or if it's on a dark background).
  
  let minX = width, maxX = 0, minY = height, maxY = 0;
  let count = 0;
  
  for (let y = height - 150; y < height - 10; y++) {
    for (let x = width - 150; x < width - 10; x++) {
      const idx = (width * y + x) * 4;
      const r = image.bitmap.data[idx];
      const g = image.bitmap.data[idx+1];
      const b = image.bitmap.data[idx+2];
      
      // Let's see: if it's a bright pixel (R>200, G>200, B>200)
      // but let's check the surroundings. If the background is white, we only care about
      // bright pixels that are surrounded by darker pixels (like the table/clothes).
      // Or we can just print any bright pixels that are not pure white (e.g. 200 to 254).
      if (r > 200 && r < 255 && g > 200 && g < 255 && b > 200 && b < 255) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
        count++;
      }
    }
  }
  
  if (count > 0) {
    console.log(`Potential logo bounds: X: ${minX} to ${maxX}, Y: ${minY} to ${maxY} (count: ${count})`);
  } else {
    console.log("No potential logo pixels found with simple bright threshold.");
  }
}

async function run() {
  await findLogo(img1_path);
  await findLogo(img2_path);
}

run().catch(console.error);
