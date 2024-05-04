
# Brain Tumour Detection Model


## Introduction
🧠 Welcome to our Brain Tumour Detection Model developed during the AI Unite Hackathon by team nvAI! Our project utilizes Machine Learning, Computer Vision, and Segmentation techniques to detect brain tumors from MRI images.


## Parts of the Project
🖥️ On the client side, we have a React application running. The frontend interacts with a Flask API provided in the server part.

## Server
🖥️ On the server side, we have a Linode instance running a Flask API. This API accepts an image of the brain tumor MRI and returns a JSON response in the following format:

```
{
    "error" : "None",
    "detection" : true,
    "confidence_score" : 0.91
}
```

## Team Members
👨‍💻 Parth Vastavik - Full Stack Developer  
👨‍💻 Krish Goenka - AI Model Developer 
👨‍💻 Anustup Karnar - AI Model Developer   
👨‍💻 Rajarshi Ghosh - AI Model Developer   
👩‍💻 Palak Jain - UI/UX Designer, Presentation Head


## Technologies Used
<!--🔧 Python   
🔧 TensorFlow   
🔧 Keras    
🔧 Flask    
🔧 React    
🔧 HTML/CSS-->

<div styl="display: flex">
    <img src="https://skillicons.dev/icons?i=html" alt="">
    <img src="https://skillicons.dev/icons?i=css" alt="">
    <img src="https://skillicons.dev/icons?i=javascript" alt="">
    <img src="https://skillicons.dev/icons?i=python" alt="">
    <img src="https://skillicons.dev/icons?i=nodejs" alt="">
    <img src="https://skillicons.dev/icons?i=react" alt="">
    <img src="https://skillicons.dev/icons?i=express" alt="">
    <img src="https://skillicons.dev/icons?i=tensorflow" alt="">
    <img src="https://skillicons.dev/icons?i=flask" alt="">
    <img src="https://skillicons.dev/icons?i=mongodb" alt="">
</div>


## Installation

+ Clone the repository:     
``` bash
git clone https://github.com/nvAI/brain-tumour-detection.git
```
+ Install dependencies:
``` bash
pip install -r requirements.txt
```

## Model Overview
ℹ️ Our model is based on convolutional neural networks (CNNs) trained on a dataset of MRI images labeled with tumor presence or absence. We achieved an accuracy of XX% on our test dataset. The model utilizes segmentation techniques to identify and classify brain tumors from MRI scans.


## Contribution Guidelines
🤝 We welcome contributions from the community! Whether it's improving the model, enhancing the UI/UX, or optimizing the codebase, we appreciate all efforts. Feel free to fork the repository, make improvements, and submit pull requests.

## License
📝 This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

🙏 We would like to express our gratitude to the organizers of the AI Unite Hackathon for providing this platform to showcase our work. Additionally, we extend our thanks to the dataset providers and the open-source community for their invaluable contributions.
