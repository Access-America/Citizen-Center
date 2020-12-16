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

const HEADER_MENU = [
    {
        type: 'submenu',
        label: 'On The Pulse',
        submenu: [
            {
                label: 'Canvas America',
                href: '#',
            },
            {
                label: 'View congressional voting histories',
                href: '#',
            },
            {
                label: 'View the American Scorecard',
                href: '#',
            },
            {
                label: 'Contact congressional representatives',
                href: '#',
            },
            {
                label: 'Review special interest money in politics',
                href: '#',
            },
            {
                label: 'View bills, supreme court cases, calendars',
                href: '#',
            },
        ],
    },
    {
        type: 'submenu',
        label: 'Benefits & Services',
        submenu: [
            {
                label: 'Apply for government assistance programs',
                href: '#',
            },
            {
                label: 'Apply for unemployment',
                href: '#',
            },
            {
                label: 'Apply or renew passport',
                href: '#',
            },
            {
                label: 'Other state/local sites',
                href: '#',
            },
        ],
    },
    {
        type: 'submenu',
        label: 'Elections',
        submenu: [
            {
                label: 'Vote',
                href: '#',
            },
            {
                label: 'Check voter registration',
                href: '#',
            },
            {
                label: 'Register to run for office',
                href: '#',
            },
            {
                label: 'Register to vote',
                href: '#',
            },
            {
                label: 'Request absentee ballot',
                href: '#',
            },
            {
                label: 'Review voting history',
                href: '#',
            },
            {
                label: 'Volunteer as poll worker',
                href: '#',
            },
        ],
    },
    {
        type: 'submenu',
        label: 'Financial',
        submenu: [
            {
                label: 'Connect bank account',
                href: '#',
            },
            {
                label: 'File taxes',
                href: '#',
            },
            {
                label: 'Pay fines',
                href: '#',
            },
            {
                label: 'Review tax history',
                href: '#',
            },
            {
                label: 'Sign up for Freedom Dividend',
                href: '#',
            },
        ],
    },
]

export default {
    name: 'Layout',
    components: { Header, Footer, GovBanner },
    data() {
        return {
            headerMenu: HEADER_MENU,
        }
    },
}
</script>

<style></style>
