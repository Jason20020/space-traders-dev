// src/app.ts

import { SpaceTraderAPI } from './api';
import dotenv from 'dotenv';

dotenv.config();

const apiToken = process.env.ACCESS_TOKEN;
if (!apiToken) {
  throw new Error('API token is missing');
}

const spaceTraderAPI = new SpaceTraderAPI(apiToken);

async function main() {
  try {
    const agent = await spaceTraderAPI.getMyAgent();
    console.log('My Agent:', agent);
  } catch (error) {
    console.error('Error in main:', error);
  }
}

export function startApp() {
    main();
}