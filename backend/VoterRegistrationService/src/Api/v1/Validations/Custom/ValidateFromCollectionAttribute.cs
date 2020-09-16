using AA.VoterRegistration.Api.v1.Extensions;
using AA.VoterRegistration.Api.v1.Helpers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace AA.VoterRegistration.Api.v1.Validations.Custom
{
    public class ValidateFromCollectionAttribute : ValidationAttribute
    {
        private readonly Collections _collection;

        public ValidateFromCollectionAttribute(Collections collection)
        {
            _collection = collection;
        }

        public override bool IsValid(object value)
        {
            if (value != null && value is string)
            {
                string term = ((string)value).Trim();
                switch (_collection)
                {
                    case Collections.States:
                        ErrorMessage = "Please provide a valid state or territory";
                        return CompareTermWithCollection(term, Constants.States, false);

                    case Collections.Parties:
                        return CompareTermWithCollection(term, Constants.Parties);

                    case Collections.Ethnicities:
                        return CompareTermWithCollection(term, Constants.Ethnicities);

                    case Collections.Prefixes:
                        return CompareTermWithCollection(term, Constants.Prefixes);

                    case Collections.Suffixes:
                        return CompareTermWithCollection(term, Constants.Suffixes);
                }
            }

            return true;
        }

        private bool CompareTermWithCollection(string term, HashSet<string> collection, bool setErrorMessage = true)
        {
            if (setErrorMessage)
            {
                ErrorMessage = collection.ToErrorMessage();
            }

            return collection.Any(st => st.Equals(term, StringComparison.InvariantCultureIgnoreCase));
        }
    }
}
