using AA.VoterRegistration.Api.v1.Helpers;
using AA.VoterRegistration.Api.v1.Validations.Custom;
using AA.VoterRegistration.Api.v1.Validations.States;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AA.VoterRegistration.Api.v1.Models
{
    [Serializable]
    public class Voter : BaseVoter, IValidatableObject
    {
        [RequiredNotEmpty]
        public Guid Id { get; set; }
        
        [Required]
        public Address MailingAddress { get; set; }

        [Required]
        public DateTime DateOfBirth { get; set; }

        [RequiredNotEmpty]
        public string IdNumber { get; set; }

        [ValidateFromCollection(Collections.Parties)]
        public string ChoiceOfParty { get; set; }

        [ValidateFromCollection(Collections.Ethnicities)]
        public string RaceEthnicity { get; set; }

        /// <summary>
        /// If the applicant is unable to sign, who helped the applicant fill out this application? 
        /// Give name, address and phone number (phone number optional). -> ToString()
        /// </summary>
        public BaseVoter ApplicantAid { get; set; }

        [Required]
        public StateRequirements StateRequirements { get; set; }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            List<ValidationResult> results = new List<ValidationResult>();

            if (DateOfBirth.Date.AddYears(18) > Configurations.NextGeneralElectionDate.Date)
            {
                results.Add(new ValidationResult("Must be at least 18 years old before next election", new[] { nameof(DateOfBirth) }));
            }

            switch (HomeAddress.State)
            {
                case "Alabama":
                    AlabamaValidator.Validate(this, results);
                    break;
                case "Alaska":
                    AlaskaValidator.Validate(this, results);
                    break;
                //case "Arizona":
                //    ArizonaValidator.Validate(this, results);
                //    break;
            }
        
            return results;
        }
    }
}
