<template>
    <nav
        v-if="show"
        class="fixed top-0 bottom-0 right-0 p-2 overflow-y-auto bg-white select-none mobile-nav z-400 w-card-lg"
    >
        <div class="flex justify-end close-nav-button">
            <div
                class="flex items-center justify-center w-6 h-6 -mt-2 -mr-2 cursor-pointer"
                @click="closeMenu"
            >
                <img class="w-2 h-2" src="@/assets/images/icons/close.svg" />
            </div>
        </div>
        <ul>
            <li
                v-for="({ type, label, submenu, href }, idx) in menu"
                :key="idx"
                class="border-t-1px border-base-lighter text-ui-sm text-base-dark"
            >
                <accordion
                    :label="label"
                    :items="submenu"
                    :on-click-label="() => handleClickAccordionLabel(idx)"
                    :on-click-item="handleClickAccordionItem"
                    :expanded="activeSubmenu === idx"
                />
                <NuxtLink v-if="type === 'link'" :to="href">{{
                    label
                }}</NuxtLink>
            </li>
        </ul>

        <account-buttons class="mt-1 mb-2" />
    </nav>
</template>

<script>
import Accordion from '@/components/header/Accordion'
import AccountButtons from '@/components/header/AccountButtons'
import { menuProps } from '@/components/header/common-proptypes'

export default {
    name: 'MobileNavMenu',
    components: { Accordion, AccountButtons },
    props: {
        closeMenu: {
            type: Function,
            default() {},
        },
        show: {
            type: Boolean,
            default: false,
        },
        menu: menuProps,
    },
    data() {
        return {
            activeSubmenu: undefined,
        }
    },
    methods: {
        handleClickAccordionItem() {
            this.closeMenu()
        },
        handleClickAccordionLabel(idx) {
            if (this.activeSubmenu === idx) {
                // close the active submenu
                this.activeSubmenu = undefined
            } else {
                this.activeSubmenu = idx
            }
        },
    },
}
</script>

<style scoped>
.mobile-nav {
    animation: slidein-left 0.2s ease-in-out;
}

@keyframes slidein-left {
    0% {
        transform: translateX(15rem);
    }

    100% {
        transform: translateX(0);
    }
}
</style>
