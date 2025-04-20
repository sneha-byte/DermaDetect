export default function AboutSkinCancer() {
    return (
        <div className="min-h-screen bg-[#F5F5F5] flex flex-col items-center px-8 py-10">
            <div className="max-w-4xl text-[#4A154B] text-lg leading-7">
                <h2 className="text-2xl font-semibold mb-4">
                    Why Early Detection Matters
                </h2>
                <p className="mb-4">
                    Skin cancer is the most common form of cancer, but it’s also
                    one of the most treatable when detected early. Regular
                    screening and immediate attention to unusual skin changes
                    can make all the difference. Early detection can save lives
                    by identifying cancer before it spreads to other parts of
                    the body.
                </p>

                <h2 className="text-2xl font-semibold mb-4">What is Skin Cancer?</h2>
                <p className="mb-4">
                    Skin cancer occurs when skin cells grow uncontrollably due
                    to DNA damage, often caused by ultraviolet (UV) radiation
                    from the sun or tanning beds. There are three main types of
                    skin cancer:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>
                        <strong>Basal Cell Carcinoma (BCC):</strong> The most
                        common type of skin cancer, often appearing as a
                        pearly or waxy bump.
                    </li>
                    <li>
                        <strong>Squamous Cell Carcinoma (SCC):</strong> Often
                        appears as a red, scaly patch or sore that doesn’t heal.
                    </li>
                    <li>
                        <strong>Melanoma:</strong> The most dangerous form of
                        skin cancer, which can develop in existing moles or as
                        new dark spots on the skin.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4">Risk Factors</h2>
                <p className="mb-4">
                    Several factors can increase the risk of developing skin
                    cancer, including:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Excessive exposure to UV radiation from the sun or tanning beds.</li>
                    <li>Having fair skin, light hair, or light-colored eyes.</li>
                    <li>A history of sunburns, especially in childhood.</li>
                    <li>Family history of skin cancer.</li>
                    <li>Having many moles or atypical moles.</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4">Prevention Tips</h2>
                <p className="mb-4">
                    While not all skin cancers can be prevented, you can reduce
                    your risk by following these tips:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Wear sunscreen with an SPF of 30 or higher every day.</li>
                    <li>Seek shade during peak sun hours (10 AM to 4 PM).</li>
                    <li>Wear protective clothing, hats, and sunglasses.</li>
                    <li>Avoid tanning beds and artificial UV light.</li>
                    <li>Perform regular self-examinations to check for new or changing moles.</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4">When to See a Doctor</h2>
                <p>
                    If you notice any unusual changes in your skin, such as a
                    new growth, a sore that doesn’t heal, or changes in the size,
                    shape, or color of a mole, consult a dermatologist
                    immediately. Early diagnosis and treatment are crucial for
                    the best outcomes.
                </p>
            </div>
        </div>
    );
}