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
+ After installing the dependencies run the `main.py` files inside the `api/` directory, make sure you are within the virtual environment : 
``` sh
cd api
python main.py
```

### The server is running now!