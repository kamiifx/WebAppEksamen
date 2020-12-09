import {inquireController, officeController} from "../controllers/index.js";

import express from "express";
import {authentication} from "../middleware/auth.js";
import {validateFields} from "../middleware/validate.js";
import {inquireSchema} from "../schemas/index.js";

const router = express.Router();

router.post('/', authentication, validateFields(inquireSchema.createInquireSchema), inquireController.create);
router.get(`/:id`, inquireController.get);
router.get('/', inquireController.list);
export default router;