import os

from flask import Flask
from flask.json import jsonify

app = Flask(__name__)


@app.route("/")
def homepage():
    return "Server successfully running!"


@app.route("/status")
def status():
    return jsonify({
        "status": "OK"
    })


if __name__ == "__main__":

    if os.environ["PORT"]:
        port = int(os.environ["PORT"])
    else:
        port = 8080

    app.run(host="0.0.0.0", port=port)
