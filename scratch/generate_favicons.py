import os
import base64
from PIL import Image

# High resolution source image of Engloray logo
base_img = Image.open('scratch/root_favicon.png').convert('RGBA')

# 1. Multi-resolution ICO generator
sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]

ico_targets = [
    'public/favicon.ico',
    'src/assets/favicon.ico',
    'favicon.ico',
    'src/Pages/EntryPage/public/favicon.ico'
]

for target in ico_targets:
    target_dir = os.path.dirname(target)
    if target_dir == '' or os.path.exists(target_dir):
        base_img.save(target, format='ICO', sizes=sizes)
        print(f'Generated ICO {target}: {os.path.getsize(target)} bytes')

# 2. PNG targets
png_targets = {
    'public/favicon-16x16.png': (16, 16),
    'public/favicon-32x32.png': (32, 32),
    'public/apple-touch-icon.png': (180, 180),
    'public/logo192.png': (192, 192),
    'public/logo512.png': (512, 512),
    'src/Pages/EntryPage/public/logo192.png': (192, 192),
    'src/Pages/EntryPage/public/logo512.png': (512, 512)
}

for path, size in png_targets.items():
    if os.path.exists(os.path.dirname(path)):
        resized = base_img.resize(size, Image.Resampling.LANCZOS)
        resized.save(path, format='PNG')
        print(f'Generated PNG {path}: {size}, {os.path.getsize(path)} bytes')

# 3. SVG target
img512 = base_img.resize((512, 512), Image.Resampling.LANCZOS)
temp_512_path = 'scratch/temp512.png'
img512.save(temp_512_path, format='PNG')

with open(temp_512_path, 'rb') as f:
    b64 = base64.b64encode(f.read()).decode('utf-8')

svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <image href="data:image/png;base64,{b64}" width="512" height="512"/>
</svg>
'''

with open('public/favicon.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content)
print(f'Updated public/favicon.svg: {len(svg_content)} bytes')
