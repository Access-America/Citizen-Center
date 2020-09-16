using AA.VoterRegistration.Api.v1.Models;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AA.VoterRegistration.Api.v1.Validations.States
{
    public class AlabamaValidator
    {
        private const string _state = "Alabama";

        public static void Validate(Voter voter, List<ValidationResult> results)
        {
            if (voter.HomeAddress.ZipCode != voter.MailingAddress.ZipCode)
            {
                results.Add(new ValidationResult($"{_state}: Must be a resident of Alabama and your county at the time of registration.", new[] { "HomeAddress.ZipCode" }));
            }

            if (voter.StateRequirements?.ConvictedOfFelonyInvolingMoralTurpitude != null && voter.StateRequirements.ConvictedOfFelonyInvolingMoralTurpitude.Value)
            {
                results.Add(new ValidationResult($"{_state}: Must not have been convicted of a felony involing moral turpitude.", new[] { "StateVotingRequirements.ConvictedOfFelonyInvolingMoralTurpitude" }));
            }

            if (voter.StateRequirements?.DeclaredMentallyIncompetent != null && voter.StateRequirements.DeclaredMentallyIncompetent.Value)
            {
                results.Add(new ValidationResult($"{_state}: Must not have been declared mentally incompetent.", new[] { "StateVotingRequirements.DeclaredMentallyIncompetent" }));
            }

            if (voter.StateRequirements?.SwearToAffirmToSupportAndDefendTheConstituiton != null && !voter.StateRequirements.SwearToAffirmToSupportAndDefendTheConstituiton.Value)
            {
                results.Add(new ValidationResult($"{_state}: Must swear to affirm to support and defend the Constituiton.", new[] { "StateVotingRequirements.SwearToAffirmToSupportAndDefendTheConstituiton" }));
            }
        }
    }
}
