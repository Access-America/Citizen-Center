<template>
    <div class="feature-template flex justify-center items-center">
        <div
            class="max-w-desktop m-auto py-6 md:py-10 px-2 flex flex-col md:flex-row md:space-x-10"
        >
            <icon-image
                :src="featuredImage"
                :alt="featuredImageAlt"
                class="mb-3 self-start"
            />
            <article>
                <div class="mb-4">
                    <h1
                        class="text-heading-md lg:text-heading-lg font-heading font-bold text-base"
                    >
                        On The Pulse
                    </h1>
                    <h2
                        v-if="article.title"
                        class="text-heading-xl lg:text-heading-3xl font-heading font-bold text-primary-darker"
                    >
                        {{ article.title }}
                    </h2>
                    <h3
                        v-if="article.subtitle"
                        class="text-heading-md lg:text-heading-lg font-heading text-base-primary-darker"
                    >
                        {{ article.subtitle }}
                    </h3>
                </div>

                <div class="mb-4 sm:mb-6">
                    <nuxt-content :document="article" />
                </div>

                <prev-next :prev="prev" :next="next" class="md:text-body-md" />
            </article>
        </div>
    </div>
</template>

<script>
import PrevNext from '@/components/PrevNext'
import IconImage from '@/components/IconImage'
// TODO: style content
// TODO: create prev and next component
// TODO: live edit content
// TODO: replace <a> tag in Button with NuxtLink
// TODO: scope nuxt-content styles
// TODO: put FeatureTemplate in components/templates/

export default {
    name: 'FeatureTemplate',
    components: { PrevNext, IconImage },
    props: {
        header: {
            type: String,
            required: true,
            default: '',
        },
        featuredImage: {
            type: String,
            required: true,
            default: '',
        },
        featuredImageAlt: {
            type: String,
            default: '',
        },
        article: {
            type: Object,
            required: true,
            default: () => {},
        },
        prev: {
            type: Object,
            required: true,
            default: () => {},
        },
        next: {
            type: Object,
            required: true,
            default: () => {},
        },
    },
}
</script>

<style>
.feature-template {
    min-height: 70vh;
}

.feature-template .nuxt-content h1,
.feature-template .nuxt-content h2 {
    @apply text-heading-lg font-heading font-bold;
}

.feature-template .nuxt-content h3,
.feature-template .nuxt-content h4,
.feature-template .nuxt-content h5,
.feature-template .nuxt-content h6 {
    @apply text-heading-md font-heading font-bold;
}

.feature-template .nuxt-content p {
    @apply my-3 text-body-md font-body;
}

.feature-template .nuxt-content ul {
    @apply my-3 text-body-md font-body list-disc ml-205;
}

.feature-template .nuxt-content ol {
    @apply my-3 text-body-md font-body list-decimal ml-205;
}
</style>
