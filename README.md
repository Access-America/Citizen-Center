[![Maintainability](https://api.codeclimate.com/v1/badges/86a32f9feb586dcafb43/maintainability)](https://codeclimate.com/github/Access-America/Citizen-Center/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/test_coverage)](https://codeclimate.com/github/codeclimate/codeclimate/test_coverage)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/ffe056e0994346dc9fd55637ed9cff65)](https://www.codacy.com/gh/Access-America/Citizen-Center?utm_source=github.com&utm_medium=referral&utm_content=Access-America/Citizen-Center&utm_campaign=Badge_Grade)

# [Humanity Forward's Citizen Center](https://www.beautiful.ai/player/-M7TXW9Wpl9Jqh3Azfwc/citizenship)

The Citizen Center is an open-source platform in development by [Humanity Forward](https://movehumanityforward.com/) and the [Yang Gang](https://www.youtube.com/watch?v=6Is7tdnnbYI). Through a familiar dashboard interface with a decentralized identity model, Americans will be able to connect with their government in a more secure, more simple and more instantaneous manner to propel our democracy into the 21st century.

Not quite sure what we're doing? [Check out our wiki for more information](https://github.com/Access-America/Citizen-Center/wiki)

# Project overview

## Right now: Giving the project a presence

- [x] Roadmap
- [x] [Architecture](https://drive.google.com/file/d/1GzIsZQIHb_xJLFwMRSAgMFQhFUlqKacQ/view)
- [x] CI/CD
- [x] Adding GitHub Issues based on Roadmap (feel free to create your own issues or pick up ones based on milestones)
- [ ] Breaking down Epics into smaller issues
- [ ] [UI/UX](https://www.figma.com/file/h0KXgHOhxSyttyzsosd2aN/Citizenship-Center?node-id=245%3A395)

## What's next: MVP

- [ ] SAML/OIDC sign-in with Guest level access. More privacy tiers will be provisioned based on the [Just-In-Time principle](https://www.cyberark.com/what-is/just-in-time-access/).
- [ ] Sign in form for trust level: Guest
- [ ] Option to subscribe to continuous updates about the project
- [ ] Account page to edit information
- [ ] Connecting a bank account
- [ ] Opt-in for Humanity Forward's UBI pilot program
- [ ] Register to vote
- [ ] Trust levels:
  - [ ] Visitor (no trust)
  - [ ] User (email/password)
  - [ ] Resident (out of scope for MVP, dependent on decentralized authentication strategy)
  - [ ] Citizen (out of scope for MVP, dependent on decentralized authentication strategy)


## In the [roadmap](https://github.com/Access-America/Citizen-Center/projects/2?fullscreen=true)

- [ ] Apply/Renew a Passport
- [ ] Filing federal taxes (maybe)
- [ ] Reviewing the voting histories of congressional representatives
- [ ] Connecting a bank account
- [ ] Contacting congressional representatives by way of jurisdiction or committee
- [ ] Reviewing special interest money in politics
- [ ] Viewing government actions
- [ ] Applying for Government Assistance Programs
- [ ] Having a digital and secure equivalent to a social security number
- [ ] Actually voting online?


# Contributing

- **If you'd like to be actively involved with the team,** you can [join our Discord](https://discord.gg/n74rXDV), where you can chat with us about the vision, new features, ideas, design, and get access to more documentation + ways to collaborate.
- **Anyone outside the team** is welcome to collaborate with us through [issues](https://github.com/Access-America/Citizen-Center/issues) and [pull requests](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork).

## Tech stack

The Citizen Center is a [Nuxt.js](https://nuxtjs.org/) app built on an a lightweight [Flask](https://github.com/pallets/flask) backend hosted on [Azure](https://azure.microsoft.com/en-us/), utilizing [Azure Functions](https://docs.microsoft.com/en-us/azure/azure-functions/functions-overview) for the API and [Azure SQL](https://docs.microsoft.com/en-us/azure/azure-sql/database/) for the database with [Redis](https://redis.io/documentation) for caching. The frontend is written in [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) and the backend is written in [Node.JS](https://nodejs.org/en/about/).

### Working on the Nuxt.js client

- **CSS:** [Tailwind](https://tailwindcss.com/#what-is-tailwind).
- **Interacting with APIs:** [Isomorphic Unfetch](https://github.com/developit/unfetch/tree/master/packages/isomorphic-unfetch) (it's like axios, but waaay smaller)
- **Interacting with the database:** TBD

## Getting started

1. Make sure to read [the wiki](https://github.com/Access-America/Citizen-Center/wiki) if you're not 100% on what the Citizen Portal is
2. `git clone` repo

3.  Check out the `master` branch:
    ```sh
    git checkout master
    ```
4.  Create a new branch using Git Flow branch naming structure and mention Github Issue number:
    ```sh
    git checkout -b #12345/my-fun-thing
    ```
5.  Check out individual READMEs in frontend and backend root directories for specific setup instructions

## Writing commit messages

- So everyone can more easily read your work, please follow [the Conventional Commits standard](https://www.conventionalcommits.org/) for your commit messages
- When working on an issue, [reference it](https://help.github.com/en/github/writing-on-github/autolinked-references-and-urls#issues-and-pull-requests) in your commit message: `#17 add conventional commits`


## Submitting a pull request

1. Test your work
2. Pull from `master` to ensure you're up to date
3. Merge `master` into your branch
4. Test your work again
5. Create a pull request
6. Summarize your changes and [mention any relevant issues](https://help.github.com/en/github/writing-on-github/autolinked-references-and-urls#issues-and-pull-requests)
7. Submit your PR

## I'm ready! But what should I work on?

Great question. Whatever you want!

We have our own priorities for our 2020 launch which you can see:

- Broken down a bit in our [Milestones](https://github.com/Access-America/Citizen-Center/milestones), and
- Fully broken down in the [issues](https://github.com/Access-America/Citizen-Center/issues)

Are we missing something super important? [Create an issue](https://github.com/Access-America/Citizen-Center/issues/new), assign it to yourself, and get going!
