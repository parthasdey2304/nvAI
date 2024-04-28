Brain Tumour Detection Model
Introduction
🧠 Welcome to our Brain Tumour Detection Model developed during the AI Unite Hackathon by team nvAI! Our project utilizes Machine Learning, Computer Vision, and Segmentation techniques to detect brain tumors from MRI images.

Parts of the Project
Client
🖥️ On the client side, we have a React application running. The frontend interacts with a Flask API provided in the server part.

Server
🖥️ On the server side, we have a Linode instance running a Flask API. This API accepts an image of the brain tumor MRI and returns a JSON response in the following format:

json
Copy code
{
    "error" : "None",
    "detection" : true,
    "confidence_score" : 0.91
}
Team Members
👨‍💻 Parth Vastavik - Full Stack Development, API Integration
👨‍💻 Krish Goenka - AI Model Development
👨‍💻 Anustup Karnar - AI Model Development
👨‍💻 Rajarshi Ghosh - AI Model Development
👩‍💻 Palak Jain - UI/UX Designer, Presentation Head

Technologies Used
🔧 Python
🔧 TensorFlow
🔧 Keras
🔧 Flask
🔧 React
🔧 HTML/CSS

Installation
Clone the repository:
bash
Copy code
git clone https://github.com/nvAI/brain-tumour-detection.git
Install dependencies:
Copy code
pip install -r requirements.txt
Usage
Run the Flask server:
Copy code
python app.py
Visit http://localhost:5000 in your browser.
Upload an MRI image of the brain to get the prediction.
Model Overview
ℹ️ Our model is based on convolutional neural networks (CNNs) trained on a dataset of MRI images labeled with tumor presence or absence. We achieved an accuracy of XX% on our test dataset. The model utilizes segmentation techniques to identify and classify brain tumors from MRI scans.

Contribution Guidelines
🤝 We welcome contributions from the community! Whether it's improving the model, enhancing the UI/UX, or optimizing the codebase, we appreciate all efforts. Feel free to fork the repository, make improvements, and submit pull requests.

License
📝 This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
🙏 We would like to express our gratitude to the organizers of the AI Unite Hackathon for providing this platform to showcase our work. Additionally, we extend our thanks to the dataset providers and the open-source community for their invaluable contributions.
