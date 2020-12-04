import express from 'express';
import {officeController, userController} from '../controllers/index.js';

const router = express.Router();

router.get(`/:id`, userController.get);
router.get('/', userController.list);
router.post('/', userController.create);

router.delete('/:id', userController.remove);

export default router;