# main.py
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
from torch import no_grad
from torch.nn.functional import softmax
import io
from transformers import AutoImageProcessor, AutoModelForImageClassification
import uvicorn

app = FastAPI()

# Allow CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model and processor
processor = AutoImageProcessor.from_pretrained("Anwarkh1/Skin_Cancer-Image_Classification")
model = AutoModelForImageClassification.from_pretrained("Anwarkh1/Skin_Cancer-Image_Classification")


# API endpoint
@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    image_bytes = await file.read()
    image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    inputs = processor(images=image, return_tensors="pt")

    with no_grad():
        outputs = model(**inputs)

    logits = outputs.logits
    probs = softmax(logits, dim=-1)[0]  # Shape: [num_classes]

    # Map class labels to probabilities
    id2label = model.config.id2label
    result = {id2label[i]: probs[i].item() for i in range(len(probs))}

    return {"probabilities": result}


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000, log_level="info")
