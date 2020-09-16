using AA.VoterRegistration.Api.v1.Helpers;
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
    public class ValidateFromCollectionAttributeTests
    {
        [DataTestMethod]
        [DataRow("")]
        [DataRow(" ")]
        [DataRow("jr.")]
        [DataRow("other ")]
        public void AttributeValidationShouldFail(string value)
        {
            // arrange
            TestValidateFromCollection test = new TestValidateFromCollection
            {
                TestProperty = value
            };

            // act
            List<ValidationResult> results = ValidateVoterAttributes.Validate(test, new List<ValidationResult>());

            // assert
            results.Single().Should().BeEquivalentTo(
                new ValidationResult("Can only be 'Jr','Sr','II','III','IV'.", new[] { "TestProperty" }));
        }

        [DataTestMethod]
        [DataRow(null)]
        [DataRow("jr ")]
        [DataRow("JR")]
        [DataRow("sr ")]
        [DataRow("SR")]
        [DataRow("ii ")]
        [DataRow("II")]
        [DataRow("iii ")]
        [DataRow("III")]
        [DataRow("iv ")]
        [DataRow("IV")]
        public void AttributeValidationShouldPass(string value)
        {
            // arrange
            TestValidateFromCollection test = new TestValidateFromCollection
            {
                TestProperty = value
            };

            // act
            List<ValidationResult> results = ValidateVoterAttributes.Validate(test, new List<ValidationResult>());

            // assert
            results.Should().BeEmpty();
        }
    }

    internal class TestValidateFromCollection
    {
        [ValidateFromCollection(Collections.Suffixes)]
        public string TestProperty { get; set; }
    }
}
