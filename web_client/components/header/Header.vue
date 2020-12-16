<template>
    <div class="bg-white">
        <Overlay :show="mobileNavOpen" />

        <NuxtLink
            to="/"
            class="navbar flex justify-between max-w-desktop pl-2 sm:pr-2 m-auto sm:pt-4 sm:pb-3"
        >
            <div class="flex items-center">
                <img
                    class="logo mr-105 sm:mr-2 sm:w-5 sm:h-5 w-3 h-3"
                    src="@/assets/images/logo.svg"
                />
                <div class="font-bold text-ui-sm sm:text-ui-lg md:text-ui-xl">
                    Citizen Center
                </div>
            </div>

            <account-buttons class="hidden sm:block" />

            <div
                class="px-105 h-6 uppercase text-ui-3xs text-white bg-primary flex items-center block cursor-pointer sm:hidden"
                @click="openMobileNavMenu"
            >
                Menu
            </div>
        </NuxtLink>

        <nav-menu :menu="menu" />

        <mobile-nav-menu
            :show="mobileNavOpen"
            :menu="menu"
            :close-menu="closeMobileNavMenu"
        />
    </div>
</template>

<script>
import MobileNavMenu from '@/components/header/MobileNavMenu'
import NavMenu from '@/components/header/NavMenu'
import AccountButtons from '@/components/header/AccountButtons'
import Overlay from '@/components/header/Overlay'
import { menuProps } from '@/components/header/common-proptypes'

export default {
    name: 'Header',
    components: { MobileNavMenu, NavMenu, AccountButtons, Overlay },
    props: {
        menu: menuProps,
    },
    data() {
        return {
            mobileNavOpen: false,
        }
    },
    methods: {
        closeMobileNavMenu() {
            this.mobileNavOpen = false
        },
        openMobileNavMenu() {
            this.mobileNavOpen = true
        },
    },
}
</script>
