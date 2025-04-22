import { Dna, Server, Brain, Upload, Image, AlertCircle } from "lucide-react";

export default function HowItWorks() {
    return (
        <div className="min-h-screen bg-burgundy-300">
            {/* Page Content */}
            <main className="container mx-auto px-4 py-12 max-w-4xl">
                {/* Overview Section */}
                <section className="mb-12">
                    <h1 className="text-4xl font-bold text-burgundy-900 mb-6">Overview</h1>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        DermaDetect is a web application designed to help users detect the likelihood of malignant skin cancer using advanced machine learning techniques. This tool is intended to provide an initial assessment and encourage early detection.
                    </p>
                </section>

                {/* How It Was Built Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-burgundy-900 mb-6">How It Was Built</h2>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-2">
                            <div className="bg-burgundy-100 p-2 rounded-full mt-0.5">
                                <Server className="h-5 w-5 text-burgundy-700" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-burgundy-900">Frontend</h3>
                                <p className="text-gray-600">
                                    Built using React and Tailwind CSS for a responsive and user-friendly interface.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start gap-2">
                            <div className="bg-burgundy-100 p-2 rounded-full mt-0.5">
                                <Server className="h-5 w-5 text-burgundy-700" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-burgundy-900">Backend</h3>
                                <p className="text-gray-600">
                                    A Python Flask API processes the uploaded images and communicates with the machine learning model.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start gap-2">
                            <div className="bg-burgundy-100 p-2 rounded-full mt-0.5">
                                <Brain className="h-5 w-5 text-burgundy-700" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-burgundy-900">Machine Learning</h3>
                                <p className="text-gray-600">
                                    A convolutional neural network (CNN) trained on a dataset of skin lesion images to classify the likelihood of melanoma.
                                </p>
                            </div>
                        </li>
                    </ul>
                </section>

                {/* How It Works Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-burgundy-900 mb-6">How It Works</h2>
                    <ol className="space-y-6">
                        <li className="flex items-start gap-4">
                            <div className="bg-burgundy-100 p-3 rounded-full mt-0.5">
                                <Upload className="h-6 w-6 text-burgundy-700" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-burgundy-900 mb-2">Step 1: Image Upload</h3>
                                <p className="text-gray-600">
                                    The user uploads an image of a skin lesion through the web interface.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="bg-burgundy-100 p-3 rounded-full mt-0.5">
                                <Image className="h-6 w-6 text-burgundy-700" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-burgundy-900 mb-2">Step 2: Image Processing</h3>
                                <p className="text-gray-600">
                                    The image is sent to the backend, where it is processed and analyzed by the trained machine learning model.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="bg-burgundy-100 p-3 rounded-full mt-0.5">
                                <Brain className="h-6 w-6 text-burgundy-700" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-burgundy-900 mb-2">Step 3: Prediction</h3>
                                <p className="text-gray-600">
                                    The model predicts the likelihood of melanoma and returns the result to the frontend.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="bg-burgundy-100 p-3 rounded-full mt-0.5">
                                <AlertCircle className="h-6 w-6 text-burgundy-700" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-burgundy-900 mb-2">Step 4: Result Display</h3>
                                <p className="text-gray-600">
                                    The result is displayed to the user, along with a disclaimer encouraging consultation with a medical professional.
                                </p>
                            </div>
                        </li>
                    </ol>
                </section>

                {/* Disclaimer Section */}
                <section className="mb-8">
                    <div className="border-t border-gray-200 pt-6">
                        <p className="text-gray-600 text-sm">
                            <span className="font-semibold">Disclaimer:</span> This tool is for informational purposes only and should
                            not be used as a substitute for professional medical advice. Always consult a dermatologist or healthcare
                            provider for an accurate diagnosis.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}