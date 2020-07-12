<template>
  <div class="tw-min-h-screen tw-flex tw-flex-col">
    <Header>Citizenship Portal - Sign In</Header>

    <div class="grid-container tw-mt-4 tw-flex-1 tw-w-full tw-flex tw-justify-center" id="main-content">
      <form class="usa-form usa-form--large tw-w-full" @submit="checkForm">
        <fieldset class="usa-fieldset">
          <legend class="usa-legend">Sign in</legend>
          <span>or <a href="/signup/">create an account</a></span>

          <label class="usa-label" for="username">Username or email address</label>
          <input class="usa-input" v-model="username" id="username" name="username" type="text" autocapitalize="off" autocorrect="off">

          <label class="usa-label" for="password-sign-in">Password</label>
          <input class="usa-input" v-model="password" id="password-sign-in" name="password" type="password">
          <p class="usa-form__note">
            <a title="Show password" href="javascript:void(0);"
               class="usa-show-password"
               aria-controls="password-sign-in">Show password</a>
          </p>

          <input class="usa-button" type="submit" value="Sign in">
          <p><a href="javascript:void(0);" title="Forgot username">
            Forgot username?</a></p>
          <p><a href="javascript:void(0);" title="Forgot password">
            Forgot password?</a></p>
        </fieldset>
      </form>
    </div>

    <Footer class="mt-12"/>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "signin",
  components: {Footer, Header},
  data() {
    return {
      errors: [],
      username: null,
      password: null
    }
  },
  methods: {
    checkForm(e) {
      this.errors = [];

      if (!!this.username && !!this.password) {
        this.$router.push({path: '/signup/success'})
      } else {
        this.errors.push('Please check all fields')
        console.log(this.errors)
      }

      e.preventDefault();
    }
  }
}
</script>

<style scoped>

</style>
