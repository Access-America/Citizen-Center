<template>
    <div class="accordion">
        <div
            :class="{ 'text-primary': expanded, 'font-bold': expanded }"
            class="relative flex items-center justify-between px-2 cursor-pointer title py-105"
            @click="onClickLabel"
        >
            <div
                v-if="expanded"
                class="absolute left-0 h-4 accent top-05 bg-primary w-05 rounded-pill"
            ></div>
            <span>{{ label }}</span
            ><img
                class="w-2 h-2 -mr-2"
                :src="
                    require(`@/assets/images/icons/${
                        expanded ? 'minus' : 'plus'
                    }.svg`)
                "
            />
        </div>
        <ul v-if="expanded" class="items">
            <li
                v-for="(item, idx) in items"
                :key="idx"
                class="pl-4 pr-2 border-t-1px border-base-lighter py-105 text-ui-2xs"
            >
                <NuxtLink
                    :to="item.href"
                    @click.native="() => onClickItem(item)"
                    >{{ item.label }}</NuxtLink
                >
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Accordion',
    props: {
        expanded: {
            type: Boolean,
            default: false,
        },
        onClickLabel: {
            type: Function,
            default() {},
        },
        onClickItem: {
            type: Function,
            default() {},
        },
        label: {
            type: String,
            default: '',
        },
        items: {
            type: Array,
            default() {
                return [
                    {
                        label: '',
                        href: '#',
                    },
                ]
            },
        },
    },
}
</script>
