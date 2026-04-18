import re

def transform_css(content):
    # 1. Prefix replacement
    content = content.replace('.bd-', '.awd-')
    
    # 2. Color Mapping
    # Branding: #1d4ed8 (Blue), #2563eb (Blue), #3b82f6 (Blue) -> Teal #64ffda
    content = re.sub(r'#(?:1d4ed8|2563eb|3b82f6|2196f3)', '#64ffda', content, flags=re.IGNORECASE)
    
    # 3. Background replacements (Light to Dark)
    # White/Light Blue backgrounds to Dark Navy
    content = content.replace('#ffffff', '#0a192f')
    content = content.replace('#ffffff', '#0a192f') # Case sensitive check
    content = content.replace('#eef4ff', '#0a192f')
    content = content.replace('#f6f7f9', '#112240')
    content = content.replace('#f1f5f9', '#112240')
    content = content.replace('#f8fafc', '#112240')
    content = content.replace('#f6f8fa', '#0a192f')
    
    # 4. Text color replacements (Dark to Light)
    # color: #xxx or #xxxxxx
    content = re.sub(r'color:\s*#111', 'color: #ffffff', content)
    content = re.sub(r'color:\s*#000', 'color: #ffffff', content)
    content = re.sub(r'color:\s*#000000', 'color: #ffffff', content)
    content = re.sub(r'color:\s*#1e293b', 'color: #ccd6f6', content)
    content = re.sub(r'color:\s*#475569', 'color: #8892b0', content)
    content = re.sub(r'color:\s*#555', 'color: #8892b0', content)
    content = re.sub(r'color:\s*#6b7280', 'color: #8892b0', content)
    content = re.sub(r'color:\s*#1e2a44', 'color: #ffffff', content)
    
    # 5. Fix specific issues like "color: #0a192ffff"
    # This happens if #ffffff was replaced by #0a192f inside a hex like #ffffff
    content = re.sub(r'#0a192f[a-f0-9]+', '#ffffff', content) # Revert accidental corruptions
    
    # 6. Ensure accent shadows use teal
    content = content.replace('rgba(29, 78, 216', 'rgba(100, 255, 218')
    content = content.replace('rgba(37, 99, 235', 'rgba(100, 255, 218')
    
    return content

# Read original
with open(r'd:\Engloraywebsite\Engloray-pro-website\src\Pages\Sub Pages\TechBrandingAndDesigning\BrandingAndDesigning.css', 'r') as f:
    original = f.read()

# Transform
transformed = transform_css(original)

# Additional surgical fix for the Hero Gradient
transformed = transformed.replace('radial-gradient(circle at top, #0a192f, #0a192f)', '#0a192f')

# Write back
with open(r'd:\Engloraywebsite\Engloray-pro-website\src\Pages\Sub Pages\WebAndAppDevelopment\AppWebDev.css', 'w') as f:
    f.write(transformed)

print("Double check: Primary Blue replaced with Teal.")
