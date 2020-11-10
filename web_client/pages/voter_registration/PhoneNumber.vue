<template>
    <div>
        <Header />
        <div class="px-3 mx-auto">
            <h1 class="mt-1 text-4xl font-bold text-center text-primary">5. Telephone Number</h1>
            <small class="mt-1 text-xl text-center">(Optional) - if skipping, leave blank</small>
            <form @submit.prevent="processPhoneNum()" class="mt-5 text-2xl text-center text-base-darkest">
                <div>
                    <input type="text" v-model="voter.phoneNumber" placeholder="(###)-###-####">
                </div>
                <br />
                <input type="submit" value="Enter Number/Skip" style="padding: 1.5rem; background-color: rgba(0, 94, 162); color: rgba(255, 255, 255);">
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
                phoneNumber: ''
            }
        }
    },
    methods: {
        processPhoneNum() {
            console.log("voter from page 5: ", this.voter);
            this.$router.push({ path: 'ID'})

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