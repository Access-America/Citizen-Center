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
                label: 'Review congressional voting histories',
                href: '/on-the-pulse/voting-histories',
            },
            {
                label: 'Review special interest money in politics',
                href: '/on-the-pulse/special-interest-money',
            },
            {
                label: 'View Congressional Bills and Supreme Court Cases',
                href: '/on-the-pulse/bills-cases',
            },
            {
                label: 'Contact congressional representatives',
                href: '/on-the-pulse/contact-representatives',
            },
            {
                label: 'Complete the U.S. Census',
                href: '/on-the-pulse/census',
            },
            {
                label: 'View the American Scorecard',
                href: '/on-the-pulse/american-scorecard',
            },
            {
                label: 'Citizen Survey',
                href: '/on-the-pulse/citizen-survey',
            },
            {
                label: 'Canvas America',
                href: '/on-the-pulse/canvas-america',
            },
        ],
    },
    {
        type: 'submenu',
        label: 'Benefits & Services',
        submenu: [
            {
                label: 'Apply for government assistance programs',
                href: '/benefits-and-services/government-assistance',
            },
            {
                label: 'Apply for unemployment',
                href: '/benefits-and-services/unemployment',
            },
            {
                label: 'Apply for or renew passport',
                href: '/benefits-and-services/passport',
            },
            {
                label: 'Other state/local sites',
                href: '/benefits-and-services/websites',
            },
        ],
    },
    {
        type: 'submenu',
        label: 'Elections',
        submenu: [
            {
                label: 'Register to vote',
                href: '/elections/register-to-vote',
            },
            {
                label: 'Check voter registration',
                href: '/elections/check-voter-registration',
            },
            {
                label: 'Online Voting',
                href: '/elections/vote-online',
            },
            {
                label: 'Request absentee ballot',
                href: '/elections/absentee-ballot',
            },
            {
                label: 'Register to run for office',
                href: '/elections/run-for-office',
            },
            {
                label: 'Volunteer as poll worker',
                href: '/elections/volunteer',
            },
        ],
    },
    {
        type: 'submenu',
        label: 'Financial',
        submenu: [
            {
                label: 'File taxes',
                href: '/financial/file-taxes',
            },
            {
                label: 'Review tax history',
                href: '/financial/tax-history',
            },
            {
                label: 'Connect bank account',
                href: '/financial/connect-bank',
            },
            {
                label: 'Pay fines',
                href: '/financial/pay-fines',
            },
            {
                label: 'Sign up for Freedom Dividend',
                href: '/financial/freedom-dividend',
            },
        ],
    },
    {
        type: 'submenu',
        label: 'Profile',
        submenu: [
            {
                label: 'Update Your Information',
                href: '/profile/update',
            },
            {
                label: 'Link Family Members',
                href: '/profile/link-family',
            },
            {
                label: 'Apply for Name Change',
                href: '/profile/name-change',
            },
            {
                label: 'Manage Notifications',
                href: '/profile/notifications',
            },
            {
                label: 'Manage Permissions',
                href: '/profile/permissions',
            },
            {
                label: 'Decentralized Identity',
                href: '/profile/did',
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
