using AA.VoterRegistration.Api.v1.Helpers;
using AA.VoterRegistration.Api.v1.Models;
using System;
using System.Linq;

namespace AA.VoterRegistration.UnitTests.v1
{
    public class TestingHelper
    {
        public static Voter GenerateFullyHydratedVoter()
        {
            return new Voter
            {
                Id = Guid.Parse("ef8e735a-e475-4325-b992-42030c0f8ebc"),
                Name = new Name
                {
                    Prefix = Constants.Prefixes.First(),
                    FirstName = "John",
                    MiddleNames = "P.",
                    LastName = "Doe",
                    Suffix = Constants.Suffixes.First()
                },
                HomeAddress = new Address
                {
                    Address1 = "987 My Street",
                    Address2 = "Apt 123",
                    City = "Springfield",
                    State = "Alabama",
                    ZipCode = "98765"
                },
                MailingAddress = new Address
                {
                    Address1 = "987 My Street",
                    Address2 = "Apt 123",
                    City = "Springfield",
                    State = "Alabama",
                    ZipCode = "98765"
                },
                PhoneNumber = "(908) 345-6789",
                DateOfBirth = DateTime.UtcNow.AddYears(-25).Date,
                IdNumber = "QWERTY123",
                ChoiceOfParty = Constants.Parties.First(),
                RaceEthnicity = Constants.Ethnicities.First(),
                ApplicantAid = new BaseVoter
                {
                    Name = new Name
                    {
                        Prefix = Constants.Prefixes.First(),
                        FirstName = "Jane",
                        MiddleNames = "Q.",
                        LastName = "Doe",
                        Suffix = Constants.Suffixes.First()
                    },
                    HomeAddress = new Address
                    {
                        Address1 = "789 My Street",
                        Address2 = "Apt 124",
                        City = "Springfield",
                        State = "Alabama",
                        ZipCode = "98764"
                    },
                    PhoneNumber = "(908) 345-6780",
                }
            };
        }

        public static Voter GenerateHydratedVoterWithMinRequirements()
        {
            return new Voter
            {
                Id = Guid.Parse("ef8e735a-e475-4325-b992-42030c0f8ebc"),
                Name = new Name
                {
                    FirstName = "John",
                    LastName = "Doe"
                },
                HomeAddress = new Address
                {
                    Address1 = "987 My Street",
                    City = "Springfield",
                    State = "Alabama",
                    ZipCode = "98765"
                },
                MailingAddress = new Address
                {
                    Address1 = "987 My Street",
                    City = "Springfield",
                    State = "Alabama",
                    ZipCode = "98765"
                },
                PhoneNumber = "(908) 345-6789",
                DateOfBirth = DateTime.UtcNow.AddYears(-25).Date,
                IdNumber = "QWERTY123"
            };
        }
    }
}
