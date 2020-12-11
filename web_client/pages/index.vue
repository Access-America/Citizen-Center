<template>
    <div>
        <Header />
        <div class="px-3">
            <div class="mb-6 md:mb-10 max-w-tablet m-auto">
                <h3
                    class="mt-5 text-2xl text-center text-base-darkest font-heading text-heading-lg"
                >
                    Welcome to
                </h3>
                <h1
                    class="mt-1 text-4xl font-bold text-center text-primary font-heading text-heading-2xl"
                >
                    Citizen Center
                </h1>
                <p class="mx-auto mt-3 leading-tight font-body text-body-md">
                    A 21st century nation deserves a 21st century government.
                    America is dreadfully behind the times when it comes to
                    leveraging the latest technology in publicly-funded spaces.
                </p>
                <p class="mx-auto mt-3 leading-tight font-body text-body-md">
                    While Silicon Valley enjoys breakthrough after breakthrough,
                    our federal and state governments fail to keep pace with the
                    tools that would drastically improve civic processes for
                    millions of Americans.
                </p>
                <p class="mx-auto mt-3 leading-tight font-body text-body-md">
                    Innovation is a home-grown American ideal, and the Citizen
                    Center will transform our government, helping to pull the
                    United States out of the 20th century.
                </p>
                <p class="mx-auto mt-3 leading-tight font-body text-body-md">
                    This website is to demonstrate the enormous potential of a
                    unified government portal. Prototypes of features will
                    become available as they are developed, but the broad scope
                    of the site is currently available for browsing.
                </p>
            </div>
            <div class="mb-10 sm:mb-15 flex flex-col md:items-center">
                <section-links
                    img-src="taxes.svg"
                    img-alt="Filing taxes"
                    header="On The Pulse"
                    :links="[
                        {
                            href: '#',
                            text: 'Canvas America (participate in petitions)',
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
                    img-src="financial.svg"
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
import SectionLinks from '@/components/index/SectionLinks'

export default {
    name: 'Home',
    components: { SectionLinks },
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