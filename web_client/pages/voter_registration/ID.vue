<template>
    <div>
        <Header />
        <div class="px-3 mx-auto">
            <h1 class="mt-1 text-4xl font-bold text-center text-primary">6. We need ID to identify who is registering.</h1>
            <small class="mt-1 text-xl text-center">Social Security Number / Driver's License / Last Four of Social Security</small>
            <form @submit.prevent="processId()" class="mt-5 text-2xl text-center text-base-darkest">
                <div>
                    <label for="id">ID Number</label><br>
                    <input type="text" id="id" v-model="voter.ID">
                </div>
                <br />
                <input type="submit" value="Enter ID" style="padding: 1.5rem; background-color: rgba(0, 94, 162); color: rgba(255, 255, 255);">
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
                ID: ''
            }
        }
    },
    methods: {
        processId() {
            console.log("voter from page 6: ", this.voter);
            this.$router.push({ path: 'PartyChoice'})
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

</style>