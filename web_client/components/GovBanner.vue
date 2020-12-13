<template>
    <div>
        <header class="header p-1 sm:p-05 bg-base-lightest relative font-ui">
            <div class="flex pl-1">
                <img
                    class="mr-1 mt-05 self-start"
                    src="@/node_modules/@hursey013/tailwindcss-uswds/dist/img/us_flag_small.png"
                    alt="U.S. flag"
                />
                <div class="">
                    <div class="mr-1">
                        An official website of the United States government
                    </div>
                    <p
                        class="underline text-primary flex items-center sm:hidden"
                    >
                        Here's how you know
                        <img class="w-1 h-1 ml-05" :src="angleImagePath" />
                    </p>
                </div>
                <button
                    class="button flex items-center underline text-primary absolute inset-0 w-full focus:outline-none sm:static sm:w-auto"
                    @click.prevent="toggleOpen"
                >
                    <span class="hidden sm:flex items-center">
                        Here's how you know
                        <img class="w-1 h-1 ml-05" :src="angleImagePath" />
                    </span>
                    <div
                        v-if="open"
                        class="w-6 h-6 bg-base-lighter flex justify-center items-center absolute top-0 right-0 sm:hidden"
                    >
                        <img
                            src="@/node_modules/@hursey013/tailwindcss-uswds/dist/img/close-blue-60v-alt.svg"
                        />
                    </div>
                </button>
            </div>
        </header>
        <div
            v-if="open"
            class="flex text-body-xs bg-base-lightest pt-05 pr-2 pb-2 pl-1 flex-col md:flex-row md:space-x-6"
        >
            <div class="pt-2 flex">
                <div class="min-w-5 mr-1">
                    <img
                        src="@/node_modules/@hursey013/tailwindcss-uswds/dist/img/icon-dot-gov.svg"
                    />
                </div>
                <div>
                    <div class="font-bold">The .gov means its official</div>
                    <div>
                        Federal government websites often end in .gov or .mil.
                        Before sharing sensitive information, make sure you’re
                        on a federal government site.
                    </div>
                </div>
            </div>
            <div class="pt-2 flex">
                <div class="min-w-5 mr-1">
                    <img
                        src="@/node_modules/@hursey013/tailwindcss-uswds/dist/img/icon-https.svg"
                    />
                </div>
                <div>
                    <div class="font-bold">The site is secure.</div>
                    <div>
                        The <strong>https://</strong>
                        ensures that you are connecting to the official website
                        and that any information you provide is encrypted and
                        transmitted securely.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GovBanner',
    data() {
        return {
            open: false,
        }
    },
    computed: {
        angleImagePath() {
            const angle = this.open ? 'up' : 'down'
            return require(`@/node_modules/@hursey013/tailwindcss-uswds/dist/img/angle-arrow-${angle}-primary.svg`)
        },
    },
    methods: {
        toggleOpen() {
            this.open = !this.open
        },
    },
}
</script>

<style scoped>
.header {
    font-size: 0.8rem;
}

@screen sm {
    .button {
        top: auto;
        right: auto;
        bottom: auto;
        left: auto;
    }
}
</style>
