from PIL import Image
import torch
from model import SkinCancerCNN, transform

# Instantiate and load model
model = SkinCancerCNN()
model.load_state_dict(torch.load("cnn_weights.pth"))
model.eval()


def predict(file_path: str):
    image = Image.open(file_path)
    image = transform(image).unsqueeze(0)

    with torch.no_grad():
        output = model(image)
        probability = output.item()  # Get float from tensor

    print(probability)


predict("skin_cancer_test.jpeg")
