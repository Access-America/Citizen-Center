using AA.VoterRegistration.Api.v1.Models;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AA.VoterRegistration.Api.v1.Validations.Custom
{
    public class RequiredForStateAttribute : RequiredAttribute
    {
        private readonly string _desiredValue;

        public RequiredForStateAttribute(string desiredvalue)
        {
            AllowEmptyStrings = true;
            _desiredValue = desiredvalue;
        }

        protected override ValidationResult IsValid(object value, ValidationContext context)
        {
            object instance = context.ObjectInstance;
            if (instance is StateRequirements && ((StateRequirements)instance).GetState() == _desiredValue)
            {
                ErrorMessage = $"{_desiredValue}: {context.DisplayName} is required.";
                return base.IsValid(value, context);
            }

            return ValidationResult.Success;
        }
    }
}
