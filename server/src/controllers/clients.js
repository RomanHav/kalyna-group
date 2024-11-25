// src/controllers/clients.js

import {
    getAllClients,
    getClientByID,
    createClient,
} from '../services/clients.js';
import createHttpError from 'http-errors';
import {
    createProfileInKlaviyo,
    addProfilesToList,
} from '../services/klaviyoService.js';

export const getAllClientsController = async (req, res, next) => {
    try {
        const clients = await getAllClients();
        res.status(200).json({
            status: 200,
            message: 'Successfully found clients!',
            data: clients,
        });
    } catch (error) {
        next(error);
    }
};

export const getClientByIdController = async (req, res, next) => {
    try {
        const { clientId } = req.params;
        const client = await getClientByID(clientId);

        if (!client) {
            throw createHttpError(404, 'Client not found');
        }

        res.status(200).json({
            status: 200,
            message: `Successfully found client with id ${clientId}!`,
            data: client,
        });
    } catch (error) {
        next(error);
    }
};

export const creationClientController = async (req, res, next) => {
    const { name, email, phoneNumber, message, selectOption, location } =
        req.body;

    if (!email || !name || !selectOption || !location) {
        return next(
            createHttpError(
                400,
                'Email, name, selectOption, and location are required',
            ),
        );
    }

    const newContact = {
        name,
        email,
        phoneNumber,
        selectOption,
        message,
        location,
    };

    try {
        // Create client in MongoDB
        const postedClient = await createClient(newContact);

        // Synchronize client with Klaviyo
        const profileId = await createProfileInKlaviyo(newContact);
        await addProfilesToList([profileId]);

        res.status(201).json({
            status: 201,
            message: 'Successfully created a client and synchronized with Klaviyo!',
            data: postedClient,
        });
    } catch (error) {
        next(error);
    }
};
