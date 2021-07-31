<template>
    <div
        class="flex flex-col justify-center pt-3 pb-3 sm:pt-6 sm:pb-6 md:items-center md:m-auto lg:flex-row lg:items-start lg:space-x-8 last:border-0 max-w-desktop border-b-2px border-base-lighter"
    >
        <icon-image
            :src="imgSrc"
            :alt="imgAlt"
            class="self-start md:self-auto mb-205"
        />

        <div>
            <h2
                class="mb-1 font-bold text-left sm:mb-4 md:text-center lg:text-left text-heading-lg font-heading text-base-darkest md:text-heading-xl"
            >
                {{ header }}
            </h2>
            <div class="grid items-start justify-center grid-cols-1 md:grid-cols-[repeat(2,minmax(0,360px))] md:gap-x-9">
                <Item
                    v-for="link in links"
                    :key="link.label"
                    class="last:mb-0 mb-105"
                    :link="link.href"
                    >{{ link.label }}</Item
                >
            </div>
        </div>
    </div>
</template>

<script>
import Item from '@/components/index/Item'
import IconImage from '@/components/IconImage'

export default {
    name: 'SectionLinks',
    components: { Item, IconImage },
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