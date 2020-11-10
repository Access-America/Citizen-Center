<template>
    <div>
        <Header />
        <div class="px-3 mx-auto">
            <h1 class="mt-1 text-4xl font-bold text-center text-primary">8. Which Race/Ethnicity Do You Identify As?</h1>

            <form @submit.prevent="processRaceOrEthnicity()" class="mt-5 text-2xl text-center text-base-darkest">
                <div>
                    <input type="radio" id="indian" value="American Indian or Alaskan Native" v-model="voter.ethnicity">
                    <label for="indian">American Indian or Alaskan Native</label><br>
                    <input type="radio" id="asian" value="Asian or Pacific Islander" v-model="voter.ethnicity">
                    <label for="asian">Asian or Pacific Islander</label><br>
                    <input type="radio" id="black" value="Black, not of Hispanic Origin" v-model="voter.ethnicity">
                    <label for="black">Black, not of Hispanic Origin</label><br>
                    <input type="radio" id="hispanic" value="Hispanic" v-model="voter.ethnicity">
                    <label for="hispanic">Hispanic</label><br>
                    <input type="radio" id="multiracial" value="Multi-racial" v-model="voter.ethnicity">
                    <label for="multiracial">Multi-racial</label><br>
                    <input type="radio" id="white" value="White, not of Hispanic Origin" v-model="voter.ethnicity">
                    <label for="white">White, not of Hispanic Origin</label><br>
                </div>
                <br />
                <input type="submit" value="Enter Ethnicity" style="padding: 1.5rem; background-color: rgba(0, 94, 162); color: rgba(255, 255, 255);">
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
                ethnicity: null
            }
        }
    },
    methods: {
        processRaceOrEthnicity() {
            console.log("voter after page 8: ", this.voter);
            this.$router.push({ path: '/voting/registration/Signature' })
        }
        
    }
    
}
</script>

<style scoped>

</style>

