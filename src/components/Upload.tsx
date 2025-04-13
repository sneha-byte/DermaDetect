import React, { useState } from "react";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null); // New state for prediction
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handlePredict = async () => {
    if (!selectedFile) {
      setPrediction("Please choose an image first."); // Update prediction state
      return;
    }

    setLoading(true); // Start loading
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setPrediction(
        `Our model predicts there is a ${(data.probability * 100).toFixed(5)}% chance of this image showing malignant skin cancer.`
      ); // Update prediction state
    } catch (error) {
      console.error("Error:", error);
      setPrediction("Prediction failed. Please try again."); // Update prediction state
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col items-center justify-start p-20">
      <h1 className="text-6xl font-bold text-[#4A154B] text-center pt-4 pb-5">
        Malignant Skin Cancer Detector
      </h1>

      <h2 className="text-2xl text-[#4A154B] text-center mt-2">
        Upload an image to detect the likelihood of malignant skin cancer.
      </h2>

      <div className="flex gap-14 p-10 pl-25 pr-25 rounded-2xl bg-[#F5F5F5]/80">
        <label className="cursor-pointer bg-[#D291BC] hover:bg-[#E8AFCF] text-white text-xl font-semibold px-8 py-3 rounded-xl transition flex items-center gap-2">
          <i className="fas fa-upload"></i> Choose Image
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
        <div
          onClick={handlePredict}
          className="text-white text-xl font-semibold px-17 rounded-xl bg-[#D291BC] hover:bg-[#E8AFCF] hover:scale-105 flex items-center justify-center transition-transform cursor-pointer"
        >
          <i className="fas fa-search"></i> Predict
        </div>
      </div>

      {selectedFile && (
        <div className="mt-6">
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Selected"
            className="w-64 h-64 object-cover rounded-lg border-2 border-[#D291BC]"
          />
        </div>
      )}

      {selectedFile && (
        <p className="mt-6 text-lg text-[#4A154B]">
          Selected Image: <span className="font-bold">{selectedFile.name}</span>
        </p>
      )}

      {/* Display prediction result */}
      {prediction && (
        <div className="mt-8 text-2xl font-bold text-[#4A154B] bg-[#F5F5F5] p-6 rounded-lg border-2 border-[#D291BC] shadow-md">
          {prediction}
        </div>
      )}

      {loading && <div className="mt-4 text-[#4A154B]">Loading...</div>}

      {/* New Section for Skin Cancer Info */}
      <div className="mt-45 max-w-3xl text-center bg-[#E8AFCF] p-8 rounded-2xl backdrop-blur">
        <h2 className="text-3xl font-bold text-[#4A154B] mb-4">
          Why Early Detection Matters
        </h2>
        <p className="text-[#4A154B] text-lg">
          Skin cancer is the most common form of cancer, but it’s also one of the
          most treatable when detected early. Regular screening and immediate
          attention to unusual skin changes can make all the difference. Use this
          tool as a first step, and always follow up with a medical professional
          for an accurate diagnosis.
        </p>
      </div>

      <footer className="mt-10 text-center text-sm text-[#4A154B]">
        Disclaimer: This tool is for informational purposes only. Always consult a medical professional for an accurate diagnosis.
      </footer>
    </div>
  );
};

export default Upload;
