<template>
    <div>
        <h1
            style="font-weight: bold; margin-top: 80px"
            class="block sm:hidden text-heading-lg md:text-heading-xl font-heading font-bold text-center"
        >
            On the Pulse
        </h1>

        <div style="display: flex" class="max-w-desktop m-auto flex-wrap">
            <div
                style="
                    width: 250px;
                    margin: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                "
            >
                <img
                    src="https://cdn.pixabay.com/photo/2012/04/24/17/47/scale-40635_1280.png"
                    alt="Poll icon"
                    style="object-fit: contain; min-width: 150px"
                />
            </div>
            <div>
                <h1
                    style="font-weight: bold; margin-top: 80px"
                    class="hidden sm:block text-heading-lg md:text-heading-xl font-heading font-bold mb-3"
                >
                    On the Pulse
                </h1>
                <button
                    v-for="tab in tabs"
                    v-show="hideTabs === false"
                    :key="tab"
                    :class="['tab-btn', { active: selected === tab }]"
                    @click="selected = tab"
                >
                    {{ tab }}
                </button>
                <component
                    :is="selected"
                    :poll-id="pollId"
                    @clicked="onPollChoice"
                ></component>
            </div>
        </div>
    </div>
</template>

<script>
import New from './NewPolls'
import VoteCast from './ParticipatedPolls'
import VoteOnPoll from './VoteOnPoll'

export default {
    name: 'PollsOverview',
    components: {
        New,
        VoteCast,
        VoteOnPoll,
    },
    data() {
        return {
            tabs: ['New', 'VoteCast'],
            selected: 'New',
            hideTabs: false,
            pollId: '',
        }
    },
    methods: {
        onPollChoice(value) {
            console.log('value: ', value)
            if (value === 'VoteCast') {
                this.selected = 'VoteCast'
                this.hideTabs = false
            } else {
                this.selected = 'VoteOnPoll'
                this.hideTabs = true
                this.pollId = value
            }
        },
    },
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
