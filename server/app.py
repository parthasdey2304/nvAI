from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import cv2
import numpy as np
from PIL import Image
import io
import tensorflow as tf
from tensorflow.keras.models import load_model

app = Flask(__name__)
CORS(app)

# Load your pre-trained Keras model
model = load_model('model.h5')

def preprocess_image(image):
    # Preprocess the image as required by your model
    # For example, resize to the input size expected by the model
    image = cv2.resize(image, (224, 224))
    image = image / 255.0  # Normalize to [0, 1]
    image = np.expand_dims(image, axis=0)  # Add batch dimension
    return image

def detect_tumors(image):
    # Preprocess the image
    preprocessed_image = preprocess_image(image)

    # Run the model inference
    predictions = model.predict(preprocessed_image)

    # Assuming the model outputs bounding boxes and confidence scores
    # Here, we use dummy values for demonstration
    # Replace with your actual model output processing logic
    boxes = [(int(pred[0] * image.shape[1]), int(pred[1] * image.shape[0]),
              int(pred[2] * image.shape[1]), int(pred[3] * image.shape[0])) for pred in predictions]
    confidence_scores = [pred[4] for pred in predictions]

    return boxes, confidence_scores

def draw_boxes(image, boxes):
    for (x, y, w, h) in boxes:
        cv2.rectangle(image, (x, y), (x + w, y + h), (0, 0, 255), 2)
    return image

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'}), 400
    
    file = request.files['image']
    image = Image.open(file.stream).convert('RGB')
    image_np = np.array(image)

    boxes, confidence_scores = detect_tumors(image_np)
    image_with_boxes = draw_boxes(image_np, boxes)

    # Convert image back to PIL format
    image_pil = Image.fromarray(image_with_boxes)
    buf = io.BytesIO()
    image_pil.save(buf, format='PNG')
    buf.seek(0)

    response = {
        'result': 'Tumor detected' if boxes else 'No tumor detected',
        'confidence_scores': confidence_scores
    }

    return jsonify(response), 200, {'Content-Type': 'image/png'}, send_file(buf, mimetype='image/png')

if __name__ == '__main__':
    app.run(debug=True)
