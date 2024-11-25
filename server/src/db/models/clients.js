// src/db/models/clients.js

import mongoose from 'mongoose';

const clientsSchema = new mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String,
    selectOption: String,
    message: String,
    location: String,
});

export const ClientsCollection = mongoose.model('Client', clientsSchema);
