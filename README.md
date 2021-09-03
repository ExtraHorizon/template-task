# %{PROJECT_NAME}

## Usage

- Set your environment variables first! We need the credentials for the task publisher user on AWS:
  - AWS_ACCESS_KEY_ID
  - AWS_SECRET_ACCESS_KEY
  
  These are needed in each environment. The development, staging and production environments are already created while initializing this repository
- checkout the `init` branch
- create a `feature/` branch
- edit this readme to some more informative text
- commit
- create a pull request to `dev`
- when merged, delete the `init` branch

Github actions will update the Task for you.
