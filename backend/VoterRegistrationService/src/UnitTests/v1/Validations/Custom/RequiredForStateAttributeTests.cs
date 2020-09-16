using AA.VoterRegistration.Api.v1.Models;
using AA.VoterRegistration.Api.v1.Validation;
using AA.VoterRegistration.Api.v1.Validations.Custom;
using FluentAssertions;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace AA.VoterRegistration.UnitTests.v1.Validations.Custom
{
    [TestClass]
    public class RequiredForStateAttributeTests
    {
        private const string _state = "TestState";

        [TestMethod]
        public void AttributeValidationShouldFail()
        {
            // arrange
            TestRequiredForState test = new TestRequiredForState
            {
                TestProperty = null
            };
            test.SetState(_state);

            // act
            List<ValidationResult> results = ValidateVoterAttributes.Validate(test, new List<ValidationResult>());

            // assert
            results.Single().Should().BeEquivalentTo(
                new ValidationResult("TestState: TestProperty is required.", new[] { "TestProperty" }));
        }

        [TestMethod]
        public void AttributeValidationShouldPass()
        {
            // arrange
            TestRequiredForState test = new TestRequiredForState
            {
                TestProperty = "some value"
            };
            test.SetState(_state);

            // act
            List<ValidationResult> results = ValidateVoterAttributes.Validate(test, new List<ValidationResult>());

            // assert
            results.Should().BeEmpty();
        }
    }

    internal class TestRequiredForState : StateRequirements
    {
        [RequiredForState("TestState")]
        public string TestProperty { get; set; }
    }
}
