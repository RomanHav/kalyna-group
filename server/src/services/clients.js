// src/services/clients.js

import { ClientsCollection } from '../db/models/clients.js';

export const getAllClients = async () => {
  try {
    return await ClientsCollection.find();
  } catch (error) {
    console.error('Error fetching clients:', error);
    throw error;
  }
};

export const getClientByID = async (clientId) => {
    try {
        const client = await ClientsCollection.findById(clientId);
        if (!client) {
            throw new Error('Client not found');
        }
        return client;
    } catch (error) {
        console.error('Error fetching client by ID:', error);
        throw error;
    }
};

export const createClient = async (payload) => {
    try {
        return await ClientsCollection.create(payload);
    } catch (error) {
        console.error('Error creating client:', error);
        throw error;
    }
};
