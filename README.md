# Getting started with your new task

## Local testing

Typically a task runs in the context of the Extra Horizon platform. However, you can test the task locally by invoking it through `invoke.js` (or use `yarn start`). 
This allows you to do some local testing.

You need to configure some environment variables so that the SDK can properly authenticate against the Extra Horizon cloud.
Edit `.env.example`, fill in all the environment variables there and save the file to `.env`.

## Deploying the task
By default the task is setup to be deployed with the Extra Horizon CLI.

The environment variables can be replaced in the `task-config.json` file (as they're defined in the `.env` file) or
as environment variables to the CLI task sync (`exh tasks sync`).

An example of how to deploy the task is shown below.
More information can be found in the [Extra Horizon CLI documentation](https://docs.extrahorizon.com/cli/).

```sh
# Transpile the code and include the dependencies in the build folder
yarn build

# Set the environment variables to forward to the task
export TASK_API_HOST="<Your Extra Horizon host>";
export TASK_API_OAUTH_CONSUMER_KEY="...";
export TASK_API_OAUTH_CONSUMER_SECRET="...";
export TASK_API_OAUTH_TOKEN="...";
export TASK_API_OAUTH_TOKEN_SECRET="...";

# Deploy the task
exh tasks sync --path ./task-config.json
```

# Scripts

## building

To build the project

`npm run build` or `yarn build`

## running

`npm run start` or `yarn start`

## testing

`npm run test` or `yarn test`

