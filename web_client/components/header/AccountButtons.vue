<template>
    <button-group>
        <Button v-show="!token" kind="outline" @click.native="() => signIn()"
            >Sign in/Sign up</Button
        >
        <Button v-show="token" kind="outline" @click.native="() => signOut()"
            >Log out</Button
        >
    </button-group>
</template>

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
