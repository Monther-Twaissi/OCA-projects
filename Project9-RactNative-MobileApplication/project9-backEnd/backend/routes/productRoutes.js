import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';
import {
  createProduct,
  getAllProducts,
  getCategoryProducts,
  deleteProduct,
  getProductById,
  updateProduct,
  findProductByName,
  getPopularProducts,
} from '../controllers/productController.js';

const router = express.Router();

router.route('/').get(getAllProducts).post(createProduct);
router.route('/category/:id').get(getCategoryProducts);
router.route('/search/:name').get(findProductByName);
router.route('/popular').get(getPopularProducts);
router
  .route('/:id')
  .get(getProductById)
  .delete(deleteProduct)
  .put(updateProduct);

export default router;
