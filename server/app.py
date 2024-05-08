from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import os
from pymongo import MongoClient
import numpy as np
import tensorflow as tf

app = Flask(__name__)

# Load the machine learning model
model = tf.keras.models.load_model('path_to_your_model')

# # Connect to MongoDB
# client = MongoClient('mongodb://localhost:27017/')
# db = client['your_database']
# yes_collection = db['yes']
# no_collection = db['no']


ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({'error': 'No selected file'})
    
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        filepath = os.path.join('uploads', filename)
        file.save(filepath)
        
        # Perform prediction
        img_height = 224 # Added definition for img_height
        img_width = 224 # Added definition for img_width
        img = tf.keras.preprocessing.image.load_img(filepath, target_size=(img_height, img_width))
        img_array = tf.keras.preprocessing.image.img_to_array(img)
        img_array = tf.expand_dims(img_array, 0)  # Create batch axis
        predictions = model.predict(img_array)
        
        confidence_score = np.max(predictions)
        predicted_class = np.argmax(predictions)
        if predicted_class == 0:
            result = 'no'
            # collection = no_collection
        else:
            result = 'yes'
            # collection = yes_collection
        
        # Save image to MongoDB
        with open(filepath, 'rb') as f:
            img_data = f.read()
        os.remove(filepath)  # Remove uploaded image after saving to MongoDB
        # collection.insert_one({'image': img_data})
        
        return jsonify({'result': result, 'confidence_score': float(confidence_score)})
    else:
        return jsonify({'error': 'Invalid file format'})



# @app.route('/update_model', methods=['POST'])
# def update_model():
#     # Fetch new data from MongoDB and retrain the model
#     # Add your model update logic here
#     return jsonify({'message': 'Model updated successfully'})

if __name__ == '__main__':
    app.run(debug=True, port=5000)