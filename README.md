# Project Name

> Project description

## Related Projects

  - https://github.com/HRTyrell/BalajiSathiya
  - https://github.com/HRTyrell/BTanaka11
  - https://github.com/HRTyrell/gthellter
  - https://github.com/HRTyrell/babsjohnson

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Constructing a Git Workflow

1. To begin with each feature should be worked on in a seperate branch
1. To do so first grab the latest pushed code
1. ***git checkout main*** (jumping to main branch)
1. ***git fetch origin*** (Pull latest commits)
1. ***git reset --hard origin/main*** (throws away all staged/unstaged changes resets to origin/master)
1. ***git checkout -b BRANCH_NAME*** (creates a new branch for a feature to be worked on)
1. ***git status | add | commit*** (within this branch to update and write code for it)
1. ***git push -u origin BRANCH_NAME*** (pushes completed feature to origin/main)
1. Now the information must be pulled again when you start to keep up with others who have created features

## Opening Day Work with Git
1. Start with ***git fetch*** (to see whether there is any new commits to pull)
1. Then ***git checkout main*** (to get the main branch locally up to date)
1. ***git pull*** (will pull all the commited information back to the local main branch)
1. ***git checkout BRANCH_NAME*** (takes us back to the fetature branch)
1. ***git merge origin*** (merge the information from main to the branch)
1. fix merge conflicts in VSC by keeping the stuff you want from the previous commit and getting rid of everything else
1. Once Complete and features ready to commit ***git checkout -b BRANCH_NAME*** (to send it back to main) 

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

