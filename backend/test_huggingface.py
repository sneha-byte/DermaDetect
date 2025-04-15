from transformers import AutoImageProcessor, AutoModelForImageClassification
from PIL import Image
import torch
import time
import torch.nn.functional as F
from pprint import pprint

# Load model and processor
processor = AutoImageProcessor.from_pretrained("Anwarkh1/Skin_Cancer-Image_Classification")
model = AutoModelForImageClassification.from_pretrained("Anwarkh1/Skin_Cancer-Image_Classification")

# Load and preprocess the image
image = Image.open("skin_cancer_test.jpeg").convert("RGB")
inputs = processor(images=image, return_tensors="pt")

start = time.time()

# Run inference
with torch.no_grad():
    outputs = model(**inputs)

end = time.time()

# Get predicted class
# Convert logits to probabilities
logits = outputs.logits
probs = F.softmax(logits, dim=-1)[0]  # Shape: [num_classes]

# Map class labels to probabilities
id2label = model.config.id2label
result = {id2label[i]: probs[i].item() for i in range(len(probs))}
result = {"probabilities": result}
# Print the result
pprint(result)
print("Elapsed time: ", end - start)
