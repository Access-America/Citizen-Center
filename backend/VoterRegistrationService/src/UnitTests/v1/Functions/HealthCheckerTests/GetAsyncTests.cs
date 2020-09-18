using AA.VoterRegistration.Api;
using AA.VoterRegistration.Api.v1.Functions;
using FluentAssertions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System.Threading.Tasks;

namespace AA.VoterRegistration.UnitTests.v1.Functions.HealthCheckerTests
{
    [TestClass]
    public class GetAsyncMethod
    {
        [TestMethod]
        public async Task ShouldReturn_OkObjectResult()
        {
            // arrange
            var result = await new HealthChecker()
                .GetAsync(new Mock<HttpRequest>().Object);

            // assert
            ((OkObjectResult)result).Value.Should().BeEquivalentTo(
                new JsonApiResponse<bool>(true));
        }
    }
}
