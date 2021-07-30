<template>
    <div
        v-if="show"
        class="absolute left-0 right-0 w-auto text-white megamenu bg-primary-darker"
    >
        <div class="pt-4 pb-3 pl-2 m-auto megamenu-inner max-w-desktop">
            <NuxtLink
                v-for="({ href, label }, idx) in items"
                :key="idx"
                :to="href"
                class="pl-2 hover:underline megamenu-link text-ui-2xs pb-105"
                @click.native="() => onClickItem(items[idx])"
            >
                {{ label }}
            </NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MegaMenu',
    props: {
        onClickItem: {
            type: Function,
            default: () => {},
        },
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
