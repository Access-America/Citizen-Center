using System;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace AA.VoterRegistration.Api.v1.Models
{
    [Serializable]
    public class BaseVoter
    {
        [Required]
        public Name Name { get; set; }

        [Required]
        public Address HomeAddress { get; set; }

        [RegularExpression(@"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$", ErrorMessage = "The provided phone number is invalid.")]
        public string PhoneNumber { get; set; }

        public override string ToString() 
        {
            return string.Join(" ", new[] { Name.ToString(), HomeAddress.ToString(), PhoneNumber }
                .Where(s => !string.IsNullOrEmpty(s)));
        }
    }
}
