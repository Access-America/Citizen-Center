<template>
    <div>
        <Header>Citizen Portal - Voter Registration</Header>

        <div class="px-3 mx-auto">
            <h1 class="mt-1 text-4xl font-bold text-center text-primary">2. Home Address</h1>

            <form @submit.prevent="processAddress()" class="mt-5 text-2xl text-center text-base-darkest">
                <div>
                    <label for="streetAddr1">Street Address 1</label><br>
                    <input type="text" id="streetAddr1" v-model="voter.address1">
                </div>
                <div>
                    <label for="streetAddr2">Street Address 2 (optional)</label><br>
                    <input type="text" id="streetAddr2" v-model="voter.address2">
                </div>
                <div>
                    <label for="city">City</label><br>
                    <input type="text" id="city" v-model="voter.city">
                </div>
                <br />
                <div>
                    <h4>Will you be registering to vote at a different address where you get mail?</h4>
                    <input type="radio" id="test1" value="yes" v-model="voter.diffAddr">
                    <label for="test1">Yes</label>
                    <input type="radio" class="spacer" id="test2" value="no" v-model="voter.diffAddr">
                    <label for="test2">No</label><br>
                </div>
                <br />
                
                <input type="submit" value="Enter Address" style="padding: 1.5rem; background-color: rgba(0, 94, 162); color: rgba(255, 255, 255);">
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
                address1: '',
                address2: '',
                city: '',
                diffAddr: null
            }  
        }
    },
    methods: {
        processAddress() {
            this.$router.push({ path: 'AlternateAddress'})
        }
    }
    
}
</script>

<style scoped>
input[type="text"] {
    border: 1px solid black;
    padding: 5px;
    margin-bottom: 10px;
}

.spacer {
  margin-left: 40px;
}

</style>