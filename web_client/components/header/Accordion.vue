<template>
    <div class="accordion">
        <div
            :class="{ 'text-primary': expanded, 'font-bold': expanded }"
            class="title cursor-pointer flex justify-between items-center py-105 px-2 relative"
            @click="onClickLabel"
        >
            <div
                v-if="expanded"
                class="accent absolute top-05 left-0 bg-primary w-05 h-4 rounded-pill"
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
                class="border-t-1px border-base-lighter py-105 pl-4 pr-2 text-ui-2xs"
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
