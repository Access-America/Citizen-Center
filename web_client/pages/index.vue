<template>
    <div>
        <Header />
        <div class="px-3">
            <div class="m-auto mb-6 md:mb-10 max-w-tablet text-base-darker">
                <h3
                    class="mt-5 text-2xl text-center font-heading text-heading-lg"
                >
                    Welcome to the
                </h3>
                <h1
                    class="mt-1 text-4xl font-bold text-center text-primary-default font-heading text-heading-2xl"
                >
                    Citizen Center
                </h1>
                <p class="mx-auto mt-3 leading-tight font-body text-body-md">
                    A 21st century nation deserves a 21st century government.
                    America is dreadfully behind the times when it comes to
                    leveraging the latest technology in publicly-funded spaces.
                </p>
                <p class="mx-auto mt-3 leading-tight font-body text-body-md">
                    While Silicon Valley enjoys breakthrough after breakthrough,
                    our federal and state governments fail to keep pace with the
                    tools that would drastically improve civic processes for
                    millions of Americans.
                </p>
                <p class="mx-auto mt-3 leading-tight font-body text-body-md">
                    Innovation is a home-grown American ideal, and the Citizen
                    Center will transform our government, helping to pull the
                    United States out of the 20th century.
                </p>
                <p class="mx-auto mt-3 leading-tight font-body text-body-md">
                    This website is to demonstrate the enormous potential of a
                    unified government portal. Prototypes of features will
                    become available as they are developed, but the broad scope
                    of the site is currently available for browsing.
                </p>
            </div>
            <div class="flex flex-col mb-10 md:items-center sm:mb-15">
                <section-links
                    v-for="({ label, img, imgAlt, submenu }, idx) in submenus"
                    :key="idx"
                    :img-src="img"
                    :img-alt="imgAlt"
                    :header="label"
                    :links="submenu"
                />
            </div>
        </div>
    </div>
</template>

<script>
import SectionLinks from '@/components/index/SectionLinks'
import { MENU } from '@/content/menu'

export default {
    name: 'Home',
    components: { SectionLinks },
    data() {
        return {
            menu: MENU,
        }
    },
    computed: {
        submenus() {
            return this.menu.filter(({ type }) => type === 'submenu')
        },
    },
}
</script>