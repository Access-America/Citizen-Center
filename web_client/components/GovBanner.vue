<template>
    <div>
        <header class="relative p-1 text-heading-3xs bg-base-lightest font-ui sm:p-05">
            <div class="flex pl-1">
                <img
                    class="self-start mr-1 mt-05"
                    src="@/node_modules/@hursey013/tailwindcss-uswds/dist/img/us_flag_small.png"
                    alt="U.S. flag"
                />
                <div class="">
                    <div class="mr-1">
                        An official website of the United States government
                    </div>
                    <p
                        class="flex items-center underline sm:hidden text-primary-default"
                    >
                        Here's how you know
                        <img class="w-1 h-1 ml-05" :src="angleImagePath" />
                    </p>
                </div>
                <button
                    class="absolute inset-0 flex items-center w-full underline sm:static sm:w-auto focus:outline-none button text-primary-default"
                    @click.prevent="toggleOpen"
                >
                    <span class="items-center hidden sm:flex">
                        Here's how you know
                        <img class="w-1 h-1 ml-05" :src="angleImagePath" />
                    </span>
                    <div
                        v-if="open"
                        class="absolute top-0 right-0 flex items-center justify-center w-6 h-6 sm:hidden bg-base-lighter"
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
            class="flex flex-col pb-2 pl-1 pr-2 md:flex-row md:space-x-6 text-body-xs bg-base-lightest pt-05"
        >
            <div class="flex pt-2">
                <div class="mr-1 min-w-5">
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
            <div class="flex pt-2">
                <div class="mr-1 min-w-5">
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