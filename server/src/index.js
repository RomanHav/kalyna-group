import { initMongoDB } from './db/initMongoDB.js';
import { startServer } from './app.js';

const bootstrap = async () => {
  await initMongoDB();
  startServer();
};

bootstrap();
