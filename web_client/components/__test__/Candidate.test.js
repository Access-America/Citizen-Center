import { shallowMount } from '@vue/test-utils'
import Candidate from '~/components/Candidate.vue'

// const wrapper = shallowMount(Candidate, {
//   propsData: {
//     ...props, profilePic: () => {}
//   }
// })

describe('Candidate', () => {
    const props = {
        name: 'Kamala Harris',
        affiliation: 'D',
        house: true,
        senate: false,
        contactURL: 'www.google.com',
        votingRecord: 'lol.com'
    }
    const profilePic = jest.fn()
    // eslint-disable-next-line no-unused-vars
    const wrapper = shallowMount(Candidate, {
        props,
        computed: { profilePic }
    })

    beforeEach(() => {})
    // Inspect the raw component options

    /*
    it('has a mounted hook', () => {
        // console.log(wrapper)
        expect(typeof Candidate.mounted).toBe('function')
    })
     */

    it('computed profilePic on load', () => {
        // eslint-disable-next-line no-unused-vars
        const profilePic = wrapper.find('img[alt="name"]')
        //  console.log(profilePic)
    })
})
