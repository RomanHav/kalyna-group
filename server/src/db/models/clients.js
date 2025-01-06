// src/db/models/clients.js

import mongoose from 'mongoose';

const clientsSchema = new mongoose.Schema({
    name: String,
    services: [],
    description: String,
    budget: [],
    email: String,
    location: String,
});

export const ClientsCollection = mongoose.model('Client', clientsSchema);
