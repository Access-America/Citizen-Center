<template>
    <button-group>
        <Button v-show="!token" kind="outline" @click.native="() => signIn()"
            >Sign in/Sign up</Button
        >
        <Button v-show="token" kind="outline" @click.native="() => signOut()"
            >Log out</Button
        >
        <div v-show="!token" class="vc-login-link" @click="vcSignIn()">
            <a
                >Already verified your digital identity?
                <span class="red"> Sign in here. </span>
            </a>
        </div>
        <div v-show="token" class="vc-account-link" @click="vcLinkAccounts()">
            <a
                >Want access to more features?
                <span class="red">
                    Verify your identity and sign in with your digital identity.
                </span>
            </a>
        </div>
    </button-group>
</template>

<script>
import Button from '@/components/button/Button'
import ButtonGroup from '@/components/button/ButtonGroup'
import * as authPopup from '../../auth_config/authPopup'

export default {
    name: 'AccountButtons',
    components: { Button, ButtonGroup },
    data: () => ({
        tokenValue: process.browser ? localStorage.getItem('idToken') : null,
    }),
    computed: {
        token: {
            get () {
                return this.tokenValue
            },
        },
    },
    methods: {
        signIn() {
            return authPopup.signIn()
        },
        signOut() {
            return authPopup.signOut()
        },
        vcSignIn() {
            return authPopup.vcSignIn()
        },
        vcLinkAccounts() {
            return authPopup.vcLinkAccounts()
        },
    },
}
</script>

<style scoped>
.vc-login-link {
    max-width: 12em;
    font-size: 0.8em;
    text-align: center;
}
.vc-account-link {
    max-width: 8em;
    font-size: 0.8em;
    text-align: center;
}
.vc-login-link:hover,
.red {
    cursor: pointer;
}

.red:hover {
    color: #f03749;
}
</style>
