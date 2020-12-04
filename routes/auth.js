import express from 'express';
import { authController } from '../controllers/index.js';
import { userController } from '../controllers/index.js';
import { authentication } from '../middleware/auth.js';
//import { validateFields } from '../middleware/validate.js';
//import { loginSchema } from '../schemas/user.js';

const router = express.Router();

router.post('/signUp', authController.signUp);
router.post('/login',  authController.login);
router.post('/logout', authController.logout);
router.get('/me', authentication, userController.currentUser);

export default router;
