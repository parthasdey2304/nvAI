from flask import Flask, request, send_file

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload_file():
    # Check if a file is present in the request
    if 'file' not in request.files:
        return "No file found", 400
    
    file = request.files['file']
    
    # Check if the file is empty
    if file.filename == '':
        return "Empty file", 400
    
    # Check if the file is an allowed image format
    allowed_extensions = {'png', 'jpg', 'jpeg', 'gif'}
    if '.' not in file.filename or file.filename.rsplit('.', 1)[1].lower() not in allowed_extensions:
        return "Invalid file format. Only PNG, JPG, JPEG, and GIF are allowed.", 400
    
    # Save the file to a temporary location
    file.save('temp_image.png')
    
    # Return the uploaded image
    return send_file('temp_image.png', mimetype='image/png')

if __name__ == '__main__':
    app.run(debug=True)

