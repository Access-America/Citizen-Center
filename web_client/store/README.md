# STORE

**This directory is not required, you can delete it if you don't want to use it.**

This directory contains your Vuex Store files.
Vuex Store option is implemented in the Nuxt.js framework.

Creating a file in this directory automatically activates the option in the framework.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/vuex-store).


# Testing 

 ### Get Started

` npm run test:watch `

 -- [Edd Yerburgh - Unit testing Vue components Why test, what to test, and how to test Vue components](https://www.youtube.com/watch?v=LxXsGNXsMo8&t=1092s)

 ### What to Test

 - Snapshot tests
  ``` 
  it('matches snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
  ```
  This serves as a reminder for the developer to step back and take a look at the **HTML** changes

  If things look good, update the snapshots 

  