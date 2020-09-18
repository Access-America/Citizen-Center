using System.Collections.Generic;

namespace AA.VoterRegistration.Api
{
    // TODO: Move this to a Core library to be reused in the future
    public class JsonApiResponse<T>
    {
        public JsonApiResponse(T value)
        {
            Data = value;
            Errors = null;
        }

        public JsonApiResponse(Dictionary<string, string[]> errors)
        {
            Data = default;
            Errors = errors;
        }

        public T Data { get; set; }

        public Dictionary<string, string[]> Errors { get; set; }
    }
}
