<template>
    <div class="text-body-md highlight">
        <a :href="link"><slot></slot></a>
    </div>
</template>

<script>
export default {
    name: 'Item',
    components: {},
    props: {
        link: {
            type: String,
            default: '#',
        },
    },
}
</script>
<style scoped>
.highlight {
    @apply text-primary underline;
}

.highlight:hover {
    @apply text-primary-dark;
}
</style>
