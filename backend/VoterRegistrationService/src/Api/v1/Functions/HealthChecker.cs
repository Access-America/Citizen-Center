using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using System.Threading.Tasks;

namespace AA.VoterRegistration.Api.v1.Functions
{
    public class HealthChecker
    {
        [FunctionName("HealthChecker")]
        public async Task<IActionResult> GetAsync(
            [HttpTrigger(AuthorizationLevel.Function, "get", Route = "v1/healthcheck")]
            HttpRequest request)
        {
            return new OkObjectResult(await Task.FromResult(true));
        }
    }
}
