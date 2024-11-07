import { serverKalyna } from './serverKalyna.js';
import { initMongoDB } from './db/initMongoDB.js';

const bootstrap = async () => {
  await initMongoDB();
  serverKalyna();
};

bootstrap();
