const API_ENDPOINT = "http://127.0.0.1:8000/predict";

export type DiseaseProbs = {
	"actinic_keratoses": number;
	"basal_cell_carcinoma": number;
	"benign_keratosis-like_lesions": number;
	"dermatofibroma": number;
	"melanocytic_Nevi": number;
	"melanoma": number;
	"vascular_lesions": number;
};

export async function handlePredict(
	selectedFile: File,
	callback: (probs: DiseaseProbs | null) => void
) {
	const formData = new FormData();
	formData.append("file", selectedFile);

	try {
		fetch(API_ENDPOINT, {
			method: "POST",
			body: formData,
		})
			.then((response) => response.json())
			.then((data) => {
				if (!data || !data.probabilities) {
					console.error("No data fetched");
					return null;
				}

				const prob = data.probabilities as DiseaseProbs;
				callback(prob);
			});
	} catch (error) {
		console.error("Error:", error);
	}
}

export async function handleHospitalQuery() {}
