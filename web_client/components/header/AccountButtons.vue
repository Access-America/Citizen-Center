<template>
    <button-group>
        <Button kind="outline" to="https://www.google.com">Sign in</Button>
        <Button to="https://www.google.com">Sign up</Button>
    </button-group>
</template>

<script>
import Button from '@/components/button/Button'
import ButtonGroup from '@/components/button/ButtonGroup'

export default {
    name: 'AccountButtons',
    components: { Button, ButtonGroup },
}
</script>
