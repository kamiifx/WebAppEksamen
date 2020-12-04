import express from 'express';
import { userController } from '../controllers/index.js';
import {authentication, authorization} from '../middleware/auth.js'
const router = express.Router();

router.get(`/:id`,[authentication, authorization('admin')], userController.get);
router.get('/', [authentication, authorization('admin')], userController.list);
router.post('/', userController.create);

router.delete('/:id', userController.remove);

export default router;