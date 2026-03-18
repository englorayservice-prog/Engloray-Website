import os

def convert_to_utf8(file_path):
    try:
        with open(file_path, 'rb') as f:
            content = f.read()
        
        # Try to detect UTF-16
        try:
            text = content.decode('utf-16')
            print(f"File {file_path} is UTF-16")
        except UnicodeDecodeError:
            try:
                text = content.decode('utf-8-sig') # UTF-8 with BOM
                print(f"File {file_path} is UTF-8 with BOM")
            except UnicodeDecodeError:
                text = content.decode('utf-8')
                print(f"File {file_path} is already UTF-8")
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(text)
        print(f"Converted {file_path} to UTF-8")
    except Exception as e:
        print(f"Error converting {file_path}: {e}")

files = [
    r"d:\Project-Engloray\Engloray-Website-main\src\Pages\Sub Pages\SoftwareAppDev\SoftwareAppDev.jsx",
    r"d:\Project-Engloray\Engloray-Website-main\src\Pages\Sub Pages\SoftwareDeveloperInternPage\SoftwareDeveloperInterPage.jsx"
]

for file in files:
    convert_to_utf8(file)
