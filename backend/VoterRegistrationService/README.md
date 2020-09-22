# AzureFunction
Initial setup for AccessAmerica Voter Registration 

Pre-requisites: 
* install Azure Functions Core Tools (https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local)
run: npm install -g azure-functions-core-tools

To run the Azure Functions locally using VS Code:
* cd into src/Api folder
* run the following command: func start
* to shut down: Ctrl+C

In your terminal, you should see the following:
Functions:
  HealthChecker: [GET] http://localhost:7071/api/v1/healthcheck
  ValidateVoter: [POST] http://localhost:7071/api/v1/validate

--------------------------------------------------------------------------------

200 OK Success (fully hydrated entity)
```
{
  "id": "ef8e735a-e475-4325-b992-42030c0f8ebc",
  "name": {
    "prefix": "Mr.",
    "firstName": "John",
    "middleNames": "D. P.",
    "lastName": "Doe",
    "suffix": "III"
  },
  "homeAddress": {
    "address1": "My Street",
    "address2": "123",
    "city": "Springfield",
    "state": "Alabama",
    "zipcode": "12345"
  },
  "mailingAddress": {
    "address1": "My Street",
    "address2": "123",
    "city": "Springfield",
    "state": "Alabama",
    "zipcode": "12345"
  },
  "phoneNumber": "(979) 778 1098",
  "dateOfBirth": "1990-11-25",
  "idNumber": "QWERTY123",
  "choiceOfParty": "Green",
  "raceEthnicity": "Other",
  "applicantAid": {
    "name": {
      "firstName": "Johnny",
      "lastName": "Doe"
    },
    "homeAddress": {
      "address1": "My Street",
      "address2": "123",
      "city": "Springfield",
      "state": "Alabama",
      "zipcode": "12345"
    }
  }
}
```

200 OK Success (only required fields hydrated)
```
{
  "id": "ef8e735a-e475-4325-b992-42030c0f8ebc",
  "name": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "homeAddress": {
    "address1": "My Street",
    "city": "Springfield",
    "state": "Alabama",
    "zipcode": "12345"
  },
  "mailingAddress": {
    "address1": "My Street",
    "city": "Springfield",
    "state": "Alabama",
    "zipcode": "12345"
  },
  "phoneNumber": "(979) 778 1098",
  "dateOfBirth": "1990-11-25",
  "idNumber": "QWERTY123"
}
```

400 BadRequest -> failed requirements or missing mandatory fields
```
{
  "id": "00000000-0000-0000-0000-000000000000",
  "email": "johngmail.com",
  "name": {
    "lastName": "Doe"
  },
  "homeAddress": {
    "address1": "My Street",
    "city": "Springfield",
    "state": "Alabama"
  },
  "phoneNumber": "null",
  "dateOfBirth": "2100-11-25",
  "idNumber": null
}
```