<template>
    <div>
        <div v-if="no_polls_answered === true">
            To see results here, you need to vote in your first active poll.
        </div>
        <div style="display: flex; margin-top: 20px">
            <div style="flex: 1">
                <h2 style="font-size: 24px">Previous Polls</h2>
            </div>
            <div style="flex: 1">
                <form>
                    <div style="display: flex">
                        <input
                            v-model="search_term"
                            type="text"
                            placeholder="Search Polls"
                        />
                        <input type="submit" value="Search" />
                    </div>
                </form>
            </div>
        </div>

        <div style="display: flex">
            <div class="mb-10">
                <ul style="line-height: 1.8">
                    <li
                        v-for="poll in userAnsweredPolls"
                        :key="poll.pollId"
                        class="pt-5"
                    >
                        <input
                            :id="poll.pollId"
                            v-model="showAnswersFor"
                            type="radio"
                            :value="poll.pollId"
                        />
                        <label :for="poll.pollId" class="pl-1">
                            {{ mapping[poll.pollId] }}
                            <br />
                            You voted:
                            {{ answer_mappings[poll.pollId][poll.answerId] }}
                        </label>
                    </li>
                </ul>
            </div>

            <div v-if="showAnswersFor !== ''" class="pt-5 ml-15">
                {{ getPollResults }}
                <ul>
                    <li v-for="answer in answerList" :key="answer.answerId">
                        <span>
                            {{
                                answer_mappings[showAnswersFor][answer.answerId]
                            }}
                        </span>
                        <span class="ml-5">{{ answer.totalCount }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'VoteCast',
    data() {
        return {
            search_term: '',
            no_polls_answered: false,
            userAnsweredPolls: [],
            showAnswersFor: '',
            answerList: [],
            mapping: {
                'efbc7f93-17d9-49d2-b9bb-e806c928ee52': 'Electoral College',
                'ce173957-cbcd-4ead-9f83-7d3522b26a52': 'Stimulus Checks',
                '1f334019-14a7-4b38-a85e-05c2b9e82906':
                    'Andrew Yang - Mayor NYC',
            },
            answer_mappings: {
                'efbc7f93-17d9-49d2-b9bb-e806c928ee52': {
                    '0d5f5ae3-d3d5-4828-ac8c-ab537a97c97d': 'Strongly in favor',
                    '8930edac-e75e-42e4-8780-533dfd893b25': 'In favor',
                    '9902cad9-9940-4f27-ada3-67a4609f44d5': 'Neutral',
                    'd071d167-6218-4c32-9f97-6c665afa5225': 'Against',
                    'dd9dab75-cf70-4ddf-908b-b5544e662fd3': 'Strongly Against',
                },
                'ce173957-cbcd-4ead-9f83-7d3522b26a52': {
                    'f49a8954-f4ff-4c5f-bc8d-85d985616b94': 'Strongly in favor',
                    'a9cfe834-cfcb-42be-b82a-28d277e78695': 'In favor',
                    '5334b364-17d4-48cc-a11f-89700e79657b': 'Neutral',
                    '77df0787-51e4-4b60-87d1-544f78fd53a2': 'Against',
                    '1455bd27-8936-4e96-afc5-0f685b46992d': 'Strongly Against',
                },
                '1f334019-14a7-4b38-a85e-05c2b9e82906': {
                    '1d0a095a-0c8e-4e82-aaa3-f5dfe9f84ccf': 'Strongly in favor',
                    '059b9a1c-ae9d-4c4b-8166-9620fb8d65f6': 'In favor',
                    'e339b815-2efb-49f5-a884-0086578e9b09': 'Neutral',
                    '84c72fb5-4247-4ef9-8bf2-7e4859831e1e': 'Against',
                    '3c03d365-01f5-4ad8-8b18-5cfd26f0e1d7': 'Strongly Against',
                },
            },
        }
    },
    computed: {
        getPollResults() {
            axios
                .get(
                    `https://ccusbackendcontituentpolling.azurewebsites.net/api/v1/results/${this.showAnswersFor}`,
                    {
                        headers: {
                            Authorization:
                                'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsifQ.eyJleHAiOjE2MDgxNjAwNTIsIm5iZiI6MTYwODE1NjQ1MiwidmVyIjoiMS4wIiwiaXNzIjoiaHR0cHM6Ly91c2NpdGl6ZW5jZW50ZXIuYjJjbG9naW4uY29tLzc5YzUzOGFjLTYwYWMtNDQ2MC04NWM5LWY0YWFhYjdlM2YyOC92Mi4wLyIsInN1YiI6ImI4YWExN2E4LTc3NTctNGQ2ZC1hNGM2LWQ2NzU3ZjExODFkYyIsImF1ZCI6ImI5NzIwNGQ5LTIyMDktNGZmYi1iYjEyLWNhNGRlYTNhZjliMyIsIm5vbmNlIjoiODQzY2FhNjMtNmJhZS00YzllLTk4YWEtOTU4NDkxOGMyNmY3IiwiaWF0IjoxNjA4MTU2NDUyLCJhdXRoX3RpbWUiOjE2MDgxNTY0NTIsIm9pZCI6ImI4YWExN2E4LTc3NTctNGQ2ZC1hNGM2LWQ2NzU3ZjExODFkYyIsInRmcCI6IkIyQ18xX3Npc3UifQ.nxKEqvYPuhgPGdLCW0KafMjr5MlgtuYZhUlyZjL_7_J9wOmyURvzondVSDIThkYtbw-hk5zX9hzgkNj-fZkU34gV0ZusFavA3FKCR2zMeUnnsWKR8M4MUpfHAll2nU3kj8HfztVl11OUiJJk5wm5GfJ8IrwuqS0yLiCpC-geYhb2Pu7rj1DfDmrxRfz-bLaZ2hQra4O-C8ukI49UaorbBgh5L6_LfuJxZbOdkjEGFWysHCZ2hCkK-Gbo1FzCR3bsY822tOjtzDXSORerxcS38Lc-uOoV7dQ-pJSJkrIPay6YODJSafVfa42t3qUpNWLwhE3pGKxEfeOEN9yQkULpAA',
                        },
                    }
                )
                .then((res) => {
                    console.log('poll answers: ', res.data)
                    this.answerList = res.data
                })
                .catch((err) => {
                    console.error(err)
                })
        },
    },
    async created() {
        this.userAnsweredPolls = await this.getUserResults()
    },
    methods: {
        getUserResults() {
            const userId = 'b8aa17a8-7757-4d6d-a4c6-d6757f1181dc'
            return new Promise((resolve, reject) => {
                axios
                    .get(
                        `https://ccusbackendcontituentpolling.azurewebsites.net/api/v1/${userId}/polls`,
                        {
                            headers: {
                                Authorization:
                                    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsifQ.eyJleHAiOjE2MDgxNjAwNTIsIm5iZiI6MTYwODE1NjQ1MiwidmVyIjoiMS4wIiwiaXNzIjoiaHR0cHM6Ly91c2NpdGl6ZW5jZW50ZXIuYjJjbG9naW4uY29tLzc5YzUzOGFjLTYwYWMtNDQ2MC04NWM5LWY0YWFhYjdlM2YyOC92Mi4wLyIsInN1YiI6ImI4YWExN2E4LTc3NTctNGQ2ZC1hNGM2LWQ2NzU3ZjExODFkYyIsImF1ZCI6ImI5NzIwNGQ5LTIyMDktNGZmYi1iYjEyLWNhNGRlYTNhZjliMyIsIm5vbmNlIjoiODQzY2FhNjMtNmJhZS00YzllLTk4YWEtOTU4NDkxOGMyNmY3IiwiaWF0IjoxNjA4MTU2NDUyLCJhdXRoX3RpbWUiOjE2MDgxNTY0NTIsIm9pZCI6ImI4YWExN2E4LTc3NTctNGQ2ZC1hNGM2LWQ2NzU3ZjExODFkYyIsInRmcCI6IkIyQ18xX3Npc3UifQ.nxKEqvYPuhgPGdLCW0KafMjr5MlgtuYZhUlyZjL_7_J9wOmyURvzondVSDIThkYtbw-hk5zX9hzgkNj-fZkU34gV0ZusFavA3FKCR2zMeUnnsWKR8M4MUpfHAll2nU3kj8HfztVl11OUiJJk5wm5GfJ8IrwuqS0yLiCpC-geYhb2Pu7rj1DfDmrxRfz-bLaZ2hQra4O-C8ukI49UaorbBgh5L6_LfuJxZbOdkjEGFWysHCZ2hCkK-Gbo1FzCR3bsY822tOjtzDXSORerxcS38Lc-uOoV7dQ-pJSJkrIPay6YODJSafVfa42t3qUpNWLwhE3pGKxEfeOEN9yQkULpAA',
                            },
                        }
                    )
                    .then((res) => {
                        console.log('polls for this user: ', res)
                        resolve(res.data)
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },
    },
}
</script>

<style scoped>
input[type='text'] {
    border: 1px solid black;
    padding: 5px;
}

input[type='submit'] {
    padding: 12px;
    color: white;
    background-color: rgba(39, 39, 250, 0.763);
}

input[type='radio'] {
    transform: scale(2);
}
</style>
