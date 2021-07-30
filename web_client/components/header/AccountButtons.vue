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
    },
}
</script>
