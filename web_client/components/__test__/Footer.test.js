import { shallowMount } from '@vue/test-utils'
import Footer from '~/components/Footer.vue'

const scrollSpy = jest.fn()
let wrapper

describe('Footer', () => {
  let toTop

  beforeEach(() => {
    wrapper = shallowMount(Footer)
    toTop = wrapper.find('[class*="return-to-top"] a')

    Object.defineProperty(global.window, 'scrollTo', { value: scrollSpy })
    Object.defineProperty(global.window, 'scrollY', { value: 100 })
    scrollSpy.mockClear()
  })

  it('returns a data object', () => {
    expect(typeof Footer.data).toBe('function')
  })

  it('matches snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('has a return to top button', () => {
    expect(toTop.exists()).toBeTruthy()
  })

  it('scrollToTop() is triggered properly', () => {
    toTop.trigger('click')
    expect(scrollSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})
