
Skin Cancer Classification Web Application

Designed to help users detect the likelihood of malignant skin cancer using advanced machine learning techniques. The frontend was built using React and Tailwind CSS and the backend used a Python Flask API to process the uploaded image and communicate with the machine learning model. The model is a 
convolutional neural network trained on a dataset of skin lesion images to classify the likelihood of malignant skin cancer

Prerequisites
Before running the project, ensure you have the following installed on your system:

Python (Version 3.8 or higher)
Node.js (Version 16 or higher)
npm (Comes with Node.js)
pip (Python package manager)
Git (Optional, for cloning the repository)
Setup Instructions
1. Clone the Repository
2. Backend Setup
a. Create a Virtual Environment
b. Activate the Virtual Environment
Windows:
macOS/Linux:
c. Install Dependencies
d. Start the Backend Server
uvicorn main:app --reload --port 5000
The backend server will start running at http://127.0.0.1:5000.

3. Frontend Setup
a. Navigate to the Frontend Directory
b. Install Dependencies
c. Start the Frontend Development Server
The frontend will start running at http://127.0.0.1:5173.

How to Use
Find a Dermatologist:

Navigate to the "Find a Dermatologist" page.
Enter a name in the search bar and click the search button to view results.
Skin Cancer Detection:

Navigate to the "Home" page.
Upload an image of the skin lesion.
Click the "Predict" button to get the likelihood of malignant skin cancer.

![Screenshot 2025-04-30 164310](https://github.com/user-attachments/assets/ba0595ed-36cd-4407-a111-04a7f29af4e1)
![Screenshot 2025-04-30 171016](https://github.com/user-attachments/assets/68137db1-8c23-4c5f-9813-5a0e86261bcf)
![Screenshot 2025-04-30 171024](https://github.com/user-attachments/assets/4a908640-008e-4b44-a073-4faf4681c472)
![Screenshot 2025-04-30 171032](https://github.com/user-attachments/assets/0c48f841-634d-46ec-9007-c2b3a5653144)
![Screenshot 2025-04-30 171048](https://github.com/user-attachments/assets/8a6d7296-ae63-4ad8-8d5c-a2a8f4919173)
