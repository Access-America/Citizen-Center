# Development

<<<<<<< HEAD
# [Humanity Forward's Citizen Center Backend](https://www.beautiful.ai/player/-M7TXW9Wpl9Jqh3Azfwc/citizenship)

## Get Started

This module contains the project's backend development efforts. 

If you are eager to contribute but don't know where to start, feel free to check out the issues tab.

Leave a comment on the issue if you decide to tackle it and let us know if you have any questions

If you find something you like and wanna get started, follow the instructions below to get up and running

------ Make sure to add your name to the contributors under the _README_ ------

## Setup

### Requirements

* npm
* Python 3
* Pip
* Pipenv

### Running

=======
# [Humanity Forward's Citizenship Portal Backend](https://www.beautiful.ai/player/-M7TXW9Wpl9Jqh3Azfwc/citizenship)

## Get Started

Welcome to a world where everyone can benefit from the information age. Our goal is to create a citizenship portal for the citizens of the United States of America. This repo contains the project's backend development hub. 

If you are eager to contribute but don't know where to start, feel free to check out the issues tab
Leave a comment on the issue if you decide to tackle it and let us know if you have any questions

If you find something you like and wanna get started, follow the instructions below to get up and running

------ Make sure to add your name to the contributors under the _README_ ------

## Setup

### Requirements

* npm
* Python 3
* Pip
* Pipenv

### Running

>>>>>>> 82d01c4... Issue 58/azure serverless integrations (#63)
This project includes a simple backend using Python 3 and Azure serverless functions. To run it locally, run the following commands:

```
pip install pipenv
pipenv install
pipenv shell
npm run start-local
```

Once everything's done, you can confirm the backend is working by opening a browser and typing http://localhost:7071/api/status.


### Backend Development Setup

If you would like to develop for the backend itself, you can get your development environment up and running 

```
pip install pipenv
pipenv install
pipenv shell
```

### Development Notes:

This server contains a `/status` endpoint that can be used as a health check on the backend. If you add any other component (e.g. a database, or another service), please update the endpoint implementation to include it in the JSON object returned by the `/status` endpoint. The `status` value should only be `OK` if all the backend services and dependencies are healthy. 