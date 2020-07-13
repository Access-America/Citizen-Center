## Setup

### Requirements For Only Running The Backend Server

- Docker

### Requirements For Backend Development

- Python 3
- Flask
- Pip
- Pipenv

### Running The Backend in Docker

This project includes a simple backend using Python 3 and the Flask framework. You can either run this locally (for doing backend development), or run it in a Docker container (to make the backend server available while doing front-end development). To run the server in a Docker container, run the following commands:

```
docker build -t citzenship-portal . && docker run --name citizenship-portal -d -p 8080:8080 citizenship-portal
```

Once everything's done, you can confirm the portal is working by opening a browser and typing http://localhost:8080/.

### Backend Development Setup

Make sure you have Python 3 and Pip installed on your machine. This project uses Pipenv to manage dependencies and virtual environments so that the libraries we install don't conflict with anything else on the developer's machine. To install Pipenv:

```
pip install pipenv
```

Use pipenv to pull in all the dependencies for this project:

```
pipenv install
```

Once all the dependencies are involved, start the virtual environment:

```
pipenv shell
```

This launches virtual environment. To exit, type `deactivate` into the console.

To start the backend server, run:

```
export FLASK_APP=portal/flask_app.py
flask run -p 8080
```

You can confirm the portal is working by opening a browser and typing http://localhost:8080/.

### Development Notes:

This server contains a `/status` endpoint that can be used as a health check on the backend. If you add any other component (e.g. a database, or another service), please update the endpoint implementation to include it in the JSON object returned by the `/status` endpoint. The `status` value should only be `OK` if all the backend services and dependencies are healthy.
