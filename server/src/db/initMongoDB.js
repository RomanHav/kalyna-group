import mongoose from 'mongoose';
import axios from 'axios';
import { env } from '../utils/env.js';
import { ClientsCollection } from '../db/models/clients.js';

export const initMongoDB = async () => {
  try {
    const user = env('MONGODB_USER');
    const password = env('MONGODB_PASSWORD');
    const cluster = env('MONGODB_URL');
    const db = env('MONGODB_DB');

    await mongoose.connect(
      `mongodb+srv://${user}:${password}@${cluster}/${db}?retryWrites=true&w=majority&appName=kalynagroup`,
    );
    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.log('Error while setting up mongo connection:', error);
    throw error;
  }
};

const fetchClientsFromMongoDB = async () => {
  try {
    const clients = await ClientsCollection.find();
    console.log('Fetched clients from MongoDB:', clients.length);
    return clients;
  } catch (error) {
    console.error('Error fetching clients:', error);
    throw error;
  }
};

const createProfileInKlaviyo = async (client) => {
  const API_KEY = env('KLAVIYO_API_KEY');

  const options = {
    method: 'POST',
    url: 'https://a.klaviyo.com/api/profiles',
    headers: {
      accept: 'application/vnd.api+json',
      revision: '2023-02-22',
      'content-type': 'application/vnd.api+json',
      Authorization: `Klaviyo-API-Key ${API_KEY}`,
    },
    data: {
      data: {
        type: 'profile',
        attributes: {
          email: client.email,
          phone_number: client.phoneNumber || null,
          first_name: client.name,
          location: {
            city: client.location,
          },
          properties: {
            selectOption: client.selectOption,
            message: client.message || 'No message provided',
          },
        },
      },
    },
  };

  try {
    const response = await axios.request(options);
    console.log(`Profile created in Klaviyo for ${client.email}`);
    return response.data.data.id;
  } catch (error) {
    console.error(
      `Error creating profile for ${client.email}:`,
      error.response?.data || error.message,
    );
    throw error;
  }
};

const addProfilesToList = async (profileIds) => {
  const API_KEY = env('KLAVIYO_API_KEY');
  const LIST_ID = env('KLAVIYO_LIST_ID');

  const options = {
    method: 'POST',
    url: `https://a.klaviyo.com/api/lists/${LIST_ID}/relationships/profiles`,
    headers: {
      accept: 'application/vnd.api+json',
      revision: '2023-02-22',
      'content-type': 'application/vnd.api+json',
      Authorization: `Klaviyo-API-Key ${API_KEY}`,
    },
    data: {
      data: profileIds.map((id) => ({
        type: 'profile',
        id: id,
      })),
    },
  };

  try {
    const response = await axios.request(options);
    console.log(`Profiles added to list. Status: ${response.status}`);
  } catch (error) {
    console.error(
      `Error adding profiles to list:`,
      error.response?.data || error.message,
    );
    throw error;
  }
};

const syncClientsWithKlaviyo = async (clients) => {
  try {
    const CONCURRENCY_LIMIT = 5; // Adjust based on Klaviyo's rate limits
    const profileIds = [];

    for (let i = 0; i < clients.length; i += CONCURRENCY_LIMIT) {
      const clientsBatch = clients.slice(i, i + CONCURRENCY_LIMIT);

      // Create profiles in parallel within the concurrency limit
      const createProfilePromises = clientsBatch.map((client) =>
        createProfileInKlaviyo(client),
      );
      const batchProfileIds = await Promise.all(createProfilePromises);
      profileIds.push(...batchProfileIds);
    }

    // Add all created profiles to the list
    await addProfilesToList(profileIds);
  } catch (error) {
    console.error('Error during synchronization:', error);
    throw error;
  }
};

export const syncMongoWithKlaviyo = async () => {
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
    await mongoose.disconnect();
    console.log('MongoDB connection closed.');
  }
};

syncMongoWithKlaviyo();
