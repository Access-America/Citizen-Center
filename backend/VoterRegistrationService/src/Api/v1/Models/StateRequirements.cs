using AA.VoterRegistration.Api.v1.Validations.Custom;
using System;

namespace AA.VoterRegistration.Api.v1.Models
{
    [Serializable]
    public class StateRequirements
    {
        private string _state { get; set; }

        public void SetState(string state)
        {
            _state = state;
        }

        public string GetState()
        {
            return _state;
        }

        #region Alabama

        [RequiredForState("Alabama")]
        public bool? ConvictedOfFelonyInvolingMoralTurpitude { get; set; }

        [RequiredForState("Alabama")]
        public bool? DeclaredMentallyIncompetent { get; set; }

        [RequiredForState("Alabama")]
        public bool? SwearToAffirmToSupportAndDefendTheConstituiton { get; set; }

        #endregion Alabama

        #region Alaska

        [RequiredForState("Alaska")]
        public bool? ConvictedOfFelony { get; set; }
        
        #endregion Alaska
    }
}
