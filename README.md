# %{PROJECT_NAME}

## Usage

1) Set your environment variables first! We need the credentials for the task publisher user on AWS:
  - AWS_ACCESS_KEY_ID
  - AWS_SECRET_ACCESS_KEY
  
  These are needed in each environment. The development, staging and production environments are already created while initializing this repository
2) Next you need to fill in your .env files --> .env.dev and/or .env.stage and/or .env.production
3) Run `q generate-lambda-user`. This will create a new user with just enough permissions to execute the task. The result will be stored temporarily in the environment secrets. 
4) Create a `feature/` branch
5) Edit this readme to some more informative text
6) Commit & Push
7) Create a pull request to `dev`
8) When merged, delete the `init` branch

Github actions will create and update the Task for you.
