const { Jimp } = require('jimp');
const path = require('path');
const fs = require('fs');

const imgPath = path.join(__dirname, "src", "assets", "images", "applicationportal1person.png");

async function run() {
  // Always work on the original backup if it exists, to avoid processing already modified image
  const sourcePath = imgPath + ".bak";
  if (!fs.existsSync(sourcePath)) {
    console.error("Backup file not found. Make sure process_images.js was run first.");
    return;
  }
  
  // Re-run background removal on a fresh copy of backup to make sure we do it clean
  const image = await Jimp.read(sourcePath);
  const width = image.bitmap.width;
  const height = image.bitmap.height;
  
  console.log(`Processing image: ${width}x${height}`);
  
  // 1. Remove background using BFS starting from all 4 borders
  const visited = new Uint8Array(width * height);
  const isBackground = new Uint8Array(width * height);
  const queue = [];
  
  // Helper to check if close to white
  function isCloseToWhite(r, g, b, threshold = 70) {
    const dist = Math.sqrt(
      Math.pow(255 - r, 2) +
      Math.pow(255 - g, 2) +
      Math.pow(255 - b, 2)
    );
    return dist < threshold;
  }
  
  // Enqueue borders
  for (let x = 0; x < width; x++) {
    queue.push(x, 0);
    visited[x] = 1;
    queue.push(x, height - 1);
    visited[x + (height - 1) * width] = 1;
  }
  for (let y = 0; y < height; y++) {
    if (!visited[y * width]) {
      queue.push(0, y);
      visited[y * width] = 1;
    }
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
  
  // Set background transparent
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (isBackground[y * width + x]) {
        const idx = (y * width + x) * 4;
        image.bitmap.data[idx + 3] = 0;
      }
    }
  }
  
  // 2. Erase Gemini star watermark logo from corner
  for (let y = 1380; y <= 1530; y++) {
    const refIdx = (y * width + 2728) * 4;
    const r = image.bitmap.data[refIdx];
    const g = image.bitmap.data[refIdx+1];
    const b = image.bitmap.data[refIdx+2];
    const a = image.bitmap.data[refIdx+3];
    for (let x = 2734; x <= 2785; x++) {
      const targetIdx = (y * width + x) * 4;
      image.bitmap.data[targetIdx] = r;
      image.bitmap.data[targetIdx+1] = g;
      image.bitmap.data[targetIdx+2] = b;
      image.bitmap.data[targetIdx+3] = a;
    }
  }
  
  // 3. Flatten the table top edge at y = 1380
  // For each column x from 0 to 2000 (table area on the left of the person):
  // Let's find where the table starts, and raise it to y = 1380.
  // The table top edge is the first pixel from y = 1200 downwards that is NOT transparent.
  for (let x = 0; x < width; x++) {
    let tableTopY = -1;
    for (let y = 1200; y < height; y++) {
      const idx = (y * width + x) * 4;
      const alpha = image.bitmap.data[idx + 3];
      if (alpha > 0) {
        tableTopY = y;
        break;
      }
    }
    
    // If the table top is lower than 1380, fill the gap with the table top pixel's color
    if (tableTopY > 1380) {
      const srcIdx = (tableTopY * width + x) * 4;
      const r = image.bitmap.data[srcIdx];
      const g = image.bitmap.data[srcIdx+1];
      const b = image.bitmap.data[srcIdx+2];
      const a = image.bitmap.data[srcIdx+3];
      
      for (let y = 1380; y < tableTopY; y++) {
        const destIdx = (y * width + x) * 4;
        image.bitmap.data[destIdx] = r;
        image.bitmap.data[destIdx+1] = g;
        image.bitmap.data[destIdx+2] = b;
        image.bitmap.data[destIdx+3] = a;
      }
    }
  }
  
  await image.write(imgPath);
  console.log("Image table flattened successfully and saved to:", imgPath);
}

run().catch(console.error);
