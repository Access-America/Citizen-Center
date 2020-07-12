export const state = () => ({
  acceptedDisclaimer: false
})

export const mutations = {
  accept (state) {
    state.acceptedDisclaimer = true
  }
}
