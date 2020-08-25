[![Maintainability](https://api.codeclimate.com/v1/badges/86a32f9feb586dcafb43/maintainability)](https://codeclimate.com/github/Access-America/Citizen-Center/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/test_coverage)](https://codeclimate.com/github/codeclimate/codeclimate/test_coverage)  
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/ffe056e0994346dc9fd55637ed9cff65)](https://www.codacy.com/gh/Access-America/Citizen-Center?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Access-America/Citizen-Center&amp;utm_campaign=Badge_Grade)  

# [Humanity Forward's Citizen Center](https://www.beautiful.ai/player/-M7TXW9Wpl9Jqh3Azfwc/citizenship)

## Getting Started

The Citizen Center is an open-source platform in development by [Humanity Forward](https://movehumanityforward.com/) and the [Yang Gang](https://www.youtube.com/watch?v=6Is7tdnnbYI). Through a familiar dashboard interface with a decentralized identity model, Americans will be able to connect with their government in a more secure, more simple and more instantaneous manner to propel our democracy into the 21st century. 

Not quite sure what we're doing? [Check out our wiki for more information](https://github.com/Citizenship-Portal/Citizen-Center/wiki)

## Project overview

### Right now: Giving the project a presence

- [x] Roadmap
- [x] [Architecture](https://i.imgur.com/NyCJfwR.png)
- [x] CI/CD
- [x] Adding GitHub Issues based on Roadmap (feel free to create your own issues or pick up ones based on milestones)
- [ ] Breaking down Epics into smaller issues
- [ ] [UI/UX](https://www.figma.com/file/h0KXgHOhxSyttyzsosd2aN/Citizenship-Center?node-id=245%3A395)


### What's next: MVP

- [ ] SAML/OIDC sign-in with Guest level access. More privacy tiers will be provisioned based on the [Just-In-Time principle](https://www.cyberark.com/what-is/just-in-time-access/).
- [ ] Sign in form for trust level: Guest
- [ ] Option to subscribe to continuous updates about the project
- [ ] Account page to edit information
- [ ] Connecting a bank account
- [ ] Opt-in for Humanity Forward's UBI pilot program
- [ ] Trust levels: 
    - [ ] Visitor (no trust)
    - [ ] Guest (email/password)
    - [ ] Resident (out of scope for MVP, dependent on decentralized authentication strategy)
    - [ ] Citizen (out of scope for MVP, dependent on decentralized authentication strategy) 
- [ ] Register to vote

### In the [roadmap](https://github.com/Citizenship-Portal/Citizen-Center/projects/2?fullscreen=true)

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

## Contributing

Make sure you read the [contributor guidelines](https://github.com/Citizenship-Portal/Citizen-Center/blob/master/CONTRIBUTING.md) before you move on :slightly_smiling_face:

## Setup

1. `git clone` repo

2. Check out the `master` branch:
    ```sh
    git checkout master
    ```
2. Create a new branch using Git Flow branch naming structure and mention Github Issue number:
    ```sh
    git checkout -b #12345/my-fun-thing
    ```
3. Check out individual READMEs in frontend and backend root directories for specific setup instructions
