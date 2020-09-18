using System;
using System.ComponentModel.DataAnnotations;

namespace AA.VoterRegistration.Api.v1.Validations.Custom
{
    public class RequiredNotEmptyAttribute : RequiredAttribute
    {
        public override bool IsValid(object value)
        {
            if (value is string)
            {
                return !string.IsNullOrEmpty(value as string);
            }

            if (value is Guid)
            {
                return Guid.Parse(value.ToString()) != Guid.Empty;
            }

            return base.IsValid(value);
        }
    }
}
