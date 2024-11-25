// src/db/initMongoDB.js

import mongoose from 'mongoose';
import { env } from '../utils/env.js';

export const initMongoDB = async () => {
    try {
        const uri = env('MONGODB_URI');

        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB connection successfully established!');
    } catch (error) {
        console.error('Error while setting up MongoDB connection:', error);
        throw error;
    }
};
