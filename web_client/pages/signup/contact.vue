<template>
  <div class="tw-min-h-screen tw-flex tw-flex-col">
    <Header>Citizenship Portal - Sign Up</Header>
    <div class="grid-container tw-mt-4 tw-flex-1 tw-w-full tw-flex tw-justify-center" id="main-content">
      <form class="usa-form usa-form--large tw-w-full" @submit="checkForm">
        <fieldset class="usa-fieldset">
          <legend class="usa-legend">Contact Information</legend>

          <label class="usa-label" for="first-name">First Name <span class="tw-ml-1 text-red">*</span></label>
          <input class="usa-input" v-model="firstName" id="first-name" name="first-name" type="text" autocapitalize="on"
                 autocorrect="off">

          <label class="usa-label" for="middle-name">Middle name <span class="usa-hint">(optional)</span></label>
          <input class="usa-input" v-model="middleName" id="middle-name" name="middle-name" type="text"
                 autocapitalize="on"
                 autocorrect="off">

          <label class="usa-label" for="last-name">Last Name <span class="tw-ml-1 text-red">*</span></label>
          <input class="usa-input" v-model="lastName" id="last-name" name="last-name" type="text" autocapitalize="on"
                 autocorrect="off">


          <label class="usa-label" for="phone">Primary Contact Number <span class="tw-ml-1 text-red">*</span></label>
          <input class="usa-input" v-model="phone" id="phone" name="phone" type="tel" autocapitalize="off"
                 autocorrect="off">

          <div class="tw-flex tw-flex-col tw-items-end tw-mt-6">
            <p class="tw-text-ink tw-font-bold"><span class="text-red">*</span> Required</p>
            <div class="tw-mt-6">
              <input class="usa-button" type="submit" value="Enter Address">
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
  name: "contact",
  components: {Footer, Header},
  data() {
    return {
      errors: [],
      firstName: null,
      middleName: null,
      lastName: null,
      phone: null,
    }
  },
  methods: {
    checkForm: function (e) {
      this.errors = [];

      if (!!this.firstName && !!this.lastName && !!this.phone) {
        this.$router.push({path: '/signup/address'})
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
