using AA.VoterRegistration.Api.v1.Helpers;
using AA.VoterRegistration.Api.v1.Validations.Custom;
using System;
using System.Linq;

namespace AA.VoterRegistration.Api.v1.Models
{
    [Serializable]
    public class Address
    {
        [RequiredNotEmpty]
        public string Address1 { get; set; }

        public string Address2 { get; set; }

        [RequiredNotEmpty]
        public string City { get; set; }

        [RequiredNotEmpty]
        [ValidateFromCollection(Collections.States)]
        public string State { get; set; }

        [RequiredNotEmpty]
        public string ZipCode { get; set; }

        public override string ToString()
        {
            return string.Join(" ", new[] { Address1, Address2, City, State, ZipCode }
                .Where(s => !string.IsNullOrEmpty(s)));
        }
    }
}
