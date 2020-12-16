<template>
    <div style="margin-left: 30px;">
        <h2 style="font-size: 24px;">Today's Issue</h2><br>
        <div v-for="poll in userSpecificPolls" :key="poll.pollId">
            <form v-if="poll.pollId === $props.pollId" @submit.prevent="recordUserAnswer">
                <ul>
                    <h3 style="width: 50%; margin-bottom: 20px; font-size: 18px;">{{poll.description}}</h3>
                    <li v-for="answer in poll.answers" :key="answer.answerId">
                        <input type="radio" v-bind:id="answer.answerId" v-bind:value="answer.description" v-model="answerPicked">
                        <label :for="answer.answerId">{{ answer.description }}</label>
                    </li>
                </ul>
                <input type="submit" value="Voice your opinion!">
            </form>
        </div>

        <span>Answer picked: {{answerPicked}}</span>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "VoteOnPoll",
    props: ['pollId'],
    data() {
        return {
            answerPicked: '',
            pollDescription: '',
            answers: [],
            userSpecificPolls: [
                {
                    "pollId": "efbc7f93-17d9-49d2-b9bb-e806c928ee52",
                    "short": "Electoral College & the Popular Vote",
                    "description": "Should the USA ban Electoral College and rely soley on the Popular vote to elect the President of the United States?",
                    "displayOrder": 1,
                    "expiration_date": "12.31.2020 - 8:30PM PST",
                    "answers": [
                        {
                            "answerId": "8930edac-e75e-42e4-8780-533dfd893b25",
                            "description": "Yes",
                            "displayOrder": 1
                        },
                        {
                            "answerId": "d071d167-6218-4c32-9f97-6c665afa5225",
                            "description": "No",
                            "displayOrder": 2
                        },
                        {
                            "answerId": "9902cad9-9940-4f27-ada3-67a4609f44d5",
                            "description": "Undecided",
                            "displayOrder": 3
                        }
                    ]
                },
                {
                    "pollId": "71a7fe82-e9f7-42e7-b936-c8d435591089",
                    "short": "Legalization of Marijuana",
                    "description": "Should marijuana be legalized?",
                    "displayOrder": 2,
                    "expiration_date": "12.31.2020 - 8:30PM PST",
                    "answers": [
                        {
                            "answerId": "c24c6ece-981c-44d2-816d-1f340aea2741",
                            "description": "Yes",
                            "displayOrder": 1
                        },
                        {
                            "answerId": "60d44d11-53ef-4a85-aa25-b26a56e5e643",
                            "description": "No",
                            "displayOrder": 2
                        },
                        {
                            "answerId": "53d2df5c-4310-4cfa-b2ea-51866d9e0d62",
                            "description": "Decriminalized yes, not legalized",
                            "displayOrder": 3
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        async getPollById() {
            console.log('props id: ', this.$props.pollId);
            axios.get(`https://ccusbackendcontituentpolling.azurewebsites.net/api/v1/polls/${this.$props.pollId}`)
                .then((res) => {
                    console.log('res: ', res);
                })
                .catch((err) => {
                    console.error(err);
                })
        },
        async recordUserAnswer() {
            if (this.answerPicked) {
                 axios.post(`https://ccusbackendcontituentpolling.azurewebsites.net/api/v1/${userId}/polls/${pollId}`, { headers: { Authorization: '' }})
                    .then((res) => {
                        console.log('res: ', res);
                        goToAnswerDetails();
                    })
                    .catch((err) => {
                        console.error(err);
                    })
            }
           
        },
        goToAnswerDetails() {
            if (this.answerPicked) {
                console.log('answer picked: ', this.answerPicked);
                this.$emit('clicked', this.answerPicked);
            }
        }
    },
    async created() {
        await this.getPollById();
    }
    
}
</script>

<style scoped>



input[type="radio"] {
    transform: scale(2);
}


li {
    padding: 10px;
}

label {
    margin-left: 10px;
}

input[type="submit"] {
    margin-top: 20px;
    margin-left: 300px;
    padding: 12px;
    color: white;
    background-color: rgba(39, 39, 250, 0.763);
}
</style>