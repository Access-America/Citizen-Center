<template>
    <div class="text-2xl highlight">
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
.highlight:hover {
    @apply px-1 border-l-1 border-primary;
}
</style>
