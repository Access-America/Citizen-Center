import logging

import azure.functions as func
import simplejson as json

from os import environ


def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    version = '0.0.0'

    if (environ["CP_VERSION"]):
        version = environ["CP_VERSION"]

    body = {
        "version": version,
        "status": "OK"
    }

    return func.HttpResponse(body=json.dumps(body), status_code=200, mimetype="application/json")
