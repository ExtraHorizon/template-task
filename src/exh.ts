import { createClient } from '@extrahorizon/javascript-sdk';
import { requestLogger } from 'axios-logger';
import { exhConfig } from './config';

export const exh = createClient({
  ...exhConfig,
  requestLogger,
});
