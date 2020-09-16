# AzureFunction
Initial setup for AccessAmerica Voter Registration 


200 OK Success (fully hydrated entity) - State of Alabama
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
  "stateRequirements": {
    "convictedOfFelonyInvolingMoralTurpitude": false,
    "swearToAffirmToSupportAndDefendTheConstituiton": true,
    "declaredMentallyIncompetent": false
  },
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

200 OK Success (only necessary fields hydrated) - State of Alabama
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
  "idNumber": "QWERTY123",
  "stateRequirements": {
    "convictedOfFelonyInvolingMoralTurpitude": false,
    "swearToAffirmToSupportAndDefendTheConstituiton": true,
    "declaredMentallyIncompetent": false
}
```


400 BadRequest
```
{
  "uuid": "ef8e735a-e475-4325-b992-42030c0f8ebc",
  "given_name": "John",
  "email": "johngmail.com",
  "address": {
    "address1": "My Street",
    "city": "Springfield",
    "state": "Alabama"
  },
  "phone": "+1 (555) 555-5555",
  "birthdate": "2010-05-20",
  "social_security_number": "078-05-1120",
  "verified_at": 737341624840543870
}
```