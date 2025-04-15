import cv2
from tqdm import tqdm


def adjust_brightness_contrast(input_path: str, output_path: str):
    if input_path == output_path:
        raise ValueError("output path overwrites input path")

    try:
        img = cv2.imread(input_path)

        if img is None:
            raise ValueError("Failed to load image. Check the input path.")

        lab = cv2.cvtColor(img, cv2.COLOR_BGR2LAB)
        l_channel, a, b = cv2.split(lab)
        clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
        cl = clahe.apply(l_channel)

        limg = cv2.merge((cl, a, b))

        enhanced_img = cv2.cvtColor(limg, cv2.COLOR_LAB2BGR)

        cv2.imwrite(output_path, enhanced_img)

    except Exception as e:
        print(f"Error adjusting brightness/contrast: {e}")


def flip_image(input_path: str, output_path: str, mode: str = 'horizontal'):
    if input_path == output_path:
        raise ValueError("output path overwrites input path")

    try:
        image = cv2.imread(input_path)
        if image is None:
            raise ValueError("Could not load image. Check the input path.")

        flip_codes = {
            'horizontal': 1,
            'vertical': 0,
            'both': -1
        }

        if mode not in flip_codes:
            raise ValueError("Invalid flip mode. Choose from 'horizontal', 'vertical', or 'both'.")

        flipped = cv2.flip(image, flip_codes[mode])
        cv2.imwrite(output_path, flipped)
        print(f"Image flipped ({mode}) and saved to {output_path}.")

    except Exception as e:
        print(f"Error flipping image: {e}")


flip_image("skin_cancer_test.jpeg", "transformed_test_image.jpeg")
