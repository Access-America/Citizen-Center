<template>
  <footer class="usa-footer usa-footer--slim">
    <div class="grid-container usa-footer__return-to-top">
      <a href="javascript:void(0);" @click="scrollToTop">Return to top</a>
    </div>
    <div class="usa-footer__primary-section">
      <div class="usa-footer__primary-container grid-row">
        <div class="mobile-lg:grid-col-8">
          <nav class="usa-footer__nav" aria-label="Footer navigation">
            <ul class="grid-row grid-gap">
              <li class="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">
                <a class="usa-footer__primary-link" href="javascript:void(0);">Documentation</a>
              </li>
              <li class="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">
                <a class="usa-footer__primary-link" href="javascript:void(0);">Features</a>
              </li>
              <li class="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">
                <a class="usa-footer__primary-link" href="javascript:void(0);">About us</a>
              </li>
              <li class="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">
                <a class="usa-footer__primary-link" href="javascript:void(0);">Getting started</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="mobile-lg:grid-col-4">
          <address class="usa-footer__address">
            <div class="grid-row grid-gap">
              <div class="grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto">
                <div class="usa-footer__contact-info">
                  <a href="tel:1-800-555-5555">(800) CALL-GOVT</a>
                </div>
              </div>
              <div class="grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto">
                <div class="usa-footer__contact-info">
                  <a href="mailto:info@agency.gov">info@agency.gov</a>
                </div>
              </div>
            </div>
          </address>
        </div>
      </div>
    </div>
    <div class="usa-footer__secondary-section">
      <div class="grid-container">
        <div class="usa-footer__logo grid-row grid-gap-2">
          <div class="grid-col-auto">
            <img class="usa-footer__logo-img" src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Great_Seal_of_the_United_States_%28obverse%29.svg" alt="">
          </div>
          <div class="grid-col-auto">
            <h3 class="usa-footer__logo-heading">
              Department of Technology
            </h3>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({}),
  methods: {
    scrollToTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

}
</script>

<style scoped>

</style>
