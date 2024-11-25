// src/services/klaviyoService.js

import axios from 'axios';
import { env } from '../utils/env.js';

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

export const createProfileInKlaviyo = async (client) => {
    const data = {
        data: {
            type: 'profile',
            attributes: {
                email: client.email,
                phone_number: client.phoneNumber || null,
                first_name: client.name,
                location: {
                    country: client.location,
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
            // Profile already exists
            console.log(`Profile already exists for ${client.email}`);
            // Get existing profile ID
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
