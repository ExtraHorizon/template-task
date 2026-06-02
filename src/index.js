import { exh } from './exh.js';

/**
 * Entry point for the Task Service Function, receives the Task it was triggered by as an argument.
 * @param {import('@extrahorizon/javascript-sdk').Task} task 
 */
export async function handler(task) {
  /* Print the received Task */
  console.log('Task:', task);

  /* Use the sdk to interact with Extra Horizon */
  console.log('User:', await exh.users.me());

  // Your code here
}
