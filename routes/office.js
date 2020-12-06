import express from 'express';
import { officeController } from '../controllers/index.js';
import {authentication, authorization} from '../middleware/auth.js'
import { validateFields } from '../middleware/validate.js';
import {officeSchema} from '../schemas/index.js';

const router = express.Router();

router.get(`/:id`, officeController.get);
router.get('/', officeController.list);
router.post('/', [authentication, authorization('admin')],validateFields(officeSchema.createOfficeSchema), officeController.create);
router.put('/:id', officeController.update);
router.delete('/:id', officeController.remove);

export default router;
