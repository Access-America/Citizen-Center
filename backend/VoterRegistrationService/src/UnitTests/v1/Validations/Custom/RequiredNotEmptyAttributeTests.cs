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
    public class RequiredNotEmptyAttributeTests
    {
        [DataTestMethod]
        [DataRow(null)]
        [DataRow("")]
        public void AttributeValidationShouldFail(string value)
        {
            // arrange
            TestRequiredNotEmpty test = new TestRequiredNotEmpty
            {
                TestProperty = value
            };

            // act
            List<ValidationResult> results = ValidateVoterAttributes.Validate(test, new List<ValidationResult>());

            // assert
            results.Single().Should().BeEquivalentTo(
                new ValidationResult("The TestProperty field is required.", new[] { "TestProperty" }));
        }

        [TestMethod]
        public void AttributeValidationShouldPass()
        {
            // arrange
            TestRequiredNotEmpty test = new TestRequiredNotEmpty
            {
                TestProperty = "."
            };

            // act
            List<ValidationResult> results = ValidateVoterAttributes.Validate(test, new List<ValidationResult>());

            // assert
            results.Should().BeEmpty();
        }
    }

    internal class TestRequiredNotEmpty
    {
        [RequiredNotEmpty]
        public string TestProperty { get; set; }
    }
}
