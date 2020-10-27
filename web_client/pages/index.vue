<template>
    <div>
        <Header />
        <div class="mx-3">
            <h3 class="mt-5 text-2xl text-center text-base-darkest">
                Welcome to
            </h3>
            <h1 class="mt-1 text-4xl font-bold text-center text-primary">
                Citizen Center
            </h1>
            <p class="mt-3 leading-tight max-w-mobile-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque,
                morbi non aliquet vitae. Convallis nunc in commodo egestas
                consectetur urna consequat tincidunt ornare. Proin amet nunc
                rutrum vel elit. Sit faucibus nisl senectus risus.
            </p>
            <p class="mt-3 leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque,
                morbi non aliquet vitae. Convallis nunc in commodo egestas
                consectetur urna consequat tincidunt ornare. Proin amet nunc
                rutrum vel elit. Sit faucibus nisl senectus risus.
            </p>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
export default {
    name: 'Home',
    components: { Header },
}
</script>

<style scoped></style>
