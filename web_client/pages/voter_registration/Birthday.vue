<template>
  <div>
    <Header/>
    <div class="px-3 mx-auto">
      <h1 class="mt-1 text-4xl font-bold text-center text-primary">4. Date of Birth</h1>
      <h5 class="mt-1 text-xl text-center">For example: 4 28 1986</h5>
      <form @submit.prevent="processBirthday()" class="mt-5 text-2xl text-center text-base-darkest">
        <div>
          <div>
            <label for="month">Month</label>
            <input type="text" id="month" v-model="voter.birthday_month" />
          </div>
          <div>
            <label for="day">Day</label>
            <input type="text" id="day" v-model="voter.birthday_day" />
          </div>
          <div>
            <label for="year">Year</label>
            <input type="text" id="year" v-model="voter.birthday_year" />
          </div>
        </div>
        <br />

        <input type="submit" value="Enter Date" style="padding: 1.5rem; background-color: rgba(0, 94, 162); color: rgba(255, 255, 255);"/>
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
          birthday_month: '',
          birthday_day: '',
          birthday_year: ''
      }
    }
  },
  methods: {
    processBirthday() {
      console.log("voter from page 4: ", this.voter);
      this.$router.push({ path: 'PhoneNumber'})
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