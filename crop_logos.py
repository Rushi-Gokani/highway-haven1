from PIL import Image, ImageChops

def crop_image(img_path, output_path):
    img = Image.open(img_path).convert('RGBA')
    bg = Image.new(img.mode, img.size, (255, 255, 255, 255))
    
    # Try assuming white background
    diff_white = ImageChops.difference(img, bg)
    diff_white = ImageChops.add(diff_white, diff_white, 2.0, -100)
    bbox_white = diff_white.getbbox()

    # Try assuming transparent background
    bg_trans = Image.new(img.mode, img.size, (0, 0, 0, 0))
    diff_trans = ImageChops.difference(img, bg_trans)
    bbox_trans = diff_trans.getbbox()
    
    # Usually we want the tighter bbox, or if one is None
    # Let's just use getbbox directly on the alpha channel if it exists, otherwise on white diff
    alpha = img.split()[-1]
    bbox_alpha = alpha.getbbox()
    
    # We will use alpha bbox if it's smaller, else white bbox
    if bbox_alpha and (bbox_alpha[2] - bbox_alpha[0]) * (bbox_alpha[3] - bbox_alpha[1]) < img.width * img.height:
        bbox = bbox_alpha
    else:
        bbox = bbox_white

    if bbox:
        left, upper, right, lower = bbox
        img.crop((0, upper, img.width, lower)).save(output_path)
    else:
        img.save(output_path)

crop_image(r'c:\Users\DELL\Downloads\HH- New Web\highway-haven1\public\resturents icons\Guardian Pharma New.png', r'c:\Users\DELL\Downloads\HH- New Web\highway-haven1\public\resturents icons\Guardian Pharma Cropped.png')
crop_image(r'c:\Users\DELL\Downloads\HH- New Web\highway-haven1\public\resturents icons\Chhayos new logo.png', r'c:\Users\DELL\Downloads\HH- New Web\highway-haven1\public\resturents icons\Chhayos Cropped.png')
