import { Router } from 'express';
import {
  creationClientController,
  getAllClientsController,
  getClientByIdController,
} from '../controllers/clients.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/clients', ctrlWrapper(getAllClientsController));
router.get('/clients/:clientId', ctrlWrapper(getClientByIdController));
router.post('/clients', ctrlWrapper(creationClientController));
export default router;
