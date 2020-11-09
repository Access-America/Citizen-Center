[![Pull Requests Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)

# Citizen Center

## Build Setup

```bash
# clone this project
$ git clone https://https://github.com/Access-America/Citizen-Center

# cd into the Nuxt directory
$ cd web_client

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

https://www.citizencenter.us

# Testing

-   [Vue Test Utils](https://vue-test-utils.vuejs.org)
-   [Jest](https://jestjs.io)
-   [jest-dom](github.com/testing-library/jest-dom)

### Get Started

`yarn test:watch`

-   [Edd Yerburgh - Unit testing Vue components Why test, what to test, and how to test Vue components](https://www.youtube.com/watch?v=LxXsGNXsMo8&t=1092s)

### What to Test

-   Snapshot tests

```
it('matches snapshot', () => {
  expect(wrapper.html()).toMatchSnapshot()
})
```

This serves as a reminder for the developer to step back and take a look at the **HTML** document

If things look good, update the snapshots
