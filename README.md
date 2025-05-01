
# Skin Cancer Classification Web Application

A web application designed to help users detect the likelihood of malignant skin cancer using advanced machine learning techniques.

The **frontend** is built using **React** and **Tailwind CSS**, while the **backend** is powered by a **Python Flask API** that processes uploaded images and communicates with a **convolutional neural network (CNN)** model. The model is trained on a dataset of skin lesion images to classify the likelihood of malignant skin cancer.

---

## 🚀 Prerequisites

Make sure you have the following installed on your system:

- Python (Version 3.8 or higher)
- Node.js (Version 16 or higher)
- npm (comes with Node.js)
- pip (Python package manager)
- Git (optional, for cloning the repository)

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/skin-cancer-classification.git
cd skin-cancer-classification
2. Backend Setup
a. Create a Virtual Environment

bash
Copy
Edit
python -m venv venv
b. Activate the Virtual Environment

Windows:

bash
Copy
Edit
venv\Scripts\activate
macOS/Linux:

bash
Copy
Edit
source venv/bin/activate
c. Install Dependencies

bash
Copy
Edit
pip install -r requirements.txt
d. Start the Backend Server

bash
Copy
Edit
uvicorn main:app --reload --port 5000
The backend server will run at:
👉 http://127.0.0.1:5000

3. Frontend Setup
a. Navigate to the Frontend Directory

bash
Copy
Edit
cd frontend
b. Install Dependencies

bash
Copy
Edit
npm install
c. Start the Frontend Development Server

bash
Copy
Edit
npm run dev
The frontend will run at:
👉 http://127.0.0.1:5173

🧪 How to Use
🔍 Find a Dermatologist
Go to the "Find a Dermatologist" page.

Enter a name in the search bar.

Click the Search button to view results.

🖼️ Skin Cancer Detection
Go to the "Home" page.

Upload an image of a skin lesion.

Click the Predict button.

View the likelihood of malignant skin cancer.

![Screenshot 2025-04-30 164310](https://github.com/user-attachments/assets/ba0595ed-36cd-4407-a111-04a7f29af4e1)
![Screenshot 2025-04-30 171016](https://github.com/user-attachments/assets/68137db1-8c23-4c5f-9813-5a0e86261bcf)
![Screenshot 2025-04-30 171024](https://github.com/user-attachments/assets/4a908640-008e-4b44-a073-4faf4681c472)
![Screenshot 2025-04-30 171032](https://github.com/user-attachments/assets/0c48f841-634d-46ec-9007-c2b3a5653144)
![Screenshot 2025-04-30 171048](https://github.com/user-attachments/assets/8a6d7296-ae63-4ad8-8d5c-a2a8f4919173)
