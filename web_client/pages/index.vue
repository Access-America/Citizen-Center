<template>
    <div>
        <Header />
        <div class="px-3 mx-auto">
            <div class="mb-5">
                <h3 class="mt-5 text-2xl text-center text-base-darkest">
                    Welcome to
                </h3>
                <h1 class="mt-1 text-4xl font-bold text-center text-primary">
                    Citizen Center
                </h1>
                <p class="mx-auto mt-3 leading-tight max-w-mobile-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Neque, morbi non aliquet vitae. Convallis nunc in commodo
                    egestas consectetur urna consequat tincidunt ornare. Proin
                    amet nunc rutrum vel elit. Sit faucibus nisl senectus risus.
                </p>
                <p class="mx-auto mt-3 leading-tight max-w-mobile-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Neque, morbi non aliquet vitae. Convallis nunc in commodo
                    egestas consectetur urna consequat tincidunt ornare. Proin
                    amet nunc rutrum vel elit. Sit faucibus nisl senectus risus.
                </p>
            </div>
            <div class="flex flex-col mx-auto max-w-mobile-lg md:max-w-full">
                <section-links
                    img-src="taxes.svg"
                    img-alt="Filing taxes"
                    header="On The Pulse"
                    :links="[
                        {
                            href: '#',
                            text: 'Canvas America (participating in petitions)',
                        },
                        {
                            href: '#',
                            text: 'Contact congressional representatives',
                        },
                        {
                            href: '#',
                            text: 'Review congressional voting histories',
                        },
                        {
                            href: '#',
                            text: 'Review special interest money in politics',
                        },
                        {
                            href: '#',
                            text: 'View The American Scorecard',
                        },
                        {
                            href: '#',
                            text:
                                'View congressional bills, supreme court cases, calendars',
                        },
                    ]"
                />
                <section-links
                    img-src="assistance.svg"
                    img-alt="Government Assistance"
                    header="Benefits and Services"
                    :links="[
                        {
                            href: '#',
                            text: 'Apply for Government Assistance Programs',
                        },
                        {
                            href: '#',
                            text: 'Apply for unemployment',
                        },
                        {
                            href: '#',
                            text: 'Apply for or renew a passport',
                        },
                        {
                            href: '#',
                            text:
                                'Redirects to useful state or local govt sites',
                        },
                    ]"
                />
                <section-links
                    img-src="registration.svg"
                    img-alt="Voter Registration"
                    header="Elections"
                    :links="[
                        {
                            href: '#',
                            text: 'Check voter registration',
                        },
                        {
                            href: '#',
                            text: 'Register to run for office',
                        },
                        {
                            href: '#',
                            text: 'Register to vote',
                        },
                        {
                            href: '#',
                            text: 'Request absentee ballot',
                        },
                        {
                            href: '#',
                            text: 'Review voting history',
                        },
                        {
                            href: '#',
                            text: 'Volunteer as poll worker',
                        },
                        {
                            href: '#',
                            text: 'Vote',
                        },
                    ]"
                />
                <section-links
                    img-src="registration.svg"
                    img-alt="Financial"
                    header="Financial"
                    :links="[
                        {
                            href: '#',
                            text:
                                'Connect a bank account (make or receive payments)',
                        },
                        {
                            href: '#',
                            text: 'File taxes',
                        },
                        {
                            href: '#',
                            text: 'Pay fines',
                        },
                        {
                            href: '#',
                            text: 'Review tax history',
                        },
                        {
                            href: '#',
                            text: 'Sign up for Freedom Dividend',
                        },
                    ]"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
import SectionLinks from '@/components/index/SectionLinks'

export default {
    name: 'Home',
    components: { Header, SectionLinks },
}
</script>

<style scoped>
/* Do this instead: */
.custom-grid {
    @apply grid grid-cols-1;
}
@screen md {
    .custom-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 420px));
        column-gap: 2rem;
    }
}
</style>
