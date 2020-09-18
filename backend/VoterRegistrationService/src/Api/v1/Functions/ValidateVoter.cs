using AA.VoterRegistration.Api.v1.Models;
using AA.VoterRegistration.Api.v1.Validation;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace AA.VoterRegistration.Api.v1.Functions
{
    public class ValidateVoter
    {
        [FunctionName("ValidateVoter")]
        public async Task<IActionResult> PostAsync(
            [HttpTrigger(AuthorizationLevel.Function, "post", Route = "v1/validate")]
            HttpRequest request,
            ILogger log)
        {
            log.LogInformation("HTTP trigger function -> Validating voter attributes");

            Voter voter;
            try
            {
                voter = await GenerateRequestVoter(request.Body);
                List<ValidationResult> results = ValidateVoterAttributes.Validate(voter, new List<ValidationResult>());
                if (results.Any())
                {
                    return new BadRequestObjectResult(
                        new JsonApiResponse<bool>(
                            ValidateVoterAttributes.GenerateErrors(results)));
                }

                return new OkObjectResult(new JsonApiResponse<bool>(true));
            }
            catch (Exception ex)
            {
                log.LogError(ex, "Unable to parse Voter");
                return new UnprocessableEntityObjectResult("Unable to parse Voter");
            }
        }

        private async Task<Voter> GenerateRequestVoter(Stream requestBody)
        {
            string body = await new StreamReader(requestBody).ReadToEndAsync();
            return JsonConvert.DeserializeObject<Voter>(body);
        }
    }
}
