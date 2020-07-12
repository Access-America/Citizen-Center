FROM ubuntu:latest

WORKDIR /app

RUN apt-get update -y
RUN apt-get install -y python3-pip python3-dev build-essential

COPY Pipfile /app
COPY Pipfile.lock /app
COPY portal /app/portal

RUN pip3 install pipenv
RUN pipenv install --system --deploy --ignore-pipfile

ENV FLASK_APP=portal/flask_app.py
ARG PORT=8080

EXPOSE ${PORT}
ENV PORT ${PORT}

CMD ["python3", "portal/flask_app.py"]