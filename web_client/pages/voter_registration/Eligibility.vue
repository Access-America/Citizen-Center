<template>
  <div>
    <Header>Citizenship Portal - Voter Registration</Header>
    <div class="px-3 mx-auto">
      <form @submit.prevent="registerToVote()" class="mt-5 text-2xl text-center text-base-darkest">
        <fieldset>
          <legend class="mt-1 text-4xl font-bold text-center text-primary">Register To Vote</legend><br />
          <label class="mt-3">
            Are you a US Citizen?
            <span>*</span><br />
          </label>
          <input id="citizen_yes" v-model="voter.citizen" class="spacer" type="radio" value="yes" />
          <label for="citizen_yes">Yes</label>
          <input id="citizen_no" v-model="voter.citizen" class="spacer" type="radio" value="no" />
          <label for="citizen_no">No</label>
          <br />
          <label class="mt-3">
            Have you previously registered to vote?
            <span>*</span><br />
          </label>
          <input
            id="prevRegistered_yes"
            v-model="voter.prevRegistered"
            class="spacer"
            type="radio"
            value="yes"
          />
          <label for="prevRegistered_yes">Yes</label>
          <input
            id="prevRegistered_no"
            v-model="voter.prevRegistered"
            class="spacer"
            type="radio"
            value="no"
          />
          <label for="prevRegistered_no">No</label>
          <br />
          <label class="mt-3">
            Are you changing your registration name?
            <span>*</span><br />
          </label>
          <input
            id="changingRegName_yes"
            v-model="voter.changingRegName"
            class="spacer"
            type="radio"
            value="yes"
          />
          <label for="changingRegAddress_yes">Yes</label>
          <input
            id="changingRegAddress_no"
            v-model="voter.changingRegName"
            class="spacer"
            type="radio"
            value="no"
          />
          <label for="changingRegAddress_no">No</label>
          <br />
          <label class="mt-3">
            Are you changing your registration address?
            <span>*</span><br />
          </label>
          <input
            id="changingRegAddress_yes"
            v-model="voter.changingRegAddress"
            class="spacer"
            type="radio"
            value="yes"
          />
          <label for="changingRegAddress_yes">Yes</label>
          <input
            id="changingRegAddress_no"
            v-model="voter.changingRegAddress"
            class="spacer"
            type="radio"
            value="no"
          />
          <label for="changingRegAddress_no">No</label>
          <br /><br />
          <div>
            <span style="margin-left: 20px; color: red;">{{ errorMsg }}</span><br />
            <input type="submit" value="I'm ready" style="padding: 1.5rem; background-color: rgba(0, 94, 162); color: rgba(255, 255, 255);" />
          </div>
        </fieldset>
      </form>
    </div>
    <!--<Footer /> -->
  </div>
</template>

<script>
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default {
    components: {
        Header,
        Footer
    },
    data() {
        return {
            voter: {
                citizen: null,
                prevRegistered: null,
                changingRegName: null,
                changingRegAddress: null
            },
            errorMsg: '',
            errorDisplay: false
        }
    },
    methods: {
        registerToVote() {
            let citizenAnswer = this.voter.citizen;
            let isPersonAlreadyRegistered = this.voter.prevRegistered;
            let isPersonChangingName = this.voter.changingRegName;
            let isPersonChangingAddress = this.voter.changingRegAddress;

            if ( !citizenAnswer || !isPersonAlreadyRegistered || !isPersonChangingName || !isPersonChangingAddress) { this.errorMsg = 'please fill out all fields'; this.errorDisplay = true; }

            if (citizenAnswer === 'no') { this.$router.push({ path: 'Eligibility-Denied' }) }

            if (citizenAnswer === 'yes') {
                if (isPersonAlreadyRegistered === 'yes') {
                    if (isPersonChangingName === 'yes' && isPersonChangingAddress === 'yes') {
                        this.$router.push({ path: 'ChangeRegistrationName' });
                    } else if (isPersonChangingName === 'yes' && isPersonChangingAddress === 'no') {
                        this.$router.push({ path: 'ChangeRegistrationName' });
                    } else if (isPersonChangingName === 'no' && isPersonChangingAddress === 'yes') {
                        this.$router.push({ path: 'ChangeRegistrationAddress' });
                    } else if (isPersonChangingName === 'no' && isPersonChangingAddress === 'no') {
                        this.$router.push({ path: 'ConfirmationOfSuccessfulRegistration' });
                    }
                } else {
                    this.$router.push({ path: 'Address' });
                }
            }
        }
    }
}
</script>

<style scoped>
.spacer {
  margin-left: 40px;
}
</style>
