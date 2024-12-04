import { Router } from 'express';
import {
  createItem,
  getItems,
  getItemById,
  updateItem,
  deleteItem,
  addRating,
  removeRating
} from '../controllers/itemController.js';
import { validateItem, validateItemId } from '../validators/itemValidator.js';
import { validateRequest } from '../middlewares/errorHandler.js';
import { authenticate } from '../middlewares/authMiddleware.js';
import upload from '../middlewares/uploadMiddleware.js';

const itemRoutes = Router();

itemRoutes.post('/', authenticate, upload.single('image') ,validateItem, validateRequest, createItem);
itemRoutes.get('/', getItems);
itemRoutes.get('/:id', validateItemId, validateRequest, getItemById);
itemRoutes.put('/:id', [...validateItem, ...validateItemId], validateRequest, updateItem);
itemRoutes.delete('/:id', authenticate, validateItemId, validateRequest, deleteItem);
itemRoutes.post('/items/rating', addRating)
itemRoutes.delete('/items/:id/rating', removeRating);

export default itemRoutes;
