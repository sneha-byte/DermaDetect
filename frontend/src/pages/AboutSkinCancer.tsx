import { Link } from "react-router-dom";
import { Dna } from "lucide-react"

export default function AboutSkinCancer() {
    return (
      <div className="min-h-screen bg-burgundy-300">
       
        <main className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Why Early Detection Matters */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-burgundy-900 mb-6">Why Early Detection Matters</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Skin cancer is the most common form of cancer, but it's also one of the most treatable when detected early.
              Regular screening and immediate attention to unusual skin changes can make all the difference. Early
              detection can save lives by identifying cancer before it spreads to other parts of the body.
            </p>
          </section>
  
          {/* What is Skin Cancer */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-burgundy-900 mb-6">What is Skin Cancer?</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Skin cancer occurs when skin cells grow uncontrollably due to DNA damage, often caused by ultraviolet (UV)
              radiation from the sun or tanning beds. There are three main types of skin cancer:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <span className="text-burgundy-700 font-bold">•</span>
                <div>
                  <h3 className="text-xl font-semibold text-burgundy-900">Basal Cell Carcinoma (BCC):</h3>
                  <p className="text-gray-600">
                    The most common type of skin cancer, often appearing as a pearly or waxy bump.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-burgundy-700 font-bold">•</span>
                <div>
                  <h3 className="text-xl font-semibold text-burgundy-900">Squamous Cell Carcinoma (SCC):</h3>
                  <p className="text-gray-600">Often appears as a red, scaly patch or sore that doesn't heal.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-burgundy-700 font-bold">•</span>
                <div>
                  <h3 className="text-xl font-semibold text-burgundy-900">Melanoma:</h3>
                  <p className="text-gray-600">
                    The most dangerous form of skin cancer, which can develop in existing moles or as new dark spots on
                    the skin.
                  </p>
                </div>
              </li>
            </ul>
          </section>
  
          {/* Risk Factors */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-burgundy-900 mb-6">Risk Factors</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Several factors can increase the risk of developing skin cancer, including:
            </p>
            <ul className="space-y-2 list-disc list-inside text-gray-700 ml-4">
              <li>Excessive exposure to UV radiation from the sun or tanning beds.</li>
              <li>Having fair skin, light hair, or light-colored eyes.</li>
              <li>A history of sunburns, especially in childhood.</li>
              <li>Family history of skin cancer.</li>
              <li>Having many moles or atypical moles.</li>
            </ul>
          </section>
  
          {/* Prevention Tips */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-burgundy-900 mb-6">Prevention Tips</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              While not all skin cancers can be prevented, you can reduce your risk by following these tips:
            </p>
            <ul className="space-y-2 list-disc list-inside text-gray-700 ml-4">
              <li>Wear sunscreen with an SPF of 30 or higher every day.</li>
              <li>Seek shade during peak sun hours (10 AM to 4 PM).</li>
              <li>Wear protective clothing, hats, and sunglasses.</li>
              <li>Avoid tanning beds and artificial UV light.</li>
              <li>Perform regular self-examinations to check for new or changing moles.</li>
            </ul>
          </section>
  
          {/* When to See a Doctor */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-burgundy-900 mb-6">When to See a Doctor</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              If you notice any unusual changes in your skin, such as a new growth, a sore that doesn't heal, or changes
              in the size, shape, or color of a mole, consult a dermatologist immediately. Early diagnosis and treatment
              are crucial for the best outcomes.
            </p>
          </section>
  
          {/* Disclaimer Section */}
          <section className="mb-8">
            <div className="border-t border-gray-200 pt-6">
              <p className="text-gray-600 text-sm">
                <span className="font-semibold">Disclaimer:</span> This information is for educational purposes only and
                should not be used as a substitute for professional medical advice. Always consult a dermatologist or
                healthcare provider for an accurate diagnosis.
              </p>
            </div>
          </section>
        </main>
      </div>
    )
  }
  