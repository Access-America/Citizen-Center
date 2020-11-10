<template>
    <div>
        <Header />
        <div class="px-3 mx-auto">
            <h1 class="mt-1 text-4xl font-bold text-center text-primary">7. Which party do you wish to register with?</h1>
            <small>Your state requires voters to be registered with a specific party to vote in their primary.</small>
            <form @submit.prevent="processParty()" class="mt-5 text-2xl text-center text-base-darkest">
                <div>
                    <input type="radio" id="constitution" value="Constitution Party" v-model="voter.party">
                    <label for="constitution">Constitution Party</label><br>
                    <input type="radio" id="democratic" value="Democratic Party" v-model="voter.party">
                    <label for="democratic">Democratic Party</label><br>
                    <input type="radio" id="green" value="Green Party" v-model="voter.party">
                    <label for="green">Green Party</label><br>
                    <input type="radio" id="independent" value="Independent" v-model="voter.party">
                    <label for="independent">Independent</label><br>
                    <input type="radio" id="libertarian" value="Libertarian Party" v-model="voter.party">
                    <label for="libertarian">Libertarian Party</label><br>
                    <input type="radio" id="republican" value="Republican Party" v-model="voter.party">
                    <label for="republican">Republican Party</label><br>
                </div>
                <br />
                <input type="submit" value="Enter Party" style="padding: 1.5rem; background-color: rgba(0, 94, 162); color: rgba(255, 255, 255);">
            </form>
        </div>
    </div>
</template>

<script>
import Header from '../../components/Header';

export default {
    components: {
        Header
    },
    data() {
        return {
            voter: {
                party: null
            }
        }
    },
    methods: {
        processParty() {
            console.log("voter after page 7: ", this.voter);
            this.$router.push({ path: 'RaceOrEthnicity'})
        }
        
    }
}
</script>

<style scoped>

</style>