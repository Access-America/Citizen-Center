<template>
    <portal to="nav-overlay">
        <div
            class="nav-overlay fixed inset-0 bg-black opacity-0 z-300"
            :class="{
                invisible: !show,
                'opacity-20': show,
            }"
        />
    </portal>
</template>

<script>
export default {
    name: 'Overlay',
    props: {
        show: {
            type: Boolean,
            default: false,
        },
    },
}
</script>

<style scoped>
.nav-overlay {
    transition: opacity 0.2s ease-in-out;
}
</style>
