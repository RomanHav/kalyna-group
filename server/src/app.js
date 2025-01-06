// src/app.js

import express from 'express';
import cors from 'cors'; // Import the cors package
import { initMongoDB } from './db/initMongoDB.js';
import clientsRoutes from './routes/clients.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

export const startServer = async () => {
  try {
    await initMongoDB();

    app.use(cors());

    app.use(express.json());

    // Log incoming requests
    app.use((req, res, next) => {
      console.log(`${req.method} ${req.url}`);
      next();
    });

    app.use('/clients', clientsRoutes);

    // Error handling middleware
    app.use(errorHandler);

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
    process.exit(1);
  }
};
