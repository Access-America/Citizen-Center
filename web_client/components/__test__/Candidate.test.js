import { shallowMount, mount } from '@vue/test-utils'
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
  const wrapper = shallowMount(Candidate, {
    props,
    computed: { profilePic }
  })

  beforeEach(() => {

  })
  // Inspect the raw component options
  it('has a created hook', () => {
    console.log(wrapper)
    expect(typeof Candidate.created).toBe('function')
  })

  // it('computed profilePic on load', () => {
  //   const profilePic = wrapper.find('img[alt="name"]')
  //   console.log(profilePic)
  // })
})
