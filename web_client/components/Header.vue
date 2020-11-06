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
                <nuxt-link to="Eligibility">Voter Registration</nuxt-link>
            </div>
            <div class="p-2 text-sm text-white uppercase bg-primary">Menu</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style></style>
