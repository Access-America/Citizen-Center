<template>
    <div>
        <Header>Citizen Portal - Voter Registration</Header>


        <div class="px-3 mx-auto">
            <h1 class="mt-1 text-4xl font-bold text-center text-primary">3. Alternate Address</h1>

        
            <form @submit.prevent="processAltAddress()" class="mt-5 text-2xl text-center text-base-darkest">
                <div>
                    <label for="streetAddr1">Street Address 1</label><br />
                    <input type="text" id="streetAddr1" v-model="voter.altAddress1">
                </div>
                <div>
                    <label for="streetAddr2">Street Address 2 (optional)</label><br />
                    <input type="text" id="streetAddr2" v-model="voter.altAddress2">
                </div>
                <div>
                    <div>
                        <label for="city">City</label><br />
                        <input type="text" id="city" v-model="voter.altCity">
                    </div>
                    <div>
                        <label for="state">State</label><br />
                        <input type="text" id="state" v-model="voter.altState">
                    </div>
                </div>
                <div>
                    <label for="zip">Zip</label><br />
                    <input type="text" id="zip" v-model="voter.altZip">
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
                altAddress1: '',
                altAddress2: '',
                altCity: '',
                altState: '',
                altZip: ''
            }

        }
    },
    methods: {
        processAltAddress() {
            this.$router.push({ path: 'Birthday'})
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