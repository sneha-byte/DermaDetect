import { useState } from "react";

export default function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [probability, setProbability] = useState<number | null>(null);

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("http://localhost:5000/predict", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setProbability(data.probability);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="pt-20">
        <h1 className="text-5xl font-bold text-center bottom-full pt-4">
          Skin Cancer Detector
        </h1>
      </header>

      {/* Upload Section */}
      <div className="flex items-center justify-center mt-10">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md flex flex-col items-center">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="mb-4"
          />
          <button
            onClick={handleUpload}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Predict
          </button>

          {probability !== null && (
            <div className="mt-6 text-center">
              <p className="text-lg">Probability: {probability.toFixed(3)}</p>
              <p
                className={`font-bold ${
                  probability > 0.5 ? "text-red-500" : "text-green-500"
                }`}
              >
                {probability > 0.5
                  ? "Possible Cancerous Lesion"
                  : "Likely Benign"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
