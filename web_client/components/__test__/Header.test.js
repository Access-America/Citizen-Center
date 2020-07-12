import { mount } from '@vue/test-utils'
import Header from '~/components/Header.vue'

let wrapper

describe('Header', () => {
  beforeEach(() => {
    // Mount the component
    wrapper = mount(Header)
  })

  it('returns a data object', () => {
    expect(typeof Header.data).toBe('function')
  })
  it('should be a Vue instance', () => {
    // expect(wrapper.isVisible()).toBeTruthy()
    expect(wrapper.find('form').exists()).toBeTruthy()
  })
  it('matches snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
