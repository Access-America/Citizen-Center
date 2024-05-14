<template>
    <nav class="nav border-t-1px border-base-lighter sm:border-b-1px">
        <div class="hidden px-2 m-auto sm:block nav-inner max-w-desktop">
            <ul class="flex">
                <li
                    v-for="({ type, label, submenu, href }, idx) in menu"
                    :key="idx"
                    class="cursor-pointer nav-item"
                >
                    <div
                        :class="{
                            'bg-primary-darker': activeSubmenu === idx,
                            'text-white': activeSubmenu === idx,
                            open: activeSubmenu === idx,
                        }"
                        class="relative flex items-center p-2 font-bold select-none nav-item-button text-ui-2xs text-base-dark"
                        @click="() => handleSubmenuButtonClick(idx)"
                    >
                        <span>
                            {{ label }}
                        </span>
                    </div>

                    <mega-menu
                        :show="activeSubmenu === idx"
                        :button-label="label"
                        :items="submenu"
                        :on-click-item="closeSubmenu"
                    />

                    <a
                        v-if="type === 'link'"
                        class="block p-2 font-bold nav-item-link text-ui-2xs text-base-dark"
                        :href="href"
                        >{{ label }}</a
                    >
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { menuProps } from '@/components/header/common-proptypes'
import MegaMenu from '@/components/header/MegaMenu'

export default {
    name: 'NavMenu',
    components: { MegaMenu },
    props: {
        menu: menuProps,
    },
    data() {
        return {
            activeSubmenu: undefined, // the active submenu as an index of menuProps
        }
    },
    methods: {
        closeSubmenu() {
            this.activeSubmenu = undefined
        },
        handleSubmenuButtonClick(idx) {
            if (this.activeSubmenu === idx) {
                // close the active submenu
                this.closeSubmenu()
            } else {
                this.activeSubmenu = idx
            }
        },
    },
}
</script>

<style scoped>
/* this is all for the caret */
.nav-item-button.open span:after {
    transform: rotate(-45deg);
    border-color: white;
    top: 0.6rem;
}

.nav-item-button span {
    display: block;
    padding-right: 0.75rem;
    position: relative;
}

.nav-item-button span:after {
    position: absolute;
    top: 0.45rem;
    right: 0;
    display: block;
    content: '';
    width: 0.3rem;
    height: 0.3rem;
    border-top: 1px solid #565c65;
    border-right: 1px solid #565c65;
    transform: rotate(135deg);
}

.nav-item-button:hover {
    color: #005ea2;
}

.nav-item-button:hover span:after {
    border-color: #005ea2;
}

.nav-item-button.open:hover span:after {
    border-color: white;
}

.nav-item-button.open:hover {
    color: white;
}

.nav-item-button:hover:after {
    background-color: #005ea2;
    border-radius: 0;
    content: '';
    display: block;
    position: absolute;
    height: 0.25rem;
    left: 1rem;
    right: 1rem;
    bottom: 0;
}

.nav-item-button.open:hover:after {
    display: none;
}
</style>
