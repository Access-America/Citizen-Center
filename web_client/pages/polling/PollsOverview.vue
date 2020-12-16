<template>
    <div>
        <Header />
        <h1 style="text-align: center; font-weight: bold; margin-top: 80px;">On the Pulse</h1>
        <div style="display: flex; margin-left: 400px;">
            <div style="width: 250px; margin: 20px;">
                <img src="https://cdn.pixabay.com/photo/2012/04/24/17/47/scale-40635_1280.png" alt="Poll icon" style="object-fit: contain;">
            </div>
            <div>
                <button v-show="hideTabs === false" v-for="tab in tabs" :key="tab" @click="selected = tab;" :class="['tab-btn', { active: selected === tab }]">
                    {{ tab }}
                </button>
                <component :is="selected" @clicked="onPollChoice" v-bind:pollId="pollId"></component>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import New from './NewPolls';
import VoteCast from './ParticipatedPolls';
import VoteOnPoll from './VoteOnPoll';

export default {
    name: "PollsOverview",
    components: {
        Header,
        Footer,
        New,
        VoteCast,
        VoteOnPoll
    },
    data() {
        return {
            tabs: ["New", "VoteCast"],
            selected: "New",
            hideTabs: false,
        }
    },
    props: [
        'pollId'
    ],
    methods: {
        onPollChoice(value) {
            console.log('value: ', value);
            this.selected = "VoteOnPoll";
            this.hideTabs = true;
            this.$props.pollId = value;
        }
    },
    created() {
    }
}
</script>

<style scoped>


.tab-btn {
  padding: 12px;
  width: 300px;
  cursor: pointer;
  margin-bottom: 1rem;
  border: 2px solid #cccccc;
  outline: none;
  color: blue;
}

.active {
  background-color: rgba(39, 39, 250, 0.763);
  color: white;
}

.tab {
  border: 1px solid #ccc;
  padding: 10px;
  
}

</style>