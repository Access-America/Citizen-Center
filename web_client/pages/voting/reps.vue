<template>
  <div class="tw-min-h-screen tw-flex tw-flex-col">
    <Header>Citizen Portal - Voter Registration</Header>
    <div class="tw-max-w-4xl tw-self-center tw-p-6 tw-mt-4 tw-flex-1 md:tw-p-6 tw-w-full" id="main-content">
      <h2 class="tw-text-ink tw-text-xl tw-max-w-xs lg:tw-max-w-md md:tw-mx-auto">Based on your party selection, and location, here are your current
        representatives</h2>
      <div class="tw-flex tw-flex-col tw-items-center md:tw-items-stretch md:tw-flex-row md:tw-justify-between tw-space-y-8 md:tw-space-y-0 tw-mt-6 lg:tw-mt-8">
        <Candidate name="Adam Schiff" :house="true" contactURL="https://schiff.house.gov/" votingRecord="https://www.govtrack.us/congress/members/adam_schiff/400361">Adam Bennett Schiff is an American lawyer and politician who has served as the U.S. Representative for California's 28th congressional district since 2013.</Candidate>
        <Candidate :senate="true">Kamala Devi Harris is an American lawyer and politician serving as the junior United States Senator
          from California since 2017.
        </Candidate>
      </div>
    </div>
    <Footer/>
  </div>

</template>

<script>
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Candidate from "../../components/Candidate";

export default {
  name: "reps",
  components: {Candidate, Footer, Header}
}
</script>

<style scoped>

</style>
