import * as dotenvSafe from 'dotenv-safe';

dotenvSafe.config();

export const exhConfig = {
  host: process.env.API_HOST,
  consumerKey: process.env.API_OAUTH_CONSUMER_KEY,
  consumerSecret: process.env.API_OAUTH_CONSUMER_SECRET,
  token: process.env.API_OAUTH_TOKEN,
  tokenSecret: process.env.API_OAUTH_TOKEN_SECRET,
};
