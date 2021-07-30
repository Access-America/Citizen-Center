<template>
    <div class="underline text-body-md text-primary-default hover:text-primary-dark">
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