using System.Collections.Generic;

namespace AA.VoterRegistration.Api.v1.Helpers
{
    public class Constants
    {
        public static HashSet<string> States = new HashSet<string>
        {
            "Alabama",
            "Alaska",
            "American Samoa",
            "Arizona",
            "Arkansas",
            "California",
            "Colorado",
            "Connecticut",
            "Delaware",
            "District of Columbia",
            "Florida",
            "Georgia",
            "Hawaii",
            "Idaho",
            "Illinois",
            "Indiana", 
            "Iowa",
            "Kansas",
            "Kentucky",
            "Louisiana",
            "Maine",
            "Maryland",
            "Massachusetts",
            "Michigan",
            "Minnesota",
            "Mississippi",
            "Missouri",
            "Montana",
            "Nebraska",
            "Nevada",
            "New Hampshire",
            "New Jersey",
            "New Mexico",
            "New York",
            "North Carolina",
            "North Dakota",
            "Ohio",
            "Oklahoma",
            "Oregon",
            "Pennsylvania",
            "Puerto Rico",
            "Rhode Island",
            "South Carolina",
            "South Dakota",
            "Tennessee",
            "Texas",
            "Utah",
            "Vermont",
            "Virginia",
            "Washington",
            "West Virginia",
            "Wisconsin",
            "Wyoming"
        };

        public static HashSet<string> Parties = new HashSet<string>
        {
            "American Independent",
            "Democratic",
            "Green",
            "Libertarian",
            "Peace and Freedom",
            "Republican"
        };

        public static HashSet<string> Ethnicities = new HashSet<string>
        {
            "American Indian",
            "Alaskan Native",
            "Asian",
            "Pacific Islander",
            "Black",
            "Hispanic",
            "Multi-racial",
            "White",
            "Other"
        };

        public static HashSet<string> Prefixes = new HashSet<string>
        {
            "Mr.",
            "Mrs.",
            "Miss",
            "Ms."
        };

        public static HashSet<string> Suffixes = new HashSet<string>
        {
            "Jr",
            "Sr",
            "II",
            "III",
            "IV"
        };
    }

    public enum Collections
    {
        States,
        Parties,
        Ethnicities,
        Prefixes,
        Suffixes
    }
}
