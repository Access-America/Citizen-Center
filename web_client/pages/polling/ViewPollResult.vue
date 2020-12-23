<template>
    <div>
        <div v-for="poll in pollResults" :key="poll.pollId">
            <ul v-show="poll.pollId === test_poll_id">
                <li v-for="result in poll.results" :key="result.answerId">
                    {{ result.totalCount }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ViewPollResult',
    data() {
        return {
            test_poll_id: 'efbc7f93-17d9-49d2-b9bb-e806c928ee52',
            pollResults: [
                {
                    pollId: 'efbc7f93-17d9-49d2-b9bb-e806c928ee52',
                    results: [
                        {
                            answerId: '8930edac-e75e-42e4-8780-533dfd893b25',
                            totalCount: 42,
                        },
                        {
                            answerId: 'd071d167-6218-4c32-9f97-6c665afa5225',
                            totalCount: 16,
                        },
                        {
                            answerId: '9902cad9-9940-4f27-ada3-67a4609f44d5',
                            totalCount: 40,
                        },
                    ],
                },
                {
                    pollId: '71a7fe82-e9f7-42e7-b936-c8d435591089',
                    results: [
                        {
                            answerId: 'c24c6ece-981c-44d2-816d-1f340aea2741',
                            totalCount: 42,
                        },
                        {
                            answerId: '60d44d11-53ef-4a85-aa25-b26a56e5e643',
                            totalCount: 50,
                        },
                        {
                            answerId: '53d2df5c-4310-4cfa-b2ea-51866d9e0d62',
                            totalCount: 422,
                        },
                    ],
                },
            ],
        }
    },
    methods: {
        getPollBreakdown() {
            axios
                .get(
                    `https://ccusbackendcontituentpolling.azurewebsites.net/api/v1/results/${pollId}`
                )
                .then((res) => {
                    console.log('res: ', res)
                })
                .catch((err) => {
                    console.error(err)
                })
        },
    },
}
</script>

<style scoped></style>
