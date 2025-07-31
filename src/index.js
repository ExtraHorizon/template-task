import { exh } from './exh.js';

export async function handler(task) {
  /* Print the received Task */
  console.log('Task:', task);

  /* Use the sdk to interact with Extra Horizon */
  console.log('User:', await exh.users.me());

  // Your code here
}
