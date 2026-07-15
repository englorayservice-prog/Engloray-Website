from PIL import Image
import numpy as np

filepath = r'c:\Users\mayan\Documents\Engloray\Engloray-Website\src\Pages\Sub Pages\RayMartPageTwo\ChatGPT Image Jul 14, 2026, 01_59_00 PM.png'
img = Image.open(filepath)
arr = np.array(img)
h, w = arr.shape[:2]

# Bounding box coordinates determined from alpha threshold analysis
x_min = max(0, 94 - 5)
y_min = max(0, 150 - 5)
x_max = min(w, 1446 + 5)
y_max = min(h, 840 + 5)

print(f"Cropping image from {w}x{h} to ({x_min}, {y_min}, {x_max}, {y_max}) -> size = ({x_max - x_min}, {y_max - y_min})")
cropped = img.crop((x_min, y_min, x_max, y_max))

# Save the cropped image back to the same file path to overwrite
cropped.save(filepath)
print("Successfully overwrote image with cropped version.")
