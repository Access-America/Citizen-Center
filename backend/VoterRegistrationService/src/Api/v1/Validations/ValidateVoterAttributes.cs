using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;
using System.Linq;

namespace AA.VoterRegistration.Api.v1.Validation
{
    [ExcludeFromCodeCoverage] // verified in custom attribute unit tests
    public class ValidateVoterAttributes
    {
        public static List<ValidationResult> Validate(object obj, List<ValidationResult> results, string prefix = null)
        {
            var context = new ValidationContext(obj, serviceProvider: null, items: null);

            List<ValidationResult> nestedResults = new List<ValidationResult>();

            // Executes standard DataModel Annotation validations
            Validator.TryValidateObject(obj, context, nestedResults, true);

            // Executes specific entity validations from IValidatableObject
            nestedResults = EnforceValidatableObject(obj, nestedResults, context);

            // Formats ValidationResult with full entity name
            results = FormatValidationResults(prefix, nestedResults, results);

            // Validate children
            ExecuteRecursiveValidation(obj, prefix, results);

            return results;
        }

        public static Dictionary<string, string[]> GenerateErrors(List<ValidationResult> results)
        {
            Dictionary<string, string[]> dict = new Dictionary<string, string[]>();
            foreach (var result in results.OrderBy(x => x.MemberNames.Single()))
            {
                dict.Add(result.MemberNames.Single(), new[] { result.ErrorMessage });
            }
            return dict;
        }

        private static List<ValidationResult> EnforceValidatableObject(object obj, List<ValidationResult> nestedResults, ValidationContext context)
        {
            if (obj is IValidatableObject)
            {
                IValidatableObject validatable = (IValidatableObject)obj;
                var stateValidations = validatable.Validate(context);
                foreach (var stateValidation in stateValidations)
                {
                    if (!nestedResults.Any(x => x.ErrorMessage == stateValidation.ErrorMessage))
                    {
                        nestedResults.Add(stateValidation);
                    }
                }
            }

            return nestedResults;
        }

        private static List<ValidationResult> FormatValidationResults(string prefix, List<ValidationResult> nestedResults, List<ValidationResult> finalResults)
        {
            if (!string.IsNullOrEmpty(prefix))
            {
                for (int i = 0; i < nestedResults.Count; i++)
                {
                    finalResults.Add(
                        new ValidationResult(
                            nestedResults[i].ErrorMessage,
                            new string[] { $"{prefix}.{nestedResults[i].MemberNames.First()}" }));
                }
            }
            else
            {
                finalResults = finalResults.Concat(nestedResults).ToList();
            }

            return finalResults;
        }

        private static void ExecuteRecursiveValidation(object obj, string prefix, List<ValidationResult> finalResults)
        {
            foreach (var prop in obj.GetType().GetProperties())
            {
                if (prop.PropertyType == typeof(string) || prop.PropertyType.IsValueType)
                    continue;

                var value = prop.GetValue(obj);
                if (value == null)
                    continue;

                IEnumerable isEnumerable = value as IEnumerable;
                if (isEnumerable == null)
                {
                    finalResults.Concat(Validate(value, finalResults, GenerateEntityNameString(prefix, prop.Name)));
                }
                else
                {
                    int i = 0;
                    foreach (var nestedModel in isEnumerable)
                    {
                        finalResults.Concat(Validate(nestedModel, finalResults, GenerateEntityNameString(prefix, $"{prop.Name}[{i}]")));
                        i++;
                    }
                }
            }
        }

        private static string GenerateEntityNameString(string prefix, string suffix)
        {
            return string.Join(".", new[] { prefix, suffix }
                .Where(s => !string.IsNullOrEmpty(s)));
        }
    }
}
