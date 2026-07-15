from PIL import Image
import numpy as np

img = Image.open(r'c:\Users\mayan\Documents\Engloray\Engloray-Website\src\Pages\Sub Pages\RayMartPageTwo\ChatGPT Image Jul 14, 2026, 01_59_00 PM.png')
arr = np.array(img.convert('RGB'))
h, w = arr.shape[:2]

# Compute column and row means
col_means = np.mean(arr, axis=(0, 2))  # shape: (w,)
row_means = np.mean(arr, axis=(1, 2))  # shape: (h,)

# Find where the background starts to transition to the actual chart container.
# Let's print some of these values at the borders to see.
print("Left col means (first 100):")
print(col_means[:50])
print("Right col means (last 50):")
print(col_means[-50:])
print("Top row means (first 100):")
print(row_means[:50])
print("Bottom row means (last 50):")
print(row_means[-50:])
