<template>
    <div>
        <portal-target name="nav-overlay"></portal-target>
        <Header :menu="headerMenu" />
        <nuxt />
        <Footer />
    </div>
</template>
<script>
import Footer from '@/components/Footer'
import Header from '@/components/header/Header'
import { MENU } from '@/content/menu'

export default {
    name: 'Layout',
    components: { Header, Footer },
    data() {
        return {
            headerMenu: MENU,
        }
    },
}
</script>

<style></style>
