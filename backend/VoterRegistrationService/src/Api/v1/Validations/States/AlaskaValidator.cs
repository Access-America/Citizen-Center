using AA.VoterRegistration.Api.v1.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AA.VoterRegistration.Api.v1.Validations.States
{
    public class AlaskaValidator
    {
        private const string _state = "Alaska";

        public static void Validate(Voter voter, List<ValidationResult> results)
        {
            if (voter.DateOfBirth.Date.AddYears(18) > DateTime.UtcNow.Date.AddDays(90))
            {
                results.Add(new ValidationResult($"{_state}: Must be at least 18 years within 90 days of completing theis registration.", new[] { "DateOfBirth" }));
            }

            if (voter.StateRequirements?.ConvictedOfFelony.Value != null && voter.StateRequirements.ConvictedOfFelony.Value)
            {
                results.Add(new ValidationResult($"{_state}: Must not have been convicted of a felony.", new[] { "StateVotingRequirements.ConvictedOfFelony" }));
            }
        }
    }
}
