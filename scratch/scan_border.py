from PIL import Image
import numpy as np

img = Image.open(r'c:\Users\mayan\Documents\Engloray\Engloray-Website\src\Pages\Sub Pages\RayMartPageTwo\ChatGPT Image Jul 14, 2026, 01_59_00 PM.png')
arr = np.array(img.convert('RGB'))
h, w = arr.shape[:2]

# Let's find the outline color. We can scan from the left side (x from 0 to w//2) at y = h//2.
# When we scan from x = 0 towards center, the first bright pixel we hit should be the left border of the outline!
y_mid = h // 2
print("Scanning horizontally at y_mid = ", y_mid)
for x in range(0, w // 2):
    color = arr[y_mid, x]
    # If the brightness is high, print it
    if np.mean(color) > 30:
        print(f"First bright pixel at x={x}: {color}")
        break

# Let's scan from top (y from 0 to h//2) at x = w//2
x_mid = w // 2
print("Scanning vertically at x_mid = ", x_mid)
for y in range(0, h // 2):
    color = arr[y, x_mid]
    if np.mean(color) > 30:
        print(f"First bright pixel at y={y}: {color}")
        break
