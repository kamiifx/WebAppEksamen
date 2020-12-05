import express from 'express';
import { officeController } from '../controllers/index.js';
import {authentication, authorization} from '../middleware/auth.js'
const router = express.Router();

router.get(`/:id`, officeController.get);
router.get('/', officeController.list);
router.post('/', [authentication, authorization('admin')], officeController.create);
router.put('/:id', officeController.update);
router.delete('/:id', officeController.remove);

export default router;
