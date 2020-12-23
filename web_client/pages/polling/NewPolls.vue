<template>
    <div>
        <div v-if="answeredAll === true">
            You're all caught up-- Great job making your voice heard!
        </div>
        <div v-else class="ml-15 mb-15">
            <h1 class="text-heading-lg md:text-heading-m font-heading mb-2">
                Polls for You
            </h1>
            <form @submit.prevent="goToPollDetails">
                <ul style="line-height: 1.8">
                    <div v-for="(poll, index) in prodPolls" :key="poll.pollId">
                        <li v-if="index <= pollsToShow">
                            <input
                                :id="poll.pollIid"
                                v-model="picked"
                                type="radio"
                                :value="poll.pollId"
                            />
                            <label :for="poll.pollId">
                                {{ poll.title }}
                                <br />
                                <span>{{ poll.endDateTimeUtc }}</span>
                            </label>
                        </li>
                    </div>
                </ul>
                <input type="submit" value="Participate" />
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'NewPolls',
    data() {
        return {
            picked: '',
            answeredAll: false,
            prodPolls: [],
            pollsToShow: 2,
            userSpecificPolls: [
                {
                    pollId: 'efbc7f93-17d9-49d2-b9bb-e806c928ee52',
                    short: 'Electoral College & the Popular Vote',
                    description:
                        'Should the USA ban Electoral College and rely soley on the Popular vote to elect the President of the United States?',
                    displayOrder: 1,
                    expiration_date: '12.31.2020 - 8:30PM PST',
                    answers: [
                        {
                            answerId: '8930edac-e75e-42e4-8780-533dfd893b25',
                            description: 'Yes',
                            displayOrder: 1,
                        },
                        {
                            answerId: 'd071d167-6218-4c32-9f97-6c665afa5225',
                            description: 'No',
                            displayOrder: 2,
                        },
                        {
                            answerId: '9902cad9-9940-4f27-ada3-67a4609f44d5',
                            description: 'Undecided',
                            displayOrder: 3,
                        },
                    ],
                },
                {
                    pollId: '71a7fe82-e9f7-42e7-b936-c8d435591089',
                    short: 'Legalization of Marijuana',
                    description: 'Should marijuana be legalized?',
                    displayOrder: 2,
                    expiration_date: '12.31.2020 - 8:30PM PST',
                    answers: [
                        {
                            answerId: 'c24c6ece-981c-44d2-816d-1f340aea2741',
                            description: 'Yes',
                            displayOrder: 1,
                        },
                        {
                            answerId: '60d44d11-53ef-4a85-aa25-b26a56e5e643',
                            description: 'No',
                            displayOrder: 2,
                        },
                        {
                            answerId: '53d2df5c-4310-4cfa-b2ea-51866d9e0d62',
                            description: 'Decriminalized yes, not legalized',
                            displayOrder: 3,
                        },
                    ],
                },
            ],
        }
    },
    async created() {
        this.prodPolls = await this.getUserSpecificPolls()
        console.log('electoral college answers: ', this.prodPolls[2].answers)
    },
    methods: {
        // if you provide Auth --> get polls specific to a state, city, etc.
        getUserSpecificPolls() {
            return new Promise((resolve, reject) => {
                axios
                    .get(
                        'https://ccusbackendcontituentpolling.azurewebsites.net/api/v1/polls'
                    )
                    .then((res) => {
                        console.log('res: ', res.data)
                        resolve(res.data)
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },
        goToPollDetails() {
            if (this.picked) {
                console.log('form poll id: ', this.picked)
                this.$emit('clicked', this.picked)
            }
        },
        async expandAndRerender() {
            this.pollsToShow += 2
            this.prodPolls = await this.getUserSpecificPolls()
        },
    },
}
</script>

<style scoped>
li {
    padding: 10px;
}

label {
    margin-left: 10px;
}

span {
    margin-left: 25px;
}

input[type='radio'] {
    transform: scale(2);
}

input[type='submit'] {
    float: right;
    margin-top: 20px;
    margin-right: 100px;
    margin-bottom: 20px;
    padding: 12px;
    color: white;
    background-color: rgba(39, 39, 250, 0.763);
}
</style>
