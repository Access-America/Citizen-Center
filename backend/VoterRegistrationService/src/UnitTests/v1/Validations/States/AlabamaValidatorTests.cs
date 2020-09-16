using AA.VoterRegistration.Api.v1.Models;
using AA.VoterRegistration.Api.v1.Validations.States;
using FluentAssertions;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AA.VoterRegistration.UnitTests.v1.Validations.States
{
    [TestClass]
    public class AlabamaValidatorTests
    {
        [TestMethod]
        public void ShouldValidate()
        {
            // arrange
            Voter voter = TestingHelper.GenerateFullyHydratedVoterByState(TestingHelper.ForAlabama());
            voter.MailingAddress.ZipCode = "Other";
            voter.StateRequirements.SetState("Alabama");
            voter.StateRequirements.ConvictedOfFelonyInvolingMoralTurpitude = true;
            voter.StateRequirements.DeclaredMentallyIncompetent = true;
            voter.StateRequirements.SwearToAffirmToSupportAndDefendTheConstituiton = false;

            List<ValidationResult> validationResults = new List<ValidationResult>();

            // act
            AlabamaValidator.Validate(voter, validationResults);

            // act
            validationResults.Should().BeEquivalentTo(
                new List<ValidationResult>
                {
                    new ValidationResult("Alabama: Must be a resident of Alabama and your county at the time of registration.", new[] { "HomeAddress.ZipCode" }),
                    new ValidationResult("Alabama: Must not have been convicted of a felony involing moral turpitude.", new[] { "StateVotingRequirements.ConvictedOfFelonyInvolingMoralTurpitude" }),
                    new ValidationResult("Alabama: Must not have been declared mentally incompetent.", new[] { "StateVotingRequirements.DeclaredMentallyIncompetent" }),
                    new ValidationResult("Alabama: Must swear to affirm to support and defend the Constituiton.", new[] { "StateVotingRequirements.SwearToAffirmToSupportAndDefendTheConstituiton" })
                });
        }
    }
}
