## Setup

### Requirements For Only Running The Backend Server

- Docker

### Requirements For Backend Development

- Python 3
- FastAPI
- uvicorn

### Running The Backend in Docker

This project includes a simple backend using Python 3 and the FastAPI framework. You can either run this locally (for doing backend development), or run it in a Docker container (to make the backend server available while doing front-end development). To run the server in a Docker container, run the following commands:

```
docker build -t citzenship-portal . && docker run --name citizenship-portal -d -p 8000:8000 citizenship-portal
```

Once everything's done, you can confirm the portal is working by opening a browser and typing http://127.0.0.1:8000/.

### Backend Development Setup

Make sure you have Python 3 and Pip installed on your machine. 

* Install the requirements:  
`pip install -r requirements.txt`

* Run the development server:  
`uvicorn main:app --reload`  

    You should see:
    ```
    INFO: Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
    INFO: Started reloader process [28720]
    INFO: Started server process [28722]
    INFO: Waiting for application startup.
    INFO: Application startup complete.
    ```

You can confirm the portal is working by opening a browser and visiting http://127.0.0.1:8000/.
