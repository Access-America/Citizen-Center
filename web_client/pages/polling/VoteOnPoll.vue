<template>
    <div class="ml-5">
        <h2 class="text-heading-lg md:text-heading-m font-heading mb-2">
            Today's Issue
        </h2>
        <br />

        <div v-for="poll in userSpecificPolls" :key="poll.pollId" class="mb-15">
            <form
                v-if="poll.pollId === $props.pollId"
                @submit.prevent="recordUserAnswer"
            >
                <h3>{{ poll.description }}</h3>
                <ul>
                    <li v-for="answer in poll.answers" :key="answer.answerId">
                        <input
                            :id="answer.answerId"
                            v-model="answerPicked"
                            type="radio"
                            :value="answer.answerId"
                        />
                        <label :for="answer.answerId">{{
                            answer.description
                        }}</label>
                    </li>
                </ul>
                <input type="submit" value="Voice your opinion!" />
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'VoteOnPoll',
    props: ['pollId'],
    data() {
        return {
            answerPicked: '',
            userSpecificPolls: [
                {
                    pollId: 'efbc7f93-17d9-49d2-b9bb-e806c928ee52',
                    title: 'Electoral College',
                    description:
                        'What is your opinion on replacing the electoral college with a national popular vote?',
                    displayOrder: 1,
                    answers: [
                        {
                            answerId: '0d5f5ae3-d3d5-4828-ac8c-ab537a97c97d',
                            description: 'Strongly in favor',
                            displayOrder: 1,
                        },
                        {
                            answerId: '8930edac-e75e-42e4-8780-533dfd893b25',
                            description: 'In favor',
                            displayOrder: 2,
                        },
                        {
                            answerId: '9902cad9-9940-4f27-ada3-67a4609f44d5',
                            description: 'Neutral',
                            displayOrder: 3,
                        },
                        {
                            answerId: 'd071d167-6218-4c32-9f97-6c665afa5225',
                            description: 'Against',
                            displayOrder: 4,
                        },
                        {
                            answerId: 'dd9dab75-cf70-4ddf-908b-b5544e662fd3',
                            description: 'Strongly against',
                            displayOrder: 5,
                        },
                    ],
                },
                {
                    pollId: 'ce173957-cbcd-4ead-9f83-7d3522b26a52',
                    title: 'Stimulus Checks',
                    description:
                        'Should Congress pass a second round of stimulus checks?',
                    displayOrder: 2,
                    answers: [
                        {
                            answerId: 'f49a8954-f4ff-4c5f-bc8d-85d985616b94',
                            description: 'Strongly in favor',
                            displayOrder: 1,
                        },
                        {
                            answerId: 'a9cfe834-cfcb-42be-b82a-28d277e78695',
                            description: 'In favor',
                            displayOrder: 2,
                        },
                        {
                            answerId: '5334b364-17d4-48cc-a11f-89700e79657b',
                            description: 'Neutral',
                            displayOrder: 3,
                        },
                        {
                            answerId: '77df0787-51e4-4b60-87d1-544f78fd53a2',
                            description: 'Against',
                            displayOrder: 4,
                        },
                        {
                            answerId: '1455bd27-8936-4e96-afc5-0f685b46992d',
                            description: 'Strongly against',
                            displayOrder: 5,
                        },
                    ],
                },
                {
                    pollId: '1f334019-14a7-4b38-a85e-05c2b9e82906',
                    title: 'Andrew Yang - Mayor NYC',
                    description:
                        'How do you feel about Andrew Yang running for Mayor of New York?',
                    displayOrder: 3,
                    startDateTimeUtc: '2020-12-01T20:00:00Z',
                    endDateTimeUtc: '2020-12-30T23:30:00Z',
                    answers: [
                        {
                            answerId: '1d0a095a-0c8e-4e82-aaa3-f5dfe9f84ccf',
                            description: 'Strongly in favor',
                            displayOrder: 1,
                        },
                        {
                            answerId: '059b9a1c-ae9d-4c4b-8166-9620fb8d65f6',
                            description: 'In favor',
                            displayOrder: 2,
                        },
                        {
                            answerId: 'e339b815-2efb-49f5-a884-0086578e9b09',
                            description: 'Neutral',
                            displayOrder: 3,
                        },
                        {
                            answerId: '84c72fb5-4247-4ef9-8bf2-7e4859831e1e',
                            description: 'Against',
                            displayOrder: 4,
                        },
                        {
                            answerId: '3c03d365-01f5-4ad8-8b18-5cfd26f0e1d7',
                            description: 'Strongly against',
                            displayOrder: 5,
                        },
                    ],
                },
            ],
        }
    },
    methods: {
        recordUserAnswer() {
            const userId = 'b8aa17a8-7757-4d6d-a4c6-d6757f1181dc'
            if (this.answerPicked) {
                axios
                    .post(
                        `https://ccusbackendcontituentpolling.azurewebsites.net/api/v1/${userId}/polls/${this.$props.pollId}`,
                        { answerId: this.answerPicked },
                        {
                            headers: {
                                Authorization:
                                    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsifQ.eyJleHAiOjE2MDgxNjAwNTIsIm5iZiI6MTYwODE1NjQ1MiwidmVyIjoiMS4wIiwiaXNzIjoiaHR0cHM6Ly91c2NpdGl6ZW5jZW50ZXIuYjJjbG9naW4uY29tLzc5YzUzOGFjLTYwYWMtNDQ2MC04NWM5LWY0YWFhYjdlM2YyOC92Mi4wLyIsInN1YiI6ImI4YWExN2E4LTc3NTctNGQ2ZC1hNGM2LWQ2NzU3ZjExODFkYyIsImF1ZCI6ImI5NzIwNGQ5LTIyMDktNGZmYi1iYjEyLWNhNGRlYTNhZjliMyIsIm5vbmNlIjoiODQzY2FhNjMtNmJhZS00YzllLTk4YWEtOTU4NDkxOGMyNmY3IiwiaWF0IjoxNjA4MTU2NDUyLCJhdXRoX3RpbWUiOjE2MDgxNTY0NTIsIm9pZCI6ImI4YWExN2E4LTc3NTctNGQ2ZC1hNGM2LWQ2NzU3ZjExODFkYyIsInRmcCI6IkIyQ18xX3Npc3UifQ.nxKEqvYPuhgPGdLCW0KafMjr5MlgtuYZhUlyZjL_7_J9wOmyURvzondVSDIThkYtbw-hk5zX9hzgkNj-fZkU34gV0ZusFavA3FKCR2zMeUnnsWKR8M4MUpfHAll2nU3kj8HfztVl11OUiJJk5wm5GfJ8IrwuqS0yLiCpC-geYhb2Pu7rj1DfDmrxRfz-bLaZ2hQra4O-C8ukI49UaorbBgh5L6_LfuJxZbOdkjEGFWysHCZ2hCkK-Gbo1FzCR3bsY822tOjtzDXSORerxcS38Lc-uOoV7dQ-pJSJkrIPay6YODJSafVfa42t3qUpNWLwhE3pGKxEfeOEN9yQkULpAA',
                            },
                        }
                    )
                    .then((res) => {
                        console.log('res: ', res.data)
                        this.goToAnswerDetails()
                    })
                    .catch((err) => {
                        console.error(err)
                    })
            }
        },
        goToAnswerDetails() {
            console.log('answer picked: ', this.answerPicked)
            this.$emit('clicked', 'VoteCast')
        },
    },
}
</script>

<style scoped>
input[type='radio'] {
    transform: scale(2);
}

li {
    padding: 10px;
}

label {
    margin-left: 10px;
}

input[type='submit'] {
    margin-top: 20px;
    margin-left: 300px;
    padding: 12px;
    color: white;
    background-color: rgba(39, 39, 250, 0.763);
}
</style>
