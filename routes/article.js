import express from 'express';
import { articleController } from '../controllers/index.js';
import {authentication, authorization} from '../middleware/auth.js'
const router = express.Router();

router.get(`/:id`, articleController.get);
router.get('/', articleController.list);
router.post('/', [authentication, authorization('admin')], articleController.create);
router.put('/:id', [authentication, authorization('admin')], articleController.update);
router.delete('/:id', [authentication, authorization('admin')], articleController.remove);

export default router;