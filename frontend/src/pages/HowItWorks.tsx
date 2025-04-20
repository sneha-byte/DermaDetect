export default function HowItWorks() {
    return (
        <div className="min-h-screen bg-[#F5F5F5] flex flex-col items-center px-8 py-10">
            <div className="max-w-4xl text-[#4A154B] text-lg leading-7">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="mb-4">
                    DermaDetect is a web application designed to help users
                    detect the likelihood of malignant skin cancer using
                    advanced machine learning techniques. This tool is intended
                    to provide an initial assessment and encourage early
                    detection.
                </p>

                <h2 className="text-2xl font-semibold mb-4">How It Was Built</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>
                        <strong>Frontend:</strong> Built using React and
                        Tailwind CSS for a responsive and user-friendly
                        interface.
                    </li>
                    <li>
                        <strong>Backend:</strong> A Python Flask API processes
                        the uploaded images and communicates with the machine
                        learning model.
                    </li>
                    <li>
                        <strong>Machine Learning:</strong> A convolutional
                        neural network (CNN) trained on a dataset of skin lesion
                        images to classify the likelihood of melanoma.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
                <ol className="list-decimal list-inside mb-4">
                    <li>
                        The user uploads an image of a skin lesion through the
                        web interface.
                    </li>
                    <li>
                        The image is sent to the backend, where it is processed
                        and analyzed by the trained machine learning model.
                    </li>
                    <li>
                        The model predicts the likelihood of melanoma and
                        returns the result to the frontend.
                    </li>
                    <li>
                        The result is displayed to the user, along with a
                        disclaimer encouraging consultation with a medical
                        professional.
                    </li>
                </ol>

                <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
                <p>
                    This tool is for informational purposes only and should not
                    be used as a substitute for professional medical advice.
                    Always consult a dermatologist or healthcare provider for
                    an accurate diagnosis.
                </p>
            </div>
        </div>
    );
}




