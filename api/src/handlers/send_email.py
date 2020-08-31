import logging
import sendgrid

import azure.functions as func
import simplejson as json

from os import environ
from sendgrid.helpers.mail import *


def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        logging.info("SendGrid email triggered.")

        logging.debug("Parsing message data from request body")
        body = req.get_json()
        from_email = Email(body["from"])
        to_email = To(body["to"])
        subject = Subject(body["subject"])
        template_id = TemplateId(body["template_id"])

        logging.debug("Getting template value substitutions")
        substitutions = []
        for substitution_key in body["substitutions"].keys():
            message_substitution = Substitution(
                key=substitution_key, value=body["substitutions"][substitution_key])
            substitutions.append(message_substitution)

        logging.info("Message contents parsed from request input.")
        sg = sendgrid.SendGridAPIClient(
            api_key=os.environ.get('SENDGRID_API_KEY'))
        logging.info("SendGrid client initialized")
        mail = Mail(from_email=from_email, to_email=to_email,
                    subject=subject, global_substitutions=substitutions)
        mail.template_id = template_id
        logging.info("Message initialized")
        response = sg.client.mail.send.post(request_body=mail.get())
        logging.info("Message sent!")

        return func.HttpResponse(body=json.dumps(response.body), status_code=response.status_code, mimetype="application/json")

    except Exception as email_exception:
        logging.error("Error sending email!")
        logging.error(email_exception)
