<template>
    <div class="bg-white">
        <Overlay :show="mobileNavOpen" />

        <div
            class="flex justify-between pl-2 m-auto sm:pt-4 sm:pr-2 sm:pb-3 navbar max-w-desktop"
        >
            <NuxtLink to="/" class="flex items-center">
                <img
                    class="w-3 h-3 sm:mr-2 sm:w-5 sm:h-5 logo mr-105"
                    src="@/assets/images/logo.svg"
                />
                <span class="font-bold text-ui-sm sm:text-ui-lg md:text-ui-xl">
                    Citizen Center
                </span>
            </NuxtLink>

            <account-buttons class="hidden sm:block" />

            <div
                class="flex items-center block h-6 text-white uppercase cursor-pointer sm:hidden px-105 text-ui-3xs bg-primary"
                @click="openMobileNavMenu"
            >
                Menu
            </div>
        </div>

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
