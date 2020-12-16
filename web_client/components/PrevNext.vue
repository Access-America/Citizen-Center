<template>
    <div class="flex flex-col sm:flex-row sm:justify-between">
        <div class="order-3 mt-2 sm:mt-0 sm:order-1">
            <Link v-if="prev" :to="prev.slug" class="flex items-center">
                <img
                    v-if="prev"
                    class="w-205 h-205 mr-05"
                    src="@/assets/images/icons/arrow-left_primary.svg"
                />
                {{ prev.title }}</Link
            >
        </div>
        <div class="order-2">
            <Link v-if="next" :to="next.slug" class="flex items-center"
                >{{ next.title }}
                <img
                    v-if="next"
                    class="w-205 h-205 ml-05"
                    src="@/assets/images/icons/arrow-right_primary.svg"
                />
            </Link>
        </div>
    </div>
</template>

<script>
import Link from '@/components/Link'

export default {
    name: 'PrevNext',
    components: { Link },
    props: {
        prev: {
            type: Object,
            default: () => {},
        },
        next: {
            type: Object,
            default: () => {},
        },
    },
}
</script>
