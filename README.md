<h1 align="center">nvAI</h1>
My hackathon project that uses `Machine Learning` to detect Brain Tumours.

## Parts of the project
### Client
On the client side we have a `react` application running. The Frontend part uses a `Flask-API` which is provided in the server part.
### Server
On the server side we have a linode that is running a `Flask-API` that accepts an image of the Brain Tumour MRI and return a `json` in the format :
``` json
{
    "error" : "None",
    "detection" : true,
    "confidence_score" : 0.91
}
```
