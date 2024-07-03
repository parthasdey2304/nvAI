import os
import cv2
import json
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from inference_sdk import InferenceHTTPClient

app = Flask(__name__)
CORS(app)

image_path = 'uploads/image.jpg'
output_path = 'uploads/analysed.jpg'
model_id = 'brain-tumour-detection-g4iyq/2'
api_url = 'https://detect.roboflow.com'
api_key = 'qCN95qrzbuyZN1ZkMGWR'

def detect_brain_tumor(image_path, model_id, api_url, api_key):
    client = InferenceHTTPClient(
        api_url=api_url,
        api_key=api_key
    )

    result = client.infer(image_path, model_id=model_id)
    
    with open('response.json', 'w') as f:
        json.dump(result, f)
    
    return result

def annotate_image(image_path, detection_result, output_path):
    image = cv2.imread(image_path)

    prediction = detection_result['predictions'][0]
    x = int(prediction['x'])
    y = int(prediction['y'])
    width = int(prediction['width'])
    height = int(prediction['height'])
    confidence = prediction['confidence']
    tumor_class = prediction['class']

    start_point = (x - 30, y - 30)
    end_point = (x + width - 30, y + height - 30)
    color = (0, 0, 255)
    thickness = 1

    cv2.rectangle(image, start_point, end_point, color, thickness)

    label = f"{tumor_class} ({confidence * 100:.2f}%)"
    font = cv2.FONT_HERSHEY_SIMPLEX
    font_scale = 0.4
    font_color = (255, 255, 255)  
    font_thickness = 1

    text_size, _ = cv2.getTextSize(label, font, font_scale, font_thickness)

    label_position = (x - 30, y - 40)

    text_bg_start = (label_position[0], label_position[1] - text_size[1] - 2)
    text_bg_end = (label_position[0] + text_size[0] + 2, label_position[1] + 2)
    cv2.rectangle(image, text_bg_start, text_bg_end, color, -1)

    cv2.putText(image, label, label_position, font, font_scale, font_color, font_thickness)

    cv2.imwrite("analysed/analysed.jpg", image)

    print(f"Image saved as {output_path}")

@app.route('/upload', methods=['POST'])
def upload():
    if 'image' not in request.files:
        return jsonify({'message': 'No file part in the request'}), 400
    
    file = request.files['image']
    file.save("uploads/image.jpg")
    detection_result = detect_brain_tumor(image_path, model_id, api_url, api_key)
    annotate_image(image_path, detection_result, output_path)

    return jsonify(detection_result), 200

@app.route('/image_with_boxes', methods=['GET'])
def get_image_with_boxes():
    return send_file("analysed/analysed.jpg", mimetype='image/png')

if __name__ == '__main__':
    os.makedirs('uploads', exist_ok=True)
    os.makedirs('analysed', exist_ok=True)
    app.run(debug=True)
