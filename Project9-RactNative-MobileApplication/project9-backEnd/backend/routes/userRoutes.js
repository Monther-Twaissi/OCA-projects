import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';
import {
  authUser,
  registerUser,
  makeUserOrder,
  getAllUsers,
  createNewUser,
} from '../controllers/userController.js';

const router = express.Router();

router.route('/').post(registerUser);
router.post('/create', createNewUser);
router.post('/login', authUser);
router.post('/order/:id', makeUserOrder);
router.get('/all', getAllUsers);

// router.route('/:id')
// .delete(deleteUser)
// .get(getUserById)
// .put(updateUser);

export default router;
