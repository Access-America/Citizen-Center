<template>
    <div class="text-body-md highlight">
        <Link :to="link"><slot></slot></Link>
    </div>
</template>

<script>
import Link from '@/components/Link'

export default {
    name: 'Item',
    components: { Link },
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
