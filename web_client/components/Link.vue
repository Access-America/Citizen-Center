<template>
    <NuxtLink
        v-bind="{ ...$props, ...$attrs }"
        class="underline text-primary hover:text-primary-dark"
    >
        <slot></slot>
    </NuxtLink>
</template>

<script>
// TODO: add support for external links

export default {
    name: 'Link',
}
</script>
