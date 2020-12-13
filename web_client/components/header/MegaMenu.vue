<template>
    <div
        v-if="show"
        class="megamenu absolute left-0 right-0 w-auto bg-primary-darker text-white"
    >
        <div class="megamenu-inner max-w-desktop m-auto pt-4 pb-3 pl-2">
            <a
                v-for="({ href, label }, idx) in items"
                :key="idx"
                :href="href"
                class="megamenu-link hover:underline text-ui-2xs pl-2 pb-105"
            >
                {{ label }}
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MegaMenu',
    props: {
        show: {
            type: Boolean,
            default: false,
        },
        items: {
            type: Array,
            default() {
                return [
                    {
                        href: '#',
                        label: '',
                    },
                ]
            },
        },
    },
}
</script>

<style scoped>
.megamenu-inner {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
}
</style>
