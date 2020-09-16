using System.Collections.Generic;

namespace AA.VoterRegistration.Api
{
    // TODO: Move this to a Core library to be reused in the future
    public class JsonApiResponse
    {
        public JsonApiResponse()
        {
            Data = true;
            Errors = null;
        }

        public JsonApiResponse(Dictionary<string, string[]> errors)
        {
            Data = false;
            Errors = errors;
        }

        public bool Data { get; set; }

        public Dictionary<string, string[]> Errors { get; set; }
    }
}
