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
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-xl font-bold mb-4">Skin Cancer Detector</h1>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="mb-4"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Predict
      </button>

      {probability !== null && (
        <div className="mt-4">
          <p className="text-lg">Probability: {probability.toFixed(3)}</p>
          <p className={`font-bold ${probability > 0.5 ? 'text-red-500' : 'text-green-500'}`}>
            {probability > 0.5 ? "Possible Cancerous Lesion" : "Likely Benign"}
          </p>
        </div>
      )}
    </div>
  );
}
