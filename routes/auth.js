import express from 'express';
import { authController } from '../controllers/index.js';
import { userController } from '../controllers/index.js';
import { authentication } from '../middleware/auth.js';
import { validateFields } from '../middleware/validate.js';
import {userSchema} from '../schemas/index.js';

const router = express.Router();

router.post('/signup', validateFields(userSchema.signUpSchema), authController.signUp);
router.post('/login',  validateFields(userSchema.loginSchema), authController.login);
router.post('/logout', authController.logout);
router.get('/me', authentication, userController.currentUser);

export default router;
