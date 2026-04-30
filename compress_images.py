import os
from PIL import Image

# Convert PNG to JPEG for dramatic size reduction
images = [
    ('public/barterverse-logo.png', 'public/barterverse-logo.jpg', 80),
    ('public/barter-coin.png', 'public/barter-coin.jpg', 80),
    ('public/applogo.png', 'public/applogo.jpg', 75),
    ('public/social-preview.png', 'public/social-preview.jpg', 85),
]

for png_path, jpg_path, quality in images:
    if not os.path.exists(png_path):
        print(f"Skipping {png_path} - not found")
        continue
    
    try:
        original_size = os.path.getsize(png_path) / 1024
        img = Image.open(png_path).convert('RGB')
        img.save(jpg_path, 'JPEG', quality=quality, optimize=True)
        
        final_size = os.path.getsize(jpg_path) / 1024
        reduction = ((original_size - final_size) / original_size) * 100
        print(f"{png_path}: {original_size:.1f}KB → {jpg_path}: {final_size:.1f}KB ({reduction:.1f}% reduction)")
    except Exception as e:
        print(f"Error: {e}")

print("\nJPEG conversion complete! You now have .jpg versions in public/")
