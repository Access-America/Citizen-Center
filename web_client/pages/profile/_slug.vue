<template>
    <FeatureTemplate
        header="Profile"
        featured-image="taxes.svg"
        featured-image-alt="Filing taxes"
        :article="article"
        :prev="prev"
        :next="next"
    />
</template>

<script>
import FeatureTemplate from '@/components/FeatureTemplate'

const DIR_NAME = 'profile'

export default {
    components: { FeatureTemplate },
    async asyncData({ $content, params }) {
        const article = await $content(DIR_NAME, params.slug).fetch()

        const [prev, next] = await $content(DIR_NAME)
            .only(['title', 'slug'])
            .sortBy('order', 'asc')
            .surround(params.slug)
            .fetch()

        return { article, prev, next }
    },
}
</script>
