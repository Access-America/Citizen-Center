<template>
  <div class="tw-min-h-screen tw-flex tw-flex-col">
    <Header>Citizenship Portal - Sign Up</Header>
    <div class="tw-flex-1 " id="main-content">
      <div class="tw-grid tw-grid-cols-12">
        <div class="tw-col-span-2 md:tw-col-span-3"></div>
        <div class="tw-col-span-8 md:tw-col-span-6">
          <h1 class="tw-font-bold text-green tw-text-3xl tw-text-center">Congratulations!</h1>
          <p
            class="tw-max-w-min-content lg:tw-max-w-md tw-mx-auto tw-font-bold tw-text-ink tw-whitespace-no-wrap lg:tw-whitespace-normal tw-leading-relaxed">
            You're
            now able to access all your
            <wbr>
            appropriate citizenship documents
            <wbr>
            from this portal.
          </p>
          <h2 class="tw-mt-6 lg:tw-mt-12 tw-text-center tw-font-bold tw-text-ink">What would you like to do first?</h2>
        </div>
        <div class="tw-col-span-2 md:tw-col-span-3"></div>

        <div class="tw-col-span-2 md:tw-col-span-3"></div>
        <div class="tw-col-span-8 md:tw-col-span-6 tw-flex tw-flex-col tw-items-center tw-justify-center lg:tw-flex-row lg:tw-justify-between">
          <a href="/voting/" class="tw-block tw-flex tw-flex-col tw-items-center tw-mt-6 lg:tw-mt-12">
            <img src="~/assets/images/elections.svg" alt="Elections">
            <p class="tw-font-bold tw-text-ink tw-mt-2">Register to Vote</p>
          </a>
          <div class="tw-flex tw-flex-col tw-items-center tw-mt-6 lg:tw-mt-12">
            <img src="~/assets/images/ubi.svg" alt="UBI">
            <p class="tw-font-bold tw-text-ink tw-mt-2">Universal Basic Income</p>
          </div>
          <div class="tw-flex tw-flex-col tw-items-center tw-mt-6 lg:tw-mt-12">
            <img src="~/assets/images/passport.svg" alt="Passport">
            <p class="tw-font-bold tw-text-ink tw-mt-2">Apply For / Renew Passport</p>
          </div>
        </div>
        <div class="tw-col-span-2 md:tw-col-span-3"></div>

      </div>
    </div>
    <Footer class="mt-12"/>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default {
  name: "success",
  components: {Footer, Header}
}
</script>

<style scoped>

</style>
