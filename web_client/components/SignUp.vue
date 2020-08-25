<template>
  <form class="usa-form usa-form--large tw-w-full" @submit="advance">
    <!-- First Page -->
    <fieldset class="usa-fieldset" v-if="page == 0">
      <legend class="usa-legend">Sign In Info</legend>

      <div class="bg-secondary-lighter tw-p-2 tw-mt-2" v-if="!!error">
        <p class="text-red">{{ error }}</p>
      </div>

      <label class="usa-label" for="email">E-mail Address <span class="tw-ml-1 text-red">*</span></label>
      <input class="usa-input" v-model="email" id="email" name="email" type="email" autocapitalize="off"
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

    <!-- Second Page -->
    <fieldset class="usa-fieldset" v-if="page == 1">
      <legend class="usa-legend">Contact Information</legend>

      <div class="bg-secondary-lighter tw-p-2 tw-mt-2" v-if="!!error">
        <p class="text-red">{{ error }}</p>
      </div>

      <label class="usa-label" for="first_name">First name <span class="tw-ml-1 text-red">*</span></label>
      <input class="usa-input" v-model="first_name" id="first_name" name="first_name" type="text" autocapitalize="off"
             autocorrect="off">

      <label class="usa-label" for="middle_name">Middle name</label>
      <input class="usa-input" v-model="middle_name" id="middle_name" name="middle_name" type="text"
             autocapitalize="off" autocorrect="off">

      <label class="usa-label" for="last_name">Last name <span class="tw-ml-1 text-red">*</span></label>
      <input class="usa-input" v-model="last_name" id="last_name" name="last_name" type="text" autocapitalize="off"
             autocorrect="off">

      <div class="tw-flex tw-flex-col tw-items-end tw-mt-6">
        <p class="tw-text-ink tw-font-bold"><span class="text-red">*</span> Required</p>
        <div class="tw-mt-6">
          <input class="usa-button" type="submit" value="Enter Address">
        </div>
      </div>
    </fieldset>

    <!-- Third Page -->
    <fieldset class="use-fieldset" v-if="page == 2">
      <legend class="usa-legend">Zip Code</legend>

      <div class="bg-secondary-lighter tw-p-2 tw-mt-2" v-if="!!error">
        <p class="text-red">{{ error }}</p>
      </div>

      <p class="tw-text-2xl tw-my-2">Why are we asking for this?</p>
      <p class="tw-my-4">
        Entering your zipcode allows us to show you more detailed information - such as potential congressional reps at
        your location - without needing to fill out a huge form.
      </p>
      <p>
        Later you can enter more detailed information in our voter registration portal, which unlocks information
        tailored to you. Your exact house representatives (based on address), sending direct messages to those reps,
        and future feature (i.e. passport renewal).
      </p>

      <label class="usa-label" for="zipcode">ZIP</label>
      <input class="width-15 usa-input" v-model="zipcode" id="zipcode" name="zipcode" type="text" pattern="[0-9]{5}"
             autocapitalize="off" autocorrect="off" maxlength="5">

      <div class="tw-flex tw-flex-col tw-items-end tw-mt-6">
        <div class="tw-mt-6">
          <input class="usa-button" type="submit" value="Finished">
        </div>
      </div>
    </fieldset>
  </form>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
      // user info
      email: null,
      password: null,
      first_name: null,
      middle_name: null,
      last_name: null,
      zipcode: null,
      // component state
      page: 0,
      error: null
    }
  },
  methods: {
    advance(e) {
      e.preventDefault();
      switch (this.page) {
      case 0:
        if (this.validEmail() && this.validPassword()) {
          this.error = null;
          this.page++;
          break;
        }
        this.error = "Please enter a valid email and password.";
        break;
      case 1:
        if (!!this.first_name && !!this.last_name) {
          this.error = null;
          this.page++;
          break;
        }
        this.error = "First and last name are required.";
        break;
      case 2:
        if (!!this.zipcode && this.zipcode.length == 5) {
          var email = this.email,
              password = this.password,
              first_name = this.first_name,
              middle_name = this.middle_name,
              last_name = this.last_name,
              zipcode = this.zipcode;
          this.$emit('success', { email, password, first_name, middle_name, last_name, zipcode });
        }
        break;
      default:
        break;
      }
    },
    validEmail() {
      return !!this.email && /^\S+@\S+\.\S+$/.test(this.email);
    },
    validPassword() {
      return !!this.password && /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&#])([a-zA-Z0-9@$!%*?&#]{8,63})$/.test(this.password);
    }
  }
}
</script>

<style>

</style>
