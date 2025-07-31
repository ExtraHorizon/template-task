# Getting Started

This is a basic template for an Extra Horizon task.
It is designed to help you quickly set up a new task with the necessary configuration and dependencies.

It includes a simple example of how to use the Extra Horizon SDK to interact with the platform.
The SDK requires credentials to access the Extra Horizon platform, which are accepted through environment variables.
The credentials are automatically injected into the task environment by the Extra Horizon CLI, based on `executionCredentials` specified in `task-config.json`.

## Deploying the Task

The easiest way to deploy the task is using the Extra Horizon CLI.
An example of how to deploy the task is shown below.
More information can be found in the [Extra Horizon CLI documentation](https://docs.extrahorizon.com/cli/).

```sh
# Install the dependencies
npm install

# Sync the task with the Extra Horizon platform
exh tasks sync --path ./task-config.json
```
