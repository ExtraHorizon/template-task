# %{PROJECT_NAME}

## Usage

1) Set your environment variables first! We need the credentials for the tasks on AWS labmda
To do this, fill in your .env files --> `.env.dev` and/or `.env.stage` and/or `.env.production`
2) Run `q generate-lambda-user`. This will create a new user with just enough permissions to execute the task. The result will be stored temporarily in the environment secrets. 
3) Create a `feature/` branch
4) Edit this readme to some more informative text
5) Commit & Push
6) Create a pull request to `dev`

Github actions will create and update the Task for you.
