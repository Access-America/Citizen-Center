<template>
    <div
        class="flex justify-center items-center bg-base-lightest rounded-pill min-w-10 min-h-10 md:min-w-15 md:min-h-15"
    >
        <img
            class="max-w-5 md:max-w-8"
            :src="require(`~/assets/images/${src}`)"
            :alt="alt"
        />
    </div>
</template>

<script>
export default {
    name: 'IconImage',
    props: {
        src: {
            type: String,
            default: '',
        },
        alt: {
            type: String,
            default: '',
        },
    },
}
</script>
