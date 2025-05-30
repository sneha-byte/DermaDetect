import React, { useState } from "react";
import { handlePredict, DiseaseProbs } from "../utility/fetch";

export default function Home() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [prediction, setPrediction] = useState<string | null>(null);
    const [isLoading, setLoading] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const handlePredictButtonClick = () => {
        if (isLoading) return;

        if (selectedFile) {
            setLoading(true);
            handlePredict(
                selectedFile,
                (probs: DiseaseProbs) => {
                    setPrediction(
                        `Probability of Melanoma: ${(
                            probs.melanoma * 100
                        ).toFixed(3)}%`
                    );
                    setLoading(false);
                },
                () => {
                    setPrediction("Failed to obtain predictions");
                    setLoading(false);
                }
            );
        }
    };

    return (
        <div className="min-h-screen bg-burgundy-300 flex flex-col items-center justify-start">
            <h1 className="text-5xl font-bold text-burgundy-900 text-center pt-4 pb-5">
                Malignant Skin Cancer Detector
            </h1>

            <h2 className="text-2xl text-burgundy-900 text-center mt-2">
                Upload an image to detect the likelihood of malignant skin cancer.
            </h2>

            <div className="flex gap-14 p-10 pl-25 pr-25 rounded-2xl bg-burgundy-300">
                {/* Choose Image Button */}
                <label
                    className="cursor-pointer bg-burgundy-700 hover:bg-burgundy-900 hover:scale-105 transition-transform text-white text-xl font-semibold px-8 py-3 rounded-xl flex items-center gap-2 fade-in"
                >
                    <i className="fas fa-upload"></i> Choose Image
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                    />
                </label>

                {/* Predict Button */}
                <div
                    onClick={handlePredictButtonClick}
                    className="text-white text-xl font-semibold px-17 rounded-xl bg-burgundy-700 hover:bg-burgundy-900 hover:scale-105 flex items-center justify-center transition-transform cursor-pointer fade-in-delay"
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
                    Selected Image:{" "}
                    <span className="font-bold">{selectedFile.name}</span>
                </p>
            )}

            {/* Display prediction result */}
            {prediction && (
                <div className="mt-8 text-2xl font-bold text-[#4A154B] bg-[#F5F5F5] p-6 rounded-lg border-2 border-[#D291BC] shadow-md">
                    {prediction}
                </div>
            )}

            {isLoading && <div className="mt-4 text-[#4A154B]">Loading...</div>}

            <footer className="mt-130 text-center text-sm text-[#4A154B]">
                Disclaimer: This tool is for informational purposes only. Always
                consult a medical professional for an accurate diagnosis.
            </footer>
        </div>
    );
}