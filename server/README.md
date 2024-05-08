# Flask API endpoint for image classification. 
Loads a pretrained Keras model and provides a /predict endpoint 
to classify images uploaded by the user. Returns the predicted class 
and confidence score. Handles file uploads and validation. Saves images 
to MongoDB after prediction.

## Installation
+ Install the requirements : 
``` bash
pip install -r requirements.txt
```
