<template>
    <div>
        <portal-target name="nav-overlay"></portal-target>
        <gov-banner />
        <Header :menu="headerMenu" />
        <nuxt />
        <Footer />
    </div>
</template>
<script>
import Footer from '@/components/Footer'
import Header from '@/components/header/Header'
import GovBanner from '@/components/GovBanner'
import { MENU } from '@/content/menu'

export default {
    name: 'Layout',
    components: { Header, Footer, GovBanner },
    data() {
        return {
            headerMenu: MENU,
        }
    },
}
</script>

<style></style>
