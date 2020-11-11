<template>
    <div>
        <a class="usa-skipnav" href="#main-content">Skip to main content</a>

        <!--This just exists to prevent our build script from removing relevant CSS-->
        <div class="tw-hidden">
            <div class="usa-nav is-visible usa-overlay is-visible"></div>
        </div>

        <!--Not an official government website yet, leave this commented out -->
        <!--
    <section class="usa-banner" aria-label="Official government website">
      <div class="usa-accordion">
        <header class="usa-banner__header">
          <div class="usa-banner__inner">
            <div class="grid-col-auto">
              <img class="usa-banner__header-flag" src="/assets/images/us_flag_small.png" alt="U.S. flag">
            </div>
            <div class="grid-col-fill tablet:grid-col-auto">
              <p class="usa-banner__header-text">An official website of the United States government</p>
              <p class="usa-banner__header-action" aria-hidden="true">Here’s how you know</p>
            </div>
            <button class="usa-accordion__button usa-banner__button"
                    aria-expanded="false" aria-controls="gov-banner">
              <span class="usa-banner__button-text">Here’s how you know</span>
            </button>
          </div>
        </header>
        <div class="usa-banner__content usa-accordion__content" id="gov-banner">
          <div class="grid-row grid-gap-lg">
            <div class="usa-banner__guidance tablet:grid-col-6">
              <img class="usa-banner__icon usa-media-block__img" src="/assets/images/icon-dot-gov.svg" alt="Dot gov">
              <div class="usa-media-block__body">
                <p>
                  <strong>The .gov means it’s official.</strong>
                  <br>
                  Federal government websites often end in .gov or .mil. Before sharing sensitive information, make sure
                  you’re on a federal government site.
                </p>
              </div>
            </div>
            <div class="usa-banner__guidance tablet:grid-col-6">
              <img class="usa-banner__icon usa-media-block__img" src="/assets/images/icon-https.svg" alt="Https">
              <div class="usa-media-block__body">
                <p>
                  <strong>The site is secure.</strong>
                  <br>
                  The <strong>https://</strong> ensures that you are connecting to the official website and that any
                  information you provide is encrypted and transmitted securely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    -->
        <div class="usa-overlay"></div>
        <header class="usa-header usa-header--basic">
            <div class="usa-nav-container">
                <div class="usa-navbar">
                    <div id="basic-logo" class="usa-logo">
                        <em class="usa-logo__text"
                            ><a href="/" title="Home" aria-label="Home">
                                <slot></slot> </a
                        ></em>
                    </div>
                    <button class="usa-menu-btn">Menu</button>
                </div>
                <nav aria-label="Primary navigation" class="usa-nav">
                    <button class="usa-nav__close">
                        <img src="~/assets/images/close.svg" alt="close" />
                    </button>
                    <ul class="usa-nav__primary usa-accordion">
                        <li class="usa-nav__primary-item">
                            <button
                                class="usa-accordion__button usa-nav__link"
                                aria-expanded="false"
                                aria-controls="basic-nav-section-one"
                            >
                                <span>Voting</span>
                            </button>
                            <ul
                                id="basic-nav-section-one"
                                class="usa-nav__submenu"
                                hidden
                            >
                                <li class="usa-nav__submenu-item">
                                    <a href="#" class="">
                                        Your National Representatives</a
                                    >
                                </li>
                                <li class="usa-nav__submenu-item">
                                    <a href="#" class=""> US Senators</a>
                                </li>
                                <li class="usa-nav__submenu-item">
                                    <a href="#" class="">
                                        Members Of US Congress</a
                                    >
                                </li>
                                <li class="usa-nav__submenu-item">
                                    <a href="#" class="">
                                        State Representatives</a
                                    >
                                </li>
                                <li class="usa-nav__submenu-item">
                                    <a href="#" class="">
                                        Local Representatives</a
                                    >
                                </li>
                            </ul>
                        </li>
                        <li class="usa-nav__primary-item">
                            <button
                                class="usa-accordion__button usa-nav__link"
                                aria-expanded="false"
                                aria-controls="basic-nav-section-two"
                            >
                                <span>UBI</span>
                            </button>
                            <ul
                                id="basic-nav-section-two"
                                class="usa-nav__submenu"
                                hidden
                            >
                                <li class="usa-nav__submenu-item">
                                    <a href="#" class="">
                                        File for Universal Basic Income</a
                                    >
                                </li>
                                <li class="usa-nav__submenu-item">
                                    <a href="#" class="">
                                        Connect A Bank Account</a
                                    >
                                </li>
                            </ul>
                        </li>
                        <li class="usa-nav__primary-item">
                            <button
                                id="signIn"
                                type="button"
                                class="usa-nav__link"
                                @click="signIn()"
                            >
                                Register/Login
                            </button>
                        </li>
                        <li class="usa-nav__primary-item">
                            <button
                                id="signOut"
                                type="button"
                                class="usa-nav__link"
                                @click="signOut()"
                            >
                                Sign Out
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
</template>

<script
    src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
    integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
    crossorigin="anonymous"
></script>
<script
    src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
    crossorigin="anonymous"
></script>

<script>
import * as authPopup from '../auth_config/authPopup'
import authConfig from '../auth_config/authConfig'
import policies from '../auth_config/policies'

export default {
    name: 'Header',
    data: () => ({}),
    methods: {
        signIn() {
            return authPopup.signIn()
        },
        signOut() {
            return authPopup.signOut()
        },
    },
}
</script>

<style></style>
