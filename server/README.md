## Installation
+ Navigate to the server folder : 
``` sh
cd server
```

+ Create a virtual environment first : 
``` sh
pip install virtaulenv
virtualenv .env
```

+ Activate te virtaul environment : 
``` sh
source .env/bin/activate
```

+ Install all the dependencies from the `requirements.txt` file : 
``` sh
pip install -r requirements.txt
```

## Usage
+ Make an account on [roboflow](https://app.roboflow.com/partha-sarathi-dey/settings/api) and get the API keys.
+ Open the Flask API code in your code editor and paste the API key in the code.
``` sh
code api/main.py
```
+ Open the `main.py` file and paste the API key in the code.
``` python
app = Flask(__name__)
CORS(app)

image_path = 'uploads/image.jpg'
output_path = 'analysed/analysed.jpg'
model_id = 'brain-tumour-detection-g4iyq/2'
api_url = 'https://detect.roboflow.com'
api_key = 'Add_Your_Own_API_KEY' # Add the API key Here

```
+ After installing the dependencies and adding the API key run the `main.py` files inside the `api/` directory, make sure you are within the virtual environment : 
``` sh
python main.py
```

### The server is running now!