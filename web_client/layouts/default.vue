<template>
    <div>
        <nuxt />
        <Footer />
    </div>
</template>
<script>
import Footer from '@/components/Footer'

export default {
    name: 'Layout',
    components: { Footer },
}
</script>

<style></style>
