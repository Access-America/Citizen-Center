<template>
    <FeatureTemplate
        header="On The Pulse"
        featured-image="assistance.svg"
        featured-image-alt="Assistance"
        :article="article"
        :prev="prev"
        :next="next"
    />
</template>

<script>
import FeatureTemplate from '@/components/FeatureTemplate'

// TODO: add img to frontmatter
// TODO: style content
// TODO: create prev and next component
// TODO: live edit content
// TODO: replace <a> tag in Button with NuxtLink
// TODO: scope nuxt-content styles

const DIR_NAME = 'on-the-pulse'

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
