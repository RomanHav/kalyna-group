// src/services/klaviyoService.js
import axios from 'axios';
import { env } from '../utils/env.js';
import { ClientsCollection } from '../db/models/clients.js';

const API_KEY = env('KLAVIYO_API_KEY');
const LIST_ID = env('KLAVIYO_LIST_ID');

const klaviyoAxios = axios.create({
    baseURL: 'https://a.klaviyo.com/api',
    headers: {
        accept: 'application/vnd.api+json',
        revision: '2023-02-22',
        'content-type': 'application/vnd.api+json',
        Authorization: `Klaviyo-API-Key ${API_KEY}`,
    },
});

export const fetchClientsFromMongoDB = async () => {
    try {
        const clients = await ClientsCollection.find();
        console.log('Fetched clients from MongoDB:', clients.length);
        return clients;
    } catch (error) {
        console.error('Error fetching clients:', error);
        throw error;
    }
};

export const createProfileInKlaviyo = async (client) => {
    const data = {
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
    };

    try {
        const response = await klaviyoAxios.post('/profiles', data);
        console.log(`Profile created in Klaviyo for ${client.email}`);
        return response.data.data.id;
    } catch (error) {
        if (error.response && error.response.status === 409) {
            // Профиль уже существует
            console.log(`Profile already exists for ${client.email}`);
            // Получаем существующий профиль
            return error.response.data.errors[0]?.meta?.id;
        } else {
            console.error(
                `Error creating profile for ${client.email}:`,
                error.response?.data || error.message,
            );
            throw error;
        }
    }
};

export const addProfilesToList = async (profileIds) => {
    const data = {
        data: profileIds.map((id) => ({
            type: 'profile',
            id: id,
        })),
    };

    try {
        const response = await klaviyoAxios.post(
            `/lists/${LIST_ID}/relationships/profiles`,
            data,
        );
        console.log(`Profiles added to list. Status: ${response.status}`);
    } catch (error) {
        console.error(
            `Error adding profiles to list:`,
            error.response?.data || error.message,
        );
        throw error;
    }
};

export const syncClientsWithKlaviyo = async (clients) => {
    try {
        const CONCURRENCY_LIMIT = 5; // Настройте в соответствии с ограничениями Klaviyo
        const profileIds = [];

        for (let i = 0; i < clients.length; i += CONCURRENCY_LIMIT) {
            const clientsBatch = clients.slice(i, i + CONCURRENCY_LIMIT);

            // Создаем профили параллельно в рамках ограничения
            const createProfilePromises = clientsBatch.map((client) =>
                createProfileInKlaviyo(client),
            );
            const batchProfileIds = await Promise.all(createProfilePromises);
            profileIds.push(...batchProfileIds);
        }

        // Добавляем все созданные профили в список
        await addProfilesToList(profileIds);
    } catch (error) {
        console.error('Error during synchronization:', error);
        throw error;
    }
};
