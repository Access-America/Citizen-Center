using AA.VoterRegistration.Api;
using AA.VoterRegistration.Api.v1.Functions;
using AA.VoterRegistration.Api.v1.Models;
using FluentAssertions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace AA.VoterRegistration.UnitTests.v1.Functions.ValidateVoterTests
{
    [TestClass]
    public class PostAsyncMethod
    {
        [TestMethod]
        public async Task ShouldReturn_UnprocessableEntityObjectResult_WhenVoterBadlyFormatted()
        {
            // act
            IActionResult result = await InvokePostAsyncRequest(new Voter());

            // assert
            var unprocessableResult = (result as UnprocessableEntityObjectResult);
            unprocessableResult.StatusCode.Should().Be(422);
            unprocessableResult.Value.Should().Be("Unable to parse Voter");
        }

        [DataTestMethod]
        [DynamicData(nameof(GetStateRequirements), DynamicDataSourceType.Method)]
        public async Task ShouldReturn_OkObjectResult_WhenVoterFormattedCorrectly(KeyValuePair<string, StateRequirements> stateRequirements)
        {
            // arrange
            Voter voter = TestingHelper.GenerateFullyHydratedVoterByState(stateRequirements);

            // act
            var result = await InvokePostAsyncRequest(voter);

            // assert
            ((OkObjectResult)result).Value.Should().BeEquivalentTo(
                new JsonApiResponse
                {
                    Data = true,
                    Errors = null
                });
        }

        private async Task<IActionResult> InvokePostAsyncRequest(Voter voter)
        {
            return 
                await new ValidateVoter().PostAsync(
                   HttpRequestSetup(voter),
                   new Mock<ILogger>().Object);
        }

        private HttpRequest HttpRequestSetup(object voter)
        {
            MemoryStream outputStream = new MemoryStream();

            using var stream = new MemoryStream();
            using var writer = new StreamWriter(stream);

            var body = JsonConvert.SerializeObject(voter);
            writer.Write(body);
            writer.Flush();

            stream.WriteTo(outputStream);
            outputStream.Seek(0, SeekOrigin.Begin);

            var reqMock = new Mock<HttpRequest>();
            reqMock.Setup(req => req.Body).Returns(outputStream);

            return reqMock.Object;
        }

        private static IEnumerable<object[]> GetStateRequirements()
        {
            yield return new object[] { TestingHelper.ForAlabama() };
            yield return new object[] { TestingHelper.ForAlaska() };
        }
    }
}
