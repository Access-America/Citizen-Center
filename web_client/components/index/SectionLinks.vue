<template>
    <div class="flex flex-col lg:flex-row justify-center lg:space-x-16 mb-4">
        <div class="flex justify-center items-start">
            <img
                class="mt-5"
                :src="require(`~/assets/images/${imgSrc}`)"
                :alt="imgAlt"
            />
        </div>
        <div>
            <h2
                class="mt-4 text-4xl font-bold text-left md:text-center lg:text-left text-base-darkest"
            >
                {{ header }}
            </h2>
            <div class="items-start justify-center custom-grid">
                <Item
                    v-for="link in links"
                    :key="link.text"
                    class="mt-2"
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
        grid-template-columns: repeat(2, minmax(0, 420px));
        column-gap: 2rem;
    }
}
</style>
