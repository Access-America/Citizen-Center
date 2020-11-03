<template>
    <div>
        <Header />
        <div class="px-3 mx-auto">
            <h3 class="mt-5 text-2xl text-center text-base-darkest">
                Welcome to
            </h3>
            <h1 class="mt-1 text-4xl font-bold text-center text-primary">
                Citizen Center
            </h1>
            <p class="mx-auto mt-3 leading-tight max-w-mobile-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque,
                morbi non aliquet vitae. Convallis nunc in commodo egestas
                consectetur urna consequat tincidunt ornare. Proin amet nunc
                rutrum vel elit. Sit faucibus nisl senectus risus.
            </p>
            <p class="mx-auto mt-3 leading-tight max-w-mobile-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque,
                morbi non aliquet vitae. Convallis nunc in commodo egestas
                consectetur urna consequat tincidunt ornare. Proin amet nunc
                rutrum vel elit. Sit faucibus nisl senectus risus.
            </p>
            <div class="flex flex-col mx-auto max-w-mobile-lg md:max-w-full">
                <div class="flex justify-center">
                    <img
                        class="mt-5"
                        src="~/assets/images/taxes.svg"
                        alt="Filing taxes"
                    />
                </div>
                <h2
                    class="mt-4 text-4xl font-bold text-left text-base-darkest md:text-center"
                >
                    On The Pulse
                </h2>
                <div class="items-start justify-center custom-grid">
                    <Item class="mt-2"
                        >Canvas America (participating in petitions)</Item
                    >
                    <Item class="mt-3">Complete the US Census</Item>
                    <Item class="mt-3"
                        >Contact congressional representatives</Item
                    >
                    <Item class="mt-3"
                        >Review congressional voting histories</Item
                    >
                    <Item class="mt-3"
                        >Review special interest money in politics</Item
                    >
                    <Item class="mt-3">View The American Scorecard</Item>
                    <Item class="mt-3"
                        >View congressional bills, supreme court cases,
                        calendars</Item
                    >
                </div>
                <div class="flex justify-center">
                    <img
                        class="mt-5"
                        src="~/assets/images/assistance.svg"
                        alt="Government Assistance"
                    />
                </div>
                <h2
                    class="mt-4 text-4xl font-bold text-left text-base-darkest md:text-center"
                >
                    Benefits and Services
                </h2>
                <div class="items-start justify-center custom-grid">
                    <Item class="mt-2"
                        >Apply for Government Assistance Programs</Item
                    >
                    <Item class="mt-3">Apply for unemployment</Item>
                    <Item class="mt-3">Apply for or renew a passport</Item>
                    <Item class="mt-3"
                        >Redirects to useful state or local govt sites</Item
                    >
                </div>
                <div class="flex justify-center">
                    <img
                        class="mt-5"
                        src="~/assets/images/registration.svg"
                        alt="Voter Registration"
                    />
                </div>
                <h2
                    class="mt-4 text-4xl font-bold text-left text-base-darkest md:text-center"
                >
                    Elections
                </h2>
                <div class="items-start justify-center custom-grid">
                    <Item class="mt-2">Check voter registration</Item>
                    <Item class="mt-3">Register to run for office</Item>
                    <Item class="mt-3">Register to vote</Item>
                    <Item class="mt-3">Request absentee ballot</Item>
                    <Item class="mt-3">Review voting history</Item>
                    <Item class="mt-3">Volunteer as poll worker</Item>
                    <Item class="mt-3">Vote</Item>
                </div>

                <div class="flex justify-center">
                    <img
                        class="mt-5"
                        src="~/assets/images/registration.svg"
                        alt="Financial"
                    />
                </div>
                <h2
                    class="mt-4 text-4xl font-bold text-left text-base-darkest md:text-center"
                >
                    Financial
                </h2>
                <div class="items-start justify-center custom-grid">
                    <Item class="mt-2"
                        >Connect a bank account (make or receive payments)</Item
                    >
                    <Item class="mt-3">File taxes</Item>
                    <Item class="mt-3">Pay fines</Item>
                    <Item class="mt-3">Review tax history</Item>
                    <Item class="mt-3">Sign up for Freedom Dividend</Item>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Item from '@/components/index/Item'

export default {
    name: 'Home',
    components: { Header, Item },
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
