const { Jimp } = require('jimp');
const fs = require('fs');
const path = require('path');

const img1_path = path.join(__dirname, "src", "assets", "images", "applicationportal1person.png");
const img2_path = path.join(__dirname, "src", "assets", "images", "applicationportal3personimage.png");

// Back up function
function backupFile(filepath) {
  const backupPath = filepath + ".bak";
  if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(filepath, backupPath);
    console.log(`Backed up: ${path.basename(filepath)} -> ${path.basename(backupPath)}`);
  } else {
    console.log(`Backup already exists for: ${path.basename(filepath)}`);
  }
}

// Check distance to white (255, 255, 255)
function isCloseToWhite(r, g, b, threshold = 65) {
  const dist = Math.sqrt(
    Math.pow(255 - r, 2) +
    Math.pow(255 - g, 2) +
    Math.pow(255 - b, 2)
  );
  return dist < threshold;
}

async function processImage(filepath, isImage1) {
  backupFile(filepath);
  
  const image = await Jimp.read(filepath + ".bak");
  const width = image.bitmap.width;
  const height = image.bitmap.height;
  
  console.log(`\nProcessing ${path.basename(filepath)}...`);
  
  // 1. Remove background using BFS starting from all 4 borders
  const visited = new Uint8Array(width * height);
  const isBackground = new Uint8Array(width * height);
  const queue = [];
  
  // Enqueue border pixels
  for (let x = 0; x < width; x++) {
    // Top border
    queue.push(x, 0);
    visited[x] = 1;
    // Bottom border
    queue.push(x, height - 1);
    visited[x + (height - 1) * width] = 1;
  }
  for (let y = 0; y < height; y++) {
    // Left border
    if (!visited[y * width]) {
      queue.push(0, y);
      visited[y * width] = 1;
    }
    // Right border
    if (!visited[width - 1 + y * width]) {
      queue.push(width - 1, y);
      visited[width - 1 + y * width] = 1;
    }
  }
  
  let head = 0;
  while (head < queue.length) {
    const cx = queue[head++];
    const cy = queue[head++];
    const idx = (cy * width + cx) * 4;
    const r = image.bitmap.data[idx];
    const g = image.bitmap.data[idx+1];
    const b = image.bitmap.data[idx+2];
    
    if (isCloseToWhite(r, g, b, 70)) {
      isBackground[cy * width + cx] = 1;
      
      // Check 4 neighbors
      const neighbors = [
        [cx + 1, cy],
        [cx - 1, cy],
        [cx, cy + 1],
        [cx, cy - 1]
      ];
      
      for (const [nx, ny] of neighbors) {
        if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
          const nidx = ny * width + nx;
          if (!visited[nidx]) {
            visited[nidx] = 1;
            queue.push(nx, ny);
          }
        }
      }
    }
  }
  
  // Apply transparency to background
  let bgCount = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (isBackground[y * width + x]) {
        const idx = (y * width + x) * 4;
        image.bitmap.data[idx + 3] = 0; // Alpha transparent
        bgCount++;
      }
    }
  }
  console.log(`Background pixels removed: ${bgCount} (${((bgCount / (width * height)) * 100).toFixed(1)}%)`);
  
  // 2. Erase Star Watermark
  if (isImage1) {
    // applicationportal1person.png
    // Bounding box of logo: X: 2739 to 2781, Y: 1386 to 1525
    // Let's replace the logo box with the color from x = 2730
    console.log("Erasing Gemini star watermark logo from corner...");
    for (let y = 1380; y <= 1530; y++) {
      if (y >= height) break;
      const refIdx = (y * width + 2728) * 4;
      const r = image.bitmap.data[refIdx];
      const g = image.bitmap.data[refIdx+1];
      const b = image.bitmap.data[refIdx+2];
      const a = image.bitmap.data[refIdx+3];
      
      for (let x = 2734; x <= 2785; x++) {
        if (x >= width) break;
        const targetIdx = (y * width + x) * 4;
        image.bitmap.data[targetIdx] = r;
        image.bitmap.data[targetIdx+1] = g;
        image.bitmap.data[targetIdx+2] = b;
        image.bitmap.data[targetIdx+3] = a;
      }
    }
  } else {
    // applicationportal3personimage.png
    // Bounding box of logo: X: 2418 to 2551, Y: 1514 to 1622
    // Let's replace the logo box with the color from x = 2410
    console.log("Erasing Gemini star watermark logo from corner...");
    for (let y = 1505; y <= 1630; y++) {
      if (y >= height) break;
      const refIdx = (y * width + 2408) * 4;
      const r = image.bitmap.data[refIdx];
      const g = image.bitmap.data[refIdx+1];
      const b = image.bitmap.data[refIdx+2];
      const a = image.bitmap.data[refIdx+3];
      
      for (let x = 2414; x <= 2555; x++) {
        if (x >= width) break;
        const targetIdx = (y * width + x) * 4;
        image.bitmap.data[targetIdx] = r;
        image.bitmap.data[targetIdx+1] = g;
        image.bitmap.data[targetIdx+2] = b;
        image.bitmap.data[targetIdx+3] = a;
      }
    }
  }
  
  await image.write(filepath);
  console.log(`Saved clean image to: ${filepath}`);
}

async function run() {
  await processImage(img1_path, true);
  await processImage(img2_path, false);
  console.log("\nImage processing finished successfully!");
}

run().catch(console.error);
