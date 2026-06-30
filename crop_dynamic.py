from PIL import Image, ImageChops
import sys

def crop_image_dynamic(img_path, output_path):
    img = Image.open(img_path).convert('RGBA')
    bg_color = img.getpixel((0,0))
    bg = Image.new(img.mode, img.size, bg_color)
    
    diff = ImageChops.difference(img, bg)
    diff = ImageChops.add(diff, diff, 2.0, -100)
    bbox = diff.getbbox()

    if bbox:
        left, upper, right, lower = bbox
        img.crop((0, upper, img.width, lower)).save(output_path)
    else:
        img.save(output_path)

if __name__ == "__main__":
    crop_image_dynamic(sys.argv[1], sys.argv[2])
