import { ClientsCollection } from '../db/models/clients.js';

export const getAllClients = async () => {
  const clients = await ClientsCollection.find();
  return clients;
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
    throw new Error('Failed to fetch client');
  }
};

export const createClient = async (payload) => {
  const postClient = await ClientsCollection.create(payload);
  return postClient;
};
