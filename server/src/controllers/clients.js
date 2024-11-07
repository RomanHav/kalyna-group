import {
  createClient,
  getAllClients,
  getClientByID,
} from '../services/clients.js';
import createHttpError from 'http-errors';

export const getAllClientsController = async (req, res, next) => {
  const clients = await getAllClients();

  res.json({
    status: 200,
    message: 'Successfully found clients!',
    data: clients,
  });
};

export const getClientByIdController = async (req, res, next) => {
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
};

export const creationClientController = async (req, res, next) => {
  const { name, email, phoneNumber, message, selectOption, location } =
    req.body;

  if (!email || !name || !selectOption || !location) {
    throw createHttpError(
      404,
      'Email, name, selectOption and location are required',
    );
  }

  const newContact = {
    name,
    email: email || '',
    phoneNumber,
    selectOption,
    message,
    location,
  };

  const postedClient = await createClient(newContact);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a client!',
    data: postedClient,
  });
};
