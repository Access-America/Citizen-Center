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
<script
    src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
    integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
    crossorigin="anonymous"
></script>
<script
    src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
    crossorigin="anonymous"
></script>

<script>
import Button from '@/components/button/Button'
import ButtonGroup from '@/components/button/ButtonGroup'
import * as authPopup from '../../auth_config/authPopup'
import authConfig from '../../auth_config/authConfig'
import policies from '../../auth_config/policies'

export default {
    name: 'AccountButtons',
    components: { Button, ButtonGroup },
    data: () => ({
        tokenValue: process.browser ? localStorage.getItem('idToken') : null,
    }),
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
    computed: {
        token: {
            get: function () {
                return this.tokenValue
            },
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
