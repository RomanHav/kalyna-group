// src/syncClients.js
import { initMongoDB, closeMongoDB } from './db/initMongoDB.js';
import {
    fetchClientsFromMongoDB,
    syncClientsWithKlaviyo,
} from './services/servicesKlaviyo.js';

const syncMongoWithKlaviyo = async () => {
    try {
        await initMongoDB();
        const clients = await fetchClientsFromMongoDB();
        if (clients.length > 0) {
            await syncClientsWithKlaviyo(clients);
        } else {
            console.log('No clients to sync.');
        }
    } catch (error) {
        console.error('Error during synchronization:', error);
    } finally {
        await closeMongoDB();
    }
};

syncMongoWithKlaviyo();
