<template>
    <div
        class="flex flex-col lg:flex-row justify-center md:items-center lg:items-start lg:space-x-8 pb-3 pt-3 sm:pb-6 sm:pt-6 max-w-desktop md:m-auto border-b-2px border-base-lighter last:border-0"
    >
        <div
            class="flex justify-center items-center bg-base-lightest rounded-pill w-10 h-10 md:w-15 md:h-15 mb-205"
        >
            <img
                class="max-w-5 md:max-w-8"
                :src="require(`~/assets/images/${imgSrc}`)"
                :alt="imgAlt"
            />
        </div>
        <div>
            <h2
                class="text-heading-lg md:text-heading-xl font-heading font-bold text-left md:text-center lg:text-left text-base-darkest mb-1 sm:mb-4"
            >
                {{ header }}
            </h2>
            <div class="items-start justify-center custom-grid">
                <Item
                    v-for="link in links"
                    :key="link.text"
                    class="mb-105 last:mb-0"
                    :link="link.href"
                    >{{ link.text }}</Item
                >
            </div>
        </div>
    </div>
</template>

<script>
import Item from '@/components/index/Item'

export default {
    name: 'SectionLinks',
    components: { Item },
    props: {
        imgSrc: {
            type: String,
            default: '',
        },
        imgAlt: {
            type: String,
            default: '',
        },
        header: {
            type: String,
            default: '',
        },
        links: {
            type: Array,
            default() {
                return []
            },
        },
    },
}
</script>

<style scoped>
.custom-grid {
    @apply grid grid-cols-1;
}

@screen md {
    .custom-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 360px));
        column-gap: 2.25rem;
    }
}
</style>
