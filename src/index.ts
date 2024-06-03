import { Task } from '@extrahorizon/javascript-sdk';
import { exh } from './exh';

export async function handler(task: Task) {
  /* Print the received Task */
  console.log('Task:', task);

  /* Use the sdk to interact with Extra Horizon */
  console.log('User:', await exh.users.me());

  // Your code here
}
