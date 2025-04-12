import React, { useState } from "react";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handlePredict = async () => {
    if (!selectedFile) {
      alert("Please choose an image first.");
      return;
    }
  
    const formData = new FormData();
    formData.append("file", selectedFile);
  
    try {
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
      alert(`Predicted chance of spreading: ${(data.probability * 100).toFixed(2)}%`);
    } catch (error) {
      console.error("Error:", error);
      alert("Prediction failed.");
    }
  };
  

  return (
    <div className="min-h-screen bg-yellow-100 flex flex-col items-center justify-start p-20">
      <h1 className="text-6xl font-bold text-black-900  text-center pt-4 pb-5">
        Skin Cancer Detector
      </h1>

      <div className="flex  gap-14 p-10 pl-25 pr-25 rounded-2xl ">
        <label className="cursor-pointer bg-pink-200 hover:bg-pink-300 text-black text-xl font-semibold px-8 py-3 rounded-xl transition">
          Choose Image
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
        <div className="text-black text-xl font-semibold px-17 rounded-xl bg-pink-200 hover:bg-pink-300 flex flex-col justify-center items-center transition">
        Predict  
        <button
          onClick={handlePredict}
          className="hidden"
        >
          
        </button>
        </div>
      </div>

      {selectedFile && (
        <p className="mt-6 text-lg text-gray-700">
          Selected: <span className="font-bold">{selectedFile.name}</span>
        </p>
      )}

      {/* New Section for Skin Cancer Info */}
      <div className="mt-20 max-w-3xl text-center bg-pink-100/80 p-8 rounded-2xl  backdrop-blur">
        <h2 className="text-3xl font-bold text-black-700 mb-4">
          Why Early Detection Matters
        </h2>
        <p className="text-gray-800 text-lg">
          Skin cancer is the most common form of cancer, but it’s also one of the most treatable when detected early.
          Regular screening and immediate attention to unusual skin changes can make all the difference.
          Use this tool as a first step, and always follow up with a medical professional for an accurate diagnosis.
        </p>
      </div>
    </div>
  );
};

export default Upload;
