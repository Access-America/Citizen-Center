<template>
    <div>
        <div v-if="no_polls_answered === true">
            To see results here, you need to vote in your first active poll.
        </div>
        <div style="display: flex; margin-top: 20px;">
            <div style="flex: 1;">   
                <h2 style="font-size: 24px;">Previous Polls</h2>
            </div>
            <div style="flex: 1;">
                <form>
                    <div style="display: flex;">
                        <input type="text" placeholder="Search Polls" v-model="search_term">
                        <input type="submit" value="Search">
                    </div>
                </form>
            </div>
        </div>

        <!-- <div>
            <ul>
                <li v-for="result in pollResults" :key="result.pollId">

                </li>
            </ul>
        </div> -->



        
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "VoteCast",
    props: [

    ],
    data() {
        return {
            search_term: '',
            no_polls_answered: false,
            pollResults: [
                {
                    "pollId": "efbc7f93-17d9-49d2-b9bb-e806c928ee52",
                    "results": [
                        {
                            "answerId": "8930edac-e75e-42e4-8780-533dfd893b25",
                            "totalCount": 42
                        },
                        {
                            "answerId": "d071d167-6218-4c32-9f97-6c665afa5225",
                            "totalCount": 16
                        },
                        {
                            "answerId": "9902cad9-9940-4f27-ada3-67a4609f44d5",
                            "totalCount": 40
                        }
                    ]
                },
                {
                    "pollId": "71a7fe82-e9f7-42e7-b936-c8d435591089",
                    "results": [
                        {
                            "answerId": "c24c6ece-981c-44d2-816d-1f340aea2741",
                            "totalCount": 42
                        },
                        {
                            "answerId": "60d44d11-53ef-4a85-aa25-b26a56e5e643",
                            "totalCount": 50
                        },
                        {
                            "answerId": "53d2df5c-4310-4cfa-b2ea-51866d9e0d62",
                            "totalCount": 422
                        }
                    ]
                }
            ],
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
        //from search input
        searchPolls() {

        }
        // getUserResults(userId, pollId) {
        //     axios.get(`https://ccusbackendcontituentpolling.azurewebsites.net/api/v1/${userId}/polls/${pollId}`)
        //         .then((res) => {
        //             console.log('res: ', res);
        //         })
        //         .catch((err) => {
        //             console.error(err);
        //         })

        // }


        //get all poll results
        // getPollResults() {
        //     axios.get('https://ccusbackendcontituentpolling.azurewebsites.net/api/v1/results')
        //         .then((res) => {
        //             console.log('res: ', res);
        //         })
        //         .catch((err) => {
        //             console.error(err);
        //         })
        // }

    },
    async created() {
        //await this.getPollResults();
    }
    
}
</script>

<style scoped>
input[type="text"] {
    border: 1px solid black;
    padding: 5px;
}

input[type="submit"] {
    padding: 12px;
    color: white;
    background-color: rgba(39, 39, 250, 0.763);
}

</style>