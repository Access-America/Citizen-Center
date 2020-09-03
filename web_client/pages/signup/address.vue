<template>
    <div class="tw-min-h-screen tw-flex tw-flex-col">
        <Header>Citizen Center - Sign Up</Header>
        <div
            id="main-content"
            class="grid-container tw-mt-4 tw-flex-1 tw-w-full tw-flex tw-justify-center"
        >
            <form
                class="usa-form usa-form--large tw-w-full"
                @submit="checkForm"
            >
                <fieldset class="usa-fieldset">
                    <legend class="usa-legend">Mailing address</legend>
                    <label class="usa-label" for="mailing-address-1"
                        >Street address 1</label
                    >
                    <input
                        id="mailing-address-1"
                        v-model="streetAddress1"
                        class="usa-input"
                        name="mailing-address-1"
                        type="text"
                    />

                    <label class="usa-label" for="mailing-address-2"
                        >Street address 2
                        <span class="usa-hint">(optional)</span></label
                    >
                    <input
                        id="mailing-address-2"
                        v-model="streetAddress2"
                        class="usa-input"
                        name="mailing-address-2"
                        type="text"
                    />

                    <div class="grid-row grid-gap">
                        <div class="mobile-lg:grid-col-8">
                            <label class="usa-label" for="city">City</label>
                            <input
                                id="city"
                                v-model="city"
                                class="usa-input"
                                name="city"
                                type="text"
                            />
                        </div>
                        <div class="mobile-lg:grid-col-4">
                            <label class="usa-label" for="state">State</label>
                            <select
                                id="state"
                                v-model="state"
                                class="usa-select"
                                name="state"
                            >
                                <option value>- Select -</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                                <option value="AA"
                                    >AA - Armed Forces Americas</option
                                >
                                <option value="AE"
                                    >AE - Armed Forces Africa</option
                                >
                                <option value="AE"
                                    >AE - Armed Forces Canada</option
                                >
                                <option value="AE"
                                    >AE - Armed Forces Europe</option
                                >
                                <option value="AE"
                                    >AE - Armed Forces Middle East</option
                                >
                                <option value="AP"
                                    >AP - Armed Forces Pacific</option
                                >
                            </select>
                        </div>
                    </div>

                    <label class="usa-label" for="zip">ZIP</label>
                    <input
                        id="zip"
                        v-model="zipCode"
                        class="usa-input usa-input--medium"
                        name="zip"
                        type="text"
                        pattern="[\d]{5}(-[\d]{4})?"
                    />

                    <div class="tw-flex tw-flex-col tw-items-end tw-mt-6">
                        <div class="tw-mt-6">
                            <input
                                class="usa-button"
                                type="submit"
                                value="Finished"
                            />
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default {
    name: 'Address',
    components: { Footer, Header },
    data() {
        return {
            errors: [],
            streetAddress1: null,
            streetAddress2: null,
            city: null,
            state: null,
            zipCode: null
        }
    },
    methods: {
        checkForm(e) {
            this.errors = []

            if (
                !!this.streetAddress1 &&
                !!this.city &&
                !!this.state &&
                !!this.zipCode
            ) {
                this.$router.push({ path: '/signup/success' })
            } else {
                this.errors.push('Please check all fields')
            }

            e.preventDefault()
        }
    }
}
</script>

<style scoped></style>
