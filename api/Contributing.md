# Contributing to the Citizen Center

- **If you'd like to be actively involved with the team,** you can [join our Discord](https://discord.gg/n74rXDV), where you can chat with us about the vision, new features, ideas, design, and get access to more documentation + ways to collaborate.
- **Anyone outside the team** is welcome to collaborate with us through [issues](https://github.com/Citizenship-Portal/Backend/issues) and [pull requests](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork).

## Tech stack

The Citizen Center is a [Nuxt.js](https://nuxtjs.org/) app built on an a lightweight [Flask](https://github.com/pallets/flask) backend hosted on [Azure](https://azure.microsoft.com/en-us/), utilizing [Azure Functions](https://docs.microsoft.com/en-us/azure/azure-functions/functions-overview) for the API and [Azure SQL](https://docs.microsoft.com/en-us/azure/azure-sql/database/) for the database with [Redis](https://redis.io/documentation) for caching. The frontend is written in [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) and the backend is written in [Python](https://docs.python.org/3/).

### Working on the Nuxt.js client

- **CSS:** [Tailwind](https://tailwindcss.com/#what-is-tailwind).
- **Interacting with APIs:** [Isomorphic Unfetch](https://github.com/developit/unfetch/tree/master/packages/isomorphic-unfetch) (it's like axios, but waaay smaller)
- **Interacting with the database:** TBD

## Getting started

1. Make sure to read [the wiki](https://github.com/https://github.com/Citizenship-Portal/backend/wiki) if you're not 100% on what the Citizen Portal is (TODO: create the wiki)
2. See what's up in the [projects](https://github.com/Citizenship-Portal/Backend/projects) and [issues](https://github.com/Citizenship-Portal/Backend/issues)
3. [Set up commit signing](https://help.github.com/en/github/authenticating-to-github/signing-commits)

## Writing commit messages

- So everyone can more easily read your work, please follow [the Conventional Commits standard](https://www.conventionalcommits.org/) for your commit messages
- When working on an issue, [reference it](https://help.github.com/en/github/writing-on-github/autolinked-references-and-urls#issues-and-pull-requests) in your commit message

This commit, in which I add this section of this document, might look like:
`docs(contrib): #17 add conventional commits`

If I was doing this from a fork, I would instead say:
`docs(contrib): Citizenship-Portal/Backend#17 add conventional commits`

## Submitting a pull request

1. Test your work
2. Bring your work up to date by rebasing it onto this repo's `master` branch (see below)
3. Test your work again
4. Create a pull request
5. Change the target branch of the PR to `dev`
6. Summarize your changes and [mention any relevant issues](https://help.github.com/en/github/writing-on-github/autolinked-references-and-urls#issues-and-pull-requests)
7. Submit your PR

### Rebasing

New to rebasing? It can be daunting the first time, but we'll get through this together.

#### Rebasing when collaborating from a fork

1. The first time you do this, add this repo as a remote in your forked repo:

   ```sh
   git remote add upstream https://github.com/Citizenship-Portal/Backend.git
   git fetch upstream
   ```

2. Rebase your local branch onto `upstream/master`

   ```sh
   git checkout my-branch
   git rebase upstream/master
   ```

3. Resolve the merge conflicts, choosing to keep your changes wherever you made them, and for all other conflicts choosing what is on `upstream/master`
4. When finished, force-push your newly in-sync branch:

   ```sh
   git push -f origin my-branch
   ```

5. Create a pull request across forks, making note of your changes

#### Rebasing when collaborating from within this repo

1. Rebase your local branch onto `master`

   ```sh
   git checkout my-branch
   git rebase master
   ```

2. Resolve the merge conflicts, choosing to keep your changes wherever you made them, and for all other conflicts choosing what is on `master`
3. When finished, force-push your newly in-sync branch:

   ```sh
   git push -f origin my-branch
   ```

4. Create a pull request, making note of your changes

## But what should I work on?

Great question. Whatever you want!

We have our own priorities for our 2020 launch which you can see:

- summarized in our [README](https://github.com/Citizenship-Portal/Backend/blob/master/README.md),
- broken down a bit more in our [Projects](https://github.com/Citizenship-Portal/Backend/projects), and
- fully broken down in the [issues](https://github.com/Citizenship-Portal/Backend/issues)

Are we missing something super important? [Create an issue](https://github.com/Citizenship-Portal/Backend/issues/new), assign it to yourself, and get going!
