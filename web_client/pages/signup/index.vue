<template>
    <div class="tw-min-h-screen tw-flex tw-flex-col">
        <Header>Citizen Center - Sign Up</Header>
        <div
            id="main-content"
            class="grid-container tw-mt-4 tw-flex-1 tw-w-full tw-flex tw-justify-center"
        >
            <SignUp @success="onSignUp" />
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SignUp from '../../components/SignUp'

export default {
    name: 'Signup',
    components: { Footer, Header, SignUp },
    methods: {
        onSignUp(signupData) {
            // console.log(signupData) // todo send this to some authentication service
            this.$router.push({ path: '/signup/success' })
        },
    },
}
</script>
<style scoped></style>
