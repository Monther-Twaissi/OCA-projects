import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';
import {
  createCategory,
  getCategories,
  deleteCategory,
  getCategoryById,
  updateCategory,
} from '../controllers/categoryController.js';

const router = express.Router();

router.route('/').get(getCategories).post(createCategory);

router
  .route('/:id')
  .get(getCategoryById)
  .delete(deleteCategory)
  .put(updateCategory);

export default router;
