using AA.VoterRegistration.Api.v1.Helpers;
using AA.VoterRegistration.Api.v1.Validations.Custom;
using System;
using System.Linq;

namespace AA.VoterRegistration.Api.v1.Models
{
    [Serializable]
    public class Name
    {
        [ValidateFromCollection(Collections.Prefixes)]
        public string Prefix { get; set; }

        [RequiredNotEmpty]
        public string FirstName { get; set; }

        public string MiddleNames { get; set; }

        [RequiredNotEmpty]
        public string LastName { get; set; }

        [ValidateFromCollection(Collections.Suffixes)]
        public string Suffix { get; set; }

        public override string ToString()
        {
            return string.Join(" ", new[] { Prefix, FirstName, MiddleNames, LastName, Suffix }
                .Where(s => !string.IsNullOrEmpty(s)));
        }
    }
}
