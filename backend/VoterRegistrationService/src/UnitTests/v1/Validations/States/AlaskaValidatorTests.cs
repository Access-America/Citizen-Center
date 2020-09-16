using AA.VoterRegistration.Api.v1.Models;
using AA.VoterRegistration.Api.v1.Validations.States;
using FluentAssertions;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AA.VoterRegistration.UnitTests.v1.Validations.States
{
    [TestClass]
    public class AlaskaValidatorTests
    {
        [TestMethod]
        public void ShouldValidate()
        {
            // arrange
            Voter voter = TestingHelper.GenerateFullyHydratedVoterByState(TestingHelper.ForAlaska());
            voter.DateOfBirth = DateTime.Now;
            voter.StateRequirements.SetState("Alaska");
            voter.StateRequirements.ConvictedOfFelony = true;

            List<ValidationResult> validationResults = new List<ValidationResult>();

            // act
            AlaskaValidator.Validate(voter, validationResults);

            // act
            validationResults.Should().BeEquivalentTo(
                new List<ValidationResult>
                {
                    new ValidationResult("Alaska: Must be at least 18 years within 90 days of completing theis registration.", new[] { "DateOfBirth" }),
                    new ValidationResult("Alaska: Must not have been convicted of a felony.", new[] { "StateVotingRequirements.ConvictedOfFelony" })
                });
        }
    }
}
