<template>
    <div class="feature-template">
        <div
            class="flex flex-col px-2 py-6 m-auto max-w-desktop md:py-10 md:flex-row md:space-x-10"
        >
            <icon-image
                :src="featuredImage"
                :alt="featuredImageAlt"
                class="self-start mb-3"
            />
            <article>
                <div class="mb-4">
                    <h2
                        class="text-base font-bold text-heading-md lg:text-heading-lg font-heading"
                    >
                        {{ header }}
                    </h2>
                    <h1
                        v-if="article.title"
                        class="font-bold text-heading-xl lg:text-heading-3xl font-heading text-primary-darker"
                    >
                        {{ article.title }}
                    </h1>
                    <h3
                        v-if="article.subtitle"
                        class="text-heading-md lg:text-heading-lg font-heading text-base-primary-darker"
                    >
                        {{ article.subtitle }}
                    </h3>
                </div>

                <div class="pb-4 sm:pb-6">
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

.nuxt-content {
    @apply text-base-darker;
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

.feature-template .nuxt-content a {
    @apply text-primary-default underline;
}
</style>
