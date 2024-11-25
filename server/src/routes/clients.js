// src/routes/clients.js

import express from 'express';
import {
    getAllClientsController,
    getClientByIdController,
    creationClientController,
} from '../controllers/clients.js';

const router = express.Router();

router.get('/', getAllClientsController);
router.get('/:clientId', getClientByIdController);
router.post('/', creationClientController);

export default router;
