[![Codacy Badge](https://api.codacy.com/project/badge/Grade/faa0510f10004aafb0ababf17b08887c)](https://app.codacy.com/gh/Citizenship-Portal/Frontend-Development?utm_source=github.com&utm_medium=referral&utm_content=Citizenship-Portal/Frontend-Development&utm_campaign=Badge_Grade_Settings)
[![Pull Requests Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)
[![Setup Automated](https://img.shields.io/badge/setup-automated-blue?logo=gitpod)](https://gitpod.io/from-referrer/)

# Citizenship Portal

> Initial demo of what a Citizenship Portal could look like.

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Live Demo
https://citizenshipportal.org

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Citizenship-Portal/Frontend-Development)



# Testing 
- [Vue Test Utils](https://vue-test-utils.vuejs.org)
- [Jest](https://jestjs.io)
- [jest-dom](github.com/testing-library/jest-dom)

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
  This serves as a reminder for the developer to step back and take a look at the **HTML** document

  If things look good, update the snapshots 

  