<template>
  <div class="tw-min-h-screen tw-flex tw-flex-col">
    <Header>Citizenship Portal - Sign Up</Header>
    <div class="grid-container tw-mt-4 tw-flex-1 tw-w-full tw-flex tw-justify-center" id="main-content">
      <SignUp v-on:success="onSignUp"/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SignUp from "../../components/SignUp";

export default {
  name: "signup",
  components: {Footer, Header, SignUp},
  methods: {
    onSignUp: function (signupData) {
      console.log(signupData); // todo send this to some authentication service
      this.$router.push({path: '/signup/success'});
    }
  }
}
</script>

<style scoped>

</style>
