<template>
  <div class="tw-min-h-screen tw-flex tw-flex-col">
    <Header>Citizenship Portal - Sign Up</Header>
    <div class="grid-container tw-mt-4 tw-flex-1 tw-w-full tw-flex tw-justify-center" id="main-content">
      <form class="usa-form usa-form--large tw-w-full" @submit="checkForm">
        <fieldset class="usa-fieldset">
          <legend class="usa-legend">Sign In Info</legend>

          <label class="usa-label" for="email">E-mail Address <span class="tw-ml-1 text-red">*</span></label>
          <input class="usa-input" v-model="email" id="email" name="email" type="text" autocapitalize="off"
                 autocorrect="off">

          <label class="usa-label" for="username">Username <span class="tw-ml-1 text-red">*</span></label>
          <input class="usa-input" v-model="username" id="username" name="username" type="text" autocapitalize="off"
                 autocorrect="off">

          <label class="usa-label" for="password-sign-up">Password <span class="tw-ml-1 text-red">*</span></label>
          <input class="usa-input" v-model="password" id="password-sign-up" name="password" type="password">
          <p class="usa-form__note">
            <a title="Show password" href="javascript:void(0);"
               class="usa-show-password"
               aria-controls="password-sign-up">Show password</a>
          </p>

          <div class="tw-mt-10">
            <p class="tw-text-ink tw-font-bold">Must be at least 8 characters long and include one of the
              following...</p>
            <ul class="tw-mt-2">
              <li>- One uppercase and one lowercase letter</li>
              <li>- One number</li>
              <li>- One unique character such as !@#$%</li>
            </ul>
          </div>

          <div class="tw-flex tw-flex-col tw-items-end tw-mt-6">
            <p class="tw-text-ink tw-font-bold"><span class="text-red">*</span> Required</p>
            <div class="tw-mt-6">
              <input class="usa-button" type="submit" value="Enter Contact Info">
            </div>
          </div>
        </fieldset>
      </form>

    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default {
  name: "signup",
  components: {Footer, Header},
  data() {
    return {
      errors: [],
      username: null,
      password: null,
      email: null,
    }
  },
  methods: {
    checkForm: function (e) {
      this.errors = [];

      if (!!this.username && !!this.password && !!this.email) {
        this.$router.push({path: '/signup/contact'})
      } else {
        console.log(this.errors)
        this.errors.push('Please check all fields')
      }

      e.preventDefault();
    }
  }
}
</script>

<style scoped>

</style>
