using System.Collections.Generic;

namespace AA.VoterRegistration.Api.v1.Extensions
{
    public static class HashSetEx
    {
        public static string ToErrorMessage(this HashSet<string> collection)
        {            
            return $"Can only be '{string.Join("','", collection)}'.";
        }
    }
}
