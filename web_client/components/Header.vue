<template>
    <div>
        <!-- Not an official website (yet)
        <div class="px-3 bg-base-lightest">
            <div
                class="flex items-center justify-center py-1 text-xs leading-tight"
            >
                <img
                    src="@hursey013/tailwindcss-uswds/dist/img/us_flag_small.png"
                    alt="Flag"
                />
                <span class="ml-1"
                    >An official website of the United States government</span
                >
            </div>
        </div>
        -->
        <div
            class="flex items-center justify-between mx-3 border-b-1px border-base-lightest"
        >
            <div class="flex items-center space-x-4">
                <img src="~/assets/images/logo.svg" alt="Logo" class="w-3" />
                <h1 class="text-sm font-bold text-gray-90">Citizen Center</h1>
            </div>
            <div>
                <nuxt-link to="/voter_registration/Eligibility">Voter Registration</nuxt-link>
            </div>
            <div class="p-2 text-sm text-white uppercase bg-primary">Menu</div>
        </div>
      </div>
    </section>
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
